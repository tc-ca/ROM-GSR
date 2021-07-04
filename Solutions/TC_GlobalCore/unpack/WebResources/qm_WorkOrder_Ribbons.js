///<reference path="../Utilities/questionnaireFunctions.js"/>

var WORibbon = (function (window, document) {

    var formContext;
    var userSettings = Xrm.Utility.getGlobalContext().userSettings;
    var pageInput = Xrm.Utility.getPageContext().input;

    ///not in use
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

    ///not in use
    function callInspectionReport(url) {

        //get url from environment settings
        var obj = {};
        obj.wo_id = pageInput.entityId.replace("{", "").replace("}", "");
        obj.triggering_user_id = userSettings.userId.replace("{", "").replace("}", "");
        obj.triggering_user_name = userSettings.userName;
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

        //// Open the form.
        //Xrm.Navigation.openForm(entityFormOptions, formParameters).then(
        //    function (result) {
        //        obj.inspection_report_id = result.savedEntityReference[0].id.replace("{", "").replace("}", "");
        //        var input = JSON.stringify(obj);                
        //        console.log("Input " + input);

        //        Xrm.WebApi.online.retrieveRecord("ovs_tdginspectionreport", obj.inspection_report_id, "?$select=statuscode").then(
        //            function success(result) {
        //                if (result["statuscode"] != null && result["statuscode"] == 1) {

        //                    //call flow
        //                    var req = new XMLHttpRequest();
        //                    req.open("POST", url, true);
        //                    req.setRequestHeader('Content-Type', 'application/json');

        //                    req.onreadystatechange = function () {
        //                        if (this.readyState === 4) {


        //                            req.onreadystatechange = null;
        //                            if (this.status === 200) {

        //                                //Xrm.Utility.closeProgressIndicator();

        //                                var results = JSON.parse(this.response);
        //                                if (results["string64"] == null || results["string64"] == "") {

        //                                    Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Report preview is not available." });
        //                                    return;
        //                                }

        //                                //get blob url
        //                                //var blobUrl = this.response;
        //                                //alert(blobUrl);

        //                                //save pdf to temp storage
        //                                window.top.localStorage.setItem('_inspectionReport', results["string64"]);


        //                                //open blob url in web resource
        //                                var pageInput = {
        //                                    pageType: "webresource",
        //                                    webresourceName: "qm_/RenderReport.html"
        //                                };

        //                                var navigationOptions = {
        //                                    target: 2,
        //                                    height: { value: 90, unit: "%" },
        //                                    width: { value: 80, unit: "%" },
        //                                    position: 1,
        //                                    title: results["file_name"]
        //                                };


        //                                Xrm.Navigation.navigateTo(
        //                                    pageInput,
        //                                    navigationOptions
        //                                ).then(
        //                                    function success(result) {
        //                                        refreshGrids();
        //                                        return;
        //                                    },
        //                                    function error() {
        //                                        refreshGrids();
        //                                        return;
        //                                    }
        //                                );

        //                            }
        //                            else if (this.status == 500) {

        //                                Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Error 500" + this.response });//, title: "" });

        //                            }
        //                            else {
        //                                //Xrm.Utility.closeProgressIndicator();
        //                                Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Error: " + this.statusText });
        //                            }

        //                        }
        //                    };
        //                    req.send(input);


        //                }
        //                else refreshGrids();
        //            },
        //            function (error) {
        //                console.log(error.message);
        //                Xrm.Navigation.openErrorDialog({ message: error.message});
        //            }
        //        );

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

                                        //get blob url
                                        //var blobUrl = this.response;
                                        //alert(blobUrl);

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
                                            navigationOptions
                                        ).then(
                                            function success(result) {
                                                refreshGrids();
                                                return;
                                            },
                                            function error() {
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

            },
            function error() {
                console.log(error);
                Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Error: " + error });
            }
        );

    }

    ///not in use
    function startInspectionReport(primaryControl) {

        formContext = primaryControl;
        var reportUrl = "";

        //Xrm.Utility.showProgressIndicator("Reporting ...");

        //run navigation from WO main script
        if (WO_TDG_main != null && WO_TDG_main != undefined && WO_TDG_main.ReportDataValidate) {

            if (!WO_TDG_main.ReportDataValidate(formContext)) {

                //Xrm.Utility.closeProgressIndicator();
                Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Cannot generate inspection report. \n" + WO_TDG_main.errorObject.errorMessage.join("\n"), title: "Required data is missing" }, { height: 300, width: 500 });

                return false;
            }
        }
        else {

            //Xrm.Utility.closeProgressIndicator();
            Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Impossible to validate report requirments." });
            return false;
        }

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

        //Xrm.Utility.closeProgressIndicator();

        //check if form changed
        //if yes => prompt for save and run report after form is saved
        //formContext.data.getIsDirty();
        if (formContext.data.entity.getIsDirty()) {

            var confirmStrings = { text: "Form data was modifiied. The form will be saved prior to the report run. Continue?", title: "Confirmation Dialog" };
            var confirmOptions = { height: 200, width: 450 };
            Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
                function (success) {
                    if (success.confirmed) {
                        //sync save
                        //formContext.data.entity.save();

                        formContext.data.save().then(function () {

                            callInspectionReport(reportUrl);
                        }, function (e) {

                            Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Cannot save the form. Error: " + this.statusText });

                        });
                    }
                    else return;
                }
            );


        }
        //if not - run the report
        else { callInspectionReport(reportUrl); }
    }

    function isInspectionApp(primaryControl) {

        var result = false;

        var globalContext = Xrm.Utility.getGlobalContext();
        var appUrl = globalContext.getCurrentAppUrl();
        //alert(appUrl);
        var appid = appUrl.substring((appUrl.indexOf("appid=") + 6));
        //alert(appid);


        var req = new XMLHttpRequest();
        req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/appmodules?$select=name&$filter=appmoduleid eq " + appid, false);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {
                    var results = JSON.parse(this.response);
                    if (results.value.length > 0) {

                        var appName = results.value[0]["name"];

                        if (appName == "TDG Management" || appName == "TDG Inspections" || appName == "TDG Planner") result = true;
                        else result = false;

                    }
                    else result = false;

                } else {

                    console.log(this.statusText);
                    result = false;
                }
            }
        };
        req.send();

        return result;
    }
       

    return {

        isInspectionApp: isInspectionApp,
        startInspectionReport: startInspectionReport,
    };


})(window, document);
