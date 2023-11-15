//
// Basic Form-Profile Custom.js
//

$(document).ready(function () {
    debugger;

    //Phone masking
    $("#telephone1").attr("maxlength", "10");
    $("#fax").attr("maxlength", "10");
    $("#fax").attr("maxlength", "10");

    //Format phone numbers
    tdg.cid.address_init("#telephone1", "mobilephone", "#fax");
});
