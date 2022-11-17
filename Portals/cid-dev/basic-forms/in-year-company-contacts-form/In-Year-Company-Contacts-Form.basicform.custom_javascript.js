//
// Basic Form-In Year Company Contacts Form.js
//

$(document).ready(function () {
    $("#cid_registrationasof").parent().parent().hide();

   page_setup();
   var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
	//if not primary contact
	if (cid_usercontacttype != 100000000)
	{
        //disable add button
		$(".create-action").attr("disabled", true);
		$(".create-action").css("pointer-events", "none");
    }

    //*******Remove menu item basedon user type******** */
		var gridList = $(".entity-grid");
        console.log("after moving the code to file");
        //update grid to inlude deactivate , resend , assign primary admin action with click events to each row
        tdg.grid.InYear_ContactGrid_Actions(gridList);    
          
    debugger;

    if (cidCompanyStatus.indexOf("Inactive") >= 0) {
        $(".create-action").hide();

        $("#Contacts").on("loaded", function () {
            $(this).find("tbody").find("tr").each(function () {
                $(this).find('td:last').remove();
            });
        });
        $('#EntityFormPanel').find('input, textarea, button, select').attr('disabled', 'disabled');
    }

    $("#telephone1").attr("maxlength", "10");
    $("#mobilephone").attr("maxlength", "10");
    $("#fax").attr("maxlength", "10");

    $("#telephone1").on('keyup', function () {
        var n = $(this).val().replace(/\D/g, '');
        $(this).val(n);
        var match = n.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            $(this).val('(' + match[1] + ') ' + match[2] + '-' + match[3]);
        }
    });
    $("#mobilephone").on('keyup', function () {
        var n = $(this).val().replace(/\D/g, '');
        $(this).val(n);
        var match = n.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            $(this).val('(' + match[1] + ') ' + match[2] + '-' + match[3]);
        }
    });
    $("#fax").on('keyup', function () {
        var n = $(this).val().replace(/\D/g, '');
        $(this).val(n);
        var match = n.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            $(this).val('(' + match[1] + ') ' + match[2] + '-' + match[3]);
        }
    });

    $("#cid_iscompanyattested").prop("checked", false);



});

if (window.jQuery) {
    (function ($) {
        entityFormClientValidate = function () {
            if ($("#cid_iscompanyattested").prop('checked')) {
                return true;
            }
            else {
                var errorMessage = tdg.error_message.message("m000026");                
                $('.validation-summary div').remove();
                var validationSection = $('.validation-summary');
                validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
                validationSection.show();
                $('.validation-summary div').focus();

                return false;
            }
        }
    }(window.jQuery));
}


//check user assign
 function AssignAsAdmin(contactid , contactFullName)
 {
    
  //get current login user type
   var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
   var CurrentUserID = '{{user.id}}';
   var ParentAccount = '{{user.parentcustomerid.id}}' ;
   var LanguageCode = '{{website.selected_language.code}}';
   invitation.Execute_Assign_Primary_Admin_Logic(contactid, contactFullName, cid_usercontacttype, CurrentUserID, ParentAccount, LanguageCode);

  

       
 }

//dactivate contact in the Grid
 function DeactivateContact(ContactId)
{
	var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
	var CurrentUserID = '{{user.id}}';
   var ParentAccount = '{{user.parentcustomerid.id}}' ;
   var LanguageCode = '{{website.selected_language.code}}';
   console.log("deactivation started");
   //deactivate contact and set expiry date for invitation
   invitation.Execute_Invitation_Deactivation_Logic(ContactId,cid_usercontacttype, CurrentUserID, ParentAccount, LanguageCode  );
   //setInterval(refreshGrid, 50000); 
   setTimeout(refreshGrid, 3000);
   console.log("refresh grid");
    $(".entity-grid").trigger("refresh");
    
}
function refreshGrid()
{
     $(".entity-grid").trigger("refresh");
     console.log("inside funtion refresh grid");

}
function ResendInvitation(contactid, fullname)
{
    // get current user contact type
    var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
                
   if (cid_usercontacttype == 100000000) 
   { 
       // retrieve contact by GUID
            var result = tdg.webapi.SelectedColumnlist("contacts", "msdyn_portaltermsagreementdate,emailaddress1",
                 "contactid eq " + contactid);
                //if contact doesn't have agreement date
                if (result[0]["msdyn_portaltermsagreementdate"] == null) {
                    var m2 ="The Secondary Contact {0} has been re-sent an on-boarding invitation email to {1}.";
                    m2 = m2.replace("{0}" , fullname ).replace("{1}" ,result[0]["emailaddress1"] );
                    tdg.c.dialog_OK(m2);
                     var SendEmailFlowData = '{'+
                            '"Secondary_Contactid": "'+ contactid + '",' +
                            '"Email_Code": "S3-1",' +
                            '"Portal_URL": "https://'+ window.location.hostname +'"'+
                            '}';
                            console.log(SendEmailFlowData);
                     tdg.cid.flow.Call_Flow("CID_Send_Portal_Contact_Invitations", SendEmailFlowData);
                }
                else
                {
                    var m = "The Resend Onboarding Invitation is only available to Secondary Admins that have not yet logged into the CID Platform.";
                     tdg.c.dialog_OK(m);
                
                }
            }
            else
            {
                 var mm = "Only Primary Admin can Resend invitation.";
                     tdg.c.dialog_OK(mm); 
            }
}

function page_setup() {
    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    const files = ["/tdgcore_common.js", "/tdgcore_message.js" , "/tdgcore_invitation.js"];
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = file;

        $("body").append(script);
    }

    // server error?
    tdg.c.message_panel();
}