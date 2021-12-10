
var ResReqClean = (function (window, document) {


    function CleanResReq() {

        Xrm.Utility.showProgressIndicator("Cleaning...");

        var ovs_TDGReassignResourceRequirementsRequest = {
            getMetadata: function () {
                return {
                    boundParameter: null,
                    parameterTypes: {},
                    operationType: 0,
                    operationName: "ovs_TDGReassignResourceRequirements"
                };
            }
        };

        Xrm.WebApi.online.execute(ovs_TDGReassignResourceRequirementsRequest).then(
            function success(result) {
                if (result.ok) {
                    result.json().then(                   
                        function (responseBody) {

                            Xrm.Utility.closeProgressIndicator()
                            //show status
                            Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: responseBody.result});
                        }
                    );

                }
            },
            function (error) {

                Xrm.Utility.closeProgressIndicator();

                Xrm.Navigation.openErrorDialog({ message: error.message });
            }
        );
    }


    return {

        CleanResReq: CleanResReq
    };


})(window, document);