//
// Basic Form-ERAP - Edit.js
//
$(document).ready(function () {
    debugger;

    insert_tdgcore_common_js();

    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');

    // autocomplete off
    //$("#cid_erapid").attr("autocomplete", "new-password");
});

function insert_tdgcore_common_js() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "/tdgcore_common.js";

    $("body").append(script);
}
