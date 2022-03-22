//
// Basic Form-Operation UN Number - Edit.js
//
$(document).ready(function () {
    debugger;

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

if (typeof (common) == "undefined") {
    common = {
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
        }
    }
}