//
// CompanyRegistrationWizard-Site.js
//

$(document).ready(function () {
	debugger;

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	//Commited - Need clarification 
	// From Aaron comments: development team agrees that this header is correct and should say organization registration. Once you start adding a site you are brought to the site registration portion of the registration and the header changes 
	/*
	var code = "m000024";
	
	try {
		var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name}}');
		var value = tdg.error_message.message(code);
		value = value.replace("{0}", companyName);
		$('.page-header h1').text(value);
	} catch (e) { }
	*/

	tdg.c.page_instructions("page_crw_site");

	sessionStorage.setItem("frominyearsites", 'false');
	//change width and place holder div class to increase search width
	if (selected_language == "en") {
		$('.toolbar-actions').attr('style', "width:70%;");
		$('.entitylist-search').addClass("col-md-8");
	}
	else {
		$('.toolbar-actions').attr('style', "width:75%;");
		$('.entitylist-search').addClass("col-md-7");
	}

	$(".entity-grid").on("loaded", function () {
		const EmptyMessageDiv = document.querySelector(".view-empty");
		EmptyMessageDiv.style.display = "none";
	});

	$("#cid_registrationasof").parent().parent().hide();

	//add bulk upload button
	var UploadButtonText = tdg.error_message.message("m000111");
	//if ('{{request.url}}'.includes("tdgcore-qa") || '{{request.url}}'.includes("rd-tdgcore-dev") || '{{request.url}}'.includes("tdgcore-acc")) 
	{
		var BulkUploaddButton = '<div class="input-group pull-left">&nbsp;&nbsp;</div><div class="input-group pull-left"><button type="button" id="BulkUploadButton"  class="btn btn-primary pull-right action">' + UploadButtonText + '</button></div>';
		$(".toolbar-actions").append(BulkUploaddButton);
	}

	$(".entity-grid").on("loaded", function () {
		$(".info").hide();

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
					}
				}

				var label_inactive = tdg.error_message.message("lbl_inactive");
				var label_my_site_active = tdg.error_message.message("lbl_my_site_active");
				if ((tdElement.attr('data-attribute') == 'statuscode' && tdElement.attr('aria-label') == label_inactive) ||
					(tdElement.attr('data-attribute') == 'cid_siteclaim' && tdElement.attr('aria-label') != label_my_site_active)) {
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
		var popup_message = sessionStorage.getItem("popup_message") + "";	// "null"
		if (popup_message == "null") {
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

			sessionStorage.setItem("popup_message", true)
		}

		//make for readonly for secondary users
		var currentUserId = '{{user.contactid}}';
		Disable_ContactTypeFieldsForSecondaryUser(currentUserId);
	});

	$('#BulkUploadButton').click(function (e) {
		var companyId = $("#EntityFormView_EntityID").val();

		var response = tdg.webapi.SelectedColumnlist("accounts", "name",
			"_parentaccountid_value eq " + companyId + " and (cid_siteclaim eq 100000003 or cid_siteclaim eq null)");
		//if one or more sites found pending claim
		if (response.length > 0) {
			var m000110 = tdg.error_message.message("m000110");
			tdg.c.dialog_OK(m000110);
		}
		else {
			//redirect to bulk update
			window.location.href = '~/Bulk_Site_Upload/'
		}
	}
	);

	webFormClientValidate = function () {
		var validation = true;
		var errorMessage = "Company Dashboard";	// Bulk Site Upload
		var companyId = $("#EntityFormView_EntityID").val();
		var filter = "parentaccountid/Id eq (guid'" + companyId + "')";
		var data = ExecuteQuery("Validation_CompanySites", filter);

		if (data == null) {
			errorMessage = "m000011";
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
					errorMessage = "m000012"
					validation = false;
				}
			}
		}

		if (!validation) {
			tdg.c.error_message_advanced_form(errorMessage, true);
		}
		return validation;
	}

	if (sessionStorage.getItem("frominyearsitepage") == "false") {
		var parentcustomerid = '{{user.parentcustomerid.Id}}';
		var filter = "statecode eq 0 and cid_portalrecordcreationdetails ne null and accountid eq '" + parentcustomerid + "'";
		var accData = tdg.webapi.list("accounts", filter);
		if (accData != null) {
			if (accData[0].cid_portalrecordcreationdetails) // Net New Site
			{
				var withdrawLabel = tdg.error_message.message("BTN_WITHDRAW");
				$('#NextButton').parent().parent().after('<div role="group" class="pull-right toolbar-actions"><input type="button" data-dismiss="modal" value="' + withdrawLabel + '" id="WithdrawButton" style="margin-left: 10px;" name="WithdrawButton" class="btn btn-default button previous previous-btn"/></div>');
				// bind the click event to this custom buttton
				$("#WithdrawButton").bind("click", function () {
					debugger;

					var message = tdg.error_message.message("m000145");
					tdg.c.dialog_YN(message, (ans) => {
						//var contact_id = '{{user.id}}';
						if (ans) {

							var DeleteAccountFlowData = '{' +
								'"AccountId": "' + parentcustomerid + '",' +
								'}';
							console.log(DeleteAccountFlowData);
							tdg.cid.flow.Call_Flow("CID_Flow_RunCompanySitesDeleting", DeleteAccountFlowData);
							tdg.c.sign_out();
							return false;
							//Do nothing
						}
						else {
							return false;
						}
					});
				});
			}
		}
	}

});

function Disable_ContactTypeFieldsForSecondaryUser() {
	debugger;
	var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
	//if not primary contact
	if (cid_usercontacttype != 100000000) {
		//$(".create-action").attr("disabled", true);
		//$(".create-action").css("pointer-events", "none");

		//Wait till subgrid load
		$("#Contacts").on("loaded", function () {
			$(".btn.btn-default.btn-xs").prop("disabled", true);
			$(".details-link").prop("disabled", true);
			$(".details-link").css("pointer-events", "none");
		});
	}
}