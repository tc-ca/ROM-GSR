// 
// Basic Form-Annual Compliance Update.js
// 

$(document).ready(function () {
	debugger;
	page_setup();

	tdg.c.page_instructions("page_annual_compliance_update");

	$(".entity-grid").on("loaded", function () {
		$("#CompanyCompleteAll").attr("style", "width:185px");
		$("#SiteCompleteAll").attr("style", "width:185px");
		tdg.cid.Check_If_AnnualTasks_Completed(parentAccountid);
	});

	$("#cid_registrationasof").parent().parent().hide();

	$("legend").each(function () {
		$(this).removeClass();
		$(this).css("font-size", "18px");
		$(this).css("font-weight", "bold");
	});
	// Remove task ID header
	$("#company_annual_compliance_update table thead").find("tr").each(function () {
		$(this).find('th:first-child').text("");
	});
	$("#sites_annual_compliance_update table thead").find("tr").each(function () {
		$(this).find('th:first-child').text("");
	});
	$("#sites_annual_compliance_update table tbody").find("tr").each(function () {
		var trElement = $(this);
		trElement.find('td:first').find('a').removeAttr("href");
	});
	$(".entity-grid").on("loaded", function () {
		$(this).find("th").each(function () {
			$(this).find('a').removeAttr("href").css(
				{
					'cursor': 'pointer',
					'pointer-events': 'none'
				});
		});
		$(this).find("tbody").find("tr").each(function () {
			var trElement = $(this);
			trElement.find('td:first').find('a').removeAttr("href").css(
				{
					'cursor': 'pointer',
					'pointer-events': 'none'
				});
		});
		$("#company_annual_compliance_update table tbody").find("tr").each(function () {
			var trElement = $(this);
			trElement.find("td").each(function () {
				if ($(this).attr('data-attribute') == 'statuscode' && $(this).attr('aria-label') == 'Completed') {
					trElement.css("background-color", "#dff0d8");
				}
			});
		});
		$("#sites_annual_compliance_update table tbody").find("tr").each(function () {
			var trElement = $(this);
			trElement.find("td").each(function () {
				if ($(this).attr('data-attribute') == 'statuscode' && $(this).attr('aria-label') == 'Completed') {
					trElement.css("background-color", "#dff0d8");
				}
			});
		});
	});

	var annualComplianceCompletionDate = $('#cid_annualcompliancecompletiondate').val();
	var anniversaryDate = $('#cid_companyanniversarydate').val();

	if (annualComplianceCompletionDate == null || annualComplianceCompletionDate == "") //uncheck attestation check box
	{
		$('#cid_annualcompliancecompletiondate').parent().parent().prop("hidden", true);
	}

	$("#cid_iscompanyattested").prop("checked", false);


	var complianceReadonly = true;
	if (anniversaryDate != null && anniversaryDate != "") {
		complianceReadonly = checkAnuualComplianceEligibility(new Date(anniversaryDate), annualComplianceCompletionDate);
	}
	if (complianceReadonly) {
		validation = false;

		var infomsg = tdg.error_message.message("m000130");
		infomsg = infomsg.replace("{0}", anniversaryDate.substring(0, 10));
		if (infomsg != "") {

			$('.instructions div').eq(0).remove();
			var validationSection = $('.instructions').eq(0);
			validationSection.append($("<div id='alertMessages' tabindex='0' class='alert alert-info' style='background:#d7faff'></br>" + infomsg + "</br></br></div>"));
			validationSection.show();
		}

		$('table[data-name="annual_compliance_section_3"]').addClass("hidden");
		$("#UpdateButton").prop("hidden", true);

		$(".entity-grid").on("loaded", function () {
			$(this).find("thead").find("tr").each(function () {
				$(this).find('th:last').remove();
			});
			$(this).find("tbody").find("tr").each(function () {
				$(this).find('td:last').remove();
			});
		});
	}
	else {
		var parentAccountid = '{{user.parentcustomerid.id}}';
		tdg.cid.Complete_All_Annualcompliance_Tasks(parentAccountid, "")
		$("#CompanyCompleteAll").css("display", "none");
		console.log("before hide");
		$("#CompanyCompleteAll").attr("style", "display:none");
		//$("#SiteCompleteAll").attr("style", "width:185px");
		console.log("after hide");
	}
	entityFormClientValidate = function () {
		var errorMessage = "";
		var validation = true;
		var firstErrorFound = false;
		var secondErrorFound = false;
		$("#company_annual_compliance_update table tbody").find("tr").each(function () {
			if (!firstErrorFound) {
				$(this).find("td").each(function () {
					if ($(this).attr('data-attribute') == 'statuscode' && $(this).attr('aria-label') != 'Completed') {
						validation = false;
						errorMessage = errorMessage + "You cannot proceed before completing the checklist items in the Company Management section<br>";
						firstErrorFound = true;
					}
				});
			}
		});
		$("#sites_annual_compliance_update table tbody").find("tr").each(function () {
			if (!secondErrorFound) {
				$(this).find("td").each(function () {
					if ($(this).attr('data-attribute') == 'statuscode' && $(this).attr('aria-label') != 'Completed') {
						validation = false;
						errorMessage = errorMessage + "You cannot proceed before completing the checklist items in the Sites Management section<br>";
						secondErrorFound = true;
					}
				});
			}
		});
		if ($("#numberOfNotAttestedSites").val() != 0) {
			validation = false;
			errorMessage = errorMessage + "You cannot proceed before attesting all companies sites<br>";
		}
		if (!$("#cid_iscompanyattested").prop('checked')) {
			validation = false;
			errorMessage = errorMessage + "You cannot proceed before attesting your company annual compliance update changes, please check the 'Attestation' box<br>";
		}
		if (errorMessage != "") {
			$('.validation-summary div').eq(0).remove();
			var validationSection = $('.validation-summary').eq(0);
			validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
			validationSection.show();
			$('.validation-summary div').focus();
		}
		return validation;
	}
});

