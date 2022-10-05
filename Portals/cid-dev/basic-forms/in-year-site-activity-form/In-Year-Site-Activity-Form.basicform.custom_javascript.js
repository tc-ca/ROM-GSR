if (window.jQuery) {
    (function ($) {
        entityFormClientValidate = function (this, e) {
            debugger;

            var siteStatus = $('div[data-name="tdg_activities_details"]').find("#cid_issiteattested");
            //alert(e);
            //alert(this);
            //if($("#cid_issiteattested").prop('checked')){
            if(siteStatus.prop('checked')){
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