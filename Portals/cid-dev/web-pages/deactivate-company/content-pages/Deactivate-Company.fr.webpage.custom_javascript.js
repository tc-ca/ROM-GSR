//
// Web Page-Deactivate Company.js
//

$(document).ready(function () {
	debugger;

	var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name}}');

	var topNav = $('#navbar');
	var h2Header = $('.tab-title');

	if (companyName)
		if (topNav) {
			var msg = tdg.error_message.message("m000108");
			var value = "<h2>{0} - {1}</h2>";
			value = value.replace("{0}", msg);
			value = value.replace("{1}", companyName);
			$(value).insertAfter(topNav);
		}

	if (h2Header) {
		var msg = tdg.error_message.message("m000109");
		var value = "{0} - {1}";
		value = value.replace("{0}", companyName);
		value = value.replace("{1}", msg);
		h2Header.html(value);
    }
});
