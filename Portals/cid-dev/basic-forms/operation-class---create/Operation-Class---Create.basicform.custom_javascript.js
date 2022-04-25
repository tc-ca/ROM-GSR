//
// Basic Form-Operation Class- Create.js
//
$(document).ready(function () {
    debugger;

    page_setup();

    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');

    // insert button
    btn_save_new_setup();

    debugger;
    var btn_close = $(".form-close")[0];
    btn_close.click(function () {
        alert("xxx");
    });
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

function btn_save_new_setup() {
    //debugger;

    var button = $('<input type="button" name="btn_save_new" id="btn_save_new" />');
    $("#InsertButton").after(button);

    var button1 = $("#InsertButton");
    button1.prop("value", "Submit and Close");
    var className = button1[0].className
    var fontSize = button1.css("fontSize");
    var color = button1.css("color");
    var background_color = button1.css("background-color");

    var button2 = $("#btn_save_new");
    button2.prop("value", "Submit and Add Another");
    button2[0].className = className;
    button2.css("fontSize", fontSize);
    button2.css('color', color);
    button2.css("background-color", background_color);

    // bind the click event to this custom buttton
    $("#btn_save_new").bind("click", function () {
        btn_save_new_onclick();
    });
}

function btn_save_new_onclick()
{
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
    var ovs_primeclass = $("#ovs_primeclass").val();

    ovs_operationclass_insert(operation_id, ovs_primeclass, contact_id);
}

function ovs_operationclass_insert(operation_id, ovs_primeclass, contact_id) {
    debugger;
    var data = {
        //"cid_Site@odata.bind": "/accounts(" + account_id + ")",
        "ovs_OperationClass@odata.bind": "/ovs_mocregistrations(" + operation_id + ")",
        "cid_CreatedByRegistrant@odata.bind": "/contacts(" + contact_id + ")",
        "ovs_primeclass": ovs_primeclass
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
}

function error_cb(msg) {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    msg = tdg.c.text_language(msg, selected_language)
    tdg.c.message_panel_set("EntityFormControl", msg);
}
