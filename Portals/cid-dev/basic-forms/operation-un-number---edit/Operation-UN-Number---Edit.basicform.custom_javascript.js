//
// Basic Form-Operation UN Number - Edit.js
//
$(document).ready(function () {
    debugger;

    page_setup();

    var tdg_unnumberid_label = tdg.error_message.message("tdg_unnumberid"); // UN Number
    sessionStorage.setItem("tdg_unnumberid_label", tdg_unnumberid_label);

    // hide controls
    tdg.c.control_hide("ovs_unnumber", true);

    // resize WebResource_unnumber
    $("#WebResource_unnumber").height('175px');

    var ovs_unnumber = $("#ovs_unnumber").val();
    var item = tdg_unnumber_get(ovs_unnumber);
    var text = item.tdg_undisplayname + ' - ' +
        common.text_language(item.tdg_shippingnamedescriptiontxt, selected_language);
    sessionStorage.setItem("tdg_unnumberid", text);

    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');
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

function tdg_unnumberid_selected(text, id) {
    debugger;

    var index1 = text.indexOf(" - ");
    text = text.substr(0, index1);
    $("#ovs_unnumber").attr("value", id);
    $("#ovs_unnumber_name").attr("value", text);
    $("#ovs_unnumber_entityname").attr("value", 'tdg_unnumber');
}

function tdg_unnumber_get(id) {
    var filter = "tdg_unnumberid eq guid'" + id + "'";
    var item = common.OData_List("tdg_unnumber", filter);
    return item[0];
}

if (window.jQuery) {
    (function ($) {
        entityFormClientValidate = function () {
            debugger;
            var validation = true;

            var validBuffer = $("#cid_annualquantityvolume").val().replaceAll(',', '');
            $("#cid_annualquantityvolume").val(validBuffer);

            //remove commas from number of shippments field
            validBuffer = $("#cid_annualnumberofshipment").val().replaceAll(',', '');
            $("#cid_annualnumberofshipment").val(validBuffer);

            return validation;
        }
    }(window.jQuery));
}
