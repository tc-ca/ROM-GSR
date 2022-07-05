$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('operationid')) {
		var siteId = urlParams.get('id');   
        var operationId = urlParams.get('operationid');

        if ($("#openOperationWizard").length > 0) {
            $('#openOperationWizard').remove();
        }

        $("<br><div id='openOperationWizard' class='input-group pull-left'><a href='~/en-US/OperationRegistrationWizard/?id=" + operationId + "&siteid=" + siteId + "&in_year=true' class='entitylist-create btn btn-info action'>Update Site HOTI Details</a><br><br></div><br><br><br>" ).insertBefore($("#sitedetails"));
    }
});