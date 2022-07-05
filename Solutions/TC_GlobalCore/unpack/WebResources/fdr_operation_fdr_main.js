///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/RNOP_ValidationFunctions.js"/>

var QuickCreateHelper = QuickCreateHelper || {};
window.top.QuickCreateHelper = QuickCreateHelper;

var Operation_FDR_main = (function (window, document) {

    //**************** Variables

    var globalFormContext;
    var globalContext;
    var contactsN2N = new Array();

    const FIELD_SITE = "ovs_siteid";
    const FIELD_PrimaryContact = "fdr_primarycontact";
    const FIELD_OPERATION_TYPE = "ovs_operationtype";
    const FIELD_MOC_REGISTRATION_ID = "ovs_mocregistrationname";
    const FIELD_MOC_FACILITY_TYPE = "ovs_operationfacilitytype";
    const FIELD_MOC_REGISTRATION_EXPIRY_DATE = "ovs_registrationexpiry";
    const FIELD_MOC_REGISTRATION_INITIAL_DATE = "ovs_mocinitialregistrationdate";
    const FIELD_HUB_INDICATOR = "ovs_hubind";
    const FIELD_TARGETED_INDICATOR = "ovs_targetedind";
    const FIELD_ACCIDENT_INDICATOR = "ovs_accidentind";
    const FIELD_CEP_INDICATOR = "ovs_cepind";
    const FIELD_FOLLOW_UP_INDICATOR = "ovs_followupind";
    const FIELD_RISK_SCORE = "ovs_cdriskscore";

    const VALUE_HOTI = 918640038;
    const VALUE_HOTI_GOA = 918640042;
    const VALUE_CIV_AV = 918640040;


    //**************** Private methods


    function toggleRequiredLevel(formContext) {
        var operationType = glHelper.GetValue(formContext, FIELD_OPERATION_TYPE);
        var fieldsRequired = true;

        if (operationType == VALUE_CIV_AV || operationType == VALUE_HOTI || operationType == VALUE_HOTI_GOA)
            fieldsRequired = false;

        glHelper.SetRequiredLevel(formContext, FIELD_SITE, true);
        glHelper.SetRequiredLevel(formContext, FIELD_OPERATION_TYPE, fieldsRequired);
        //glHelper.SetRequiredLevel(formContext, FIELD_MOC_FACILITY_TYPE, fieldsRequired);
        glHelper.SetRequiredLevel(formContext, FIELD_MOC_REGISTRATION_EXPIRY_DATE, fieldsRequired);
        glHelper.SetRequiredLevel(formContext, FIELD_MOC_REGISTRATION_ID, fieldsRequired);
        glHelper.SetRequiredLevel(formContext, FIELD_MOC_REGISTRATION_INITIAL_DATE, fieldsRequired);
    }

    function getContactsByAccountN2N(formContext, accountid) {

        var primaryContact = formContext.getControl(FIELD_PrimaryContact);

        Xrm.WebApi.online.retrieveMultipleRecords("contact", "?$select=contactid&$expand=ovs_account_contact($filter=(accountid eq " + accountid + "))&$filter=(ovs_account_contact/any(o1:(o1/accountid eq " + accountid + ")))").then(
            function success(results) {
                if (results.entities != undefined
                    && results.entities != null
                    && results.entities.length > 0)
                    for (var i = 0; i < results.entities.length; i++) {

                        contactsN2N.push(results.entities[i]["contactid"]);
                    }

                //get site's primary contact
                Xrm.WebApi.online.retrieveRecord("account", accountid, "?$select=_primarycontactid_value").then(
                    function success(result) {
                        var _primarycontactid_value = result["_primarycontactid_value"];
                        if (_primarycontactid_value != null && _primarycontactid_value != undefined)
                            contactsN2N.push(_primarycontactid_value);
                    },
                    function (error) {
                        console.log("No site's primary contact was found " + error.message);
                        Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "No site's primary contact was found " + error.message });
                    }
                );

                primaryContact.addPreSearch(Operation_FDR_main.Pre_filterPrimaryContact);
            },
            function (error) {
                console.log("No contacts related to account were found " + error.message);
                primaryContact.addPreSearch(Operation_FDR_main.Pre_filterPrimaryContact);
                Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "No contacts related to account were found " + error.message });
            }
        );

    }



    //**************** Public methods
    return {

        OnLoad: function (executionContext) {
            //get context
            globalContext = glHelper.getGlobalContext();
            var formContext = executionContext.getFormContext();
            globalFormContext = formContext;

            // 0 = Undefined, 1 = Create, 2 = Update, 3 = Read Only, 4 = Disabled, 6 = Bulk Edit
            let formType = glHelper.GetFormType(formContext);

            //set Primary Operation Contact filter
            var accountid = glHelper.GetLookupAttrId(formContext, FIELD_SITE);
            if (accountid != null)
                getContactsByAccountN2N(formContext, accountid);
            else {
                Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "No Site is associated with current operation" });
            }


            if (glHelper.isTopAccessible()) {
                globalObj = window.top.QuickCreateHelper;
                globalObj.formContext = formContext;
            }

            //Toggle required level based on Operation Type
            toggleRequiredLevel(formContext);


            //Add function to Refresh Operation Class when UNCode is added
            if (formType > 1) {
                var OperationUN = formContext.getControl("Subgrid_OperationUNNumber");
                if (OperationUN != null) OperationUN.addOnLoad(Operation_FDR_main.Refresh_OperationClass);
            }

            var operationType = formContext.getAttribute("ovs_operationtype");
            operationType.removeOnChange(Operation_FDR_main.OperationType_OnChange);
            operationType.addOnChange(Operation_FDR_main.OperationType_OnChange);
        },

        Pre_filterPrimaryContact: function () {

            var strTemplate = "<value>{0}</value>";
            var currentLine = "";


            //no primary/related contacts
            if (contactsN2N.length == 0) {
                // filter have to return an empty result
                var contactFilter = "<filter type='and'><condition attribute='contactid' operator='eq' value='00000000-0000-0000-0000-000000000000'></condition></filter>";

            }
            else {

                for (var i = 0; i < contactsN2N.length; i++) {

                    currentLine = currentLine + strTemplate.replace("{0}", contactsN2N[i]);
                }
                var contactFilter = "<filter type='and'><condition attribute='contactid' operator='in'>" + currentLine + "</condition></filter>";
            }
            globalFormContext.getControl(FIELD_PrimaryContact).addCustomFilter(contactFilter, "contact");
        },

        Refresh_OperationClass: function () {
            var OperationClass = globalFormContext.getControl("grd_Class");
            if (OperationClass != null) OperationClass.refresh();
        },

        OperationType_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();
            toggleRequiredLevel(formContext);
        }
    }

})(window, document)