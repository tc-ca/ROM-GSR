//
// Web Page-Bulk Site Upload.js
//
$(document).ready(function () {
    debugger;

    weblink_hide("/company_dashboard/");
    weblink_hide("/Bulk_Site_Update/");
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