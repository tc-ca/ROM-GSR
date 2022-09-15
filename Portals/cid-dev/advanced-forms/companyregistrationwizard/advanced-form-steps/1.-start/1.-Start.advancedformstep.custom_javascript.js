//
// CompanyRegistrationWizard-Start.js
//

$(document).ready(function () {
    debugger;

    // init var to use in CompanyRegistrationWizard-Site.js
    var k_existing_sites = "already_have_existing_sites";
    sessionStorage.setItem(k_existing_sites, "null");

    tdg.c.section_hide("section_address_1");

    // default current use is "Primary"
    $("#cid_contacttype").val(100000000);
    tdg.c.control_hide("cid_contacttype");

    // default has a cra bn
    $("#cid_has_cra_bn").val("1");

    tdg.c.control_hide("parentcustomerid", true);
    tdg.c.control_hide("cid_operatingname");

    $("#cid_has_cra_bn").change(cid_has_cra_bn_onchange);
    cid_has_cra_bn_onchange();

    $("#cid_reasonfornobnnumber").change(cid_reasonfornobnnumber_onchange);
    cid_reasonfornobnnumber_onchange();

    // autocomplete off
    $("#cid_crabusinessnumber").attr("autocomplete", "new-password");
    $("#cid_legalname").attr("autocomplete", "new-password");
    $("#cid_reasonfornobnnumber_other").attr("autocomplete", "new-password");

    // user has invitation code?
    sessionStorage.setItem("cid_suppress_error", "");
    var account_id = '{{user.parentcustomerid.Id}}';
    if (account_id != "") {
        // copy code in CompanyRegistrationWizard-Start.Invitation.js
    }
});

function clear_contact_address() {
    $("#address1_line1").val("");
    $("#address1_line2").val("");
    $("#address1_line3").val("");
    $("#address1_city").val("");
    $("#address1_stateorprovince").val("");
    $("#address1_postalcode").val("");
}

function error_message_advanced_form(message, clear) {
    debugger;
    message = tdg.error_message.message(message);
    if (clear) {
        $('#ValidationSummaryEntityFormView div').remove();
    }
    var validationSection = $('#ValidationSummaryEntityFormView');
    validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + message + "</div>"));
    validationSection.show();
    $('#alertMessages').focus();
}

function cid_has_cra_bn_onchange() {
    debugger;

    clear_parentcustomerid();

    tdg.c.removeValidator("cid_crabusinessnumber");
    tdg.c.removeValidator("cid_reasonfornobnnumber");
    tdg.c.removeValidator("cid_reasonfornobnnumber_other");
    tdg.c.removeValidator("cid_legalname");

    tdg.c.control_hide("cid_reasonfornobnnumber_other");

    var cid_has_cra_bn = $("#cid_has_cra_bn").val();

    // do not have a business number?
    if (cid_has_cra_bn == "0") {
        tdg.c.control_hide("cid_crabusinessnumber");
        tdg.c.control_show("cid_reasonfornobnnumber");
        tdg.c.control_show("cid_legalname");

        tdg.c.addValidator("cid_legalname");
        tdg.c.addValidator("cid_reasonfornobnnumber");

        // clear data
        $("#cid_crabusinessnumber").val("");
    }
    else {
        tdg.c.control_show("cid_crabusinessnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber");
        tdg.c.control_hide("cid_legalname");

        tdg.c.addValidator("cid_crabusinessnumber");

        // clear data
        $("#cid_reasonfornobnnumber").val("");
        $("#cid_reasonfornobnnumber_other").val("");
        $("#cid_legalname").val("");
    }
}

function cid_reasonfornobnnumber_onchange() {
    debugger;

    $("#cid_reasonfornobnnumber_other").val("");

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
}

