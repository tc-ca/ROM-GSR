//
// Basic Form-Contact - Edit.js
//

$(document).ready(function () {
    debugger;

    page_setup();

    sessionStorage.setItem("NewContactFlag", false);
    sessionStorage.setItem("FullName", "");
    sessionStorage.setItem("Email", "");

    //Name formatting
    tdg.cid.name_init("firstname");
    tdg.cid.name_init("lastname");

    //add cancel button
    var cancelLabel = tdg.error_message.message("BTN_CANCEL");
    $('#UpdateButton').after('<input type="button" data-dismiss="modal" value="" id="CancelButton" name="CancelButton" class="submit-btn btn btn-primary form-action-container-left"/>')
    $("#CancelButton")[0].value = cancelLabel;
    $('#CancelButton').on('click', function (event) {
        parent.$(".form-close").click();
        sessionStorage.setItem("NewContactFlag", false);
        sessionStorage.setItem("FullName", "");
        sessionStorage.setItem("Email", "");
    });

    if (window.jQuery) {
        (function ($) {
            if (typeof (entityFormClientValidate) != 'undefined') {
                var originalValidationFunction = entityFormClientValidate;
                if (originalValidationFunction && typeof (originalValidationFunction) == "function") {
                    entityFormClientValidate = function () {
                        return true;
                        //DO VALIDATION HERE. RETURN TRUE IF PASSED AND FALSE IF FAIL  
                    };
                }
            }
        }(window.jQuery));
    }
    //there is event listner for onclick , change event for all fields
    tdg.cid.Get_Contact_Changes_and_SendEmail();

    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');

    $("#emailaddress1").width('100%');

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
    var mm = String(today.getMonth() + 1);
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

    var selected_language = '{{website.selected_language.code}}';

    //Phone number formatting
    tdg.cid.phone_init("telephone1", selected_language);
    tdg.cid.phone_init("mobilephone", selected_language);
    tdg.cid.phone_init("fax", selected_language);

    $('#cid_contacttype').attr("readonly", true);
    $('#cid_contacttype').css("pointer-events", "none");

    $('#cid_contacttypetext').attr("readonly", true);
    $('#cid_contactTypetext').css("pointer-events", "none");
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
    //contact type should be read only even for primary
    //to switch contact type they need to use the custom action on the grid Assign Primary admin 
    var Record_contact_type = $('#cid_contacttype').val();

    var Record_contact_type_text = $('#cid_contacttype').find(":selected").text();

    $('#cid_contacttype').attr("readonly", true);
    $('#cid_contacttype').css("pointer-events", "none");

    $("#cid_contacttype").hide();
    $("#cid_contacttype_label").hide();


    $('#cid_contacttypetext').attr("readonly", true);
    $('#cid_contacttypetext').css("pointer-events", "none");

    var Current_User_contacttype = '{{user.cid_contacttype.Value}}';

    $("#cid_contacttypetext").val(Record_contact_type_text);

    //if not primary contact and current record is for primary
    if (Current_User_contacttype != 100000000 && Record_contact_type == 100000000) {
        $("#firstname").prop("disabled", true);
        $("#lastname").prop("disabled", true);
        $("#emailaddress1").prop("disabled", true);
        $("#telephone1").prop("disabled", true);
        $("#mobilephone").prop("disabled", true);
        $("#fax").prop("disabled", true);
        $("#cid_languageofcorrespondence").prop("disabled", true);
        $('#cid_contacttype').attr("readonly", true);
        $('#cid_contacttype').css("pointer-events", "none");
        //disable update button
        $('#UpdateButton').prop('disabled', true);

    }
    //lock email address update if current user is not admin
    else if (Current_User_contacttype != 100000000 && Record_contact_type != 100000000) {
        $("#emailaddress1").prop("disabled", true);

    }
}