// CompanyRegistrationWizard-Attestation.js

$(document).ready(function () {
    $("#cid_crabusinessnumber").attr("placeholder", "");
    $("#cid_reasonfornobnnumber").attr("placeholder", "");
    $("#cid_reasonfornobnnumber_other").attr("placeholder", "");
    $("#address1_line2").attr("placeholder", "");
    $("#address1_line3").attr("placeholder", "");
    $("#telephone1").attr("placeholder", "");
    $("#fax").attr("placeholder", "");
    $("#websiteurl").attr("placeholder", "");

    debugger;
    //var cid_crabusinessnumber = '{{user.cid_crabusinessnumber}}';

    var cid_crabusinessnumber = $("#cid_crabusinessnumber").val();
    cid_crabusinessnumber = (cid_crabusinessnumber != "null" ? cid_crabusinessnumber : "");

    // do not have a business number?
    if (cid_crabusinessnumber == "") {
        $("#cid_crabusinessnumber").parent().parent().hide();
        $("#cid_reasonfornobnnumber").parent().parent().show();
        $("#cid_reasonfornobnnumber_other").parent().parent().hide();
    }
    else {
        $("#cid_crabusinessnumber").parent().parent().show();
        $("#cid_reasonfornobnnumber").parent().parent().hide();
        $("#cid_reasonfornobnnumber_other").parent().parent().hide();
    }

    $('table').each(function () {
        var selectedTable = $(this);
        if (selectedTable.attr('data-name').includes('_readonly')) {
            selectedTable.find("tr").each(function () {
                $(this).css("background-color", "#F0F0F0");
            });
        }
    });

	if ($("#printSummary").length <= 0)
        $('#ValidationSummaryEntityFormView').after("<br><div id='printSummary' class='input-group pull-right'><input type='button' value='Print Summary' onclick='window.print();' class='btn btn-primary button next submit-btn'></div>");
});

if (window.jQuery) {
 (function ($) {
    webFormClientValidate = function() {
        var validation = false;
        var companyId = $("#EntityFormView_EntityID").val();

        //Contacts validation
        var filter = "parentcustomerid/Id eq (guid'" + companyId + "')";
        var data = ExecuteQuery("Validation_CompanyPrimarySecondaryContacts", filter);
		var errorMessage = "";
            
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
			errorMessage = "You cannot attest company before adding primary and secondary contacts.</br>";
		
		//NAICS Codes validation
		if(!CompanyHasNAICSCodes(companyId))
		{
            errorMessage = errorMessage + "You cannot attest company before adding company NAICS code(s).</br>";
            validation = false;
        }

        if (!validation) 
		{
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
