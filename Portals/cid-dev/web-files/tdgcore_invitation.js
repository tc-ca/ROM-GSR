
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
                                data.Primary_Contactid = contact_id;
                                data.Secondary_Contactid = contact_id;
                                tdg.cid.flow.Call_Flow("CID_Send_Portal_Contact_Email_by_Email_Code", JSON.stringify(data));

                                //tdg.c.sign_out();
                            } else { }
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
                        console.log("Parent account " + EmailQueryResuts[i]['_parentcustomerid_value']);
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
                         
                            tdg.cid.flow.Call_Flow("CID_Portal_Update_contact_ParentAccount", contactrecordData);
                            var m000117 = tdg.error_message.message("m000117");
                            // "The Secondary Contact {0} has been sent an on-boarding invitation to their email address of {1}.";
                            m000117 = m000117.replace("{0}", firstname + " " + lastname).replace("{1}", emailaddress);
                            // show error message
                            tdg.c.dialog_OK(m000117);
                            $("#myModal").css({ left: 40 });
                            //close the form if user selected OK button
                            $("#btnOK").on('click', function () {
                                parent.$(".form-close").eq(0).click();
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

                    //get user invitation
                    var adx_invitationResults = tdg.webapi.SelectedColumnlist("adx_invitations", "adx_expirydate", "_adx_invitecontact_value eq " + ContactId);
                    //check if user logined before
                    var result = tdg.webapi.SelectedColumnlist("contacts", "msdyn_portaltermsagreementdate", "contactid eq " + ContactId);
                    console.log("after select contacts results");
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
                    console.log("Deactivation started");
                    var data =
                        '{ "EmailCode" : "' + FlowEmailCode + '", ' +
                        '"AccountId" : "' + ParentAccount + '" ,' +
                        '"Primary_Contactid" : "' + CurrentUserID + '" ,' +
                        '"Secondary_Contactid" : "' + ContactId + '"}';
                    // call function to execute flow
                    tdg.cid.flow.Call_Flow("CID_Send_Portal_Contact_Email_by_Email_Code", data);
                }
                else {
                    var m000119 = tdg.error_message.message("m000119");
                    //show error message
                    tdg.c.dialog_OK(m000119);
                }

            }//end else
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

                            console.log("after refresh");
                            //****************************call workflow ******************** */
                            var SendEmailFlowData = '{"EmailCode" : "S4-4", ' +
                                '"AccountId" : "' + ParentAccount + '" ,' +
                                '"Primary_Contactid" : "' + contactid + '" ,' +
                                '"Secondary_Contactid" : "' + CurrentUserID + '"}';
                            tdg.cid.flow.Call_Flow("CID_Send_Portal_Contact_Email_by_Email_Code", SendEmailFlowData);

                        }
                    });
                }
                else {
                    var m000115 = tdg.error_message.message("m000115");
                    //show error message
                    tdg.c.dialog_OK(m000115);
                }//end else if user login before

            }//end else
           

        }
        ,

    }
}

