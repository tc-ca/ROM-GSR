

var WOC_RJ = (function (window, document) {


    //********************private methods*******************

    function updateCandidates(hq_candidate_id, local_candidate_id, justification, gridControl) {


        Xrm.Utility.showProgressIndicator("Working ...");
        var parameters = {};
        parameters.justification = justification;
        parameters.hq_candidate_id = { guid: hq_candidate_id };
        parameters.local_candidate_id = { guid: local_candidate_id };

        var ovs_ReplaceCandidatePostRequest = {
            justification: parameters.justification,
            hq_candidate_id: parameters.hq_candidate_id,
            local_candidate_id: parameters.local_candidate_id,

            getMetadata: function () {
                return {
                    boundParameter: null,
                    parameterTypes: {
                        "justification": {
                            "typeName": "Edm.String",
                            "structuralProperty": 1
                        },
                        "hq_candidate_id": {
                            "typeName": "Edm.Guid",
                            "structuralProperty": 1
                        },
                        "local_candidate_id": {
                            "typeName": "Edm.Guid",
                            "structuralProperty": 1
                        }
                    },
                    operationType: 0,
                    operationName: "ovs_ReplaceCandidatePost"
                };
            }
        };

        Xrm.WebApi.online.execute(ovs_ReplaceCandidatePostRequest).then(
            function success(result) {

                Xrm.Utility.closeProgressIndicator();

                if (result.ok) {
                    result.text().then(function (i) {
                        var data = JSON.parse(i);
                        if (data != null || typeof data !== 'undefined') {
                                 
                            if ((data.isOk != null)
                                && typeof data.isOk !== 'undefined')
                                if (data.isOk) {                                    

                                    //success message, refresh grid
                                    var alertStrings = { confirmButtonLabel: "Yes", text: "Successefuly replaced candidates" };

                                    Xrm.Navigation.openAlertDialog(alertStrings).then(
                                        function (success) {
                                            gridControl.refresh();
                                        },
                                        function (error) {
                                            console.log("alert dialog error: " + error.message);
                                        }
                                    );
                                } else {
                                    //error message, refresh grid
                                    var alertStrings = { confirmButtonLabel: "Yes", text: "Error replacing candidates: " + data.errormessage};

                                    Xrm.Navigation.openAlertDialog(alertStrings).then(
                                        function (success) {
                                            gridControl.refresh();
                                        },
                                        function (error) {
                                            console.log("alert dialog error: " + error.message);
                                        }
                                    );

                                }
                        }
                    }, function (error) {

                        console.log("ovs_ReplaceCandidatePost error: " + error.message);
                        Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Error: " + error.message });
                    });

                }
            },
            function (error) {
                Xrm.Utility.closeProgressIndicator();
                console.log("ReplaceCandidatePost error: " + error.message);
                Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Error: " + error.message });
            }
        );
    }

    function replaceANDjustify(hqApproved, local, LCID, gridControl) {

        var globalContext = Xrm.Utility.getGlobalContext();
        var clientUrl = globalContext.getClientUrl();

        if (LCID == 1033)
            resexResourceName = "ovs_Labels.1033.resx";
        else if (LCID == 1036)
            resexResourceName = "ovs_Labels.1036.resx";

        //var promptMessage = Xrm.Utility.getResourceString(resexResourceName, "");
        //var successMessage = Xrm.Utility.getResourceString(resexResourceName, "");

        //custom prompt

        var formParameters = {};
        formParameters["hqId"] = hqApproved.Id.replace('{', '').replace('}', '');
        formParameters["hqName"] = hqApproved.Name;
        formParameters["localId"] = local.Id.replace('{', '').replace('}', '');
        formParameters["localName"] = local.Name;


        var pageData = {
            pageType: "webresource",
            webresourceName: "ovs_/Candidates_Replacement_Justification.html",
            data: JSON.stringify(formParameters)
        };
        var navigationOptions = {
            target: 2,
            height: { value: 30, unit: "%" },
            width: { value: 40, unit: "%" },
            position: 1
        };
        Xrm.Navigation.navigateTo(pageData, navigationOptions).then(
            function success(returnValue) {

                //For HTML web resource => 
                //1. Send all data ? icluding transaltions ?
                //2. call Custom API for transactional update
                //3. refresh grid

                //returnValue is blank if Cance  button was clicked
                if (!returnValue) {

                    //replacement canceled
                    return;
                }

                //success
                updateCandidates(formParameters.hqId, formParameters.localId, returnValue.returnValue, gridControl)
            },
            function error() {
                console.log(error);
                Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Error: " + error });
            }
        );

    }    

    //********************private methods end***************

    //********************public methods***************

    function verifySelectedWOC(selectedRefs, selectedCount, LCID, gridControl) {

        //verify if current view is specific to Replacement
        var currentView = gridControl.getViewSelector().getCurrentView();
        //if no 
        // show message and switch to replacement view
        if (currentView.id != "{F29A4275-247D-EC11-8D20-0022483DBAFC}") {

            var confirmStrings = { text: "We redirect you to Candidates replacement view to continue", title: "Re-direct Dialog" };
            Xrm.Navigation.openConfirmDialog(confirmStrings).then(
                function (success) {
                    if (success.confirmed)
                        gridControl.getViewSelector().setCurrentView({ entityType: 'savedquery', id: '{F29A4275-247D-EC11-8D20-0022483DBAFC}', name: 'Candidates Replacement and Justification' });
                    else
                        console.log("Dialog closed using Cancel button or X.");
                });

        }

        //if yes 
        //verify count eq 2
        if (selectedCount != 2)
            Xrm.Navigation.openErrorDialog({ message: "Please, select one HQ approved candidate and one local substitude" });


        //candidates verification
        var firstHasHQ_NoLocal = false;
        var secondHasHQ_false = false;
        var row1 = selectedRefs[0];
        var row2 = selectedRefs[1];
        var selectedRow1 = gridControl.getGrid().getSelectedRows().get(row1.Id).data.entity.attributes;
        var selectedRow2 = gridControl.getGrid().getSelectedRows().get(row2.Id).data.entity.attributes;

        row1.hqflag = selectedRow1.get("ovs_hqflag").getValue();
        row1.regionflag = selectedRow1.get("ovs_regionflag").getValue();
        row1.priorityscore = selectedRow1.get("ovs_cdpriorityscore").getValue();
        row1.justification = selectedRow1.get("ovs_justification").getValue();

        row2.hqflag = selectedRow2.get("ovs_hqflag").getValue();
        row2.regionflag = selectedRow2.get("ovs_regionflag").getValue();
        row2.priorityscore = selectedRow2.get("ovs_cdpriorityscore").getValue();
        row2.justification = selectedRow2.get("ovs_justification").getValue();

        //verify if one of selected has HQ flag true 
        // and local is not true already
        //second must have HQ flag not true
        if (row1.hqflag == row2.hqflag && row1.hqflag == true) {
            Xrm.Navigation.openErrorDialog({ message: "Both candidates cannot be HQ-approwed" });
            return;
        }
        if (row1.hqflag == row2.hqflag && row1.hqflag != true) {
            Xrm.Navigation.openErrorDialog({ message: "At least one candidates must be HQ-approwed" });
            return;
        }

        // identify which one is HQ approved and who is the candidate
        //=> index 0 (row1) is HQ approved
        if (row1.hqflag == true && row1.regionflag != true) { firstHasHQ_NoLocal == true; secondHasHQ_false = true; }
        //check local is not set on true for HQ approved
        else if (row1.hqflag == true && row1.regionflag == true) {
            Xrm.Navigation.openErrorDialog({ message: "The HQ-approved candidate '" + row1.Name + "' have been sabstituted already.\r Please select a different candidate." });
            return;
        }
        else if (row2.hqflag == true && row2.regionflag == true) {
            Xrm.Navigation.openErrorDialog({ message: "The HQ-approved candidate '" + row2.Name + "' have been sabstituted already.\r Please select a different candidate." });
            return;
        }
        //else => { firstHasHQ_NoLocal == false; secondHasHQ_false = false; } => index 1 (row2) is HQ approved            

        //if valid  => call replaceANDjustify method
        if (row1.hqflag == true) {

            if (!isNaN(row1.priorityscore) && row1.priorityscore >= 100)
                replaceANDjustify(row1, row2, LCID, gridControl);
            else {
                Xrm.Navigation.openErrorDialog({
                    message: "Priority score for'" + row1.Name + "' has to be 100 or more."
                });
                return;
            }
        }

        else {

            if (!isNaN(row2.priorityscore) && row2.priorityscore >= 100)
                replaceANDjustify(row2, row1, LCID, gridControl);
            else {
                Xrm.Navigation.openErrorDialog({
                    message: "Priority score for'" + row2.Name + "' has to be 100 or more."
                });
            }

        }
    }



    return {

        verifySelectedWOC: verifySelectedWOC,
    };

})(window, document);