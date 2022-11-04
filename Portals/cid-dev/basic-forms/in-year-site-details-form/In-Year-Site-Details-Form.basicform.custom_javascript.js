//
// Basic Form-In Year Site Details Form.js
//

$(document).ready(function () {
    debugger;

    var operationId = sessionStorage.getItem("siteOperationId");
    var urlParams = new URLSearchParams(window.location.search);

    if (operationId != '') {
        var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
        var requirementLevel = $("#cid_requirementlevel").find(":selected").text();
        var extendedSite = false;
        var disabled = "";
        var siteId = urlParams.get('id');

        if (cidSiteStatus.indexOf("Inactive") >= 0)
            disabled = "disabled";

        if(requirementLevel != "" && requirementLevel != null && requirementLevel != " ")
            $("#cid_requirementlevel").attr('disabled', 'disabled');

        if (requirementLevel == 'Extended')
            extendedSite = true;

        if ($("#openOperationWizard").length > 0)
            $('#openOperationWizard').remove();
            
        var msg2 = tdg.error_message.message("m000027");
        var html2 = "&nbsp;&nbsp;<div id='openOperationWizard' role='group' class='btn-group entity-action-button'><a href='~/OperationRegistrationWizard/?id=" + operationId + "&siteid=" + siteId + "&in_year=true" + (extendedSite ? "&isExtended=true" : "&isExtended=false") + "'><input id='furtherDetailsButton' type='button' name='FurtherSiteDetails' value='{0}' class='btn btn-primary button submit-btn' nonactionlinkbutton='true'" + disabled + "></a></div>";
        html2 = html2.replaceAll("{0}", msg2);
        $('.AttestSite').parent().after(html2);
    }
});