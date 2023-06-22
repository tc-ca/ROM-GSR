//
// CompanyRegistrationWizard-Company Edit.js
//

var _cid_crabusinessnumber = "";
$(document).ready(function () {
	debugger;
	$('#WebResource_address_complete').attr("title" , "Address Lookup");




	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	tdg.c.page_instructions("page_crw_company_edit");

	var msg = tdg.error_message.message("BTN_PREVIOUS");
	$("#PreviousButton").hide();
	tdg.c.button_create("btn_previous", "#PreviousButton", msg);
	$("#btn_previous").bind("click", function () {
		btn_previous_click();
	});

	_cid_crabusinessnumber = $("#cid_crabusinessnumber").val();
	$("#cid_registrationasof").parent().parent().hide();

	//update manually entered field if address fields changed
	tdg.cid.Update_AdderssOverwritten_Field();

	tdg.c.control_hide("ovs_invitation_only");
	tdg.c.control_hide("cid_addressoverwritten");

	//validate postal code with province - first letter of postal code need to matched allowed province letters
	tdg.c.Add_Validation_For_Postal_Code_with_Province(selected_language);
	// PO Box address validation
	tdg.c.Prevent_Po_Box_address_Validation(selected_language);
	//disable/enable province based on enterd manually
	if ($("#cid_addressoverwritten").val() == 0) { $("#ovs_address1_province").prop('disabled', true); }
	else { $("#ovs_address1_province").prop('disabled', false); }

	var cid_contacttype = '{{user.cid_contacttype.Value}}';
	//if not primary contact
	if (cid_contacttype != 100000000) {
		var code = sessionStorage.getItem("cid_suppress_error_code") + "";
		if (code != "null" && code != "") {
			var msg = tdg.error_message.message(code);
			tdg.c.dialog_OK(msg);
			sessionStorage.setItem("step_start", "2");
		}
	}

	tdg.cid.address_init(false);
	tdg.cid.WebResource_address_complete_readonly(false);

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);
	var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name}}');
	tdg.cid.crw.step2_advanced_form_header(companyName);

	$("#websiteurl").width('100%');

	tdg.cid.phone_init("telephone1", selected_language);
	tdg.cid.phone_init("fax", selected_language);

	tdg.cid.crw.start_cid_has_cra_bn_onchange("2");

	tdg.c.control_hide("ovs_name_fr");
	tdg.c.control_hide("cid_companyclaim");

	var cid_legalname = $('#ovs_legalname').val();
	var cid_operatingname = $('#name').val();
	var ovs_name_fr = $('#ovs_name_fr').val();

	var step_start = sessionStorage.getItem("step_start");
	step_start = (step_start == "null" ? "" : step_start);
	if (step_start == "2") {
		var cid_has_cra_bn = $('#cid_has_cra_bn').val();
		var address1_line1 = $("#address1_line1").val();
	}
	else {
		var cid_has_cra_bn = $('#cid_has_cra_bn').val();
		if (cid_has_cra_bn == 1) {
			$('#cid_has_cra_bn').val(cid_has_cra_bn);
			var cid_legalname = $('#ovs_legalname').val();
			var cid_operatingname = $('#name').val();
			var ovs_name_fr = cid_operatingname;
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
		}
	}
	tdg.c.control_hide("cid_has_cra_bn");
	var cid_legalname = tdg.c.replace_special_char(cid_legalname);
	var cid_operatingname = tdg.c.replace_special_char(cid_operatingname);
	var ovs_name_fr = tdg.c.replace_special_char(ovs_name_fr);
	if (step_start != "2") {
		$("#ovs_legalname").val(cid_legalname);
		$("#name").val(cid_operatingname);
		$("#ovs_name_fr").val(ovs_name_fr);

		debugger;
		var value = $("#address1_line1").val();
		tdg.cid.crw.step2_address1_line1_set(value);
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

	var ovs_invitation_only = $("#ovs_invitation_only").val();
	if (ovs_invitation_only == "1") {
		tdg.cid.crw.start_cid_has_cra_bn_onchange("2");

		$("#cid_crabusinessnumber").change(cid_crabusinessnumber_onchange);
		var cid_has_cra_bn = $('#cid_has_cra_bn').val();
		if (cid_has_cra_bn == "1") {
			cid_crabusinessnumber_onchange();
		}
		else {
			$("#ovs_legalname").change(ovs_legalname_onchange);
		}
	}
	else {
		$('#cid_crabusinessnumber').attr("readonly", true);
		$('#ovs_legalname').attr("readonly", true);
	}

	if (cid_has_cra_bn != 1) {
		tdg.c.addValidator("cid_reasonfornobnnumber");
		$("#cid_reasonfornobnnumber").change(function () {
			tdg.cid.crw.start_cid_reasonfornobnnumber_onchange(true);
		});
		tdg.cid.crw.start_cid_reasonfornobnnumber_onchange(false);
	}

	tdg.cid.crw.step2_Disable_ContactTypeFieldsForSecondaryUser(cid_contacttype);

	if (sessionStorage.getItem("frominyearsitepage") == "false") {
		var parentcustomerid = '{{user.parentcustomerid.Id}}';
		var filter = "statecode eq 0 and cid_portalrecordcreationdetails ne null and accountid eq '" + parentcustomerid + "'";
		var accData = tdg.webapi.list("accounts", filter);
		if (accData != null && accData.length > 0) {
			if (accData[0].cid_portalrecordcreationdetails) // Net New Site
			{
				var withdrawLabel = tdg.error_message.message("BTN_WITHDRAW");
				$('#NextButton').parent().parent().after('<div role="group" class="pull-right toolbar-actions"><input type="button" data-dismiss="modal" value="' + withdrawLabel + '" id="WithdrawButton" style="margin-left: 10px;" name="WithdrawButton" class="btn btn-default button previous previous-btn"/></div>');
				// bind the click event to this custom buttton
				$("#WithdrawButton").bind("click", function () {
					debugger;

					var message = tdg.error_message.message("m000145");
					tdg.c.dialog_YN(message, (ans) => {
						//var contact_id = '{{user.id}}';
						if (ans) {

							var DeleteAccountFlowData = '{' +
								'"AccountId": "' + parentcustomerid + '",' +
								'}';
							console.log(DeleteAccountFlowData);
							tdg.cid.flow.Call_Flow("CID_Flow_RunCompanySitesDeleting", DeleteAccountFlowData);
							tdg.c.sign_out();
							return false;
						}
						else {
							return false;
						}
					});
				});
			}
		}
	}

	$("#adx_modifiedbyusername").val('{{user.Id}}');
	 tdg.c.control_hide("adx_modifiedbyusername");
});

