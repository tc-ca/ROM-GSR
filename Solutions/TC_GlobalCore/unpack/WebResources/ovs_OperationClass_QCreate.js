var globalFormContext;

const FIELD_PRIME_CLASS = "ovs_primeclass";
const FIELD_ERAP_CATEGORY = "ovs_erapcategory";

var clientUrl;
var currentWebApi;
var isOffLine;
var clientType;


function OnLoad(executionContext) {
    //get context
    globalContext = glHelper.getGlobalContext();
    var formContext = executionContext.getFormContext();
    globalFormContext = formContext;

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

    var primaryClassCode = formContext.getAttribute(FIELD_PRIME_CLASS);
    primaryClassCode.removeOnChange(primaryClassCode_OnChange); // avoid binding multiple event handlers
    primaryClassCode.addOnChange(primaryClassCode_OnChange);
}

function primaryClassCode_OnChange(executionContext) {

    var formContext = executionContext.getFormContext();

    var pcType = glHelper.GetOptionsetValue(formContext, FIELD_PRIME_CLASS);
    getEnvironmentVariableInternal(formContext, "tdg_Env_Variables", pcType);
}


function getEnvironmentVariableInternal(formContext, varName, pcType) {
    "use strict";
    var json = null;
    currentWebApi.retrieveMultipleRecords("environmentvariabledefinition", "?$select=defaultvalue,displayname&$expand=environmentvariabledefinition_environmentvariablevalue($select=value)&$filter=schemaname eq '" + varName + "'").then(
        function success(result) {
            //&& result.entities[0]["environmentvariabledefinition_environmentvariablevalue"].length > 0)

            if (typeof (result.entities[0].defaultvalue) != "undefined") {
                json = result.entities[0].defaultvalue;
            }
            else if (typeof (result.entities[0]) != "undefined") {
                json = result.entities[0]["environmentvariabledefinition_environmentvariablevalue"][0].value;
            }
            else {
                json = null;
            }


            var data = JSON.parse(json);
            if (data != null || typeof data !== 'undefined') {

                var ec = data.filter(function (o) { return o.Primary_Classes == pcType; });
                if (ec.length > 0 && ec[0].ERAP_CATEGORY !== "") glHelper.SetOptionsetByValue(formContext, FIELD_ERAP_CATEGORY, ec[0].ERAP_CATEGORY);
                else glHelper.SetValue(formContext, FIELD_ERAP_CATEGORY, null);
            }
        },
        function (error) {
            console.log(error.message);
        }
    );
}
