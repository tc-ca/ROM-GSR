var globalFormContext;

const FIELD_PRIMARY_CLASS = "ovs_primaryclass";
const FIELD_ERAP_CATEGORY = "ovs_erapcategory";
const FIELD_Compatibility_Group = "ovs_compatibility_group";
const FIELD_Name = "ovs_name";


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

    var primaryClassCode = formContext.getAttribute(FIELD_PRIMARY_CLASS);

    formContext = executionContext.getFormContext();
    debugger;
    //filter compatiblity group
  
    formContext.getControl(FIELD_Compatibility_Group).addPreSearch(filter_Compatibility_Group);
  

    primaryClassCode.removeOnChange(primaryClassCode_OnChange); // avoid binding multiple event handlers
    primaryClassCode.addOnChange(primaryClassCode_OnChange);

    //filterClassesOptionSet(formContext);
}

function primaryClassCode_OnChange(executionContext) {

    var formContext = executionContext.getFormContext();

    var pcType = glHelper.GetLookupName(formContext, FIELD_PRIMARY_CLASS);
    //glHelper.GetOptionsetValue(formContext, FIELD_PRIME_CLASS);

    
    
    getEnvironmentVariableInternal(formContext, "ovs_ErapCategory2PrimaryClass_Lookup", pcType);
    //filter compatibility group
    filter_Compatibility_Group();


    //set name field
    if (pcType != null && pcType != "")
    glHelper.SetValue(formContext, FIELD_Name, pcType);

    //"tdg_Env_Variables",
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
//filter group based on primary class
function filter_Compatibility_Group() {
    
    var pcType = glHelper.GetLookupName(globalFormContext, FIELD_PRIMARY_CLASS);
  
    var filter = "";
    switch (pcType) {
        case "1.1":
            //value = "ABCDEFGJL";
            filter = "<filter type='or'><condition attribute = 'ovs_name' operator = 'eq' value = 'A' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'B' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'C' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'D' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'E' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'F' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'G' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'J' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'L' /></filter>" 
                ;
       
            break;
        case "1.2":
            // "BCDEFGHJKL";
            filter = "<filter type='or'><condition attribute = 'ovs_name' operator = 'eq' value = 'B' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'C' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'D' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'E' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'F' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'G' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'H' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'J' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'K' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'L' /></filter >"
                ;
           
            break;
        case "1.3":
            // "CFGHJKL";
            filter = "<filter type='or'><condition attribute = 'ovs_name' operator = 'eq' value = 'C' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'F' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'G' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'H' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'J' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'K' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'L' /></filter >"
                ;
         
            break;
        case "1.4":
            // "BCDEFGS";
            filter = "<filter type='or'><condition attribute = 'ovs_name' operator = 'eq' value = 'B' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'C' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'D' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'E' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'F' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'G' />" +
                "<condition attribute = 'ovs_name' operator = 'eq' value = 'S' /></filter >";
         
            break;
        case "1.5":
            //   "D";
            filter = "<filter type='and'><condition attribute = 'ovs_name' operator = 'eq' value = 'D' /></filter >";
           
            break;
        case "1.6":
            //value = "N";
            filter = "<filter type='and'><condition attribute = 'ovs_name' operator = 'eq' value = 'N' /></filter >";
           
            break;
    }
 
    if (filter != "") 
      
        {
            globalFormContext.getControl(FIELD_Compatibility_Group).addCustomFilter(filter, "ovs_class_compatibility_group");
            glHelper.SetRequiredLevel(globalFormContext, FIELD_Compatibility_Group, true);
            glHelper.SetDisabled(globalFormContext, FIELD_Compatibility_Group, false);
        }
        else
        {
            glHelper.ResetField(globalFormContext, FIELD_Compatibility_Group);
            glHelper.SetRequiredLevel(globalFormContext, FIELD_Compatibility_Group, false);
            glHelper.SetDisabled(globalFormContext, FIELD_Compatibility_Group, true);
        }
       
    
}



