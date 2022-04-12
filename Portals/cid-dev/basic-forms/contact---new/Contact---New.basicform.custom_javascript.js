//
// Basic Form-Contact - New.js
//
$(document).ready(function () {
    debugger;

    page_setup();

    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');

    $("#emailaddress1").width('100%');

    $("#telephone1").attr("placeholder", "");
    $("#mobilephone").attr("placeholder", "");

    tdg.c.addValidator("emailaddress1");

    // autocomplete off
    try {
        $("#firstname").attr("autocomplete", "new-password");
        $("#lastname").attr("autocomplete", "new-password");
        $("#emailaddress1").attr("autocomplete", "new-password");
        $("#telephone1").attr("autocomplete", "new-password");
        $("#mobilephone").attr("autocomplete", "new-password");
        $("#fax").attr("autocomplete", "new-password");
    } catch (e) { }
});

function page_setup() {
    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    const files = ["/tdgcore_common.js", "/tdgcore_message.js"];
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = file;

        $("body").append(script);
    }

    // server error?
    tdg.c.message_panel();
}