//
// Basic Form-In Year Deactivate Company Form.js
//

$(document).ready(function () {
    debugger;

    //var message = tdg.error_message.message("m000030");
    var message = "This action will deactivate the Company and all of its Sites.</br></br>" //message.replace("{0}", companyAnniversaryDate.substring(0, 10));
	+ "Please be aware that if any of the Sites are meant to be sold to another Company, or merged into an existing Company, "
    + "then you will need to first begin the Transfer/Sale process for those Sites before deactivating the Company.</br></br>"
    + "<p style='color:red' >Be advised that this action cannot be undone.</p>"
    +"Do you want to proceed with the Company deactivation</br></br>";
    
    tdg.c.dialog_YN(message, (ans) => {
        if (!ans) {
            window.location.href = "~/my-company";
        }
    });

    $("#cid_registrationasof").parent().parent().hide();

    sessionStorage.setItem('futureDateMessageShown', 'false');
    var effectiveDateControl = $("#cid_companydeactivationeffectivedate_datepicker_description");
    effectiveDateControl.val('');
    $("#cid_companydeactivationeffectivedate").val(null);

    $("#cid_reasonforcompanydeactivation option[value='']").attr('selected', true); 
    $("#cid_memoforcompanydeactivation").val('');
    $("#cid_iscompanyattested").prop("checked", false);
    
    var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();
    $('#cid_cidcompanystatus').hide();
    $('#cid_cidcompanystatus_label').hide();

    if (cidCompanyStatus.indexOf("Inactive") >= 0)
        $('#EntityFormPanel').find('input, textarea, button, select').attr('disabled', 'disabled');

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