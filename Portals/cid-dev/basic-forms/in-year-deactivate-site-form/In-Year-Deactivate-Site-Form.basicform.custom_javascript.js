$(document).ready(function () {
    sessionStorage.setItem('futureDateMessageShown', 'false');
    var effectiveDateControl = $("#cid_sitedeactivationeffectivedate_datepicker_description");
    effectiveDateControl.val('');
    $("#cid_sitedeactivationeffectivedate").val(null);

    $("#cid_reasonforsitedeactivation option[value='']").attr('selected', true); 
    $("#cid_memositedeactivation").val('');
    $("#cid_issiteattested").prop( "checked", false );
 
    $("#EntityFormPanel").click(function(){
        var futureDateMessageShown = sessionStorage.getItem("futureDateMessageShown");

        if(futureDateMessageShown != 'true'){          
            var effectiveDate = Date.parse(effectiveDateControl.val());

            if(effectiveDate >= new Date()){
                var message = "<p>Please be aware that the entered date is in the future.</p>";

                tdg.c.dialog_OK(message);
                
                sessionStorage.setItem('futureDateMessageShown', 'true');
            }
        }
    });
});

if (window.jQuery) {
    (function ($) {
        entityFormClientValidate = function () {
            debugger;

            if($("#cid_issiteattested").prop('checked')){
                return true;
            }
            else{
                var errorMessage = 'You cannot proceed before attesting your site deactivation, please check the "Attestation" box';  
                $('.validation-summary div').remove();
                var validationSection = $('.validation-summary'); 
				validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>")); 
				validationSection.show();
                $('.validation-summary div').focus();  

                return false;
            }
        }
    }(window.jQuery));
}