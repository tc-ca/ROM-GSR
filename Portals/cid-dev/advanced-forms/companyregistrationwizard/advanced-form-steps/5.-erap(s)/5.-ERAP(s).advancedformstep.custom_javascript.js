//
// CompanyRegistrationWizard-ERAP.js
//
$(document).ready(function ()
{
	debugger;

	$("#cid_registrationasof").parent().parent().hide();

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);
	var entityList = $(".entity-grid").eq(0);
	entityList.on("loaded", function ()
	{
		debugger;
		var k_msg = "company_registration_wizard_ERAP";
		var alert_ind = sessionStorage.getItem(k_msg);
		// header
		if (alert_ind != "true")
		{
			let rows = entityList.find("table tbody > tr");
			if (rows.length > 0)
			{
				var msg = tdg.error_message.message("m000101");
				tdg.c.dialog_OK(msg);
			}
			sessionStorage.setItem(k_msg, "true");
		}
	});
	//make for readonly for secondary users
	var currentUserId = '{{user.contactid}}';
	Disable_ContactTypeFieldsForSecondaryUser(currentUserId);


	//hide empty message
	$(".entity-grid").on("loaded", function () { const EmptyMessageDiv = document.querySelector(".view-empty");	
         	EmptyMessageDiv.style.display = "none";
      });
});
if (window.jQuery)
{
	(function ($)
	{
		webFormClientValidate = function ()
		{
			debugger;
			var validation = true;
			return validation;
		}
	}(window.jQuery));
}

function Disable_ContactTypeFieldsForSecondaryUser(currentuserId)
{
	debugger;
	var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
	//if not primary contact
	if (cid_usercontacttype != 100000000)
	{
		$(".create-action").attr("disabled", true);
		$(".create-action").css("pointer-events", "none");
		//Wait till subgrid load
		$("#eraps").on("loaded", function ()
		{
			$(".btn.btn-default.btn-xs").prop("disabled", true);
		});
	}
}