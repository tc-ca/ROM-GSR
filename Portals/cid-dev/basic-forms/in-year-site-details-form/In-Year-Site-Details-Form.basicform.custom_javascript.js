$(document).ready(function () {
    
    $('table[data-name="further_site_details_section_3"]').find("#cid_issiteattested").prop('checked',false);

    var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('operationid')) {
		var siteId = urlParams.get('id');   
        var operationId = urlParams.get('operationid');

        if ($("#openOperationWizard").length > 0) {
            $('#openOperationWizard').remove();
        }

$('div[data-name="further_site_details"]').parent().parent().find("#UpdateButton").after("<div id='openOperationWizard' role='group' ><a href='~/OperationRegistrationWizard/?id=" + operationId + "&siteid=" + siteId + "&in_year=true'><input type='button' name='FurtherSiteDetails' value='Further Site Details' class='btn btn-primary button submit-btn' nonactionlinkbutton='true'></a></div>");




//$("#UpdateButton").parent().after("<div id='openOperationWizard' role='group' class='btn-group entity-action-button'><a href='~/OperationRegistrationWizard/?id=" + operationId + "&siteid=" + siteId + "&in_year=true'><input type='button' name='FurtherSiteDetails' value='Further Site Details' class='entitylist-create btn btn-info action' nonactionlinkbutton='true'></a></div>");

        //$("<br><div id='openOperationWizard' class='input-group pull-left'><a href='~/OperationRegistrationWizard/?id=" + operationId + "&siteid=" + siteId + "&in_year=true' class='entitylist-create btn btn-info action'>Further Site Details</a><br><br></div><br><br><br>" ).insertBefore($("#sitedetails"));
    }
});