$(document).ready(function () {
    var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
    $('#cid_cidsitestatus').hide();
    $('#cid_cidsitestatus_label').hide();

    if (cidSiteStatus.indexOf("Inactive") >= 0){  
        $('#EntityFormPanel').find('input, textarea, button, select').attr('disabled','disabled');    
    }

    $("#cid_issiteattested").prop( "checked", false );
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