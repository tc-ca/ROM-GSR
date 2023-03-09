//
// Basic Form - Site - Create.js
//
var _busy = false;


$(document).ready(function () {
  
	debugger;

	page_setup();

     $("#InsertButton").click(function (e) {
	   $("#ovs_address1_province").attr("disabled", false); });

	//cancel button text   
	var ButtonCancel = tdg.error_message.message("BTN_CANCEL");
	//add button next to save button
	$(".actions").append('<input id ="cancelButton" type="button" value="' +
		ButtonCancel + '" class="btn btn-default button previous previous-btn"> </input>');
	//cancel button click event
	$('#cancelButton').click(function (e) {
		//click back button
		history.back();
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
		webFormClientValidate = function () {
			
		$("#ovs_address1_province").attr("disabled", false);
		
			return true;
		}
	}(window.jQuery));
}