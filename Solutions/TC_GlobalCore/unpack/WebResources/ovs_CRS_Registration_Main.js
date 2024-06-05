///<reference path="../../Utilities/GlobalHelper.js"/>


var CRS_Registration_Main = (function (window, document) {

    //variables
    var isOffLine;

    //Constants
    const FIELD_Expirydate_VALUE = "ovs_expirydate";


    //********************public methods***************
    return {

        OnLoad: function (executionContext) {

            var globalContext = Xrm.Utility.getGlobalContext();
            var formContext = executionContext.getFormContext();
            // 0 = Undefined, 1 = Create, 2 = Update, 3 = Read Only, 4 = Disabled, 6 = Bulk Edit
            formType = glHelper.GetFormType(formContext);

            debugger;

            isOffLine = glHelper.isOffline(executionContext);
            clientType = glHelper.getClientType(executionContext);

            if (isOffLine && clientType > 0) {

                //mobile or outlook, offline first
                currentWebApi = Xrm.WebApi.offline;
                clientUrl = "https://localhost:2525";
            }
            else {

                //web, online
                currentWebApi = Xrm.WebApi.online;
                clientUrl = globalContext.getClientUrl();
            }
            glHelper.SetControlReadOnly(formContext, FIELD_Expirydate_VALUE, !glHelper.isCurrentUserSystemAdministrator());
        }
    }

    //********************public methods end***************

})(window, document);
