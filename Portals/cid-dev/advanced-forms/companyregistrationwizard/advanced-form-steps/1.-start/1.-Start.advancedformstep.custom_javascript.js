//
// CompanyRegistrationWizard-Start.js
//
var _account;
var _cra_record = null;

$(document).ready(function () {
    debugger;
    sessionStorage.setItem("step_start", 1);

    var userFullname = '{{user.fullname}}';
    if (userFullname.length == 0) { window.location.href = '~/profile/'; }

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    sessionStorage.setItem("cid_has_invitation", "false");
    sessionStorage.setItem("adx_invitationid", "");

    // init var to use in CompanyRegistrationWizard-Site.js
    var k_existing_sites = "already_have_existing_sites";
    sessionStorage.setItem(k_existing_sites, "null");

    tdg.c.section_hide("section_address_1");
    tdg.c.control_hide("cid_contacttype");

    $("#cid_has_cra_bn").val("1");

    tdg.c.control_hide("parentcustomerid", true);
    tdg.c.control_hide("cid_operatingname");

    $("#cid_has_cra_bn").change(function () {
        tdg.cid.crw.start_cid_has_cra_bn_onchange("1");
    });
    tdg.cid.crw.start_cid_has_cra_bn_onchange("1");

    $("#cid_reasonfornobnnumber").change(function () {
        tdg.cid.crw.start_cid_reasonfornobnnumber_onchange(true);
    });
    tdg.cid.crw.start_cid_reasonfornobnnumber_onchange(false);

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
                sessionStorage.setItem("adx_invitationid", inv[0].adx_invitationid);

                filter = "accountid eq '" + account_id + "'";
                _account = tdg.c.WebApi_List("accounts", filter)[0];

                switch (_account.cid_cidcompanystatus) {
                    case 100000004:
                        invitation.invitation_primary(_account, "m000033", contact_id);
                        break;
                    case 100000000:
                        invitation.invitation_secondary(_account, "m000034", contact_id);
                        break;
                    case 100000001:
                        invitation.invitation_secondary(_account, "m000034", contact_id);
                        break;
                    case 100000005:
                        invitation.invitation_secondary(_account, "m000035", contact_id);
                        break;
                    case 100000009:
                        invitation.invitation_secondary(_account, "m000034", contact_id);
                        break;
                    default:
                        invitation.invitation_go_next(_account, false, contact_id);
                        break;
                }

                return;
            }
        }
    }

    $("#NextButton").hide();
    tdg.c.button_create("btn_next", "#NextButton", "Next");
    $("#btn_next").bind("click", function () {
        tdg.cid.crw.start_btn_next_click();
    });
});

function start_registration(rom_data, suppress_error) {
    debugger;
    contact_update(rom_data);
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
            var contact_id = '{{user.id}}';
            invitation.request_onboard(rom_data, contact_id, ans, false)
        });
        return validation;
    }
    else {
        var contact_id = '{{user.id}}';
        validation = invitation.in_current_registration(rom_data, suppress_error, contact_id);
        return validation;
    }
}

function contact_update(data) {
    debugger;
    if (data.PhysicalLocationAddress != null) {
        data.ovs_legalname = data.LegalName;
        data.name = data.OperatingName;
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
        data.name = data.cid_operatingname;
        var a = data.address;
        data.address1_line1 = a.AddressLine1Text;
        data.address1_line2 = a.AddressLine2Text;
        data.address1_line3 = a.AddressLine3Text;
        data.address1_city = a.CityName;
        data.address1_stateorprovince = a.ProvinceStateCode;
        data.address1_postalcode = a.PostalZipCode;
    }

    $('#cid_legalname').val(data.ovs_legalname);
    $('#cid_operatingname').val(data.name);
    $('#address1_line1').val(data.address1_line1);
    $('#address1_line2').val(data.address1_line2);
    $('#address1_line3').val(data.address1_line3);
    $('#address1_city').val(data.address1_city);
    $('#address1_stateorprovince').val(data.address1_stateorprovince);
    $('#address1_postalcode').val(data.address1_postalcode);
}

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            debugger;

            let has_invitation = sessionStorage.getItem("cid_has_invitation");
            if (has_invitation != "true") {
                tdg.cid.crw.start_clear_contact_address();
            }

            let suppress_error = sessionStorage.getItem("cid_suppress_error");
            suppress_error = (suppress_error != "" ? true : false);
            sessionStorage.setItem("step_start", "1");

            let cid_has_cra_bn = $("#cid_has_cra_bn").val();

            let validation = false;
            let rom_data, filter, legalname;

            tdg.c.error_message_clear();

            if (has_invitation != "true") {
                if (cid_has_cra_bn == 0) {
                    let legalname = $("#cid_legalname").val();
                    debugger;

                    rom_data = tdg.cid.crw.start_account_by_name(legalname);
                    if (rom_data.length > 0) {
                        rom_data = rom_data[0];
                        validation = start_registration(rom_data, suppress_error);

                        $("#cid_operatingname").val(rom_data.name);
                    }
                    else {
                        validation = true;
                    }
                }
                else {
                    debugger;

                    let data = _cra_record;

                    if (data == "") {
                        tdg.c.error_message_advanced_form("m000001", true);
                    }
                    else {
                        debugger;

                        legalname = data.LegalName;
                        let cid_crabusinessnumber = $("#cid_crabusinessnumber").val();

                        validation = false;

                        filter = "cid_crabusinessnumber eq '" + cid_crabusinessnumber + "'";
                        rom_data = tdg.c.WebApi_List("accounts", filter);
                        if (rom_data.length > 0) {
                            rom_data = rom_data[0];
                            validation = start_registration(rom_data, suppress_error);
                        }
                        else {
                            contact_update(data);
                            validation = true;
                        }
                    }
                }
            }
            else {
                tdg.cid.crw.start_parentcustomerid_setup(_account.accountid, _account.ovs_legalname);
                validation = true;
            }

            if (validation) {
                debugger;
                if (_account != null) {
                    switch (_account.cid_cidcompanystatus) {
                        case 100000004:
                            $("#cid_contacttype").val(100000000);
                    }
                }
                else if (rom_data.cid_cidcompanystatus == null) {
                    $("#cid_contacttype").val(100000000);
                }
                else if (rom_data.cid_cidcompanystatus == 100000002) {
                    $("#cid_contacttype").val(100000000);
                }
                else if (rom_data == null) {
                    $("#cid_contacttype").val(100000000);
                }
            }

            return validation;
        }
    }(window.jQuery));
}
