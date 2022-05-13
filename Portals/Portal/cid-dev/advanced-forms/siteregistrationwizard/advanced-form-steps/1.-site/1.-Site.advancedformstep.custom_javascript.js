//
// SiteWizard-Site.js
//
$(document).ready(function () {
    debugger;

    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('newsite') && urlParams.get('newsite') == 'true' && !urlParams.has('stepid')) {
        $('#redirectInstruction').show();
        $('#instructions').hide();
        $('#EntityFormView').hide();

        $("#NextButton").click();
    }
    else
        $('#redirectInstruction').hide();

    // resize WebResource_address_complete
    $("#WebResource_address_complete").height('72px');
    var address1_line1 = $("#address1_line1").val();
    sessionStorage.setItem("AddressLine1Text", address1_line1);

    clear_address_type_required_fields();
    $("#telephone1").attr("placeholder", "");

    // default operating name to legalname
    tdg.c.control_hide("name");
    tdg.c.control_hide("cid_same_as_company");
    tdg.c.control_hide("cid_siteclaim");
    tdg.c.control_hide("address1_line1");

    $("#cid_sitename").attr("autocomplete", "new-password");
    $("#telephone1").attr("autocomplete", "new-password");
    $("#fax").attr("autocomplete", "new-password");

    // address
    $("#address1_line2").attr("autocomplete", "new-password");
    $("#address1_line3").attr("autocomplete", "new-password");
    $("#address1_city").attr("autocomplete", "new-password");
    $("#address1_stateorprovince").attr("autocomplete", "new-password");
    $("#address1_postalcode").attr("autocomplete", "new-password");
    $("#address1_longitude").attr("autocomplete", "new-password");
    $("#address1_latitude").attr("autocomplete", "new-password");

    // legal land description
    $("#ovs_lld_quarter").attr("autocomplete", "new-password");
    $("#ovs_lld_section").attr("autocomplete", "new-password");
    $("#ovs_lld_township").attr("autocomplete", "new-password");
    $("#ovs_lld_range").attr("autocomplete", "new-password");
    $("#ovs_lld_meridian").attr("autocomplete", "new-password");
    $("#ovs_lld_province").attr("autocomplete", "new-password");

    // lat/long
    $("#address1_latitude").attr("autocomplete", "new-password");
    $("#address1_longitude").attr("autocomplete", "new-password");

    $("#ovs_address_type").change(function () {
        ovs_address_type_change(true);
    });
    ovs_address_type_change(false);
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

function clear_address_type_required_fields() {
    for (var i = 0; i < 2; i++) {
        // address
        tdg.c.removeValidator("address1_line1");
        tdg.c.removeValidator("address1_city");
        tdg.c.removeValidator("address1_stateorprovince");
        tdg.c.removeValidator("address1_postalcode");

        // legal land description
        //tdg.c.removeValidator("ovs_lld_quarter");
        tdg.c.removeValidator("ovs_lld_section");
        tdg.c.removeValidator("ovs_lld_township");
        tdg.c.removeValidator("ovs_lld_range");
        tdg.c.removeValidator("ovs_lld_meridian");
        tdg.c.removeValidator("ovs_lld_province");

        // lat/long
        tdg.c.removeValidator("address1_latitude");
        tdg.c.removeValidator("address1_longitude");
    }
}

function address1_default(value) {
    $("#address1_line1").val(value);
    $("#address1_city").val(value);
    $("#address1_stateorprovince").val(value);
    $("#address1_postalcode").val(value);
}

function ovs_address_type_change(reset_data) {
    debugger;

    // hide sections
    tdg.c.section_hide("section_address");
    tdg.c.section_hide("section_legal_land_description");
    tdg.c.section_hide("section_latitude_longitude");

    clear_address_type_required_fields();

    var ovs_address_type = $("#ovs_address_type").val();
    switch (ovs_address_type) {
        case "1": // legal land description
            tdg.c.section_show("section_legal_land_description");

            //tdg.c.addValidator("ovs_lld_quarter","Quarter/LSC");
            tdg.c.addValidator("ovs_lld_section", "Section");
            tdg.c.addValidator("ovs_lld_township", "Township");
            tdg.c.addValidator("ovs_lld_range", "Range");
            tdg.c.addValidator("ovs_lld_meridian", "Meridian");
            tdg.c.addValidator("ovs_lld_province", "Province / Territory");

            if (reset_data) {
                address1_default("N/A");
            }
            break;
        case "2": // lat/long
            tdg.c.section_show("section_latitude_longitude");

            tdg.c.addValidator("address1_latitude", "Latitude");
            tdg.c.addValidator("address1_longitude", "Longitude");

            if (reset_data) {
                address1_default("N/A");
            }
            break;
        default:
            tdg.c.section_show("section_address");

            tdg.c.addValidator("address1_line1", "Street 1");
            tdg.c.addValidator("address1_city", "City");
            tdg.c.addValidator("address1_stateorprovince", "Province");
            tdg.c.addValidator("address1_postalcode", "Postal Code");

            if (reset_data) {
                address1_default("");
            }
    }
}