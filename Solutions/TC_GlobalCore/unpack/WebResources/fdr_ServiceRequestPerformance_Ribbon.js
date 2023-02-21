///<reference path="../Utilities/GlobalHelper.js"/>

var ServiceRequestPerformance_Ribbon = (function (window, document) {

    const performance = {
        //functions works on fdr_servicerequest and fdr_servicerequestperformance ribbon and both on form (one id) and grid (multiple ids)
        approvePerformance: async function (selectedControlSelectedItemIds, selectedControl, isGridControl, primaryEntityTypeName) {
            if (selectedControlSelectedItemIds == null) { return; }
            if (selectedControl == null) { return };
            var arrayOfIds = [];
            var performanceIds = [];

            if (isGridControl) {
                arrayOfIds = selectedControlSelectedItemIds;
            } else {
                arrayOfIds.push(selectedControlSelectedItemIds);
            }

            if (primaryEntityTypeName == "fdr_servicerequest") {
                //get performance id

                for (let i = 0; i < arrayOfIds.length; i++) {
                    const element = arrayOfIds[i];
                    var id = await performance.getServiceRequestPerformanceAPI(element);
                    performanceIds.push(id);
                }

            }
            else if (primaryEntityTypeName == "fdr_servicerequestperformance") {
                performanceIds = arrayOfIds
            }

            Xrm.Utility.showProgressIndicator("updating data");

            performanceIds.forEach((item) => {
                performance.approvePerformanceAPI(item);
            });

            //delay a little so views can be in synced when refresh occurs
            setTimeout(() => {
                Xrm.Utility.closeProgressIndicator();
                if (isGridControl) {
                    selectedControl.refresh();
                } else {
                    selectedControl.data.refresh();
                }
            }, 2000);

        },
        //functions works on fdr_servicerequest and fdr_servicerequestperformance ribbon and both on form (one id) and grid (multiple ids)
        adjustPerformanceFromServiceRequestRibbon: async function (selectedControlSelectedItemIds, selectedControl, isGridControl, primaryEntityTypeName) {
            if (selectedControlSelectedItemIds == null) { return; }
            if (selectedControl == null) { return };
            var arrayOfIds = []
            var performanceIds = [];

            if (isGridControl) {
                arrayOfIds = selectedControlSelectedItemIds;

            }
            else {
                arrayOfIds.push(selectedControlSelectedItemIds);

            }

            if (primaryEntityTypeName == "fdr_servicerequest") {
                //get performance id
                for (let i = 0; i < arrayOfIds.length; i++) {
                    const element = arrayOfIds[i];
                    var id = await performance.getServiceRequestPerformanceAPI(element);
                    performanceIds.push(id);
                }
            }
            else if (primaryEntityTypeName == "fdr_servicerequestperformance") {
                performanceIds = arrayOfIds
            }


            //must have performance id, request must be active

            var globalContext = Xrm.Utility.getGlobalContext();
            var LCID = globalContext.userSettings.languageId;
            var resexResourceName = LCID === 1033 ? "ovs_Labels.1033.resx" : "ovs_Labels.1036.resx";
            var title = LCID === 1033 ? "Performance Adjustment" : "Ajustement des performances";//Xrm.Utility.getResourceString(resexResourceName, "ServiceRequestPerformance.ribbon.Adjustment.Form.Title");

            var qs = "param1=1&param2=2";
            var pageInput = {
                pageType: "webresource",
                webresourceName: "fdr_/FDR_PerformanceAdjustment.html",
                data: encodeURIComponent(qs),
            };
            var navigationOptions = {
                target: 2, // 2 is for opening the page as a dialog.
                width: 400, // default is px. can be specified in % as well.
                height: 300, // default is px. can be specified in % as well.
                position: 2, // Specify 1 to open the dialog in center; 2 to open the dialog on the side. Default is 1 (center).
                title: title,
            };

            //popup will set rejection reason in localstate
            await Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
                function success(e) {
                    debugger;
                },
                function error(e) {
                    // Handle errors
                }
            );



            var performanceAdjustment = JSON.parse(window.top.localStorage.getItem('_fdr_performanceAdjustment'));

            //performance adjustment cannot be null
            if (performanceAdjustment == null) {
                return;
            }
            Xrm.Utility.showProgressIndicator("updating data");

            window.top.localStorage.removeItem("_fdr_performanceAdjustment");

        
            for (let i = 0; i < performanceIds.length; i++) {
                const id = performanceIds[i];
                const { justification, adjustmentNumber } = performanceAdjustment;
                await performance.adjustPerformanceAPI(id, adjustmentNumber, justification);

            }

            //delay a little so views can be in synced when refresh occurs
            setTimeout(() => {
                Xrm.Utility.closeProgressIndicator();

                if (isGridControl) {
                    selectedControl.refresh();

                }
                else {
                    selectedControl.data.refresh();
                }
            }, 2000);






        },
        displayForPerformanceView: async function (selectedControl) {
            if (selectedControl == null) { return };

            var currentView = selectedControl.getViewSelector().getCurrentView().name;
            var targetedView = ["Service Standard Not Met", "Norme de service non satisfaite"]; 
            return targetedView.includes(currentView);
        },

        adjustPerformanceAPI: async function (id, adjustmentNumber, justificationText) {
            var entity = {};
            entity.fdr_adjustmentnbr = adjustmentNumber;
            entity.fdr_adjustmentjustificationtxt = justificationText;

            Xrm.WebApi.online.updateRecord("fdr_servicerequestperformance", id, entity).then(
                function success(result) {
                    var updatedEntityId = result.id;
                },
                function (error) {
                    Xrm.Navigation.openErrorDialog({ message: error.message });
                }
            );
        },
        approvePerformanceAPI: async function (id) {
            const approved = 3;

            var entity = {};
            entity.statuscode = approved;
            Xrm.WebApi.online.updateRecord("fdr_servicerequestperformance", id, entity).then(
                function success(result) {
                    var updatedEntityId = result.id;
                },
                function (error) {
                    Xrm.Navigation.openErrorDialog({ message: error.message });
                }
            );
        },
        getServiceRequestPerformanceAPI: async function (id) {
            var performanceId = null;
            await Xrm.WebApi.online.retrieveRecord("fdr_servicerequest", id, "?$select=_fdr_servicerequestperformance_value").then(
                function success(result) {
                    performanceId = result["_fdr_servicerequestperformance_value"];
                },
                function (error) {
                    Xrm.Utility.alertDialog(error.message);
                }
            );
            return performanceId;

        }
    };

    return {
        approvePerformance: performance.approvePerformance,
        adjustPerformance: performance.adjustPerformanceFromServiceRequestRibbon,
        displayForPerformanceView: performance.displayForPerformanceView
    };
})(window, document);
