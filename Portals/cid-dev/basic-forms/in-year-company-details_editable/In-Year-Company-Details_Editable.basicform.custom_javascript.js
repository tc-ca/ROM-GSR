//
// Basic Form-In Year Company Details_Editable.js
//

$(document).ready(function () {
    debugger;

    window.addEventListener('load', (event) => {
        //update_company
        var selected_language = '{{website.selected_language.code}}';
        tdg.cid.phone_init("telephone1", selected_language);
    });

    var selected_language = '{{website.selected_language.code}}';
    tdg.cid.phone_init("telephone1", selected_language);

    //page_setup();
    //tdg.c.control_hide("ovs_name_fr");
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
