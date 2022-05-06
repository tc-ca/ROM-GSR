//
// SiteRegistrationWizard-Attest Site.js
//
$(document).ready(function () {
    $('#PreviousButton').on('click', async function () {
        var siteId = $("#EntityFormView_EntityID").val();

        //window.location.href = "~/en-US/OperationRegistrationWizard";
        var operationId = await GetHOTIOperation(siteId);

        await UpdateOperationDetailsProvided(operationId, false);
    });

    $('table').each(function () {
        var selectedTable = $(this);
        if (selectedTable.attr('data-name').includes('_readonly')) {
            selectedTable.find("tr").each(function () {
                $(this).css("background-color", "#F0F0F0");
            });
        }
    });

    if ($("#printSummary").length <= 0)
        var msg = tdg.error_message.message("m000007"); // Print Summary
    $("#NextButton").parent().after("<div id='printSummary' role='group' class='btn-group entity-action-button'><input type='button' name='PrintButton' value='" + msg + "' onclick='window.print();' class='btn btn-primary button next submit-btn' nonactionlinkbutton='true'></div>");
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            var validation = true;
            var siteId = $("#EntityFormView_EntityID").val();
            var errorMessage = "";

            //Classes validation
            if (!SiteHasOperationClasses(null, siteId)) {
                var msg = tdg.error_message.message("m000016"); // You cannot proceed before adding class(es).
                errorMessage = errorMessage + msg + "</br>";
                validation = false;
            }

            //UN Numbers validation
            var isExtendedSite = $("#cid_requirementlevel").find(":selected").text();

            if (IsExtendedSite == 'Basic' && !SiteHasOperationUNNumbers(null, siteId)) {
                var msg = tdg.error_message.message("m000017"); // UN ??
                errorMessage = errorMessage + msg + "</br>";
                validation = false;
            }

            if (!validation) {
                $('#ValidationSummaryEntityFormView div').remove();
                var validationSection = $('#ValidationSummaryEntityFormView');
                validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
                validationSection.show();
                $('#alertMessages').focus();
            }
            return validation;
        }
    }(window.jQuery));
}
