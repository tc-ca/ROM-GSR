//To apply the Asterisk(*) Sign using custom JS:
//$('#FieldName_label').after('<span id="spanId" style="color: red;"> *</span>');

// tdgcore_common.js

// tdg = tdgcore
var canProvinces = [
    "Alberta::Alberta",
    "British Columbia::Colombie-Britannique",
    "Manitoba::Manitoba",
    "New Brunswick::Nouveau-Brunswick",
    "Newfoundland and Labrador::Terre‑Neuve‑et‑Labrador",
    "Northwest Territories::Territoires du Nord‑Ouest",
    "Nova Scotia::Nouvelle-Écosse",
    "Nunavut::Nunavut",
    "Ontario::Ontario",
    "Prince Edward Island::Île-du-Prince-Édouard",
    "Quebec::Québec",
    "Saskatchewan::Saskatchewan",
    "Yukon::Yukon"
];

var canProvincesCodes = ["AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT"];

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

        weblink_hide: function (url) {
            //var value = "#navbar li.weblink";     // out of box template
            var value = "#def-top li.weblink";      // Canada government template
            $(value)
                .each(function () {
                    var item = $(this).find("a")[0];
                    var href = item.href;
                    if (href.indexOf(url) != -1) {
                        $(this).remove();
                        return;
                    }
                });
        },

        page_instructions: function (message) {
            // $(".instructions").eq(0).find("p")[0].innerHTML = m000021;
            var value = "<div class='alert alert-info' style='background:#d7faff'><p>" + message + "</p></div>";
            $(".instructions").html(value);
        },

        btn_save_new_setup: function () {
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
                //if (language == "en-US") {
                if (language == "en") {
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
            var url = entity;
            if (filter != "") {
                url += "?$filter=" + filter;
            }
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
            } catch (e) { }
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
            } catch (e) { }
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
                //if (language == "en-US") {
                if (language == "en") {
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
        },

        replace_special_char: function (value) {
            value = $('<textarea />').html(value).text();
            // for apostrophe, use two apostrophe to escape it:
            // value = value.replace("'", "''");
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
        },

        validate_address: function (language, country, province, postalCode, city) {
            var provinceValid = false;
            var postalcodeFormatValid = false;
            var provinceMatchesPostalcode = false;

            var localizedProvince;

            var postalRegex = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ ]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

            //TODO Add logic so that the response can indicate the point of failure instead of a bool

            if (country.localeCompare("Canada", undefined, { sensitivity: 'accent' })) {
                //Validate the province
                for (var prov of canProvinces) {
                    localizedProvince = this.text_language(prov, language);
                    if (province.localeCompare(localizedProvince, undefined, { sensitivity: 'accent' }) == 0) {
                        provinceValid = true;
                        break;
                    }
                }
                if (provinceValid == false) return false;

                //Validate the postal code format with regex
                if (postalRegex.test(postalCode)) {
                    postalcodeFormatValid = true;

                } else return false;

                //Validate that postal code matches
                switch (postalCode.toUpperCase().charAt(0)) {
                    //NL&L
                    case "A":
                        if (province == "NL") provinceMatchesPostalcode = true;
                        break;
                    //NS
                    case "B":
                        if (province == "NS") provinceMatchesPostalcode = true;
                        break;
                    //PEI
                    case "C":
                        if (province == "PE") provinceMatchesPostalcode = true;
                        break;
                    //NB
                    case "E":
                        if (province == "NB") provinceMatchesPostalcode = true;
                        break;
                    //QC
                    case "G":
                    case "H":
                    case "J":
                        if (province == "QC") provinceMatchesPostalcode = true;
                        break;
                    //ON
                    case "K":
                    case "L":
                    case "M":
                    case "N":
                    case "P":
                        if (province == "ON") provinceMatchesPostalcode = true;
                        break;
                    //MB
                    case "R":
                        if (province == "MB") provinceMatchesPostalcode = true;
                        break;
                    //SK
                    case "S":
                        if (province == "SK") provinceMatchesPostalcode = true;
                        break;
                    //AB
                    case "T":
                        if (province == "AB") provinceMatchesPostalcode = true;
                        break;
                    //BC
                    case "V":
                        if (province == "BC") provinceMatchesPostalcode = true;
                        break;
                    //NT & NU
                    case "X":
                        if (province == "NT" || province == "NU") provinceMatchesPostalcode = true;
                        break;
                    //YT
                    case "Y":
                        if (province == "YT") provinceMatchesPostalcode = true;
                        break;
                    default:
                    //Postal Code is invalid
                }

                return provinceMatchesPostalcode;

                //TODO Logic for checking if city belongs to province
                //TODO Logic for checking duplicate address in cid
            } else {
                return false;
            }
        }
    }
}

