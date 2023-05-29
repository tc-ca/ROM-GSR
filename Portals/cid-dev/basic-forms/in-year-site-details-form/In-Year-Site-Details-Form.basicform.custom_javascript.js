//
// Basic Form-In Year Site Details Form.js
//

$(document).ready(function () {
    debugger;
 

    var operationId = sessionStorage.getItem("siteOperationId");
    var urlParams = new URLSearchParams(window.location.search);

    if (operationId != '') {
        var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
        var disabled = "";
        var siteId = urlParams.get('id');

        if (cidSiteStatus.indexOf("Inactive") >= 0)
            disabled = "disabled";

        if ($("#openOperationWizard_Classes").length > 0)
            $('#openOperationWizard_Classes').remove();           

        if ($("#openOperationWizard_MOTs").length > 0)
            $('#openOperationWizard_MOTs').remove();

        var btn_add = tdg.error_message.message("BTN_ADD");
        var msg = tdg.error_message.message("m000158");

        var html3 = "&nbsp;&nbsp;<div id='openOperationWizard_Classes' role='group' class='btn-group entity-action-button'><a href='~/OperationRegistrationWizard/?id=" + operationId + "&siteid=" + siteId + "&in_year=true'><input id='furtherDetailsButton_Classes' type='button' name='FurtherSiteDetails_Classes' value='+Add' class='btn btn-primary button submit-btn' nonactionlinkbutton='true'" + disabled + "></a></div>";
        var html5 = "</br><div id='openOperationWizard_MOTs' role='group' class='btn-group entity-action-button '><a href='~/OperationRegistrationWizard/?id=" + operationId + "&siteid=" + siteId + "&in_year=true'><input id='furtherDetailsButton_MOTs' type='button' name='FurtherSiteDetails_MOTs' value='Update Mode(s) of transportation' class='btn btn-primary button submit-btn' nonactionlinkbutton='true'" + disabled + "></a></div></br></br></br>";
        
        $("#classes").find("a:first").parent().after(html3);
        $("#siteModesOfTransportation").parent().after(html5);

        $("#furtherDetailsButton_Classes")[0].value = btn_add;
        $("#furtherDetailsButton_MOTs")[0].value = msg;
    }
});