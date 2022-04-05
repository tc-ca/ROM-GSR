//
// Basic Form-ERAP - Create.js
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

function btn_save_new_setup()
{
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
        if (entityFormClientValidate())
        {
            if (typeof Page_ClientValidate === 'function')
            {
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

    var button1 = $("#InsertButton");
    var eventTarget = button1[0].name;
    var eventArgument = "";
    var validation = true;
    var validationGroup = "";
    var actionUrl = window.document.URL;
    var trackFocus = false;
    var clientSubmit = true;

    //WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(
    //    eventTarget,
    //    eventArgument,
    //    validation,
    //    validationGroup,
    //    actionUrl,
    //    trackFocus,
    //    clientSubmit));

    debugger;

    // insert
    var parent_id = '{{user.parentcustomerid.Id}}';
    var contact_id = '{{user.id}}';
    var cid_erapid = $("#cid_erapid").val();

    cid_companyerap_insert(parent_id, cid_erapid, contact_id);

    // clear form
    $("#cid_erapid").val("");
}

function cid_companyerap_insert(account_id, cid_erapid, contact_id) {
    debugger;
    var data = {
        "cid_Company@odata.bind": "/accounts(" + account_id + ")",
        "cid_CreatedByRegistrant@odata.bind": "/contacts(" + contact_id + ")",
        "cid_erapid": cid_erapid
    };
    tdg.webapi.create("cid_companyeraps", data);
}
