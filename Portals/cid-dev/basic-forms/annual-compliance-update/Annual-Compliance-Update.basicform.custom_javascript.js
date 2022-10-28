$(document).ready(function ()
{
	debugger;
	$("legend").each(function ()
	{
		$(this).removeClass();
		$(this).css("font-size", "18px");
		$(this).css("font-weight", "bold");
	});
	// Remove task ID header
	$("#company_annual_compliance_update table thead").find("tr").each(function ()
	{
		$(this).find('th:first-child').text("");
	});
	$("#sites_annual_compliance_update table thead").find("tr").each(function ()
	{
		$(this).find('th:first-child').text("");
	});
	$("#sites_annual_compliance_update table tbody").find("tr").each(function ()
	{
		var trElement = $(this);
		trElement.find('td:first').find('a').removeAttr("href");
	});
	$(".entity-grid").on("loaded", function ()
	{
		$(this).find("th").each(function ()
		{
			$(this).find('a').removeAttr("href").css(
			{
				'cursor': 'pointer',
				'pointer-events': 'none'
			});
		});
		$(this).find("tbody").find("tr").each(function ()
		{
			var trElement = $(this);
			trElement.find('td:first').find('a').removeAttr("href").css(
			{
				'cursor': 'pointer',
				'pointer-events': 'none'
			});
		});
		$("#company_annual_compliance_update table tbody").find("tr").each(function ()
		{
			var trElement = $(this);
			trElement.find("td").each(function ()
			{
				if ($(this).attr('data-attribute') == 'statuscode' && $(this).attr('aria-label') == 'Completed')
				{
					trElement.css("background-color", "#dff0d8");
				}
			});
		});
		$("#sites_annual_compliance_update table tbody").find("tr").each(function ()
		{
			var trElement = $(this);
			trElement.find("td").each(function ()
			{
				if ($(this).attr('data-attribute') == 'statuscode' && $(this).attr('aria-label') == 'Completed')
				{
					trElement.css("background-color", "#dff0d8");
				}
			});
		});
	});
	//$('#cid_companyanniversarydate').parent().parent().hide();
	var annualComplianceCompletionDate = $('#cid_annualcompliancecompletiondate').val();
	if (annualComplianceCompletionDate == "" || annualComplianceCompletionDate == null) //uncheck attestation check box
		$("#cid_iscompanyattested").prop("checked", false);
	entityFormClientValidate = function ()
	{
		var errorMessage = "";
		var validation = true;
		var firstErrorFound = false;
		var secondErrorFound = false;
		var anniversaryDate = new Date($('#cid_companyanniversarydate').val());
		var today = new Date();
		var complienceReadonly = false;
		if (anniversaryDate == null)
		{
			//show error message and hide  annual complience 
			complienceReadonly = true;
		}
		else
		{
			anniversaryDate = new Date(today.getFullYear(), anniversaryDate.getMonth(), anniversaryDate.getDate())
			if (anniversaryDate > today) anniversaryDate = new Date(anniversaryDate.getFullYear() - 1, anniversaryDate.getMonth(), anniversaryDate.getDate());
			var dateDiff = Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(anniversaryDate.getFullYear(), anniversaryDate.getMonth(), anniversaryDate.getDate())) / (1000 * 60 * 60 * 24))
			if (dateDiff < 30)
			{ //Annual Compliance Update can only be completed on or 30 days after the Company’s Anniversary Date each year
				complienceReadonly = true;
			}
		}
		if (complienceReadonly)
		{
			validation = false;
			var msg = tdg.error_message.message("m000112");
			tdg.c.dialog_OK(msg);
			//$("#UpdateButton").prop("disabled", true);
			$('.crmEntityFormView').find('input, textarea, select').attr('disabled', 'disabled');
			$(".entity-grid").on("loaded", function ()
			{
				$(this).find("thead").find("tr").each(function ()
				{
					$(this).find('th:last').remove();
				});
				$(this).find("tbody").find("tr").each(function ()
				{
					$(this).find('td:last').remove();
				});
			});
		}

			$("#company_annual_compliance_update table tbody").find("tr").each(function ()
			{
				if (!firstErrorFound)
				{
					$(this).find("td").each(function ()
					{
						if ($(this).attr('data-attribute') == 'statuscode' && $(this).attr('aria-label') != 'Completed')
						{
							validation = false;
							errorMessage = errorMessage + "You cannot proceed before completing the checklist items in the Company Management section<br>";
							firstErrorFound = true;
						}
					});
				}
			});
			$("#sites_annual_compliance_update table tbody").find("tr").each(function ()
			{
				if (!secondErrorFound)
				{
					$(this).find("td").each(function ()
					{
						if ($(this).attr('data-attribute') == 'statuscode' && $(this).attr('aria-label') != 'Completed')
						{
							validation = false;
							errorMessage = errorMessage + "You cannot proceed before completing the checklist items in the Sites Management section<br>";
							secondErrorFound = true;
						}
					});
				}
			});


		if (!$("#cid_iscompanyattested").prop('checked')){
			validation = false;
			errorMessage = errorMessage + "You cannot proceed before attesting your company annual compliance update changes, please check the 'Attestation' box<br>";
		}

		if (errorMessage != "")
		{
			$('.validation-summary div').remove();
			var validationSection = $('.validation-summary');
			validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
			validationSection.show();
			$('.validation-summary div').focus();
		}
		return validation;
	}
});