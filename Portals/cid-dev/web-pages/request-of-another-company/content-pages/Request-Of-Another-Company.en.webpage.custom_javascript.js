//
// Web Page-Request Of Another Company
//    

$(document).ready(function () {
    debugger;
    // format sign-out's tooltip
	
	$('#cdts-signout-btn').tooltip({
					trigger: 'hover',
					placement: 'right',
					container: 'body'
						});
	var companyName = '{{user.parentcustomerid.name }}';
	var topNav = $('#navbar');

    if (companyName)
        if (topNav) {
            var msg = tdg.error_message.message("CID_PORTAL");
            $("<h2>" + msg + ": " + companyName + "</h2>").insertAfter(topNav);
        }
});