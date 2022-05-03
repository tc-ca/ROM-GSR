//
// Basic Form-Operation UN Number - Create.js
//
var _reload = false;

$(document).ready(function () {
    debugger;

    page_setup();

    // hide controls
    tdg.c.control_hide("ovs_unnumber", true);

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    // resize WebResource_unnumber
    $("#WebResource_unnumber").height('72px');

    sessionStorage.setItem("tdg_unnumberid", "");

    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');

    btn_save_new_setup();
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

function tdg_unnumberid_selected(text, id) {
    debugger;

    var index1 = text.indexOf(" - ");
    text = text.substr(0, index1);
    $("#ovs_unnumber").attr("value", id);
    $("#ovs_unnumber_name").attr("value", text);
    $("#ovs_unnumber_entityname").attr("value", 'tdg_unnumber');
}

//Function called on form submit
if (window.jQuery) {
    (function ($) {

        entityFormClientValidate = function () {
            debugger;
            var validation = true;

            //remove commas from quantity field
            var validBuffer = $("#cid_annualquantityvolume").val().replaceAll(',', '');
            $("#cid_annualquantityvolume").val(validBuffer);

            //remove commas from number of shippments field
            validBuffer = $("#cid_annualnumberofshipment").val().replaceAll(',', '');
            $("#cid_annualnumberofshipment").val(validBuffer);

            return validation;
        }
    }(window.jQuery));
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
    var ovs_unnumber = $("#ovs_unnumber").val();
    var cid_unitofmeasurement = $("#cid_unitofmeasurement").val();
    var cid_annualnumberofshipment = $("#cid_annualnumberofshipment").val();
    var cid_annualquantityvolume = $("#cid_annualquantityvolume").val();

    ovs_operationunnumber_insert(operation_id,
        ovs_unnumber,
        cid_unitofmeasurement,
        cid_annualquantityvolume,
        cid_annualnumberofshipment,
        contact_id);
}

function ovs_operationunnumber_insert(operation_id, ovs_unnumber,
    cid_unitofmeasurement, cid_annualquantityvolume, cid_annualnumberofshipment,
    contact_id) {
    debugger;
    var data = {
        "ovs_OperationClass@odata.bind": "/ovs_mocregistrations(" + operation_id + ")",
        "ovs_UNNumber@odata.bind": "/tdg_unnumbers(" + ovs_unnumber + ")",
        "cid_CreatedByRegistrant@odata.bind": "/contacts(" + contact_id + ")",
        "cid_unitofmeasurement": cid_unitofmeasurement,
        "cid_annualquantityvolume": cid_annualquantityvolume,
        "cid_annualnumberofshipment": cid_annualnumberofshipment
    };
    tdg.webapi.create("ovs_operationunnumbers", data, success_cb, error_cb);
}

function form_clear() {
    debugger;
    $("#cid_unitofmeasurement").val(null);
    $("#cid_annualnumberofshipment").val("");
    $("#cid_annualquantityvolume").val("");

    try {
        var f = document.getElementById("tdg_unnumberid");
        var c = f.contentWindow; c.clear_field();
    } catch (e) { }
}

function success_cb() {
    debugger;

    msg = tdg.error_message.message("m000014"); // Record added
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