function ovs_legalname_onchange() {
	debugger;
}

function btn_previous_click() {
	var account_id = '{{user.parentcustomerid.Id}}';
	var contact_id = '{{user.id}}';
	var email = "{{user.emailaddress1}}";
	tdg.cid.crw.step2_previous_click(email, account_id, contact_id);
}

function cid_crabusinessnumber_onchange() {
	var cid_crabusinessnumber = $("#cid_crabusinessnumber").val();
	var data = tdg.cid.crw.start_Retrieve_cra(cid_crabusinessnumber, "2");
	if (data == "") {
		tdg.c.error_message_advanced_form("m000001", true);
	}
	else {
		debugger;
		var account_id = '{{user.parentcustomerid.Id}}';
		filter = "cid_crabusinessnumber eq '" + cid_crabusinessnumber + "'";
		var rom_data = tdg.c.WebApi_List("accounts", filter);
		rom_data = rom_data.filter(x => x.accountid != account_id);

		if (rom_data.length > 0) {
			var message = tdg.error_message.message("m000037");
			message = message.replaceAll("{0}", cid_crabusinessnumber);
			tdg.c.dialog_OK(message);
			$("#cid_crabusinessnumber").val(_cid_crabusinessnumber);
		}
		else {
			var LegalName = data.LegalName
			var OperatingName = data.OperatingName
			OperatingName = (OperatingName == "" ? LegalName : OperatingName);

			var address = data.PhysicalLocationAddress;

			$("#ovs_legalname").val(LegalName);
			$("#name").val(OperatingName);
			$("#ovs_name_fr").val(OperatingName);

			$("#address1_line1").val(address.AddressLine1Text);
			$("#address1_line2").val(address.AddressLine2Text);
			$("#address1_line3").val("");
			$("#address1_city").val(address.CityName);
			$("#address1_stateorprovince").val(address.ProvinceStateCode);
			$("#address1_postalcode").val(address.PostalZipCode);

			sessionStorage.setItem("AddressLine1Text", address.AddressLine1Text);
			tdg.cid.crw.step2_address1_line1_set(address.AddressLine1Text);

			var selected_language = '{{website.selected_language.code}}';
			tdg.cid.convert_province_to_code(selected_language);

			_cid_crabusinessnumber = cid_crabusinessnumber;
		}
	}
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

			$("#cid_reasonfornobnnumber").prop("disabled", false);
			return true;
		}
	}(window.jQuery));
}