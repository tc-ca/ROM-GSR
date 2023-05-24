//
// Basic Form-Operation Class- Create.js
//
var _reload = false;
var _count = 0;

$(document).ready(function () {
    debugger;

    page_setup();

    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');

    // resize WebResource_unnumber
    $("#WebResource_primaryclass").height('450px');

    // insert button
    tdg.c.btn_save_new_setup();
     $("#btn_save_new").bind("keydown", function (event) {
                debugger;
                var keyCode = event.keyCode || event.which;
                if (keyCode == '13')
                  {btn_save_new_onclick();}
            });

    // hide controls 
    tdg.c.control_hide("ovs_class_division", true);
    tdg.c.control_hide("ovs_compatibility_group", true);

    //add cancel button 
    var message = tdg.error_message.message("BTN_CANCEL");
    $('#btn_save_new').after('<div role="group" class="btn-group entity-action-button">&nbsp;</div><input type="button" data-dismiss="modal" value="" id="CancelButton" name="CancelButton" class="submit-btn btn btn-primary form-action-container-left"/>')
    $("#CancelButton")[0].value = message;
    $('#CancelButton').on('click', function (event) { parent.$(".form-close").eq(0).click(); });
    
      //accessiblity issue with cancel button - adding keydown event to allow closing button using keyboard
    $("#CancelButton").on("keydown", function (event) {
     
       var keyCode = event.keyCode || event.which;
       if (keyCode == '13')
       {parent.$('.form-close').eq(0).click();}
      });

        
      var Formclosebutton  =parent.$('.form-close');
    //accessiblity issue with close button - adding keydown event to allow closing button using keyboard
      Formclosebutton.keydown(function (event) {
            var keyCode = event.keyCode || event.which;
            if (keyCode == '13')
            {   event.preventDefault();
                $(this).eq(0).click();
                }

            });
      

  

});

$(window).unload(function () {
    debugger;
    if (_reload) {
        var wp = window.parent;
        try {
            //wp.form_refresh();
            wp.location.reload()
        } catch (e) { }
    }
});

//Function called on form submit
if (window.jQuery) {
    (function ($) {

        entityFormClientValidate = function () {
          
            console.log($(this));
            
             
            debugger;
            var validation = true;

            return validation;
        }
    }(window.jQuery));
}

function show_error(msg) {
    var validationSection = $('.validation-summary');
    validationSection.html($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + msg + "</div>"));
    validationSection.show();
    $('.validation-summary div').focus();
}

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

function btn_save_new_onclick() {
    //disable button to prevent adding duplicate classes by double click
    $("#btn_save_new").prop('disabled', true);
    //tdg.c.error_message_clear();
    var value = false;
    if (typeof entityFormClientValidate === 'function') {
        if (entityFormClientValidate()) {
            if (typeof Page_ClientValidate === 'function') {
                value = Page_ClientValidate('');
            }
        }
    };

    if (!value) return;

    var operation_id = null;
    var url_search = window.location.search.replace("?", "");
    var list = url_search.split("&");
    for (var i in list) {
        var item = list[i];
        if (item.substr(0, 6) == "refid=") {
            operation_id = item.substr(6);
            break;
        }
    }

    if (operation_id == null) return;
    debugger;

    var ovs_class_division = $("#ovs_class_division").val();
    if (ovs_class_division == null) return;

    // insert
    var contact_id = '{{user.id}}';
    var ovs_compatibility_group = $("#ovs_compatibility_group").val();

    ovs_operationclass_insert(operation_id, ovs_class_division, ovs_compatibility_group, contact_id);
}

function ovs_primaryclass_selected(text, id) {
    debugger;

    tdg.c.removeValidator("ovs_compatibility_group");

    var index1 = text.indexOf(" - ");
    text = text.substr(0, index1);
    $("#ovs_class_division").attr("value", id);
    $("#ovs_class_division_name").attr("value", text);
    $("#ovs_class_division_entityname").attr("value", 'ovs_primaryclass');

    if (text.substr(0, 2) == "1.") {
        tdg.c.addValidator("ovs_compatibility_group");
    }
    else {
        tdg.c.removeValidator("ovs_compatibility_group");
    }
}

function ovs_operationclass_insert(operation_id, ovs_primaryclass, ovs_compatibility_group, contact_id) {
    debugger;

    if (ovs_compatibility_group == "") {
        var data = {
            "ovs_OperationClass@odata.bind": "/ovs_mocregistrations(" + operation_id + ")",
            "cid_CreatedByRegistrant@odata.bind": "/contacts(" + contact_id + ")",
            "ovs_class_division@odata.bind": "/ovs_primaryclasses(" + ovs_primaryclass + ")"
        };
    }
    else {
        var data = {
            "ovs_OperationClass@odata.bind": "/ovs_mocregistrations(" + operation_id + ")",
            "cid_CreatedByRegistrant@odata.bind": "/contacts(" + contact_id + ")",
            "ovs_class_division@odata.bind": "/ovs_primaryclasses(" + ovs_primaryclass + ")",
            "ovs_compatibility_group@odata.bind": "/ovs_class_compatibility_groups(" + ovs_compatibility_group + ")"
        };
    }
    tdg.webapi.create("ovs_operationclasses", data, success_cb, error_cb);
}

function form_clear() {
    debugger;

    try {
        $("#ovs_class_division").attr("value", null);
        $("#ovs_class_division_name").attr("value", null);

        $("#ovs_compatibility_group").attr("value", null);
        $("#ovs_compatibility_group_name").attr("value", null);

        var f = document.getElementById("WebResource_primaryclass");
        var c = f.contentWindow;
        c.clear_field(true);
        //enable button after all operations are finished
        $("#btn_save_new").prop('disabled', false);
    } catch (e) { }
}

function success_cb() {
    debugger;

    _count = _count + 1;
    msg = tdg.error_message.message("m000005"); // Record added
    msg = msg.replace("{0}", _count);
    tdg.c.message_panel_set("EntityFormControl", msg);

    // clear form
    form_clear();

    _reload = true;
}

function error_cb(msg) {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    msg = tdg.c.text_language(msg, selected_language);
    if (msg = "Common Data Service error occurred.") {
        msg = tdg.error_message.message("m000048");
    }
    show_error(msg);

    //enable button after all operations are finished
    $("#btn_save_new").prop('disabled', false);
}
