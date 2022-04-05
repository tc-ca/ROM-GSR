//
// Basic Form-Company NAICS Code - Modify.js
//
$(document).ready(function () {
    debugger;

    insert_tdgcore_common_js();

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    // resize WebResource_address_complete
    $("#WebResource_naicscode").height('72px');

    // hide controls
    tdg.c.control_hide("cid_naicscode", true);
});

function insert_tdgcore_common_js() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "/tdgcore_common.js";

    $("body").append(script);
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
