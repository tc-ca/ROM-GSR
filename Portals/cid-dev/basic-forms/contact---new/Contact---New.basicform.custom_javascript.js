//
// Basic Form-Contact - New.js
//

var _reload = false;

$(document).ready(function () {
    debugger;

    $("#ValidationSummaryEntityFormView").css("display", "none");
    page_setup();

    $('input[type="text"]').attr('autocomplete', 'off');

    $("#emailaddress1").width('100%');

    var selected_language = '{{website.selected_language.code}}';

    //Phone number formatting
    tdg.cid.phone_init("telephone1", selected_language);
    tdg.cid.phone_init("mobilephone", selected_language);
    tdg.cid.phone_init("fax", selected_language);

    tdg.c.addValidator("emailaddress1");

    //Name formatting
    tdg.cid.name_init("firstname");
    tdg.cid.name_init("lastname");

    // autocomplete off
    try {
        $("#firstname").attr("autocomplete", "new-password");
        $("#lastname").attr("autocomplete", "new-password");
        $("#emailaddress1").attr("autocomplete", "new-password");
        $("#telephone1").attr("autocomplete", "new-password");
        $("#mobilephone").attr("autocomplete", "new-password");
        $("#fax").attr("autocomplete", "new-password");

         //add Privace Statement
         var privaceStatementLabel = tdg.error_message.message("BTN_CANCEL");
         //var psUrl = window.location.origin + "/registration/privacystatement"; 
         //$("table.section").after('<div style="padding-left: 20px;" ><input type="checkbox" name="PrivaceStatement" id="privacestatement" name="privacestatement"/><label for="privacestatement" style="font-weight: 200; padding: 0 8px;"><p>I acknowledge that I have read and agree to the <a href="' + psUrl +'" target="_blank">Privacy Statement</a>.</p></label><br></div>');
         debugger;
         var psUrl =  window.location.origin + "/_portal/modal-form-template-path/d78574f9-20c3-4dcc-8d8d-85cf5b7ac141?id=ff7a276a-8480-4d1a-819a-be6df76ffe17&entityformid=5502413f-72e1-ec11-bb3d-000d3a848097&languagecode=1033"; 
         $("table.section").after('<div style="padding-left: 20px;" ><input type="checkbox" name="PrivaceStatement" id="privacestatement" name="privacestatement"/><label for="privacestatement" style="font-weight: 200; padding: 0 8px;"><p>I acknowledge that I have read and agree to the <a href="' + psUrl +'" onclick="window.open(this.href, new, popup); return false;">Privacy Statement</a>.</p></label><br></div>');
         $("#privacestatement").css("padding", "0 23px");
    
        //*************************submit button **********************/      
        $("#InsertButton").css("display", "none");
        //get submit button value to use it with the new button  
        var SubmitButtonValue = tdg.error_message.message("BTN_SUBMIT");
        $("#InsertButton")[0].valueSubmitButtonValue;
        //add new insert and update button
        $("#InsertButton").after('<input type="button" onclick="" id="InsertUpdateButton" class="submit-btn btn btn-primary form-action-container-left" value=""/>');
        $("#InsertUpdateButton")[0].value = SubmitButtonValue;
        var ParentAccount = '{{user.parentcustomerid.id}}';
        //define click event
        $('#InsertUpdateButton').on('click', function () {

            if($("#privacestatement").is(":checked"))
            {         
                // function will check of existing contact need to be linke to company
                //instead of add new else it will call the click event of the origional submit button
                invitation.New_and_Existing_Contact_Submit_Logic(ParentAccount);
            }   
            else
            {
                var psError = tdg.error_message.message("PRIV_STMT_ERR");
                tdg.c.dialog_OK(psError);
            }

        });
        var cancelLabel = tdg.error_message.message("BTN_CANCEL");
        $('#InsertUpdateButton').after('<input type="button" data-dismiss="modal" class=".form-control" value="" id="CancelButton" style="margin-left: 10px;" name="CancelButton" class="submit-btn btn btn-primary form-action-container-left"/>')
        $("#CancelButton")[0].value = cancelLabel;
        $('#CancelButton').on('click', function (event) {
            parent.$(".form-close").eq(0).click();
            sessionStorage.setItem("NewContactFlag", false);
            sessionStorage.setItem("FullName", "");
            sessionStorage.setItem("Email", "");
        });
        //********************************************* */
    } catch (e) { }
});

$(window).unload(function () {
    debugger;
    if (_reload) {
        var wp = window.parent;
        try {
            wp.form_refresh();
            // this will close the dialog even there is any validation erros. Therefore form_refresh() was reinstated. 
            //wp.location.reload()
        } catch (e) { }
    }
});

if (window.jQuery) {
    (function ($) {
        entityFormClientValidate = function () {
            debugger;
            var validation = true;

            _reload = true;

            return validation;
        }
    }(window.jQuery));
}

function page_setup() {
    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    const files = ["/tdgcore_common.js", "/tdgcore_message.js", "/tdgcore_invitation.js"];
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

(function (webapi, $) {
    function safeAjax(ajaxOptions) {
        var deferredAjax = $.Deferred();

        shell.getTokenDeferred().done(function (token) {
            // add headers for AJAX
            if (!ajaxOptions.headers) {
                $.extend(ajaxOptions, {
                    headers: {
                        "__RequestVerificationToken": token
                    }
                });
            } else {
                ajaxOptions.headers["__RequestVerificationToken"] = token;
            }
            $.ajax(ajaxOptions)
                .done(function (data, textStatus, jqXHR) {
                    validateLoginSession(data, textStatus, jqXHR, deferredAjax.resolve);
                }).fail(deferredAjax.reject); //AJAX
        }).fail(function () {
            deferredAjax.rejectWith(this, arguments); // on token failure pass the token AJAX and args
        });

        return deferredAjax.promise();
    }
    webapi.safeAjax = safeAjax;
})(window.webapi = window.webapi || {}, jQuery)

// used to force alphabet only
function ValidateAlphabetInput(event) {
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/^[a-zA-Z àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]*$/);
    return pattern.test(value);
}

function ValidateAlphabetPast(event) {
    var textContent = event.originalEvent.clipboardData.getData("text/plain");
    var letters = new RegExp(/^[a-zA-Z àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]*$/);

    var compareResult = (letters.test(textContent));

    return compareResult;
}

//email address validation
function EmailAddressValidation(event) {
    var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    var emailaddressText = $("#emailaddress1").val();
    var result = pattern.test(emailaddressText);
    if (result == false) {
    }
}