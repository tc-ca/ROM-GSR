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
    if (source.search("Terms and") != -1) {
        $(document).find("title").text("Terms and Conditions");
        $("#cdts-signin-btn").hide(); // Hide sing in button

        //var cancelLabel = tdg.error_message.message("BTN_CANCEL");
        $("#submit-agreement").after("&nbsp; <input id='cancelButton' type='button' name='CancelButton' value='Cancel' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'>");
        $('#cancelButton').click(function (e) {
            tdg.c.sign_out();
            //window.location.href = '~/en/Account/Login/LogOff';
        });
    }
    //Condition for initial registration page
    if (source.search("Registration") != -1) {
        $(document).find("title").text("Registration");
        //TODO logic for post login invitation
    }
    //TODO add logic for the default access denied page
}
debugger;

//account already existing
if ($('.xrm-attribute-value-encoded')[0].innerText == "Register your external account") {
    //$('.xrm-attribute-value-encoded').css({ position: "relative" , left: "30px" });
    if ($('.validation-summary-errors')[0]) {
        var Innerhtml = $('.validation-summary-errors')[0].innerHTML;
        var InnerText = $('.validation-summary-errors')[0].innerText;
        if (Innerhtml != null && Innerhtml.substring(0, 18) == "<ul><li>The email ") {
            $('.validation-summary-errors')[0].innerHTML =
                "<ul><li>This email is already in use. This may be due to an invitation previously being sent to this email address. You can use that invitation to access the application.</li><li>If this is not the case, or you require further details, then please choose the Contact Us link below.</li></ul>";
        }
        else if (InnerText != null && InnerText == "Invalid invitation code.") {
            $('.validation-summary-errors')[0].InnerText = "The Invitation Code is already redreemed or expired.";
        }
    }
}

//invalid invitation Code
if ($('.xrm-attribute-value-encoded')[0].innerText == "Sign up with an invitation code") {
    if ($('.validation-summary-errors')[0]) {
        var InnerText = $('.validation-summary-errors')[0].innerText;
        if (InnerText != null && InnerText == "Invalid invitation code.") {
            $('.validation-summary-errors')[0].innerText = "The Invitation Code is already redeemed or Invitation is no longer valid. If required, please choose the Contact Us link at the bottom of this screen to request a new invitation.";
        }
    }
}

if ($(".btn.btn-primary:contains('Register')")) {
    $(".btn.btn-primary:contains('Register')").after("&nbsp; <input id='cancelButton' type='button' name='CancelButton' value='Cancel' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'>");
    $('#cancelButton').click(function (e) {
        window.location.href = '~/en/SignIn?returnUrl=%2Fen%2F';
    });
    $("#cdts-signin-btn").hide(); // Hide sing in button
}
