///<reference path="../Utilities/questionnaireFunctions.js"/>

var IReportRibbon = (function (window, document) {

    //********************variables*******************


    var formContext;
    var userSettings = Xrm.Utility.getGlobalContext().userSettings;
    var pageInput = Xrm.Utility.getPageContext().input;
    //get url from environment settings
    var reportUrl = "";
    var obj = {};
    obj.wo_id = pageInput.entityId.replace("{", "").replace("}", "");
    obj.triggering_user_id = userSettings.userId.replace("{", "").replace("}", "");
    obj.triggering_user_name = userSettings.userName;



    //********************private methods*******************

    function refreshGrids() {

        //set focus on tab
        var tab = formContext.ui.tabs.get("tab_InspectionReport");
        tab.setFocus();
        //refresh two grids
        var gridActives = formContext.getControl("grid_InspectionReports_active");
        gridActives.refresh();
        var gridCOC = formContext.getControl("Subgrid_COC");
        gridCOC.refresh();
    }

    ///sync
    function getFlowUrl() {

        //get url from environment settings
        //get flow url sync
        var req = new XMLHttpRequest();
        req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/qm_environmentsettingses?$select=qm_value&$filter=qm_name eq 'InspectionReportUrl'", false);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("Prefer", "odata.include-annotations=\"*\",odata.maxpagesize=1");
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {
                    var results = JSON.parse(this.response);
                    for (var i = 0; i < results.value.length; i++) {
                        reportUrl = results.value[i]["qm_value"];
                        if (reportUrl.trim() == "") {
                            Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Something went wrong. Report Url is empty." });
                        }
                    }
                } else {
                    //Xrm.Utility.closeProgressIndicator();
                    Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Error: " + this.statusText });
                }
            }
        };
        req.send();

    }

    function validateReportPreReq() {

        //run navigation from WO main script
        if (WO_TDG_main != null && WO_TDG_main != undefined && WO_TDG_main.ReportDataValidate) {

            if (!WO_TDG_main.ReportDataValidate(formContext)) {

                Xrm.Navigation.openAlertDialog({
                    confirmButtonLabel: "OK",
                    text: glHelper.GetLocalizedStrings().ValidationInspectionReport + "\n" + WO_TDG_main.errorObject.errorMessage.join("\n"),
                    title: glHelper.GetLocalizedStrings().TitleValidationInspectionReport
                }, { height: 300, width: 500 });
                return false;
            }
        }
        else {
            Xrm.Navigation.openErrorDialog({ message: glHelper.GetLocalizedStrings().GeneralError });
            return false;
        }

        return true;
    }

    function callFlow(url, input) {

        Xrm.WebApi.online.retrieveRecord("ovs_tdginspectionreport", obj.inspection_report_id, "?$select=statuscode").then(
            function success(result) {
                if (result["statuscode"] != null && result["statuscode"] == 1) {

                    //call flow
                    var req = new XMLHttpRequest();
                    req.open("POST", url, true);
                    req.setRequestHeader('Content-Type', 'application/json');

                    req.onreadystatechange = function () {
                        if (this.readyState === 4) {


                            req.onreadystatechange = null;
                            if (this.status === 200) {

                                //Xrm.Utility.closeProgressIndicator();

                                var results = JSON.parse(this.response);
                                if (results["string64"] == null || results["string64"] == "") {

                                    Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Report preview is not available." });
                                    return;
                                }
                                //save pdf to temp storage
                                window.top.localStorage.setItem('_inspectionReport', results["string64"]);

                                //open blob url in web resource
                                var pageInput = {
                                    pageType: "webresource",
                                    webresourceName: "qm_/RenderReport.html"
                                };

                                var navigationOptions = {
                                    target: 2,
                                    height: { value: 90, unit: "%" },
                                    width: { value: 80, unit: "%" },
                                    position: 1,
                                    title: results["file_name"]
                                };


                                Xrm.Navigation.navigateTo(
                                    pageInput,
                                    navigationOptions).then(
                                    function (result) {
                                        //gridControl.refresh();
                                        refreshGrids();
                                        return;
                                    },
                                    function error() {
                                        //gridControl.refresh();
                                        refreshGrids();
                                        return;
                                    }
                                );

                            }
                            else if (this.status == 500) {

                                Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Error 500" + this.response });//, title: "" });

                            }
                            else {
                                //Xrm.Utility.closeProgressIndicator();
                                Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Error: " + this.statusText });
                            }

                        }
                    };
                    req.send(input);


                }
                else refreshGrids();
            },
            function (error) {
                console.log(error.message);
                Xrm.Navigation.openErrorDialog({ message: error.message });
            }
        );

    }

    function createInspectionReport(url) {

        //var formContext = window.top.QuickCreateHelper.formContext;

        ////open quick create form
        //var entityFormOptions = {};
        //entityFormOptions["entityName"] = "ovs_tdginspectionreport";
        //entityFormOptions["useQuickCreateForm"] = true;

        // pre set work order and generall comments default empty as "---"
        var formParameters = {};
        // Because we actually have a automatic Autonumber config on the Table - Luis 20210528
        // formParameters["ovs_name"] = formContext.getAttribute("msdyn_name").getValue() + " - " + new Date(); 
        formParameters["ovs_generalcomments"] = "---";

        formParameters["ovs_workorderid"] = obj.wo_id;
        formParameters["ovs_workorderidname"] = formContext.getAttribute("msdyn_name").getValue();
        formParameters["ovs_workorderidtype"] = pageInput.entityName;
        // End of set lookup column

        // Open the form.
        //Xrm.Navigation.openForm(entityFormOptions, formParameters).then(
        //    function (result) {
        //        obj.inspection_report_id = result.savedEntityReference[0].id.replace("{", "").replace("}", "");
        //        var input = JSON.stringify(obj);
        //        console.log("Input " + input);

        //        callFlow(url, input)
        //    },
        //    function (error) {
        //        console.log(error);
        //        Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Error: " + error });
        //    });


        var pageData = {
            pageType: "entityrecord",
            entityName: "ovs_tdginspectionreport",
            formId: "D1916977-B35B-43C7-8AC3-028D977DA1D1",
            data: formParameters
        };
        var navigationOptions = {
            target: 2,
            height: { value: 80, unit: "%" },
            width: { value: 70, unit: "%" },
            position: 1
        };
        Xrm.Navigation.navigateTo(pageData, navigationOptions).then(
            function success(result) {

                obj.inspection_report_id = result.savedEntityReference[0].id.replace("{", "").replace("}", "");
                var input = JSON.stringify(obj);
                console.log("Input " + input);

                callFlow(url, input)
            },
            function error() {
                console.log(error);
                Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Error: " + error });
            }
        );
    }

    function existingReport(url, input, reportId) {

    // Open the form.

        var pageData = {
            pageType: "entityrecord",
            entityName: "ovs_tdginspectionreport",
            entityId: reportId,
            formId: "D1916977-B35B-43C7-8AC3-028D977DA1D1"
        };
        var navigationOptions = {
            target: 2,
            height: { value: 80, unit: "%" },
            width: { value: 70, unit: "%" },
            position: 1
        };
        Xrm.Navigation.navigateTo(pageData, navigationOptions).then(
            function success() {
                callFlow(url, input);
            },
            function error() {
                console.log(error);
                Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Error: " + error });
            }
        );
    }

    //********************private methods end***************



    //********************public methods***************

    function startInspectionReport(gridControl) {

        formContext = window.top.QuickCreateHelper.formContext;

        //Xrm.Utility.showProgressIndicator("Reporting ...");

        //run navigation from WO main script
        if (!validateReportPreReq()) return;

        //sync
        getFlowUrl();

        if (formContext.data.entity.getIsDirty()) {

            var confirmStrings = { text: "Form data was modifiied. The form will be saved prior to the report run. Continue?", title: "Confirmation Dialog" };
            var confirmOptions = { height: 200, width: 450 };
            Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
                function (success) {
                    if (success.confirmed) {

                        //async save
                        formContext.data.save().then(function () {

                            createInspectionReport(reportUrl);
                        }, function (e) {

                            Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Cannot save the form. Error: " + this.statusText });

                        });
                    }
                    else return;
                }
            );


        }
        //if not - run the report
        else { createInspectionReport(reportUrl); }
    }

    function updateInspectionReport(selectedItems, gridControl) {

        var selectedItem = selectedItems[0];
        var reportId = selectedItem.replace("}", "").replace("{", "");
        obj.inspection_report_id = reportId;
        var input = JSON.stringify(obj);
        console.log("Input " + input);

        formContext = window.top.QuickCreateHelper.formContext;
        getFlowUrl();

        //run navigation from WO main script
        if (!validateReportPreReq()) return;

        if (formContext.data.entity.getIsDirty()) {

            var confirmStrings = { text: "Form data was modifiied. The form will be saved prior to the report run. Continue?", title: "Confirmation Dialog" };
            var confirmOptions = { height: 200, width: 450 };
            Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
                function (success) {
                    if (success.confirmed) {

                        formContext.data.save().then(function () {

                            existingReport(reportUrl, input, reportId);

                        }, function (e) {

                            Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Cannot save the form. Error: " + e.message });
                        });
                    }
                    else return;
                }
            );


        }
        //if not - run the report
        else { existingReport(reportUrl, input, reportId); }

    }

    function cloneInspectionReport(selectedItems, LCID, gridControl) {

        var globalContext = Xrm.Utility.getGlobalContext();
        var clientUrl = globalContext.getClientUrl();

        if (LCID == 1033)
            resexResourceName = "ovs_Labels.1033.resx";
        else if (LCID == 1036)
            resexResourceName = "ovs_Labels.1036.resx";

        var promptMessage = Xrm.Utility.getResourceString(resexResourceName, "tdgReport.Clone.PromptMessage");
        var successMessage = Xrm.Utility.getResourceString(resexResourceName, "tdgReport.Clone.SuccessMessage");
        //prompt
        var confirmStrings = { text: promptMessage, title: "Clone/Cloner" };
        var confirmOptions = { height: 200, width: 450 };
        Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
            function (success) {
                if (success.confirmed) {

                    //get Report then clone with draft status:

                    var req = new XMLHttpRequest();
                    req.open("GET", clientUrl + "/api/data/v9.1/ovs_tdginspectionreports(" + selectedItems[0] + ")?$select=ovs_generalcomments,ovs_reportlanguage,_ovs_workorderid_value", false);
                    req.setRequestHeader("OData-MaxVersion", "4.0");
                    req.setRequestHeader("OData-Version", "4.0");
                    req.setRequestHeader("Accept", "application/json");
                    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
                    req.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            req.onreadystatechange = null;
                            if (this.status === 200) {
                                var result = JSON.parse(this.response);


                                var entity = {};
                                entity.ovs_generalcomments = result["ovs_generalcomments"];
                                entity.ovs_reportlanguage = result["ovs_reportlanguage"];
                                entity["ovs_WorkOrderId@odata.bind"] = "/msdyn_workorders(" + result["_ovs_workorderid_value"] + ")";
                                entity.statuscode = 918640000;

                                var reqCreate = new XMLHttpRequest();
                                reqCreate.open("POST", clientUrl + "/api/data/v9.1/ovs_tdginspectionreports", false);
                                reqCreate.setRequestHeader("OData-MaxVersion", "4.0");
                                reqCreate.setRequestHeader("OData-Version", "4.0");
                                reqCreate.setRequestHeader("Accept", "application/json");
                                reqCreate.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                                reqCreate.onreadystatechange = function () {
                                    if (this.readyState === 4) {
                                        reqCreate.onreadystatechange = null;
                                        if (this.status === 204) {
                                            var uri = this.getResponseHeader("OData-EntityId");
                                            var regExp = /\(([^)]+)\)/;
                                            var matches = regExp.exec(uri);
                                            var newEntityId = matches[1];

                                            gridControl.refresh();
                                            Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: successMessage });

                                        } else {
                                            Xrm.Navigation.openErrorDialog({ message: this.statusText });
                                        }
                                    }
                                };
                                reqCreate.send(JSON.stringify(entity));

                                //    var ovs_generalcomments = result["ovs_generalcomments"];
                                //    var ovs_reportlanguage = result["ovs_reportlanguage"];
                                //    var ovs_reportlanguage_formatted = result["ovs_reportlanguage@OData.Community.Display.V1.FormattedValue"];
                                //    var _ovs_workorderid_value = result["_ovs_workorderid_value"];
                                //    var _ovs_workorderid_value_formatted = result["_ovs_workorderid_value@OData.Community.Display.V1.FormattedValue"];
                                //    var _ovs_workorderid_value_lookuplogicalname = result["_ovs_workorderid_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
                            } else {
                                Xrm.Navigation.openErrorDialog({ message: this.statusText });
                            }
                        }
                    };
                    req.send();

                }
                else return;
            }
        );
    }

    return {

        startInspectionReport: startInspectionReport,
        updateInspectionReport: updateInspectionReport,
        cloneInspectionReport: cloneInspectionReport,
    };

})(window, document);
