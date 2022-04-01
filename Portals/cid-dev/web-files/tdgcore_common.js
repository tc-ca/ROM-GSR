//To apply the Asterisk(*) Sign using custom JS:
//$('#FieldName_label').after('<span id="spanId" style="color: red;"> *</span>');

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

            } catch (e) {}
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
            } catch (e) {}

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

            try {
                $('#ValidationSummaryEntityFormView')[0].remove();
            } catch (e) {}
            $('#ValidationSummaryEntityFormView').hide();

            try {
                $('#ValidationSummaryEntityFormControl_EntityFormView')[0].innerHTML = "";
            } catch (e) {}
            $('#ValidationSummaryEntityFormControl_EntityFormView').hide();
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
        }
    }
}

// Wrapper AJAX function
(function (webapi, $) {
    function safeAjax(ajaxOptions) {
        //debugger;

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

// tdg.webapi = tdgcore.webapi
if (typeof (tdg.webapi) == "undefined") {
    tdg.webapi = {
        // entity_name must be in plural
        list: function (entity_name, filter) {
            debugger;

            var response = null;
            $.ajax({
                type: "GET",
                url: "/_api/" + entity_name + "?$filter=" + filter,
                contentType: "application/json",
                async: false
            }).done(function (json) {
                response = json.value;
            });
            return response;
        },

        // Sample code to insert
        //var data = {
        //    "cid_Company@odata.bind": "/accounts(" + parent_id + ")",
        //    "cid_CreatedByRegistrant@odata.bind": "/contacts(" + contact_id + ")",
        //    "cid_erapid": cid_erapid
        //};
        //tdg.webapi.create("cid_companyeraps", data);
        create: function (entity_name, data) {
            debugger;

            webapi.safeAjax({
                type: "POST",
                url: "/_api/" + entity_name,
                contentType: "application/json",
                data: JSON.stringify(data),

                success: function (res, status, xhr) {
                    debugger;
                    //print id of newly created table record
                    console.log("webapi.safeAjax.create->record_id: " + xhr.getResponseHeader("entityid"))
                }
            });
        },

        update: function (entity_name, record_id, data) {
            debugger;

            webapi.safeAjax({
                type: "PATCH",
                url: "/_api/" + entity_name + "(" + record_id + ")",
                contentType: "application/json",
                data: JSON.stringify(data),

                success: function (res) {
                    debugger;
                    console.log(res);
                }
            });
        },

        delete: function (entity_name, record_id) {
            debugger;

            webapi.safeAjax({
                type: "DELETE",
                url: "/_api/" + entity_name + "(" + record_id + ")",
                contentType: "application/json",

                success: function (res) {
                    debugger;
                    console.log(res);
                }
            });
        },

        inactive: function (entity_name, record_id) {
            var data = {
                "statecode": 1,
                "statuscode": 821350004
            };
            tdg.webapi.update(entity_name, record_id, data);
        }
    }
}

// tdg.root = tdgcore.root
if (typeof (tdg.root) == "undefined") {
    tdg.root = {
        setup: function (cid_has_cra_bn, cid_crabusinessnumber, parentcustomerid, contact_id) {
            debugger;
            var rows = tdg.webapi.list("cid_companyeraps", "statuscode eq 1");
            var length = rows.length;

            if ((cid_has_cra_bn) && (length == 0)) {
                var data = tdg.root.erap_list(cid_crabusinessnumber);
                for (var i = 0; i < data.length; i++) {
                    var item = data[i];
                    var root_name = item.root_name;
                    tdg.root.cid_companyeraps_insert(parentcustomerid, root_name, contact_id);
                }
            }
        },

        erap_list: function (bn) {
            debugger;

            var root = tdg.root.company(bn);
            if (root != null) {
                var root_organization_id = root.root_organization_id;
                var i = root_organization_id.lastIndexOf('.');
                root_organization_id = root_organization_id.substr(0, i);

                var data;
                var filter = "root_organization_id eq " + root_organization_id;

                data = tdg.c.OData_List("root_erap", filter);
                if (data.length == 0) {
                    return data;
                }

                return data;
            }
            return data;
        },

        cid_companyeraps_insert: function (parent_id, cid_erapid, contact_id) {
            debugger;
            var data = {
                "cid_Company@odata.bind": "/accounts(" + parent_id + ")",
                "cid_CreatedByRegistrant@odata.bind": "/contacts(" + contact_id + ")",
                "cid_erapid": cid_erapid
            };
            tdg.webapi.create("cid_companyerap", data);
        },

        company: function (bn) {
            var data;
            var filter = "root_org_business_cra_num eq " + bn;

            data = tdg.c.OData_List("root_company", filter);
            if (data.length == 0) {
                return data;
            }

            return data[0];
        }
    }
}

