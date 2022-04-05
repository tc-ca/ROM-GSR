//
// Basic Form-Company NAICS Code - Create.js
//
$(document).ready(function () {
    debugger;

    insert_common_routine_js();

    // hide controls
    tdg.c.control_hide("cid_naicscode", true);

    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');

    // insert button
    btn_save_new_setup();

    // clear form
    $("#cid_naicscode").attr("value", null);
    $("#cid_naicscode_name").attr("value", null);
});

function insert_common_routine_js()
{
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

    // insert
    var account_id = '{{user.parentcustomerid.Id}}';
    var contact_id = '{{user.id}}';
    var cid_naicscode = $("#cid_naicscode").attr("value");

    cid_companynaicscode_insert(account_id, cid_naicscode, contact_id);

    // clear form
    form_clear();
}

function cid_companynaicscode_insert(account_id, cid_naicscode, contact_id) {
    debugger;
    var data = {
        "cid_Company@odata.bind": "/accounts(" + account_id + ")",
        "cid_NAICSCode@odata.bind": "/cid_naicscodes(" + cid_naicscode + ")",
        "cid_CreatedByRegistrant@odata.bind": "/contacts(" + contact_id + ")",
    };
    tdg.webapi.create("cid_companynaicscodes", data);
}

function form_clear() {
    debugger;

    //$("#cid_naicscode").attr("value", null);
    //$("#cid_naicscode_name").attr("value", null);

    try {
        var f = document.getElementById("WebResource_naicscode");
        var c = f.contentWindow;
        c.clear_field();
    } catch (e) {}
}
