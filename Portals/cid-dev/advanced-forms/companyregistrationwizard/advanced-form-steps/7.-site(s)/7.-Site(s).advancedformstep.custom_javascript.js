//
// CompanyRegistrationWizard-Site.js
//
$(document).ready(function () {
	debugger;

	var companyId = $("#EntityFormView_EntityID").val();
	var filter = "parentaccountid/Id eq (guid'" + companyId + "')";
	var data = ExecuteQuery("Validation_UnclaimedSites", filter);

	if (data.length > 0) {
		//var message = "The Sites shown in the datagrid below, with a Site Claim of 'Site Claim Pending', " +
		//	"are understood to belong to your company.\n" +
		//	"Using the button (V) to the right of each of those Sites, please choose one of following actions:\n" +
		//	"- Set as My Site Active\n" +
		//	"- Set and Attest as My Site Inactive\n" +
		//	"- Set and Attest Not My Site\n";
		message = tdg.error_message.message("m000013");

		tdg.c.dialog_OK(data.length + "-" + message);
		//alert(data.length + "-" + message);
	}

	$(".entity-grid").on("loaded", function () {
		$(".info").hide();

		var actionButtonsToolbar = $('.view-toolbar');
		//if ($("#bulkUploadBtn").length <= 0)
		//	actionButtonsToolbar.prepend("<div id='bulkUploadBtn' class='input-group pull-left'><a href='/Bulk_Site_Upload'  target='_blank' rel='noopener noreferrer' class='btn btn-info pull-left action' title='Bulk Site Upload'>Bulk Site Upload</a></div>");
		//if ($("#attestMultipledBtn").length <= 0)
		//	actionButtonsToolbar.prepend("<div id='attestMultipledBtn' class='input-group pull-left'><a href='#' class='btn btn-info pull-left action' title='Attest Multiple' disabled>Attest Multiple</a></div>");

		$(this).find("tbody").find("tr").each(function () {
			var trElement = $(this);
			var recId = trElement.attr('data-id');
			var firstTdElement = trElement.find('td:first');
			var disabledRow = false;

			trElement.find("td").each(function () {
				var tdElement = $(this);
				if (tdElement.attr('data-attribute') == 'cid_issiteattested') {
					if (tdElement.attr('data-value') == 'true') {
						if ($("#spn_" + recId).length <= 0) {
							firstTdElement.prepend("<span id='spn_' + recId +' class='glyphicon glyphicon-ok' style='color: #3c763d;'></span>&nbsp;&nbsp;&nbsp;");
							trElement.css("background-color", "#dff0d8");
						}
					}
					else {
						//if ($("#chk_" + recId).length <= 0)
						//	firstTdElement.prepend("<input type='checkbox' id='chk_' + recId +'>&nbsp;&nbsp;&nbsp;");
					}
				}
				if ((tdElement.attr('data-attribute') == 'statuscode' && tdElement.attr('aria-label') == 'Inactive') ||
					(tdElement.attr('data-attribute') == 'cid_siteclaim' && tdElement.attr('aria-label') != 'My Site Active')) {
					firstTdElement.find('a').removeAttr("href");
					firstTdElement.find('span').remove();
					firstTdElement.find('input').remove();
					//trElement.find("button").attr('disabled', "disabled");
					trElement.css("background-color", "#ddd");
					trElement.css("color", "grey");
				}
			});
		});
	});

	webFormClientValidate = function () {
		var validation = true;
		var errorMessage = "Company Dashboard";	// Bulk Site Upload
		var companyId = $("#EntityFormView_EntityID").val();
		var filter = "parentaccountid/Id eq (guid'" + companyId + "')";
		var data = ExecuteQuery("Validation_CompanySites", filter);

		if (data == null) {
			errorMessage = "m000011";	// "You cannot proceed before adding active company site(s).";
			validation = false;
		}
		else {
			if (data.length <= 0) {
				errorMessage = "m000011";
				validation = false;
			}
			else {
				filter = "parentaccountid/Id eq (guid'" + companyId + "')";
				data = ExecuteQuery("Validation_CompanyNotAttestedSites", filter);

				if (data != null && data.length > 0) {
					errorMessage = "m000012";	// You cannot proceed before attesting all the company sites.
					validation = false;
				}
			}
		}

		if (!validation) {
			tdg.c.error_message_advanced_form(errorMessage, true);

			//$('#ValidationSummaryEntityFormView div').remove();
			//var validationSection = $('#ValidationSummaryEntityFormView');
			//validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
			//validationSection.show();
			//$('#alertMessages').focus();
		}
		return validation;
	}
});

function sample_dialog_YN(message) {
	debugger;

	tdg.c.dialog_OK(message);
	//dialog_YN(message, (ans) => {
	//	if (ans) {
	//		// console.log("Yes");
	//		Call_Check_User_Response_flow(newrecordid, 'yes', '', Language);
	//	} else {
	//		Call_Check_User_Response_flow(newrecordid, 'No', '', Language);
	//		//console.log("No");
	//	}
	//});
}
