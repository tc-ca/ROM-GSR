//
// CompanyRegistrationWizard-NAICS Code.js
//

$(document).ready(function () {
	debugger;

	$("#cid_registrationasof").parent().parent().hide();


	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	subgrid_language();

	var cid_naicscode_label = tdg.error_message.message("cid_naicscode"); // NAICS Code
	sessionStorage.setItem("cid_naicscode_label", cid_naicscode_label);
	//make for readonly for secondary users
	Disable_ContactTypeFieldsForSecondaryUser();



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