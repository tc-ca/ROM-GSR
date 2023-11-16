//
// CompanyRegistrationWizard-NAICS Code.js
//

$(document).ready(function () {
	debugger;

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	tdg.c.page_instructions("page_crw_naics");

	$("#cid_registrationasof").parent().parent().hide();

	subgrid_language();

	var cid_naicscode_label = tdg.error_message.message("cid_naicscode"); // NAICS Code
	sessionStorage.setItem("cid_naicscode_label", cid_naicscode_label);
	//make for readonly for secondary users
	Disable_ContactTypeFieldsForSecondaryUser();

	if (sessionStorage.getItem("frominyearsitepage") == "false") {
		var parentcustomerid = '{{user.parentcustomerid.Id}}';
		var filter = "statecode eq 0 and cid_portalrecordcreationdetails ne null and accountid eq " + parentcustomerid ;
		var accData = tdg.webapi.list("accounts", filter);
		if (accData != null) {
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

});

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
		$(".create-action").attr("disabled", true);
		$(".create-action").css("pointer-events", "none");
		//Wait till subgrid load
		$("#CompanyNAICSCodes").on("loaded", function () {
			$(".btn.btn-default.btn-xs").prop("disabled", true);
		});
	}
}