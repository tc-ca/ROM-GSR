//
// SiteRegistrationWizard-Attest Site.js
//
$(document).load(function () {
    $('#loader').show();
});

async function OperationDetailsProvided(operationId, flag) {
    await UpdateOperationDetailsProvided(operationId, flag);
}

$(document).ready(function () {
    debugger;
    $('#loader').hide();
    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    var isExtendedSite = $("#cid_requirementlevel").find(":selected").text();

    if (isExtendedSite == 'Basic') {
        $('table[data-name="un_numbers_readonly"]').parent().addClass("hidden");
    }

    page_setup();

    tdg.c.control_hide("ovs_address_type");
    tdg.cid.address_type_change(false);

    tdg.cid.convert_province_to_code(selected_language);
    tdg.c.control_hide("address1_stateorprovince");
    $('#ovs_address1_province').attr("disabled", true);

    $('#PreviousButton').on('click', function () {
        var siteId = $("#EntityFormView_EntityID").val();
        var operationId = GetHOTIOperation(siteId);

        OperationDetailsProvided(operationId, false);
    });

    //Display mode of transportation check boxes (custom code)
    var siteid = $("#EntityFormView_EntityID").val();
    tdg.cid.Display_Modes(siteid);

    if ($("#printSummary").length <= 0)
        var msg = tdg.error_message.message("m000007"); // Print Summary
    $("#NextButton").parent().after("<div id='printSummary' role='group' class='btn-group entity-action-button'><input type='button' name='PrintButton' value='" + msg + "' onclick='window.print();' class='btn btn-primary button next submit-btn' nonactionlinkbutton='true'></div>");

    subgrid_language();

    $('table').each(function () {
        debugger;
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

    var entityList = $(".entity-grid");
    var unnumber = tdg.c.subgrid_index(entityList, "cid_account_ovs_operationunnumber_Site");
    if (unnumber != null) {
        tdg.cid.subgrid_unnumber(unnumber);
    }
}