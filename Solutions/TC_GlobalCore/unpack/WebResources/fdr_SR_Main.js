///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>

var SR_main = (function (window, document) {

    //variables
    var formType;
    var userSettings;
    var LCID;
    var clientUrl;
    var resexResourceName;
    var globalObj;
    var currentWebApi;
    var isOffLine;
    var clientType;
    var SR_status;
    var SR_state;
    var SR_Status_origin;

    var statusMappingActive = {

        "Draft": ["Draft", "Submitted"],
        "1": [1, 794600010],
        "Submitted": ["Submitted", "Admin Review", "Cancellation Pending"],
        "794600010": [794600010, 794600006, 794600009],
        "Admin Review": ["Admin Review", "Additional Info Required", "Technical Review", "Cancellation Pending"],
        "794600006": [794600006, 794600000, 794600002, 794600009],
        "Additional Info Required": ["Additional Info Required", "Admin Review", "Technical Review"],
        "794600000": [794600000, 794600006, 794600002],
        "Technical Review": ["Technical Review", "Additional Info Required", "Pending Inspection", "Cancellation Pending", "Refused", "Approved"],
        "794600002": [794600002, 794600000, 794600003, 794600009, 794600008, 794600007],
        "Pending Inspection": ["Pending Inspection", "Cancellation Pending", "Post Inspection Review"],
        "794600003": [794600003, 794600009, 794600004],
        "Post Inspection Review": ["Post Inspection Review", "Cancellation Pending", "Refused", "Approved"],
        "794600004": [794600004, 794600009, 794600008, 794600007],
        "Refused": ["Refused", "Completed"],
        "794600008": [794600008, 794600005],
        "Cancellation Pending": ["Cancellation Pending"],
        "794600009": [794600009],
        "Completed": ["Completed"],
        "794600005": [794600005],
        "Approved": ["Approved", "Completed"],
        "794600007": [794600007, 794600005]
    };

    var statusMappingInactive = {

        "Draft": ["Canceled"],
        "1": [794600001],
        "Cancellation Pending": ["Canceled"],
        "794600009": [794600001],
        "Completed": ["Closed"],
        "794600005": [2]
    };


    //********************private methods*******************

    function SetStateChangebility (formContext) {

        SR_status = glHelper.GetOptionsetValue(formContext, "statuscode");
        SR_state = glHelper.GetOptionsetValue(formContext, "statecode");

        //if status reason was Draft, Cancellation Pending, or Completed then user can change State
        if (SR_status == 1
            || SR_status == 794600009 || SR_status == 794600005)
            glHelper.SetDisabled(formContext, "header_statecode", false);
        //else state is read only
        else glHelper.SetDisabled(formContext, "header_statecode", true);
    }


    //********************private methods end***************

    //********************public methods***************
    return {


        OnLoad: function (executionContext) {

            var globalContext = Xrm.Utility.getGlobalContext();
            var formContext = executionContext.getFormContext();
            isOffLine = glHelper.isOffline(executionContext);
            clientType = glHelper.getClientType(executionContext);
            isOnLoad = true;

            if (isOffLine && clientType > 0) {

                //mobile or outlook, offline first
                currentWebApi = Xrm.WebApi.offline;
                clientUrl = "https://localhost:2525";
            } else {

                //web, online
                currentWebApi = Xrm.WebApi.online;
                clientUrl = globalContext.getClientUrl();
            }

            //will work only in web but mobile
            if (glHelper.isTopAccessible()) {

                //set global object/s here

                //globalObj.formContext = formContext;
            }

            userSettings = globalContext.userSettings;

            // 0 = Undefined, 1 = Create, 2 = Update, 3 = Read Only, 4 = Disabled, 6 = Bulk Edit
            formType = glHelper.GetFormType(formContext);

            //Load up resources for English/French labels
            LCID = userSettings.languageId;

            if (LCID == 1033)
                resexResourceName = "ovs_Labels.1033.resx";
            else if (LCID == 1036)
                resexResourceName = "ovs_Labels.1036.resx";

            //events happens on any form stage
            SetStateChangebility(formContext);

            var formState = formContext.getAttribute("statecode");
            formState.removeOnChange(SR_main.OnState_Change);
            formState.addOnChange(SR_main.OnState_Change);

            var formStatus = formContext.getAttribute("statuscode");
            SR_Status_origin = formStatus.getOptions();
            formStatus.removeOnChange(SR_main.OnStatusReason_Change);
            formStatus.addOnChange(SR_main.OnStatusReason_Change);
            formStatus.fireOnChange();

            var site = formContext.getAttribute("fdr_site");
            site.removeOnChange(SR_main.OnSite_Change);
            site.addOnChange(SR_main.OnSite_Change);

            var operation = formContext.getAttribute("fdr_operation");
            operation.removeOnChange(SR_main.OnOperation_Change);
            operation.addOnChange(SR_main.OnOperation_Change);


            //on create
            if (formType == 1) {

                operation.fireOnChange();
            }

            //on update etc
            if (formType > 1) {

            }
        },

        OnStatusReason_Change: function (executionContext) {

            var formContext = executionContext.getFormContext();
            var currentSatatus = glHelper.GetOptionsetValue(formContext, "statuscode");
            var currentState = glHelper.GetOptionsetValue(formContext, "statecode");
            //is instance is active
            if (currentState != 1) {
                glHelper.filterOptionSetUsingOrigin(formContext, "header_statuscode", SR_Status_origin, statusMappingActive[currentSatatus], true)
                //update global values
                SetStateChangebility(formContext);
            }
        },

        OnState_Change: function (executionContext) {

            var formContext = executionContext.getFormContext();

            //update status reason filters based on state
            //if switched to inactive
            if (glHelper.GetOptionsetValue(formContext, "statecode") == 1) {

                glHelper.filterOptionSetUsingOrigin(formContext, "header_statuscode", SR_Status_origin, statusMappingInactive[SR_status], true)
            }//for active
            else glHelper.filterOptionSetUsingOrigin(formContext, "header_statuscode", SR_Status_origin, statusMappingActive[SR_status], true);
            //update global values
            SetStateChangebility(formContext);
        },

        OnSite_Change: function (executionContext) {

            var formContext = executionContext.getFormContext();

            //if account removed => clean operation
            var hSite = formContext.getControl("header_fdr_site").getAttribute().getValue();
            //var hSite1 = glHelper.GetLookupAttrId(formContext, "fdr_site");
            if (hSite == null) formContext.getControl("header_fdr_operation").getAttribute().setValue(null);
        },

        OnOperation_Change: function (executionContext) {

            var formContext = executionContext.getFormContext();

            //if opration selected and account is empty => populate the site/account
            var hSite = formContext.getControl("header_fdr_site").getAttribute().getValue();
            var hOperation = formContext.getControl("header_fdr_operation").getAttribute().getValue();

            if (hOperation != null && hSite == null) {

                var opperationid = hOperation[0].id.replace('{', '').replace('}','');

                Xrm.WebApi.online.retrieveRecord("ovs_mocregistration", opperationid, "?$select=_ovs_siteid_value&$expand=ovs_SiteId($select=accountid,name)").then(
                    function success(result) {
                        var siteid = result["_ovs_siteid_value"];
                        var name = result["_ovs_siteid_value@OData.Community.Display.V1.FormattedValue"];
                        var logicalname = result["_ovs_siteid_value@Microsoft.Dynamics.CRM.lookuplogicalname"];

                        //set site lookup
                        glHelper.SetHeaderLookup(formContext, "header_fdr_site", logicalname, siteid, name);

                    },
                    function (error) {
                        Xrm.Navigation.openErrorDialog({ message: error.message });
                    }
                );
            }            
        },

    }

    //********************public methods end***************

})(window, document)
