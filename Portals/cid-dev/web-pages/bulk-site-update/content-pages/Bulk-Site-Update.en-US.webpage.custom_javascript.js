//
// Web Page-Bulk Site Update.js
//
$(document).ready(function () {
    debugger;

    weblink_hide("/RegistrationWizard/");
    weblink_hide("/Bulk_Site_Upload/");
});

function weblink_hide(url) {
    debugger;
    $("#navbar li.weblink")
        .each(function () {
            debugger;
            var item = $(this).find("a")[0];
            var href = item.href;
            if (href.indexOf(url) != -1) {
                $(this).remove();
                return;
            }
        });
}