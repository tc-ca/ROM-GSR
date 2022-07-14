//
// Web Page-Dashboard
//
$(document).ready(function () {
    debugger;

    var companyName = $("#ovs_legalname").val(); // '{{user.parentcustomerid.name }}';
    var topNav = $('#navbar');
    if (companyName) {
        if (topNav) $("<h2>TDG Site Registration Database: " + companyName + "</h2>").insertAfter(topNav);
    }
});
