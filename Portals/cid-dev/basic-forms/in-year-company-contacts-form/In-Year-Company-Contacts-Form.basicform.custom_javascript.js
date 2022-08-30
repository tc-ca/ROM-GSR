$(document).ready(function () {
    $("#cid_iscompanyattested").prop( "checked", false );
});

if (window.jQuery) {
    (function ($) {
        entityFormClientValidate = function () {
            if($("#cid_iscompanyattested").prop('checked')){
                return true;
            }
            else{
                var errorMessage = 'You cannot proceed before attesting your company contacts changes';  
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