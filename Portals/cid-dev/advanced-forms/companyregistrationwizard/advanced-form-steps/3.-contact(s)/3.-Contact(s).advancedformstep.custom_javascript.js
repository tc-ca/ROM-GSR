// CompanyRegistrationWizard-Contact.js

$(document).ready(function () {
    debugger;
    sessionStorage.setItem("step_start",2);
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            var validation = true;
            var errorMessage = "";

            $("#Contacts").each(function () {
                if ($(this).html().indexOf("Primary") <= -1 || $(this).html().indexOf("Secondary") <= -1) {
                    validation = false;
                    errorMessage = "You cannot proceed before adding primary and secondary contacts.";
                }
            });

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