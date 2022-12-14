//
// CompanyRegistrationWizard-Company Create.js
//
$(document).ready(function () {
	debugger;

   console.log("inser form");
	var msg = tdg.error_message.message("BTN_PREVIOUS");
	$("#PreviousButton").hide();
	tdg.c.button_create("btn_previous", "#PreviousButton", msg);
	$("#btn_previous").bind("click", function () {
		btn_previous_click();
	});

	$("#cid_registrationasof").parent().parent().hide();
	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	tdg.c.control_hide("ovs_invitation_only");
	tdg.c.control_hide("cid_addressoverwritten");
	//update manually entered field if address fields changed
	tdg.cid.Update_AdderssOverwritten_Field();
	//validate postal code with province - first letter of postal code need to matched allowed province letters
	tdg.c.Add_Validation_For_Postal_Code_with_Province(selected_language);
	// PO Box address validation
	tdg.c.Prevent_Po_Box_address_Validation(selected_language);
	//disable/enable province based on enterd manually
	if ($("#cid_addressoverwritten").val() == 0) { $("#ovs_address1_province").prop('disabled', true); }
	else { $("#ovs_address1_province").prop('disabled', false); }

	var cid_contacttype = '{{user.cid_contacttype.Value}}';

	tdg.cid.address_init(false);
	tdg.cid.WebResource_address_complete_readonly(false);
	$("#websiteurl").width('100%');

	//phone field formatting
	tdg.cid.phone_init("telephone1", selected_language);
	tdg.cid.phone_init("fax", selected_language);

	tdg.c.control_hide("cid_reasonfornobnnumber_other");
	tdg.c.control_hide("cid_companyclaim");
	var step_start = sessionStorage.getItem("step_start") + "";
	step_start = (step_start == "null" ? "1" : step_start);

	if (step_start == "1") {
		var cid_has_cra_bn = '{{user.cid_has_cra_bn}}';
		var cid_has_cra_bn = (cid_has_cra_bn == "true" ? 1 : 0);
		$('#cid_has_cra_bn').val(cid_has_cra_bn);
		var cid_crabusinessnumber = '{{user.cid_crabusinessnumber}}';
		var cid_reasonfornobnnumber = "{{user.cid_reasonfornobnnumber.Value}}";
		var cid_reasonfornobnnumber_other = tdg.c.replace_special_char("{{user.cid_reasonfornobnnumber_other}}");
		var cid_legalname = "{{user.cid_legalname}}";
		var cid_operatingname = "{{user.cid_operatingname}}";
		var ovs_name_fr = cid_operatingname;
	}
	else {
		var cid_crabusinessnumber = $('#cid_crabusinessnumber').val();
		var cid_has_cra_bn = (cid_crabusinessnumber == "" ? 0 : 1);

		var cid_reasonfornobnnumber = $('#cid_reasonfornobnnumber').val();
		var cid_reasonfornobnnumber_other = $('#cid_reasonfornobnnumber_other').val();
		var cid_legalname = $('#cid_legalname').val();
		var cid_operatingname = $('#name').val();
	}
	var cid_legalname = tdg.c.replace_special_char(cid_legalname);
	var cid_operatingname = tdg.c.replace_special_char(cid_operatingname);
	var ovs_name_fr = tdg.c.replace_special_char(ovs_name_fr);

	$('#cid_has_cra_bn').val(cid_has_cra_bn);
	tdg.c.control_hide("cid_has_cra_bn");

	// do not have a business number?
	if (cid_has_cra_bn != 1) {
		tdg.c.control_hide("cid_crabusinessnumber");
		tdg.c.control_show("cid_reasonfornobnnumber");
		$("#cid_reasonfornobnnumber").val(cid_reasonfornobnnumber);
		if (cid_reasonfornobnnumber == "3") // other
		{
			tdg.c.control_show("cid_reasonfornobnnumber_other");
			$("#cid_reasonfornobnnumber_other").val(cid_reasonfornobnnumber_other);
		}
		else {
			tdg.c.control_hide("cid_reasonfornobnnumber_other");
		}
		tdg.c.addValidator("ovs_name_fr");
		$("#name").on('keyup', function () {
			var name = $("#name").val();
			$("#ovs_name_fr").val(name);
		});
	}
	else {
		tdg.c.control_show("cid_crabusinessnumber");
		tdg.c.control_hide("cid_reasonfornobnnumber");
		tdg.c.control_hide("cid_reasonfornobnnumber_other");
		$("#cid_crabusinessnumber").val(cid_crabusinessnumber);
	}
	if (step_start != "2") {
		$("#ovs_legalname").val(cid_legalname);
		$("#name").val(cid_operatingname);
		$("#ovs_name_fr").val(ovs_name_fr);

		debugger;
		var value = $("#address1_line1").val();
		address1_line1_set(value);
	}
	$('#cid_crabusinessnumber').attr("readonly", true);
	$('#ovs_legalname').attr("readonly", true);
	$('#cid_reasonfornobnnumber').attr("readonly", true);
	$('#cid_reasonfornobnnumber').css("pointer-events", "none");
	$('#cid_reasonfornobnnumber_other').attr("readonly", true);
	if (step_start == "1") {
		var address1_line1 = tdg.c.replace_special_char("{{user.address1_line1}}");
		var address1_line2 = tdg.c.replace_special_char("{{user.address1_line2}}");
		var address1_line3 = tdg.c.replace_special_char("{{user.address1_line3}}");
		var address1_city = tdg.c.replace_special_char("{{user.address1_city}}");
		var address1_stateorprovince = tdg.c.replace_special_char("{{user.address1_stateorprovince}}");
		var address1_postalcode = tdg.c.replace_special_char("{{user.address1_postalcode}}");
		$("#address1_line1").val(address1_line1);
		$("#address1_line2").val(address1_line2);
		$("#address1_line3").val(address1_line3);
		$("#address1_city").val(address1_city);
		$("#address1_stateorprovince").val(address1_stateorprovince);
		$("#address1_postalcode").val(address1_postalcode);
		sessionStorage.setItem("AddressLine1Text", address1_line1);
	}
	// autocomplete off
	$("#name").attr("autocomplete", "new-password");
	$("#address1_longitude").attr("autocomplete", "new-password");
	$("#address1_latitude").attr("autocomplete", "new-password");
	$("#telephone1").attr("autocomplete", "new-password");
	$("#fax").attr("autocomplete", "new-password");
	$("#cid_reasonfornobnnumber_other").attr("autocomplete", "new-password");
	$("#websiteurl").attr("autocomplete", "new-password");
	tdg.cid.convert_province_to_code(selected_language);
	var currentUserId = '{{user.contactid}}';
	Disable_ContactTypeFieldsForSecondaryUser(currentUserId);

	tdg.c.addValidator("ovs_name_fr");
});

