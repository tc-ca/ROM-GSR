//
// Web Page-Manage Application Users
//

$(document).ready(function () {
    debugger;
    // format sign-out's tooltip
	
	$('#cdts-signout-btn').tooltip({
					trigger: 'hover',
					placement: 'right',
					container: 'body'
						});
    var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();
    var deactivateCompanyWebLink = $('a[href*="deactivate-company"]');

    var lbl_inactive = tdg.error_message.message("lbl_inactive");
    if (cidCompanyStatus.indexOf(lbl_inactive) >= 0) {
        deactivateCompanyWebLink.addClass("hidden");
    }
    else {
        deactivateCompanyWebLink.removeClass("hidden");
    }
});