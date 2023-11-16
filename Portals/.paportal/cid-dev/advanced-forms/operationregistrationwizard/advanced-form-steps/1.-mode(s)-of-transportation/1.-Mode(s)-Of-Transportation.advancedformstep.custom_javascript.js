//
// OperationRegistrationWizard-MOT.js
//
$(document).ready(function () {
	debugger;

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	tdg.c.page_instructions("page_orw_mot");

	var urlParams = new URLSearchParams(window.location.search);
	debugger;
	if (urlParams.has('siteid')) {
		var siteId = urlParams.get('siteid');

		if (urlParams.has('in_year') || sessionStorage.getItem('frominyearsites')) {
			sitePageURL = "~/my-sites/in-year-site/?id=" + siteId;
			tdg.c.weblink_hide("/RegistrationWizard/");
			tdg.c.weblink_show("/company_dashboard/");
		}
		else {
			sitePageURL = "~/SiteRegistrationWizard/?id=" + siteId;
			tdg.c.weblink_show("/RegistrationWizard/");
			tdg.c.weblink_hide("/company_dashboard/");
		}

		sessionStorage.setItem('to_actvt_stp', 'true');

		var message = tdg.error_message.message("BTN_PREVIOUS");
		$("#NextButton").parent().before("<div role='group' class='btn-group entity-action-button'><input type='button' value='' id='PreviousButton' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'></a></div>");
		$("#PreviousButton")[0].value = message;
		$('#PreviousButton').click(function (e) {
			debugger;
			var urlParams = new URLSearchParams(window.location.search);
			if (urlParams.has('id')) {
				var siteid = urlParams.get('id');
				if (siteid != "") {
					sessionStorage.setItem('to_actvt_stp', 'true');
					window.location.href = "~/SiteRegistrationWizard/?id=" + siteId;
				}
			}
		});
	}

// remove role attribute from lables due accessiblity issue in PBI #262949
	     setTimeout( function(){
                   
                $("#cid_modeoftransportationroad_label").attr("role", "");            
                $("#cid_modeoftransportationrail_label").attr("role", "");
                $("#cid_modeoftransportationair_label").attr("role", "");
                $("#cid_modeoftransportationmarine_label").attr("role", "");
             
    }, 1000);

});

if (window.jQuery) {
	(function ($) {
		webFormClientValidate = function () {
			var validation = true;
			var errorMessage = "";

			var checkedCheckBoxes = $('[id*="cid_"]:checkbox:checked');

			if (checkedCheckBoxes && checkedCheckBoxes.length <= 0) {
				errorMessage = tdg.error_message.message("m000015"); // You cannot proceed before adding at least one mode of transportation
				validation = false;
			}

			if (!validation) {
				$('#ValidationSummaryEntityFormView div').remove();
				var validationSection = $('#ValidationSummaryEntityFormView');
				validationSection.append($("<div class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
				validationSection.show();
			}
			return validation;
		}
	}(window.jQuery));
}