function btn_previous_click() {
	debugger;
}

if (window.jQuery) {
	(function ($) {
		webFormClientValidate = function () {
			debugger;
			var address1_line1 = $("#address1_line1").val();
			sessionStorage.setItem("AddressLine1Text", address1_line1);
			sessionStorage.setItem("step_start", "");
			// cid claim company
			$('#cid_companyclaim').val(1);
			//TODO Validate address
			return true;
		}
	}(window.jQuery));
}

function address1_line1_set(value) {
	debugger;
	try {
		var f = document.getElementById("WebResource_address_complete");
		var c = f.contentWindow;
		c.document.getElementById("address1_line1").value = value;
	}
	catch (e) { }
}

function Disable_ContactTypeFieldsForSecondaryUser(currentuserId) {
	debugger;
	var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
	//if not primary contact
	if (cid_usercontacttype != 100000000) {
		//var message = "The Registration process is currently being processed by your company’s Primary Administrator. Until the Registration is complete, you will not be able add or change any data, nor Attest to the Company or Sites. You will however be able to view the current state of the Registration via the [Next] and [Previous] buttons at the bottom of the screen.";
		//tdg.c.dialog_OK(message);
		$("#name").attr("readonly", true);
		$("#ovs_name_fr").attr("readonly", true);
		$("#address1_line2").attr("readonly", true);
		$("#address1_line3").attr("readonly", true);
		$("#address1_city").attr("readonly", true);
		$("#address1_postalcode").attr("readonly", true);
		$("#ovs_address1_province").attr("readonly", true);
		$("#ovs_address1_province").css("pointer-events", "none");
		$("#address1_country").attr("readonly", true);
		$("#telephone1").attr("readonly", true);
		$("#websiteurl").attr("readonly", true);
		$("#fax").attr("readonly", true);
		$('#cid_crabusinessnumber').attr("readonly", true);
		$('#ovs_legalname').attr("readonly", true);
		$('#cid_reasonfornobnnumber').attr("readonly", true);
		$('#cid_reasonfornobnnumber').css("pointer-events", "none");
		$('#cid_reasonfornobnnumber_other').attr("readonly", true);
		//Disable address lookup web resource
		$('#WebResource_address_complete').on('load', function () {
			tdg.cid.WebResource_address_complete_readonly(true);
		});
	}
}
