$(document).ready(function ()
{
    debugger;
   
   $('div[data-name="tdg_activity_types"]').find("#cid_issiteattested").prop('checked',false);

    $('div[data-name="tdg_activity_types"]').find("#cid_cidsitestatus").hide();
    //$('div[data-name="tdg_activity_types"]').find("#cid_cidsitestatus").hide();
});

if (window.jQuery) {
    (function ($) {
        entityFormClientValidate = function (this, e) {
            debugger;
            alert(e);
            alert(this);
            //if($("#cid_issiteattested").prop('checked')){
            if($('div[data-name="tdg_activity_types"]').find("#cid_issiteattested").prop('checked')){
                return true;
            }
            else{
                var errorMessage = 'You cannot proceed before attesting your site data changes, please check the "Attestation" box';  
                $('.validation-summary div').remove();
                //var validationSection = $('.validation-summary').eq(1); 
                var validationSection = $('div[data-name="tdg_activity_types"]').parent().find(".validation-summary");
				//var validationSection = $('div[data-name="SUMMARY_TAB"]').parent().find(".validation-summary");
                validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>")); 
				validationSection.show(); 
                $('.validation-summary div').focus(); 

                return false;
            }
        }
    }(window.jQuery));
}