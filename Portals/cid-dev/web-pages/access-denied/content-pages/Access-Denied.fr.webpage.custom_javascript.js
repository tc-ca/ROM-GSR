//
// Web Page-Access Denied
// 

$(document).ready(function () {
    debugger;
$('#cdts-signout-btn').tooltip({
					trigger: 'hover',
					placement: 'right',
					container: 'body'
						});

   // page_setup();
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
    page_setup();
    var source = document.getElementsByTagName('h1')[0].innerHTML;
    var terms_and = tdg.error_message.message("m000199");
    var terms_and_conditions = tdg.error_message.message("m000189");
    if (source.search(terms_and) != -1) {
        $(document).find("title").text(terms_and_conditions);
        $("#cdts-signin-btn").hide(); // Hide sing in button
        var cancelLabel = tdg.error_message.message("BTN_CANCEL");
        $("#submit-agreement").after("&nbsp; <input id='cancelButton' type='button' name='CancelButton' value='"+ cancelLabel +"' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'>");
        $('#cancelButton').click(function (e) {
            tdg.c.sign_out();
            //window.location.href = '~/en/Account/Login/LogOff';
        });
    }
    //Condition for initial registration page
    if (source.search("Registration") != -1) {
        var registration = tdg.error_message.message("m000190");
        $(document).find("title").text(registration);
        //TODO logic for post login invitation
    }
    //TODO add logic for the default access denied page
}
debugger;

//account already existing
var Register_external_account = tdg.error_message.message("m000191");
if ($('.xrm-attribute-value-encoded')[0].innerText == Register_external_account) {
    //$('.xrm-attribute-value-encoded').css({ position: "relative" , left: "30px" });
    if ($('.validation-summary-errors')[0]) {
        var Innerhtml = $('.validation-summary-errors')[0].innerHTML;
        var InnerText = $('.validation-summary-errors')[0].innerText;
        var The_email = tdg.error_message.message("m000192");
        var invalid_invitation = tdg.error_message.message("m000194");
        if (Innerhtml != null && Innerhtml.substring(0, 18) == The_email) {
            var email_in_use = tdg.error_message.message("m000193");
            $('.validation-summary-errors')[0].innerHTML = email_in_use;
        }
        else if (InnerText != null && InnerText == invalid_invitation) {
            var invitation_expired = tdg.error_message.message("m000195");
            $('.validation-summary-errors')[0].InnerText = invitation_expired ;
        }
    }
}

//invalid invitation Code
var sign_up_invitation = tdg.error_message.message("m000196");
if ($('.xrm-attribute-value-encoded')[0].innerText == sign_up_invitation) {
    var invalid_invitation = tdg.error_message.message("m000194");
    if ($('.validation-summary-errors')[0]) {
        var InnerText = $('.validation-summary-errors')[0].innerText;
        if (InnerText != null && InnerText == invalid_invitation) {
            var redeemed_invitation = tdg.error_message.message("m000197");
            $('.validation-summary-errors')[0].innerText = redeemed_invitation;
        }
    }
}

if ($(".btn.btn-primary:contains('Register')")) {
   var cancelLabel = tdg.error_message.message("BTN_CANCEL");
    $(".btn.btn-primary:contains('Register')").after("&nbsp; <input id='cancelButton' type='button' name='"+ cancelLabel +"' value='Cancel' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'>");   
    $('#cancelButton').click(function (e) {
        window.location.href = '~/en/SignIn?returnUrl=%2Fen%2F';
    });
    $("#cdts-signin-btn").hide(); // Hide sing in button
}
