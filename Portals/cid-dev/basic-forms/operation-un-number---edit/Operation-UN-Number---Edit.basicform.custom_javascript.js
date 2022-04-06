//
// Basic Form-Operation UN Number - Edit.js
//
$(document).ready(function () {
    debugger;

    insert_tdgcore_common_js();

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    // hide controls
    control_hide("ovs_unnumber", true);

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    // resize WebResource_unnumber
    $("#WebResource_unnumber").height('72px');

    var ovs_unnumber = $("#ovs_unnumber").val();
    var item = tdg_unnumber_get(ovs_unnumber);
    var text = item.tdg_undisplayname + ' - ' +
        common.text_language(item.tdg_shippingnamedescriptiontxt, selected_language);
    sessionStorage.setItem("tdg_unnumberid", text);

    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');

    // autocomplete off
    //$("#cid_unitofmeasurement").attr("autocomplete", "new-password");
    //$("#cid_annualquantityvolume").attr("autocomplete", "new-password");
    //$("#cid_annualnumberofshipment").attr("autocomplete", "new-password");
    //$("#ovs_supplychaindirection").attr("autocomplete", "new-password");
});

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

function insert_tdgcore_common_js() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "/tdgcore_common.js";

    $("body").append(script);
}