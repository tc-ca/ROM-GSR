// //To apply the Asterisk(*) Sign using custom JS:
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
            var f = document.getElementById("WebResource_address_complete");
            var c = f.contentWindow;
            c.targetFunction();
        },

        sign_out: function () {
            window.location.replace("~/en/Account/Login/LogOff");
        },

        subgrid_index: function (entityList, name) {
            var grid = null;
            for (var i = 0; entityList.length; i++) {
                grid = entityList.eq(i);
                grid_name = grid[0].dataset.refRel;
                if (name == grid_name) {
                    return grid;
                }
            }
            return grid;
        },

        weblink_hide: function (url) {
            //var value = "#navbar li.weblink";     // out of box template
            var value = "#def-top li.weblink";      // Canada government template
            $(value)
                .each(function () {
                    var item = $(this).find("a")[0];
                    var href = item.href;
                    if (href.indexOf(url) != -1) {
                        // $(this).remove();
                        //use hidden attribute instead of remove method
                        $(this).attr("hidden", "");

                        return;
                    }
                });
        },

        weblink_show: function (url) {
            //var value = "#navbar li.weblink";     // out of box template
            var value = "#def-top li.weblink";      // Canada government template
            $(value)
                .each(function () {
                    var item = $(this).find("a")[0];
                    var href = item.href;
                    if (href.indexOf(url) != -1) {

                        //use remove hidden attribute to show menue item
                        $(this).removeAttr("hidden");

                        return;
                    }
                });
        },

        page_instructions: function (message, scroll) {
            message = tdg.error_message.message(message);
            if (!scroll) {
                var value = "<div class='alert alert-info' style='background:#d7faff'><p>" + message + "</p></div>";
            }
            else {
                var value = "<div class='alert alert-info' style='background:#d7faff; overflow-y: scroll; height:170px;'><p>" + message + "</p></div>";
            }
            $(".instructions").html(value);
            //$('.alert.alert-info')[0].innerHTML = value;
        },

        button_create: function (name, from_button, label_code) {
            var value = '<input type="button" name="{0}" id="{0}" /><label>&nbsp;&nbsp;</label>';
            value = value.replaceAll("{0}", name);
            var button = $(value);
            $(from_button).after(button);
            var button1 = $(from_button);
            var className = button1[0].className
            var fontSize = button1.css("fontSize");
            var color = button1.css("color");
            var background_color = button1.css("background-color");
            value = "#{0}".replaceAll("{0}", name);
            var button2 = $(value);

            var text1 = tdg.error_message.message(label_code);
            button2.prop("value", text1);
            button2[0].className = className;
            button2.css("fontSize", fontSize);
            button2.css('color', color);
            button2.css("background-color", background_color);
        },

        btn_save_new_setup: function () {
            var button = $('<input type="button" name="btn_save_new" id="btn_save_new" class="submit-btn btn btn-primary" />');
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
            //button2.css("fontSize", fontSize);
            //button2.css('color', color);
            //button2.css("background-color", background_color);

            // bind the click event to this custom buttton
            $("#btn_save_new").bind("click", function () {
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
                var msg = tdg.error_message.message("m000180");
                var msg_pre = tdg.error_message.message("m000181");

                // Create new validator
                $("#" + fieldName + "_label").parent().addClass("required");

                var newValidator = document.createElement('span');
                newValidator.style.display = "none";
                newValidator.id = "RequiredFieldValidator" + fieldName;
                newValidator.controltovalidate = "casetypecode";

                newValidator.errormessage = "<a href='#" + fieldName + "_label'>" + msg_pre + fieldLabel + msg + "</a>";
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
            debugger;

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

        WebApi_List: function (entity, filter) {
            var api_url = entity;
            if (filter != "") {
                api_url += "?$filter=" + filter;
            }
            var response = null;

            $.ajax({
                type: "GET",
                url: "/_api/" + api_url,
                contentType: "application/json",
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
            message = tdg.c.message(message);

            var v = this.ValidationSummary();
            if (v == null) return;

            if (clear) {
                v.remove();
            }
        },

        error_message_advanced_form: function (message, clear) {
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

        replace_special_char: function (attribute) {
            attribute = (attribute == null ? "" : attribute);
            attribute = $('<textarea />').html(attribute).text();
            return attribute;
        },

        replace_filter_special_char: function (attribute) {
            // replace the single quotes
            attribute = (attribute == null ? "" : attribute);

            attribute = attribute.replace(/'/g, "''");

            attribute = attribute.replace(/%/g, "%25");
            attribute = attribute.replace(/\+/g, "%2B");
            attribute = attribute.replace(/\//g, "%2F");
            attribute = attribute.replace(/\?/g, "%3F");

            attribute = attribute.replace(/#/g, "%23");
            attribute = attribute.replace(/&/g, "%26");
            return attribute;
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

            $(`<section class="modal overlay-def"  id="myModal" role="dialog"  
     aria-modal="true"  aria-labelledby ="headerid" aria-describedby="DialogBodyID" tabindex="-1">
     <div class="modal-dialog modal-content modal-dialog-centered" role="document">
	            <header class="modal-header">
	            <h2 id="headerid" class="modal-title">${header}</h2>
	            </header>
	            <div class="modal-body" id="DialogBodyID" >
	            ${message}
	            </div>
	            <div class="modal-footer">
	            <button id="btnYes" type="button" class="btn btn-sm btn-primary pull-left popup-modal-dismiss">${yes}</button>
	            <button id="btnNo" type="button" class="btn btn-sm btn-primary pull-left popup-modal-dismiss" data-dismiss="modal">${no}</button>
                </div>
                </div>
                
	            </section>
	            `).appendTo('body');
            //c.message
            /* $("#myModal").css('top', '15%');
             $("#myModal").css('left', '40%');
             $("#myModal").css('position', 'fixed');
             $("#myModal").css('z-index', '9999');
             */
            $("#btnYes").click(function () {
                $('#myModal').modal('hide');
                $("#myModal").remove();
                handler(true);
            });
            $("#btnYes").keydown(function (event) {
                var keyCode = event.keyCode || event.which;
                //check if key pressis tab key
                if (keyCode == "13") {
                    $("#btnYes").click();
                }
            }
            );

            //Pass false to callback function
            $("#btnNo").click(function () {
                //handler(lse);
                $('#myModal').modal('hide');
                $("#myModal").remove();
                handler(false);
            });
            $("#btnNo").keydown(function (event) {
                var keyCode = event.keyCode || event.which;
                //check if key pressis tab key
                if (keyCode == "9") {
                    $('#myModal').focus();
                }
                else if (keyCode == "13") {
                    $("#btnNo").click();
                }

            });

            //var dialog = $("#myModal");

            //   dialog.attr("aria-modal", "true");
            // dialog.attr("aria-live", "assertive");
            //dialog.focus();
            $('#myModal').modal({ backdrop: 'static', keyboard: false, show: true, focus: true });
        },

        dialog_OK: function (message) {
            message = message.replaceAll("\n", "<br>");
            var header = tdg.error_message.message("CID_PORTAL");
            var OK = tdg.error_message.message("OK");

            $(`<section class="modal overlay-def"  id="myModal" role="dialog"  
                 aria-modal="true"  aria-labelledby ="headerid" aria-describedby="DialogBodyID" tabindex="-1">
                 <div class="modal-dialog modal-content modal-dialog-centered" role="document">
	            <header class="modal-header">
	            <h2 id="headerid" class="modal-title">${header}</h2>
	            </header>
	            <div class="modal-body" id="DialogBodyID" >
	            ${message}
	            </div>
	            <div class="modal-footer">
	            <button id="btnOK" type="button" class="btn btn-sm btn-primary pull-left popup-modal-dismiss">${OK}</button>
	            </section>
	            `).appendTo('body');
            /*
              $(`<section class="wb-lbx overlay-def" id="myModal" aria-modal="true" aria-live="assertive" aria-labelledby ="headerid" >
               <div class="modal-dialog" role="document">
                <div class="modal-content" >
                <header class="modal-header">
                <h2 id="headerid" class="modal-title">${header}</h2>
                </header>
                <div class="modal-body">
                ${message}
                </div>
                <div class="modal-footer">
                <button id="btnOK" type="button" class="btn btn-sm btn-primary pull-left popup-modal-dismiss">${OK}</button>
                </section>
                `).appendTo('body');
             * /

           /* $("#myModal").css('top', '15%');
            $("#myModal").css('left', '40%');
            $("#myModal").css('position', 'fixed');
            $("#myModal").css('z-index', '9999');
            */

            $("#btnOK").click(function () {
                $('#myModal').modal('hide');
                $("#myModal").remove();
            });
            $("#btnOK").keydown(function (event) {
                var keyCode = event.keyCode || event.which;
                //check if key pressis tab key
                if (keyCode == "9") {
                    $('#myModal').focus();
                }
                else if (keyCode == "13") {
                    $("#btnOK").click();
                }

            });

            $('#myModal').modal({ backdrop: 'static', keyboard: false, show: true, focus: true });
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
        },

        Check_if_PostalFirstLetter_MatchProvince: function (postalCode, province) {
            var provinceMatchesPostalcode = false;
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
                default: provinceMatchesPostalcode = false;
                    break
                //Postal Code is invalid
            }

            return provinceMatchesPostalcode;
        },

        Add_Validation_For_Postal_Code_with_Province: function (selected_language) {
            try {
                var validationMessage = tdg.error_message.message("m000185");

                if (typeof (Page_Validators) == 'undefined') return;
                // Create new validator
                var newValidator = document.createElement('span');
                newValidator.style.display = "none";
                newValidator.id = "address1_postalcodeValidator";
                newValidator.controltovalidate = "address1_postalcode";
                newValidator.errormessage = "<a href='#address1_postalcode_label' referencecontrolid='address1_postalcode ' onclick='javascript:scrollToAndFocus(\"address1_postalcode _label\",\" address1_postalcode \");return false;'>" + validationMessage + "</a>";
                newValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
                newValidator.initialvalue = "";
                newValidator.evaluationfunction = function () {
                    var Postalvalue = $("#address1_postalcode").val();
                    var province = $("#ovs_address1_province :selected").text();
                    var ValidationFlag = tdg.c.Check_if_PostalFirstLetter_MatchProvince(Postalvalue, province);
                    if (ValidationFlag == false) {
                        return false;
                    } else {
                        return true;
                    }
                };

                // Add the new validator to the page validators array:
                Page_Validators.push(newValidator);
            } catch (e) { }

        },

        Prevent_Po_Box_address_Validation: function (selected_language) {
            //add validation error message
            try {
                var validationMessage = tdg.error_message.message("m000186");

                if (typeof (Page_Validators) == 'undefined') return;
                // Create new validator
                var newValidator = document.createElement('span');
                newValidator.style.display = "none";
                newValidator.id = "address1_line1Validator";
                newValidator.controltovalidate = "address1_line1";
                newValidator.errormessage = "<a href='#address1_line1_label' referencecontrolid='address1_line1' onclick='javascript:scrollToAndFocus(\"address1_line1_label\",\" address1_line1 \");return false;'>" + validationMessage + "</a>";

                newValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
                newValidator.initialvalue = "";
                newValidator.evaluationfunction = function () {
                    var addressline1 = $("#address1_line1").val();
                    if (addressline1.toUpperCase().indexOf("PO BOX") >= 0 || addressline1.toUpperCase().indexOf("P.O") >= 0) {
                        return false;
                    }
                    else {
                        return true;
                    }
                };

                // Add the new validator to the page validators array:
                Page_Validators.push(newValidator);

            } catch (e) { }
        },//end function

        Prevent_Duplicate_Site_Creation: function (parameters) {
            var FlowName = "CID_Flow_Site_Duplicate_Validation_Test";
            var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");

            if (EnvironmentSettingResult.length > 0) {
                var FlowURL = EnvironmentSettingResult[0]["qm_value"];
                //await tdg.c.createCustomTimeout(FlowURL, parameters);
                //Execute flow
                webapi.safeAjax({
                    type: "POST",
                    url: FlowURL,
                    async: false,
                    contentType: "application/json",
                    data: JSON.stringify(parameters),

                    success: function (data, textStatus, xhr) {
                        var result = data;
                        console.log(result);
                        // Return Type: mscrm.cid_CID_Create_Update_SiteDuplicateValidationResponse
                        // Output Parameters
                        var res = result["DuplicateFound"]; // Edm.Boolean

                        if (res) {
                            var message = tdg.error_message.message("m000131");
                            tdg.c.dialog_YN(message, (ans) => {
                                if (ans) {
                                    return false;
                                    //Do nothing
                                }
                                else {
                                    return false;
                                    //need to add ALM record.
                                }
                            });
                        }
                        else
                            return true;
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        console.log(xhr);
                        return false;
                    }
                });
            } //end check if flow url found
            else
                return true;
        },//end function

        createCustomTimeout: function (FlowURL, parameters) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    webapi.safeAjax({
                        type: "POST",
                        url: FlowURL,
                        async: false,
                        contentType: "application/json",
                        data: JSON.stringify(parameters),

                        success: function (data, textStatus, xhr) {
                            var result = data;
                            console.log(result);
                            // Return Type: mscrm.cid_CID_Create_Update_SiteDuplicateValidationResponse
                            // Output Parameters
                            var res = result["DuplicateFound"]; // Edm.Boolean

                            if (res) {
                                var message = tdg.error_message.message("m000131");
                                tdg.c.dialog_YN(message, (ans) => {
                                    if (ans) {
                                        return false;
                                        //Do nothing
                                    }
                                    else {
                                        return false;
                                        //need to add ALM record.
                                    }
                                });
                            }
                            else
                                return true;
                        },
                        error: function (xhr, textStatus, errorThrown) {
                            console.log(xhr);
                            return false;
                        }
                    });

                    resolve();
                }, 2 * 1000);
            });
        },
        Format_Phone: function (phoneField, language) {
            var field = "#" + phoneField;
            $(field).attr("placeholder", "(___) ___-____");
            $(field).attr("maxlength", "14");
            $(field).on('keyup', function (event) {
                //Strip all characters from the input except digits
                var input = $(this).val().replace(/\D/g, '');
                //Trim the remaining input to ten characters, to preserve phone number format
                input = input.substring(0, 10);
                //Based upon the length of the string, we add formatting as necessary
                var inLength = input.length;
                if (inLength == 0) {
                    input = input;
                } else if (inLength < 4) {
                    input = '(' + input;
                } else if (inLength < 7) {
                    input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6);
                } else {
                    input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6) + '-' + input.substring(6, 10);
                }
                if (event.keyCode != 46 && event.keyCode != 8) {
                    $(this).val(input);
                }
            });
            $(field).focusout(function () {
                var inLength = $(this).val().replace(/\D/g, '').length;
                if (inLength < 10 && inLength != 0) {
                    var msg = tdg.error_message.message("m000171");
                    tdg.c.dialog_OK(msg);
                    $(this).val("");
                }
            })
        }//end function
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
        },

        InYear_ContactGrid_Actions: function (gridList) {
            //add onload event to grid 
            gridList.on("loaded", function () {
                gridList.find("tr").each(function () {
                    var ContactTypeCell = $(this).find('td')[0];
                    var ContactFullNameCell = $(this).find('td')[1];
                    var contactid = $(this).attr("data-id");
                    var contactType = $(ContactTypeCell).attr("aria-label");
                    var ContactFullName = $(ContactFullNameCell).attr("aria-label");

                    //fins Menue action
                    $(this).find('td[aria-label="action menu"]').each(function () {
                        //find ul
                        var ul = $(this).find("ul");
                        var lbl_primary = tdg.error_message.message("lbl_primary");
                        if (contactType != lbl_primary) {
                            //add the "Dectivation" action
                            var msg = tdg.error_message.message("m000183");
                            $(ul).append('<li role="none"><a href="#" onclick="DeactivateContact(' + "'" + contactid + "'" +
                                ')" role="menuitem" tabindex="-1" title="' + msg + '" aria-setsize="4" aria-posinset="4">' + msg + '</a></li>');

                            //add the "resend invitation" action
                            var msg = tdg.error_message.message("m000182");
                            $(ul).append('<li role="none"><a href="#" onclick="ResendInvitation(' + "'" + contactid + "','"
                                + ContactFullName + "'" + ')" role="menuitem" tabindex="-1" title="' + msg + '" aria-setsize="4" aria-posinset="4">' + msg + '</a></li>');

                            //add "Assign as Primary Admin" action
                            var msg = tdg.error_message.message("m000184");
                            $(ul).append('<li role="none"><a href="#" onclick="AssignAsAdmin(' + "'" + contactid + "','"
                                + ContactFullName + "'" + ')" role="menuitem" tabindex="-1" title="' + msg + '" aria-setsize="4" aria-posinset="4">' + msg + '</a></li>');
                        }
                        //find list item (Li)
                        $(ul).find("li").each(function () {
                            //get the menu title
                            var menueTitle = $(this).find("a").attr("title");
                            var lbl_primary = tdg.error_message.message("lbl_primary");
                            var lbl_edit = tdg.error_message.message("lbl_edit");
                            if (contactType == lbl_primary) {
                                if (menueTitle != lbl_edit) {
                                    $(this).attr("hidden", "true");
                                }
                            }//end check if primary

                        });//end find ul li

                    });//end find menu action

                });//end find tr
            });//end on grid load             
        },

        Registeration_ContactGrid_Actions: function (gridList) {
            gridList.on("loaded", function () {
                gridList.find("tr").each(function () {
                    //contact type cell
                    var ContactTypeCell = $(this).find('td')[0];
                    //contact full name
                    var ContactFullNameCell = $(this).find('td')[1];
                    //Contact id
                    var contctId = $(this).attr("data-id");

                    var contactType = $(ContactTypeCell).attr("aria-label");
                    var ContactFullName = $(ContactFullNameCell).attr("aria-label");

                    //find Menue action
                    $(this).find('td[aria-label="action menu"]').each(function () {
                        //find ul
                        var ul = $(this).find("ul");

                        //add the "resend invitation" action
                        var msg = tdg.error_message.message("m000182");
                        $(ul).append('<li role="none"><a href="#" onclick="ResendInvitation(' + "'" + contctId + "','"
                            + ContactFullName + "'" + ')" role="menuitem" tabindex="-1" title="' + msg + '" aria-setsize="4" aria-posinset="4">' + msg + '</a></li>');

                        //add deactivate action
                        var msg = tdg.error_message.message("m000183");
                        $(ul).append('<li role="none"><a href="#" onclick="DeactivateContact(' + "'" + contctId + "'" + ')" role="menuitem" tabindex="-1" title="' + msg + '" aria-setsize="4" aria-posinset="4">' + msg + '</a></li>');

                        //find list item (Li)
                        $(ul).find("li").each(function () {
                            //get the menu title
                            var menueTitle = $(this).find("a").attr("title");
                            var lbl_primary = tdg.error_message.message("lbl_primary");
                            var lbl_edit = tdg.error_message.message("lbl_edit");
                            if (contactType == lbl_primary) {
                                if (menueTitle != lbl_edit) {
                                    $(this).attr("hidden", "true");
                                }
                            } //end check if primary
                            //$(link).attr("Class", "details-link");
                        }); //end find ul li
                    }); //end find menu action
                }); //end find tr
            }); //end on grid load
        }
    }
}

