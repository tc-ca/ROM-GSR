//
// Web Page-In Year Site Page.js
//

$(document).ready(function () {
    debugger;

    $('#loader').show();

    $('table[data-name="SUMMARY_TAB_section_5"]').find("#cid_issiteattested").prop('checked', false);;
    $('div[data-name="tdg_activities_details"]').find("#cid_issiteattested").prop('checked', false);;
    $('table[data-name="further_site_details_section_3"]').find("#cid_issiteattested").prop('checked', false);

    $('table[data-name="tab_5_section_1"] tr:first').addClass("hidden");
    $('table[data-name="further_site_details_section_4"]').parent().addClass("hidden");

    var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();

    if (cidSiteStatus.indexOf("Inactive") >= 0) {
        $(".submit-btn").prop("disabled", true);
        $(".create-action").hide();
        $('.crmEntityFormView').find('input, textarea, select, a').attr('disabled', 'disabled');
    }

    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('id')) {
        var siteId = urlParams.get('id');
        var operationId = GetHOTIOperation(siteId);

        var msg = tdg.error_message.message("m000029");
        var html1 = "&nbsp;&nbsp;<div id='switchSiteType' role='group' class='btn-group entity-action-button'><a href='~/AuditHistoryLog_Create?id=" + siteId + "'><input type='button' name='SwitchSiteType' value='{0}' class='btn btn-primary button submit-btn' nonactionlinkbutton='true'></a></div>";
        html1 = html1.replaceAll("{0}", msg);
        $('div[data-name="tdg_activities_details"]').parent().parent().find("#UpdateButton").parent().after(html1);

        if (!urlParams.has('operationid')) {
            urlParams.set('operationid', operationId);
            window.location.search = urlParams;
        } else {
            $(".list-group-item").each(function () {
                var _href = $(this).attr("href");
                if (!_href.includes("?id="))
                    $(this).attr("href", _href + '?id=' + siteId);
            });
        }

        //$('table[data-name="tab_5_section_1"] tr:first').addClass("hidden");
        // $('table[data-name="further_site_details_section_3"]').find("#cid_issiteattested").prop('checked', false);
        //$('table[data-name="further_site_details_section_4"]').parent().addClass("hidden");

        var isExtendedSite = $("#cid_requirementlevel").find(":selected").text();

        if (isExtendedSite == 'Basic') {
            $('table[data-name="site_details_section_6"]').parent().addClass("hidden");
        }

        if ($("#openOperationWizard").length > 0)
            $('#openOperationWizard').remove();

        var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
        var disabled = "";

        if (cidSiteStatus.indexOf("Inactive") >= 0)
            disabled = "disabled";

    }
    $('#loader').hide();
});