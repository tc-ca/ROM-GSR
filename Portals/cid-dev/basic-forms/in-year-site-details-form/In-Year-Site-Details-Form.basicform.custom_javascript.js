//
// Basic Form-In Year Site Details Form.js
//

$(document).ready(function () {
    debugger;

    var operationId = sessionStorage.getItem("siteOperationId");

    var urlParams = new URLSearchParams(window.location.search);
    //if (urlParams.has('operationid')) {
    if (operationId != '') {
        var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
        var disabled = "";

        if (cidSiteStatus.indexOf("Inactive") >= 0)
            disabled = "disabled";

        var siteId = urlParams.get('id');
        //var operationId = urlParams.get('operationid');

        var isExtendedSite = $("#cid_requirementlevel").find(":selected").text();
        var extendedSite = false;

        if (isExtendedSite == 'Extended') {
            extendedSite = true;
        }
        if ($("#openOperationWizard").length > 0)
            $('#openOperationWizard').remove();
            
        var msg2 = tdg.error_message.message("m000027");
        var html2 = "&nbsp;&nbsp;<div id='openOperationWizard' role='group' class='btn-group entity-action-button'><a href='~/OperationRegistrationWizard/?id=" + operationId + "&siteid=" + siteId + "&in_year=true" + (extendedSite ? "&isExtended=true" : "&isExtended=false") + "'><input id='furtherDetailsButton' type='button' name='FurtherSiteDetails' value='{0}' class='btn btn-primary button submit-btn' nonactionlinkbutton='true'" + disabled + "></a></div>";
    
        html2 = html2.replaceAll("{0}", msg2);
        $('div[data-name="further_site_details"]').parent().parent().find("#UpdateButton").parent().after(html2);

        //if ($("#openOperationWizard").length > 0)
        //    $('#openOperationWizard').remove();

        //var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
        //var disabled = "";

        //if (cidSiteStatus.indexOf("Inactive") >= 0)
        //    disabled = "disabled";
    //}

    //var isExtendedSite = $("#cid_requirementlevel").find(":selected").text();

    //if (isExtendedSite == 'Basic') {
    //    $('table[data-name="site_details_section_6"]').parent().addClass("hidden");
    //}
    }

    if (window.jQuery) {
    (function ($) {
        entityFormClientValidate = function () {
            alert($(this).text());
            alert($(this).val());
            $('table[data-name="further_site_details_section_3"]').find("#cid_issiteattested").prop('checked')

            //if($("#cid_issiteattested").prop('checked')){
            if($('table[data-name="further_site_details_section_3"]').find("#cid_issiteattested").prop('checked')){
                return true;
            }
            else{
                var errorMessage = 'You cannot proceed before attesting your site data changes, please check the "Attestation" box';  
                $('.validation-summary div').remove();
                //var validationSection = $('.validation-summary').eq(1); 
                 var validationSection = $('div[data-name="SUMMARY_TAB"]').parent().find(".validation-summary");

				validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>")); 
				validationSection.show(); 
                $('.validation-summary div').focus(); 

                return false;
            }
        }
    }(window.jQuery));
}

});