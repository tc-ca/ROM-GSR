//
// Web Page-Site Activity Review Log.js
//

$(document).ready(function () {
	debugger;

    var lbl_inactive = tdg.error_message.message("lbl_inactive");

    var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();

    $('#cid_cidsitestatus').hide();
    $('#cid_cidsitestatus_label').hide();
    
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
