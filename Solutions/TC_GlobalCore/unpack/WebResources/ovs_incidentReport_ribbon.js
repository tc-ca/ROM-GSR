var irRibbon = (function (window, document) {


    function setPrimaryAndCalculate(irId, incidentId, LCID, gridControl, formContext) {

        //TO DO: localize
        Xrm.Utility.showProgressIndicator("Calculating...");

        var isReportForm = gridControl == null;

        //call custom action to calculate
        var parameters = {};
        parameters.incidentId = incidentId.replace('{', '').replace('}','');
        parameters.irId = irId.replace('{', '').replace('}', '');

        var ovs_CalculateIncidentScopeRequest = {
            incidentId: parameters.incidentId,
            irId: parameters.irId,

            getMetadata: function () {
                return {
                    boundParameter: null,
                    parameterTypes: {
                        "incidentId": {
                            "typeName": "Edm.String",
                            "structuralProperty": 1
                        },
                        "irId": {
                            "typeName": "Edm.String",
                            "structuralProperty": 1
                        }
                    },
                    operationType: 0,
                    operationName: "ovs_CalculateIncidentScope"
                };
            }
        };

        Xrm.WebApi.online.execute(ovs_CalculateIncidentScopeRequest).then(
            function success(result) {

                Xrm.Utility.closeProgressIndicator();

                if (result.ok) {
                    result.text().then(function (i) {
                        var data = JSON.parse(i);
                        if (data != null || typeof data !== 'undefined') {

                            if ((data.responceString != null)
                                && typeof data.responceString !== 'undefined') {
                                //refresh form or grid
                                if (data.isOK) {

                                    //refresh without save
                                    formContext.data.refresh(false);
                                    if (!isReportForm) gridControl.refresh();
                                }
                                else {

                                    Xrm.Navigation.openErrorDialog({ message: "Calculation went wrong. Error: " + data.executionError });

                                }
                            }
                        }
                    }, function (error) {

                        Xrm.Utility.closeProgressIndicator();
                        console.log("Regs error: " + error.message);
                        Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Error: " + error.message });
                    });
                }
            },
            function (error) {

                Xrm.Utility.closeProgressIndicator();
                Xrm.Navigation.openErrorDialog({ message: error.message });
            }
        );
    }

    function incidentFormGrid(irId, incidentId, LCID, gridControl, formConrol) {

        var formContext = formConrol;//incident form

        setPrimaryAndCalculate(irId, incidentId, LCID, gridControl, null);
    }

    function incidentReportForm(irId, LCID, formConrol) {

        var formContext = formConrol;//incident report form

        //get incidentId
        incidentId = formContext.getAttribute("ovs_incident_id").getValue()[0].id;

        setPrimaryAndCalculate(irId, incidentId, LCID, null, formContext);

    }

    //********************public methods***************

    return {

        incidentFormGrid: incidentFormGrid,
        incidentReportForm: incidentReportForm
    };

})(window, document);