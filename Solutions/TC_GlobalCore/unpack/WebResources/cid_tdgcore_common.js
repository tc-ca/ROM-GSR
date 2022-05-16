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

        btn_save_new_setup: function() {
            var button = $('<input type="button" name="btn_save_new" id="btn_save_new" />');
            $("#InsertButton").after(button);

            var button1 = $("#InsertButton");
            var text1 = tdg.error_message.message("m000003");   // Submit and Close
            button1.prop("value", text1);
            var className = button1[0].className
            var fontSize = button1.css("fontSize");
            var color = button1.css("color");
            var background_color = button1.css("background-color");

            var button2 = $("#btn_save_new");
            var text1 = tdg.error_message.message("m000004");   // Submit and Add Another
            button2.prop("value", text1);
            button2[0].className = className;
            button2.css("fontSize", fontSize);
            button2.css('color', color);
            button2.css("background-color", background_color);

            // bind the click event to this custom buttton
            $("#btn_save_new").bind("click", function () {
                debugger;
                btn_save_new_onclick();
            });
        },

        text_language: function (text, language) {
            var value = text;
            var index1 = text.indexOf("::");
            if (index1 > -1) {
                if (language == "en-US") {
                    value = text.substr(0, index1);
                }
                else {
                    value = text.substr(index1 + 2);
                }
            }

            return value;
        },

        // setRequiredLevel("required");
        addValidator: function (fieldName) {
            try {
                if (typeof (Page_Validators) == 'undefined') return;

                var fieldLabel = $("#" + fieldName + "_label")[0].innerHTML;

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

        message_panel_clear: function () {
            try {
                $("#MessagePanel")[0].innerText = "";
            } catch (e) {}
        },

        message_panel_set: function (validationSection, msg) {
            // clear msg
            try {
                $('#MessagePanel').remove();
            } catch (e) { }

            try {
                var target = $("#" + validationSection);
                var text = '<div id="MessagePanel" class="message alert alert-info" role="alert">' + msg + '</div>';
                target.append($(text));
                target.show();
            } catch (e) {}
        },

        message_panel: function () {
            //debugger;

            var language = sessionStorage.getItem("selected_language");

            try {
                var text = $("#MessagePanel")[0].innerText;
                var index1 = text.indexOf("::");
                if (index1 < 0) {
                    text = text + "::" + text;
                    index1 = text.indexOf("::");
                }
                if (language == "en-US") {
                    value = text.substr(0, index1);
                }
                else {
                    value = text.substr(index1 + 2);
                }
                $("#MessagePanel")[0].innerText = value;
            } catch (e) { }
        },

        error_message_clear: function () {
            //debugger;
            var v = this.ValidationSummary();
            try {
                v[0].innerHTML = "";
            } catch (e) { }

            this.message_panel_clear();

            //$v.hide();

            //$('#ValidationSummaryEntityFormView div').remove();
            //try {
            //    $('#ValidationSummaryEntityFormView')[0].remove();
            //} catch (e) {}
            //$('#ValidationSummaryEntityFormView').hide();

            //try {
            //    $('#ValidationSummaryEntityFormControl_EntityFormView')[0].innerHTML = "";
            //} catch (e) {}
            //$('#ValidationSummaryEntityFormControl_EntityFormView').hide();
        },

        ValidationSummary: function () {
            var v = $('#ValidationSummaryEntityFormView');
            if (!v.hasOwnProperty("length")) {
                v = $('#ValidationSummaryEntityFormControl_EntityFormView');
            }
            return v;
        },

        error_message: function (message, clear) {
            debugger;
            message = tdg.c.message(message);

            var v = this.ValidationSummary();
            if (v == null) return;

            if (clear) {
                v.remove();
            }

            //v.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + message + "</div>"));
            //v.show();
            //$('#alertMessages').focus();
        },

        error_message_advanced_form: function (message, clear) {
            debugger;
            message = tdg.error_message.message(message);
            if (clear) {
                $('#ValidationSummaryEntityFormView div').remove();
            }
            var alertMessages = "alertMessages";
            var validationSection = $('#ValidationSummaryEntityFormView');
            validationSection.append($("<div id='" + alertMessages + "' tabindex='0' class='notification alert-danger' role='alert'>" + message + "</div>"));
            validationSection.show();
            $('#' + alertMessages).focus();
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
            value = value.replaceAll(k_char_apostrophe, "'");
            return value;
        },

        // sample calling dialog_YN
        //dialog_YN(message, (ans) => {
	    //	if (ans) {
	    //		// console.log("Yes");
	    //		Call_Check_User_Response_flow(newrecordid, 'yes', '', Language);
	    //	} else {
	    //		Call_Check_User_Response_flow(newrecordid, 'No', '', Language);
	    //		//console.log("No");
	    //	}
	    //});
        dialog_YN: function (message, handler) {
            message = message.replaceAll("\n", "<br>");
            var header = tdg.error_message.message("CID_PORTAL");
            var yes = tdg.error_message.message("Yes");
            var no = tdg.error_message.message("No");

            $(`<section class="wb-lbx modal-dialog modal-content overlay-def" id="myModal">
	            <header class="modal-header">
	            <h2 class="modal-title">${header}</h2>
	            </header>
	            <div class="modal-body">
	            ${message}
	            </div>
	            <div class="modal-footer">
	            <button id="btnYes" type="button" class="btn btn-sm btn-primary pull-left popup-modal-dismiss">${yes}</button>
	            <button id="btnNo" type="button" class="btn btn-sm btn-primary pull-left popup-modal-dismiss" data-dismiss="modal">${no}</button>
	            </section>
	            `).appendTo('body');

            $("#myModal").css('top', '15%');
            $("#myModal").css('left', '40%');
            $("#myModal").css('position', 'fixed');
            $("#myModal").css('z-index', '9999');

            $("#btnYes").click(function () {
                // handler(true);
                // $("#myModal").modal("hide");
                $("#myModal").remove();
                handler(true);
            });

            //Pass false to callback function
            $("#btnNo").click(function () {
                //handler(lse);
                $("#myModal").remove();
                handler(false);
            });
        },

        dialog_OK: function (message) {
            message = message.replaceAll("\n", "<br>");
            var header = tdg.error_message.message("CID_PORTAL");
            var OK = tdg.error_message.message("OK");

            $(`<section class="wb-lbx modal-dialog modal-content overlay-def" id="myModal">
	            <header class="modal-header">
	            <h2 class="modal-title">${header}</h2>
	            </header>
	            <div class="modal-body">
	            ${message}
	            </div>
	            <div class="modal-footer">
	            <button id="btnOK" type="button" class="btn btn-sm btn-primary pull-left popup-modal-dismiss">${OK}</button>
	            </section>
	            `).appendTo('body');

            $("#myModal").css('top', '15%');
            $("#myModal").css('left', '40%');
            $("#myModal").css('position', 'fixed');
            $("#myModal").css('z-index', '9999');

            $("#btnOK").click(function () {
                $("#myModal").remove();
            });
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
        create: function (entity_name, data, success_cb, error_cb) {
            debugger;

            webapi.safeAjax({
                type: "POST",
                url: "/_api/" + entity_name,
                contentType: "application/json",
                data: JSON.stringify(data),

                success: function (res, status, xhr) {
                    debugger;
                    //print id of newly created table record
                    console.log("webapi.safeAjax.create->record_id: " + xhr.getResponseHeader("entityid"));
                    try {
                        success_cb();
                    } catch (e) {}
                },

                error: function (res, status, errorThrown) {
                    debugger;
                    var msg = res.responseJSON.error.innererror.message;
                    console.log(msg);
                    try {
                        error_cb(msg);
                    } catch (e) { }
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

// tdg.error_message = tdgcore.error_message
if (typeof (tdg.error_message) == "undefined") {
    tdg.error_message = {
        k_english: "en-US",
        k_tdgcore_error_message: "tdgcore_error_message",

        message: function (code) {
            //debugger;

            var list = tdg.message.list();
            var value = code;
            var selected_language = sessionStorage.getItem("selected_language");

            for (var index1 = 0; index1 < list.length; index1++) {
                var item = list[index1];
                if (item.code == code) {
                    value = (selected_language == this.k_english ? item.message_en : item.message_fr);
                    break;
                }
            }
            return value;

            var list = sessionStorage.getItem(this.k_tdgcore_error_message);
            if (list == "null") {
                tdg.error_message.read_file();
            }

            // wait and retrieve list
            var found = false;
            do {
                this.sleep(5);
                debugger;
                var list = sessionStorage.getItem(this.k_tdgcore_error_message);
                if (list != "null") {
                    found = true;
                }
            }
            while (!found);
        },

        sleep: function (second) {
            var delay = second * 1000;
            var start = new Date().getTime();
            while (new Date().getTime() < start + delay);
        },

        read_file: function () {
            debugger;

            var url = window.document.URL;
            url = url.replace("https://", "");
            var index1 = url.indexOf("/");
            var file = "https://" + url.substring(0, index1);
            file += "/tdgcore_error_message.json";

            fetch(file)
                .then(response => {
                    return response.json();
                })
                .then(jsondata => this.receivedText(jsondata));
        },

        receivedText: function (data) {
            debugger;

            var value = JSON.stringify(data);
            sessionStorage.setItem(this.k_tdgcore_error_message, value)
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
            tdg.webapi.create("cid_companyeraps", data);
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

