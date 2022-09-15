//
// CompanyRegistrationWizard-Site.js
//
$(document).ready(function () {
	debugger;

	//var companyId = $("#EntityFormView_EntityID").val();
	//var filter = "parentaccountid/Id eq (guid'" + companyId + "')";
	//var data = ExecuteQuery("Validation_UnclaimedSites", filter);

	//if (data.length > 0) {
	//	message = tdg.error_message.message("m000013");
	//	tdg.c.dialog_OK(data.length + "-" + message);
	//}

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

		debugger;

		// popup message
		var k_existing_sites = "already_have_existing_sites";
		var existing_sites = sessionStorage.getItem(k_existing_sites) + "";	// "null"
		existing_sites = (existing_sites == "null" ? "null" : existing_sites);
		if (existing_sites == "null") {
			var row_count = tdg.grid.rows("CompanySites");
			sessionStorage.setItem(k_existing_sites, row_count);
		}
		else {
			var row_count = parseInt(existing_sites);
		}

		if (row_count > 0) {
			var m000020 = tdg.error_message.message("m000020");
			var m000021 = tdg.error_message.message("m000021");
			m000021 = m000021.replaceAll("\n", "<br>");

			tdg.c.dialog_OK(m000020);
			// change instruction text
			tdg.c.page_instructions(m000021);
		}
		else {
			var m000022 = tdg.error_message.message("m000022");
			m000022 = m000022.replaceAll("\n", "<br>");
			// change instruction text
			tdg.c.page_instructions(m000022);
        }

    //make for readonly for secondary users
    var currentUserId = '{{user.contactid}}';
	Disable_ContactTypeFieldsForSecondaryUser(currentUserId);

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
		}
		return validation;
	}
});

function Disable_ContactTypeFieldsForSecondaryUser(currentuserId) {
	debugger;
	if (currentuserId == null) return;
	var filteroption = "contactid eq (guid'" + currentuserId + "')";
	var odataUri = window.location.protocol + "//" + window.location.host + "/_odata/contact";
	odataUri += "?$filter=" + encodeURIComponent(filteroption);
	//Get user contact record
	$.ajax(
		{
			type: "GET",
			contentType: "application/json; charset=utf-8",
			datatype: "json",
			url: odataUri,
			beforeSend: function (XMLHttpRequest) {
				XMLHttpRequest.setRequestHeader("Accept", "application/json");
			},
			async: false,
			success: function (data, textStatus, xhr) {
				var result = data;
				var cid_UserContactType = result.value[0].cid_contacttype.Value;
				//if not primary contact
				if (cid_UserContactType != 100000000) {
                    $(".create-action").attr("disabled", true);
                    $(".create-action").css("pointer-events", "none");

                    $(".details-link").attr("disabled", true);
                    $(".details-link").css("pointer-events", "none");

                    //Wait till subgrid load
                    $("#CompanySites").on("loaded", function () {
                        $(".btn.btn-default.btn-xs").prop("disabled", true);
                    });
				}
			},
			error: function (xhr, textStatus, errorThrown) {
				alert(textStatus + ' ' + errorThrown);
			}
		});
}

