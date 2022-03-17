//
// CompanyRegistrationWizard-Start.js
//
$(document).ready(function () {
    debugger;

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
});

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

        tdg.c.addValidator("cid_legalname", "Legal Name");
        tdg.c.addValidator("cid_reasonfornobnnumber", "Reason for no CRA Business Number");

        // clear data
        $("#cid_crabusinessnumber").val("");
    }
    else {
        tdg.c.control_show("cid_crabusinessnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber");
        tdg.c.control_hide("cid_legalname");

        tdg.c.addValidator("cid_crabusinessnumber", "CRA Business Number");

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
        tdg.c.addValidator("cid_reasonfornobnnumber_other", "Other Reason");
    }
    else {
        tdg.c.control_hide("cid_reasonfornobnnumber_other");
        tdg.c.removeValidator("cid_reasonfornobnnumber_other");
    }
}

// clear parentcustomerid
function clear_parentcustomerid() {
    // clear data
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
            sessionStorage.setItem("step_start", "1");
            debugger;
            var cid_has_cra_bn = $("#cid_has_cra_bn").val();

            var validation = false;
            var rom_data, filter, legalname;

            tdg.c.error_message_clear();

            // do not have a business number?
            if (cid_has_cra_bn == 0) {
                debugger;

                legalname = $("#cid_legalname").val();
                filter = "ovs_legalname eq '" + legalname + "'";
                rom_data = tdg.c.OData_List("account", filter);
                if (rom_data.length > 0) {
                    rom_data = rom_data[0];

                    $("#parentcustomerid").attr("value", rom_data.accountid);
                    $("#parentcustomerid_name").attr("value", legalname);
                    $("#parentcustomerid_entityname").attr("value", 'account');

                    $("#cid_operatingname").val(rom_data.name);
                }

                validation = true;
            }
            else {
                debugger;
                var data = cid_crabusinessnumber_onchange();

                if (data == "") {
                    tdg.c.error_message("Invalid CRA Business Number");
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

                        $("#parentcustomerid").attr("value", rom_data.accountid);
                        $("#parentcustomerid_name").attr("value", legalname);
                        $("#parentcustomerid_entityname").attr("value", 'account');
                    }
                    validation = true;
                }
            }
            return validation;
        }
    }(window.jQuery));
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
    if (data.length == 0) {
        return data;
    }

    data = data[0];

    data_fake.LegalName = data.cid_legalname;
    data_fake.OperatingName = data.cid_legalname;
    data_fake.BusinessRegistrationNumber = bn;
    var PhysicalLocationAddress = {};
    PhysicalLocationAddress.AddressLine1Text = data.cid_addressline1text;
    PhysicalLocationAddress.AddressLine2Text = data.cid_addressline2text;
    PhysicalLocationAddress.CityName = data.cid_cityname;
    PhysicalLocationAddress.ProvinceStateCode = data.cid_provincestatecode;
    PhysicalLocationAddress.PostalZipCode = data.cid_postalzipcode;
    PhysicalLocationAddress.CountryCode = data.cid_countrycode;

    data_fake.PhysicalLocationAddress = PhysicalLocationAddress;

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
    $("#address1_country").val(address.CountryCode);
}
