///<reference path="../../Utilities/GlobalHelper.js"/>


var EnvironmentSettings_Main = (function (window, document) {


    //variables
    var LCID;
    var clientUrl;
    var currentWebApi;
    var isOffLine;
    var formType;

    //Constants
    const FIELD_VALUE = "qm_value";
    const FIELD_ENABLE_FOR_USER = "ovs_enableforuser";

    //********************public methods***************
    return {

        OnLoad: function (executionContext) {

            var globalContext = Xrm.Utility.getGlobalContext();
            var formContext = executionContext.getFormContext();
            // 0 = Undefined, 1 = Create, 2 = Update, 3 = Read Only, 4 = Disabled, 6 = Bulk Edit
            formType = glHelper.GetFormType(formContext);

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

            if (glHelper.hasCurrentUserRole("System Administrator")) {
                glHelper.SetControlVisibility(formContext, FIELD_ENABLE_FOR_USER, true);
                return
            };

            glHelper.disableAllFields(formContext);

            var _enabled = glHelper.GetValue(formContext, FIELD_ENABLE_FOR_USER);
            if ((glHelper.hasCurrentUserRole("TDG Planner") || glHelper.hasCurrentUserRole("CID User")) && formContext.getControl(FIELD_VALUE) != null && _enabled) {
                    glHelper.SetDisabled(formContext, FIELD_VALUE, false);
            }

        },
    }

    //********************public methods end***************

})(window, document)
