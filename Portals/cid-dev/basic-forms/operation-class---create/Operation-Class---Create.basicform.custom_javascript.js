//
// Basic Form-Operation Class- Create.js
//
$(document).ready(function () {
    debugger;

    insert_tdgcore_common_js();

    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');

    // insert button
    btn_save_new_setup();
});

function insert_tdgcore_common_js() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "/tdgcore_common.js";

    $("body").append(script);
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
    var ovs_primeclass = $("#ovs_primeclass").val();

    ovs_operationclass_insert(operation_id, ovs_primeclass, contact_id);

    // clear form
    $("#ovs_primeclass").val("");
}

function ovs_operationclass_insert(operation_id, ovs_primeclass, contact_id) {
    debugger;
    var data = {
        //"cid_Site@odata.bind": "/accounts(" + account_id + ")",
        "ovs_OperationClass@odata.bind": "/ovs_mocregistrations(" + operation_id + ")",
        "cid_CreatedByRegistrant@odata.bind": "/contacts(" + contact_id + ")",
        "ovs_primeclass": ovs_primeclass
    };
    tdg.webapi.create("ovs_operationclasses", data);
}