checkAnuualComplianceEligibility = function (anniversaryDate, annualComplianceCompletionDate) {
	debugger;
	if (anniversaryDate == null || anniversaryDate == "") {
		//show error message and hide  annual complience 
		return true;
	}
	else {
		var todayDateObject = new Date();
		var thirtyDaysBeforeAnniversaryDate = new Date(anniversaryDate);
		thirtyDaysBeforeAnniversaryDate.setDate(thirtyDaysBeforeAnniversaryDate.getDate() - 30);
		
		var thirtyDaysAfterAnniversaryDate = new Date(anniversaryDate);
		thirtyDaysAfterAnniversaryDate.setDate(thirtyDaysAfterAnniversaryDate.getDate() + 30);	

		
		if(todayDateObject < thirtyDaysBeforeAnniversaryDate || todayDateObject > thirtyDaysAfterAnniversaryDate){
			return true;
		}
		else{
			if (annualComplianceCompletionDate != null || annualComplianceCompletionDate != ""){
				var annualComplianceCompletionDateObject = new Date(annualComplianceCompletionDate);

				if(annualComplianceCompletionDateObject >= thirtyDaysBeforeAnniversaryDate && annualComplianceCompletionDateObject <= thirtyDaysAfterAnniversaryDate){				
					$("#UpdateButton").val("Re-Submit Previous Annual Compliance Update");
				}
			}
		}

		//var today = new Date();
		//var dateDiff = Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(anniversaryDate.getFullYear(), anniversaryDate.getMonth(), anniversaryDate.getDate())) / (1000 * 60 * 60 * 24))
		//if (dateDiff > 30 || dateDiff < -30) { //Annual Compliance Update can only be completed on or 30 days within the Company’s Anniversary Date each year
		//	return true;
		//}
	}
	return false;
}

function page_setup() {
	debugger;
	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);
	const files = ["/tdgcore_common.js", "/tdgcore_message.js"];
	for (var i = 0; i < files.length; i++) {
		var file = files[i];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = file;
		$("body").append(script);
	}
	// server error?
	tdg.c.message_panel();
}