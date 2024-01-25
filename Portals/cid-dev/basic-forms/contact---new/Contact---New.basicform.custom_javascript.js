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
        var privaceStatementLabel = tdg.error_message.message("PRIV_STMT1");
        var privaceStatement = tdg.error_message.message("PRIV_STMT2");

        var results = "";
        if (selected_language == 'fr') {
            results = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq 'CID_PrivacyStatementArticle_URL_FR'");
        }
        else {
            results = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq 'CID_PrivacyStatementArticle_URL_EN'");
        }
        if (results.length > 0) {
            var articleURL = results[0]["qm_value"];
        }

        debugger;
        var psUrl = window.location.origin + "/_portal/modal-form-template-path/" + articleURL;

        var html = '<div style="padding-left: 20px;" ><input type="checkbox" id="privacestatement" name="privacestatement"/><label for="privacestatement" style="font-weight: 200; padding: 0 8px;"><p>' + privaceStatementLabel + '<a href="#" id="theArticle">' + privaceStatement + '</a>.</p></label><br></div>';

        $("table.section").after(html);

        $("#privacestatement").keypress(function (e) {
            if (e.which == 13) {
                var value = !$('#privacestatement').is(':checked');
                $("#privacestatement")[0].checked = value
            }
        });

        $("#theArticle").bind('click', function () {
            var left = (screen.width - 600) / 2;
            var top = (screen.height - 400) / 4;

            window.open(psUrl, "Privace Statement", "scrollbars=1,resizable=no,status=0,toolbar=1,location=1,menubar=0,width=600,height=400,left=" + left + ",top=" + top);
        });

        $("#privacestatement").css("padding", "0 23px");
  
        $("#InsertButton").css("display", "none");
        var SubmitButtonValue = tdg.error_message.message("BTN_SUBMIT");
        $("#InsertButton")[0].valueSubmitButtonValue;
        //add new insert and update button
        $("#InsertButton").after('<input type="button" onclick="" id="InsertUpdateButton" class="submit-btn btn btn-primary form-action-container-left" value=""/>');
        $("#InsertUpdateButton")[0].value = SubmitButtonValue;
        var ParentAccount = '{{user.parentcustomerid.id}}';
        $('#InsertUpdateButton').on('click', function () {
            if ($("#privacestatement").is(":checked")) {
                // function will check of existing contact need to be linke to company
                // instead of add new else it will call the click event of the origional submit button
                invitation.New_and_Existing_Contact_Submit_Logic(ParentAccount);
            }
            else {
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