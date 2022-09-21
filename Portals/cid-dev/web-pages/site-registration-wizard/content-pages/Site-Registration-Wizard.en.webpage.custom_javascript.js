//
// Web Page-Site Registration Wizard
//
$(document).ready(function () {
	debugger;

	var urlParams = new URLSearchParams(window.location.search);
	if (!urlParams.has('in_year') || urlParams.get('in_year') != 'true') {
		header_setup();
	}
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

function header_setup() {
	debugger;

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	var msg = tdg.error_message.message("m000100");
	if ($("#backToCompanyWizard").length > 0) {
		$('#mainContent').remove();
		//$('#mainContent').prepend("<div id='backToCompanyWizard' class='input-group pull-left'><p><a href='~/en-US/RegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>" + msg + "</a><br><br></p></div>");
	}
	$('#mainContent').prepend("<div id='backToCompanyWizard' class='input-group'><p><a href='~/RegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>" + msg + "</a><br><br></p></div>");

	//var steps = $('li.list-group-item');
	//for (var i = 0; i < steps.length; i++) {
	//	var item = steps[i];
	//	var text = item.innerText;
	//	text = tdg.error_message.message(text);
	//	item.innerText = text;
	//}

	try {
		var code = "m000024";
		var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name}}');
		var value = tdg.error_message.message(code);
		value = value.replace("{0}", companyName);
		$('.page-header h1').text(value);
	} catch (e) { }
}
