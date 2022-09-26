$(document).ready(function () {
    $('table[data-name="tab_5_section_1"] tr:first').addClass("hidden");
    $('table[data-name="further_site_details_section_3"]').find("#cid_issiteattested").prop('checked',false);
    $('table[data-name="further_site_details_section_4"]').parent().addClass("hidden");

    var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('operationid')) {
		var siteId = urlParams.get('id');   
        var operationId = urlParams.get('operationid');

        if ($("#openOperationWizard").length > 0)
            $('#openOperationWizard').remove();

        var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
        var disabled = "";

        if (cidSiteStatus.indexOf("Inactive") >= 0)
            disabled = "disabled";

        $('div[data-name="further_site_details"]').parent().parent().find("#UpdateButton").parent().after("<div id='openOperationWizard' role='group' ><a href='~/OperationRegistrationWizard/?id=" + operationId + "&siteid=" + siteId + "&in_year=true'><input id='furtherDetailsButton' type='button' name='FurtherSiteDetails' value='Further Site Details' class='btn btn-primary button submit-btn' nonactionlinkbutton='true'" + disabled +"></a></div>");
     }

    var isExtendedSite = $("#cid_requirementlevel").find(":selected").text();

    if (isExtendedSite == 'Basic') {
        $('table[data-name="site_details_section_6"]').parent().addClass("hidden");
    }
});