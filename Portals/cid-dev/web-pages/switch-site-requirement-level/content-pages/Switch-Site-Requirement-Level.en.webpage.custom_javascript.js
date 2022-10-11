$(document).ready(function () {
	debugger;

	var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name}}');
	var topNav = $('#navbar');

	if (companyName)
		if (topNav) {
			var msg = tdg.error_message.message("m000108");
			var value = "<h2>{0} - {1}</h2>";
			value = value.replace("{0}", msg);
			value = value.replace("{1}", companyName);
			$(value).insertAfter(topNav);
		}
});
