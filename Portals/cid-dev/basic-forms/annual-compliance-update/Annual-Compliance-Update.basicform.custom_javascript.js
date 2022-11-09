$(document).ready(function ()
{
	debugger;
	//page_setup();
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
	$('#cid_companyanniversarydate').parent().parent().hide();
	var annualComplianceCompletionDate = $('#cid_annualcompliancecompletiondate').val();
	if (annualComplianceCompletionDate == null || annualComplianceCompletionDate == "") //uncheck attestation check box
	{
		$("#cid_iscompanyattested").prop("checked", false);
	}

	var anniversaryDate = $('#cid_companyanniversarydate').val();
	var complienceReadonly = true;
	if (anniversaryDate != null && anniversaryDate != "")
	{
		complienceReadonly = checkAnuualComplienceEligibility(new Date(anniversaryDate));
	}
	if (complienceReadonly)
	{
		validation = false;
		var errormsg = tdg.error_message.message("m000112");
		if (errormsg != "")
		{
			$('.validation-summary div').remove();
			var validationSection = $('.validation-summary');
			validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errormsg + "</div>"));
			validationSection.show();
			//$('.validation-summary div').focus();
		}
		$("#UpdateButton").prop("disabled", true);
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
	entityFormClientValidate = function ()
	{
		var errorMessage = "";
		var validation = true;
		var firstErrorFound = false;
		var secondErrorFound = false;
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
		if ($("#numberOfNotAttestedSites").val() != 0)
		{
			validation = false;
			errorMessage = errorMessage + "You cannot proceed before attesting all companies sites<br>";
		}
		if (!$("#cid_iscompanyattested").prop('checked'))
		{
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
checkAnuualComplienceEligibility = function (anniversaryDate)
{
	debugger;
	if (anniversaryDate == null || anniversaryDate == "")
	{
		//show error message and hide  annual complience 
		return true;
	}
	else
	{
		var today = new Date();
		//anniversaryDate = new Date(today.getFullYear(), anniversaryDate.getMonth(), anniversaryDate.getDate())
		//if (anniversaryDate > today) anniversaryDate = new Date(anniversaryDate.getFullYear() - 1, anniversaryDate.getMonth(), anniversaryDate.getDate());
		var dateDiff = Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(anniversaryDate.getFullYear(), anniversaryDate.getMonth(), anniversaryDate.getDate())) / (1000 * 60 * 60 * 24))
		if (dateDiff > 30)
		{ //Annual Compliance Update can only be completed on or 30 days within the Company’s Anniversary Date each year
			return true;
		}
	}
	return false;
}

function page_setup()
{
	debugger;
	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);
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