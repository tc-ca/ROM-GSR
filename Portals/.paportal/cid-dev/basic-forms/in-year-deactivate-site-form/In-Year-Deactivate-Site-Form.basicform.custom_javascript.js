//
// Basic Form-In Year Deactivate Site Form.js
//

$(document).ready(function () {
    debugger;
  // tdg.c.control_hide("#adx_modifiedbyusername");
  $("#adx_modifiedbyusername").val('{{user.adx_identity_username}}');
   $("#adx_modifiedbyusername").css("display" , "none");
   $("#adx_modifiedbyusername_label").css("display" , "none");
   
 
    sessionStorage.setItem('futureDateMessageShown', 'false');
    var effectiveDateControl = $("#cid_sitedeactivationeffectivedate_datepicker_description");
    effectiveDateControl.val('');
    $("#cid_sitedeactivationeffectivedate").val(null);

    $("#cid_reasonforsitedeactivation option[value='']").attr('selected', true); 
    $("#cid_memositedeactivation").val('');
    $("#cid_issiteattested").prop( "checked", false );
     
     //as per accessibility requirement labels should not have role
     setTimeout( function(){
    $("#cid_issiteattested_label").removeAttr("role");
     },1000);
    //all disabled fields will not be accessible with keyboard tab which is not compliant with accessiblity
    //switch the disabled drop down with div to be accessible 
   var SiteStatusValue =  $("#cid_cidsitestatus :selected").text();
    $("#cid_cidsitestatus").after('<div class="readonly form-control picklist" tabindex="0">'+SiteStatusValue +' </div>')
    //hid disbled drop down
    $("#cid_cidsitestatus").css("display" , "none");
    //add tab index to controls to be accessible by keyboard tab key
   $(".description").attr("tabindex" , "0");
   $("#cid_cidsitestatus_label").attr("tabindex" , "0");

    $("#EntityFormPanel").click(function(){
        var futureDateMessageShown = sessionStorage.getItem("futureDateMessageShown");

        if(futureDateMessageShown != 'true'){          
            var effectiveDate = Date.parse(effectiveDateControl.val());

            if (effectiveDate >= new Date()) {
                var message = tdg.error_message.message("m000142");

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
            else {
                var errorMessage = tdg.error_message.message("m000026");
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