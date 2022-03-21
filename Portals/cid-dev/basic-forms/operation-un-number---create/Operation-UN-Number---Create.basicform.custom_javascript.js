// Basic Form-Operation UN Number - Create.js

$(document).ready(function () {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    // resize WebResource_unnumber
    $("#WebResource_unnumber").height('72px');

    // hide controls
    //control_hide("ovs_unnumber", true);

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
    $("#ovs_unnumber_entityname").attr("value", 'cid_naicscode');
}

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            debugger;
            var validation = true;

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
