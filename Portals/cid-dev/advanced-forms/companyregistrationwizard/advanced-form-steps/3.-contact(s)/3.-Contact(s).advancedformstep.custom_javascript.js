// CompanyRegistrationWizard-Contact.js

$(document).ready(function () {
    debugger;
    sessionStorage.setItem("step_start",2);

	var companyName = '{{user.parentcustomerid.name }}';
    var header = $('.page-header h1');
	if(companyName != null && header != null)
		header.text(header.text() + ' - ' + companyName);

});

if (window.jQuery) {
 (function ($) {
    webFormClientValidate = function() {
        var validation = false;
        var companyId = $("#EntityFormView_EntityID").val();	
        var filter = "parentcustomerid/Id eq (guid'" + companyId + "')";
        var data = ExecuteOData("Validation_CompanyPrimarySecondaryContacts", filter);
            
        if(data != null)
        {
            var primaryFound = false;
            var secondaryFound = false;

            for( i = 0; i < data.length; i++) {
                if(data[i].cid_contacttype.Value == 100000000)
                    primaryFound = true;
                if(data[i].cid_contacttype.Value == 100000001)
                    secondaryFound = true;
            }
            if(primaryFound && secondaryFound)
            {
                validation = true;
                return true;
            }
        }

        if(!validation)
        {
            $('#ValidationSummaryEntityFormView div').remove(); 

            var validationSection = $('#ValidationSummaryEntityFormView');
   
            validationSection.append($("<div class='notification alert-danger' role='alert'>You cannot proceed before adding primary and secondary contacts.</div>"));  
            validationSection.show();
        }
    return validation;
    }
   }(window.jQuery));
}