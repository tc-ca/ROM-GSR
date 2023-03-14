//
// OperationRegistrationWizard-MOT.js
//
$(document).ready(function () {
	debugger;

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	tdg.c.page_instructions("page_orw_mot");

	var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('siteid')) {
		var siteId = urlParams.get('siteid');
		var sitePageURL = "";

		if (urlParams.has('in_year')) {
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

		$("#NextButton").parent().before("<div id='previousButton' role='group' class='btn-group entity-action-button'><a href='" + sitePageURL + "'><input type='button' value='Previous' onclick='' id='PreviousButton' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'></a></div>");
	}
});

if (window.jQuery) {
	(function ($) {
		webFormClientValidate = function () {
			var validation = true;
			var errorMessage = "";

			//var rows = $("#mode_of_transportations .view-grid table").find("tbody > tr");
			//if (rows.length <= 0) {
			//    errorMessage = "You cannot proceed before adding at least one mode of transportation.";
			//    validation = false;
			//}

			//var urlParams = new URLSearchParams(window.location.search);

			//if (urlParams.has('id')) {
			//    var operationId = urlParams.get('id');

			//	if(!checkMOTExist(operationId, null)){
			//		errorMessage = "You cannot proceed before adding at least one mode of transportation.";
			//		validation = false;
			//	}
			//}

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
