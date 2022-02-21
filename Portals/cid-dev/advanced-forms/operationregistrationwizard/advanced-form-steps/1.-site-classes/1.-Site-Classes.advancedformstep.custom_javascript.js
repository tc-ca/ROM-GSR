$(document).ready(function() {
       if ($("#backToSiteWizard").length <= 0)
        $('#mainContent').prepend("<div id='backToSiteWizard' class='input-group pull-left'><p><a href='~/en-US/SiteRegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Site Registration Wizard</a><br><br></p></div>");

    var companyName = '{{user.parentcustomerid.name }}';
    var header = $('.page-header h1');
	if(companyName != null && header != null)
		header.text(header.text() + ' - ' + companyName);
});

if (window.jQuery) {
   (function ($) {
        webFormClientValidate = function() {
            var validation = true;
            var errorMessage = "";

            var urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('id')) {
                var operationId = urlParams.get('id');

          //var rows = $("#operation_classes .view-grid table").find("tbody > tr");

          //if (rows.length <= 0) {
          //      //alert('You cannot proceed before adding classes(s).');
          //      validation = false;
          //      errorMessage = "You cannot proceed before adding classes(s).";
          //}
				if(!SiteHasOperationClasses(operationId))
				{
					errorMessage = "You cannot proceed before adding classes(s).";
					validation = false;
				}
			}

            if(!validation)
			{
				$('#ValidationSummaryEntityFormView div').remove(); 

				var validationSection = $('#ValidationSummaryEntityFormView');
   
				validationSection.append($("<div class='notification alert-danger' role='alert'>"+ errorMessage + "</div>"));  
				validationSection.show();
			}

			return validation; 
        }
   }(window.jQuery));
}