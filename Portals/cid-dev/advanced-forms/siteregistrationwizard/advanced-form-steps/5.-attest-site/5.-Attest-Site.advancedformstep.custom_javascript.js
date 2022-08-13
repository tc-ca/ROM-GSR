//
// SiteRegistrationWizard-Attest Site.js
//
async function OperationDetailsProvided(operationId, flag) {
    await UpdateOperationDetailsProvided(operationId, flag);
}

$(document).ready(function () {
    debugger;

    page_setup();

    tdg.c.control_hide("ovs_address_type");
    tdg.cid.address_type_change(false);

    $('#PreviousButton').on('click', function () {
        var siteId = $("#EntityFormView_EntityID").val();
        var operationId = GetHOTIOperation(siteId);

        OperationDetailsProvided(operationId, false);
    });

    //Display mode of transportation check boxes (custom code)
    var siteid = $("#EntityFormView_EntityID").val();
    tdg.cid.Display_Modes(siteid);

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

    subgrid_language();
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

function page_setup() {
    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    const files = ["/tdgcore_common.js", "/tdgcore_message.js"];
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = file;

        $("body").append(script);
    }

    // server error?
    tdg.c.message_panel();
}

function subgrid_language() {
    debugger;
    var selected_language = sessionStorage.getItem("selected_language");

    var entityList = $(".entity-grid");
    var unnumber = entityList.eq(1);
    var refRel = unnumber[0].dataset.refRel;
    if (refRel == "cid_account_ovs_operationunnumber_Site") {
        unnumber.on("loaded", function () {
            debugger;

            // header
            let header = unnumber.find("table thead > tr");
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

                    switch (i) {
                        case 0:
                            //tdElement.ariaLabel = "UN Number Display";
                            break;
                        case 1: // Packing Group
                            tdElement.style.display = "none";
                            break;
                        case 2: // Shipping
                            tdElement.style.display = "none";
                            break;
                    }
                }
            }

            debugger
            let rows = unnumber.find("table tbody > tr");

            rows.each(function (index, tr) {
                debugger;

                let cols = $(tr).find('td');
                for (var i = 0; i < cols.length; i++) {
                    tdElement = $(cols[i]).eq(0);
                    var value = tdElement.attr('data-attribute');
                    if (value != null) {
                        var index1 = value.indexOf('.tdg_shippingnamedescriptiontxt');
                        if (index1 != -1) {
                            var cellValue = tdElement.text();
                            cellValue = tdg.c.text_language(cellValue, selected_language);
                            tdElement.text(cellValue);
                        }

                        switch (i) {
                            case 0:
                                var cellValue = tdElement.text();
                                var f1 = $(cols[i + 1]).eq(0);
                                var f2 = $(cols[i + 2]).eq(0);
                                var text = cellValue + " - " +
                                    f1.text() + " - " +
                                    tdg.c.text_language(f2.text(), selected_language);
                                tdElement.text(text);

                                f1[0].style.display = "none";
                                f2[0].style.display = "none";
                                break;
                        }
                    }
                }
            });
        });
    }
}