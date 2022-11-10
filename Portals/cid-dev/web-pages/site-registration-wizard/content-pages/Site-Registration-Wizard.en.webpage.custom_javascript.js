//
// Web Page-Site Registration Wizard
//

$(document).ready(function () {
	debugger;

	var inYear = sessionStorage.getItem('frominyearsites');
    var annualCompliance = sessionStorage.getItem('fromannualcompliance');

	var urlParams = new URLSearchParams(window.location.search);
	//if (!urlParams.has('in_year') || urlParams.get('in_year') != 'true') {
	if(inYear == "true")
		header_setup("inyear");
	else if( annualCompliance != "true")
		header_setup("annualcompliance");
	else
		header_setup("initial");

	var instructionBtns = $(".instruction-btn");

	if (instructionBtns.length > 0) {
		instructionBtns.click(function () {
			var msg = tdg.error_message.message("m000010");	// Choose the same named button found below
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
	var msg = "";
	var href = "";

	switch(type) {
	case "inyear":
		msg = "Back To In Year Page";
		href = "~/my-sites";
		break;
	case "annualcompliance":
		msg = "Back To Annual Compliance Page";
		href = "~/my-company/annual-compliance-update";
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
		var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name}}');
		var value = tdg.error_message.message(code);
		value = value.replace("{0}", companyName);
		$('.page-header h1').text(value);
	} catch (e) { }
}
