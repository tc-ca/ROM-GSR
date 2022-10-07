//
// SiteRegistrationWizard-Further Site Details.js
//

$(document).load(function () {
	//$('#loader').hide();
    $('#loader').show();
});

$(document).ready(function () {
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
						//var furtherDetailsBtn = "<div id='further_site_details' role='group' class='btn-group entity-action-button'><a href='" + operationWizardURL + "'><input type='button' name='Previous' value='Previous' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'></a></div>";
						
						var furtherDetailsBtn = "<div id='further_site_details' role='group' class='btn-group entity-action-button'><input id ='furtherDetailsBtn' type='button' name='Previous' value='Previous' class='furtherDetailsBtn btn btn-default button previous previous-btn' onclick='window.open('~/KnowledgeArticle/?id=66d7499a-96e5-449c-b3a6-48a49fca76f2', 'Test', 'height=550,width=600, top=50, left=400');'></div>";

						$("#PreviousButton").parent().after(furtherDetailsBtn);


						$("#PreviousButton").hide();
					}

					var to_actvt_stp = sessionStorage.getItem("to_actvt_stp");
					var to_oprtn_wzrd = sessionStorage.getItem("to_oprtn_wzrd");

					if (to_actvt_stp == 'true') {
						sessionStorage.setItem('to_actvt_stp', 'false');
						$("#PreviousButton").click();
					}

					if (to_oprtn_wzrd == 'true') {
						sessionStorage.setItem('to_oprtn_wzrd', 'false');
						window.location.href = operationWizardURL;
					}

					if ((!extendedSite && SiteHasOperationClasses(operationId, null)) || (extendedSite && SiteHasOperationClasses(operationId, null) && SiteHasOperationUNNumbers(operationId, null))) {
						$("#NextButton").prop('disabled', false);
					}

					//firstRow.find('td').each(function(){
					//var tdElement = $(this);

					//if(tdElement.attr('data-attribute') == 'cid_operationdetailsprovided')
					//{
					//	if ($("#HOTI_Details").length <= 0)
					//		$("#PreviousButton").parent().after("<div id='HOTI_Details' role='group' class='btn-group entity-action-button'><a href='~/OperationRegistrationWizard/?id=" + operationId + "&siteid=" + siteid + "'><input type='button' name='further_site_details' value='Further Site Details' class='btn btn-primary button next submit-btn' nonactionlinkbutton='true'></a></div>");
					//	
					//	if((! extendedSite && SiteHasOperationClasses(operationId, null)) ||
					//		(extendedSite && SiteHasOperationUNNumbers(operationId, null)))
					//		$("#NextButton").prop('disabled', false);
					//}
					//})
				}
			}
		});
	}

$('.furtherDetailsBtn').click(function (e) {
	window.open(operationWizardURL,'Further Site Details','width=600,height=400')
	alert('Test');
});	
	webFormClientValidate = function () {
		var validation = true;
		var rows = $("#Operations .view-grid table").find("tbody > tr");
		rows.each(function () {
			$(this).find('td').each(function () {
				var tdElement = $(this);

				if (validation == true && tdElement.attr('data-attribute') == 'cid_operationdetailsprovided') {
					if (tdElement.attr('data-value') == 'false') {
						//validation = false;
						//alert('You cannot proceed before completing site operation details.');
					}
				}
			})
		});

		if (!validation) {
			var errorMessage = 'You cannot proceed before completing site operation details.';
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