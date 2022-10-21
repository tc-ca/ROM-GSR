$(document).ready(function(){
debugger;
    //maskPhoneFields();

    //Phone masking
    $("#telephone1").attr("maxlength", "10");
    $("#fax").attr("maxlength", "10");
    $("#fax").attr("maxlength", "10");

    //Format phone numbers
    tdg.cid.address_init("#telephone1", "mobilephone", "#fax");

});

//function maskPhoneFields(){
//    $("#mobilephone").mask("(000) 000-0000");
//};
