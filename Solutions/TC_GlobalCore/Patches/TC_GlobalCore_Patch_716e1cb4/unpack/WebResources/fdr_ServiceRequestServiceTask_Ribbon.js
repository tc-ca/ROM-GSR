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

            Xrm.Utility.closeProgressIndicator();


            selectedControl.refresh();

        },
        rejectTime: async function (selectedControlSelectedItemIds, selectedControl) {
            if (selectedControlSelectedItemIds == null) { return; }
            if (selectedControl == null) { return };

            Xrm.Utility.showProgressIndicator("updating data");

            await selectedControlSelectedItemIds.forEach(item => {
                timeOptions.updateServiceTask(item, false)
            });

            Xrm.Utility.closeProgressIndicator();


            selectedControl.refresh();

        },
        updateServiceTask: async function (id, isApproved) {
            var entity = {};
            entity.fdr_approvetime = isApproved;

            Xrm.WebApi.online.updateRecord("fdr_servicerequestservicetask", id, entity).then(
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
