//
// Web Page-Inbox.js
//

$(document).ready(function () {
	var companyName = '{{user.parentcustomerid.name }}';
	var topNav = $('#navbar');

	if (companyName)
		if (topNav) {
			var msg = tdg.error_message.message("CID_PORTAL");
			$("<h2>" + msg + " : " + companyName + "</h2>").insertAfter(topNav);
        }
});