//
// Basic Form - Site - Create.js
//
var _busy = false;


$(document).ready(function () {
  
	debugger;

	page_setup();
    var addressType = $("#ovs_address_type :selected").text();
	console.log("address type :");
	console.log(addressType);

     $("#InsertButton").click(function (e) {
	   $("#ovs_address1_province").attr("disabled", false); });

	//cancel button text   
	var ButtonCancel = tdg.error_message.message("BTN_CANCEL");
	//add button next to save button
	$(".actions").append('<input id ="cancelButton" type="button" value="' +
		ButtonCancel + '" class="btn btn-default button previous previous-btn"> </input>');
	//cancel button click event
	$('#cancelButton').click(function (e) {
        debugger;
		if (sessionStorage.getItem('frominyearsites') == "true" || sessionStorage.getItem('fromannualcompliance') == 'true') 
        {
            //history.back();
            //Make Sure cancel button redirects to sites page
             window.location.href = '/my-sites/';  
             return false;
        }
        else
        {
             //Make Sure cancel button redirects to sites page
             window.location.href = '/RegistrationWizard/';  
             return false;
        }
	});

	//latitude validation
	document.getElementById("address1_latitude").addEventListener('change', (event) => {
		//get Latitude and set it to nearest 4 digits
		var Lat = $("#address1_latitude").val();
		$("#address1_latitude").val(Number.parseFloat(Lat).toFixed(4));
	});
	document.getElementById("address1_longitude").addEventListener('change', (event) => {
		//get Lontitude and set it to nearest 4 digits
		var Longtitude = $("#address1_longitude").val();
		$("#address1_longitude").val(Number.parseFloat(Longtitude).toFixed(4));
	});

	var account = get_parent()[0];
	
	// address
	tdg.cid.address_init(true);
	$("#ovs_legalname").val(account.ovs_legalname);
	$("#name").val(account.name);
	// hide controls
	tdg.c.control_hide("name");
	tdg.c.control_hide("cid_siteclaim");
	$("#ovs_legalname").attr("readonly", "true");
	$("#address1_country").attr("readonly", "true");
	$("#name").attr("readonly", "true");
	// cid_same_as_company
	$("#cid_same_as_company").change(function () {
		cid_same_as_company_change();
	});
	cid_same_as_company_change();
	$("#cid_sitename").attr("autocomplete", "new-password");
	$("#telephone1").attr("autocomplete", "new-password");
	$("#fax").attr("autocomplete", "new-password");
	//Phone masking
	var selected_language = '{{website.selected_language.code}}';
	//Phone number formatting
	tdg.cid.phone_init("telephone1", selected_language);
	tdg.cid.phone_init("fax", selected_language);
	$("#ovs_address_type").change(function () {
		tdg.cid.address_type_change(true);
	});
	tdg.cid.address_type_change(false);
	//Add listeners for the address fields to change the "manually entered" flag
	$("#address1_line1").attr("oninput", "setManualAddressEntryFlag()");
	$("#address1_city").attr("oninput", "setManualAddressEntryFlag()");
	$("#address1_stateorprovince").attr("oninput", "setManualAddressEntryFlag()");
	$("#address1_postalcode").attr("oninput", "setManualAddressEntryFlag()");
	$("#address1_country").attr("oninput", "setManualAddressEntryFlag()");
});

function cid_same_as_company_change() {
	debugger;
	if (_busy) return;
	_busy = true;
	var parent_id = '{{ user.parentcustomerid.id }}';
	tdg.cid.address_same_as_company(parent_id);
	_busy = false;
}

function get_parent() {
	debugger;
	var account_id = '{{user.parentcustomerid.Id}}';
	filter = "accountid eq '" + account_id + "'";
	var account = tdg.c.WebApi_List("accounts", filter);
	return account; // account[0];
}

function setManualAddressEntryFlag() {
	$("#cid_addressoverwritten").val(1);
}
function page_setup() {
	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	const files = ["/tdgcore_common.js", "/tdgcore_message.js"];
	for (var i = 0; i < files.length; i++) {
		var file = files[i];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = file;

		$("body").append(script);
	}

	// server error?
	tdg.c.message_panel();
}
if (window.jQuery) {
	(function ($) {
		   if (typeof (entityFormClientValidate) != 'undefined') {
         var originalValidationFunction = entityFormClientValidate;
         if (originalValidationFunction && typeof (originalValidationFunction) == "function") {
            entityFormClientValidate = function() {
				originalValidationFunction.apply(this, arguments);
		var addressType = $("#ovs_address_type").val();
		
            if (addressType == 1  &&  $("#ovs_lld_section").val() > 0 && $("#ovs_lld_township").val() > 0
			&& $("#ovs_lld_range").val() > 0 && $("#ovs_lld_meridian").val() > 0 
			 )
			{
				//var valid = tdg.cid.LLD_validateAddress_combination_Selections();
            var FlowName = "CID_Portal_Validate_LLD_Entry";
            var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses",
                "qm_value", "qm_name eq '" + FlowName + "'");

            if (EnvironmentSettingResult.length > 0) {
                var FlowURL = EnvironmentSettingResult[0]["qm_value"];
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                var Quarter = $("#ovs_lld_quarter :selected").text();
                var Section = $("#ovs_lld_section :selected").text();
                var Township = $("#ovs_lld_township :selected").text();
                var Range = $("#ovs_lld_range :selected").text();
                var Meridian = $("#ovs_lld_meridian :selected").text();
                var raw = JSON.stringify({
                    "Quarter": Quarter,
                    "Section": Section,
                    "TownShip": Township,
                    "Range": Range,
                    "Meridian": Meridian
                });
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch(FlowURL, requestOptions)
                    .then(response => response.text())
                    .then(result => {

                        if (result == "Not found") {
                            alert("result not found " + result);
                            return false;
                        }
                        else {
                           
                            return true;
                        }
                    }
                        
                        )
                    .catch(error => console.log('error', error));

            }//end check if flow IRL is found
			}
			else
			{
			$("#ovs_address1_province").attr("disabled", false);

			return true;
			}
		}
		 }
		   }
	}(window.jQuery));
}