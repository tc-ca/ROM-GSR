//
// CompanyRegistrationWizard-Attestation.js
//

$(document).ready(function () {
	debugger;
    var isCompanyAttested = "{{entities.account[user.parentcustomerid.id].cid_iscompanyattested}}";

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	tdg.c.page_instructions("page_crw_attest");

	$("#cid_reasonfornobnnumber_other").next("div").css("color", "transparent");
	$("#ovs_address1_province").next("div").css("color", "transparent");
	var gridview = $("#Naics_codes");
	gridview.on("loaded", function () {
		const EmptyMessageDiv1 = document.querySelector(".view-empty");
		EmptyMessageDiv1.style.display = "none";
	});

	$("#cid_registrationasof").parent().parent().hide();

	tdg.c.control_hide("ovs_name_fr");
	tdg.c.control_hide("address1_stateorprovince");
	var cid_crabusinessnumber = $("#cid_crabusinessnumber").val();
	cid_crabusinessnumber = (cid_crabusinessnumber != "null" ? cid_crabusinessnumber : "");

	$("#telephone1").attr("placeholder", "—");
	// do not have a business number?
	if (cid_crabusinessnumber == "") {
		tdg.c.control_hide("cid_crabusinessnumber");
		tdg.c.control_show("cid_reasonfornobnnumber");
		tdg.c.control_hide("cid_reasonfornobnnumber_other");
	}
	else {
		tdg.c.control_show("cid_crabusinessnumber");
		tdg.c.control_hide("cid_reasonfornobnnumber");
		tdg.c.control_hide("cid_reasonfornobnnumber_other");
		$("#cid_reasonfornobnnumber_other").closest(".text-muted").innerHTML = "<p> </p>";
	}

	if ($("#printSummary").length <= 0) {
		printSummary();
	}

	tdg.cid.convert_province_to_code(selected_language);
	Disable_ContactTypeFieldsForSecondaryUser();
	subgrid_language();
	$('table').each(function () {
		debugger;
		var selectedTable = $(this);
		if (selectedTable.attr('data-name') && selectedTable.attr('data-name').includes('_readonly')) {
			selectedTable.find("tr").each(function () {
				$(this).css("background-color", "#F0F0F0");
			});
		}
	});
    debugger;
    if (sessionStorage.getItem("frominyearsitepage") == "false") {
		var parentcustomerid = '{{user.parentcustomerid.Id}}';
		var filter = "statecode eq 0 and cid_portalrecordcreationdetails ne null and accountid eq '" + parentcustomerid + "'";
		var accData = tdg.webapi.list("accounts", filter);
		if (accData != null && accData.length >0) {
			if (accData[0].cid_portalrecordcreationdetails) // Net New Site
			{
				var withdrawLabel = tdg.error_message.message("BTN_WITHDRAW");
				$('#NextButton').parent().parent().after('<div role="group" class="pull-right toolbar-actions"><input type="button" data-dismiss="modal" value="' + withdrawLabel + '" id="WithdrawButton" style="margin-left: 10px;" name="WithdrawButton" class="btn btn-default button previous previous-btn"/></div>');
				// bind the click event to this custom buttton
				$("#WithdrawButton").bind("click", function () {
					debugger;

					var message = tdg.error_message.message("m000145");
					tdg.c.dialog_YN(message, (ans) => {
						if (ans) {

							var DeleteAccountFlowData = '{' +
								'"AccountId": "' + parentcustomerid + '",' +
								'}';
							console.log(DeleteAccountFlowData);
							tdg.cid.flow.Call_Flow("CID_Flow_RunCompanySitesDeleting", DeleteAccountFlowData);
							tdg.c.sign_out();
							return false;
							//Do nothing
						}
						else {
							return false;
							//need to add ALM record.
						}
					});
				});
			}
		}
	}
});

function printSummary() {
	var button = $('<input type="button" name="printSummary" id="printSummary" />');
	$("#NextButton").after(button);
	var button1 = $("#NextButton");
	var className = button1[0].className
	var fontSize = button1.css("fontSize");
	var color = button1.css("color");
	var background_color = button1.css("background-color");
	var button2 = $("#printSummary");
	var text1 = tdg.error_message.message("m000007");
	button2.prop("value", text1);
	button2[0].className = className;
	button2.css("fontSize", fontSize);
	button2.css('color', color);
	button2.css("background-color", background_color);
	// bind the click event to this custom buttton
	$("#printSummary").bind("click", function () {
		debugger;
		window.print();
	});
}

if (window.jQuery) {
	(function ($) {
		webFormClientValidate = function () {
			debugger;
			var validation = false;
			var companyId = $("#EntityFormView_EntityID").val();
			//Contacts validation
			var filter = "parentcustomerid/Id eq (guid'" + companyId + "')";
			var data = ExecuteQuery("Validation_CompanyPrimarySecondaryContacts", filter);
			if (data != null) {
				var primaryFound = false;
				var secondaryFound = false;
				for (i = 0; i < data.length; i++) {
					if (data[i].cid_contacttype.Value == 100000000) primaryFound = true;
					if (data[i].cid_contacttype.Value == 100000001) secondaryFound = true;
				}
				if (primaryFound && secondaryFound) {
					validation = true;
					return true;
				}
			}
			if (!validation) {
				tdg.c.error_message_advanced_form("m000006", true); // You cannot proceed before adding at least one secondary contact.
			}
			return validation;
		}
	}(window.jQuery));
}

function subgrid_language() {
	debugger;

	var entityList = $(".entity-grid");
	var companynaicscode = tdg.c.subgrid_index(entityList, "cid_account_companynaicscode");
	if (companynaicscode != null) {
		tdg.cid.subgrid_companynaicscode(companynaicscode);
	}
}

function Disable_ContactTypeFieldsForSecondaryUser() {
	debugger;
	var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
	//if not primary contact
	if (cid_usercontacttype != 100000000) {
		
		//$("#NextButton").attr("disabled", true);
		//$("#NextButton").css("pointer-events", "none");
		
	}
}