// tdg.grid
if (typeof (tdg.grid) == "undefined") {
    tdg.grid = {
        // 	$(".entity-grid").on("loaded", function () { 	
        //      var rows = tdg.grid.rows("grid_name);
        //  });
        rows: function (name) {
            var value = "#" + name + " table tbody tr"
            var row_count = $(value).length;
            return row_count;
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
                    } catch (e) { }
                },

                error: function (res, status, errorThrown) {
                    debugger;

                    sessionStorage.setItem("innererror", false);
                    try {
                        var msg = res.responseJSON.error.innererror.message;
                        sessionStorage.setItem("innererror", true);
                    } catch (e) {
                        var msg = res.responseJSON.error.message;
                    }

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
        k_english: "en",
        k_english_US: "en-US",
        k_tdgcore_error_message: "tdgcore_error_message",

        is_english: function (selected_language) {
            //debugger;
            var value = false;
            switch (selected_language) {
                case this.k_english:
                    value = true;
                    break;
                case this.k_english_US:
                    value = true;
                    break;
            }
            return value;
        },

        message: function (code) {
            //debugger;

            var list = tdg.message.list();
            var value = code;
            var selected_language = sessionStorage.getItem("selected_language");

            for (var index1 = 0; index1 < list.length; index1++) {
                var item = list[index1];
                if (item.code == code) {
                    value = (this.is_english(selected_language) ? item.message_en : item.message_fr);
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
                    tdg.root.cid_companyeraps_insert(parentcustomerid, root_name, contact_id, true);
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

        erap_get_by_root_name: function (root_name) {
            debugger;

            var data;
            var filter = "root_name eq '" + root_name + "'";

            data = tdg.c.OData_List("root_erap", filter);
            if (data.length == 0) {
                return data;
            }

            return data;
        },

        cid_companyeraps_insert: function (parent_id, cid_erapid, contact_id, cid_root_ind) {
            debugger;
            var data = {
                "cid_Company@odata.bind": "/accounts(" + parent_id + ")",
                "cid_CreatedByRegistrant@odata.bind": "/contacts(" + contact_id + ")",
                "cid_root_ind": cid_root_ind,
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

// tdg.cid = tdgcore.cid
if (typeof (tdg.cid) == "undefined") {
    tdg.cid = {
        address_init: function (site_ind) {
            debugger;

            this.clear_address_type_required_fields();

            // default
            $("#address1_country").val("Canada");
            $('#address1_country').attr("readonly", true);

            //Setup province dropdown
            tdg.c.control_hide("address1_line1");
            tdg.c.control_hide("address1_stateorprovince");

            $("#ovs_address1_province").on("change", function (i, val) {
                debugger
                var ovs_address1_province = $("#ovs_address1_province :selected").text()
                $("#address1_stateorprovince").val(ovs_address1_province);
            });

            $("#address1_postalcode").attr("maxlength", "6");
            $("#address1_postalcode").on('keyup', function () {
                var n = $(this).val().replace(/\W/g, '');
                $(this).val(n);
                var match = n.match(/^(\w{3})(\w{3})$/);
                if (match) {
                    $(this).val(match[1] + ' ' + match[2]);
                }
            });

            // resize WebResource_address_complete
            $("#WebResource_address_complete").height('72px');

            var address1_line1 = $("#address1_line1").val();
            sessionStorage.setItem("AddressLine1Text", address1_line1);
            sessionStorage.setItem("AddressComplete_readonly", false);

            // address
            $("#address1_line2").attr("autocomplete", "new-password");
            $("#address1_line3").attr("autocomplete", "new-password");
            $("#address1_city").attr("autocomplete", "new-password");
            $("#address1_stateorprovince").attr("autocomplete", "new-password");
            $("#address1_postalcode").attr("autocomplete", "new-password");
            $("#address1_longitude").attr("autocomplete", "new-password");
            $("#address1_latitude").attr("autocomplete", "new-password");

            if (site_ind) {
                // legal land description
                $("#ovs_lld_quarter").attr("autocomplete", "new-password");
                $("#ovs_lld_section").attr("autocomplete", "new-password");
                $("#ovs_lld_township").attr("autocomplete", "new-password");
                $("#ovs_lld_range").attr("autocomplete", "new-password");
                $("#ovs_lld_meridian").attr("autocomplete", "new-password");
                $("#ovs_lld_province").attr("autocomplete", "new-password");

                // lat/long
                $("#address1_latitude").attr("autocomplete", "new-password");
                $("#address1_longitude").attr("autocomplete", "new-password");
            }
            else {
                tdg.c.addValidator("address1_line1");
                tdg.c.addValidator("address1_city");
                tdg.c.addValidator("ovs_address1_province");
                tdg.c.addValidator("address1_stateorprovince");
                tdg.c.addValidator("address1_postalcode");
            }
        },

        address_same_as_company: function (parent_id) {
            debugger;

            var value = $("#cid_same_as_company")[0].checked;
            sessionStorage.setItem("AddressComplete_readonly", value);

            if (value) {
                $("#address1_line2").prop('readonly', true);
                $("#address1_line3").prop('readonly', true);
                $("#address1_city").prop('readonly', true);
                $("#ovs_address1_province").prop('disabled', true);
                $("#address1_stateorprovince").prop('readonly', true);
                $("#address1_postalcode").prop('readonly', true);

                var filter = "accountid eq guid'" + parent_id + "'";
                var data = tdg.c.OData_List("account", filter);

                var address1_line1 = "N/A";
                var address1_city = "N/A";
                var ovs_address1_province = "";
                var address1_stateorprovince = "N/A";
                var address1_postalcode = "N/A";
                var address1_country = "Canada";

                if (data.length > 0) {
                    var item = data[0];
                    address1_line1 = item.address1_line1;
                    address1_line2 = item.address1_line2;
                    address1_line2 = (address1_line2 == null ? "" : address1_line2);
                    address1_line3 = item.address1_line3;
                    address1_line3 = (address1_line3 == null ? "" : address1_line3);
                    address1_city = item.address1_city;
                    ovs_address1_province = item.ovs_address1_province.Value;
                    address1_stateorprovince = item.address1_stateorprovince;
                    address1_postalcode = item.address1_postalcode;
                    address1_country = item.address1_country;
                }

                $("#address1_line1").val(address1_line1);
                $("#address1_line2").val(address1_line2);
                $("#address1_line3").val(address1_line3);
                $("#address1_city").val(address1_city);
                $("#ovs_address1_province").val(ovs_address1_province);
                $("#address1_stateorprovince").val(address1_stateorprovince);
                $("#address1_postalcode").val(address1_postalcode);
                $("#address1_country").val(address1_country);
            }
            else {
                $("#address1_line2").prop('readonly', false);
                $("#address1_line3").prop('readonly', false);
                $("#address1_city").prop('readonly', false);
                $("#ovs_address1_province").prop('disabled', false);
                $("#address1_stateorprovince").prop('readonly', false);
                $("#address1_postalcode").prop('readonly', false);
            }

            var address1_line1 = $("#address1_line1").val();
            sessionStorage.setItem("AddressLine1Text", address1_line1);

            this.WebResource_address_complete_readonly(value);
        },

        address_type_change: function (reset_data) {
            debugger;

            // hide sections
            tdg.c.section_hide("section_address");
            tdg.c.section_hide("section_legal_land_description");
            tdg.c.section_hide("section_latitude_longitude");

            this.clear_address_type_required_fields();

            var ovs_address_type = $("#ovs_address_type").val();
            switch (ovs_address_type) {
                case "1": // legal land description
                    tdg.c.section_show("section_legal_land_description");

                    //tdg.c.addValidator("ovs_lld_quarter");
                    tdg.c.addValidator("ovs_lld_section");
                    tdg.c.addValidator("ovs_lld_township");
                    tdg.c.addValidator("ovs_lld_range");
                    tdg.c.addValidator("ovs_lld_meridian");
                    tdg.c.addValidator("ovs_lld_province");

                    this.address1_default("N/A");
                    break;
                case "2": // lat/long
                    tdg.c.section_show("section_latitude_longitude");

                    tdg.c.addValidator("address1_latitude");
                    tdg.c.addValidator("address1_longitude");

                    this.address1_default("N/A");

                    break;
                default:
                    tdg.c.section_show("section_address");

                    tdg.c.addValidator("address1_line1");
                    tdg.c.addValidator("address1_city");
                    tdg.c.addValidator("ovs_address1_province");
                    tdg.c.addValidator("address1_stateorprovince");
                    tdg.c.addValidator("address1_postalcode");

                    if (reset_data) {
                        this.address1_default("");
                    }
            }
        },

        clear_address_type_required_fields: function () {
            for (var i = 0; i < 2; i++) {
                // address
                tdg.c.removeValidator("address1_line1");
                tdg.c.removeValidator("address1_city");
                tdg.c.removeValidator("ovs_address1_province");
                tdg.c.removeValidator("address1_stateorprovince");
                tdg.c.removeValidator("address1_postalcode");

                // legal land description
                //tdg.c.removeValidator("ovs_lld_quarter");
                tdg.c.removeValidator("ovs_lld_section");
                tdg.c.removeValidator("ovs_lld_township");
                tdg.c.removeValidator("ovs_lld_range");
                tdg.c.removeValidator("ovs_lld_meridian");
                tdg.c.removeValidator("ovs_lld_province");

                // lat/long
                tdg.c.removeValidator("address1_latitude");
                tdg.c.removeValidator("address1_longitude");
            }
        },

        convert_province_to_code: function (language) {
            var address1_stateorprovince = $("#address1_stateorprovince").val();

            // If there is no value that is prepopulated, this function exits
            if (address1_stateorprovince == "") {
                return;
            }
            for (var i = 0; i < 13; i++) {
                var localizedProvince = tdg.c.text_language(canProvinces[i], language);
                if (localizedProvince.localeCompare(address1_stateorprovince), undefined, { sensitivity: 'accent' } == 0
                    || canProvincesCodes[i].localeCompare(address1_stateorprovince.toLowerCase())) { //finds match
                    $("#ovs_address1_province").val(i);
                    return;
                }
            }
            $("#ovs_lld_province").val("");
        },

        address1_default: function (value) {
            $("#address1_line1").val(value);
            $("#address1_city").val(value);
            $("#address1_stateorprovince").val(value);
            $("#ovs_address1_province").val(0);
            $("#address1_postalcode").val(value);
        },

        WebResource_address_complete_readonly: function (value) {
            debugger;

            try {
                var f = document.getElementById("WebResource_address_complete");
                var c = f.contentWindow;
                c.readonly(value);
            } catch (e) { }
        },

        Append_Modes_html_checkboxes: function (air, marine, rail, road) {
            debugger;

            //get Air translation from file
            console.log("function called");
            var cid_Air_label = tdg.error_message.message("m000102");
            var cid_Maritime_label = tdg.error_message.message("m000103");
            var cid_Rail_label = tdg.error_message.message("m000104");
            var cid_Road_label = tdg.error_message.message("m000105");

            console.log("after messages retrive");

            //check if air is selected
            var airchecked = "";
            if (air == true) {
                airchecked = 'checked="checked"';
            }
            //check if rail
            var railchecked = "";
            if (rail == true) {
                railchecked = 'checked="checked"';
            }
            //check if marine
            var marinechecked = "";
            if (marine == true) {
                marinechecked = 'checked="checked"';
            }
            //check if road
            var roadchecked = "";
            if (road == true) {
                roadchecked = 'checked="checked"';
            }

            var row1 = ' <tr style="background-color: rgb(240, 240, 240);">' +
                '<td colspan="1" rowspan="1" class="clearfix cell checkbox-cell">' +
                '<div class="info">' +
                '<label for="cid_Road" id="cid_Road_label" class="field-label" role="none">' + cid_Road_label + '</label>' +
                '</div>' +
                '<div class="control">' +
                '<span class="checkbox ">' +
                '<input id="cid_Road" type="checkbox" name="cid_Road" ' + roadchecked + ' class="checkbox readonly" disabled="disabled" aria-disabled="true">' +
                '</span>' +
                '<input type="hidden" name="cid_Road_Value" id="cid_Road_Value" value="' + road + '">' +
                '</div>' +
                '</td>' +
                '<td class="cell zero-cell"></td>' +
                '<td colspan = "1" rowspan = "1" class="clearfix cell checkbox-cell" >' +
                '<div class="info">' +
                '<label for="cid_Rail" id="cid_Rail_label" class="field-label" role="none">' + cid_Rail_label + '</label>' +
                '</div>' +
                '<div class="control">' +
                '<span class="checkbox ">' +
                '<input id="cid_Rail" type="checkbox" name="cid_Rail" ' + railchecked + '   class="checkbox readonly" disabled="disabled" aria-disabled="true">' +
                '</span>' +
                '<input type="hidden" name="cid_Rail_Value" id="cid_Rail_Value" value="' + rail + '">' +
                '</div>' +
                '</td>' +
                '</tr>';
            console.log("row 1");
            var row2 = ' <tr style="background-color: rgb(240, 240, 240);">' +
                '<td colspan = "1" rowspan = "1" class="clearfix cell checkbox-cell" >' +
                '<div class="info">' +
                '<label for="cid_Air" id="cid_Air_label" class="field-label" role="none">' + cid_Air_label + '</label>' +
                '</div>' +
                '<div class="control">' +
                '<span class="checkbox ">' +
                '<input id="cid_Air" type="checkbox" name="cid_Air" ' + airchecked + ' class="checkbox readonly" disabled="disabled" aria-disabled="true">' +
                '</span>' +
                '<input type="hidden" name="cid_Air_Value" id="cid_Air_Value" value="' + air + '">' +
                '</div>' +
                '</td>' +
                '<td colspan="1" rowspan="1" class="clearfix cell checkbox-cell">' +
                '<div class="info">' +
                '<label for="cid_Maritime" id="cid_Maritime_label" class="field-label" role="none">' + cid_Maritime_label + '</label>' +
                '</div>' +
                '<div class="control">' +
                '<span class="checkbox ">' +
                '<input id="cid_Marine" type="checkbox" name="cid_Marine" ' + marinechecked + ' class="checkbox readonly" disabled="disabled" aria-disabled="true">' +
                '</span>' +
                '<input type="hidden" name="cid_Marine_Value" id="cid_Marine_Value" value="' + marine + '">' +
                '</div>' +
                '</td>' +
                '<td class="cell zero-cell"></td>' +
                '</tr>';
            console.log("row 2");
            $("[data-name='site_attestation_section_Modes']").each(function () {
                var selectedTable = $(this);
                $(this).append(row2);
                console.log("after row 2 modified");
                $(this).append(row1);
                console.log("after row 1 modified");
            })
        },

        Display_Modes: function (siteid) {
            debugger;

            var operationid;
            console.log("input site id " + siteid);
            //cid_ModeOfTransportationAir,Marine,cid_ModeOfTransportationRoad,cid_modeoftransportationrail
            var queryURL = "$select=cid_modeoftransportationair,cid_modeoftransportationmarine,cid_modeoftransportationroad,cid_modeoftransportationrail&$filter=ovs_operationtype eq 918640038 and ovs_SiteId/accountid eq " + siteid;

            webapi.safeAjax({
                type: "GET",
                url: "/_api/ovs_mocregistrations?" + queryURL,
                contentType: "application/json",
                type: "GET",
                success: function (res) {
                    debugger;
                    operationid = res.value[0]['ovs_mocregistrationid'];
                    var air = false;
                    if (res.value[0]['cid_modeoftransportationair'] == true)
                        air = true;
                    var road = false;
                    if (res.value[0]['cid_modeoftransportationroad'] == true)
                        road = true;
                    var marine = false;
                    if (res.value[0]['cid_modeoftransportationmarine'] == true)
                        marine = true;
                    var rail = false;
                    if (res.value[0]['cid_modeoftransportationrail'] == true)
                        rail = true;

                    //cid_modeoftransportationmarine
                    console.log("Operation query results for Modes " + " Air " + air + " Road " + road + " Marine " + marine + " Rail " + rail);
                    tdg.cid.Append_Modes_html_checkboxes(air, marine, rail, road);
                }
            });
        }
    }
}

// CompanyRegistrationWizard
if (typeof (tdg.cid.crw) == "undefined") {
    tdg.cid.crw = {
        // start
        start_clear_contact_address: function () {
            $("#address1_line1").val("");
            $("#address1_line2").val("");
            $("#address1_line3").val("");
            $("#address1_city").val("");
            $("#address1_stateorprovince").val("");
            $("#address1_postalcode").val("");
        },

        start_parentcustomerid_setup: function (accountid, legalname) {
            debugger;
            $("#parentcustomerid").attr("value", accountid);
            $("#parentcustomerid_name").attr("value", legalname);
            $("#parentcustomerid_entityname").attr("value", 'account');
        },

        start_BN_Selected: function (data) {
            debugger;

            var LegalName = data.LegalName
            var OperatingName = data.OperatingName
            OperatingName = (OperatingName == "" ? LegalName : OperatingName);

            var address = data.PhysicalLocationAddress;

            $("#cid_legalname").val(LegalName);
            $("#cid_operatingname").val(OperatingName);

            $("#address1_line1").val(address.AddressLine1Text);
            $("#address1_line2").val(address.AddressLine2Text);
            $("#address1_line3").val("");
            $("#address1_city").val(address.CityName);
            $("#address1_stateorprovince").val(address.ProvinceStateCode);
            $("#address1_postalcode").val(address.PostalZipCode);
        }
    }
}