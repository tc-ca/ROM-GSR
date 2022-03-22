///<reference path="../Utilities/GlobalHelper.js"/>

var rnopHelper = (function (window, document) {
    let msg = "";
    let WOC_count = 0;

    var LCID;
    var msg_WOC_noStatusReason;
    var msg_WOC_noVarianceZero;
    var msg_WOC_noAssignedQuarter;
    var msg_WOC_noActiveWOC;
    

    const RunValidationFunction = {

        validateOnStatusReason: function (formContext) {

            if (glHelper.GetValue(formContext, "statuscode") != null && glHelper.GetValue(formContext, "statuscode") != 918640005) {
                msg += "> " + msg_WOC_noStatusReason + "\n";
                Xrm.Page.ui.setFormNotification(msg_WOC_noStatusReason, "WARNING", "StatusReason");
            }
        },
        validateOncdwocvariance:  function (formContext) {
          
            if (glHelper.GetValue(formContext, "ovs_cdwocvariance") != null && glHelper.GetValue(formContext, "ovs_cdwocvariance") != 0) {
                msg += "> " + msg_WOC_noVarianceZero + "\n";
                Xrm.Page.ui.setFormNotification(msg_WOC_noVarianceZero, "WARNING", "VarianceZero");
            }
    },
        validateIFWOCExists: async function (id) {

            var results = await Xrm.WebApi.online.retrieveMultipleRecords("ovs_workordercandidate", "?$select=ovs_workordercandidateid&$filter=_ovs_regionalnop_value eq " + id + " and ovs_regionflag eq true and statecode eq 0").then(
                function success(results) {

                    if (results != null && results.entities.length > 0) {
                        WOC_count = results.entities.length;
                    }
                     
                },
                function (error) {

                    Xrm.Utility.alertDialog(error.message);
                }
            );
        },
        validateOnAssignedQuarter: async function (id) {

            var results = await Xrm.WebApi.online.retrieveMultipleRecords("ovs_workordercandidate", "?$select=ovs_workordercandidateid&$filter=_ovs_plannedquarter_value eq null and  _ovs_regionalnop_value eq " + id + " and ovs_regionflag eq true and statecode eq 0").then(
                function success(results) {
               
                     if (results != null && results.entities.length > 0) {
                         msg += "> " + msg_WOC_noAssignedQuarter + "\n";
                         Xrm.Page.ui.setFormNotification(msg_WOC_noAssignedQuarter, "WARNING", "AssignedQuarter");
                     }
            },
                 function (error) {
                    
                Xrm.Utility.alertDialog(error.message);
            }
        );
        },
        validateOnInspectors: async function (id) {
           
            var results = await Xrm.WebApi.online.retrieveMultipleRecords("ovs_workordercandidate", "?$select=ovs_workordercandidateid&$filter=_ovs_primaryinspector_value eq null and  _ovs_regionalnop_value eq " + id + " and ovs_regionflag eq true and statecode eq 0").then(
                  function success(results) {
                      if (results != null && results.entities.length > 0) {
                          msg += "> " + msg_WOC_noInspectors + "\n";
                          Xrm.Page.ui.setFormNotification(msg_WOC_noInspectors, "WARNING", "Inspectors");
                      }
                       
            },
                  function (error) {
                      
                Xrm.Utility.alertDialog(error.message);
            }
        );
        },

        runValidation: async function (formContext, id) {

            var globalContext = Xrm.Utility.getGlobalContext();
            LCID = globalContext.userSettings.languageId;


            var resexResourceName = LCID === 1033 ? "ovs_Labels.1033.resx" : "ovs_Labels.1036.resx";

            msg_WOC_noStatusReason = Xrm.Utility.getResourceString(resexResourceName, "ovs_CDRegionalNOP.Validation.NoStatusReason");
            msg_WOC_noVarianceZero = Xrm.Utility.getResourceString(resexResourceName, "ovs_CDRegionalNOP.Validation.NoVarianceZero");
            msg_WOC_noAssignedQuarter = Xrm.Utility.getResourceString(resexResourceName, "ovs_CDRegionalNOP.Validation.NoAssignedQuarter");
            msg_WOC_noInspectors = Xrm.Utility.getResourceString(resexResourceName, "ovs_CDRegionalNOP.Validation.NoInspectors");
            msg_WOC_noActiveWOC = Xrm.Utility.getResourceString(resexResourceName, "ovs_CDRegionalNOP.Validation.ActiveWOC_DoNotExists");

              await RunValidationFunction.validateIFWOCExists(id);
            if (WOC_count > 0) {
                await RunValidationFunction.validateOnStatusReason(formContext);
                await RunValidationFunction.validateOncdwocvariance(formContext);
                await RunValidationFunction.validateOnAssignedQuarter(id);
                await RunValidationFunction.validateOnInspectors(id);
            }
            else {
                msg = "0";
                Xrm.Page.ui.setFormNotification(msg_WOC_noActiveWOC, "WARNING", "NOWOCS");
            }
            return msg;

        }
};
    return {
        ReturnValidationFunction: RunValidationFunction.runValidation
    };
})(window, document);
