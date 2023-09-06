//
// Web Page-Access Denied
// 
$(document).ready(function ()
{
	debugger;
	// page_setup();
});

function page_setup()
{
	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);
	// format sign-out's tooltip
	$('#cdts-signout-btn').tooltip(
	{
		trigger: 'hover',
		placement: 'right',
		container: 'body'
	});
	const files = ["/tdgcore_common.js", "/tdgcore_message.js"];
	for (var i = 0; i < files.length; i++)
	{
		var file = files[i];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = file;
		$("body").append(script);
	}
	// server error?
	tdg.c.message_panel();
}
debugger;
page_setup();
if ($('.validation-summary-errors').length)
{
	var InnerText = $('.validation-summary-errors')[0].innerText;
	//fix special char issue
	$('.validation-summary-errors')[0].innerText = tdg.c.replace_special_char(InnerText);
	var emialfileRequiredMessage = tdg.error_message.message("m000209");
	//change style from error to info 
	if ($('.validation-summary-errors')[0].innerText == emialfileRequiredMessage
	//"The Email field is required."
	) //need the text to message file
	{
		$('.validation-summary-errors').removeClass("alert-danger");
		$('.validation-summary-errors').addClass("alert-info");
	}
	else
	{
		$('.validation-summary-errors').removeClass("alert-info");
		$('.validation-summary-errors').addClass("alert-danger");
	}
}
if (document.getElementsByTagName('h1')[0])
{
	if ($(":button.btn.btn-primary.btn-line").lenght)
	{
		var signin_label = tdg.error_message.message("BTN_SIGNIN");
		$(":button.btn.btn-primary.btn-line").text(signin_label);
		var signin_ttip = tdg.error_message.message("ttip_SIGNIN");
		$(":button.btn.btn-primary.btn-line")[0].title = signin_ttip;
	}
	var source = document.getElementsByTagName('h1')[0].innerHTML;
	var terms_and = tdg.error_message.message("m000199");
	var terms_and_conditions = tdg.error_message.message("m000189");
	if (source.search(terms_and) != -1)
	{
		$(document).find("title").text(terms_and_conditions);
		$("#cdts-signin-btn").hide(); // Hide sing in button
		var cancelLabel = tdg.error_message.message("BTN_CANCEL");
		$("#submit-agreement").after("&nbsp; <input id='cancelButton' type='button' name='CancelButton' value='" + cancelLabel + "' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'>");
		$('#cancelButton').click(function (e)
		{
			tdg.c.sign_out();
			//window.location.href = '~/en/Account/Login/LogOff';
		});
	}
	//Condition for initial registration page
	if (source.search("Registration") != -1)
	{
		var registration = tdg.error_message.message("m000190");
		$(document).find("title").text(registration);
		//TODO logic for post login invitation
	}
	//TODO add logic for the default access denied page
}
$('legend').after("<br><br><br><br>");
//disabled register key if email is not entered on the change event of the text box
$("#Email").on("change", function ()
{
	if ($("#Email").val().trim() == "")
	{
		$(".btn-primary").prop('disabled', true);
	}
	else
	{
		$(".btn-primary").prop('disabled', false);
	}
}); //end change event
//disable register key if  email is not entered
if ($("#Email").lenght && $("#Email").val().trim() == "")
{
	$(".btn-primary").prop('disabled', true);
}
else
{
	$(".btn-primary").prop('disabled', false);
}
var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('invitationCode'))
{
	debugger;
	var invitation_code = urlParams.get('invitationCode');
	var code = sessionStorage.getItem('invitation_code');
	if (invitation_code.length > 0)
	{
		var submit = $(":button.btn.btn-primary.btn-line");
		submit.trigger('click');
	}
}
//account already existing
var Register_external_account = tdg.error_message.message("m000191");
try
{
	text = $('.xrm-attribute-value-encoded')[0].innerText;
}
catch (e)
{
	text = "";
}
if (text == Register_external_account)
{
	debugger;
	if ($('.validation-summary-errors')[0])
	{
		var Innerhtml = $('.validation-summary-errors')[0].innerHTML;
		var InnerText = $('.validation-summary-errors')[0].innerText;
		var The_email = tdg.error_message.message("m000192");
		var invalid_invitation = tdg.error_message.message("m000194");
		if (Innerhtml != null && Innerhtml.substring(0, 18) == The_email)
		{
			var email_in_use = tdg.error_message.message("m000193");
			$('.validation-summary-errors')[0].innerHTML = email_in_use;
			// popup msg
			var email = $("#Email")[0].value;
			var filter = "statecode eq 0 and emailaddress1 eq '" + email + "'";
			var data = tdg.webapi.list("contacts", filter);
			var parentcustomerid = data[0]._parentcustomerid_value;
			if (parentcustomerid != null)
			{
				var filter = "accountid eq '" + parentcustomerid + "'";
				var data = tdg.webapi.list("accounts", filter);
				var customertypecode = data[0].customertypecode;
				switch (customertypecode)
				{
					case 948010000:
						// parent
						break;
					case 948010001:
						// site
						var msg = tdg.error_message.message("m000208");
						tdg.c.dialog_OK(msg);
						break;
				}
			}
		}
		else if (InnerText != null && InnerText == invalid_invitation)
		{
			var invitation_expired = tdg.error_message.message("m000195");
			$('.validation-summary-errors')[0].InnerText = invitation_expired;
		}
	}
}
//invalid invitation Code
var sign_up_invitation = tdg.error_message.message("m000196");
try
{
	page_header = $('.xrm-attribute-value-encoded')[0].innerText;
}
catch (e)
{
	page_header = "";
}
if (page_header == sign_up_invitation)
{
	debugger;
	var invitation_code = urlParams.get('invitation_code');
	if (invitation_code != null)
	{
		sessionStorage.setItem('invitation_code', invitation_code);
		$('#InvitationCode')[0].value = invitation_code;
		$('#submit-redeem-invitation').trigger('click');
	}
	var invalid_invitation = tdg.error_message.message("m000194");
	if ($('.validation-summary-errors')[0])
	{
		var InnerText = $('.validation-summary-errors')[0].innerText;
		if (InnerText != null && InnerText == invalid_invitation)
		{
			var redeemed_invitation = tdg.error_message.message("m000197");
			$('.validation-summary-errors')[0].innerText = redeemed_invitation;
		}
	}
}
try
{
	text = $(".btn.btn-primary:contains('Register')");
}
catch (e)
{
	text = false;
}
if (text)
{
	debugger;
	var cancelLabel = tdg.error_message.message("BTN_CANCEL");
	$(".btn.btn-primary:contains('Register')").after("&nbsp; <input id='cancelButton' name='cancelButton' type='button' value='" + cancelLabel + "' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'>");
	$('#cancelButton').click(function (e)
	{
		window.location.href = '~/en/SignIn?returnUrl=%2Fen%2F';
	});
	$("#cdts-signin-btn").hide(); // Hide sing in button
}