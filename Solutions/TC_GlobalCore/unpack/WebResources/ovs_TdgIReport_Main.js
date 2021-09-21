///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>

var ReportMain = (function (window, document) {

    //variables

    var currentWebApi;
    var isOffLine;
    var clientType;

    //********************public methods***************


    return {


        OnLoad: function (executionContext) {
            var formContext = executionContext.getFormContext();
            formContextGlobalRef = formContext;
            var globalContext = Xrm.Utility.getGlobalContext();

            isOffLine = glHelper.isOffline(executionContext);
            clientType = glHelper.getClientType(executionContext);

            if (isOffLine && clientType > 0) {

                //mobile or outlook, offline first
                currentWebApi = Xrm.WebApi.offline;
                clientUrl = "https://localhost:2525";
            } else {

                //web, online
                currentWebApi = Xrm.WebApi.online;
                clientUrl = globalContext.getClientUrl();
            }

            //set site
            var state = glHelper.GetValue(formContext,"statecode");

            if (state != 1) {
                var wo = glHelper.GetLookupAttrId(formContext, "ovs_workorderid");
                var site = glHelper.GetLookupAttrId(formContext, "ovs_siteid");


                currentWebApi.retrieveRecord("msdyn_workorder", wo.replace('{', '').replace('}', ''), "?$select=_msdyn_serviceaccount_value").then(
                    function success(result) {

                        var serviceaccount_id = result["_msdyn_serviceaccount_value"];
                        var serviceaccount_name = result["_msdyn_serviceaccount_value@OData.Community.Display.V1.FormattedValue"];
                        var serviceaccount_lookuplogicalname = result["_msdyn_serviceaccount_value@Microsoft.Dynamics.CRM.lookuplogicalname"];

                        if (site == null || site != serviceaccount_id) {

                            glHelper.SetLookup(formContext, "ovs_siteid", serviceaccount_lookuplogicalname, serviceaccount_id, serviceaccount_name);
                        }

                    },
                    function (error) {
                        Xrm.Navigation.openErrorDialog({ message: error.message });
                    }
                );
            }
        }
    }

})(window, document);