// tdgcore_common.js

if (typeof (tdgcore) == "undefined") {
    tdgcore = {
        __namespace: true
    };
}

if (typeof (tdgcore.common) == "undefined") {
    tdgcore.common = {
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
        },

        // setRequiredLevel("none");
        removeValidator: function (fieldName) {
            $.each(Page_Validators, function (index, validator) {
                if (validator.id == "RequiredFieldValidator" + fieldName) {
                    Page_Validators.splice(index, 1);
                }
            });

            $("#" + fieldName + "_label").parent().removeClass("required");
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

        error_message: function (message) {
            debugger;
            var validationSection = $('#ValidationSummaryEntityFormView');
            validationSection[0].innerHTML = "";

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

        control_autocomplete: function () {
            $("input").attr("autocomplete", "new-password");

            //$('input, select, textarea').each(
            //    function (index) {
            //        var input = this;
            //        var index1 = input.name.indexOf("ctl00$");
            //        var index2 = input.name.lastIndexOf("$");
            //        var ctrl = input.name.substr(index2+1);
            //        var type = this.getAttribute("type");
            //        if ((index1 >= 0) && (type != "hidden")) {
            //            debugger;
            //            $("#" + ctrl).autocomplete({
            //                disabled: true
            //            });
            //        }
            //    }
            //);
        },

        replace_special_char: function (value) {
            var k_char_apostrophe = "&#39;";
            value = value.replace(k_char_apostrophe, "'");
            return value;
        },

        init: function () {
        }
    }
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
