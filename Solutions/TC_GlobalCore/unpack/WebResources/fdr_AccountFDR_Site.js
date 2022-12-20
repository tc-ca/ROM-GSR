///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>

var AccountFDR_Site = (function (window, document) {
    //variables
    var formType;
    var formContextGlobalRef;
    var contactsN2N = new Array();



    //********************private methods*******************


    async function getContactsByAccountN2N(formContext, accountid) {

        var result = await Xrm.WebApi.online.retrieveMultipleRecords("account", "?$expand=ovs_account_contact($select=contactid)&$filter=accountid eq " + accountid).then(
            function success(results) {
                console.log(results);
                for (var i = 0; i < results.entities.length; i++) {
                    var result = results.entities[i];
                    for (var j = 0; j < result.ovs_account_contact.length; j++) {
                        contactsN2N.push(result.ovs_account_contact[j]["contactid"]);
                    }
                }
            },
            function (error) {
                console.log(error.message);
                Xrm.Navigation.openErrorDialog({ message: error.message });
            }
        );

    }

    //********************private methods end***************

    //********************public methods***************
    return {


        OnLoad: function (executionContext) {

            const formContext = executionContext.getFormContext();
            formContextGlobalRef = formContext;

            // 0 = Undefined, 1 = Create, 2 = Update, 3 = Read Only, 4 = Disabled, 6 = Bulk Edit
            formType = glHelper.GetFormType(formContext);

            AccountFDR_Site.SetPrimaryContactFilter(formContext);
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
            formContextGlobalRef.getControl("primarycontactid").addCustomFilter(contactFilter, "contact");
        },

        SetPrimaryContactFilter: async function (formContext) {

            //get parent contacts
            var pAccountId = glHelper.GetLookupAttrId(formContext, "parentaccountid");
            var rShip = glHelper.GetOptionsetValue(formContext, "customertypecode");
            if (pAccountId == null && rShip == 948010001)
                Xrm.Navigation.openErrorDialog({ message: "Current Site doesn't have Parent Account. List of available contacts will be limited by the Site's contacts" });
            else await getContactsByAccountN2N(formContext, pAccountId);

            //get site contacts
            await getContactsByAccountN2N(formContext, formContext.data.entity.getId());

            //add filter 
            formContext.getControl("primarycontactid").addPreSearch(AccountFDR_Site.Pre_filterPrimaryContact);
        },

    }
    //********************public methods end***************

})(window, document);