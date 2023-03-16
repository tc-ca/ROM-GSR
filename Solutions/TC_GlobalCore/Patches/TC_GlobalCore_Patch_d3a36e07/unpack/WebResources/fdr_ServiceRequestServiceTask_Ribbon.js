///<reference path="../Utilities/GlobalHelper.js"/>

var ServiceRequestServiceTask_Ribbon = (function (window, document) {

    const timeOptions = {
        approveTime: async function (selectedControlSelectedItemIds, selectedControl) {
            if (selectedControlSelectedItemIds == null) { return; }
            if (selectedControl == null) { return };

            Xrm.Utility.showProgressIndicator("updating data");

            await selectedControlSelectedItemIds.forEach(item => {
                timeOptions.updateServiceTask(item, true)
            });

            //delay a little so views can be in synced when refresh occurs
            setTimeout(() => {
                Xrm.Utility.closeProgressIndicator();
                selectedControl.refresh();
            }, 2000);

        },
        rejectTime: async function (selectedControlSelectedItemIds, selectedControl) {
            if (selectedControlSelectedItemIds == null) { return; }
            if (selectedControl == null) { return };

            var globalContext = Xrm.Utility.getGlobalContext();
            var LCID = globalContext.userSettings.languageId;
            var resexResourceName = LCID === 1033 ? "ovs_Labels.1033.resx" : "ovs_Labels.1036.resx";
            var title = Xrm.Utility.getResourceString(resexResourceName, "ServiceRequestServiceTask.ribbon.Rejection.Form.Title");

            var qs = "param1=1&param2=2";
            var pageInput = {
                pageType: "webresource",
                webresourceName: "fdr_/TimeTrackingRejectionReason.html",
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



            var rejectionReason = window.top.localStorage.getItem('_fdr_rejection_reason');

            //rejection reason cannot be null
            if (rejectionReason == null) {
                return;
            }
            Xrm.Utility.showProgressIndicator("updating data");

            window.top.localStorage.removeItem('_fdr_rejection_reason');

            await selectedControlSelectedItemIds.forEach(item => {
                timeOptions.updateServiceTask(item, false, rejectionReason);
            });


            //delay a little so views can be in synced when refresh occurs
            setTimeout(() => {
                Xrm.Utility.closeProgressIndicator();
                selectedControl.refresh();
            }, 2000);






        },
        updateServiceTask: async function (id, isApproved, rejectionReason = "") {
            const [approved, rejected] = [4, 5];

            var entity = {};
            entity.fdr_approvetime = isApproved;
            entity.fdr_rejectionreason = rejectionReason;
            entity.statuscode = isApproved ? approved : rejected;

            //if time is being to set approved, check to see if time has been entered. before changing to status to approve.
            if(isApproved)
            {
                let isTimeEntered = false;
                await Xrm.WebApi.online.retrieveRecord("fdr_servicerequestservicetask", id, "?$select=fdr_istimeentered").then(
                    function success(result) {
                        isTimeEntered = result["fdr_istimeentered"];
                    },
                    function(error) {
                        Xrm.Navigation.openErrorDialog({ message: error.message });
                    }
                );

         
                if (!isTimeEntered){return}
            }

            await Xrm.WebApi.online.updateRecord("fdr_servicerequestservicetask", id, entity).then(
                function success(result) {
                    var updatedEntityId = result.id;
                },
                function (error) {
                    Xrm.Navigation.openErrorDialog({ message: error.message });
                }
            );

       
        },
    };

    return {
        approveTime: timeOptions.approveTime,
        rejectTime: timeOptions.rejectTime
    };
})(window, document);
