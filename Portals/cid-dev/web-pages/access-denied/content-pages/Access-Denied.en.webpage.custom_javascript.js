//
// Web Page-Access Denied
// 

$(document).ready(function () {
    debugger;

    page_setup();
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

if (document.getElementsByTagName('h1')[0]) {
    debugger;
    var source = document.getElementsByTagName('h1')[0].innerHTML;
    var Terms_and = tdg.error_message.message("m000199");
    if (source.search(Terms_and) != -1) {
        var Terms_and_Conditions = tdg.error_message.message("m000189");
        $(document).find("title").text(Terms_and_Conditions);
        $("#cdts-signin-btn").hide(); // Hide sing in button

        var cancelLabel = tdg.error_message.message("BTN_CANCEL");
        $("#submit-agreement").after("&nbsp; <input id='cancelButton' type='button' name='CancelButton' value='" + cancelLabel + "' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'>");
        $('#cancelButton').click(function (e) {
            tdg.c.sign_out();
            //window.location.href = '~/en/Account/Login/LogOff';
        });
    }
    //Condition for initial registration page
     
    if (source.search("Registration") != -1) {
        var Registration = tdg.error_message.message("m000190");
        $(document).find("title").text(Registration);
        //TODO logic for post login invitation
    }
    //TODO add logic for the default access denied page
}
debugger;

//account already existing
var Register_your_external_account = tdg.error_message.message("m000191");
if ($('.xrm-attribute-value-encoded')[0].innerText == Register_your_external_account) {
    //$('.xrm-attribute-value-encoded').css({ position: "relative" , left: "30px" });
    if ($('.validation-summary-errors')[0]) {
        var Innerhtml = $('.validation-summary-errors')[0].innerHTML;
        var InnerText = $('.validation-summary-errors')[0].innerText;

        var The_email = tdg.error_message.message("m000192");
        var invalid_email = tdg.error_message.message("m000194");

        if (Innerhtml != null && Innerhtml.substring(0, 18) == The_email) {
            var email_in_use = tdg.error_message.message("m000193");
            $('.validation-summary-errors')[0].innerHTML = email_in_use;
        }
        else if (InnerText != null && InnerText == invalid_email) {
            var code_expired = tdg.error_message.message("m000195");
            $('.validation-summary-errors')[0].InnerText = code_expired;
        }
    }
}

//invalid invitation Code
var sign_up_with_invitation_code = tdg.error_message.message("m000196");
if ($('.xrm-attribute-value-encoded')[0].innerText == sign_up_with_invitation_code) {
    if ($('.validation-summary-errors')[0]) {
        var InnerText = $('.validation-summary-errors')[0].innerText;
        var invalid_invitation = tdg.error_message.message("m000194");
        if (InnerText != null && InnerText == invalid_invitation) {
            var redeemed_invitation = tdg.error_message.message("m000197");
            $('.validation-summary-errors')[0].innerText = redeemed_invitation;
        }
    }
}
var register_label = tdg.error_message.message("m000198")
if ($(".btn.btn-primary:contains('Register')")) {
    var cancelLabel = tdg.error_message.message("BTN_CANCEL");
    $(".btn.btn-primary:contains('Register')").after("&nbsp; <input id='cancelButton' type='button' name='CancelButton' value='" + cancelLabel + "' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'>");
    $('#cancelButton').click(function (e) {
        window.location.href = '~/en/SignIn?returnUrl=%2Fen%2F';
    });
    $("#cdts-signin-btn").hide(); // Hide sing in button
}
