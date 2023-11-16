//
// SiteRegistrationWizard-Mode(s) Of Transportation.js
//

$(document).ready(function () {
    debugger;

    if ($("#backToCompanyWizard").length <= 0) {
        var msg = tdg.error_message.message("m000100");  // Back to Company Registration Wizard
        $('#mainContent').prepend("<div id='backToCompanyWizard' class='input-group pull-left'><p><a href='~/en-US/RegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'></a><br><br></p></div>");
        $("#backToCompanyWizard")[0].value = msg;
    }

    var companyName = '{{user.parentcustomerid.name }}';
    var header = $('.page-header h1');
	if(companyName != null && header != null)
		header.text(header.text() + ' - ' + companyName);

    if (sessionStorage.getItem('frominyearsites') == "true" || sessionStorage.getItem('fromannualcompliance') == 'true') {
        tdg.c.weblink_hide("/RegistrationWizard/");
        tdg.c.weblink_hide("/Bulk_Site_Upload/");
    }
    else {
        tdg.c.weblink_hide("/company_dashboard/");
        tdg.c.weblink_hide("/Bulk_Site_Update/");
    }

});

if (window.jQuery) {
   (function ($) {
        webFormClientValidate = function() {
            var validation = true;
            var errorMessage = "";

            var urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('id')) {
                var siteid = urlParams.get('id');
				if(!SiteHasModeOfTransportations(siteid))
                {
                    errorMessage = tdg.error_message.message("m000015");
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