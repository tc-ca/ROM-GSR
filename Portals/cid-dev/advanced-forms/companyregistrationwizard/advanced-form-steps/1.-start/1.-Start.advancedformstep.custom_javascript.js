//
// CompanyRegistrationWizard-Start.js
//
var _account;
$(document).ready(function () {
    debugger;

    sessionStorage.setItem("cid_has_invitation", "false");

    // init var to use in CompanyRegistrationWizard-Site.js
    var k_existing_sites = "already_have_existing_sites";
    sessionStorage.setItem(k_existing_sites, "null");

    tdg.c.section_hide("section_address_1");
    tdg.c.control_hide("cid_contacttype");

    // default has a cra bn
    $("#cid_has_cra_bn").val("1");

    tdg.c.control_hide("parentcustomerid", true);
    tdg.c.control_hide("cid_operatingname");

    $("#cid_has_cra_bn").change(tdg.cid.crw.start_cid_has_cra_bn_onchange);
    tdg.cid.crw.start_cid_has_cra_bn_onchange();

    $("#cid_reasonfornobnnumber").change(cid_reasonfornobnnumber_onchange);
    cid_reasonfornobnnumber_onchange();

    // autocomplete off
    $("#cid_crabusinessnumber").attr("autocomplete", "new-password");
    $("#cid_legalname").attr("autocomplete", "new-password");
    $("#cid_reasonfornobnnumber_other").attr("autocomplete", "new-password");

    // user has invitation code?
    sessionStorage.setItem("cid_suppress_error", "");
    sessionStorage.setItem("cid_suppress_error_code", "");

    var cid_contacttype = '{{user.cid_contacttype.Value}}';
    if (cid_contacttype != 100000000)  // not primary
    {
        var account_id = '{{user.parentcustomerid.Id}}';
        if (account_id != "") {
            debugger;
            var contact_id = '{{user.id}}';
            var filter = "_adx_invitecontact_value eq '" + contact_id + "'";
            var inv = tdg.c.WebApi_List("adx_invitations", filter);
            if (inv.length > 0) {
                sessionStorage.setItem("cid_has_invitation", "true");

                filter = "accountid eq '" + account_id + "'";
                _account = tdg.c.WebApi_List("accounts", filter)[0];
                if (_account.cid_cidcompanystatus == 100000004) {
                    var message = "You are about to begin the process of registering the {0} company within CID. Would you like to proceed?";
                    message = message.replaceAll("{0}", _account.ovs_legalname);
                    tdg.c.dialog_YN(message, (ans) => {
                        if (ans) {
                            debugger;
                            if (_account.cid_has_cra_bn) {
                                $("#cid_crabusinessnumber").val(_account.cid_crabusinessnumber);
                                cid_crabusinessnumber_onchange();
                            }
                            invitation_go_next(_account, true, contact_id);
                            return;
                        } else {
                            debugger;
                            return;
                        }
                    });
                }
                else {
                    invitation_go_next(_account, false, contact_id );
                }
                return;
            }
        }
    }
});

function invitation_go_next(account, primary_ind, contact_id) {
    debugger;
    sessionStorage.setItem("cid_suppress_error", "true");

    if (account.cid_crabusinessnumber != null) {
        $("#cid_crabusinessnumber").val(account.cid_crabusinessnumber);
    }
    else {
        $("#cid_has_cra_bn").val("0");
        $("#cid_legalname").val(account.ovs_legalname);
    }

    sessionStorage.setItem("cid_suppress_error_code", "m000099");

    if (primary_ind) {
        $("#cid_contacttype").val(100000000);
        sessionStorage.setItem("cid_suppress_error", "");
        sessionStorage.setItem("cid_suppress_error_code", "");
    }

    $("#NextButton").click();
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

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            debugger;

            var has_invitation = sessionStorage.getItem("cid_has_invitation");
            if (has_invitation != "true") {
                tdg.cid.crw.start_clear_contact_address();
            }

            var suppress_error = sessionStorage.getItem("cid_suppress_error");
            suppress_error = (suppress_error != "" ? true : false);
            sessionStorage.setItem("step_start", "1");

            var cid_has_cra_bn = $("#cid_has_cra_bn").val();

            var validation = false;
            var rom_data, filter, legalname;

            tdg.c.error_message_clear();

            if (has_invitation != "true") {
                // business number?
                if (cid_has_cra_bn == 0) {
                    debugger;

                    legalname = $("#cid_legalname").val();
                    legalname = legalname.replaceAll("'", "''");

                    filter = "ovs_legalname eq '" + legalname + "'";
                    filter = filter.replaceAll("&", "%26");
                    rom_data = tdg.c.WebApi_List("accounts", filter);
                    if (rom_data.length > 0) {
                        rom_data = rom_data[0];

                        var contact_id = '{{user.id}}';
                        validation = invitation.in_current_registration(rom_data, suppress_error, contact_id);

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
                        tdg.c.error_message_advanced_form("m000001", true);
                    }
                    else {
                        debugger;

                        legalname = data.cid_legalname;
                        var cid_crabusinessnumber = $("#cid_crabusinessnumber").val();

                        validation = false;

                        filter = "cid_crabusinessnumber eq '" + cid_crabusinessnumber + "'";
                        rom_data = tdg.c.WebApi_List("accounts", filter);
                        if (rom_data.length > 0) {
                            rom_data = rom_data[0];
                            var contact_id = '{{user.id}}';
                            validation = invitation.in_current_registration(rom_data, suppress_error, contact_id);
                        }
                        else {
                            validation = true;
                        }
                    }
                }
            }
            else {
                tdg.cid.crw.start_parentcustomerid_setup(_account.accountid, _account.ovs_legalname);
                validation = true;
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
    fake.OperatingName = data.cid_legalname;
    fake.BusinessRegistrationNumber = bn;
    var a = {};
    a.AddressLine1Text = data.cid_addressline1text;
    a.AddressLine2Text = data.cid_addressline2text;
    a.CityName = data.cid_cityname;
    a.ProvinceStateCode = data.cid_provincestatecode;
    a.PostalZipCode = data.cid_postalzipcode;
    a.CountryCode = data.cid_countrycode;

    fake.PhysicalLocationAddress = a;

    tdg.cid.crw.start_BN_Selected(fake);

    return data;
}
