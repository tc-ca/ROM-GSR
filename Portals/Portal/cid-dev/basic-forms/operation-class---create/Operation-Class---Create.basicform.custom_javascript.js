//
// Basic Form-Operation Class- Create.js
//
var _reload = false;

$(document).ready(function () {
    debugger;

    page_setup();

    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');

    // insert button
    tdg.c.btn_save_new_setup();
});

$(window).unload(function () {
    debugger;
    if (_reload) {
        var wp = window.parent;
        try {
            //wp.form_refresh();
            wp.location.reload()
        } catch (e) { }
    }
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

function btn_save_new_onclick() {
    tdg.c.error_message_clear();
    if (typeof entityFormClientValidate === 'function') {
        if (entityFormClientValidate()) {
            if (typeof Page_ClientValidate === 'function') {
                value = Page_ClientValidate('');
            }
        }
    };

    var operation_id = null;
    var url_search = window.location.search.replace("?", "");
    var list = url_search.split("&");
    for (var i in list) {
        var item = list[i];
        if (item.substr(0, 6) == "refid=") {
            operation_id = item.substr(6);
            break;
        }
    }

    if (operation_id == null) return;
    debugger;

    // insert
    var contact_id = '{{user.id}}';
    var ovs_primaryclass_group = $("#ovs_primaryclass_group").val();

    ovs_operationclass_insert(operation_id, ovs_primaryclass_group, contact_id);
}

function ovs_primaryclass_group_selected(text, id) {
    debugger;

    var index1 = text.indexOf(" - ");
    text = text.substr(0, index1);
    $("#ovs_primaryclass_group").attr("value", id);
    $("#ovs_primaryclass_group_name").attr("value", text);
    $("#ovs_primaryclass_group_entityname").attr("value", 'ovs_primaryclass_group');
}

function ovs_operationclass_insert(operation_id, ovs_primaryclass_group, contact_id) {
    debugger;
    var data = {
        "ovs_OperationClass@odata.bind": "/ovs_mocregistrations(" + operation_id + ")",
        "cid_CreatedByRegistrant@odata.bind": "/contacts(" + contact_id + ")",
        "ovs_primaryclass_group@odata.bind": "/ovs_primaryclass_groups(" + ovs_primaryclass_group + ")"
    };
    tdg.webapi.create("ovs_operationclasses", data, success_cb, error_cb);
}

function form_clear() {
    debugger;
    $("#ovs_primeclass").val("");
}

function success_cb() {
    debugger;

    msg = tdg.error_message.message("m000005"); // Record added
    tdg.c.message_panel_set("EntityFormControl", msg);

    // clear form
    form_clear();

    _reload = true;
}

function error_cb(msg) {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    msg = tdg.c.text_language(msg, selected_language)
    tdg.c.message_panel_set("EntityFormControl", msg);
}
