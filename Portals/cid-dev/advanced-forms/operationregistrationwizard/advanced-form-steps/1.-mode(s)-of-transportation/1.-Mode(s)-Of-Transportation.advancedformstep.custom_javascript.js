//
// OperationRegistrationWizard-MOT.js
//
$(document).ready(function () {
	debugger;

	var urlParams = new URLSearchParams(window.location.search);

	if (urlParams.has('siteid')) {
		var siteId = urlParams.get('siteid');

		var siteWizardURL = "~/SiteRegistrationWizard/?id=" + siteId;

		$("#NextButton").parent().before("<div id='previousButton' role='group' class='btn-group entity-action-button'><a href='" + siteWizardURL + "'><input type='button' value='Previous' onclick='' id='PreviousButton' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'></a></div>");
	}
	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);
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

//async function checkMOTExist(operationId, siteId){
//	await SiteHasModesOfTransportation(operationId, siteId);
//}