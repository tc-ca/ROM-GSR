$(document).load(function () {
    $('#loader').show();
});

$(document).ready(function () {
	$('#loader').hide();

       var inYear = sessionStorage.getItem('frominyearsites');
    var annualCompliance = sessionStorage.getItem('fromannualcompliance');
    var frominyearsitepage = sessionStorage.getItem('frominyearsitepage');

    if(inYear == 'true' || annualCompliance  == 'true' || frominyearsitepage == 'true' ){
        if ($("#cancelButton").length <= 0){
            $("#NextButton").parent().after("<div role='group' class='btn-group entity-action-button'><input id='cancelButton' type='button' name='CancelButton' value='Cancel' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'></div>");
        }

    	$('#cancelButton').click(function (e) {
            if(inYear == 'true' )
                window.location.href = '~/my-sites/';
            else if(annualCompliance == 'true' )
                window.location.href = '~/my-company/annual-compliance-update/';
            else if(frominyearsitepage == 'true' ){
                var urlParams = new URLSearchParams(window.location.search);
	            if (urlParams.has('id')) {
		            var siteid = urlParams.get('id');

                    if(siteid != "")
                        window.location.href = '~/my-sites/in-year-site/?id=' + siteid;
                }
            }
	    });
    }
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            sessionStorage.setItem('to_oprtn_wzrd', 'true');
            
            var validation = true;
            var errorMessage = "";
            var checkedCheckBoxes = $('[id*="cid_"]:checkbox:checked'); 

			if(checkedCheckBoxes && checkedCheckBoxes.length <= 0)
			{
                errorMessage = "You cannot proceed before selecting the site activity types.";
                validation = false;
            }

            if (!validation) {
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
