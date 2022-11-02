//
// Basic Form-In Year Deactivate Company Form.js
//

$(document).ready(function () {
    debugger;

 sessionStorage.setItem('futureDateMessageShown', 'false');
        var effectiveDateControl = $("#cid_companydeactivationeffectivedate_datepicker_description");
        effectiveDateControl.val('');
    $("#cid_reasonforcompanydeactivation option[value='']").attr('selected', true); 
    $("#cid_memoforcompanydeactivation").val('');
    $("#cid_iscompanyattested").prop("checked", false);
    
    var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();
    $('#cid_cidcompanystatus').hide();
    $('#cid_cidcompanystatus_label').hide();

    if (cidCompanyStatus.indexOf("Inactive") >= 0) {
        $('#EntityFormPanel').find('input, textarea, button, select').attr('disabled', 'disabled');
    }



       

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

            if ($("#cid_iscompanyattested").prop('checked')) {
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
