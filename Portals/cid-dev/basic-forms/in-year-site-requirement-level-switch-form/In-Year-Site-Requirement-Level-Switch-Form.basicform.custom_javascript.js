$(document).ready(function () {
    sessionStorage.setItem('futureDateMessageShown', 'false');
    var effectiveDateControl = $("#cid_siterequirementlevelswitcheffectivedate_datepicker_description");
    effectiveDateControl.val('');

    $("#cid_siterequirementlevelswitchmemo").val('');
    //$("#cid_issiteattested").prop( "checked", false );

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
    
    var siteRequirementLevel = $('#cid_requirementlevel').find(":selected").text();

    if(siteRequirementLevel == "Basic"){
        var message = "You are changing the site requirement level from basic to extended. <br>" +
            "You are required to complete the extended processing requirements for the site before the site can be attested.<br><br>" +
            "You must enter the following applicable information for the site:<br>" +
            "All applicable UN Numbers<br>" +
            "<p>- Unit of Measurement<br>" +
            "- Annual Quantity / Volume<br>" +
            "- Annual Number of Consignments</p>";

        tdg.c.dialog_OK(message);

        $("#cid_requirementlevel option[value='100000001']").attr('selected', true);  
    }
    else if(siteRequirementLevel == "Extended"){
        var message = "You are changing the site requirement level from extended to basic. <br>" +
            "Continuing with the update would result in the loss of the Extended Processing details assigned to the site";

        tdg.c.dialog_OK(message);

        $("#cid_requirementlevel option[value='100000000']").attr('selected', true);  
    }

    
});

//if (window.jQuery) {
//    (function ($) {
//        entityFormClientValidate = function () {
//            debugger;

//            if($("#cid_issiteattested").prop('checked')){
//               return true;
//            }
//            else{
//                var errorMessage = 'You cannot proceed before attesting your site requirement level switch, please check the "Attestation" box';  
//                $('.validation-summary div').remove();
//                var validationSection = $('.validation-summary'); 
//				validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>")); 
//				validationSection.show();
//                $('.validation-summary div').focus();  

//                return false;
//            }
//        }
//    }(window.jQuery));
//}