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

    var entityList = $(".entity-grid").eq(0);

    entityList.on("loaded", function () {
        debugger;

        // header
        let header = entityList.find("table thead > tr");
        for (var index1 = 0; index1 < header.length; index1++) {
            debugger;
            let tr = header[index1];

            let cols = $(tr).find('th');
            for (var i = 0; i < cols.length; i++) {
                var tdElement = cols[i];
                var className = $(tdElement)[0].className;
                if (className.indexOf("sort-enabled") == -1) {
                    var text = $(tdElement).text();
                    text = tdg.c.text_language(text, selected_language);
                    $(tdElement).text(text);
                }
            }
        }

        debugger
        let rows = entityList.find("table tbody > tr");
        rows.each(function (index, tr) {
            debugger;

            let cols = $(tr).find('td');
            cols.each(function (index, td) {
                //debugger;
                var tdElement = $(this);
                var value = tdElement.attr('data-attribute');
                if (value != null) {
                    var index1 = value.indexOf('.tdg_shippingnamedescriptiontxt');
                    if (index1 != -1) {
                        var cellValue = $(td).text();
                        cellValue = tdg.c.text_language(cellValue, selected_language);
                        $(td).text(cellValue);
                    }
                }
            });
        });
    });
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
                        window.location.href = "~/en-US/my-sites/in-year-site/?id=" + siteId;
                    }
                    else {
                        window.location.href = "~/en-US/SiteRegistrationWizard/?id=" + siteId;
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
