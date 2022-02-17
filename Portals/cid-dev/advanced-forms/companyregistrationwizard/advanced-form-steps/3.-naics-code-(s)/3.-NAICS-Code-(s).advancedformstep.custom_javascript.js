// CompanyRegistrationWizard-NAICS Code.js

$(document).ready(function () {
    debugger;
alert("xxx");
    var subgrid = $("#subgrid");
    $('table').each(function () {
        var selectedTable = $(this);
        if (selectedTable.attr('data-name').includes('_readonly')) {
            selectedTable.find("tr").each(function () {
                $(this).css("background-color", "#F0F0F0");
            });
        }
    });
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            debugger;

            var validation = false;
            var errorMessage = "";
            var rows = $("#CompanyNAICSCodes .view-grid table").find("tbody > tr");

            if (rows.length <= 0) {
                //alert('You cannot proceed before adding company NAICS code(s).');
                errorMessage = "You cannot proceed before adding company NAICS code(s).";
                validation = false;
            }
            else {
                validation = true;
            }

            if (!validation) {
                $('#ValidationSummaryEntityFormView div').remove();

                var validationSection = $('#ValidationSummaryEntityFormView');

                validationSection.append($("<div class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
                validationSection.show();
            }

            return validation;
        }
    }(window.jQuery));
}