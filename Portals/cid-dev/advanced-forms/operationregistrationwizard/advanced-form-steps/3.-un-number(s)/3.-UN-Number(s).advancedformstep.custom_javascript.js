//
// OperationRegistrationWizard-UN Number.js
//

$(document).ready(function () {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    var tdg_unnumberid_label = tdg.error_message.message("tdg_unnumberid"); // UN Number
    sessionStorage.setItem("tdg_unnumberid_label", tdg_unnumberid_label);

    subgrid_language();
});

function subgrid_language() {
    var selected_language = sessionStorage.getItem("selected_language");

    var entityList = $(".entity-grid");
    var unnumber = tdg.c.subgrid_index(entityList, "ovs_OperationUNNumber_OperationUNNumber_o");
    if (unnumber != null) {
        tdg.cid.subgrid_unnumber(unnumber);
    }
}

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            var validation = true;
            var errorMessage = "";

            var urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('id')) {
                var operationId = urlParams.get('id');
                if (!SiteHasOperationUNNumbers(operationId, null)) {
                    errorMessage = tdg.error_message.message("m000017"); // "You cannot proceed before adding UN Number(s).";
                    validation = false;
                }
            }

            if (!validation) {
                $('#ValidationSummaryEntityFormView div').remove();
                var validationSection = $('#ValidationSummaryEntityFormView');

                validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
                validationSection.show();
                $('#alertMessages').focus();
            }
            else {
                OperationDetailsProvided(operationId, true);
                if (urlParams.has('siteid')) {

                    var siteId = urlParams.get('siteid');

                    if (urlParams.has('in_year')) {
                        window.location.href = "~/my-sites/in-year-site/?id=" + siteId;
                    }
                    else {
                        window.location.href = "~/SiteRegistrationWizard/?id=" + siteId;
                    }
                }
            }
            //return validation;
        }
    }(window.jQuery));
}

async function OperationDetailsProvided(operationId, flag) {
    await UpdateOperationDetailsProvided(operationId, flag);
}
