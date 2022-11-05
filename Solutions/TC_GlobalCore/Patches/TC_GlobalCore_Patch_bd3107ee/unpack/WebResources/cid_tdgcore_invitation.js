// CompanyRegistrationWizard-invitation
if (typeof (invitation) == "undefined") {
    invitation = {
        in_current_registration: function (rom_data, suppress_error) {
            debugger;

            // Pending Active: Pending registration, email invitation sent
            if (rom_data.ovs_invitation_only) {
                if (rom_data.cid_cidcompanystatus == 100000004) {
                    var message = tdg.error_message.message("m000032");
                    message = message.replaceAll("{0}", rom_data.ovs_legalname);
                    tdg.c.dialog_YN(message, (ans) => {
                        if (ans) {
                            debugger;
                            // add Activity Review Log
                            var data = {
                                "cid_Company@odata.bind": "/accounts(" + rom_data.accountid + ")"
                            };
                            //data = tdg.webapi.create("cid_activityreviewlog", data);

                            return;
                        } else {
                            debugger;
                            return;
                        }
                    });
                    return;
                }
                else {

                }
            }


            var value = true;

            tdg.cid.crw.start_parentcustomerid_setup(rom_data.accountid, rom_data.ovs_legalname);

            if (rom_data.cid_cidcompanystatus != null) {
                var current_registering = false
                switch (rom_data.cid_cidcompanystatus) {
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
                        message_code = (rom_data.cid_cidcompanystatus != 100000005 ? "m000014" : "m000014B");

                        var message = tdg.error_message.message(message_code);
                        tdg.c.dialog_YN(message, (ans) => {
                            if (ans) {
                                debugger;
                                // send email
                                var data = {}
                                data.EmailCode = "S1B-1";
                                data.AccountId = rom_data.account_id;
                                data.Primary_Contactid = "{{user.contactid}}";
                                data.Secondary_Contactid = data.Primary_Contactid;
                                tdg.cid.flow.Call_Flow("CID_Send_Portal_Contact_Email_by_Email_Code", JSON.stringify(data));
                            } else { }
                        });

                        tdg.c.sign_out();
                        value = false;
                    }
                    else {
                        value = true;
                    }

                    return value;
                }
                $("#parentcustomerid").attr("value", rom_data.accountid);
                $("#parentcustomerid_name").attr("value", rom_data.ovs_legalname);
                $("#parentcustomerid_entityname").attr("value", 'account');
            }
            return value;
        },
    }
}

