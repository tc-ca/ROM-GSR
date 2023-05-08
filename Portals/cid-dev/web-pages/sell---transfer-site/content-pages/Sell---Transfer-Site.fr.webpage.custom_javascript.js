//
// Web Page-See / Transfer Site.js
//

$(document).ready(function () {
	debugger;

    var lbl_inactive = tdg.error_message.message("lbl_inactive");

    var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
    var deactivateSiteWebLink = $('a[href*="deactivate-site"]');
    var activateSiteWebLink = $('a[href*="activate-site"]');
    
    if (cidSiteStatus.indexOf(lbl_inactive) >= 0) {
        activateSiteWebLink.removeClass("hidden");
        deactivateSiteWebLink.addClass("hidden");
    }
    else{
        activateSiteWebLink.addClass("hidden");
        deactivateSiteWebLink.removeClass("hidden");
    }
});
