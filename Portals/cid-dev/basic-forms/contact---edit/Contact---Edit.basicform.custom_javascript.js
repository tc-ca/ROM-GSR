//
// Basic Form-Contact - Edit.js
//
$(document).ready(function () {
    debugger;

    page_setup();

    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');

    $("#emailaddress1").width('100%');

    $("#telephone1").attr("placeholder", "");
    $("#mobilephone").attr("placeholder", "");

    tdg.c.addValidator("emailaddress1");

    // autocomplete off
    try {
        $("#firstname").attr("autocomplete", "new-password");
        $("#lastname").attr("autocomplete", "new-password");
        $("#emailaddress1").attr("autocomplete", "new-password");
        $("#telephone1").attr("autocomplete", "new-password");
        $("#mobilephone").attr("autocomplete", "new-password");
        $("#fax").attr("autocomplete", "new-password");
    } catch (e) { }

    //hide modified on by field
    $("#cid_portalrecordmodificationdetails").hide();
    $("#cid_portalrecordmodificationdetails_label").hide();
    var currentRecordID = document.getElementById("EntityFormControl_EntityFormView_EntityID").value;
    var currentUserId = '{{user.contactid}}';
    var userfullname = '{{user.fullname}}';
    var today = new Date();
    var dd = String(today.getDate());
    //.padStart(2, '0');
    var mm = String(today.getMonth() + 1);
    //.padStart(2, '0'); //January is 0!
    console.log(mm);
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    var modificationDetails = today + ", " + userfullname;

    Disable_ContactTypeFieldsForSecondaryUser();

    if (currentRecordID != currentUserId) {
        $("cid_modifiedbyregistrant_id").attr("value", '{{user.contactid}}');
        $("cid_modifiedbyregistrant_name").attr("value", '{{user.fullname}}');
        $("#cid_modifiedbyregistrant_entityname").attr("value", "contact");
    }
    else {
        $("#cid_portalrecordmodificationdetails").val(modificationDetails);
    }

    var companyName = '{{user.parentcustomerid.name }}';
    if (companyName) {
        $(".previous-btn").attr('disabled', true);
    }

    $("#telephone1").attr("maxlength", "10");
    $("#mobilephone").attr("maxlength", "10");
    $("#fax").attr("maxlength", "10");

    $("#telephone1").on('keyup', function () {
        var n = $(this).val().replace(/\D/g, '');
        $(this).val(n);
        var match = n.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            $(this).val('(' + match[1] + ') ' + match[2] + '-' + match[3]);
        }
    });
    $("#mobilephone").on('keyup', function () {
        var n = $(this).val().replace(/\D/g, '');
        $(this).val(n);
        var match = n.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            $(this).val('(' + match[1] + ') ' + match[2] + '-' + match[3]);
        }
    });
    $("#fax").on('keyup', function () {
        var n = $(this).val().replace(/\D/g, '');
        $(this).val(n);
        var match = n.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            $(this).val('(' + match[1] + ') ' + match[2] + '-' + match[3]);
        }
    });

    $('#cid_contacttype').attr("disabled", true);
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
        webFormClientValidate = function () {
            sessionStorage.setItem("step_start", "");

            return true;
        }
    }(window.jQuery));
}

function Disable_ContactTypeFieldsForSecondaryUser() {
    debugger;

    var cid_contacttype = '{{user.cid_contacttype.Value}}';
    //if not primary contact
    if (cid_contacttype != 100000000) {
        $("#firstname").prop("disabled", true);
        $("#lastname").prop("disabled", true);
        $("#emailaddress1").prop("disabled", true);
        $("#telephone1").prop("disabled", true);
        $("#mobilephone").prop("disabled", true);
        $("#fax").prop("disabled", true);
        $("#cid_languageofcorrespondence").prop("disabled", true);
        $("#cid_contacttype").prop("disabled", true);
    }

    //if primary contact and not the primary contact record
    if (cid_contacttype != 100000000 || $('#cid_contacttype').val() == 100000000) {
        $("#cid_contacttype").prop("disabled", true);
    }
}