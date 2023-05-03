//
// Basic Form-In Year Site Requirement Level Switch Form.js
//

$(document).ready(function () {
    debugger;

    sessionStorage.setItem('futureDateMessageShown', 'false');
    var effectiveDateControl = $("#cid_siterequirementlevelswitcheffectivedate_datepicker_description");
    effectiveDateControl.val('');
    $("#cid_siterequirementlevelswitcheffectivedate").val(null);

    $("#cid_siterequirementlevelswitchmemo").val('');

    $("#EntityFormPanel").click(function(){
        var futureDateMessageShown = sessionStorage.getItem("futureDateMessageShown");

        if(futureDateMessageShown != 'true'){          
            var effectiveDate = Date.parse(effectiveDateControl.val());

            if(effectiveDate >= new Date()){
                var message = tdg.error_message.message("m000142");
                tdg.c.dialog_OK(message);
                sessionStorage.setItem('futureDateMessageShown', 'true');
            }
        }
    });
    
    var siteRequirementLevel = $('#cid_requirementlevel').find(":selected").text();

    if (siteRequirementLevel == "Basic") {
        var message = tdg.error_message.message("m000031_EN");
        tdg.c.dialog_OK(message);
        $("#cid_requirementlevel option[value='100000001']").attr('selected', true);  
    }
    else if (siteRequirementLevel == "Extended") {
        var message = tdg.error_message.message("m000161");
        tdg.c.dialog_OK(message);
        $("#cid_requirementlevel option[value='100000000']").attr('selected', true);  
    }
});
