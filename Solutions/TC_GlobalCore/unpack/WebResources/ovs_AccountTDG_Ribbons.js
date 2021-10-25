///<reference path="../Utilities/GlobalHelper.js"/>

var AccountRibbon = (function (window, document) {

    var TDG_QA = "TDG QA";
  
 function overridedeactivatebtn(parm1, parm2, parm3, executionContext) {

        debugger;

        if (executionContext == null) return;

        var isOffLine = glHelper.isOffline(executionContext);
        var clientType = glHelper.getClientType(executionContext);
        var currentWebApi;

        if (isOffLine && clientType > 0) {
            //mobile or outlook, offline first
            currentWebApi = Xrm.WebApi.offline;
        } else {
            //web, online
            currentWebApi = Xrm.WebApi.online;
        }

        var accountid = executionContext.data.entity.getId().replace("{", "").replace("}", "");

        currentWebApi.retrieveMultipleRecords("ovs_mocregistration", "?$select=ovs_name&$filter=_ovs_siteid_value eq " + accountid + " and statecode eq 0").then(
            function success(results) {

                if (results.entities.length > 0) {
                    var confirmStrings = {
                        text: "You are about to deactivate a site with active operation(s). Deactivating the site will deactivate all of its Operations. Would you like to continue?",
                        title: "Warning. Confirm Deactivation:",
                        confirmButtonLabel: "YES"
                    };
                    var confirmOptions = { height: 200, width: 450 };
                    Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
                        function (success) {
                            if (success.confirmed)
                                Mscrm.CommandBarActions.changeState(parm1, parm2, parm3);
                            //Will be custom action to deactivate all realted active operations and Site
                        });
                }
                else {
                    Mscrm.CommandBarActions.changeState(parm1, parm2, parm3);
                }
            },

            function (error) {
                Xrm.Utility.alertDialog(error.message);
            }
        );
}

 function isTDG_QA(context) {
        var roles = Xrm.Utility.getGlobalContext().userSettings.roles;
        var enable = false;

        roles.forEach(function (item) {

            if (item.name == TDG_QA) enable = true;

        });

        return !enable;
    }

    return {
        isTDG_QA: isTDG_QA
    };
})(window, document);