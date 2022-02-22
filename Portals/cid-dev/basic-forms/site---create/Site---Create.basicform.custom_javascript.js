// Basic Form - Site Create.js

$(document).ready(function () {
    debugger;

    var k_char_apostrophe = "&#39;";

    $("#telephone1").attr("placeholder", "");

    // resize WebResource_address_complete
    $("#WebResource_address_complete").height('72px');
    sessionStorage.setItem("AddressLine1Text", "");

    var cid_legalname = ("{{user.cid_legalname}}");
    cid_legalname = cid_legalname.replace(k_char_apostrophe, "'");

    $("#ovs_legalname").val(cid_legalname);
    $("#name").val(cid_legalname);
    $("#cid_sitename").val(cid_legalname);
    $("#address1_country").val("Canada");   // default Canada

    // hide controls
    control_hide("name");
    control_hide("cid_siteclaim");

    // cid_same_as_company
    $("#cid_same_as_company").change(function () {
        cid_same_as_company_change();
    });
    cid_same_as_company_change();

    //control_autocomplete();
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

function cid_same_as_company_change() {
    debugger;
    var value = $("#cid_same_as_company")[0].checked;
    if (value) {
        $("#WebResource_address_complete").hide();
        control_hide("address1_line2");
        control_hide("address1_line3");
        control_hide("address1_city");
        control_hide("address1_stateorprovince");
        control_hide("address1_postalcode");
        control_hide("address1_country");

        $("#address1_line1").val("N/A");
        $("#address1_city").val("N/A");
        $("#address1_stateorprovince").val("N/A");
        $("#address1_postalcode").val("N/A");
    }
    else {
        $("#WebResource_address_complete").show();
        control_show("address1_line2");
        control_show("address1_line3");
        control_show("address1_city");
        control_show("address1_stateorprovince");
        control_show("address1_postalcode");
        control_show("address1_country");

        $("#address1_line1").val("");
        $("#address1_city").val("");
        $("#address1_stateorprovince").val("");
        $("#address1_postalcode").val("");
    }
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

function control_autocomplete() {
    //return;

    $('input, select, textarea').each(
    function (index) {
        var input = this;
        var index1 = input.name.indexOf("ctl00$");
        var index2 = input.name.lastIndexOf("$");
        var ctrl = input.name.substr(index2+1);
        var type = this.getAttribute("type");
        if ((index1 >= 0) && (type != "hidden")) {
            debugger;
            $("#" + ctrl).prop("autocomplete", "new-password");
        }
    });
}
