//
// Basic Form-In Year Company Details.js
//

$(document).ready(function () {
    debugger;

    var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();
    var activationButon = $("#EntityFormPanel").find(".workflow-link");

    if (cidCompanyStatus.indexOf("Inactive") < 0) {
        activationButon.hide();
    }
    else {
        activationButon.css("color", "#000000");
        activationButon.css("background-color", "#4CAF50");
    }
    
   $('.validation-summary').eq(1).remove();

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    $("#cid_iscompanyattested").prop("checked", false);

    // address
    tdg.cid.address_init(false);

    tdg.cid.WebResource_address_complete_readonly(false);

    tdg.c.control_hide("cid_reasonfornobnnumber_other");

    //Phone number formatting
    tdg.cid.phone_init("telephone1", selected_language);
    tdg.cid.phone_init("fax", selected_language);

    var cid_has_cra_bn = ($('#cid_crabusinessnumber').val() != "" ? "1" : "0");
    var cid_reasonfornobnnumber = $('#cid_reasonfornobnnumber').val();

    tdg.c.control_hide("cid_has_cra_bn");

    // do not have a business number?
    if (cid_has_cra_bn != "1") {
        tdg.c.control_hide("cid_crabusinessnumber");
        tdg.c.control_show("cid_reasonfornobnnumber");

        if (cid_reasonfornobnnumber == "3")   // other
        {
            tdg.c.control_show("cid_reasonfornobnnumber_other");
        }
        else {
            tdg.c.control_hide("cid_reasonfornobnnumber_other");
        }
    }
    else {
        tdg.c.control_show("cid_crabusinessnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber_other");
    }

    $('#cid_crabusinessnumber').attr("readonly", true);
    $('#ovs_legalname').attr("readonly", true);
    $('#cid_reasonfornobnnumber').attr("readonly", true);
    $('#cid_reasonfornobnnumber').css("pointer-events", "none");
    $('#cid_reasonfornobnnumber_other').attr("readonly", true);

    // autocomplete off
    $("#name").attr("autocomplete", "new-password");
    $("#telephone1").attr("autocomplete", "new-password");
    $("#fax").attr("autocomplete", "new-password");
    $("#cid_reasonfornobnnumber_other").attr("autocomplete", "new-password");
    $("#websiteurl").attr("autocomplete", "new-password");

    // readonly
    $('#statuscode').attr("readonly", true);
    $('#address1_country').attr("readonly", true);

    subgrid_language();
});

function subgrid_language() {
    debugger;

    var entityList = $(".entity-grid");
    var companynaicscode = tdg.c.subgrid_index(entityList, "cid_account_companynaicscode");
    if (companynaicscode != null) {
        tdg.cid.subgrid_companynaicscode(companynaicscode);
    }
}

if (window.jQuery) {
    (function ($) {
        entityFormClientValidate = function () {
            if ($("#cid_iscompanyattested").prop('checked')) {
                return true;
            }
            else {
                var errorMessage = tdg.error_message.message("m000026");
                $('.validation-summary div').remove();
                //var validationSection = $('.validation-summary').eq(1);
                var validationSection = $('div[data-name="company_details"]').parent().find(".validation-summary");
                validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
                validationSection.show();
                $('.validation-summary div').focus();

                return false;
            }
        }
    }(window.jQuery));
}