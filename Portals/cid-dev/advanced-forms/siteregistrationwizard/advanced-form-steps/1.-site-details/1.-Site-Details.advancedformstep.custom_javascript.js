// SiteWizard-Site Details.js

$(document).ready(function () {
    debugger;

    $('#NextButton').on('click', async function () {
        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('id')) {
            var siteid = urlParams.get('id');
            await create_site_operation(siteid);
        }
    });

    // resize WebResource_address_complete
    $("#WebResource_address_complete").height('72px');
    var address1_line1 = $("#address1_line1").val();
    sessionStorage.setItem("AddressLine1Text", address1_line1);

    $("#telephone1").attr("placeholder", "");

    if ($("#backToCompanyWizard").length <= 0) {
        $('#mainContent').prepend("<div id='backToCompanyWizard' class='input-group pull-left'><p><a href='~/en-US/RegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Company Registration Wizard</a><br><br></p></div>");
    }

    $('#cid_issiteattested  #cid_issiteattested_0').prop('checked', true); //Set No value

    // default operating name to legalname
    control_hide("name");
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            return true;
        }
    }(window.jQuery));
}

function AddressComplete_Hide_address1_line1() {
    control_hide("address1_line1");
}

function AddressComplete_address1_line1() {
    $("#address1_line1").val(sessionStorage.getItem("Line1"));
}

function AddressComplete_Selected() {
    $("#address1_line1").val(sessionStorage.getItem("Line1"));
    $("#address1_line2").val(sessionStorage.getItem("Line2"));
    $("#address1_line3").val(sessionStorage.getItem("Line3"));
    $("#address1_city").val(sessionStorage.getItem("City"));
    $("#address1_stateorprovince").val(sessionStorage.getItem("ProvinceName"));
    $("#address1_postalcode").val(sessionStorage.getItem("PostalCode"));
    $("#address1_country").val(sessionStorage.getItem("CountryName"));
}

function control_hide(fieldName, is_lookup) {
    if (is_lookup) {
        $("#" + fieldName).parent().parent().parent().hide();
    }
    else {
        $("#" + fieldName).hide();
        $("#" + fieldName + "_label").hide();
    }
}

function control_show(fieldName, is_lookup) {
    if (is_lookup) {
        $("#" + fieldName).parent().parent().parent().show();
    }
    else {
        $("#" + fieldName).show();
        $("#" + fieldName + "_label").show();
    }
}