// clear parentcustomerid
function clear_parentcustomerid() {
    $("#cid_crabusinessnumber").val("");
    $("#cid_reasonfornobnnumber").val("");
    $("#cid_reasonfornobnnumber_other").val("");
    $("#cid_legalname").val("");
    $("#cid_operatingname").val("");

    $("#parentcustomerid").attr("value", null);
    $("#parentcustomerid_name").attr("value", null);
}

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            debugger;

            clear_contact_address();

            var suppress_error = sessionStorage.getItem("cid_suppress_error");
            suppress_error = (suppress_error != "" ? true : false);
            sessionStorage.setItem("step_start", "1");
            debugger;
            var cid_has_cra_bn = $("#cid_has_cra_bn").val();

            var validation = false;
            var rom_data, filter, legalname;

            tdg.c.error_message_clear();

            // business number?
            if (cid_has_cra_bn == 0) {
                debugger;

                legalname = $("#cid_legalname").val();

                // for apostrophe, use two apostrophe to escape it:
                legalname = legalname.replaceAll("'", "''");

                filter = "ovs_legalname eq '" + legalname + "'";
                filter = filter.replaceAll("&", "%26");
                rom_data = tdg.c.OData_List("account", filter);
                if (rom_data.length > 0) {
                    rom_data = rom_data[0];

                    // currently in the process of registration?
                    validation = in_current_registration(rom_data, suppress_error);

                    $("#cid_operatingname").val(rom_data.name);
                }
                else {
                    validation = true;
                }
            }
            else {
                debugger;
                var data = cid_crabusinessnumber_onchange();

                if (data == "") {
                    tdg.c.error_message_advanced_form("m000001", true);   // "Invalid CRA Business Number"
                }
                else {
                    debugger;

                    legalname = data.cid_legalname;
                    var cid_crabusinessnumber = $("#cid_crabusinessnumber").val();

                    validation = false; // true

                    filter = "cid_crabusinessnumber eq '" + cid_crabusinessnumber + "'";
                    rom_data = tdg.c.OData_List("account", filter);
                    if (rom_data.length > 0) {
                        rom_data = rom_data[0];

                        // currently in the process of registration?
                        validation = in_current_registration(rom_data, suppress_error);
                    }
                    else {
                        validation = true;
                    }
                }
            }
            return validation;
        }
    }(window.jQuery));
}

function in_current_registration(rom_data, suppress_error) {
    var value = true;
    if (rom_data.cid_cidcompanystatus != null) {
        var current_registering = false
        switch (rom_data.cid_cidcompanystatus.Value) {
            case 100000002:
                break;
            case 100000003:
                break;
            case 100000004:
                break;
            default:
                current_registering = true;
                break;
        }

        if (current_registering) {
            var message_code = "";
            if (!suppress_error) {
                message_code = "m000014";
                value = false;
            }
            else {
                message_code = "m000099";
                value = true;
            }
            var message = tdg.error_message.message(message_code);
            tdg.c.dialog_OK(message);

            return value;
        }
        $("#parentcustomerid").attr("value", rom_data.accountid);
        $("#parentcustomerid_name").attr("value", legalname);
        $("#parentcustomerid_entityname").attr("value", 'account');
    }
    return value;
}

function cid_crabusinessnumber_onchange() {
    var cid_crabusinessnumber = $("#cid_crabusinessnumber").val();
    var data;
    data = Retrieve_cra(cid_crabusinessnumber);
    return data;
}

// CRA BN API - DEV ONLY
function Retrieve_cra(bn) {
    debugger;

    var data;
    var data_fake = {};
    var filter = "cid_businessregistrationnumber eq '" + bn + "'";

    data = tdg.c.OData_List("cid_fake_cra_bn_api", filter);

    if (data == null) {
        return "";
    }

    if (data.length == 0) {
        return "";
    }

    data = data[0];

    data_fake.LegalName = data.cid_legalname;
    data_fake.OperatingName = data.cid_legalname;
    data_fake.BusinessRegistrationNumber = bn;
    var address = {};
    address.AddressLine1Text = data.cid_addressline1text;
    address.AddressLine2Text = data.cid_addressline2text;
    address.CityName = data.cid_cityname;
    address.ProvinceStateCode = data.cid_provincestatecode;
    address.PostalZipCode = data.cid_postalzipcode;
    address.CountryCode = data.cid_countrycode;

    data_fake.PhysicalLocationAddress = address;

    BN_Selected(data_fake);

    return data;
}

function BN_Selected(data) {
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

