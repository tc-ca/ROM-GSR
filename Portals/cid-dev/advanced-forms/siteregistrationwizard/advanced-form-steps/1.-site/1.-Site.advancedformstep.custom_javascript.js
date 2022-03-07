// SiteWizard-Site.js

$(document).ready(function () {
    debugger;
    var urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('newsite') && urlParams.get('newsite') == 'true')
        $("#NextButton").click();

    $('#NextButton').on('click', async function () {
        if (urlParams.has('id')) {
            await create_site_operation(urlParams.get('id'));
        }
    });

    if ($("#backToCompanyWizard").length <= 0) {
        $('#mainContent').prepend("<div id='backToCompanyWizard' class='input-group pull-left'><p><a href='~/en-US/RegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Company Registration Wizard</a><br><br></p></div>");
    }

    // resize WebResource_address_complete
    $("#WebResource_address_complete").height('72px');
    var address1_line1 = $("#address1_line1").val();
    sessionStorage.setItem("AddressLine1Text", address1_line1);

    $("#telephone1").attr("placeholder", "");

    // default operating name to legalname
    tdg.c.control_hide("name");
    tdg.c.control_hide("cid_same_as_company");
    tdg.c.control_hide("cid_siteclaim");
    tdg.c.control_hide("address1_line1");

    // autocomplete off
    $("#cid_sitename").attr("autocomplete", "new-password");
    $("#address1_line2").attr("autocomplete", "new-password");
    $("#address1_line3").attr("autocomplete", "new-password");
    $("#address1_city").attr("autocomplete", "new-password");
    $("#address1_stateorprovince").attr("autocomplete", "new-password");
    $("#address1_postalcode").attr("autocomplete", "new-password");
    $("#address1_longitude").attr("autocomplete", "new-password");
    $("#address1_latitude").attr("autocomplete", "new-password");
    $("#telephone1").attr("autocomplete", "new-password");
    $("#fax").attr("autocomplete", "new-password");
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            return true;
        }
    }(window.jQuery));
}

function AddressComplete_Hide_address1_line1() {
    tdg.c.control_hide("address1_line1");
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
