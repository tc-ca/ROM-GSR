//
// Web Page-Site History Log.js
//

$(document).ready(function () {
    debugger;

    var lbl_inactive = tdg.error_message.message("lbl_inactive");
    var companyName = '{{user.parentcustomerid.name }}';
    var topNav = $('#navbar');

    if (companyName)
        if (topNav) {
            var msg = tdg.error_message.message("CID_PORTAL");
            $("<h2>" + msg + ": " + companyName + "</h2>").insertAfter(topNav);
        }

    var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
    var deactivateSiteWebLink = $('a[href*="deactivate-site"]');
    var activateSiteWebLink = $('a[href*="activate-site"]');

    if (cidSiteStatus.indexOf(lbl_inactive) >= 0) {
        activateSiteWebLink.removeClass("hidden");
        deactivateSiteWebLink.addClass("hidden");
    }
    else {
        activateSiteWebLink.addClass("hidden");
        deactivateSiteWebLink.removeClass("hidden");
    }
});