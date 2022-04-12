//
// CompanyRegistrationWizard-Attestation.js
//
$(document).ready(function () {
    debugger;

    var cid_crabusinessnumber = $("#cid_crabusinessnumber").val();
    cid_crabusinessnumber = (cid_crabusinessnumber != "null" ? cid_crabusinessnumber : "");

    // do not have a business number?
    if (cid_crabusinessnumber == "") {
        tdg.c.control_hide("cid_crabusinessnumber");
        tdg.c.control_show("cid_reasonfornobnnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber_other");

        //$("#cid_crabusinessnumber").parent().parent().hide();
        //$("#cid_reasonfornobnnumber").parent().parent().show();
        //$("#cid_reasonfornobnnumber_other").parent().parent().hide();
    }
    else {
        tdg.c.control_show("cid_crabusinessnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber_other");

        //$("#cid_crabusinessnumber").parent().parent().show();
        //$("#cid_reasonfornobnnumber").parent().parent().hide();
        //$("#cid_reasonfornobnnumber_other").parent().parent().hide();
    }

    $('table').each(function () {
        var selectedTable = $(this);
        if (selectedTable.attr('data-name').includes('_readonly')) {
            selectedTable.find("tr").each(function () {
                $(this).css("background-color", "#F0F0F0");
            });
        }
    });

    if ($("#printSummary").length <= 0) {
        //var label = tdg.error_message.message("m000007");
        $('#NextButton').parentnode().append("<div id='printSummary' role='group' class='btn-group entity-action-button'><input type='button' name='PrintButton' value='Print Summary' onclick='window.print();' class='btn btn-primary button next submit-btn' nonactionlinkbutton='true'></div>");
    }
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            debugger;
            var validation = false;
            var companyId = $("#EntityFormView_EntityID").val();

            //Contacts validation
            var filter = "parentcustomerid/Id eq (guid'" + companyId + "')";
            var data = ExecuteQuery("Validation_CompanyPrimarySecondaryContacts", filter);
            //var data = tdg.c.OData_List("contact", filter);

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
                // "You cannot attest company before adding primary and secondary contacts.</br>";
                tdg.c.error_message_advanced_form("m000006", true);   // You cannot proceed before adding at least one secondary contact.

                //$('#ValidationSummaryEntityFormView div').remove();
                //var validationSection = $('#ValidationSummaryEntityFormView');
                //validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
                //validationSection.show();
                //$('#alertMessages').focus();
            }
            return validation;
        }
    }(window.jQuery));
}
