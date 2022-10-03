//
// Web Page-My Sites
//

$(document).ready(function () {
    debugger;

    var topNav = $('#navbar');
    if (topNav) {
        var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name}}');

        var value = tdg.error_message.message("m000106");
        value = value.replace("{0}", companyName);
        $(value).insertAfter(topNav);
    }
});