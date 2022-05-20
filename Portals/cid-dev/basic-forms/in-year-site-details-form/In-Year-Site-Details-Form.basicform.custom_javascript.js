$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('id')) {
		var siteId = urlParams.get('id');   
        var operationId = GetHOTIOperation(siteId);

        if ($(".workflow-link").length > 0) {
            $('#openOperationWizard').remove();
        }
     	$("<div id='openOperationWizard' class='input-group pull-right'><a href='~/en-US/OperationRegistrationWizard/?id=" + operationId + "&siteid=" + siteId + "&in_year=true' class='entitylist-create btn btn-info pull-right action' title='Back'>Update Site HOTI Details</a><br><br></div>").insertAfter($('.workflow-link'));
     }
});