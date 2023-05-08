//
// Web Page-Request Of Another Company
//    

$(document).ready(function () {
    debugger;

	var companyName = '{{user.parentcustomerid.name }}';
	var topNav = $('#navbar');

    if (companyName)
        if (topNav) {
            var msg = tdg.error_message.message("CID_PORTAL");
            $("<h2>" + msg + ": " + companyName + "</h2>").insertAfter(topNav);
        }
});