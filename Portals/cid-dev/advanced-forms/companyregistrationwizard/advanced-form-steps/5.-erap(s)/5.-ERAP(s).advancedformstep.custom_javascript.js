//
// CompanyRegistrationWizard-ERAP.js
//
$(document).ready(function () {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

	var entityList = $(".entity-grid").eq(0);

	entityList.on("loaded", function () {
		debugger;

        var k_msg = "company_registration_wizard_ERAP";

        var alert_ind = sessionStorage.getItem(k_msg);

		// header
        if (alert_ind != "true") {
            let rows = entityList.find("table tbody > tr");
            if (rows.length > 0) {
                var msg = tdg.error_message.message("m000101");
                tdg.c.dialog_OK(msg);
            }
            sessionStorage.setItem(k_msg,"true");
        }

	});

    //make for readonly for secondary users
    var currentUserId = '{{user.contactid}}';
	Disable_ContactTypeFieldsForSecondaryUser(currentUserId);
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            debugger;

            var validation = true;

            return validation;
        }
    }(window.jQuery));
}

function Disable_ContactTypeFieldsForSecondaryUser(currentuserId) {
	debugger;
	if (currentuserId == null) return;
	var filteroption = "contactid eq (guid'" + currentuserId + "')";
	var odataUri = window.location.protocol + "//" + window.location.host + "/_odata/contact";
	odataUri += "?$filter=" + encodeURIComponent(filteroption);
	//Get user contact record
	$.ajax(
		{
			type: "GET",
			contentType: "application/json; charset=utf-8",
			datatype: "json",
			url: odataUri,
			beforeSend: function (XMLHttpRequest) {
				XMLHttpRequest.setRequestHeader("Accept", "application/json");
			},
			async: false,
			success: function (data, textStatus, xhr) {
				var result = data;
				var cid_UserContactType = result.value[0].cid_contacttype.Value;
				//if not primary contact
				if (cid_UserContactType != 100000000) {
                    $(".create-action").attr("disabled", true);
                    $(".create-action").css("pointer-events", "none");

                    //Wait till subgrid load
                    $("#eraps").on("loaded", function () {
                        $(".btn.btn-default.btn-xs").prop("disabled", true);
                    });
				}
			},
			error: function (xhr, textStatus, errorThrown) {
				alert(textStatus + ' ' + errorThrown);
			}
		});
}


