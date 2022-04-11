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

// call back from tdg.c
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
