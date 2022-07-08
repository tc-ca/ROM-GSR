//
// SiteRegistrationWizard-Attest Site.js
//



async function OperationDetailsProvided(operationId, flag) {
    await UpdateOperationDetailsProvided(operationId, flag);
}

$(document).ready(function () {
    $('#PreviousButton').on('click', function () {
        var siteId = $("#EntityFormView_EntityID").val();
        
        var operationId = GetHOTIOperation(siteId);

        OperationDetailsProvided(operationId, false);
    });

     // display_Modes();

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

function display_Modes()
{
 var siteid_liquid = "{{ request.params['id'] }}";

var row1 = ' <tr style="background-color: rgb(240, 240, 240);">' +
'<td colspan = "1" rowspan = "1" class="clearfix cell checkbox-cell" >' +
    '<div class="info">' +
    '<label for="cid_Air" id="cid_Air_label" class="field-label" role="none">Air</label>' +
    '</div>' +
    '<div class="control">' +
    '<span class="checkbox ">' +
    '<input id="cid_Air" type="checkbox" name="cid_Air" checked="checked" onclick="setIsDirty(this.id);" class="checkbox readonly" disabled="disabled" aria-disabled="true">' +
    '</span>' +
    '<input type="hidden" name="cid_Air_Value" id="cid_Air_Value" value="True">' +
    '</div>' +
    '</td>' +
    '<td colspan="1" rowspan="1" class="clearfix cell checkbox-cell">' +
    '<div class="info">' +
    '<label for="cid_Road" id="cid_Road_label" class="field-label" role="none">Road</label>' +
    '</div>' +
    '<div class="control">' +
    '<span class="checkbox ">' +
    '<input id="cid_Road" type="checkbox" name="cid_Road" onclick="setIsDirty(this.id);" class="checkbox readonly" disabled="disabled" aria-disabled="true">' +
    '</span>' +
    '<input type="hidden" name="cid_Road_Value" id="cid_Road_Value" value="False">' +
    '</div>' +
    '</td>' +
    '<td class="cell zero-cell"></td>' +
'</tr>';

var row2 = ' <tr style="background-color: rgb(240, 240, 240);">' +
'<td colspan = "1" rowspan = "1" class="clearfix cell checkbox-cell" >' +
    '<div class="info">' +
    '<label for="cid_Air" id="cid_Rail_label" class="field-label" role="none">Rail</label>' +
    '</div>' +
    '<div class="control">' +
    '<span class="checkbox ">' +
    '<input id="cid_Rail" type="checkbox" name="cid_Rail" checked="checked" onclick="setIsDirty(this.id);" class="checkbox readonly" disabled="disabled" aria-disabled="true">' +
    '</span>' +
    '<input type="hidden" name="cid_Rail_Value" id="cid_Rail_Value" value="True">' +
    '</div>' +
    '</td>' +
    '<td colspan="1" rowspan="1" class="clearfix cell checkbox-cell">' +
    '<div class="info">' +
    '<label for="cid_Marine" id="cid_Road_label" class="field-label" role="none">Marine</label>' +
    '</div>' +
    '<div class="control">' +
    '<span class="checkbox ">' +
    '<input id="cid_Marine" type="checkbox" name="cid_Marine"  class="checkbox readonly" disabled="disabled" aria-disabled="true">' +
    '</span>' +
    '<input type="hidden" name="cid_Marine_Value" id="cid_Marine_Value" value="False">' +
    '</div>' +
    '</td>' +
    '<td class="cell zero-cell"></td>' +
'</tr>';



// JavaScript source code
$('table').each(function () {
    var selectedTable = $(this);
    if (selectedTable.attr('data-name').includes('site_attestation_section_Modes')) {
       // $(this).innerHTML += ModesCheckBox_HtmlTags;
        selectedTable.find("tbody").each(function () {

            $(this).after(row1);
             $(this).after(row2);
            

        });



         selectedTable.find("tr").each(function () {

            $(this).css("background-color", "#F0F0F0");
            

        });
    }
});
}