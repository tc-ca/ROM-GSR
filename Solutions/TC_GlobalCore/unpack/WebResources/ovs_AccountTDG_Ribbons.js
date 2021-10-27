///<reference path="../Utilities/GlobalHelper.js"/>

var AccountRibbon = (function (window, document) {

     //variables
    var TDG_QA = "TDG QA";
    //state object 
    var stask = {};
    stask.Inactive = {};
    stask.Inactive.statecode = 1;
    stask.Inactive.statuscode = 2;

    //********************private methods*******************
    // Temporarry: show Deactivation button for the specific user role (TDG QA)
    function isTDG_QA(context) {
        var roles = Xrm.Utility.getGlobalContext().userSettings.roles;
        var enable = false;

        roles.forEach(function (item) {
            if (item.name == TDG_QA) enable = true;
        });
        return !enable;
    }

    function isActiveWorkOrder(primaryControl) {

        if (primaryControl == null) return;
        const formContext = primaryControl;
        var isOffLine = glHelper.isOffline(formContext);
        var clientType = glHelper.getClientType(formContext);
        var currentWebApi;
        var enable = false;

        if (isOffLine && clientType > 0) {
            //mobile or outlook, offline first
            currentWebApi = Xrm.WebApi.offline;
        } else {
            //web, online
            currentWebApi = Xrm.WebApi.online;
        }

        var accountid = formContext.data.entity.getId().replace("{", "").replace("}", "");

            currentWebApi.retrieveMultipleRecords("msdyn_workorder", "?$filter=_msdyn_serviceaccount_value eq " + accountid + " and statecode eq 0").then(

            function success(results) {
                //Set ConfirmDialog values baced on the retrieveMultipleRecords result
                    if (results.entities.length > 0) {
                        enable = true;
                    }
                    if (enable) {
                        formContext.ui.refreshRibbon();
                    }
                },

                    function (error) {
                        Xrm.Utility.alertDialog(error.message);

                    }
        );
        return enable;
    }


    // Override Deactivate btn to the custom
    function overridedeactivatebtn(parm1, parm2, parm3, primaryControl) {

        debugger;

        if (primaryControl == null) return;
        const formContext = primaryControl;
        var isOffLine = glHelper.isOffline(formContext);
        var clientType = glHelper.getClientType(formContext);
        var currentWebApi;
        var _text;
        var _title;
        var _confirmButtonLabel;
        if (isOffLine && clientType > 0) {
            //mobile or outlook, offline first
            currentWebApi = Xrm.WebApi.offline;
        } else {
            //web, online
            currentWebApi = Xrm.WebApi.online;
        }
    // Get account GUID 
        var accountid = formContext.data.entity.getId().replace("{", "").replace("}", "");
        try {
            // Get all active operations associated with this account
            currentWebApi.retrieveMultipleRecords("ovs_mocregistration", "?$select=ovs_name&$filter=_ovs_siteid_value eq " + accountid + " and statecode eq 0").then(
                function success(results) {
                    //Set ConfirmDialog values baced on the retrieveMultipleRecords result
                    if (results.entities.length > 0) {
                        _text = "You are about to deactivate a site with active operation(s). Deactivating the site will deactivate all of its Operations. Would you like to continue?";
                        _title = "Warning. Confirm Deactivation:";
                        _confirmButtonLabel = "YES";
                    }
                    else {
                        _text = "Do you want to deactivate the selected 1 Account? You can reactivate it later, if you wich.\n The action will set the Account as inactive. There may be records in the system that continue to reference these inactive records.";
                        _title = "Confirm Deactivation:";
                        _confirmButtonLabel = "Deactivate";
                    }
                    var confirmStrings = {
                        text: _text,
                        title: _title,
                        confirmButtonLabel: _confirmButtonLabel
                    };
                    var confirmOptions = { height: 200, width: 560 };
                    Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
                        function (success) {
                            if (success.confirmed) {
                                Xrm.Utility.showProgressIndicator('Processing');
                                DeactivateForm(formContext);
                                // make sure we don't get stuck!
                                setTimeout(function () {
                                    Xrm.Utility.closeProgressIndicator();
                                }, 1000);
                                
                            }
                            //  Mscrm.CommandBarActions.changeState(parm1, parm2, parm3);
                        });
                },

                function (error) {
                    Xrm.Utility.alertDialog(error.message);

                }

            );

        } catch (error) {
            throw error;
        }

        finally {
            Xrm.Utility.closeProgressIndicator();
            return false;
        }
    }

    function DeactivateForm(formContext) {
        glHelper.SetValue(formContext, "statecode", stask.Inactive.statecode);
        if (formContext.getAttribute("statuscode") != null) {
            glHelper.SetValue(formContext, "statuscode", stask.Inactive.statuscode);
        }
        //sync save
        formContext.data.entity.save();
    }
//********************public methods***************
    return {
        overridedeactivatebtn: overridedeactivatebtn,
        isTDG_QA: isTDG_QA,
        isActiveWorkOrder: isActiveWorkOrder
    };
})(window, document);