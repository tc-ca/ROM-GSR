//
// Basic Form - Site - Edit.js
//
$(document).ready(function () {
    debugger;

    clear_address_type_required_fields();

    $("#telephone1").attr("placeholder", "");

    // resize WebResource_address_complete
    $("#WebResource_address_complete").height('72px');
    sessionStorage.setItem("AddressLine1Text", "");

    var cid_legalname = "{{user.cid_legalname}}";
    cid_legalname = tdg.c.replace_special_char(cid_legalname);

    $("#ovs_legalname").val(cid_legalname);
    $("#name").val(cid_legalname);
    $("#cid_sitename").val(cid_legalname);
    $("#address1_country").val("Canada");   // default Canada

    // hide controls
    tdg.c.control_hide("name");
    tdg.c.control_hide("cid_siteclaim");

    // cid_same_as_company
    $("#cid_same_as_company").change(function () {
        cid_same_as_company_change();
    });
    cid_same_as_company_change();


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

function WebResource_address_complete_readonly(value) {
    //debugger;
    try {
        var f = document.getElementById("WebResource_address_complete");
        var c = f.contentWindow;
        c.readonly(value);
    } catch (e) { }
}

function WebResource_address_complete_address1_line1(value) {
    //debugger;
    try {
        var f = document.getElementById("WebResource_address_complete");
        var c = f.contentWindow;
        c.address1_line1(value);
    } catch (e) { }
}

function cid_same_as_company_change() {
    //debugger;
    var value = $("#cid_same_as_company")[0].checked;
    if (value) {
        //$("#WebResource_address_complete").hide();
        WebResource_address_complete_readonly(true);

        $("#address1_line2").prop('readonly', true);
        $("#address1_line3").prop('readonly', true);
        $("#address1_city").prop('readonly', true);
        $("#address1_stateorprovince").prop('readonly', true);
        $("#address1_postalcode").prop('readonly', true);

        debugger;
        var parent_id = '{{ user.parentcustomerid.id }}';
        var filter = "accountid eq guid'" + parent_id + "'";
        var data = tdg.c.OData_List("account", filter);

        var address1_line1 = "N/A";
        var address1_city = "N/A";
        var address1_stateorprovince = "N/A";
        var address1_postalcode = "N/A";
        var address1_country = "Canada";

        if (data.length > 0) {
            var item = data[0];
            address1_line1 = item.address1_line1;
            address1_line2 = item.address1_line2;
            address1_line2 = (address1_line2 == null ? "" : address1_line2);
            address1_line3 = item.address1_line3;
            address1_line3 = (address1_line3 == null ? "" : address1_line3);
            address1_city = item.address1_city;
            address1_stateorprovince = item.address1_stateorprovince;
            address1_postalcode = item.address1_postalcode;
            address1_country = item.address1_country;
        }

        WebResource_address_complete_address1_line1(address1_line1);
        $("#address1_line1").val(address1_line1);
        $("#address1_line2").val(address1_line2);
        $("#address1_line3").val(address1_line3);
        $("#address1_city").val(address1_city);
        $("#address1_stateorprovince").val(address1_stateorprovince);
        $("#address1_postalcode").val(address1_postalcode);
        $("#address1_country").val(address1_country);
    }
    else {
        //$("#WebResource_address_complete").show();
        WebResource_address_complete_readonly(false);

        $("#address1_line2").prop('readonly', false);
        $("#address1_line3").prop('readonly', false);
        $("#address1_city").prop('readonly', false);
        $("#address1_stateorprovince").prop('readonly', false);
        $("#address1_postalcode").prop('readonly', false);

        WebResource_address_complete_address1_line1("");
        $("#address1_line1").val("");
        $("#address1_line2").val("");
        $("#address1_line3").val("");
        $("#address1_city").val("");
        $("#address1_stateorprovince").val("");
        $("#address1_postalcode").val("");
        $("#address1_country").val("Canada");
    }
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
