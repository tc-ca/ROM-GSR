//
// Web Page-Create Site.js
//    

$(document).ready(function () {
    debugger;


    $("#EntityFormPanel").before('<div id="ErrorMessageDiv" class="alert alert-danger" role="alert" style="display: none;">  </div>');

    $("#createdon").closest("tr").hide();
    $("#cid_createdbyregistrant_label").closest("tr").hide();
    if (sessionStorage.getItem('frominyearsites') == "true" || sessionStorage.getItem('fromannualcompliance') == 'true') {
        tdg.c.weblink_hide("/RegistrationWizard/");
        tdg.c.weblink_hide("/Bulk_Site_Upload/");
    }
    else {
        tdg.c.weblink_hide("/company_dashboard/");
        tdg.c.weblink_hide("/Bulk_Site_Update/");
    }

    // TONY - TODO
    $(".breadcrumb li").each(function () {
        if ($(this).text() == '\n  Site Registration\n ') {
            if (sessionStorage.getItem('frominyearsites') == "true") {
                var bredcrumb = $(this);
                bredcrumb.text('\n My Sites\n');
                bredcrumb[0].innerHTML = "\n  <a href=\"/my-sites/\" title=\"My Sites\">My Sites</a>\n ";
            }
            else {
                var bredcrumb = $(this);
                bredcrumb[0].innerHTML = "\n  <a href=\"/RegistrationWizard/\" title=\"Site Registration\">Site Registration</a>\n ";
            }
        }
    });
});

if (window.jQuery) {
    (function ($) {
        if (typeof (entityFormClientValidate) != 'undefined') {

            var originalValidationFunction = entityFormClientValidate;
            if (originalValidationFunction && typeof (originalValidationFunction) == "function") {
                entityFormClientValidate = function () {
                    originalValidationFunction.apply(this, arguments);
                    // do your custom validation here
                    // return false; // to prevent the form submit you need to return false
                    // end custom validation.   
                   
                    var account_id = '{{user.parentcustomerid.Id}}';
                    var addressType = $("#ovs_address_type").val();
                    switch (addressType) {
                        case "1":
                            // legal land description
                            debugger;
                       
                            var lldProvince = $("#ovs_lld_province").val();
                            var quarter = $("#ovs_lld_quarter").val();
                            var section = $("#ovs_lld_section").val();
                            var township = $("#ovs_lld_township").val();
                            var range = $("#ovs_lld_range").val();
                            var meridian = $("#ovs_lld_meridian").val();

                            if ((lldProvince == '') || (quarter == '') || (section == '') || (township == '') || (range == '') || (meridian == '')) {
                                return true;
                            }
                            var parameters = {};
                            parameters.Parent_Id = account_id; // Edm.String
                            if (lldProvince != (null || "")) { parameters.Lld_Province = parseInt(lldProvince); }   // Edm.Int32                    
                            if (quarter != (null || "")) { parameters.Lld_Quarter = parseInt(quarter); }   // Edm.Int32    
                            if (section != (null || "")) { parameters.Lld_Section = parseInt(section); }   // Edm.Int32                    
                            if (township != (null || "")) { parameters.Lld_Township = parseInt(township); }   // Edm.Int32                    
                            if (range != (null || "")) { parameters.Lld_Range = parseInt(range); }   // Edm.Int32                    
                            if (meridian != (null || "")) { parameters.Lld_Meridian = parseInt(meridian); }   // Edm.Int32 
                            parameters.AddressType = 1; // Edm.Int32

                            var FlowName = "CID_Flow_Site_Duplicate_Validation_Test";
                            var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");

                            if (EnvironmentSettingResult.length > 0) {
                                var FlowURL = EnvironmentSettingResult[0]["qm_value"];
                                return CheckDuplicate(FlowURL, parameters);
                            } //end check if flow url found
                            else {
                                return true;
                            }

                            break;

                        case "2":
                            // lat/long
                            debugger;
                            if (($("#address1_latitude").val() == '') || ($("#address1_longitude").val() == '')) {
                                return true;
                            }
                            var latitude = $("#address1_latitude").val();
                            var longitude = $("#address1_longitude").val();
                            $('#ErrorMessageDiv').css('display', 'none');
                            var checkresult = CheckLatLongDecimal();
                            if (checkresult == false) {
                                return false;
                            }
                            else {

                                var parameters = {};
                                parameters.Parent_Id = account_id; // Edm.String
                                parameters.AddressType = 2; // Edm.Int32
                                if (latitude != (null || "")) { parameters.Address1_Latitude = parseFloat(latitude).toFixed(4); }   // Edm.Float                    
                                if (longitude != (null || "")) { parameters.Address1_Longitude = parseFloat(longitude).toFixed(4); }   // Edm.Float    

                                var FlowName = "CID_Flow_Site_Duplicate_Validation_Test";
                                var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");

                                if (EnvironmentSettingResult.length > 0) {
                                    var FlowURL = EnvironmentSettingResult[0]["qm_value"];
                                    return CheckDuplicate(FlowURL, parameters);
                                }
                                else { return true; }
                            }

                            break;

                        default:
                            //postal
                            debugger;

                            

                            var address1_line1 = $("#address1_line1").val();
                            var address1_line2 = $("#address1_line2").val();
                            var address1_line3 = $("#address1_line3").val();
                            var address1_postalcode = $("#address1_postalcode").val();

                            if ((address1_line1 == '') || ($("#address1_city").val() == '') || (address1_postalcode == '') || ($("#ovs_address1_province").val() == '')) {
                                return true;
                            }

                            var parameters = {};
                            parameters.Parent_Id = account_id; // Edm.String
                            parameters.AddressType = 0; // Edm.Int32
                            parameters.Address1_Postal = address1_postalcode; // Edm.String
                            parameters.Address1_Line1 = address1_line1; // Edm.String
                            parameters.Address1_Line2 = address1_line2; // Edm.String
                            parameters.Address1_Line3 = address1_line3; // Edm.String

                            var FlowName = "CID_Flow_Site_Duplicate_Validation_Test";
                            var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");

                            if (EnvironmentSettingResult.length > 0) {
                                var FlowURL = EnvironmentSettingResult[0]["qm_value"];
                                return CheckDuplicate(FlowURL, parameters);
                            }
                            else
                                return true;

                            break;
                    }
                };
            }
        }
    }(window.jQuery));
}

