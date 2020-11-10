"use strict";
/* eslint-disable @typescript-eslint/triple-slash-reference */
var ROM;
(function (ROM) {
    var WorkOrder;
    (function (WorkOrder) {
        // EVENTS
        function onLoad(eContext) {
            console.log('Onload has been called');
            console.log('Xrm execution context: ', eContext);
            var form = eContext.getFormContext();
            switch (form.ui.getFormType()) {
                //Create
                case 1:
                    setDefaultFiscalYear(form);
                default:
                    break;
            }
            if (!userHasRole("ROM Manager") && !userHasRole("ROM Planner")) {
                form.getControl("ovs_revisedquarterid").setDisabled(true);
            }
            else {
                form.getControl("ovs_revisedquarterid").setDisabled(false);
            }
        }
        WorkOrder.onLoad = onLoad;
        function fiscalYearOnchange(eContext) {
            console.log('fiscalYearOnChange has been called');
            console.log('Xrm execution context: ', eContext);
            //if new fiscal year is selected, then previous selection of quarter no longer corresponds
            removeSelectedFiscalQuarter(eContext);
        }
        WorkOrder.fiscalYearOnchange = fiscalYearOnchange;
        // FUNCTIONS
        function setDefaultFiscalYear(form) {
            XrmQuery.retrieveMultiple(function (x) { return x.tc_tcfiscalyears; })
                .select(function (x) { return [x.tc_name]; })
                .filter(function (x) { return Filter.equals(x.tc_iscurrentfiscalyear, true); })
                .execute(function (fiscalYears) {
                //should only return one fiscal year record as the current
                if (fiscalYears.length === 1) {
                    var targetedFiscalYear = fiscalYears[0];
                    var lookup = new Array();
                    lookup[0] = new Object();
                    lookup[0].id = targetedFiscalYear.tc_tcfiscalyearid;
                    lookup[0].name = targetedFiscalYear.tc_name;
                    lookup[0].entityType = 'tc_tcfiscalyear';
                    form.getAttribute('ovs_fiscalyear').setValue(lookup);
                }
                else {
                    // do not set a default if multiple records are found, error.
                }
            });
        }
        function removeSelectedFiscalQuarter(eContext) {
            var form = eContext.getFormContext();
            form.getAttribute('ovs_fiscalquarter').setValue(null);
        }
        function getUserBU() {
            console.log('getUserBU has been called');
            var userid = Xrm.Utility.getGlobalContext().userSettings.userId;
            userid = userid.replace(/[{}]/g, "");
            var businessunit;
            Xrm.WebApi.retrieveRecord("systemuser", userid, "?$select=businessunitid").then(function success(result) {
                if (result != null) {
                    businessunit = result.businessunitid;
                }
            }, function (error) {
                console.log(error.message);
                var alertStrings = { text: error.message };
                var alertOptions = { height: 120, width: 260 };
                Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(function () { });
            });
            return businessunit;
        }
        function userHasRole(roleName) {
            var bu = getUserBU();
            Xrm.WebApi.retrieveMultipleRecords("roles", "?$select=roleid&$filter=name eq '" + roleName + "'" + (bu ? "and businessunitid eq " + bu : "")).then(function success(result) {
                if (result != null && result.length == 1) {
                    var role = result.value[0];
                    var id = role["roleid"];
                    var currentUserRoles = Xrm.Utility.getGlobalContext().userSettings.roles;
                    for (var i = 0; i < currentUserRoles.getLength(); i++) {
                        var userRole = currentUserRoles[i];
                        if (userRole.replace(/[{}]/g, "").toLowerCase() == id.replace(/[{}]/g, "").toLowerCase())
                            return true;
                    }
                }
            }, function (error) {
                console.log(error.message);
                var alertStrings = { text: error.message };
                var alertOptions = { height: 120, width: 260 };
                Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(function () { });
            });
            return false;
        }
    })(WorkOrder = ROM.WorkOrder || (ROM.WorkOrder = {}));
})(ROM || (ROM = {}));
