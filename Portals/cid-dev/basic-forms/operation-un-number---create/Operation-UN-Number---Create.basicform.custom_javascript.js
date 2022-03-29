//
// Basic Form-Operation UN Number - Create.js
//
$(document).ready(function () {
    debugger;

    // hide controls
    control_hide("ovs_unnumber", true);

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    // resize WebResource_unnumber
    $("#WebResource_unnumber").height('72px');

    sessionStorage.setItem("tdg_unnumberid", "");

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

//Function called on form submit
if (window.jQuery) {
    (function ($) {

        webFormClientValidate = function () {
            debugger;
            var validation = true;

            //remove commas from quantity field
            var validBuffer = $("#cid_annualquantityvolume").attr("value").replaceAll(',', '');
            alert(validBuffer);
            $("#cid_annualquantityvolume").attr("value", validBuffer);

            //remove commas from number of shippments field
            validBuffer = $("#cid_annualnumberofshipment").attr("value").replaceAll(',', '');
            $("#cid_annualnumberofshipment").attr("value", validBuffer);

            return validation;
        }
    }(window.jQuery));
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
