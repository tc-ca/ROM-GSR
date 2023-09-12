// CompanyRegistrationWizard-invitation
if (typeof (invitation) == "undefined") {
    invitation = {
        in_current_registration: function (rom_data, suppress_error, contact_id) {
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

                    // current primary user of selected company?
                    if (!suppress_error) {
                        var filter = "_parentcustomerid_value eq " + rom_data.accountid;
                        var list = tdg.webapi.list("contacts", filter);
                        list = list.filter(x => x.cid_contacttype == 100000000 && x.contactid == contact_id);
                        if (list.length == 1) {
                            suppress_error = true;
                        }
                    }

                    if (!suppress_error) {
                        message_code = (rom_data.cid_cidcompanystatus != 100000005 ? "m000014" : "m000014B");
                        var message = tdg.error_message.message(message_code);
                        tdg.c.dialog_YN(message, (ans) => {
                            invitation.request_onboard(rom_data, contact_id, ans, true)
                        });

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

        request_onboard: function (rom_data, contact_id, ans, type) {
            debugger;
            if (ans) {
                debugger;

                var status = rom_data.cid_cidcompanystatus;
                var reg_not_started = ";100000010;100000003;100000004;100000002;";
                var reg_status = true;

                // send email
                var data = {}
                data.EmailCode = "S1B-1";
                data.AccountId = rom_data.accountid;
                data.Primary_Contactid = contact_id;
                data.Secondary_Contactid = contact_id;
                tdg.cid.flow.Call_Flow("CID_Send_Portal_Contact_Email_by_Email_Code", JSON.stringify(data));

                // disable controls
                debugger;
                //$("#cid_has_cra_bn").prop('disabled', false);
                $('#cid_has_cra_bn').attr("disabled", "disabled");
                var cid_has_cra_bn = $("#cid_has_cra_bn").val();
                cid_has_cra_bn = (cid_has_cra_bn == "1" ? true : false);
                if (cid_has_cra_bn) {
                    $('#cid_crabusinessnumber').attr("readonly", true);
                }
                else {
                    $('#cid_legalname').attr("readonly", true);
                    $('#cid_reasonfornobnnumber').attr("disabled", "disabled");
                    $('#cid_reasonfornobnnumber_other').attr("readonly", true);
                }

                var message = tdg.error_message.message("BTN_NEXT");
                $("#btn_next").prop("value", message);
                $("#btn_next").prop("disabled", true);

                $("#NextButton").prop("value", message);
                $("#NextButton").prop("disabled", true);

                // show alert message
                var message = tdg.error_message.message("m000043");
                tdg.c.dialog_OK(message);

                debugger;

                //tdg.c.sign_out();
            } else {
                debugger;
                var message = tdg.error_message.message("BTN_NEXT");
                $("#btn_next").prop("value", message);

                var message = tdg.error_message.message("m000044");
                tdg.c.dialog_OK(message);
            }
        },

        invitation_go_next: function (account, primary_ind, contact_id) {
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
            else {
                debugger;
                // email
                var data = {}
                data.EmailCode = "S2B-1";
                data.AccountId = account.accountid;
                data.Primary_Contactid = contact_id;
                data.Secondary_Contactid = contact_id;
                tdg.cid.flow.Call_Flow("CID_Send_Portal_Contact_Email_by_Email_Code", JSON.stringify(data));
            }

            $("#NextButton").click();
        },

        invitation_primary: async function (_account, message, contact_id) {
            debugger;

            var btn_next_name = "NextButton";
            tdg.cid.crw.start_buttons_confirm(false, btn_next_name);
            var cid_has_cra_bn = _account.cid_has_cra_bn;
            cid_has_cra_bn = (cid_has_cra_bn == null ? 0 : cid_has_cra_bn);
            var bn = _account.cid_crabusinessnumber;
            var legalname = _account.ovs_legalname;
            var cid_reasonfornobnnumber = _account.cid_reasonfornobnnumber;
            var list = $("#cid_reasonfornobnnumber")[0].options;
            for (var i = 0; i < list.length; i++) {
                if (cid_reasonfornobnnumber == list[i].value) {
                    cid_reasonfornobnnumber = list[i].text;
                    break;
                }
            }
            var cid_reasonfornobnnumber_other = _account.cid_reasonfornobnnumber_other;
            const data = await tdg.cid.crw.data_confirm_dialog(cid_has_cra_bn, bn, legalname, list);
            if (data.length == 0) {
                data.length = 1;
                data.cid_has_cra_bn = cid_has_cra_bn;
                data.cid_legalname = legalname;
                data.cid_operatingname = _account.name;
                data.cid_crabusinessnumber = bn;
                data.cid_reasonfornobnnumber = cid_reasonfornobnnumber;
                data.cid_reasonfornobnnumber_other = cid_reasonfornobnnumber_other;

                var address = {};
                address.AddressLine1Text = _account.address1_line1;
                address.AddressLine2Text = _account.address1_line2;
                address.AddressLine3Text = _account.address1_line3;
                address.CityName = _account.address1_city;
                address.ProvinceStateCode = _account.address1_stateorprovince;
                address.PostalZipCode = _account.address1_postalcode;

                data.address = address;
            }
            data.invitation_ind = true;
            tdg.cid.crw.start_confirm(data, (ans) => {
                if (ans) {
                    debugger;

                    if (_account.cid_has_cra_bn) {
                        $("#cid_has_cra_bn").val(1);
                        tdg.cid.crw.start_cid_has_cra_bn_onchange("1");
                        $("#cid_crabusinessnumber").val(_account.cid_crabusinessnumber);
                        tdg.cid.crw.start_cid_crabusinessnumber_onchange("1");
                    }
                    else {
                        $("#cid_has_cra_bn").val(0);
                        tdg.cid.crw.start_cid_has_cra_bn_onchange("1");
                        $("#cid_legalname").val(_account.ovs_legalname);
                        $("#ovs_legalnamefr").val(_account.ovs_legalnamefr);
                        $("#cid_reasonfornobnnumber").val(_account.cid_reasonfornobnnumber);
                        tdg.cid.crw.start_cid_reasonfornobnnumber_onchange(false);
                        $("#cid_reasonfornobnnumber_other").val(_account.cid_reasonfornobnnumber_other);
                    }
                    invitation.invitation_go_next(_account, true, contact_id);
                } else {
                    debugger;

                    var message = tdg.error_message.message("m000036");
                    message = message.replaceAll("{0}", _account.ovs_legalname);
                    tdg.c.dialog_YN(message, (ans) => {
                        if (ans) {
                            debugger;
                            var record_id = sessionStorage.getItem("adx_invitationid");
                            var data = {};
                            data.adx_invitationcode = "";
                            tdg.webapi.update("adx_invitations", record_id, data);

                            tdg.cid.crw.start_buttons_confirm(true, btn_next_name);
                            return;
                        } else {
                            debugger;
                            invitation.invitation_primary(_account, message, contact_id);
                            return;
                        }
                    });
                }
            });

            return;

            message = tdg.error_message.message(message);
            message = message.replaceAll("{0}", _account.ovs_legalname);
            tdg.c.dialog_YN(message, (ans) => {
                if (ans) {
                    debugger;
                    if (_account.cid_has_cra_bn) {
                        $("#cid_crabusinessnumber").val(_account.cid_crabusinessnumber);
                        tdg.cid.crw.start_cid_crabusinessnumber_onchange("1");
                    }
                    invitation.invitation_go_next(_account, true, contact_id);
                    return;
                } else {
                    debugger;
                    return;
                }
            });
        },

        invitation_secondary: function (_account, message, contact_id) {
            debugger;
            message = tdg.error_message.message("m000034");
            message = message.replaceAll("{0}", _account.ovs_legalname);
            tdg.c.dialog_YN(message, (ans) => {
                if (ans) {
                    debugger;
                    if (_account.cid_has_cra_bn) {
                        $("#cid_crabusinessnumber").val(_account.cid_crabusinessnumber);
                        tdg.cid.crw.start_cid_crabusinessnumber_onchange("1");
                    }
                    else {
                        $("#cid_has_cra_bn").val("0");
                        tdg.cid.crw.start_cid_has_cra_bn_onchange();
                        $("#cid_reasonfornobnnumber").val(_account.cid_reasonfornobnnumber);
                        $("#cid_reasonfornobnnumber_other").val(_account.cid_reasonfornobnnumber_other);
                        $("#cid_legalname").val(_account.ovs_legalname);
                        $("#ovs_legalnamefr").val(_account.ovs_legalnamefr);
                    }
                    invitation.invitation_go_next(_account, false, contact_id);
                    return;
                } else {
                    debugger;

                    var message = tdg.error_message.message("m000036");
                    message = message.replaceAll("{0}", _account.ovs_legalname);
                    tdg.c.dialog_YN(message, (ans) => {
                        if (ans) {
                            debugger;
                            var record_id = sessionStorage.getItem("adx_invitationid");
                            var data = {};
                            data.adx_invitationcode = "";
                            tdg.webapi.update("adx_invitations", record_id, data);

                            sessionStorage.setItem("cid_has_invitation", "false");
                            sessionStorage.setItem("cid_suppress_error", "");
                            return;
                        } else {
                            debugger;
                            invitation.invitation_secondary(_account, message, contact_id);
                            return;
                        }
                    });

                    return;
                }
            });

        },

        New_and_Existing_Contact_Submit_Logic: function (ParentAccount) {
            var emailaddressTextBox = $("#emailaddress1").val();
            var firstnameTextBox = $("#firstname").val();
            var lastnameTextBox = $("#lastname").val();


            if (emailaddressTextBox.length > 0 && firstnameTextBox.length > 0 && lastnameTextBox.length > 0) {
                var ContactWithNoCompany = false;
                var ContactDifferntCompany = false;
                //check if contact exists
                var EmailQueryResuts = tdg.webapi.SelectedColumnlist("contacts",
                    "contactid,firstname, lastname ,_parentcustomerid_value , emailaddress1",
                    "emailaddress1 eq '" + emailaddressTextBox + "' and statecode eq 0 and firstname eq '" +
                    firstnameTextBox + "' and lastname eq '" + lastnameTextBox + "' and _parentcustomerid_value ne " + ParentAccount);
                //ParentAccount
                //check if email is found
                if (EmailQueryResuts.length > 0) {
                    for (let i = 0; i < EmailQueryResuts.length; i++) {

                        //check if contact doesn't have a parent
                        if (EmailQueryResuts[i]['_parentcustomerid_value'] == null) {
                            var contactid = EmailQueryResuts[i]['contactid'];
                            var firstname = EmailQueryResuts[i]['firstname'];
                            var lastname = EmailQueryResuts[i]['lastname'];
                            var emailaddress = EmailQueryResuts[i]['emailaddress1'];

                            ContactWithNoCompany = true;
                            //update parent contact and send invitation
                            var contactrecordData =
                                '{"ParentAccount" : "' + ParentAccount + '", "ContactId" :"' + contactid +
                                '", "Portal_URL" : "' + window.location.host + '"}';

                            var data =
                            {
                                "parentcustomerid_account@odata.bind": "/accounts(" + ParentAccount + ")",
                                "cid_contacttype": "100000001"
                            }

                            tdg.webapi.update("contacts", contactid, data);
                            tdg.cid.flow.Call_Flow("CID_Portal_Update_contact_ParentAccount", contactrecordData);
                            // sessionStorage.setItem("NewContactFlag", true);

                            var m000117 = tdg.error_message.message("m000117");
                            // "The Secondary Contact {0} has been sent an on-boarding invitation to their email address of {1}.";
                            m000117 = m000117.replace("{0}", firstname + " " + lastname).replace("{1}", emailaddress);
                            // show error message
                            tdg.c.dialog_OK(m000117);
                            $("#myModal").css({ left: 40 });
                            //close the form if user selected OK button
                            $("#btnOK").on('click', function () {

                                parent.$(".entity-grid").trigger("refresh");
                                parent.$(".form-close").eq(0).click();
                                setTimeout($(".entity-grid").trigger("refresh"), 3000);

                            });
                            break;
                        }//end if
                        else {
                            //contact belong to another company
                            ContactDifferntCompany = true;
                        }//end else no comany found
                    }//end loop
                    if (ContactWithNoCompany == false && ContactDifferntCompany == true) {
                        var m000116 = tdg.error_message.message("m000116");
                        //"This Contact cannot be added as a Contact with this name and email address already exists in CID, but is assigned to a different Company.";                        
                        tdg.c.dialog_OK(m000116);
                        //changing the position of the dialog to fit the basic form screen
                        $("#myModal").css({ left: 40 });


                        $("#btnOK").on('click', function () {
                            $('#modalwindow').modal('hide');
                        });
                    }
                }//end check if email address is found
                else {


                    $("#InsertButton").on('click', function () {
                        var emailaddressTextBox = $("#emailaddress1").val();
                        var firstnameTextBox = $("#firstname").val();
                        var lastnameTextBox = $("#lastname").val();
                        sessionStorage.setItem("NewContactFlag", true);
                        sessionStorage.setItem("FullName", firstnameTextBox + " " + lastnameTextBox);
                        sessionStorage.setItem("Email", emailaddressTextBox);

                    });

                    //call insert button to create new record
                    $("#InsertButton").click();


                }
            }//end check if required information is entered
            else {
                //call insert button to validate and add new contact if validaton pass
                $("#InsertButton").click();
            }

        },

        Execute_Invitation_Deactivation_Logic: function (ContactId, cid_usercontacttype, CurrentUserID, ParentAccount, LanguageCode) {

            var FlowEmailCode = "";
            //if not primary

            if (cid_usercontacttype != 100000000) {
                //m000118
                var m000118 = tdg.error_message.message("m000118");
                tdg.c.dialog_OK(m000118);
                //"Only the Primary Admin can deactivate a Secondary Admin");
            }//end check user type
            else {
                //get all secondary contacts
                var contactQueryResults = tdg.webapi.SelectedColumnlist("contacts", "firstname", "cid_contacttype ne 100000000 and statecode eq 0 and _parentcustomerid_value eq " + ParentAccount);
                //if more than one secondary contact eixts
                if (contactQueryResults.length > 1) {
                    //m000122 Are you sure you would like to de-activate this contact record?
                    var m000122 = tdg.error_message.message("m000122");
                    tdg.c.dialog_YN(m000122, (ans) => {
                        if (ans) {

                            //get user invitation
                            var adx_invitationResults = tdg.webapi.SelectedColumnlist("adx_invitations", "adx_expirydate", "_adx_invitecontact_value eq " + ContactId);
                            //check if user logined before
                            var result = tdg.webapi.SelectedColumnlist("contacts", "msdyn_portaltermsagreementdate", "contactid eq " + ContactId);

                            console.log(result[0]["msdyn_portaltermsagreementdate"]);
                            //if contact doesn't have agreement date
                            if (result[0]["msdyn_portaltermsagreementdate"] != null) {
                                //adx_invitation
                                if (adx_invitationResults.length > 0) {
                                    FlowEmailCode = "S4-2";
                                }
                                else {
                                    FlowEmailCode = "S4-1";
                                }

                            }//end check if user login before
                            else {
                                //check the user that did not login has invitation
                                if (adx_invitationResults.length > 0) {
                                    FlowEmailCode = "S4-3";

                                }

                            }

                            //deactivate contact
                            var DeactivationData = { "statecode": 1 };
                            tdg.webapi.update("contacts", ContactId, DeactivationData);

                            //Execute flow to send email and set expiry date for invitation   
                            //get flow URL
                            var data =
                                '{ "EmailCode" : "' + FlowEmailCode + '", ' +
                                '"AccountId" : "' + ParentAccount + '" ,' +
                                '"Primary_Contactid" : "' + CurrentUserID + '" ,' +
                                '"Secondary_Contactid" : "' + ContactId + '"}';
                            // call function to execute flow
                            tdg.cid.flow.Call_Flow("CID_Send_Portal_Contact_Email_by_Email_Code", data);
                            //refresh grid
                            setTimeout(invitation.refreshGrid, 4000);

                        }//end if ans
                    } //end dialog functoin
                    ); //end dialog
                }
                else {
                    var m000119 = tdg.error_message.message("m000119");
                    //show error message
                    tdg.c.dialog_OK(m000119);
                }

            }//end else
        },
        refreshGrid: function () {
            $(".entity-grid").trigger("refresh");
            console.log("inside funtion refresh grid **");

        },
        Execute_Assign_Primary_Admin_Logic: function (contactid, contactFullName, cid_usercontacttype, CurrentUserID, ParentAccount, LanguageCode) {
            //if not primary contact
            if (cid_usercontacttype != 100000000) {
                var m000113 = tdg.error_message.message("m000113");
                tdg.c.dialog_OK(m000113);
            }
            else {
                // retrieve contact by GUID
                var result = tdg.webapi.SelectedColumnlist("contacts", "msdyn_portaltermsagreementdate", "contactid eq " + contactid);

                //if contact doesn't have agreement date
                if (result[0]["msdyn_portaltermsagreementdate"] != null) {
                    var m000114 = tdg.error_message.message("m000114");

                    tdg.c.dialog_YN(m000114.replace('{0}', contactFullName), (ans) => {
                        if (ans) {
                            //update contact type to primary
                            var data1 = { "cid_contacttype": 100000000 };
                            var response = tdg.webapi.update("contacts", contactid, data1);
                            //switch current contact to secondary
                            var data2 = { "cid_contacttype": 100000001 };

                            tdg.webapi.update("contacts", CurrentUserID, data2);
                            $(".entity-grid").trigger("refresh");
                            setTimeout(refreshGrid, 3000);
                            //****************************call workflow ******************** */
                            var SendEmailFlowData = '{"EmailCode" : "S4-4", ' +
                                '"AccountId" : "' + ParentAccount + '" ,' +
                                '"Primary_Contactid" : "' + contactid + '" ,' +
                                '"Secondary_Contactid" : "' + CurrentUserID + '"}';
                            tdg.cid.flow.Call_Flow("CID_Send_Portal_Contact_Email_by_Email_Code", SendEmailFlowData);
                            setTimeout(function () { console.log("inside relocation"); window.location.href = "~/account/login/logoff" }, 7000);

                        }
                    });
                }
                else {
                    var m000115 = tdg.error_message.message("m000115");
                    //show error message
                    tdg.c.dialog_OK(m000115);
                }//end else if user login before

            }//end else
        },

        Show_Secondary_Message: function (ParentAccount, LanguageCode) {
            debugger;
            var SecondaryContactResuts = tdg.webapi.SelectedColumnlist("contacts",
                "contactid,firstname,lastname",
                "statecode eq 0 and cid_contacttype eq 100000001 and _parentcustomerid_value eq " + ParentAccount);

            if (SecondaryContactResuts && SecondaryContactResuts.length == 1) {
                var m000133 = tdg.error_message.message("m000133");
                // "Note: This addition of a backup Contact has completed the requirements of the regulation. Any further Contact additions are completely optional.";
                // show message
                tdg.c.page_instructions(m000133);
                tdg.c.dialog_OK(m000133);
            }
            else {
                $(".instructions").remove();
            }
        },
    }
}
