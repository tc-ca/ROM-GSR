//
// CompanyRegistrationWizard-Contact.js
//
$(document).ready(function () {
    debugger;
    sessionStorage.setItem("step_start", 2);

    //root_erap_setup();
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
