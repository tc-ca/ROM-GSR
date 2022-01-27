///<reference path="../Utilities/GlobalHelper.js"/>

var NOPRibbon = (function (window, document) {


    const cepSamplingFunctions = {
        getConfigValues: async function (nopId) {
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

            await Xrm.WebApi.online.retrieveRecord("ovs_cdnop", nopId, "?$select=ovs_cepsampling_runcepselection,ovs_cepsampling_operationtype,ovs_cepsampling_recidivismsamplesize,ovs_cepsampling_recidivismviolationcount,ovs_cepsampling_samplesize,ovs_cepsampling_violationfoundbeforedate,ovs_cepsampling_violationfoundlastnyears,ovs_cepsampling_excluderiskcategory&$expand=ovs_cepsampling_cdnop_ovs_oversighttype($select=ovs_oversighttypeid),ovs_cepsampling_cdnop_qm_rclegislation($select=qm_rclegislationid)").then(
                function success(result) {

                    ovs_cepsampling_runcepselection = result["ovs_cepsampling_runcepselection"];
                    ovs_cepsampling_operationtype = result["ovs_cepsampling_operationtype"];
                    ovs_cepsampling_excluderiskcategory = result["ovs_cepsampling_excluderiskcategory"];
                    ovs_cepsampling_violationfoundbeforedate = result["ovs_cepsampling_violationfoundbeforedate"];
                    ovs_cepsampling_violationfoundlastnyears = result["ovs_cepsampling_violationfoundlastnyears"];
                    ovs_cepsampling_recidivismviolationcount = result["ovs_cepsampling_recidivismviolationcount"];
                    ovs_cepsampling_samplesize = result["ovs_cepsampling_samplesize"];
                    ovs_cepsampling_recidivismsamplesize = result["ovs_cepsampling_recidivismsamplesize"];
                    oversightTypeCount = 0;
                    legislationCount = 0;

                    for (let a = 0; a < result.ovs_cepsampling_cdnop_ovs_oversighttype.length; a++) {
                        oversightTypeCount = a;
                    }
                    for (let b = 0; b < result.ovs_cepsampling_cdnop_qm_rclegislation.length; b++) {
                        legislationCount = b;
                    }

                },
                function (error) {
                    Xrm.Utility.alertDialog(error.message);
                }

            );


            return {
                runcepselection: ovs_cepsampling_runcepselection,
                operationtype: ovs_cepsampling_operationtype,
                excluderiskcategory: ovs_cepsampling_excluderiskcategory,
                violationfoundbeforedate: ovs_cepsampling_violationfoundbeforedate,
                violationfoundlastnyears: ovs_cepsampling_violationfoundlastnyears,
                recidivismviolationcount: ovs_cepsampling_recidivismviolationcount,
                samplesize: ovs_cepsampling_samplesize,
                recidivismsamplesize: ovs_cepsampling_recidivismsamplesize,
                oversightTypeCount: oversightTypeCount,
                legislationCount: legislationCount
            };
        },
        validateRequiredFields: function (config) {

            let msg = "";
            let success = true;

            if (!config.operationtype) {
                msg += "> The Operation type" + " field is required." + "\n";
                success = false;
            }

            if (!config.violationfoundbeforedate) {

                msg += "> The Violation Found Prior to Date" + " field is required." + "\n";
                success = false;
            }

            if (!config.violationfoundlastnyears) {

                msg += "> The Violation found during the last N Years" + " field is required." + "\n";
                success = false;
            }

            if (!config.recidivismviolationcount) {

                msg += "> The Recidivism When Violation Count Equals" + " field is required." + "\n";
                success = false;
            }

            if (!config.samplesize) {

                msg += "> The CEP Sample Size" + " field is required." + "\n";
                success = false;
            }

            if (!config.recidivismsamplesize) {

                msg += "> The Recidivism Sample Size" + " field is required." + "\n";
                success = false;
            }

            return { success, msg }
        },
        validateOptionalFields: function (config) {

            let msg = "";
            let success = true;
            if (!config.excluderiskcategory) {

                msg += "> Exclude Risk Category" + " field" + "\n";
                success = false;
            }

            if (!config.legislationCount) {

                msg += "> Exclude violation" + " grid" + "\n";
                success = false;
            }
            if (!config.oversightTypeCount) {
                msg += "> Exclude inspections" + " grid" + "\n";
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
                await Xrm.Navigation.openConfirmDialog(confirmStrings).then(function (success) {
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

            if (primaryControl == null) {return};

            const formContext = primaryControl;

            let formType = glHelper.GetFormType(formContext);
            if (formType == 1) {return}; //on create

            let nopId = formContext.data.entity.getId().replace("{", "").replace("}", "");

            let cepConfigValues = await cepSamplingFunctions.getConfigValues(nopId);

            if (cepConfigValues.runcepselection) {
                glHelper.DisplayFormNotification(
                    "The CEP Selection Azure function is already running, please wait, when the process has been completed you will get an in-app notification.",
                    "ERROR",
                    10000
                );
                return;
                //exit early
            }

            let result = cepSamplingFunctions.validateRequiredFields(cepConfigValues);

            if (!result.success) {
                Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: result.msg, title: "Validation Check" });
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
                Xrm.Navigation.openConfirmDialog(confirmStrings).then(
                    function (success) {
                        if (success.confirmed) {
                            formContext.getAttribute("ovs_cepsampling_runcepselection").setValue(true);
                            formContext.data.entity.save();

                            glHelper.DisplayFormNotification(
                                "Requesting Azure function, if successful you will see an in-app notification in less than a minute, contact IT if required.",
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
                    "Requesting Azure function, if successful you will see an in-app notification in less than a minute, contact IT if required.",
                    "WARNING",
                    10000
                );
            }

        },
        runCEPReplacement: async function (primaryControl) {
            
            if (primaryControl == null) {return};
            const formContext = primaryControl;


            let formType = glHelper.GetFormType(formContext);
            if (formType == 1) {return}; //on create


            let nopId = formContext.data.entity
                .getId()
                .replace("{", "")
                .replace("}", "");

            console.log('button working')
        },
    };

    return {
        runCEPSelection: cepSamplingFunctions.runCEPSelection,
        runCEPReplacement: cepSamplingFunctions.runCEPReplacement
    };
})(window, document);
