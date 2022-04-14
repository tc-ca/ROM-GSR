//
// Web Page-Company Registration Wizard
//
$(document).ready(function () {
	debugger;

	header();

	var companyName = '{{user.parentcustomerid.name }}';

	if (companyName) {
		var companyid = '{{user.parentcustomerid.id}}';
		var company_status = "{{entities.account[user.parentcustomerid.id].cid_cidcompanystatus.value}}";

		if (company_status == '100000005') {
			window.location.href = "~/dashboard";
		}
	}

	var instructionBtns = $(".instruction-btn");

	if (instructionBtns.length > 0) {
		var msg = tdg.error_message.message("m000010");	// Choose the same named button found below
		instructionBtns.click(function () {
			alert(msg);
		});
    }

	$("legend").each(function () {
		$(this).removeClass();
		$(this).css("font-size", "24px");
		$(this).css("font-weight", "bold");
	});
});

function header() {
	var code = "m000009";
	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	var steps = $('li.list-group-item');
	for (var i = 0; i < steps.length; i++) {
		var item = steps[i];
		var text = item.innerText;
		var className = item.className;

		// 1st step?
		if (i == 0 && className == "list-group-item active") {
			code = "m000008";	// Company Registration Wizard
		}

		text = tdg.error_message.message(text);
		item.innerText = text;
	}

	try {
		var selected = $('.li.list-group-item active');
		var companyName = '{{user.parentcustomerid.name}}';
		var value = tdg.error_message.message(code);
		value = value.replace("{0}", companyName);
		$('.page-header h1').text(value);
	} catch (e) { }
}
