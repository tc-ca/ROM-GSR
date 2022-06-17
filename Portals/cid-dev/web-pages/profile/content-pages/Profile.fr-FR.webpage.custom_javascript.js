//
// Profile.js
//
$(document).ready(function () {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    // resize WebResource_address_complete
    //$("#WebResource_address_complete").height('72px');
    $("#emailaddress1").width('100%');

    $("#telephone1").attr("placeholder", "");
    $("#mobilephone").attr("placeholder", "");

    tdg.c.addValidator("emailaddress1");
    $('#emailaddress1').attr("readonly", true);

    $("#firstname").attr("autocomplete", "new-password");
    $("#lastname").attr("autocomplete", "new-password");
    $("#emailaddress1").attr("autocomplete", "new-password");
    $("#telephone1").attr("autocomplete", "new-password");
    $("#mobilephone").attr("autocomplete", "new-password");
    $("#fax").attr("autocomplete", "new-password");
});

