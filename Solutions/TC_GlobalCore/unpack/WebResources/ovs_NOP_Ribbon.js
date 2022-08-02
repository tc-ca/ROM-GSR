///<reference path="../Utilities/GlobalHelper.js"/>

var NOPRibbon = (function (window, document) {

    var cepDialogOptions = { height: 300, width: 500 };

    const cepSamplingFunctions = {
        getConfigValues: async function (nopId) {
            let statecode = null;
            let ovs_cepsampling_runcepselection = null;
            let ovs_cepsampling_operationtype = null;
            let ovs_cepsampling_excluderiskcategory = null;
            let ovs_cepsampling_violationfoundbeforedate = null;
            let ovs_cepsampling_violationfoundlastnyears = null;
            let ovs_cepsampling_recidivismviolationcount = null;
            let ovs_cepsampling_samplesize = null;
            let ovs_cepsampling_recidivismsamplesize = null;
            let oversightTypeCount = 0;
            let legislationCount = 0;
            let workOrderCanidatesCount = 0;

            let ovs_cdfiscalyear = null;

            await Xrm.WebApi.online.retrieveRecord("ovs_cdnop", nopId, "?$select=_ovs_cdfiscalyearid_value,statecode,ovs_cepsampling_runcepselection,ovs_cepsampling_operationtype,ovs_cepsampling_recidivismsamplesize,ovs_cepsampling_recidivismviolationcount,ovs_cepsampling_samplesize,ovs_cepsampling_violationfoundbeforedate,ovs_cepsampling_violationfoundlastnyears,ovs_cepsampling_excluderiskcategory&$expand=ovs_cepsampling_cdnop_ovs_oversighttype($select=ovs_oversighttypeid),ovs_cepsampling_cdnop_qm_rclegislation($select=qm_rclegislationid),ovs_ovs_cdnop_ovs_cdregionalnop_CDNOPId($select=ovs_cdregionalnopid)").then(
                async function success(result) {
                    
                    ovs_cdfiscalyear = result["_ovs_cdfiscalyearid_value"];
                    statecode = result["statecode"];
                    ovs_cepsampling_runcepselection = result["ovs_cepsampling_runcepselection"];
                    ovs_cepsampling_operationtype = result["ovs_cepsampling_operationtype"];
                    ovs_cepsampling_excluderiskcategory = result["ovs_cepsampling_excluderiskcategory"];
                    ovs_cepsampling_violationfoundbeforedate = result["ovs_cepsampling_violationfoundbeforedate"];
                    ovs_cepsampling_violationfoundlastnyears = result["ovs_cepsampling_violationfoundlastnyears"];
                    ovs_cepsampling_recidivismviolationcount = result["ovs_cepsampling_recidivismviolationcount"];
                    ovs_cepsampling_samplesize = result["ovs_cepsampling_samplesize"];
                    ovs_cepsampling_recidivismsamplesize = result["ovs_cepsampling_recidivismsamplesize"];        
                    oversightTypeCount = result.ovs_cepsampling_cdnop_ovs_oversighttype.length;                
                    legislationCount = result.ovs_cepsampling_cdnop_qm_rclegislation.length;
                    
                    //loop through each region and total how many work order canditates
                    for (let b = 0; b < result.ovs_ovs_cdnop_ovs_cdregionalnop_CDNOPId.length; b++) {
                     await Xrm.WebApi.online.retrieveMultipleRecords("ovs_cdregionalnop", `?$expand=ovs_CDRegionalNOP_WorkOrderCandidate($select=ovs_workordercandidateid)&$filter=ovs_cdregionalnopid eq ${result.ovs_ovs_cdnop_ovs_cdregionalnop_CDNOPId[b]["ovs_cdregionalnopid"]}`).then(
                        function success(results) {
                            for (var i = 0; i < results.entities.length; i++) {
                                workOrderCanidatesCount += results.entities[i]["ovs_CDRegionalNOP_WorkOrderCandidate@odata.nextLink"].length;
                            }
                        },
                        function(error) {
                            Xrm.Utility.alertDialog(error.message);
                        }
                    );
                }
                },
                function (error) {

                    Xrm.Navigation.openErrorDialog({ message: error.message });
                }

            );


            return {
                fiscalyear: ovs_cdfiscalyear,
                statecode: statecode,
                runcepselection: ovs_cepsampling_runcepselection,
                operationtype: ovs_cepsampling_operationtype,
                excluderiskcategory: ovs_cepsampling_excluderiskcategory,
                violationfoundbeforedate: ovs_cepsampling_violationfoundbeforedate,
                violationfoundlastnyears: ovs_cepsampling_violationfoundlastnyears,
                recidivismviolationcount: ovs_cepsampling_recidivismviolationcount,
                samplesize: ovs_cepsampling_samplesize,
                recidivismsamplesize: ovs_cepsampling_recidivismsamplesize,
                oversightTypeCount: oversightTypeCount,
                legislationCount: legislationCount,
                workOrderCanidatesCount: workOrderCanidatesCount
            };
        },
        
        validateRequiredFields: function (config) {

            let msg = "";
            let success = true;

            if (!config.operationtype) {
                msg += "> Operation type" + " field is required." + "\n";
                success = false;
            }

            if (!config.violationfoundbeforedate) {

                msg += "> Violation Found Prior to Date" + " field is required." + "\n";
                success = false;
            }

            if (!config.violationfoundlastnyears) {

                msg += "> Violation found during the last N Years" + " field is required." + "\n";
                success = false;
            }

            if (!config.recidivismviolationcount) {

                msg += "> Recidivism When Violation Count Equals" + " field is required." + "\n";
                success = false;
            }

            if (!config.samplesize) {

                msg += "> CEP Sample Size" + " field is required." + "\n";
                success = false;
            }

            if (!config.recidivismsamplesize) {

                msg += "> Recidivism Sample Size" + " field is required." + "\n";
                success = false;
            }

            return { success, msg }
        },
        validateOptionalFields: function (config) {

            let msg = "";
            let success = true;
            if (!config.excluderiskcategory) {

                msg += "> Exclude inspected previous fiscal year sites with risk category" + " field" + "\n";
                success = false;
            }

            if (!config.legislationCount) {

                msg += "> Exclude violation of type" + "\n";
                success = false;
            }
            if (!config.oversightTypeCount) {
                msg += "> Exclude inspections of type" + "\n";
                success = false;
            }

            return { success, msg };

        },
        validateFoundBeforeDate: async function (config) {
            let msg = "";
            let _success = true;

            let today = new Date();
            let dd = String(today.getDate()).padStart(2, "0");
            let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
            let yyyy = today.getFullYear();

            today = yyyy + "-" + mm + "-" + dd;
            let beforeDate = config.violationfoundbeforedate.substring(0, 10);

            if (config.violationfoundbeforedate) {

                if (Date.parse(beforeDate) !== Date.parse(today)) {
                    msg += "Violation Found Prior to Date" + " does not match today's date, would you like to continue anyways?" + "\n";
                    _success = false;
                }

            }


            if (!_success) {
                let confirmStrings = {
                    text: msg,
                    title: "Validation Check",
                    confirmButtonLabel: "Continue",
                };
                await Xrm.Navigation.openConfirmDialog(confirmStrings, cepDialogOptions).then(function (success) {
                    if (success.confirmed) {

                        _success = true;

                    } else {
                        _success = false;
                    }
                });
            }
            return { success: _success }
        },
        validateWorkOrderCanidatesCount: async function (config) {
   
        let _success = true;

        if (config.workOrderCanidatesCount > 0) {

           let confirmStrings = {
                text: 'There are existing GC CEP WOCs in the NOP. This will clear all existing strata information and select a new set of CEP Operations. WOCs will not be affected. Are you sure you would like to continue?',
                title: "Warning",
                confirmButtonLabel: "Continue",
            };
            await Xrm.Navigation.openConfirmDialog(confirmStrings, cepDialogOptions).then(function (success) {
                if (success.confirmed) {

                    _success = true;

                } else {
                    _success = false;
                }
            });

        }

        return { success: _success }
    },
        runCEPSelection: async function (primaryControl) {

            if (primaryControl == null) { return };

            const formContext = primaryControl;

            let formType = glHelper.GetFormType(formContext);
            if (formType == 1) { return }; //on create

            formContext.data.refresh(); // the azure function changes the run cep selection status on complete, refresh page to get lastest status.

            let nopId = formContext.data.entity.getId().replace("{", "").replace("}", "");
            
            //add progress as there is a little delay in retrieving data from web api
            Xrm.Utility.showProgressIndicator('Validating Data');
            let cepConfigValues = await cepSamplingFunctions.getConfigValues(nopId);
            Xrm.Utility.closeProgressIndicator();

            var active = 0;
            if (cepConfigValues.statecode != active) {
              glHelper.DisplayFormNotification(
                "Error! CEP selections can only run when NOP is active",
                "ERROR",
                10000
              );
              return;
              //exit early
            }

            
            let result = await cepSamplingFunctions.validateWorkOrderCanidatesCount(cepConfigValues);

            if (!result.success) {
                return //exit early
            }
            
            if (cepConfigValues.runcepselection) {
                glHelper.DisplayFormNotification(
                    "The CEP Selection Azure function is already running, please wait, when the process has been completed you will get an in-app notification.",
                    "ERROR",
                    10000
                );
                return;
                //exit early
            }

            result = cepSamplingFunctions.validateRequiredFields(cepConfigValues);

            if (!result.success) {
                Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: result.msg, title: "Validation Check" }, cepDialogOptions);
                return; // exit early
            }

            result = await cepSamplingFunctions.validateFoundBeforeDate(cepConfigValues);

            if (!result.success) {
                return //exit early
            }


            result = cepSamplingFunctions.validateOptionalFields(cepConfigValues);

            if (!result.success) {
                let confirmStrings = {
                    text: result.msg,
                    title: "Validation Check",
                    confirmButtonLabel: "Continue",
                    subtitle: "Missing values for optional fields, click continue to ignore warning and proceed with CEP Selection.",
                };
                Xrm.Navigation.openConfirmDialog(confirmStrings,cepDialogOptions).then(
                    function (success) {
                        if (success.confirmed) {
                            formContext.getAttribute("ovs_cepsampling_runcepselection").setValue(true);
                            formContext.data.entity.save();

                            glHelper.DisplayFormNotification(
                              "Requesting Azure function, if successful you will see an in-app notification shortly, if not please manually view notifications or contact IT for help.",
                              "WARNING",
                              10000
                            );
                        }

                        else {
                            return; //exit early

                        }
                    });
            }
            else {
                formContext.getAttribute("ovs_cepsampling_runcepselection").setValue(true);
                formContext.data.entity.save();
                glHelper.DisplayFormNotification(
                  "Requesting Azure function, if successful you will see an in-app notification shortly, if not please manually view notifications or contact IT for help.",
                  "WARNING",
                  10000
                );
            }

        }
    };




    const generateWOConDemand = {

        getConfigValues: async function (nopId) {
            let statecode = null;
            let ovs_rungenerateworkordercandidates = null;
          

            let ovs_cdfiscalyear = null;

            await Xrm.WebApi.online.retrieveRecord("ovs_cdnop", nopId, "?$select=ovs_rungenerateworkordercandidates,statecode").then(
                async function success(result) {
                    statecode = result["statecode"];
                    ovs_rungenerateworkordercandidates = result["ovs_rungenerateworkordercandidates"];
                },
                function (error) {

                    Xrm.Navigation.openErrorDialog({ message: error.message });
                }

            );


            return {
                statecode: statecode,
                runGenerateWOC: ovs_rungenerateworkordercandidates,
            };
        },

        runGenerateWOC: async function (primaryControl) {

            if (primaryControl == null) { return };

            const formContext = primaryControl;

            let formType = glHelper.GetFormType(formContext);
            if (formType == 1) { return }; //on create

            let nopId = formContext.data.entity.getId().replace("{", "").replace("}", "");

            //add progress as there is a little delay in retrieving data from web api
            Xrm.Utility.showProgressIndicator('Validating Data');
            let GWOCConfigValues = await generateWOConDemand.getConfigValues(nopId);
            Xrm.Utility.closeProgressIndicator();

            var active = 0;
            if (GWOCConfigValues.statecode != active) {
                glHelper.DisplayFormNotification(
                    "Error! Generating Work Order Candidates can only run when NOP is active",
                    "ERROR",
                    10000
                );
                return;
                //exit early
            }

            if (GWOCConfigValues.runGenerateWOC) {
                glHelper.DisplayFormNotification(
                    "The Generating Work Order Candidates is already running, please wait, when the process has been completed.",
                    "ERROR",
                    10000
                );
                return;
                //exit early
            }

            formContext.getAttribute("ovs_rungenerateworkordercandidates").setValue(true);
                formContext.data.entity.save();
                glHelper.DisplayFormNotification(
                    "The Work Order Candidates Generation process has started.",
                    "WARNING",
                    10000
                );
        }
    };


    return {
        runCEPSelection: cepSamplingFunctions.runCEPSelection,
        runGenerateWOC: generateWOConDemand.runGenerateWOC
    };
})(window, document);
