//
// SiteRegistrationWizard-Further Site Details.js
//

$(document).load(function () {
	$('#loader').show();
});

$(document).ready(function () {
	debugger;

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	//tdg.c.page_instructions("page_srw_further_site_details");

	var operationWizardURL = "";
	//$('#instructions').hide();
	$('#EntityFormView').hide();
	//$('#redirectInstruction').show();
	$("#NextButton").prop('disabled', true);

	var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('id')) {
		var siteid = urlParams.get('id');
		$(".entity-grid").on("loaded", function () {
			var firstRow = $("#Operations .view-grid table tbody").find("tr:first");
			if (firstRow) {
				var operationId = firstRow.attr('data-id');

				if (operationId) {
					var extendedSite = IsExtendedSite(operationId, null);
					operationWizardURL = "~/OperationRegistrationWizard/?id=" + operationId + "&siteid=" + siteid + (extendedSite ? "&isExtended=true" : "&isExtended=false");

					if ($("#further_site_details").length <= 0) {
						var msg = tdg.error_message.message("BTN_PREVIOUS");
						var furtherDetailsBtn = "<div id='further_site_details' role='group' class='btn-group entity-action-button'><a href='" + operationWizardURL + "'><input type='button' name='Previous' value='" + msg + "' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'></a></div>";
						$("#PreviousButton").parent().after(furtherDetailsBtn);

						$("#PreviousButton").hide();
					}

					var to_activity_step = sessionStorage.getItem("to_actvt_stp");
					var to_operation_wzrd = sessionStorage.getItem("to_oprtn_wzrd");
					var to_attest_site = sessionStorage.getItem("to_attst_site");

					if (to_attest_site == 'true') {
						sessionStorage.setItem('to_attst_site', 'false');
						$("#NextButton").click();
					}

					if (to_activity_step == 'true') {
						sessionStorage.setItem('to_actvt_stp', 'false');
						$("#PreviousButton").click();
					}

					if (to_operation_wzrd == 'true') {
						sessionStorage.setItem('to_oprtn_wzrd', 'false');
						window.location.href = operationWizardURL;
					}

					if ((!extendedSite && SiteHasOperationClasses(operationId, null)) || (extendedSite && SiteHasOperationClasses(operationId, null) && SiteHasOperationUNNumbers(operationId, null))) {
						$("#NextButton").prop('disabled', false);
						//$("#NextButton").click();
					}
				}
			}
		});
	}

	webFormClientValidate = function () {
		var validation = true;
		var rows = $("#Operations .view-grid table").find("tbody > tr");
		rows.each(function () {
			$(this).find('td').each(function () {
				var tdElement = $(this);

				if (validation == true && tdElement.attr('data-attribute') == 'cid_operationdetailsprovided') {
					if (tdElement.attr('data-value') == 'false') {
					}
				}
			})
		});

		if (!validation) {
			var errorMessage = tdg.error_message.message("m000167");
			$('#ValidationSummaryEntityFormView div').remove();

			var validationSection = $('#ValidationSummaryEntityFormView');

			validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
			validationSection.show();
			$('#alertMessages').focus();
		}
		return validation;
	}
	$('#loader').hide();
});