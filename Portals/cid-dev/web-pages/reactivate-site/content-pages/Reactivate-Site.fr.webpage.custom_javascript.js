//
// Web Page-Activate Site.js
//

$(document).ready(function () {
	debugger;
    // format sign-out's tooltip
	
	$('#cdts-signout-btn').tooltip({
					trigger: 'hover',
					placement: 'right',
					container: 'body'
						});
    var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
    var deactivateSiteWebLink = $('a[href*="deactivate-site"]');
    var activateSiteWebLink = $('a[href*="activate-site"]');
    
    if (cidSiteStatus.indexOf("Inactive") >= 0) {
        activateSiteWebLink.removeClass("hidden");
        deactivateSiteWebLink.addClass("hidden");
    }
    else{
        activateSiteWebLink.addClass("hidden");
        deactivateSiteWebLink.removeClass("hidden");
    }

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
