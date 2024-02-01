// 
// Basic Form-Annual Compliance Update.js
// 
$(document).ready(function ()
{
	debugger;
	page_setup();
	tdg.c.control_hide("cid_nextannualcomplianceupdate");
	tdg.c.control_hide("cid_nextannualcomplianceupdate_datepicker_description");
	var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
	var selected_language = '{{website.selected_language.code}}';
	//if
	var URLs = new URLSearchParams(window.location.search);
	//  var newrecordid = URLs.get('id');
	var Resubmit = URLs.get('Resubmit');
	if (Resubmit != null)
	{
		var cid_companyanniversarydate = $('#cid_companyanniversarydate').val();
		console.log(cid_companyanniversarydate);
		cid_companyanniversarydate = cid_companyanniversarydate.split('T')[0];
		var m000148 = tdg.error_message.message("m000148");
		console.log ( m000148 );
		m000148 = m000148.replace("{0}", cid_companyanniversarydate);
		tdg.c.dialog_OK(m000148);
		var urlPath = window.location.href;
		urlPath = urlPath.split('?')[0];
		window.history.replaceState({}, document.title, urlPath);
	
	}
	//if not primary contact
	if (cid_usercontacttype != 100000000)
	{
		$("#UpdateButton").attr("disabled", true);
		$("#UpdateButton").css("pointer-events", "none");
	}
	//add loader
	$("#UpdateButton").after('<span id="loader" class="loader"></span>');
	$('#loader').hide();
	tdg.c.page_instructions("page_annual_compliance_update");
	$(".workflow-link").addClass("hidden");
	var CompanyId = '{{user.parentcustomerid.id}}';
	$(".workflow-link").removeAttr("data-workflowid");
	$(".workflow-link").on("click", function ()
	{
		//get history log code
		var historyLogCodeList = tdg.webapi.SelectedColumnlist("cid_audithistorycodes", "cid_audithistorycodeid,cid_name, statuscode",
			"statuscode eq 1 and cid_name eq 'CG5'");
		console.log("history log " + historyLogCodeList.length);
		var message = tdg.error_message.message("m000149");
		var portaluserId = "{{user.id}}";
		tdg.c.dialog_YN(message, (ans) => {
			if (ans)
			{
				debugger;
				$('#loader').show();
				var accountdata = {
					"cid_ModifiedByRegistrant@odata.bind": "/contacts(" + portaluserId + ")",
					"cid_annualcompliancecompletiondate": null
				};
				tdg.webapi.update("accounts", CompanyId, accountdata);
				debugger;
				var Listdata = tdg.webapi.SelectedColumnlist("tasks", "activityid", "scheduledend eq null and _regardingobjectid_value eq " + CompanyId);
				if (historyLogCodeList.length > 0)
				{
					debugger;
					console.log("audit history code:")
					console.log(historyLogCodeList[0].cid_audithistorycodeid);
					var historyData = {
						//"_cid_historycode_value": historyLogCodeList[0].cid_audithistorycodeid,
						"cid_HistoryCode@odata.bind": "/cid_audithistorycodes(" + historyLogCodeList[0].cid_audithistorycodeid + ")",
						"cid_Company@odata.bind": "/accounts(" + CompanyId + ")"
						//,
						//"cid_createdbyregistrant@odata.bind": "/contacts(" + portaluserId + ")"
						//"cid_memofrench" : "test french test test"
					}
					//tdg.webapi.create("cid_historylogs", historyData);
					debugger;
				}
				Reset_Tasks_toInprogress(Listdata, historyData);
				return;
			}
			else
			{
				debugger;
				return;
			}
		});
		//$("#UpdateButton").removeClass("hidden");
		//$(".workflow-link").addClass("hidden");
		//$('table[data-name="annual_compliance_section_3"]').removeClass("hidden");
	});
	$(".entity-grid").on("loaded", function ()
	{
		$("#CompanyCompleteAll").attr("style", "width:185px");
		$("#SiteCompleteAll").attr("style", "width:185px");
		tdg.cid.Check_If_AnnualTasks_Completed(parentAccountid);
	});
	$("#cid_registrationasof").parent().parent().hide();
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
				if ($(this).attr('data-attribute') == 'statuscode' && ($(this).attr('aria-label') == 'Completed' || $(this).attr('aria-label') == 'Terminé'))
				{
					trElement.css("background-color", "#dff0d8");
				}
			

				if ($(this).html().indexOf("::") > 0)
				{
					var htmlcontent = $(this).html();
					if (selected_language == "en")
					{
						var splitTextEn =  htmlcontent.split('::')[0];
						$(this).html(splitTextEn);
					}
					else{
						var splitTextFr =  htmlcontent.split('::')[1];
						$(this).html(splitTextFr);
					}
				
				}
			});
		});
		$("#sites_annual_compliance_update table tbody").find("tr").each(function ()
		{
			var trElement = $(this);
			trElement.find("td").each(function ()
			{
				if ($(this).attr('data-attribute') == 'statuscode' && ($(this).attr('aria-label') == 'Completed' || $(this).attr('aria-label') == 'Terminé'))
				{
					trElement.css("background-color", "#dff0d8");
				}
				if ($(this).html().indexOf("::") > 0)
				{
					var htmlcontent = $(this).html();
					if (selected_language == "en")
					{
						var splitTextEn =  htmlcontent.split('::')[0];
						$(this).html(splitTextEn);
					}
					else{
						var splitTextFr =  htmlcontent.split('::')[1];
						$(this).html(splitTextFr);
					}
				
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
	if (anniversaryDate != null && anniversaryDate != "")
	{
		complianceReadonly = checkAnuualComplianceEligibility(new Date(anniversaryDate), annualComplianceCompletionDate);
	}
	if (complianceReadonly)
	{
		validation = false;
		var infomsg = tdg.error_message.message("m000130");
		infomsg = infomsg.replace("{0}", anniversaryDate.substring(0, 10));
		if (infomsg != "")
		{
			$('.instructions div').eq(0).remove();
			var validationSection = $('.instructions').eq(0);
			validationSection.append($("<div id='alertMessages' tabindex='0' class='alert alert-info' style='background:#d7faff'></br>" + infomsg + "</br></br></div>"));
			validationSection.show();
		}
		$('table[data-name="annual_compliance_section_3"]').addClass("hidden");
		$("#UpdateButton").prop("hidden", true);
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
	else
	{
		var parentAccountid = '{{user.parentcustomerid.id}}';
		tdg.cid.Complete_All_Annualcompliance_Tasks(parentAccountid, "")
		$("#CompanyCompleteAll").css("display", "none");
		console.log("before hide");
		$("#CompanyCompleteAll").attr("style", "display:none");
		//$("#SiteCompleteAll").attr("style", "width:185px");
		console.log("after hide");
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
					if (
					($(this).attr('data-attribute') == 'statuscode' || $(this).attr("L'état d'achèvement")) && ($(this).attr('aria-label') != 'Completed' && $(this).attr('aria-label') != 'Terminé'))
					{
						validation = false;
						var m000150 = tdg.error_message.message("m000150");
						errorMessage = errorMessage + m000150;
						//"You cannot proceed before completing the checklist items in the Company Management section<br>";
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
					if (($(this).attr('data-attribute') == 'statuscode' || $(this).attr("L'état d'achèvement")) && ($(this).attr('aria-label') != 'Completed' && $(this).attr('aria-label') != 'Terminé'))
					{
						validation = false;
						var m000151 = tdg.error_message.message("m000151");
						errorMessage = errorMessage + m000151;
						//"You cannot proceed before completing the checklist items in the Sites Management section<br>";
						secondErrorFound = true;
					}
				});
			}
		});
		if ($("#numberOfNotAttestedSites").val() != 0)
		{
			validation = false;
			var m000152 = tdg.error_message.message("m000152");
			errorMessage = errorMessage + m000152;
			//"You cannot proceed before attesting all companies sites<br>";
		}
		if (!$("#cid_iscompanyattested").prop('checked'))
		{
			validation = false;
			var m000153 = tdg.error_message.message("m000153");
			errorMessage = errorMessage + m000153;
			//"You cannot proceed before attesting your company annual compliance update changes, please check the 'Attestation' box<br>";
		}
		if (errorMessage != "")
		{
			$('.validation-summary div').eq(0).remove();
			var validationSection = $('.validation-summary').eq(0);
			validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
			validationSection.show();
			$('.validation-summary div').focus();
		}
		return validation;
	}
});
checkAnuualComplianceEligibility = function (anniversaryDate, annualComplianceCompletionDate)
{
	debugger;
	if (anniversaryDate == null || anniversaryDate == "")
	{
		//show error message and hide  annual complience 
		return true;
	}
	else
	{
		var todayDateObject = new Date();
		var thirtyDaysBeforeAnniversaryDate = new Date(anniversaryDate);
		thirtyDaysBeforeAnniversaryDate.setDate(thirtyDaysBeforeAnniversaryDate.getDate() - 30);
		var thirtyDaysAfterAnniversaryDate = new Date(anniversaryDate);
		thirtyDaysAfterAnniversaryDate.setDate(thirtyDaysAfterAnniversaryDate.getDate() + 30);
		if (todayDateObject < thirtyDaysBeforeAnniversaryDate || todayDateObject > thirtyDaysAfterAnniversaryDate)
		{
			return true;
		}
		else
		{
			if (annualComplianceCompletionDate != null || annualComplianceCompletionDate != "")
			{
				var annualComplianceCompletionDateObject = new Date(annualComplianceCompletionDate);
				if (annualComplianceCompletionDateObject >= thirtyDaysBeforeAnniversaryDate && annualComplianceCompletionDateObject <= thirtyDaysAfterAnniversaryDate)
				{
					//$("#UpdateButton").val("Re-Submit Previous Annual Compliance Update");
					$("#UpdateButton").addClass("hidden");
					$(".workflow-link").removeClass("hidden");
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
					$('table[data-name="annual_compliance_section_3"]').addClass("hidden");
					//$(".instructions").addClass("hidden");
					tdg.c.page_instructions("page_annual_compliance_resubmit");
					var nextAnnualComplianceDate =$("#cid_nextannualcomplianceupdate").val();
					var nextAnnualComplianceDateObject =new Date(nextAnnualComplianceDate);
					$("#cid_nextannualcomplianceupdate").addClass("hidden");

					console.log("instruction: " +  $(".instructions").html().replace('{1}',annualComplianceCompletionDate));
					var updatedInstructionParamater = $(".instructions").html().replace('{0}',nextAnnualComplianceDate.split('T')[0]).replace('{1}',annualComplianceCompletionDate.split('T')[0]);
					$(".instructions").html(updatedInstructionParamater);
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
async function Reset_Tasks_toInprogress(Listdata, historyData)
{for (var i = 0; i < Listdata.length; i++)
	{var data = {"statecode": 0,"statuscode": 2};
	 await delayedUpdate(Listdata[i].activityid, data);
		//tdg.webapi.update("tasks", Listdata[i].activityid, data);
	}
	tdg.webapi.create("cid_historylogs", historyData);
	//$("#UpdateButton").removeClass("hidden");
	//$(".workflow-link").addClass("hidden");
	//$('table[data-name="annual_compliance_section_3"]').removeClass("hidden");
	$('#loader').hide();
	//$(".entity-grid").trigger("refresh");
	window.location.href = window.location.href + "?Resubmit=Yes";
	//var afterRefreshMessage = "Annual Compliance has been successfully re-opened. Please now complete the Annual Compliance Update, which is due as of {0}.";
	// tdg.c.dialog_OK(afterRefreshMessage);
}

function delay()
{
	return new Promise(resolve => setTimeout(resolve, 300));
}
async function delayedUpdate(activityid, data)
{
	//  await a function
	// that returns a promise
	await delay();
	tdg.webapi.update("tasks", activityid, data);
}