// Wrapper AJAX function
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

// tdg.webapi = tdgcore.webapi
if (typeof (tdg.webapi) == "undefined") {
    tdg.webapi = {
        // entity_name must be in plural
        list: function (entity_name, filter) {
            var api_url = entity_name;
            if (filter != "") {
                api_url += "?$filter=" + filter;
            }
            var response = null;

            var response = null;
            $.ajax({
                type: "GET",
                url: "/_api/" + api_url,
                contentType: "application/json",
                async: false
            }).done(function (json) {
                response = json.value;
            });
            return response;
        },

        SelectedColumnlist: function (entity_name, select_colums, filter) {
            var response = null;
            $.ajax({
                type: "GET",
                url: "/_api/" + entity_name + "?$select=" + select_colums + "&$filter=" + filter,
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
            webapi.safeAjax({
                type: "POST",
                url: "/_api/" + entity_name,
                contentType: "application/json",
                data: JSON.stringify(data),

                success: function (res, status, xhr) {
                    //print id of newly created table record
                    console.log("webapi.safeAjax.create->record_id: " + xhr.getResponseHeader("entityid"));
                    try {
                        success_cb();
                    } catch (e) { }
                },

                error: function (res, status, errorThrown) {
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
            webapi.safeAjax({
                type: "PATCH",
                url: "/_api/" + entity_name + "(" + record_id + ")",
                contentType: "application/json",
                data: JSON.stringify(data),

                success: function (res) {
                    console.log(res);
                },

                error: function (res, status, errorThrown) {
                    console.log(res);
                }
            });
        },

        delete: function (entity_name, record_id) {
            webapi.safeAjax({
                type: "DELETE",
                url: "/_api/" + entity_name + "(" + record_id + ")",
                contentType: "application/json",

                success: function (res) {
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
        },

        executeFlow: function (flow_url, data) {
            webapi.safeAjax({
                type: "POST",
                url: flow_url,
                async: false,
                contentType: "application/json",
                data: JSON.stringify(data),

                success: function (data, textStatus, xhr) {
                    var result = data;
                    console.log(result);
                    // Return Type: mscrm.cid_CID_Create_Update_SiteDuplicateValidationResponse
                    // Output Parameters
                    return result["DuplicateFound"]; // Edm.Boolean
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log(xhr);
                    return false;
                }
            });
        },

        GetOptionSetLable: function (entityname, attributename, attributevalue) {
            //prepare query options
            var query = "/api/data/v8.2/stringmaps?$filter=objecttypecode eq '" + entityname + "' and  attributename eq '" + attributename + "' and attributevalue eq " + attributevalue;
            //setup webapi request
            var req = new XMLHttpRequest();
            req.open("GET", Xrm.Page.context.getClientUrl() + query, false);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        var results = JSON.parse(this.response);
                        if (results != null && results.value.length > 0) {
                            debugger;
                            var value = results.value[0].value;
                        }

                    } else {
                        debugger;
                    }
                }
            };
            req.send();
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
            var list = tdg.message.list();
            var value = code;
            var selected_language = sessionStorage.getItem("selected_language");

            var item = list.filter(a => a.code == code)
            if (item.length > 0) {
                value = (this.is_english(selected_language) ? item[0].message_en : item[0].message_fr);
            }
            return value;
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

                data = tdg.webapi.list("root_eraps", filter);
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

            data = tdg.webapi.list("root_eraps", filter);
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
            data = tdg.webapi.list("root_companies", filter);
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
        ovs_supportrequest_insert: function (data) {
            debugger;
            if (data.ovs_Company != null) {
                var value = {
                    "ovs_Company@odata.bind": "/accounts(" + data.ovs_Company + ")",
                    "ovs_CreatedByExternalUser@odata.bind": "/contacts(" + data.ovs_CreatedByExternalUser + ")",
                    "ovs_RequestType@odata.bind": "/ovs_supportrequesttypes(" + data.ovs_RequestType + ")",
                    "ovs_requestdetails": data.ovs_requestdetails,
                    "ovs_priority": data.ovs_priority
                };
            }
            else {
                var value = {
                    "ovs_CreatedByExternalUser@odata.bind": "/contacts(" + data.ovs_CreatedByExternalUser + ")",
                    "ovs_RequestType@odata.bind": "/ovs_supportrequesttypes(" + data.ovs_RequestType + ")",
                    "ovs_requestdetails": data.ovs_requestdetails,
                    "ovs_priority": data.ovs_priority
                };
            }
            tdg.webapi.create("ovs_supportrequests", value);
        },

        address_init: function (site_ind) {
            debugger;

            this.clear_address_type_required_fields();

            // default
            $("#address1_country").val("Canada");
            $('#address1_country').attr("readonly", true);

            //Setup province dropdown
            tdg.c.control_hide("address1_line1");
            tdg.c.control_hide("address1_stateorprovince");
            tdg.c.control_hide("ovs_lld_province");

            $("#ovs_address1_province").on("change", function (i, val) {
                var ovs_address1_province = $("#ovs_address1_province :selected").text();
                $("#address1_stateorprovince").val(ovs_address1_province);
            });

            $("#address1_postalcode").attr("maxlength", "7");
            $("#address1_postalcode").on('keyup', function () {
                var n = $(this).val().replace(/\W/g, '');
                var length = n.length;
                var nTrimmed = n.substring(0, length - 1)
                if (length % 2 == 1) {
                    var temp = n.substring(length - 1);
                    n = nTrimmed + temp.replace(/[^A-Za-z]/g, '');
                } else {
                    var temp = n.substring(length - 1);
                    n = nTrimmed + temp.replace(/\D/g, '');
                }
                length = n.length;
                if (length > 3) {
                    n = n.substring(0, 3) + " " + n.substring(3);
                }
                $(this).val(n.toUpperCase());
            });
            $("#address1_postalcode").focusout(function () {
                var n = $(this).val().replace(/\W/g, '');
                if ((n.length > 6 || n.length < 6) && n.length > 0) {
                    $(this).val("");
                }
                if (n.length == 6 && !/^([a-zA-Z]\d[a-zA-Z]\d[a-zA-Z]\d)$/.test(n)) {
                    $(this).val("");
                }
            })

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

        //Takes an array of strings containing the field name formatted for use with jquery, ex. "#telephone1"
        phone_init: function (phoneField, language) {
            var field = "#" + phoneField;
            $(field).attr("placeholder", "(___) ___-____");
            $(field).attr("maxlength", "14");
            $(field).on('keyup', function (event) {
                //Strip all characters from the input except digits
                var input = $(this).val().replace(/\D/g, '');
                //Trim the remaining input to ten characters, to preserve phone number format
                input = input.substring(0, 10);
                //Based upon the length of the string, we add formatting as necessary
                var inLength = input.length;
                if (inLength == 0) {
                    input = input;
                } else if (inLength < 4) {
                    input = '(' + input;
                } else if (inLength < 7) {
                    input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6);
                } else {
                    input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6) + '-' + input.substring(6, 10);
                }

                if (event.keyCode >= 49 && event.keyCode <= 57) {
                    if (inLength == 10) {
                        $(this).val(input);
                    }
                } else {
                    if (event.keyCode != 46 && event.keyCode != 8) {
                        $(this).val(input);
                    }
                }
            });
            $(field).focusout(function () {
                var inLength = $(this).val().replace(/\D/g, '').length;
                if (inLength < 10 && inLength != 0) {
                    var msg = tdg.error_message.message("m000171");
                    tdg.c.dialog_OK(msg);
                    $(this).val("");
                }
            })
        },

        name_init: function (filedName) {
            debugger;
            var regName = /[^A-Za-z'-\s]/g;
            if (filedName != null || filedName != "") {
                var namefield = "#" + filedName;
                if ($(namefield) != null) {
                    $(namefield).on('keyup', function () {
                        //Strip all characters from the input except letters, spaces, ' and -
                        var input = $(this).val().replace(regName, '');
                        $(this).val(input);
                    });
                }
            }
        },

        address_same_as_company: function (parent_id) {
            debugger;

            var value = $("#cid_same_as_company").val();    // $("#cid_same_as_company")[0].checked;
            value = (value == 1 ? true : false);

            sessionStorage.setItem("AddressComplete_readonly", value);

            if (value) {
                $("#address1_line2").prop('readonly', true);
                $("#address1_line3").prop('readonly', true);
                $("#address1_city").prop('readonly', true);
                $("#ovs_address1_province").prop('disabled', true);
                $("#address1_stateorprovince").prop('readonly', true);
                $("#address1_postalcode").prop('readonly', true);

                var select_col = "address1_city,address1_country,ovs_address1_province,address1_stateorprovince,address1_line1,address1_line2,address1_line3,address1_postalcode";
                var filter = "accountid eq " + parent_id;

                var data = tdg.webapi.SelectedColumnlist("accounts", select_col, filter);

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
                    ovs_address1_province = item.ovs_address1_province;
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

                if (ovs_address1_province == null) {
                    var selected_language = sessionStorage.getItem("selected_language");
                    tdg.cid.convert_province_to_code(selected_language);
                }
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

                    tdg.c.addValidator("ovs_lld_quarter");
                    tdg.c.addValidator("ovs_lld_section");
                    tdg.c.addValidator("ovs_lld_township");
                    tdg.c.addValidator("ovs_lld_range");
                    tdg.c.addValidator("ovs_lld_meridian");

                    //this.address1_default("N/A");
                    $("#address1_line1").val("N/A");
                    $("#address1_city").val("N/A");
                    $("#address1_stateorprovince").val("N/A");
                    $("#address1_postalcode").val("N/A");

                    tdg.c.removeValidator("address1_stateorprovince");
                    tdg.c.removeValidator("ovs_address1_province");

                    break;
                case "2": // lat/long
                    tdg.c.section_show("section_latitude_longitude");

                    tdg.c.addValidator("address1_latitude");
                    tdg.c.addValidator("address1_longitude");

                    //this.address1_default("N/A");
                    $("#address1_line1").val("N/A");
                    $("#address1_city").val("N/A");
                    $("#address1_stateorprovince").val("N/A");
                    $("#address1_postalcode").val("N/A");

                    tdg.c.removeValidator("address1_stateorprovince");
                    tdg.c.removeValidator("ovs_address1_province");

                    break;
                default: //postal
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
                tdg.c.removeValidator("ovs_lld_quarter");
                tdg.c.removeValidator("ovs_lld_section");
                tdg.c.removeValidator("ovs_lld_township");
                tdg.c.removeValidator("ovs_lld_range");
                tdg.c.removeValidator("ovs_lld_meridian");

                // lat/long
                tdg.c.removeValidator("address1_latitude");
                tdg.c.removeValidator("address1_longitude");
            }
        },

        //Converts prepopulated province string to code that maps to dropdown field value
        //Also formats the postal code field
        convert_province_to_code: function (language) {
            //Format postal code
            var n = $("#address1_postalcode").val().replace(/\W/g, '');
            var match = n.match(/^(\w{3})(\w{3})$/);
            if (match) {
                $("#address1_postalcode").val(match[1] + ' ' + match[2]);
            }

            var address1_stateorprovince = $("#address1_stateorprovince").val();

            // If there is no value that is prepopulated, this function exits
            if (address1_stateorprovince == "") {
                return;
            }
            for (var i = 0; i < 13; i++) {
                // console.log(a.localeCompare(b));
                // console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
                var localizedProvince = tdg.c.text_language(canProvinces[i], language);
                //if (localizedProvince.localeCompare(address1_stateorprovince), undefined, { sensitivity: 'accent' } == 0
                //    || canProvincesCodes[i].localeCompare(address1_stateorprovince.toLowerCase()))

                if (localizedProvince.localeCompare(address1_stateorprovince, undefined, { sensitivity: 'accent' }) == 0
                    || canProvincesCodes[i] == address1_stateorprovince) {
                    //finds match
                    $("#ovs_address1_province").val(i);
                    return;
                }
            }
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
                '<label for="cid_Road" id="cid_Road_label" class="field-label" >' + cid_Road_label + '</label>' +
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
                '<label for="cid_Rail" id="cid_Rail_label" class="field-label" >' + cid_Rail_label + '</label>' +
                '</div>' +
                '<div class="control">' +
                '<span class="checkbox ">' +
                '<input id="cid_Rail" type="checkbox" name="cid_Rail" ' + railchecked + '   class="checkbox readonly" disabled="disabled" aria-disabled="true">' +
                '</span>' +
                '<input type="hidden" name="cid_Rail_Value" id="cid_Rail_Value" value="' + rail + '">' +
                '</div>' +
                '</td>' +
                '</tr>';

            var row2 = ' <tr style="background-color: rgb(240, 240, 240);">' +
                '<td colspan = "1" rowspan = "1" class="clearfix cell checkbox-cell" >' +
                '<div class="info">' +
                '<label for="cid_Air" id="cid_Air_label" class="field-label" >' + cid_Air_label + '</label>' +
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
                '<label for="cid_Marine" id="cid_Marine_label" class="field-label" >' + cid_Maritime_label + '</label>' +
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
                $(this).append(row1);

                $(this).append(row2);
                $("#cid_importingsitetype_label").attr("role", "");
                $("#cid_offeringfortransportsitetype_label").attr("role", "");
                $("#cid_handlingsitetype_label").attr("role", "");
                $("#cid_transportingsitetype_label").attr("role", "");

            })
        },

        subgrid_header_language: function (grid, un_number_grid) {
            debugger;
            var selected_language = sessionStorage.getItem("selected_language");

            grid.on("loaded", function () {
                debugger;
                // header
                let header = grid.find("table thead > tr");
                for (var index1 = 0; index1 < header.length; index1++) {
                    //debugger;
                    let tr = header[index1];
                    let cols = $(tr).find('th');
                    for (var i = 0; i < cols.length; i++) {
                        var tdElement = cols[i];
                        var className = $(tdElement)[0].className;
                        if (className.indexOf("sort-enabled") == -1) {
                            var text = $(tdElement).text().trim();
                            text = tdg.cid.subgrid_header_special_col(text);
                            text = tdg.c.text_language(text, selected_language);
                            $(tdElement).text(text);
                        }
                        else {
                            // tdElement.innerHTML
                            var control_a = $(tdElement).find("a");
                            var text = control_a.attr("aria-label");
                            if (text != null) {
                                debugger;

                                var text1 = tdg.c.text_language(text, selected_language);
                                var html = control_a[0].innerHTML;
                                control_a[0].innerHTML = html.replace(text, text1);
                            }
                        }

                        if (un_number_grid == true) {
                            switch (i) {
                                case 0:
                                    tdElement.ariaLabel = "UN Number Display";
                                    break;
                                case 1: // Packing Group
                                    tdElement.style.display = "none";
                                    break;
                                case 2: // Shipping
                                    tdElement.style.display = "none";
                                    break;
                            }
                        }
                    }
                }
            });
        },

        subgrid_header_special_col: function (text) {
            switch (text) {
                case "NAICS Class (NAICS Code)":
                    text = tdg.error_message.message(text);
                    break;
                case "NAICS Class (Code SCIAN)":
                    text = tdg.error_message.message("NAICS Class (NAICS Code)");
                    break;
                default:
                    break;
            }
            return text;
        },

        subgrid_companynaicscode: function (grid) {
            var selected_language = sessionStorage.getItem("selected_language");

            tdg.cid.subgrid_header_language(grid, false);
            grid.on("loaded", function () {
                let rows = grid.find("table tbody > tr");
                rows.each(function (index, tr) {
                    let cols = $(tr).find('td');
                    cols.each(function (index, td) {
                        var tdElement = $(this);
                        var value = tdElement.attr('data-attribute');
                        if (value != null) {
                            var index1 = value.indexOf('.cid_naicsclasstitle');
                            if (index1 != -1) {
                                var cellValue = $(td).text();
                                cellValue = tdg.c.text_language(cellValue, selected_language);
                                $(td).text(cellValue);
                            }
                        }
                    });
                });
            });
        },

        subgrid_unnumber: function (grid) {
            debugger;
            var selected_language = sessionStorage.getItem("selected_language");
            tdg.cid.subgrid_header_language(grid, true);
            grid.on("loaded", function () {
                debugger;
                let rows = grid.find("table tbody > tr");

                rows.each(function (index, tr) {
                    debugger;

                    let cols = $(tr).find('td');
                    for (var i = 0; i < cols.length; i++) {
                        tdElement = $(cols[i]).eq(0);
                        var value = tdElement.attr('data-attribute');
                        if (value != null) {
                            var index1 = value.indexOf('.tdg_shippingnamedescriptiontxt');
                            if (index1 != -1) {
                                var cellValue = tdElement.text();
                                cellValue = tdg.c.text_language(cellValue, selected_language);
                                tdElement.text(cellValue);
                            }

                            switch (i) {
                                case 0:
                                    var cellValue = tdElement.text();
                                    var f1 = $(cols[i + 1]).eq(0);
                                    var f2 = $(cols[i + 2]).eq(0);
                                    var text = cellValue + " - " +
                                        f1.text() + " - " +
                                        tdg.c.text_language(f2.text(), selected_language);
                                    tdElement.text(text);

                                    f1[0].style.display = "none";
                                    f2[0].style.display = "none";
                                    break;
                            }
                        }
                    }
                });
            });
        },

        Display_Modes: function (siteid) {
            debugger;

            var operationid;
            console.log("input site id " + siteid);
            //cid_ModeOfTransportationAir,Marine,cid_ModeOfTransportationRoad,cid_modeoftransportationrail
            var queryURL = "$select=cid_modeoftransportationair,cid_modeoftransportationmarine,cid_modeoftransportationroad,cid_modeoftransportationrail&$orderby=ovs_operationtype asc&$filter=(ovs_operationtype eq 918640038 or ovs_operationtype eq 918640042) and ovs_SiteId/accountid eq " + siteid;

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
        },

        Update_AdderssOverwritten_Field: function () {
            document.getElementById("address1_city").addEventListener('change', (event) => { $("#cid_addressoverwritten").val(1); });
            document.getElementById("address1_line2").addEventListener('change', (event) => { $("#cid_addressoverwritten").val(1); });
            document.getElementById("ovs_address1_province").addEventListener('change', (event) => { $("#cid_addressoverwritten").val(1); });
            document.getElementById("address1_line3").addEventListener('change', (event) => { $("#cid_addressoverwritten").val(1); });
            document.getElementById("address1_postalcode").addEventListener('change', (event) => { $("#cid_addressoverwritten").val(1); });
        },

        Get_Contact_Changes_and_SendEmail: function () {
            //define flags for each field change
            var FirstNameChangeFlag = false;
            var LastNameChangeFlag = false;
            var PhoneChangeFlag = false;
            var MobileChangeFlag = false;
            var FaxChangeFlag = false;
            var EmailaddressChangeFlag = false;
            var LanguageFlag = false;

            // change values array
            var ChangeArr = [];
            //get fileds values on load
            var FirstNameOnload = $("#firstname").val();
            var lastnameNameOnload = $("#lastname").val();
            var EmailAddressNameOnload = $("#emailaddress1").val();
            var telphoneOnload = $("#telephone1").val();
            var MobilePhoneNameOnload = $("#mobilephone").val();
            var FaxOnload = $("#fax").val();
            var LanguageeOnload = $("#cid_languageofcorrespondence :selected").text();
            var recordid = document.getElementById("EntityFormControl_EntityFormView_EntityID").value;

            //get currect record email
            var CurrentRecordContactSearch = tdg.webapi.SelectedColumnlist("contacts", "contactid,emailaddress1"
                , "statecode eq 0 and contactid eq " + recordid);
            var currentEmailAddressInDB = CurrentRecordContactSearch[0]["emailaddress1"];

            //define change event
            document.getElementById("firstname").addEventListener('change', (event) => { FirstNameChangeFlag = true; });
            document.getElementById("lastname").addEventListener('change', (event) => { LastNameChangeFlag = true; });
            document.getElementById("emailaddress1").addEventListener('change', (event) => {
                var EmailSearchResultOnChange = tdg.webapi.SelectedColumnlist("contacts", "contactid,emailaddress1"
                    , "statecode eq 0 and contactid ne " + recordid + " and  emailaddress1 eq '"
                    + $("#emailaddress1").val() + "'");
                if (EmailSearchResultOnChange <= 0) {
                    //check if changed email is not the existing email address
                    if (currentEmailAddressInDB != $("#emailaddress1").val()) {
                        EmailaddressChangeFlag = true;
                    }
                }

            });
            document.getElementById("telephone1").addEventListener('change', (event) => { PhoneChangeFlag = true; });
            document.getElementById("mobilephone").addEventListener('change', (event) => { MobileChangeFlag = true; });
            document.getElementById("fax").addEventListener('change', (event) => { FaxChangeFlag = true; });
            document.getElementById("cid_languageofcorrespondence").addEventListener('change', (event) => { LanguageFlag = true; });

            document.getElementById("UpdateButton").addEventListener('click', (event) => {
                //get current record id


                //if first name changed
                if (FirstNameChangeFlag == true) {
                    if ($("#firstname").val() != "" && $("#firstname").val() != null && FirstNameOnload != $("#firstname").val()) {
                        ChangeArr.push('{"fieldName" : "First Name", "OldValue" : "' + FirstNameOnload +
                            '"' + ', "NewValue" : "' + $("#firstname").val() + '"}');
                        console.log(ChangeArr);

                    }
                    else {
                        FirstNameChangeFlag = false;
                    }
                }
                if (LastNameChangeFlag == true) {
                    if ($("#lastname").val() != null && $("#lastname").val() != "" && $("#lastname").val() != lastnameNameOnload) {
                        ChangeArr.push('{"fieldName" : "Last Name", "OldValue" : "' + lastnameNameOnload +
                            '"' + ', "NewValue" : "' + $("#lastname").val() + '"}');
                        console.log(ChangeArr);
                    }
                    else {
                        LastNameChangeFlag = false;
                    }
                }
                if (PhoneChangeFlag == true) {
                    ChangeArr.push('{"fieldName" : "Business Phone", "OldValue" : "' + telphoneOnload +
                        '"' + ', "NewValue" : "' + $("#telephone1").val() + '"}');
                    console.log(ChangeArr);
                }
                if (MobileChangeFlag == true) {
                    ChangeArr.push('{"fieldName" : "Mobile Phone", "OldValue" : "' + MobilePhoneNameOnload +
                        '"' + ', "NewValue" : "' + $("#mobilephone").val() + '"}');
                    console.log(ChangeArr);
                }
                if (EmailaddressChangeFlag == true) {
                    if ($("#emailaddress1").val() != null && $("#emailaddress1").val() != ""
                        && $("#emailaddress1").val() != EmailAddressNameOnload) {
                        ChangeArr.push('{"fieldName" : "Email", "OldValue" : "' + EmailAddressNameOnload +
                            '"' + ', "NewValue" : "' + $("#emailaddress1").val() + '"}');
                        console.log(ChangeArr);
                    }
                    else {
                        EmailaddressChangeFlag = false;
                    }
                }
                if (FaxChangeFlag == true) {
                    ChangeArr.push('{"fieldName" : "Fax", "OldValue" : "' + FaxOnload +
                        '"' + ', "NewValue" : "' + $("#fax").val() + '"}');
                    console.log(ChangeArr);
                }
                if (LanguageFlag == true) {
                    ChangeArr.push('{"fieldName" : "Language of Correspondence", "OldValue" : "' + LanguageeOnload +
                        '"' + ', "NewValue" : "' + $("#cid_languageofcorrespondence :selected").text() + '"}');
                    console.log(ChangeArr);
                }

                //call flow
                var data = '{ "contactid" : "' + recordid + '", "ChangedInfo" : [' + ChangeArr + ']}';
                console.log("lenth of array " + ChangeArr.length);

                if (ChangeArr.length > 0) {

                    //make suer all required fields are entered before execut flow
                    if ($("#telephone1").val() != "" && $("#emailaddress1").val() != "" && $("#firstname").val() != ""
                        && $("#lastname").val() != "") {
                        //check for duplicate email
                        var EmailSearchResult = tdg.webapi.SelectedColumnlist("contacts", "contactid,emailaddress1"
                            , "statecode eq 0 and contactid ne " + recordid + " and  emailaddress1 eq '"
                            + $("#emailaddress1").val() + "'");

                        //check if not duplicate email before executing flow
                        if (EmailSearchResult.length <= 0) {

                            tdg.cid.flow.Call_Flow("CID_Portal_Email_Contact_when_Information_is_changed", data);
                        }
                        else {
                            EmailaddressChangeFlag = false;
                            const indexOfObject = ChangeArr.findIndex(object => {
                                return object.fieldName === "Email";

                            });

                            console.log("index of email to be removed: " + indexOfObject);
                            //remove index
                            ChangeArr.splice(indexOfObject, 1);
                        }//end else

                    }
                }
            });
        },

        WebApi_Update_With_Spinner: function (entity_name, record_id, data) {
            debugger;
            $('#loader').show();
            webapi.safeAjax({
                type: "PATCH",
                url: "/_api/" + entity_name + "(" + record_id + ")",
                contentType: "application/json",
                data: JSON.stringify(data),

                success: function (res) {
                    debugger;
                    $(".entity-grid").trigger("refresh");
                    $('#loader').hide();

                    console.log(res);
                },

                error: function (res, status, errorThrown) {
                    debugger;
                    $('#loader').hide();
                }
            });
        },

        Check_If_AnnualTasks_Completed: function (parentAccountid) {
            var CompanyListdata = tdg.webapi.SelectedColumnlist("tasks", "activityid", "cid_tasklevel eq 100000000 and statecode eq 0  and _regardingobjectid_value eq "
                + parentAccountid);
            if (CompanyListdata != null)
                if (CompanyListdata.length == 0) {
                    $("#CompanyCompleteAll").css("display", "none");
                }
                else {
                    $("#CompanyCompleteAll").css("display", "block");
                }
            var SiteListdata = tdg.webapi.SelectedColumnlist("tasks",
                "activityid", "cid_tasklevel eq 100000001 and statecode eq 0 and _regardingobjectid_value eq "
            + parentAccountid);
            if (SiteListdata != null)
                if (SiteListdata.length == 0) {
                    $("#SiteCompleteAll").css("display", "none");
                }
                else {
                    $("#SiteCompleteAll").css("display", "block");
                }

        },

        Complete_All_Annualcompliance_Tasks: function (parentAccountid, LanguageCode) {
            var ButtonLable = tdg.error_message.message("m000121");
            var ButtonCompleteLable = tdg.error_message.message("m000123");

            //create complete all button for company
            var Button_CompanyCompleteAll = '<div class="input-group pull-right"><button type="button" id="CompanyCompleteAll" class="btn btn-primary pull-left action">'
                + ButtonCompleteLable + '</button></div>';
            const CompanyCompleteButtonLocation = document.querySelector('table[data-name="tab_11_section_1"]');
            CompanyCompleteButtonLocation.insertAdjacentHTML('beforebegin', Button_CompanyCompleteAll);

            //crate complete all button for site
            const SiteCompleteButtonLocation = document.querySelector('table[data-name="annual_compliance_section_2"]');
            var Button_SiteCompleteAll = '<div class="input-group pull-right"><button type="button" id="SiteCompleteAll" class="btn btn-primary pull-left action">'
                + ButtonLable + '</button></div>';
            SiteCompleteButtonLocation.insertAdjacentHTML('beforebegin', Button_SiteCompleteAll);
            //clicke event for company button
            $("#CompanyCompleteAll").on("click", function () {
                $('#loader').show();
                var Listdata = tdg.webapi.SelectedColumnlist("tasks", "activityid", "cid_tasklevel eq 100000000 and _regardingobjectid_value eq "
                    + parentAccountid);

                for (var i = 0; i < Listdata.length; i++) {

                    var data = {
                        "statecode": 1,
                        "statuscode": 5
                    };
                    tdg.cid.WebApi_Update_With_Spinner("tasks", Listdata[i].activityid, data);
                    $("#CompanyCompleteAll").css("display", "none");
                }//end for

                // $(".entity-grid").trigger("refresh");
                // setTimeout(tdg.cid.Refresh_EntityGrid, 6000);
                //$('#loader').hide();
            });
            //click event for site button
            $("#SiteCompleteAll").on("click", function () {
                $('#loader').show();
                var Listdata = tdg.webapi.SelectedColumnlist("tasks",
                    "activityid", "cid_tasklevel eq 100000001 and _regardingobjectid_value eq "
                + parentAccountid);

                for (var i = 0; i < Listdata.length; i++) {
                    $('#loader').show();
                    var data = {
                        "statecode": 1,
                        "statuscode": 5
                    };
                    tdg.cid.WebApi_Update_With_Spinner("tasks", Listdata[i].activityid, data);
                }//end for

                $("#SiteCompleteAll").css("display", "none");

                // $(".entity-grid").trigger("refresh");
                // setTimeout(tdg.cid.Refresh_EntityGrid, 7000);
            });
            //hide or show complete button based on tasks completions
            tdg.cid.Check_If_AnnualTasks_Completed(parentAccountid);
        },


        Setup_site_Profile_Title: function (CompanyName) {
            var SiteLable = tdg.error_message.message("m000127");
            var LatitudeLabel = tdg.error_message.message("m000128");
            var LongtituedLable = tdg.error_message.message("m000129");
            var TDGActivityHeaderLabel = tdg.error_message.message("m000124");
            var ModeOftransportationHeaderLable = tdg.error_message.message("m000126");
            var ClassHeaderLabel = tdg.error_message.message("m000125");

            //get site id
            var urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('id')) {
                var recodId = urlParams.get('id');
                var SiteAddressInfo = tdg.webapi.SelectedColumnlist("accounts",
                    "cid_sitename,ovs_address_type,address1_line1,address1_city,ovs_address1_province,address1_stateorprovince,address1_latitude,address1_longitude,ovs_lld_quarter,ovs_lld_section,ovs_lld_township,ovs_lld_range,ovs_lld_meridian",
                    "accountid eq " + recodId);
                var cid_sitename = SiteAddressInfo[0]["cid_sitename"];
                var ovs_address_type = SiteAddressInfo[0]["ovs_address_type"];
                var address1_line1 = SiteAddressInfo[0]["address1_line1"];
                var address1_city = SiteAddressInfo[0]["address1_city"];
                var address1_stateorprovince = SiteAddressInfo[0]["address1_stateorprovince"];
                var address1_latitude = SiteAddressInfo[0]["address1_latitude"];
                var address1_longitude = SiteAddressInfo[0]["address1_longitude"];
                var ovs_lld_quarter = SiteAddressInfo[0]["ovs_lld_quarter"];
                var ovs_lld_section = SiteAddressInfo[0]["ovs_lld_section@OData.Community.Display.V1.FormattedValue"];
                var ovs_lld_township = SiteAddressInfo[0]["ovs_lld_township@OData.Community.Display.V1.FormattedValue"];
                var ovs_lld_range = SiteAddressInfo[0]["ovs_lld_range@OData.Community.Display.V1.FormattedValue"];
                var ovs_lld_meridian = SiteAddressInfo[0]["ovs_lld_meridian@OData.Community.Display.V1.FormattedValue"];
                var pageTitle = CompanyName;
                if (cid_sitename != null && cid_sitename != "") {
                    if (cid_sitename.toLowerCase().indexOf("site") < 0) {
                        cid_sitename = cid_sitename + " " + SiteLable;
                    }
                    pageTitle = pageTitle + " - " + cid_sitename;
                }
                else {
                    var sitefulladdress;
                    //if the address is postal
                    if (ovs_address_type == 0) {
                        sitefulladdress = address1_line1 + ", " + address1_city + ", " + address1_stateorprovince + " " + SiteLable;
                        pageTitle = pageTitle + " - " + sitefulladdress;

                    }
                    else if (ovs_address_type == 1) {
                        if (ovs_lld_quarter != null) {
                            sitefulladdress = SiteAddressInfo[0]["ovs_lld_quarter@OData.Community.Display.V1.FormattedValue"] + " - ";
                        }
                        sitefulladdress = sitefulladdress + ovs_lld_section + " - " +
                            ovs_lld_township + " - " + ovs_lld_range + " - " + ovs_lld_meridian + " " + SiteLable;
                        pageTitle = pageTitle + " - " + sitefulladdress;
                    }
                    else if (ovs_address_type == 2) {
                        sitefulladdress = LatitudeLabel + ": " + address1_latitude + " " + LongtituedLable + ": " + address1_longitude + " " + SiteLable;
                        pageTitle = pageTitle + " - " + sitefulladdress;
                    }

                }
                const titleElement = document.getElementsByClassName("tab-title");
                console.log("before title");
                titleElement[0].innerHTML = pageTitle;
                const TDGActivitiesHeaderElement = $('table[data-name="tab_5_section_1"]').parent();
                //document.querySelector('[aria-label="TDG Activity Types"]');
                const ClassesHeaderElement = $('table[data-name="site_details_section_5"]').parent();
                //document.querySelector('[ aria-label="Classes"]');
                TDGActivitiesHeaderElement.children(0)[0].innerHTML = TDGActivityHeaderLabel + " " + pageTitle;
                //innerHTML = TDGActivityHeaderLabel + " " + pageTitle;
                ClassesHeaderElement.children(0)[0].innerHTML = ClassHeaderLabel + " " + pageTitle;
                //= ClassHeaderLabel + " " + pageTitle;
                var ModeTable = $('table[data-name="site_details2_section_6"]').parent();
                // document.getElementById('siteModesOfTransportation');
                ModeTable.children(0)[0].innerHTML = ModeOftransportationHeaderLable + " " + pageTitle;
                //.closest('fieldset').children[0].innerHTML = ModeOftransportationHeaderLable + " " + pageTitle;
            }
        },

        Refresh_EntityGrid() {
            $(".entity-grid").trigger("refresh");
        },

        contact_update: function (data) {
            debugger;
            if (data.PhysicalLocationAddress != null) {
                data.ovs_legalname = data.LegalName;
                data.ovs_legalnamefr = data.LegalName;
                data.name = data.OperatingName;
                data.ovs_namefr = data.OperatingName;
                var a = data.PhysicalLocationAddress;
                data.address1_line1 = a.AddressLine1Text;
                data.address1_line2 = a.AddressLine2Text;
                data.address1_line3 = a.AddressLine3Text;
                data.address1_city = a.CityName;
                data.address1_stateorprovince = a.ProvinceStateCode;
                data.address1_postalcode = a.PostalZipCode;
            }
            if (data.address != null) {
                data.ovs_legalname = data.cid_legalname;
                data.ovs_legalnamefr = data.cid_legalname;
                data.name = data.cid_operatingname;
                data.ovs_namefr = data.cid_operatingname;
                var a = data.address;
                data.address1_line1 = a.AddressLine1Text;
                data.address1_line2 = a.AddressLine2Text;
                data.address1_line3 = a.AddressLine3Text;
                data.address1_city = a.CityName;
                data.address1_stateorprovince = a.ProvinceStateCode;
                data.address1_postalcode = a.PostalZipCode;
            }

            $('#cid_legalname').val(data.ovs_legalname);
            $('#ovs_legalnamefr').val(data.ovs_legalnamefr);
            $('#cid_operatingname').val(data.name);
            $('#cid_operatingnamefr').val(data.ovs_name_fr);
            $('#address1_line1').val(data.address1_line1);
            $('#address1_line2').val(data.address1_line2);
            $('#address1_line3').val(data.address1_line3);
            $('#address1_city').val(data.address1_city);
            $('#address1_stateorprovince').val(data.address1_stateorprovince);
            $('#address1_postalcode').val(data.address1_postalcode);
        },

        LLD_validateAddress_combination_Selections() {

            var FlowName = "CID_Portal_Validate_LLD_Entry";
            var addressType = $("#ovs_address_type :selected").text();

            var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses",
                "qm_value", "qm_name eq '" + FlowName + "'");

            if (EnvironmentSettingResult.length > 0) {
                var FlowURL = EnvironmentSettingResult[0]["qm_value"];
                var myHeaders = new Headers();

                myHeaders.append("Content-Type", "application/json");
                var Quarter = $("#ovs_lld_quarter :selected").text();
                var Section = $("#ovs_lld_section :selected").text();
                var Township = $("#ovs_lld_township :selected").text();
                var Range = $("#ovs_lld_range :selected").text();
                var Meridian = $("#ovs_lld_meridian :selected").text();

                var raw = JSON.stringify({
                    "Quarter": Quarter,
                    "Section": Section,
                    "TownShip": Township,
                    "Range": Range,
                    "Meridian": Meridian
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch(FlowURL, requestOptions)
                    .then(response => response.text())
                    .then(result => {

                        if (result == "Not found") {
                            console.log("resut " + result);
                            return false;
                        }
                        else {
                            console.log("resut Success" + result);
                            return true;
                        }
                    }

                    )
                    .catch(error => console.log('error', error));

            }//end check if flow IRL is found
        }
    }
}

// CompanyRegistrationWizard
if (typeof (tdg.cid.crw) == "undefined") {
    tdg.cid.crw = {
        // start
        start_clear_parentcustomerid: function () {
            $("#cid_crabusinessnumber").val("");
            $("#cid_reasonfornobnnumber").val("");
            $("#cid_reasonfornobnnumber_other").val("");
            $("#cid_legalname").val("");
            $("#ovs_legalnamefr").val("");
            $("#cid_operatingname").val("");

            $("#parentcustomerid").attr("value", null);
            $("#parentcustomerid_name").attr("value", null);
        },

        start_cid_crabusinessnumber_onchange: async function (step_start) {
            var cid_crabusinessnumber = $("#cid_crabusinessnumber").val();
            var data;
            var environment = tdg.cid.crw.Get_Enviroment_From_EnvironmentSettings();
            //if pre prod or prod
            console.log("environment.toLowerCase() : " + environment.toLowerCase());
            if (environment.toLowerCase() == "preprod" || environment.toLowerCase() == "prod") {
                //use CRA API to get iformation
                data = await tdg.cid.crw.Production_start_Retrieve_cra(cid_crabusinessnumber, step_start);
            }
            else {
                // retrieve information from FakeBN entity in dynamics
                data = await tdg.cid.crw.start_Retrieve_cra(cid_crabusinessnumber, step_start);
            }

            //show notice if the data is empty
            if (data.length == 0) {
                var msg = tdg.error_message.message("m000001");
                tdg.c.dialog_OK(msg);
            }
            return data;
        },

        Create_SupportRequest_For_Duplicate_Organization: function (rom_data, contactid) {
            var SupportRequestType = tdg.webapi.SelectedColumnlist("ovs_supportrequesttypes", "ovs_supportrequesttypeid", "ovs_code eq 'PreDuplicateOrganization'");

            var value = {
                "ovs_Company@odata.bind": "/accounts(" + rom_data[0].accountid + ")",
                "ovs_CreatedByExternalUser@odata.bind": "/contacts(" + contactid + ")",
                "ovs_RequestType@odata.bind": "/ovs_supportrequesttypes(" + SupportRequestType[0].ovs_supportrequesttypeid + ")",
                "ovs_requestdetails": "The details provided about the support request."

            };
            tdg.webapi.create("ovs_supportrequests", value);
            //m000201
            var PopUpd_msg = tdg.error_message.message("m000201");
            var i;
            for (i = 0; i < rom_data.length; i++) {
                var data = {
                    "cid_cidcompanystatus": 278410001
                };

                tdg.webapi.update("accounts", rom_data[i].accountid, data);
            }//end for loop

            tdg.c.dialog_OK(PopUpd_msg);
            var message = tdg.error_message.message("BTN_NEXT");
            $("#btn_next").prop("value", message);
            //"There was a problem with your registration. You will be notified when the problem is resolved.
        },

        start_buttons_confirm: function (value, btn_next_name) {
            $('#cid_has_cra_bn').prop("disabled", !value);
            $('#cid_crabusinessnumber').attr("readonly", !value);
            $('#cid_reasonfornobnnumber').prop("disabled", !value);
            $('#cid_reasonfornobnnumber_other').attr("readonly", !value);

            $('#' + btn_next_name).prop("disabled", !value);
        },

        update_address_from_cra: function (bn) {
            var address1_line1 = sessionStorage.getItem("address1_line1") + "";

            if (address1_line1 == "null") return;

            var address1_line2 = sessionStorage.getItem("address1_line2");
            address1_line2 = (address1_line2 == "null" ? "" : address1_line2);
            var address1_city = sessionStorage.getItem("address1_city");
            var address1_stateorprovince = sessionStorage.getItem("address1_stateorprovince");
            var address1_postalcode = sessionStorage.getItem("address1_postalcode");

            $("#address1_line1").val(address1_line1);
            $("#address1_line2").val(address1_line2);
            $("#address1_line3").val("");
            $("#address1_city").val(address1_city);
            $("#address1_stateorprovince").val(address1_stateorprovince);
            $("#address1_postalcode").val(address1_postalcode);
        },

        data_confirm_dialog: async function (cid_has_cra_bn, bn, legalname, legalnamefr, cid_reasonfornobnnumber_list) {
            // save to use in step1
            _cra_record = null;

            var data = {};
            data.length = 0;
            if (cid_has_cra_bn == "1") {
                var cra_data;
                var environment = tdg.cid.crw.Get_Enviroment_From_EnvironmentSettings();
                //if pre prod or prod

                if (environment.toLowerCase() == "preprod" || environment.toLowerCase() == "prod") {
                    //use CRA API to get information
                    if ((/^[0-9]+$/.test(bn)) && (bn.trim().length == 9)) {
                        cra_data = await tdg.cid.crw.Production_start_Retrieve_cra(bn, "");
                    }
                    else {
                        cra_data = {};
                        cra_data.length = 0;
                    }

                    //show notice if the data is empty
                    if (cra_data.length == 0) {
                        var msg = tdg.error_message.message("m000001");
                        tdg.c.dialog_OK(msg);
                    }
                    // save to use in step1
                    _cra_record = cra_data;
                }
                else {
                    // retrieve information from FakeBN entity in dynamics
                    cra_data = tdg.cid.crw.start_Retrieve_cra(bn, "");
                    // save to use in step1
                    _cra_record = cra_data;
                }
                if (cra_data.length == 0) {
                    return data;
                }

                data.length = 1;
                data.cid_has_cra_bn = 1;
                data.cid_legalname = cra_data.LegalName;
                data.cid_legalnameFr = cra_data.LegalName;
                data.cid_operatingname = cra_data.OperatingName;
                data.cid_operatingnameFr = cra_data.OperatingName;
                data.cid_crabusinessnumber = bn;
                data.address = cra_data.PhysicalLocationAddress;
            }
            else {
                var account = tdg.cid.crw.start_account_by_name(legalname, legalnamefr);
                //account = account.filter(a => a.ovs_legalnamefr == legalnamefr);
                if (account.length > 0) {
                    account = account[0];

                    data.length = 1;
                    data.cid_has_cra_bn = account.cid_has_cra_bn;
                    data.cid_crabusinessnumber = account.cid_crabusinessnumber;
                    data.cid_legalname = account.ovs_legalname;
                    data.cid_legalnameFR = account.ovs_legalnamefr;
                    data.cid_operatingname = account.name;
                    data.cid_operatingnameFr = account.ovs_namefr;
                    data.cid_reasonfornobnnumber_index = null;

                    var cid_reasonfornobnnumber = account.cid_reasonfornobnnumber;
                    for (var i = 0; i < cid_reasonfornobnnumber_list.length; i++) {
                        if (cid_reasonfornobnnumber == cid_reasonfornobnnumber_list[i].value) {
                            cid_reasonfornobnnumber = cid_reasonfornobnnumber_list[i].text;
                            break;
                        }
                    }
                    data.cid_reasonfornobnnumber = cid_reasonfornobnnumber;
                    data.cid_reasonfornobnnumber_other = account.cid_reasonfornobnnumber_other;
                    data.cid_reasonfornobnnumber_index = account.cid_reasonfornobnnumber;

                    var address = {};
                    address.AddressLine1Text = account.address1_line1;
                    address.AddressLine2Text = account.address1_line2;
                    address.AddressLine3Text = account.address1_line3;
                    address.CityName = account.address1_city;
                    address.ProvinceStateCode = account.address1_stateorprovince;
                    address.PostalZipCode = account.address1_postalcode;

                    data.address = address;

                }//end check account length is greater than zero
            }

            var a = data.address;
            sessionStorage.setItem("cid_found_account", 0); // false

            if (a != null) {
                sessionStorage.setItem("cid_found_account", 1); // true

                sessionStorage.setItem("address1_line1", a.AddressLine1Text);
                sessionStorage.setItem("address1_line2", a.AddressLine2Text);
                sessionStorage.setItem("address1_line3", a.AddressLine3Text);
                sessionStorage.setItem("address1_city", a.CityName);
                sessionStorage.setItem("address1_stateorprovince", a.ProvinceStateCode);
                sessionStorage.setItem("address1_postalcode", a.PostalZipCode);

                $("#address1_line1").val(a.AddressLine1Text);
                $("#address1_line2").val(a.AddressLine2Text);
                $("#address1_line3").val(a.AddressLine3Text);
                $("#address1_city").val(a.CityName);
                $("#address1_stateorprovince").val(a.ProvinceStateCode);
                $("#address1_postalcode").val(a.PostalZipCode);
            }
            return data;
        },

        start_btn_next_click: async function () {
            debugger;
            var value = Page_ClientValidate('');
            if (value) {
                var message = tdg.error_message.message("m000038");
                $("#btn_next").prop("value", message);

                var cid_has_cra_bn = $("#cid_has_cra_bn").val();
                var bn = $("#cid_crabusinessnumber").val();
                var legalname = $("#cid_legalname").val();
                var legalnamefr = $("#ovs_legalnamefr").val();
                var cid_reasonfornobnnumber_list = {};
                var cid_reasonfornobnnumber = $("#cid_reasonfornobnnumber").val();
                if (cid_reasonfornobnnumber != "") {
                    cid_reasonfornobnnumber_list = $("#cid_reasonfornobnnumber")[0].options;
                }
                var cid_reasonfornobnnumber_other = $("#cid_reasonfornobnnumber_other").val();
                const data = await tdg.cid.crw.data_confirm_dialog(cid_has_cra_bn, bn, legalname, legalnamefr, cid_reasonfornobnnumber_list);
                if (data.length == 0) {
                    if (cid_has_cra_bn == "1") {
                        var message = tdg.error_message.message("m000001");
                        tdg.c.dialog_OK(message);

                        var message = tdg.error_message.message("BTN_NEXT");
                        $("#btn_next").prop("value", message);
                        return;
                    }
                    else {
                        var cid_has_invitation = sessionStorage.getItem("cid_has_invitation");
                        if (cid_has_invitation == 'false') {
                            $("#NextButton").click();
                            return;
                        }
                    }
                }

                if (data.length == 1) {
                    data.invitation_ind = false;
                    var btn_next_name = "btn_next"
                    tdg.cid.crw.start_buttons_confirm(false, btn_next_name);
                    tdg.cid.crw.start_confirm(data, (ans) => {
                        if (ans) {
                            debugger;
                            tdg.cid.crw.start_buttons_confirm(true, btn_next_name);
                            $("#NextButton").click();
                        } else {
                            debugger;
                            tdg.cid.crw.start_buttons_confirm(true, btn_next_name);
                            var message = tdg.error_message.message("BTN_NEXT");
                            $("#btn_next").prop("value", message);

                            var msg = (data.cid_has_cra_bn == "1" ? "m000045" : "m000046");
                            msg = tdg.error_message.message(msg);
                            tdg.c.dialog_OK(msg);
                        }
                    });
                }
                else {
                    $("#NextButton").click();
                }
            }
        },

        Check_If_Confirmation_Dialog_Data_Iscomplete: function () {
            debugger;

            if (
                $("#cid_legalname2").val() == null || $("#cid_legalname2").val() == "" ||
                $("#cid_legalname_fr2").val() == null || $("#cid_legalname_fr2").val() == "" ||
                $("#cid_operatingname2").val() == null || $("#cid_operatingname2").val() == "" ||
                $("#cid_operatingname_fr2").val() == null || $("#cid_operatingname_fr2").val() == ""
            ) {
                $("#btn_ok").prop('disabled', true);
            }

            //check if no bn number
            else if ($("#hasCRABN :selected").val() == 0) {
                if ($("#cid_reasonfornobnnumberpopup :selected").val() > 0) {
                    if ($("#cid_reasonfornobnnumberpopup :selected").val() == 3) {
                        if ($("#cid_reasonfornobnnumber_other_popup").val() == null || $("#cid_reasonfornobnnumber_other_popup").val().trim() == "") {
                            $("#btn_ok").attr("disabled", "disabled");
                        }
                        else {
                            //$("#btn_ok").removeAttr("disabled");
                            $("#btn_ok").prop('disabled', false);
                        }
                    }//end if equal 3
                    else {
                        //$("#btn_ok").removeAttr("disabled");
                        $("#btn_ok").prop('disabled', false);
                    }//end else

                }
                else {
                    $("#btn_ok").prop('disabled', true);
                }

            }
            //check if CRA is required
            else if ($("#hasCRABN :selected").val() == 1) {
                if ($("#cid_crabusinessnumberpopup").val() == null || $("#cid_crabusinessnumberpopup").val() == "") {
                    $("#btn_ok").prop('disabled', true);
                }
                else {
                    // $("#btn_ok").removeAttr("disabled");
                    $("#btn_ok").prop('disabled', false);
                }
            }

            // $("#btn_ok").attr("disabled", "disabled");
        },

        Manage_Invitation_Confirmation_Form: function () {
            $("#DivReason").hide();
            $("#DivOther").hide();
            $("#cid_reasonfornobnnumberpopup").hide();
            $("#cid_reasonfornobnnumberpopup_label").hide();
            $("#btn_ok").attr("disabled", "disabled");

            $("#cid_reasonfornobnnumber_other_popup").hide();
            $("#cid_reasonfornobnnumber_other_popup_label").hide();
            var list = $("#cid_reasonfornobnnumber")[0].options;

            for (var i = 0; i < list.length; i++) {
                let option = document.createElement("option");
                option.value = list[i].value;
                option.innerHTML = list[i].text;
                $("#cid_reasonfornobnnumberpopup").append(option);
            }

            //disabled and enable ok button based on data
            tdg.cid.crw.Check_If_Confirmation_Dialog_Data_Iscomplete();

            //hasCRABN
            $("#hasCRABN").change(function () {
                tdg.cid.crw.hasCRABN_onchange();
            });

            $("#cid_reasonfornobnnumberpopup").change(function () {
                if ($("#cid_reasonfornobnnumberpopup :selected").val() == 3) {
                    $("#DivOther").show();
                    $("#cid_reasonfornobnnumber_other_popup").show();
                    $("#cid_reasonfornobnnumber_other_popup_label").show();
                }
                else {
                    $("#DivOther").hide();
                    $("#cid_reasonfornobnnumber_other_popup").hide();
                    $("#cid_reasonfornobnnumber_other_popup_label").hide();
                }
                //disabled and enable ok button based on data
                tdg.cid.crw.Check_If_Confirmation_Dialog_Data_Iscomplete();
            });

            $("#cid_reasonfornobnnumber_other_popup").change(function () {
                //disabled and enable ok button based on data
                tdg.cid.crw.Check_If_Confirmation_Dialog_Data_Iscomplete();
            });

            $("#cid_crabusinessnumberpopup").change(function () {
                //disabled and enable ok button based on data
                tdg.cid.crw.Check_If_Confirmation_Dialog_Data_Iscomplete();
            });

            $("#cid_legalname_fr2").change(function () {
                //disabled and enable ok button based on data
                tdg.cid.crw.Check_If_Confirmation_Dialog_Data_Iscomplete();
            });

            $("#cid_legalname2").change(function () {
                //disabled and enable ok button based on data
                tdg.cid.crw.Check_If_Confirmation_Dialog_Data_Iscomplete();
            });

            $("#cid_operatingname_fr2").change(function () {
                //disabled and enable ok button based on data
                tdg.cid.crw.Check_If_Confirmation_Dialog_Data_Iscomplete();
            });
            $("#cid_operatingname2").change(function () {
                //disabled and enable ok button based on data
                tdg.cid.crw.Check_If_Confirmation_Dialog_Data_Iscomplete();
            });

            tdg.cid.crw.hasCRABN_onchange();
        },

        hasCRABN_onchange: function () {
            debugger;

            //check if no bn number
            if ($("#hasCRABN :selected").val() == 0) {
                $("#DivReason").show();
                $("#DivOther").hide();
                $("#DivBN").hide();
                $("#cid_reasonfornobnnumberpopup").show();
                $("#cid_reasonfornobnnumberpopup_label").show();

                $("#cid_crabusinessnumberpopup_label").hide();
                $("#cid_crabusinessnumberpopup").hide();

                //disabled and enable ok button based on data
                tdg.cid.crw.Check_If_Confirmation_Dialog_Data_Iscomplete();
            }
            else if ($("#hasCRABN :selected").val() == 1) {
                $("#DivBN").show();
                $("#DivOther").hide();
                $("#DivReason").hide();
                $("#cid_reasonfornobnnumberpopup").hide();
                $("#cid_reasonfornobnnumberpopup_label").hide();
                $("#cid_reasonfornobnnumber_other_popup").hide();
                $("#cid_reasonfornobnnumber_other_popup_label").hide();

                $("#cid_crabusinessnumberpopup_label").show();
                $("#cid_crabusinessnumberpopup").show();

            }
            //disabled and enable ok button based on data
            tdg.cid.crw.Check_If_Confirmation_Dialog_Data_Iscomplete();
        },

        start_account_by_name: function (legalname, legalnamefr) {
            debugger;

            legalname = tdg.c.replace_filter_special_char(legalname);
            legalnamefr = tdg.c.replace_filter_special_char(legalnamefr);

            var filter = "ovs_legalname eq '" + legalname + "'";
            var account = tdg.c.WebApi_List("accounts", filter);
            account = account.filter(a => a.customertypecode == 948010000 && a.statecode == 0 && a.ovs_legalnamefr == legalnamefr);
            return account;
        },

        start_confirm: function (data, handler) {
            debugger;

            data.cid_crabusinessnumber = (data.cid_crabusinessnumber == null ? "" : data.cid_crabusinessnumber);
            data.cid_has_cra_bn = (data.cid_crabusinessnumber == "" ? 0 : 1);

            var header = tdg.error_message.message("CID_PORTAL");
            var msg_btn_ok = tdg.error_message.message("BTN_IS_MY_COMPANY");
            var msg_btn_cancel = tdg.error_message.message("BTN_IS_NOT_MY_COMPANY");
            var lbl_legal_name = tdg.error_message.message("lbl_legal_name");
            var lbl_legal_name_fr = tdg.error_message.message("lbl_legal_name_fr");
            var lbl_operating_name = tdg.error_message.message("lbl_operating_name");
            var lbl_operating_name_fr = tdg.error_message.message("lbl_operating_name_fr");
            var lbl_cra_bn = tdg.error_message.message("lbl_cra_bn");
            var lbl_address = tdg.error_message.message("lbl_address");
            var lbl_reasonfornobnnumber = tdg.error_message.message("lbl_reasonfornobnnumber");
            var lbl_reasonfornobnnumber_other = tdg.error_message.message("lbl_reasonfornobnnumber_other");
            var lbl_confirm_is_company = tdg.error_message.message("m000052");
            var yes = tdg.error_message.message("Yes");
            var no = tdg.error_message.message("No");
            var hasCraMessag = tdg.error_message.message("m000212");
            var CRA_BN = "" + data.cid_crabusinessnumber;
            var Other_reason = "" + data.cid_reasonfornobnnumber_other;
            if (Other_reason == null || Other_reason == "undefined") { Other_reason = ""; }

            data.cid_legalnameFR = (data.cid_legalnameFR == null ? "" : data.cid_legalnameFR);
            data.cid_operatingnameFr = (data.cid_operatingnameFr == null ? "" : data.cid_operatingnameFr);

            data.address.AddressLine2Text = (data.address.AddressLine2Text == null ? "" : data.address.AddressLine2Text);
            data.address.AddressLine3Text = (data.address.AddressLine3Text == null ? "" : data.address.AddressLine3Text);

            var text_middle = "";
            if (data.cid_has_cra_bn == 1) {
                text_middle = `
                    <p>
                    <label for="cid_crabusinessnumber" class="field-label">${lbl_cra_bn}</label>
                    <input type="text" readonly class="text form-control" id="cid_crabusinessnumber" style="width:100%" value="${data.cid_crabusinessnumber}">
	                `;
            }
            else {
                var cid_reasonfornobnnumber = data.cid_reasonfornobnnumber;
                text_middle = `
                    <p>
                    <label for="cid_reasonfornobnnumber" class="field-label">${lbl_reasonfornobnnumber}</label>
                    <input type="text" readonly class="text form-control" id="cid_reasonfornobnnumber" style="width:100%" value="${cid_reasonfornobnnumber}">
	                `;
                if (data.cid_reasonfornobnnumber == 3) {
                    text_middle += `
                    <p>
                    <label for="cid_reasonfornobnnumber_other" class="field-label">${lbl_reasonfornobnnumber_other}</label>
                    <input type="text" readonly class="text form-control" id="cid_reasonfornobnnumber_other" style="width:100%" value="${data.cid_reasonfornobnnumber_other}">
	                `;
                }
            }

            var invitation_msg = "";

            sessionStorage.setItem("invitation_ind", data.invitation_ind);
            sessionStorage.setItem("accountId", data.accountid);
            if (data.invitation_ind) {
                debugger;

                invitation_msg = tdg.error_message.message("m000033");
                invitation_msg = invitation_msg.replaceAll("{0}", data.cid_legalname);
                var option_0 = (data.cid_has_cra_bn == 0? "selected" : "");
                var option_1 = (data.cid_has_cra_bn == 1? "selected" : "");

                text_middle = `
                <p>
                <div> <label for="hasCRABN">${hasCraMessag}</label>
                    <span style="color: red">*</span>
                </div>
                <select name="hasCRABN" id="hasCRABN" class="form-control" style="width:100%">
                    <option ${option_0} value="0">${no}</option>
                    <option ${option_1} value="1">${yes}</option>
                </select>

                <div id="DivBN">
                    <label for="cid_crabusinessnumberpopup" id="cid_crabusinessnumberpopup_label" class="field-label">${lbl_cra_bn}</label>
                    <span style="color: red">*</span>
                </div>
                <input type="number" class="text form-control" onKeyPress="if(this.value.length==9) return false;"  id="cid_crabusinessnumberpopup" style="width:100%" value=${CRA_BN}>

                <div id="DivReason">
                <label for="cid_reasonfornobnnumberpopup" id="cid_reasonfornobnnumberpopup_label"  class="field-label">${lbl_reasonfornobnnumber}</label>
                <span style="color: red">*</span>
                </div>
                <select name="cid_reasonfornobnnumberpopup"  id="cid_reasonfornobnnumberpopup" class="form-control" style="width:100%">
                    <option value="-1"></option>
                    
                </select>
                <div id="DivOther">
                    <label id="cid_reasonfornobnnumber_other_popup_label" for="cid_reasonfornobnnumber_other_popup" class="field-label">${lbl_reasonfornobnnumber_other}</label>
                    <span style="color: red">*</span>
                    </div>
                <input type="text"  class="text form-control" id="cid_reasonfornobnnumber_other_popup" style="width:100%" value="${Other_reason}">
	            `;
            }
            else {
                invitation_msg = (data.cid_has_cra_bn == 1 ? "m000041" : "m000042");
                invitation_msg = tdg.error_message.message(invitation_msg);
                if (data.cid_has_cra_bn == 1) {
                    invitation_msg = invitation_msg.replaceAll("{0}", data.cid_crabusinessnumber);
                }
                else {
                    invitation_msg = invitation_msg.replaceAll("{0}", data.cid_legalname);
                }
            }

            data.address.AddressLine1Text = (data.address.AddressLine1Text == null ? "" : data.address.AddressLine1Text);
            if (data.address.AddressLine1Text != "") {
                var address = data.address.AddressLine1Text + "<br>" +
                    data.address.AddressLine2Text + "<br>" +
                    (data.address.AddressLine3Text != "" ? data.address.AddressLine3Text + "<br>" : "") +
                    data.address.CityName + ", " + data.address.ProvinceStateCode + " " + data.address.PostalZipCode;
            }
            else {
                var address = "";
            }

            var text1 = `
                    <section class="wb-lbx modal-dialog modal-content overlay-def" id="myModal">
	                <header class="modal-header">
	                <h2 class="modal-title">${header}</h2>
	                </header>
	                <div class="modal-body" >
                    <p>
                    <b>${invitation_msg}</b><hr>
                    <p>
                    <div id="ErrorMessageDiv" class="alert alert-danger" role="alert">  </div>
                    <div >
                       <label for="cid_legalname2" class="field-label">${lbl_legal_name}</label>
                       <span style="color: red">*</span>
                    </div>
                    <input type="text" readonly class="text form-control" id="cid_legalname2" style="width:100%" value="${data.cid_legalname}">
                    <p>
                    <div>
                      <label for="cid_legalname_fr2" class="field-label">${lbl_legal_name_fr}</label>
                      <span style="color: red">*</span>
                    </div>
                    <input type="text" readonly class="text form-control" id="cid_legalname_fr2" style="width:100%" value="${data.cid_legalnameFR}">
                   <p>
                    <div>
                        <label for="cid_operatingname2" class="field-label">${lbl_operating_name}</label>
                        <span style="color: red">*</span>
                    </div>
                    <input type="text" readonly class="text form-control" id="cid_operatingname2" style="width:100%" value="${data.cid_operatingname}">
                   <p>
                   <div>
                      <label for="cid_operatingname_fr2" class="field-label">${lbl_operating_name_fr}</label>
                      <span style="color: red">*</span>
                    </div>
                    <input type="text" readonly class="text form-control" id="cid_operatingname_fr2" style="width:100%" value="${data.cid_operatingnameFr}">
                    ` +
                text_middle +
                `
                    <p>
                    <label for="address1_line1" class="field-label">${lbl_address}</label><br>
                    <p>${address}</p>
	                </div>
	                <div class="modal-footer" style="text-align: left;">
                    <label for="opt_confirm" class="field-label">${lbl_confirm_is_company}</label>
                    <p><br>
	                <button id="btn_ok" type="button" class="pull-left btn btn-primary button next submit-btn">${msg_btn_ok}</button>
	                <button id="btn_cancel" type="button" class="pull-left btn btn-primary button next submit-btn" data-dismiss="modal">${msg_btn_cancel}</button>
	                </section>
	                `;
            $(text1).appendTo('body');
            //hide div that display error
            $('#ErrorMessageDiv').css('display', 'none');

            $("#cid_legalname2").focus();

            $("#myModal").css('top', '1%');
            $("#myModal").css('left', '40%');
            $("#myModal").css('position', 'fixed');
            $("#myModal").css('z-index', '9999');

            if (data.invitation_ind) {
                debugger;

                tdg.cid.crw.hasCRABN_onchange();
                tdg.cid.crw.Manage_Invitation_Confirmation_Form();

                $("#cid_legalname2").removeAttr("readonly");
                $("#cid_legalname_fr2").removeAttr("readonly");
                $("#cid_operatingname2").removeAttr("readonly");
                $("#cid_operatingname_fr2").removeAttr("readonly");

                if (data.cid_reasonfornobnnumber_index != null) {
                    $("#cid_reasonfornobnnumberpopup")[0].options[data.cid_reasonfornobnnumber_index + 1].selected = true;
                    tdg.cid.crw.Check_If_Confirmation_Dialog_Data_Iscomplete();
                }
            }

            $("#btn_ok").click(function () {
                //hide div that display error
                $('#ErrorMessageDiv').css('display', 'none');
                var cid_crabusinessnumber = $("#cid_crabusinessnumberpopup").val();
                invitation_ind = sessionStorage.getItem("invitation_ind");
                sessionStorage.setItem("cid_has_cra_bn", $("#hasCRABN :selected").val());
                sessionStorage.setItem("cid_reasonfornobnnumber_other", $("#cid_reasonfornobnnumber_other_popup").val());
                sessionStorage.setItem("ovs_legalnamefr", $("#cid_legalname_fr2").val());
                sessionStorage.setItem("cid_operatingname_fr", $("#cid_operatingname_fr2").val());
                sessionStorage.setItem("cid_reasonfornobnnumber", $("#cid_reasonfornobnnumberpopup :selected").val());
                sessionStorage.setItem("cid_crabusinessnumber", cid_crabusinessnumber);
                console.log('($("#hasCRABN : selected").val()) : ' + ($("#hasCRABN :selected").val()));
                if (invitation_ind && ($("#hasCRABN :selected").val()) == 1) {
                    var data;
                    var environment = tdg.cid.crw.Get_Enviroment_From_EnvironmentSettings();
                    //if pre prod or prod
                    try {
                        if (environment.toLowerCase() == "preprod" || environment.toLowerCase() == "prod") {
                            //use CRA API to get iformation
                            // console.log("retrieved from production");
                            // data = await tdg.cid.crw.Production_start_Retrieve_cra(cid_crabusinessnumber, "");
                            var results = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq 'CID_Flow_CRA_API'");
                            //check if flow url is found
                            var CRA_Flow_URL;
                            var json = {};
                            if (results.length > 0) {
                                CRA_Flow_URL = results[0]["qm_value"];
                                //define flow paramaters
                                let body = {
                                    "cid_crabusinessnumber": cid_crabusinessnumber
                                };
                                //const CRAresult = await tdg.cid.crw.Call_CRA_Flow(CRA_Flow_URL, body);                               
                                var req = new XMLHttpRequest();
                                req.open("POST", CRA_Flow_URL, true);
                                req.setRequestHeader('Content-Type', 'application/json');
                                req.onreadystatechange = function () {
                                    if (this.readyState === 4) {
                                        req.onreadystatechange = null;
                                        if (this.status === 200) {
                                            var result = this.response;
                                            if (result.length == 0) {
                                                var msg = tdg.error_message.message("m000001");
                                                $('#ErrorMessageDiv').css('display', 'block');
                                                $('#ErrorMessageDiv').html("<p>" + msg + "</p>");
                                                $("#myModal").remove();
                                                handler(true);
                                            }
                                            else {
                                                {
                                                    var accid = sessionStorage.getItem("accountId");

                                                    var UpdateData = {
                                                        "cid_has_cra_bn": true,
                                                        "ovs_legalnamefr": $("#cid_legalname_fr2").val(),
                                                        "ovs_namefr": $("#cid_operatingname_fr2").val(),
                                                        "cid_crabusinessnumber": cid_crabusinessnumber,
                                                        "ovs_legalname": $("#cid_legalname2").val()
                                                    };

                                                    tdg.webapi.update("accounts", accid, UpdateData);

                                                    console.log("after update");
                                                    $("#cid_crabusinessnumber").val(cid_crabusinessnumber);
                                                    sessionStorage.setItem("cid_crabusinessnumber", cid_crabusinessnumber);

                                                    $("#cid_has_cra_bn").val($("#hasCRABN :selected").val());
                                                    $("#cid_reasonfornobnnumber_other").val($("#cid_reasonfornobnnumber_other_popup").val());
                                                    $("#cid_reasonfornobnnumber").val($("#cid_reasonfornobnnumberpopup :selected").val());

                                                    $("#ovs_legalnamefr").val($("#cid_legalname_fr2").val());
                                                    $("#cid_operatingname_fr").val($("#cid_operatingname_fr2").val());

                                                    //accountid

                                                    $("#myModal").remove();
                                                    handler(true);
                                                }
                                            }
                                        }
                                    }
                                }
                                req.send(body);
                            }
                        }
                        else {
                            console.log("retrieved from fake bn");
                            // retrieve information from FakeBN entity in dynamics
                            let FakeBNdata = tdg.cid.crw.start_Retrieve_cra(cid_crabusinessnumber, "");
                            if (FakeBNdata.length == 0) {
                                var msg = tdg.error_message.message("m000001");
                                $('#ErrorMessageDiv').css('display', 'block');
                                $('#ErrorMessageDiv').html("<p>" + msg + "</p>");
                            }
                            else {
                                {
                                    var accid = sessionStorage.getItem("accountId");

                                    var UpdateData = {
                                        "cid_has_cra_bn": true,
                                        "ovs_legalnamefr": $("#cid_legalname_fr2").val(),
                                        "ovs_namefr": $("#cid_operatingname_fr2").val(),
                                        "cid_crabusinessnumber": cid_crabusinessnumber,
                                        "ovs_legalname": $("#cid_legalname2").val()
                                    };
                                    tdg.webapi.update("accounts", accid, UpdateData);

                                    console.log("after update");
                                    $("#cid_crabusinessnumber").val(cid_crabusinessnumber);
                                    sessionStorage.setItem("cid_crabusinessnumber", cid_crabusinessnumber);

                                    $("#cid_has_cra_bn").val($("#hasCRABN :selected").val());
                                    $("#cid_reasonfornobnnumber_other").val($("#cid_reasonfornobnnumber_other_popup").val());
                                    $("#cid_reasonfornobnnumber").val($("#cid_reasonfornobnnumberpopup :selected").val());

                                    $("#ovs_legalnamefr").val($("#cid_legalname_fr2").val());
                                    $("#cid_operatingname_fr").val($("#cid_operatingname_fr2").val());

                                    //accountid
                                    $("#myModal").remove();
                                    handler(true);
                                }
                            }
                        }

                        //update data

                        {
                            var accid = sessionStorage.getItem("accountId");

                            var UpdateData = {
                                "cid_has_cra_bn": true,
                                "ovs_legalnamefr": $("#cid_legalname_fr2").val(),
                                "ovs_namefr": $("#cid_operatingname_fr2").val(),
                                "cid_crabusinessnumber": cid_crabusinessnumber,
                                "ovs_legalname": $("#cid_legalname2").val()
                            };

                            tdg.webapi.update("accounts", accid, UpdateData);

                            console.log("after update");
                            $("#cid_crabusinessnumber").val(cid_crabusinessnumber);
                            sessionStorage.setItem("cid_crabusinessnumber", cid_crabusinessnumber);

                            $("#cid_has_cra_bn").val($("#hasCRABN :selected").val());
                            $("#cid_reasonfornobnnumber_other").val($("#cid_reasonfornobnnumber_other_popup").val());
                            $("#cid_reasonfornobnnumber").val($("#cid_reasonfornobnnumberpopup :selected").val());

                            $("#ovs_legalnamefr").val($("#cid_legalname_fr2").val());
                            $("#cid_operatingname_fr").val($("#cid_operatingname_fr2").val());

                            //accountid

                            $("#myModal").remove();
                            handler(true);
                        }
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
                else if (invitation_ind && ($("#hasCRABN :selected").val()) == 0) {
                    var accid = sessionStorage.getItem("accountId");

                    var data = {
                        "cid_has_cra_bn": false,
                        "ovs_legalnamefr": $("#cid_legalname_fr2").val(),
                        "ovs_namefr": $("#cid_operatingname_fr2").val(),
                        "cid_reasonfornobnnumber": $("#cid_reasonfornobnnumberpopup :selected").val(),
                        "cid_reasonfornobnnumber_other": $("#cid_reasonfornobnnumber_other_popup").val(),
                        "ovs_legalname": $("#cid_legalname2").val()
                    };

                    tdg.webapi.update("accounts", accid, data);
                    $("#cid_reasonfornobnnumber_other").val($("#cid_reasonfornobnnumber_other_popup").val());
                    $("#cid_reasonfornobnnumber").val($("#cid_reasonfornobnnumberpopup :selected").val());
                    $("#myModal").remove();
                    handler(true);
                }
                else {
                    $("#myModal").remove();
                    handler(true);
                }
            });

            //Pass false to callback function
            $("#btn_cancel").click(function () {
                //handler(lse);
                $("#myModal").remove();
                handler(false);
            });
        },

        // CRA BN API - DEV ONLY
        start_Retrieve_cra: function (bn, step_start) {
            debugger;

            var data;
            var fake = {};
            var filter = "cid_businessregistrationnumber eq '" + bn + "'";

            data = tdg.c.WebApi_List("cid_fake_cra_bn_apis", filter);

            if (data == null) {
                return "";
            }

            if (data.length == 0) {
                return "";
            }

            data = data[0];

            fake.LegalName = data.cid_legalname;
            fake.LegalNameFr = data.cid_legalname;
            fake.OperatingName = data.cid_legalname;
            fake.OperatingNameFr = data.cid_legalname;
            fake.BusinessRegistrationNumber = bn;
            var a = {};
            a.AddressLine1Text = data.cid_addressline1text;
            a.AddressLine2Text = data.cid_addressline2text;
            a.CityName = data.cid_cityname;
            a.ProvinceStateCode = data.cid_provincestatecode;
            a.PostalZipCode = data.cid_postalzipcode;
            a.CountryCode = data.cid_countrycode;

            fake.PhysicalLocationAddress = a;

            if (step_start == "1") {
                tdg.cid.crw.start_BN_Selected(fake);
                return data;
            }
            else {
                return fake;
            }
        },

        // call flow in pre-prod and production environment only
        // will call flow to retrun CRA information
        Call_CRA_Flow: async function (CRA_Flow_URL, body) {
            var json = {};
            let response = await fetch(CRA_Flow_URL, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',

                body: JSON.stringify(body),
                redirect: 'follow'
            });

            return await response.json();
        },

        //CRA BN API - Production and PreProd
        Production_start_Retrieve_cra: async function (bn, step_start) {

            var CRA_Data = {};
            var cid_crabusinessnumber = bn;
            var json = {};

            //var CRA_Flow_URL;
            //retrieve the url of the flow used to get data from CRA
            var results = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq 'CID_Flow_CRA_API'");
            //check if flow url is found
            if (results.length > 0) {
                CRA_Flow_URL = results[0]["qm_value"];
                //define flow paramaters
                let body = {
                    "cid_crabusinessnumber": cid_crabusinessnumber
                };
                //wait for flow function to return  CRM response from flow
                const CRAresult = await tdg.cid.crw.Call_CRA_Flow(CRA_Flow_URL, body);
                json = CRAresult;
                // check if response has invlaid data
                if (json.IsInvalidData) {

                    CRA_Data.length = 0;
                    return CRA_Data;
                }
                else {

                    if (json == null) {
                        CRA_Data.length = 0;
                        return CRA_Data;
                    }

                    if (json.length == 0) {
                        CRA_Data.length = 0;

                        return CRA_Data;
                    }
                    //get CRA data
                    CRA_Data.LegalName = json.LegalName;

                    CRA_Data.OperatingName = json.LegalName;
                    CRA_Data.BusinessRegistrationNumber = cid_crabusinessnumber;
                    var a = {};
                    a.AddressLine1Text = json.PhysicalLocationAddress.AddressLine1Text;
                    a.AddressLine2Text = json.PhysicalLocationAddress.AddressLine2Text;
                    a.CityName = json.PhysicalLocationAddress.CityName;
                    a.ProvinceStateCode = json.PhysicalLocationAddress.ProvinceStateCode;
                    a.PostalZipCode = json.PhysicalLocationAddress.PostalZipCode;
                    a.CountryCode = json.PhysicalLocationAddress.CountryCode;

                    CRA_Data.PhysicalLocationAddress = a;
                    if (step_start == "1") {
                        CRA_Data.length = 1;
                        tdg.cid.crw.start_BN_Selected(CRA_Data);

                        return new Promise((resolve) => {
                            setTimeout(() => {
                                resolve(CRA_Data);
                            }, 2000);
                        });

                    }
                    else {
                        CRA_Data.length = 1;

                        return new Promise((resolve) => {
                            setTimeout(() => {
                                resolve(CRA_Data);
                            }, 2000);
                            //return CRA_Data;
                        });

                    } //end else

                }//end if invalid CRM number else
            }//end check lenght 
        },

        //get environment from environment setting (depending on the environment it will return either DEV, QA, ACC, PreProd , or Prod)
        Get_Enviroment_From_EnvironmentSettings: function () {
            var environment = "";
            // web api call to get cid enviroment
            var results = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq 'CID_Environment'");
            //check if flow url is found
            if (results.length > 0) {
                environment = results[0]["qm_value"];
            }
            return environment;
        },

        start_cid_reasonfornobnnumber_onchange: function (clear_ind) {
            if (clear_ind) {
                $("#cid_reasonfornobnnumber_other").val("");
            }

            cid_reasonfornobnnumber = $("#cid_reasonfornobnnumber").val();
            if (cid_reasonfornobnnumber == "3")   // other
            {
                tdg.c.control_show("cid_reasonfornobnnumber_other");
                tdg.c.addValidator("cid_reasonfornobnnumber_other");
            }
            else {
                tdg.c.control_hide("cid_reasonfornobnnumber_other");
                tdg.c.removeValidator("cid_reasonfornobnnumber_other");
            }
        },

        start_cid_has_cra_bn_onchange: function (step_start) {
            if (step_start == "1") {
                tdg.cid.crw.start_clear_parentcustomerid();
            }

            tdg.c.removeValidator("cid_crabusinessnumber");
            tdg.c.removeValidator("cid_reasonfornobnnumber");
            tdg.c.removeValidator("cid_reasonfornobnnumber_other");
            tdg.c.removeValidator("cid_legalname");
            tdg.c.removeValidator("ovs_legalnamefr");

            tdg.c.control_hide("cid_reasonfornobnnumber_other");

            var cid_has_cra_bn = $("#cid_has_cra_bn").val();

            // business number?
            if (cid_has_cra_bn == "0") {
                tdg.c.control_hide("cid_crabusinessnumber");
                tdg.c.control_show("cid_reasonfornobnnumber");

                tdg.c.addValidator("cid_legalname");
                tdg.c.addValidator("ovs_legalnamefr");
                tdg.c.addValidator("cid_reasonfornobnnumber");

                var cid_reasonfornobnnumber = $("#cid_reasonfornobnnumber").val();
                if (cid_reasonfornobnnumber == "3") // other
                {
                    tdg.c.control_show("cid_reasonfornobnnumber_other");
                }
                else {
                    tdg.c.control_hide("cid_reasonfornobnnumber_other");
                }

                if (step_start == "1") {
                    tdg.c.control_show("cid_legalname");
                    tdg.c.control_show("ovs_legalnamefr");
                    $("#cid_crabusinessnumber").val("");
                }
                else {
                    $('#ovs_legalname').attr("readonly", false);
                }
            }
            else {
                tdg.c.control_show("cid_crabusinessnumber");
                tdg.c.control_hide("cid_reasonfornobnnumber");

                tdg.c.addValidator("cid_crabusinessnumber");

                // clear data
                if (step_start == "1") {
                    tdg.c.control_hide("cid_legalname");
                    tdg.c.control_hide("ovs_legalnamefr");

                    $("#cid_reasonfornobnnumber").val("");
                    $("#cid_reasonfornobnnumber_other").val("");
                    $("#cid_legalname").val("");
                    $("#ovs_legalnamefr").val("");
                }
                else {
                    $('#ovs_legalname').attr("readonly", true);
                }
            }
        },

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
        },

        start_registration: function (rom_data, suppress_error, contact_id) {
            debugger;
            tdg.cid.contact_update(rom_data);
            if (rom_data.ovs_invitation_only) {
                var ovs_invitation_only = true;
                switch (rom_data.cid_cidcompanystatus) {
                    case 100000001:
                        ovs_invitation_only = false;
                        break;
                }
                rom_data.ovs_invitation_only = ovs_invitation_only;
            }

            if (rom_data.ovs_invitation_only) {
                validation = false;
                var message = tdg.error_message.message("BTN_NEXT");
                $("#btn_next").prop("value", message);

                var message = tdg.error_message.message("m000047");
                message = message.replaceAll("{0}", rom_data.ovs_legalname);
                tdg.c.dialog_YN(message, (ans) => {
                    invitation.request_onboard(rom_data, contact_id, ans, false)
                });
                return validation;
            }
            else {
                validation = invitation.in_current_registration(rom_data, suppress_error, contact_id);
                return validation;
            }
        },

        step2_previous_click: function (email, account_id, contact_id) {
            var message = tdg.error_message.message("m000039");
            tdg.c.dialog_YN(message, (ans) => {
                if (ans) {
                    data = {};
                    data.ovs_CreatedByExternalUser = contact_id;
                    data.ovs_Company = account_id;
                    data.ovs_RequestType = "038f80be-4aae-ed11-9885-0022483c8531";
                    data.ovs_requestdetails = "After the registrant moved to Step 2 in the registration process, they have requested to go back to Step 1. ";
                    data.ovs_priority = 5;
                    tdg.cid.ovs_supportrequest_insert(data);

                    message = tdg.error_message.message("m000040");
                    message = message.replaceAll("{0}", email);
                    tdg.c.dialog_OK(message);
                }
                else {
                }
            });
        },

        step2_Disable_ContactTypeFieldsForSecondaryUser: function (cid_contacttype) {
            debugger;

            //if not primary contact
            if (cid_contacttype != 100000000) {
                $("#btn_previous").attr('disabled', true);

                $("#name").prop("disabled", true);
                $("#cid_reasonfornobnnumber").prop("disabled", true);
                $("#cid_reasonfornobnnumber_other").prop("disabled", true);
                $("#ovs_namefr").prop("disabled", true);
                $("#address1_line1").css("pointer-events", "none");
                $("#WebResource_address_complete").css("pointer-events", "none");
                $("#address1_line2").prop("disabled", true);
                $("#address1_line3").prop("disabled", true);
                $("#address1_city").prop("disabled", true);
                $("#address1_postalcode").prop("disabled", true);
                $("#ovs_address1_province").prop("disabled", true);
                $("#address1_country").prop("disabled", true);
                $("#telephone1").prop("disabled", true);
                $("#websiteurl").prop("disabled", true);
                $("#fax").prop("disabled", true);

                // disable address lookup web resource
                $('#WebResource_address_complete').on('load', function () {
                    tdg.cid.WebResource_address_complete_readonly(true);
                });
            }
        },

        step2_address1_line1_set: function (value) {
            debugger;
            try {
                var f = document.getElementById("WebResource_address_complete");
                var c = f.contentWindow;
                c.document.getElementById("address1_line1").value = value;
            }
            catch (e) { }
        },

        step2_advanced_form_header: function (companyName) {
            try {
                var value = tdg.error_message.message("m000009");
                value = value.replace("{0}", companyName);
                $('h1:first')[0].innerHTML = value;
            }
            catch (e) { }
            var steps = $('li.list-group-item');
            for (var i = 0; i < steps.length; i++) {
                var item = steps[i];
                var text = item.innerText;
                text = tdg.error_message.message(text);
                item.innerText = text;
            }
        }
    }
}

if (typeof (tdg.cid.flow) == "undefined") {
    tdg.cid.flow = {
        Call_Flow: function (FlowName, data) {
            console.log("Flow is executed");
            //get flow URL
            var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");
            //flow url found
            if (EnvironmentSettingResult.length > 0) {
                var FlowURL = EnvironmentSettingResult[0]["qm_value"];

                // Execute flow
                var req = new XMLHttpRequest();
                req.open("POST", FlowURL, true);
                req.setRequestHeader('Content-Type', 'application/json');
                req.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        req.onreadystatechange = null;
                        if (this.status === 200) {
                            //console.log("Flow Executed scucessfully.")
                        }
                    }//end ready status
                }//end on ready function
                req.send(data);
            }//end check if flow url found
        }
    }
}
