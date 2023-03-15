$(document).ready(function () {
var FlowName = "CID_Portal_Validate_LLD_Entry";
//var addressType = $("#ovs_address_type: selected").text();

var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses",
    "qm_value", "qm_name eq '" + FlowName + "'");
if (EnvironmentSettingResult.length > 0) {
    var FlowURL = EnvironmentSettingResult[0]["qm_value"];
console.log("flow url : " + FlowURL);
var data = JSON.stringify({
  "Quarter": "SE 1/4",
  "Section": "6",
   "TownShip": "11",
   "Range": "12",
"Meridian": "W6"
});


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");



var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: data,
  redirect: 'follow'
};

fetch(FlowURL, requestOptions)
  .then(response => response.text())
  .then(result => {
     if (result == "Not found")
     { 
        console.log("resut " + result);
         return false ;
     }
     else
     {
         console.log("resut Success" + result);

     }
  })
  .catch(error => console.log('error', error));

}
    });

   