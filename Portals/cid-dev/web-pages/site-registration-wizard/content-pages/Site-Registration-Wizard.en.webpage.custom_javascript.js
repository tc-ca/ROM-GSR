//
// Web Page-Site Registration Wizard.js
//

$(document).ready(function () {
	debugger;

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);
	
	var inYear = sessionStorage.getItem('frominyearsites');
	var annualCompliance = sessionStorage.getItem('fromannualcompliance');
	var frominyearsitepage = sessionStorage.getItem('frominyearsitepage');

	if (inYear == "true")
		header_setup("inyear");
	else if (annualCompliance == "true")
		header_setup("annualcompliance");
	else if (frominyearsitepage == "true")
		header_setup("frominyearsitepage");
	else
		header_setup("initial");

	var instructionBtns = $(".instruction-btn");

	if (instructionBtns.length > 0) {
		instructionBtns.click(function () {
			var msg = tdg.error_message.message("m000010");
			tdg.c.dialog_OK(msg);
		});
	}

	$("legend").each(function () {
		$(this).removeClass();
		$(this).css("font-size", "24px");
		$(this).css("font-weight", "bold");
	});


});

function header_setup(type) {
	debugger;

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	var urlParams = new URLSearchParams(window.location.search);
	var msg = "";
	var href = "";

	switch (type) {
		case "inyear":
			msg = tdg.error_message.message("m000049");

			href = "~/my-sites";
			tdg.c.weblink_hide("/RegistrationWizard/");
			tdg.c.weblink_hide("/Bulk_Site_Upload/");
			tdg.c.weblink_show("/company_dashboard/");
			tdg.c.weblink_show("/Bulk_Site_Update/");
			break;
		case "annualcompliance":
			msg = tdg.error_message.message("m000050");

			href = "~/my-company/annual-compliance-update";
			break;
		case "frominyearsitepage":
			msg = tdg.error_message.message("m000051");

			href = "~/my-sites/in-year-site/?id=" + urlParams.get('id');
			tdg.c.weblink_hide("/RegistrationWizard/");
			tdg.c.weblink_show("/company_dashboard/");
			break;
		default:
			msg = tdg.error_message.message("m000100");
			href = "~/RegistrationWizard";
	}

	if ($("#backTo").length > 0) {
		$('#mainContent').remove();
	}
	$('#mainContent').prepend("<div id='backTo' class='input-group'><p><a href='" + href + "' class='entitylist-create btn btn-info pull-right action' title='Back'>" + msg + "</a><br><br></p></div>");

	try {
		var code = "m000024";
		debugger;
		var site_id = urlParams.get('id');
		filter = "accountid eq '" + site_id + "'";
		var account = tdg.webapi.SelectedColumnlist("accounts", "cid_sitename", filter);
		var cid_sitename = ""
		if (account.length > 0) {
			var cid_sitename = account[0].cid_sitename;
        }
		var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name}}');
		if (cid_sitename != null) {
			companyName += " - " + cid_sitename;
        }
		var value = tdg.error_message.message(code);
		value = value.replace("{0}", companyName);
		$('.page-header h1').text(value);
	} catch (e) { }
}
