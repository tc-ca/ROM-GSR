// Basic Form - SiteCreate.js

$(document).ready(function () {
    debugger;

    // resize WebResource_address_complete
    $("#WebResource_address_complete").height('72px');

    var cid_legalname = ("{{user.cid_legalname}}");
    $("#ovs_legalname").val(cid_legalname);
    $("#name").val(cid_legalname);
    $("#cid_sitename").val(cid_legalname);

    // hide controls
    //$("#ovs_legalname").parent().parent().hide();
    $("#name").parent().parent().hide();
});

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

//$(document).ready(function () {
//    await createOperation();
//});

//async function createOperation() {
//    alert('before functioncall');
//    // Add_Operation_entity
//    let opId = await Add_Operation_entity('21d2e769-2a74-ec11-8942-000d3a840e6b');
//    console.log(opId);
//    alert("alert id " + opId);
//}
