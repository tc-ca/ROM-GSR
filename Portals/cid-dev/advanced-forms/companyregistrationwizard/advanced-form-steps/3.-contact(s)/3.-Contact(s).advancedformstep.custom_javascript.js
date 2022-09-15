//
// CompanyRegistrationWizard-Contact.js
//
$(document).ready(function ()
{
    $(".create-action").click(function () {
        //alert("Test");
        $('#ValidationSummaryEntityFormView div').remove();
    });

    //$('.create-action').on("click", function () {
    //    //alert("Test");
    //    $('#ValidationSummaryEntityFormView div').remove();
    //})

    debugger;
    sessionStorage.setItem("step_start", 2);

    root_erap_setup(); 

    //make for readonly for secondary users
    var currentUserId = '{{user.contactid}}';
	Disable_ContactTypeFieldsForSecondaryUser(currentUserId);

});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            debugger;
            var validation = false;
            var companyId = $("#EntityFormView_EntityID").val();
            var filter = "parentcustomerid/Id eq (guid'" + companyId + "')";

            //var data = ExecuteQuery("Validation_CompanyPrimarySecondaryContacts", filter);
            var data = tdg.c.OData_List("contact", filter);

            if (data != null) {
                var primaryFound = false;
                var secondaryFound = false;

                for (i = 0; i < data.length; i++) {
                    if (data[i].cid_contacttype.Value == 100000000)
                        primaryFound = true;
                    if (data[i].cid_contacttype.Value == 100000001)
                        secondaryFound = true;
                }
                if (primaryFound && secondaryFound) {
                    validation = true;
                    return true;
                }
            }

            if (!validation) {
                tdg.c.error_message_advanced_form("m000002", true);   // You cannot proceed before adding at least one secondary contact.

                //$('#ValidationSummaryEntityFormView div').remove();
                //var validationSection = $('#ValidationSummaryEntityFormView');
                //var errorMessage = "You cannot proceed before adding at least one secondary contact.";
                //validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
                //validationSection.show();
                //$('#alertMessages').focus();
            }
            return validation;
        }
    }(window.jQuery));
}

function root_erap_setup() {
    debugger;
    var cid_has_cra_bn = '{{user.cid_has_cra_bn}}';
    cid_has_cra_bn = (cid_has_cra_bn == "true" ? true : false);

    var parentcustomerid = '{{user.parentcustomerid.Id}}';
    var contact_id = '{{user.id}}';
    var cid_crabusinessnumber = '{{user.cid_crabusinessnumber}}';

    tdg.root.setup(cid_has_cra_bn, cid_crabusinessnumber, parentcustomerid, contact_id);
}


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

                    //Wait till subgrid load
                    $("#Contacts").on("loaded", function () {
                        $(".btn.btn-default.btn-xs").prop("disabled", true);
                        $(".details-link").prop("disabled", true);
                        $(".details-link").css("pointer-events", "none");
                    });
				}
			},
			error: function (xhr, textStatus, errorThrown) {
				alert(textStatus + ' ' + errorThrown);
			}
		});
}

