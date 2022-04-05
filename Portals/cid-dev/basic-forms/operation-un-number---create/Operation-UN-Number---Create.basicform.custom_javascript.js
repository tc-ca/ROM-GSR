//
// Basic Form-Operation UN Number - Create.js
//
$(document).ready(function () {
    debugger;

    insert_tdgcore_common_js();

    // hide controls
    //tdg.c.control_hide("ovs_unnumber", true);

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    // resize WebResource_unnumber
    $("#WebResource_unnumber").height('72px');

    sessionStorage.setItem("tdg_unnumberid", "");

    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');

    // autocomplete off
    //$("#cid_unitofmeasurement").attr("autocomplete", "new-password");
    //$("#cid_annualquantityvolume").attr("autocomplete", "new-password");
    //$("#cid_annualnumberofshipment").attr("autocomplete", "new-password");
    //$("#ovs_supplychaindirection").attr("autocomplete", "new-password");

    btn_save_new_setup();
});

function insert_tdgcore_common_js() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "/tdgcore_common.js";

    $("body").append(script);
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
                if (Page_ClientValidate('')) {
                    clearIsDirty();
                    //disableButtons();
                    this.value = 'Processing...';
                }
            } else {
                clearIsDirty();
                //disableButtons();
                this.value = 'Processing...';
            }
        } else {
            return false;
        }
    } else {
        if (typeof Page_ClientValidate === 'function') {
            if (Page_ClientValidate('')) {
                clearIsDirty();
                //disableButtons();
                this.value = 'Processing...';
            }
        } else {
            clearIsDirty();
            //disableButtons();
            this.value = 'Processing...';
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

    // clear form
    $("#cid_unitofmeasurement").val(null);
    $("#cid_annualnumberofshipment").val("");
    $("#cid_annualquantityvolume").val("");
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
    tdg.webapi.create("ovs_operationunnumbers", data);
}
