//
// Web Page-Company Registration Wizard
//

$(document).ready(function () {
	debugger;

	// format sign-out's tooltip
	
	$('#cdts-signout-btn').tooltip({
					trigger: 'hover',
					placement: 'right',
					container: 'body'
						});

	header_setup();


    var ovs_legalname = $("#ovs_legalname").val();
	if(ovs_legalname == "") $('#ovs_legalname').attr("readonly", false);

    tdg.c.addValidator("ovs_legalnamefr");
    tdg.c.addValidator("ovs_name_fr");

	sessionStorage.setItem('frominyearsites', 'false');
	sessionStorage.setItem('fromannualcompliance', 'false');
	sessionStorage.setItem('frominyearsitepage', 'false');

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

function header_setup() {
	//var cid_cidcompanystatus = '{{account.cid_cidcompanystatus.code}}';

	//tdg.c.weblink_hide("/RegistrationWizard/");
	//tdg.c.weblink_hide("/Bulk_Site_Upload/");
	//tdg.c.weblink_hide("/company_dashboard/");
	//tdg.c.weblink_hide("/Bulk_Site_Update/");
	debugger;
	var code = "m000009";

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	var steps = $('li.list-group-item');
	for (var i = 0; i < steps.length; i++) {
		var item = steps[i];
		var text = item.innerText;
		var className = item.className;

		// 1st step + 2nd step?
		if ((i == 0 || i == 1) && (className == "list-group-item active")) {
			code = "m000008";	// Company Registration
			break;
		}
		//text = tdg.error_message.message(text);
		//item.innerText = text;
	}

	try {
		var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name}}');
		var value = tdg.error_message.message(code);
		value = value.replace("{0}", companyName);
		$('.page-header h1').text(value);
	} catch (e) { }
	
}