var cb = function (v) { console.log('value', v); return v; };

var CheckDuplicate = function (_flowURl, _parameters) {
    var req = new XMLHttpRequest();
    req.open("POST", _flowURl, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                debugger;

                var result = JSON.parse(this.response);
                var duplicatefound = result["DuplicateFound"]; // Edm.Boolean
                var currentSiteOwner = result["CurrentSiteOwnerCompany"]; //string
                var currentSiteId = result["CurrentSiteId"]; //string currentSiteId
                var currentSiteOwnerId = result["CurrentSiteOwnerCompanyId"]; //string CurrentSiteOwnerCompanyId
                var InactiveSiteFound = result["InactiveSiteFound"];
                if (InactiveSiteFound == true) {
                    var ReActivatedSiteGUID = result["InactiveSiteGUID"];
                    var currentURL = window.location.href;
                    console.log("split :");
                    console.log(currentURL.replace("https://", "").split("/")[0]);
                    window.location.href = "~/SiteRegistrationWizard?id=" + ReActivatedSiteGUID + "&newsite=true"
                    //currentURL.replace("https://", "").split("/")[0] +"/SiteRegistrationWizard?" +ReActivatedSiteGUID;
                    return false;

                }

                else if (duplicatefound) {
                    var message = tdg.error_message.message("m000203");
                    //"There is already an active Organization at this address. Is your Organization sharing this Site with another Organization or is this the result of a sale, merger or acquisition? If you entered the wrong address, select cancel and re-enter the correct address.";
                    //tdg.error_message.message("m000131");
                    //tdg.c.dialog_YN
                    DialogWith_DropDown(message, (ans) => {
                        var accName = "";
                        var accId = "";
                        var contact_id = '{{user.id}}';
                        if (ans) {
                            /*  var accountResult = tdg.webapi.SelectedColumnlist("accounts", "cid_crabusinessnumber,ovs_legalname", "accountid eq " + _parameters.Parent_Id);
                              if (accountResult.length > 0) {
                                  accName = accountResult[0]["ovs_legalname"];
                                  accId = accountResult[0]["cid_crabusinessnumber"];
                              }
                             var data = {
                                  "ovs_RequestType@odata.bind": "/ovs_supportrequesttypes(4c715208-2ac7-ed11-b597-0022483d0343)", // Lookup - DuplicateActiveSiteBlock
                                  "ovs_Company@odata.bind": "/accounts(" + _parameters.Parent_Id + ")", // Lookup
                                  //"subject": "A user is tring to claim a Site which is owned by another organization | Legal Name: " + accName + "| Address Type: " + AddrType,
                                  "statuscode": 1,
                                  "ovs_priority": 5,
                                  "ovs_requestdetails": "A new Site for the organization '" + accName + "' is being requested to be created, however Site ID '"
                                      + currentSiteId + "', of the organization '" + currentSiteOwner + "', already exists as an active Site at that location. The new Site will be blocked until the existing Site is inactivated by the original organization. \n\n This request needs to be monitored to ensure that the second organization follows through on the inactivation request, at which time this entry will automatically be marked as Complete. Otherwise the new Site will be blocked from being created, and in doing so that organization will be prevented from completing their Registration or Annual Compliance.\n" // Multiline Text
                                  //record["ovs_Site@odata.bind"] = "/accounts(22222222-2222-2222-2222-222222222222)"; // Lookup
                              };*/
                            // tdg.webapi.create("ovs_supportrequests", data);
                            // Send email to the current owner
                            /*  var SendEmailFlowData = '{' +
                                  '"AccountId": "' + currentSiteOwnerId + '",' +
                                  '"EmailCode": "RD-1",' +
                                  '"SiteId": "' + currentSiteId + '",' +
                                  '"Portal_URL": "https://' + window.location.hostname + '"' +
                                  '}';*/

                            //  tdg.cid.flow.Call_Flow("CID_Send_Portal_Contact_Email_by_Email_Code", SendEmailFlowData);
                            //  var sucessmessage = tdg.error_message.message("m000140");
                            //  tdg.c.dialog_OK(sucessmessage);
                            entityFormClientValidate = true;
                            originalValidationFunction = true;
                            $("#InsertButton").click();
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                }
                else {
                    entityFormClientValidate = true;
                    originalValidationFunction = true;
                    $("#InsertButton").click();
                    return true;
                }
            }
            else
                debugger;
            return false;

        } //end ready status
    }; //end on ready function
    req.send(JSON.stringify(_parameters));
}

function CheckLatLongDecimal() {

    var Lat = $("#address1_latitude").val();
    var Longtitude = $("#address1_longitude").val();
    var lang = sessionStorage.getItem("selected_language");
    var decimalIndexLat = -1;
    var decimalIndexLong = -1;
    var splitChar = ".";
    if (lang == 'fr') {
        splitChar = ",";
    }

    decimalIndexLat = Lat.toString().indexOf(splitChar);
    //(",");
    decimalIndexLong = Longtitude.toString().indexOf(splitChar);


    var error = "";
    var checkResult = true;
    //check latitude
    //m000143
    var m000143 = "<p>" + tdg.error_message.message("m000143") + "</p>";
    var m000144 = "<p>" + tdg.error_message.message("m000144") + "</p>";

    if (decimalIndexLat < 0) {
        checkResult = false;
        error = m000143;
    }
    else {
        var numberofdecimal = 0;

        numberofdecimal = Lat.toString().split(splitChar)[1].length;

        if (numberofdecimal != 4) {
            error = m000143;
            //"<p>Please enter a Latitude as a decimal, with the full four digit decimal point (e.g. 41.3251)</p>";
            checkResult = false;
        }
    }

    //check longtitude
    if (decimalIndexLong < 0) {
        checkResult = false;
        error = error + m000144;
    }
    else {
        var Longtitudenumberofdecimal = 0;
        // = Longtitude.toString().split('.')[1].length;
        Longtitudenumberofdecimal = Longtitude.toString().split(splitChar)[1].length;

        if (Longtitudenumberofdecimal != 4) {
            error = error + m000144;
            //"<p>Please enter a Longitude as a decimal, with the full four digit decimal point (e.g. -74.7992)</p>";
            checkResult = false;
        }
    }

    if (checkResult == false) {
        $('#ErrorMessageDiv').css('display', 'block');
        $('#ErrorMessageDiv').html("<h3>Error</h3>" + error);
    }
    return checkResult;


}


function DialogWith_DropDown(message, handler) {
    message = message.replaceAll("\n", "<br>");
    var header = tdg.error_message.message("CID_PORTAL");
    var yes = tdg.error_message.message("Yes");
    var no = tdg.error_message.message("No");
    var optionLabel = tdg.error_message.message("m000206");
    var option1 = tdg.error_message.message("m000204");
    var option2 = tdg.error_message.message("m000205");

    $(`<section class="modal overlay-def"  id="myModal" role="dialog"  
     aria-modal="true"  aria-labelledby ="headerid" aria-describedby="DialogBodyID" tabindex="-1">
     <div class="modal-dialog modal-content modal-dialog-centered" role="document">
	            <header class="modal-header">
	            <h2 id="headerid" class="modal-title">${header}</h2>
	            </header>
	            <div class="modal-body" id="DialogBodyID" >
	            ${message}
                <br>
                <p> </p>
                 <div>
                        <label for="duplicateFlagOptions">${optionLabel}</label>
                        <select name="duplicateFlagOptions" id="duplicateFlagOptions">
                            <option value="1"></option>
                            <option value="918640000">${option1}</option>
                            <option value="918640001">${option2}</option>

                        </select>
                </div>
	            </div>
               
	            <div class="modal-footer">
	            <button id="btnYes" type="button" class="btn btn-sm btn-primary pull-left popup-modal-dismiss" disabled>${yes}</button>
	            <button id="btnNo" type="button" class="btn btn-sm btn-primary pull-left popup-modal-dismiss" data-dismiss="modal">${no}</button>
                </div>
                </div>
                
	            </section>
	            `).appendTo('body');




    $("#duplicateFlagOptions").change(function () {
        var Listselection = $("#duplicateFlagOptions :selected").val();
        if (Listselection == 918640000 || Listselection == 918640001) {
            $("#btnYes").removeAttr("disabled");
        }
        else {
            $("#btnYes").attr("disabled", "disabled");
        }

    });
    $("#btnYes").click(function () {
        var Listselection = $("#duplicateFlagOptions :selected").val();
        $("#ovs_duplicatesiteflag").val(Listselection);
        $('#myModal').modal('hide');
        $("#myModal").remove();
        handler(true);
    });

    $("#btnYes").keydown(function (event) {
        var Listselection = $("#duplicateFlagOptions :selected").val();
        $("#ovs_duplicatesiteflag").val(Listselection);

        var keyCode = event.keyCode || event.which;
        //check if key pressis tab key
        if (keyCode == "13") {
            $("#btnYes").click();
        }
    }
    );

    //Pass false to callback function
    $("#btnNo").click(function () {
        //handler(lse);


        $('#myModal').modal('hide');
        $("#myModal").remove();
        handler(false);
    });
    $("#btnNo").keydown(function (event) {
        var Listselection = $("#duplicateFlagOptions :selected").text();

        var keyCode = event.keyCode || event.which;
        //check if key pressis tab key
        if (keyCode == "9") {
            $('#myModal').focus();
        }
        else if (keyCode == "13") {
            $("#btnNo").click();
        }

    });


    $('#myModal').modal({ backdrop: 'static', keyboard: false, show: true, focus: true });
}