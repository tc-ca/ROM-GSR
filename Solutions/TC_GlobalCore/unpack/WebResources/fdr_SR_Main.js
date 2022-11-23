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
    var serviceRquestTypeOptions;
    var isStatusChanged;

    var statusMappingActive = {

        "Draft": ["Draft", "Submitted"],
        "1": [1, 794600010],
        "Submitted": ["Submitted", "Admin Review", "Cancellation Pending"],
        "794600010": [794600010, 794600006, 794600009],
        "Admin Review": ["Admin Review", "Additional Info Required", "Technical Review", "Cancellation Pending"],
        "794600006": [794600006, 794600000, 794600002, 794600009],
        "Additional Info Required": ["Additional Info Required", "Admin Review"],
        "794600000": [794600000, 794600006],
        "Technical Info Required": ["Technical Info Required", "Technical Review"],
        "794600011": [794600011, 794600002],
        "Technical Review": ["Technical Review", "Technical Info Required", "Pending Inspection", "Cancellation Pending", "Refused", "Approved"],
        "794600002": [794600002, 794600011, 794600003, 794600009, 794600008, 794600007],
        "Pending Inspection": ["Pending Inspection", "Post Inspection Review"],
        "794600003": [794600003, 794600004],
        "Post Inspection Review": ["Post Inspection Review", "Refused", "Approved"],
        "794600004": [794600004, 794600008, 794600007],
        "Refused": ["Refused", "Completed"],
        "794600008": [794600008, 794600005],
        "Cancellation Pending": ["Cancellation Pending"],
        "794600009": [794600009],
        "Completed": ["Completed"],
        "794600005": [794600005],
        "Approved": ["Approved", "Completed"],
        "794600007": [794600007, 794600005]
    };

    var statusMappingFullRevocation = {

        "Approved": ["Approved", "Technical Review"],
        "794600007": [794600007, 794600002]
    };

    var statusMappingFullRevocationInactive = {

        "Canceled": ["Canceled", "Closed"],
        "794600001": [794600001, 2]
    };

    var statusMappingInactive = {

        "Draft": ["Canceled"],
        "1": [794600001],
        "Submitted": ["Canceled"],
        "794600010": [794600001],
        "Admin Review": ["Canceled"],
        "794600006": [794600001],
        "Additional Info Required": ["Canceled"],
        "794600000": [794600001],
        "Technical Info Required": ["Canceled"],
        "794600011": [794600001],
        "Technical Review": ["Canceled"],
        "794600002": [794600001],
        "Pending Inspection": ["Canceled"],
        "794600003": [794600001],
        "Post Inspection Review": ["Canceled"],
        "794600004": [794600001],
        "Cancellation Pending": ["Canceled"],
        "794600009": [794600001],
        "Completed": ["Closed"],
        "794600005": [2]
    };

    var ServiceRquestType2OperationType = {

        " ": ["New Registration"],
        "0": [794600000],
        "Expired": ["Renewal", "Close Expired Registration"],
        "794600000": [794600001, 794600006],
        "Registered": ["Renewal", "Partial Revocation", "Amendment", "Full Revocation", "Close Active Registration"],
        "794600001": [794600001, 794600003, 794600002, 794600004, 794600005],
        "Unregistered": ["New Registration"],
        "794600002": [794600000],
        "Closed": ["Reactivation"],
        "794600003": [794600007]
    };

    //********************private methods*******************

    function SetStateChangebility(formContext) {

        SR_status = glHelper.GetOptionsetValue(formContext, "statuscode");
        SR_state = glHelper.GetOptionsetValue(formContext, "statecode");

        //if status reason was Draft, Cancellation Pending, or Completed then user can change State
        if (SR_status == 1
            || SR_status == 794600009 || SR_status == 794600005)
            glHelper.SetDisabled(formContext, "header_statecode", false);
        //else state is read only
        else glHelper.SetDisabled(formContext, "header_statecode", true);
    }

    function ServiceRquestTypeFilter(formContext, operationstatus) {


        if (!operationstatus) operationstatus = 0;
        glHelper.filterOptionSetUsingOrigin(formContext, "fdr_srtype", serviceRquestTypeOptions, ServiceRquestType2OperationType[operationstatus], true);

        if (ServiceRquestType2OperationType[operationstatus].length == 1) glHelper.SetOptionsetByValue(formContext, "fdr_srtype", ServiceRquestType2OperationType[operationstatus][0]);
        else 
            glHelper.SetValue(formContext, "fdr_srtype", null);
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
            //get original list of options to keep
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

                serviceRquestTypeOptions = formContext.getAttribute("fdr_srtype").getOptions();
                operation.fireOnChange();
            }

            ////on update etc
            if (formType > 1) {
                var serviceRquestType = formContext.getAttribute("fdr_srtype").getValue();
                if (serviceRquestType != null) {
                    //hide the time tracking and performance tabs when the service request type is "full revocation", "partial revocation", "close active registration", or "close expired registration"
                    if (serviceRquestType == 794600003 || serviceRquestType == 794600004 || serviceRquestType == 794600005 || serviceRquestType == 794600006) {
                        glHelper.SetTabVisibility(formContext, "tab_TimeTracking", false);
                        glHelper.SetTabVisibility(formContext, "tab_Performance", false);

                        if (serviceRquestType == 794600004)
                        {
                            //If Type is Full Revocation, only "Approved" should be available status reason.
                            var currentSatatus = glHelper.GetOptionsetValue(formContext, "statuscode");

                            glHelper.filterOptionSetUsingOrigin(formContext, "header_statuscode", SR_Status_origin, statusMappingFullRevocation["794600007"], true);
                        }
                    }
                    
                    

                }
            }

            formContext.data.entity.addOnSave(SR_main.OnSave_Event);
            formContext.data.entity.addOnPostSave(SR_main.OnPostSave_Event);
       },

        OnStatusReason_Change: function (executionContext) {

            var formContext = executionContext.getFormContext();

            //only one state change allowed!
            if (formContext.getAttribute("statuscode").getIsDirty()) return;

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

            var serviceRquestType = formContext.getAttribute("fdr_srtype").getValue();

            //update status reason filters based on state
            //if switched to inactive
            if (glHelper.GetOptionsetValue(formContext, "statecode") == 1) 
            {
                //If Type is Full Revocation, only "Closed & Canceled" should be available status reason.
                if (serviceRquestType == 794600004)
                {
                    glHelper.filterOptionSetUsingOrigin(formContext, "header_statuscode", SR_Status_origin, statusMappingFullRevocationInactive["794600001"], true);
                }
                else
                    glHelper.filterOptionSetUsingOrigin(formContext, "header_statuscode", SR_Status_origin, statusMappingInactive[SR_status], true)
            }//for active
            else
            {
                //If Type is Full Revocation, only "Approced & Technical Review" should be available status reason.
                if (serviceRquestType == 794600004)
                {
                    glHelper.filterOptionSetUsingOrigin(formContext, "header_statuscode", SR_Status_origin, statusMappingFullRevocation["794600007"], true);
                }
                else
                glHelper.filterOptionSetUsingOrigin(formContext, "header_statuscode", SR_Status_origin, statusMappingActive[SR_status], true);
            }
            //update global values
            SetStateChangebility(formContext);
        },

        OnSite_Change: function (executionContext) {

            var formContext = executionContext.getFormContext();

            //if account removed => clean operation
            var hSite = formContext.getAttribute("fdr_site").getValue();
            //var hSite1 = glHelper.GetLookupAttrId(formContext, "fdr_site");
            if (hSite == null) formContext.getAttribute("fdr_operation").setValue(null);
        },

        //the event happens only on create as Operation field is readonly rest of the time
        OnOperation_Change: function (executionContext) {

            var formContext = executionContext.getFormContext();

            //if opration selected and account is empty => populate the site/account
            var hSite = formContext.getAttribute("fdr_site").getValue();
            var hOperation = formContext.getAttribute("fdr_operation").getValue();

            if (hOperation != null) {

                var opperationid = hOperation[0].id.replace('{', '').replace('}', '');

                Xrm.WebApi.online.retrieveRecord("ovs_mocregistration", opperationid, "?$select=_fdr_registrationtype_value,fdr_operationstatus,_ovs_siteid_value").then(
                    function success(result) {
                        var fdr_operationstatus = result["fdr_operationstatus"];
                        var fdr_operationstatus_formatted = result["fdr_operationstatus@OData.Community.Display.V1.FormattedValue"];

                        //set Service Rquest Type based on Operation Status
                        ServiceRquestTypeFilter(formContext, fdr_operationstatus);


                        var siteid = result["_ovs_siteid_value"];
                        var name = result["_ovs_siteid_value@OData.Community.Display.V1.FormattedValue"];
                        var logicalname = result["_ovs_siteid_value@Microsoft.Dynamics.CRM.lookuplogicalname"];

                        //set site lookup
                        if (hSite == null) {
                            glHelper.SetLookup(formContext, "fdr_site", logicalname, siteid, name);
                        }
                        var containerType = formContext.getAttribute("fdr_containertype").getValue();
                        //if (containerType == null) {
                        //    var containerTypeId = result["_fdr_registrationtype_value"];
                        //    var containerTypeName = result["_fdr_registrationtype_value@OData.Community.Display.V1.FormattedValue"];
                        //    var clogicalname = result["_fdr_registrationtype_value@Microsoft.Dynamics.CRM.lookuplogicalname"];

                        //    glHelper.SetLookup(formContext, "fdr_containertype", clogicalname, containerTypeId, containerTypeName);
                        //}
                    },
                    function (error) {
                        Xrm.Navigation.openErrorDialog({ message: error.message });
                    }
                );
            }// no operation
            else ServiceRquestTypeFilter(formContext, null);

        },

        //the on save event will refresh if the statuscode ATTRIBUTE is dirty
        OnSave_Event: function (executionContext) {
            var formContext = executionContext.getFormContext();

            //statuscode ATTRIBUTE is dirty refresh the form
            if (formContext.getAttribute("statuscode").getIsDirty()) {
                isStatusChanged = true
            }
        },
        OnPostSave_Event: function (executionContext) {
            var formContext = executionContext.getFormContext();
            var formType = glHelper.GetFormType(formContext);

            //statuscode ATTRIBUTE is dirty refresh the form
            //if (formType > 1 && isStatusChanged) {
            //    Xrm.Utility.openEntityForm(formContext.data.entity.getEntityName(), formContext.data.entity.getId());
            //}
        }
    }

    //********************public methods end***************

})(window, document)
