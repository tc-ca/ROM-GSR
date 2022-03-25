//
// Basic Form-Company NAICS Code - Create.js
//

//To apply the Asterisk(*) Sign using custom JS:
//$('#FieldName_label').after('<span id="spanId" style="color: red;"> *</span>');

$(document).ready(function () {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    // resize WebResource_address_complete
    $("#WebResource_naicscode").height('72px');

    // hide controls
    tdg.c.control_hide("cid_naicscode", true);

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
    var className = button1.css("className");
    var fontSize = button1.css("fontSize");
    fontSize = (fontSize.replace("px", "") - 1) + "px";
    var color = button1.css("color");
    var background_color = button1.css("background-color");

    var button2 = $("#btn_save_new");
    button2.prop("value", "Submit and Add Another");
    button2.css('background-color', background_color);
    button2.css('color', color);
    button2.css("class", className);
    button2.css("fontSize", fontSize);
    button2.css("background-color", background_color);
}

function btn_save_new_onclick()
{
    debugger;

    if (typeof (Page_Validators) == 'undefined') return;

    // clear message
    tdg.c.error_message_clear();
    //$('#ValidationSummaryEntityFormControl_EntityFormView')[0].innerHTML = "";
    //$('#ValidationSummaryEntityFormControl_EntityFormView').hide();

    if (Page_ClientValidate('')) {

    }
    else {

    }

    try {
        var f = document.getElementById("WebResource_naicscode");
        var c = f.contentWindow;
        c.clear_field();
    } catch { }

    // clear lookup
    $("#cid_naicscode").attr("value", null);
    $("#cid_naicscode_name").attr("value", "");
    //$("#cid_naicscode_entityname").attr("value", 'cid_naicscode');
};

function naicscode_selected(text, id) {
    debugger;

    var index1 = text.indexOf(" - ");
    text = text.substr(0, index1);
    $("#cid_naicscode").attr("value", id);
    $("#cid_naicscode_name").attr("value", text);
    $("#cid_naicscode_entityname").attr("value", 'cid_naicscode');
}

function entityFormClientValidate() {
    debugger;
}

if (window.jQuery) {
    (function ($) {
        entityFormClientValidate  = function () {
            debugger;
            var validation = true;

            return validation;
        }
    }(window.jQuery));
}

// tdgcore_common.js

// tdg = tdgcore
if (typeof (tdg) == "undefined") {
    tdg = {
        __namespace: true
    };
}

// tdg.c = tdgcore.common
if (typeof (tdg.c) == "undefined") {
    tdg.c = {
        // how to calling function inside an iFrame
        iframe_call_function_inside: function () {
            debugger;
            var f = document.getElementById("WebResource_address_complete");
            var c = f.contentWindow;
            c.targetFunction();
        },

        text_language: function (text, language) {
            //var selected_language = '{{website.selected_language.code}}';
            //sessionStorage.setItem("selected_language", selected_language);

            var value = "";
            var index1 = text.indexOf("::");
            if (language == "en-US") {
                value = text.substr(0, index1);
            }
            else {
                value = text.substr(index1 + 2);
            }
            return value;
        },

        // setRequiredLevel("required");
        addValidator: function (fieldName, fieldLabel) {
            try {
                if (typeof (Page_Validators) == 'undefined') return;

                // Create new validator
                $("#" + fieldName + "_label").parent().addClass("required");

                var newValidator = document.createElement('span');
                newValidator.style.display = "none";
                newValidator.id = "RequiredFieldValidator" + fieldName;
                newValidator.controltovalidate = "casetypecode";
                newValidator.errormessage = "<a href='#" + fieldName + "_label'>" + fieldLabel + " is a mandatory field.</a>";
                newValidator.validationGroup = "";
                newValidator.initialvalue = "";
                newValidator.evaluationfunction = function () {
                    var value = $("#" + fieldName).val();
                    if (value == null || value == "") {
                        return false;
                    } else {
                        return true;
                    }
                };

                // Add the new validator to the page validators array:
                Page_Validators.push(newValidator);

                // Wire-up the click event handler of the validation summary link
                $("a[href='#" + fieldName + "_label']").on("click", function () { scrollToAndFocus(fieldName + '_label', fieldName); });

            } catch (e) { }
        },

        // setRequiredLevel("none");
        removeValidator: function (fieldName) {
            try {
                $.each(Page_Validators, function (index, validator) {
                    if (validator.id == "RequiredFieldValidator" + fieldName) {
                        Page_Validators.splice(index, 1);
                    }
                });

                $("#" + fieldName + "_label").parent().removeClass("required");
            } catch (e) { }

        },

        // odata
        OData_List: function (entity, filter) {
            var url = entity + "?$filter=" + filter;
            var oDataUrl = "~/_odata/" + url;
            //var oDataUrl = "https://rd-tdgcore-dev.powerappsportals.com/_odata/" + url;
            var response = null;

            $.ajax({
                type: "GET",
                url: oDataUrl,
                dataType: "json",
                async: false
            }).done(function (json) {
                response = json.value;
            });
            return response;
        },

        error_message_clear: function () {
            debugger;
            $('#ValidationSummaryEntityFormView div').remove();
            $('#ValidationSummaryEntityFormControl div').remove();           
        },

        error_message: function (message, clear) {
            debugger;
            var validationSection = $('#ValidationSummaryEntityFormView');
            //validationSection[0].innerHTML = "";
            if (clear) {
                $('#ValidationSummaryEntityFormView div').remove();
            }

            validationSection.append($("<div class='notification alert-danger' role='alert'>" + message + "</div>"));
            validationSection.show();
        },

        control_hide: function (fieldName, is_lookup) {
            if (is_lookup) {
                $("#" + fieldName).parent().parent().parent().hide();
            }
            else {
                $("#" + fieldName).hide();
                $("#" + fieldName + "_label").hide();
            }
        },

        control_show: function (fieldName, is_lookup) {
            if (is_lookup) {
                $("#" + fieldName).parent().parent().parent().show();
            }
            else {
                $("#" + fieldName).show();
                $("#" + fieldName + "_label").show();
            }
        },

        section_hide: function (sectionName) {
            $(".section[data-name='" + sectionName + "']").closest("fieldset").hide();
        },

        section_show: function (sectionName) {
            $(".section[data-name='" + sectionName + "']").closest("fieldset").show();
        },

        control_autocomplete: function () {
            $("input").attr("autocomplete", "new-password");
        },

        replace_special_char: function (value) {
            var k_char_apostrophe = "&#39;";
            value = value.replace(k_char_apostrophe, "'");
            return value;
        }
    }
}

