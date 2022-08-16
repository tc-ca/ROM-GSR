//
// Web Page-Bulk Site Upload.js
//
$(document).ready(function () {
    debugger;

    page_setup();

    tdg.c.weblink_hide("/company_dashboard/");
    tdg.c.weblink_hide("/Bulk_Site_Update/");
});

function page_setup() {
    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    const files = ["/tdgcore_common.js", "/tdgcore_message.js"];
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = file;

        $("body").append(script);
    }

    // server error?
    tdg.c.message_panel();
}