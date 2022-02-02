// SiteGeneral.js

$(document).ready(function () {
        $('#NextButton').on('click', async function () {
        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('id')) {
            var siteid = urlParams.get('id');
            await create_site_operation(siteid);

        }
    });
    
    // resize WebResource_address_complete
    $("#WebResource_address_complete").height('72px');

    if ($("#backToCompanyWizard").length <= 0) {
        $('#mainContent').prepend("<div id='backToCompanyWizard' class='input-group pull-left'><p><a href='~/en-US/RegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Company Registration Wizard</a><br><br></p></div>");
    }

    //$('#cid_issiteattested').prop('checked', false);
    //$("#cid_issiteattested").val("0");
    $('#cid_issiteattested  #cid_issiteattested_0').prop('checked', true); //Set No value

    // default operating name to legalname
    $("#name").parent().parent().hide();
    var ovs_legalname = $('#ovs_legalname').val();
    $('#name').val(ovs_legalname);
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            return true;
        }
    }(window.jQuery));
}

function AddressComplete_Hide_address1_line1() {
    $("#address1_line1").parent().parent().hide();
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
