//
// Basic Form-ERAP - Create.js
//
$(document).ready(function () {
    debugger;

    page_setup();

    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');

    // insert button
    tdg.c.btn_save_new_setup();
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

if (window.jQuery) {
    (function ($) {
        entityFormClientValidate = function () {
            debugger;
            tdg.c.message_panel_clear();
            var validation = true;
            return validation;
        }

        //webFormClientValidate = function () {
        //    debugger;
        //    var validation = true;
        //    return validation;
        //}
    }(window.jQuery));
}

// call back from tdg.c
function btn_save_new_onclick() {
    var value = false;

    tdg.c.error_message_clear();
    if (typeof entityFormClientValidate === 'function') {
        if (entityFormClientValidate()) {
            if (typeof Page_ClientValidate === 'function') {
                value = Page_ClientValidate('');
                }
        } 
    };

    debugger;

    if (!value) {
        return;
    }

    // insert
    var parent_id = '{{user.parentcustomerid.Id}}';
    var contact_id = '{{user.id}}';
    var cid_erapid = $("#cid_erapid").val();

    cid_companyerap_insert(parent_id, cid_erapid, contact_id);
}

function cid_companyerap_insert(account_id, cid_erapid, contact_id) {
    debugger;
    var data = {
        "cid_Company@odata.bind": "/accounts(" + account_id + ")",
        "cid_CreatedByRegistrant@odata.bind": "/contacts(" + contact_id + ")",
        "cid_erapid": cid_erapid
    };
    tdg.webapi.create("cid_companyeraps", data, success_cb, error_cb);
}

function form_clear() {
    debugger;
    $("#cid_erapid").val("");
}

function success_cb() {
    debugger;

    msg = tdg.error_message.message("m000005"); // Record added
    tdg.c.message_panel_set("EntityFormControl", msg);

    form_clear();
}

function error_cb(msg) {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    msg = tdg.c.text_language(msg, selected_language)
    tdg.c.message_panel_set("EntityFormControl", msg);
}