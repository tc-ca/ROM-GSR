// Basic Form - Site - Create.js

$(document).ready(function () {
    debugger;

    var k_char_apostrophe = "&#39;";

    $("#telephone1").attr("placeholder", "");

    // resize WebResource_address_complete
    $("#WebResource_address_complete").height('72px');
    sessionStorage.setItem("AddressLine1Text", "");

    var cid_legalname = "{{user.cid_legalname}}";
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
        control_show("address1_line1");
        $("#address1_line1").prop('readonly', true);
        $("#address1_line2").prop('readonly', true);
        $("#address1_line3").prop('readonly', true);
        $("#address1_city").prop('readonly', true);
        $("#address1_stateorprovince").prop('readonly', true);
        $("#address1_postalcode").prop('readonly', true);

        debugger;
        var parent_id = '{{ user.parentcustomerid.id }}';
        var filter = "accountid eq guid'" + parent_id + "'";
        var data = OData_List("account", filter);

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
        
        $("#address1_line1").val(address1_line1);
        $("#address1_line2").val(address1_line2);
        $("#address1_line3").val(address1_line3);
        $("#address1_city").val(address1_city);
        $("#address1_stateorprovince").val(address1_stateorprovince);
        $("#address1_postalcode").val(address1_postalcode);
        $("#address1_country").val(address1_country);
    }
    else {
        $("#WebResource_address_complete").show();
        control_hide("address1_line1");
        $("#address1_line1").prop('readonly', false);
        $("#address1_line2").prop('readonly', false);
        $("#address1_line3").prop('readonly', false);
        $("#address1_city").prop('readonly', false);
        $("#address1_stateorprovince").prop('readonly', false);
        $("#address1_postalcode").prop('readonly', false);

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

// odata
function OData_List(entity, filter) {
    var url = entity + "?$filter=" + filter;
    var oDataUrl = "~/_odata/" + url;
    var response = null;

    $.ajax({
        type: "GET",
        url: oDataUrl,
        dataType: "json",
        async: false
    }).done(function (json) {
        response = json.value;
    });
    return response;
}