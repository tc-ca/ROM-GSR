//
// Web Page-Manage Application Users
//

$(document).ready(function () {
    debugger;

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