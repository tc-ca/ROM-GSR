//
// Web Page-Company Registration Wizard
//
$(document).ready(function () {
	debugger;

	header_setup();

	//var companyName = '{{user.parentcustomerid.name }}';

	//if (companyName) {
	//	var company_status = "{{entities.account[user.parentcustomerid.id].cid_cidcompanystatus.value}}";

	//	if (company_status == '100000005') {
	//		window.location.href = "~/company_dashboard";
	//	}
	//}

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
	var code = "m000009";
	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	var steps = $('li.list-group-item');
	for (var i = 0; i < steps.length; i++) {
		var item = steps[i];
		var text = item.innerText;
		var className = item.className;

		// 1st step?
		if ((i == 0 || i == 1) && (className == "list-group-item active")) {
			code = "m000009";	// Company Registration Wizard
		}

		//text = tdg.error_message.message(text);
		//item.innerText = text;
	}

	try {
		var selected = $('.li.list-group-item active');
		var companyName = '{{user.parentcustomerid.name}}';
		var value = tdg.error_message.message(code);
		value = value.replace("{0}", companyName);
		$('.page-header h1').text(value);
	} catch (e) { }

	top_menu();
}

function top_menu() {
	debugger;

	return;

	// top menu
	var list = $("ul.nav.navbar-nav.weblinks");
	for (var i = 0; i < list.length; i++) {
		var item = list[i];

		var list_set1 = $(item).find('li');
		for (var j = 0; j < list_set1.length; j++) {
			var item2 = list_set1[j];
			if (item2.innerText != "") {
				var href = $(item2).find("a");

				// no href?
				if (href.length == 0) {
					var text = item2.innerText;
					if (text != "") {
						text = text + " _FR";
						//text = tdg.error_message.message(text);
						item2.outerText = text;
					}
				}
				else {
					var text = item2.innerText + "_FR";
					var text = "\n  <a " + href[0].attributes[0] + " title='" + text + "'>" + text + "</a>\n ";
					item2.innerHTML = text;
				}
            }
        }
	}

	return;

	// breadcrumb
	var list = $("ul.breadcrumb");
	for (var i = 0; i < list.length; i++) {
		var item = list[i];

		var list_set1 = $(item).find('li');
		for (var j = 0; j < list_set1.length; j++) {
			var item2 = list_set1[j];
			var text = item2.outerText;
			if (text != "") {
				text = text + " _FR";
				//text = tdg.error_message.message(text);
				item2.outerText = text;
			}
		}
	}

}