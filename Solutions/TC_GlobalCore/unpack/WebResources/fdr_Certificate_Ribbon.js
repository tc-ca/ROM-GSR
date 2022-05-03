
var CertificateRibbon = (function (window, document) {

    //********************variables*******************


    var formContext;
    var userSettings = Xrm.Utility.getGlobalContext().userSettings;
    var pageInput = Xrm.Utility.getPageContext().input;
    var obj = {};
    obj.wo_id = pageInput.entityId.replace("{", "").replace("}", "");
    obj.triggering_user_id = userSettings.userId.replace("{", "").replace("}", "");
    obj.triggering_user_name = userSettings.userName;



    //********************private methods*******************

    function refreshGrids() {

        //set focus on tab
        var tab = formContext.ui.tabs.get("tab_certificates");
        tab.setFocus();
        //refresh grid
        var gridActives = formContext.getControl("subgrid_certificates");
        gridActives.refresh();

    }

  

    function validateCertificateGeneration() {
        //todo waiting for requirement to implement
        return true;
    }



    //********************private methods end***************



    //********************public methods***************

    function openCertificateGenerationForm(gridControl) {

        formContext = window.top.QuickCreateHelper.formContext;


        if (!validateCertificateGeneration()) return;

        if (formContext.data.entity.getIsDirty()) {

            var confirmStrings = { text: "Form data was modifiied. The form will be saved prior to the certificate run. Continue?", title: "Confirmation Dialog" };
            var confirmOptions = { height: 200, width: 450 };
            Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
                function (success) {
                    if (success.confirmed) {

                        formContext.data.save().then(function () {

                        }, function (e) {

                            Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Cannot save the form. Error: " + this.statusText });

                        });
                    }
                    else return;
                }
            );


        }
        else { 
        var formParameters = {};
        //formParameters["ovs_generalcomments"] = "---";
        formParameters["fdr_ovs_mocregistration"] = obj.wo_id;
        //formParameters["ovs_workorderidname"] = formContext.getAttribute("msdyn_name").getValue();
        formParameters["ovs_workorderidtype"] = pageInput.entityName;
 


        var pageData = {
          pageType: "entityrecord",
          entityName: "fdr_certificate",
          formId: "2537d3e3-24c8-48c9-a8ba-076eb87b524a",
          data: formParameters,
        };
        var navigationOptions = {
            target: 2,
            height: { value: 80, unit: "%" },
            width: { value: 70, unit: "%" },
            position: 1
        };
        Xrm.Navigation.navigateTo(pageData, navigationOptions).then(
            function success(result) {
            },
            function error() {
                console.log(error);
                Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Error: " + error });
            }
        );
         }
    }



    return {
      openCertificateGenerationForm: openCertificateGenerationForm,
    };

})(window, document);
