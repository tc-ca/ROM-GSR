//
// Basic Form-Company NAICS Code - Modify.js
//
$(document).ready(function () {
    debugger;

    page_setup();

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    // resize WebResource_address_complete
    $("#WebResource_naicscode").height('72px');

    // hide controls
    tdg.c.control_hide("cid_naicscode", true);
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

function naicscode_selected(text, id) {
    debugger;

    var index1 = text.indexOf(" - ");
    text = text.substr(0, index1);
    $("#cid_naicscode").attr("value", id);
    $("#cid_naicscode_name").attr("value", text);
    $("#cid_naicscode_entityname").attr("value", 'cid_naicscode');
}

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            debugger;
            var validation = true;

            return validation;
        }
    }(window.jQuery));
}
