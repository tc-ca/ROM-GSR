//
// Basic Form-Company NAICS Code - Create.js
//
$(document).ready(function () {
    debugger;
    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    // resize WebResource_address_complete
    $("#WebResource_naicscode").height('72px');

    // hide controls
    control_hide("cid_naicscode", true);

    // insert button
    btn_save_new_setup();
});

function btn_save_new_setup() {
    debugger;

    var button = $('<input type="button" name="btn_save_new" id="btn_save_new" />');
    $("#InsertButton").after(button);
    $("#btn_save_new").click(function () { btn_save_new_onclick(); });

    var button1 = $("#InsertButton");
    button1.prop("value", "Submit and Close");
    var className = button1[0].className;
    var fontSize = button1[0].css("fontSize");
    var color = button1[0].css("color");
    var background_color = button1[0].css("background-color");

    var button2 = $("#btn_save_new");
    button2.css('background-color', '#26374A');
    button2.css('color', color);
    button2.prop("value", "Submit and Add Another");
    button2.prop("class", className);
    button2.prop("fontSize", fontSize);
    button2.prop("background-color", background_color);
}

function btn_save_new_onclick()
{
    debugger;
};

function naicscode_selected(text, id) {
    debugger;

    var index1 = text.indexOf(" - ");
    text = text.substr(0, index1);
    $("#cid_naicscode").attr("value", id);
    $("#cid_naicscode_name").attr("value", text);
    $("#cid_naicscode_entityname").attr("value", 'cid_naicscode');
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
