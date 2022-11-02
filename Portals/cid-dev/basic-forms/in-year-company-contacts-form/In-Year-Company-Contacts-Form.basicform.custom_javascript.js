//
// Basic Form-In Year Company Contacts Form.js
//

$(document).ready(function () {
   page_setup();
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

    //if not primary contact
    if (cid_usercontacttype != 100000000)
    {
    var m000113= tdg.error_message.message("m000113");
       tdg.c.dialog_OK(m000113);
    }
    else
    {
        // retrieve contact by GUID
       var result =  tdg.webapi.SelectedColumnlist  ("contacts", "msdyn_portaltermsagreementdate", "contactid eq " + contactid );
     
        //if contact doesn't have agreement date
        if (result[0]["msdyn_portaltermsagreementdate"] != null)
        {
            var m000114= tdg.error_message.message("m000114");
           
            tdg.c.dialog_YN(m000114.replace('{0}' , contactFullName), (ans) => {if (ans) {
                 //update contact type to primary
                  var data1 = {"cid_contacttype" : 100000000 };
                 var response = tdg.webapi.update("contacts", contactid, data1);                
                 //switch current contact to secondary
                 var data2 = {"cid_contacttype" : 100000001 };
                
                  tdg.webapi.update("contacts", CurrentUserID, data2);	
                 $(".entity-grid").trigger("refresh");
                 console.log("after refresh");
    //****************************call workflow ******************** */
                var EnvironmentSettingResult =  tdg.webapi.SelectedColumnlist ("qm_environmentsettingses", "qm_value", "qm_name eq 'CID_Flow_Primary_Contact_Change_With_Secondary'" );
                if (EnvironmentSettingResult.length > 0 )
                {
                    var FlowURL = EnvironmentSettingResult[0]["qm_value"]; 
                        console.log("flow url");
                        console.log(FlowURL );
                        var FlowParamater =
                        '{"AccountId" : "' + ParentAccount + '" ,' +
                        '"New_Primary_Contactid" : "' + contactid + '" ,' +
                        '"Previous_Contactid" : "' + CurrentUserID + '", ' +
                        '"UI_Language_Code" : "' + LanguageCode + '"}';
                    var req = new XMLHttpRequest();
                    req.open("POST", FlowURL , true);
                    req.setRequestHeader('Content-Type', 'application/json');
                    req.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            req.onreadystatechange = null;
                            if (this.status === 200) { }
                        }
                        }
                        req.send(FlowParamater);
                            }  
  
                 }  });
        }
       else
       {
           var m000115 = tdg.error_message.message("m000115");
            //show error message
           tdg.c.dialog_OK(m000115);
       }//end else if user login before

    }//end else


  
     var EnvironmentSettingResult =  tdg.webapi.SelectedColumnlist ("qm_environmentsettingses", "qm_value", "qm_name eq 'CID Send Portal Contact Email by EmailCode'" );
    if (EnvironmentSettingResult.length > 0 )
    {
        var FlowURL = EnvironmentSettingResult[0]["qm_value"]; 
            console.log("flow url");
            console.log(FlowURL );
            var FlowParamater =
            '{"EmailCode" : "S4-4", '+
            '"AccountId" : "' + ParentAccount + '" ,' +
            '"Primary_Contactid" : "' + contactid + '" ,' +
            '"Secondary_Contactid" : "' + CurrentUserID + '", ' +
            '"Language_Code" : "' + LanguageCode + '"}';
        var req = new XMLHttpRequest();
        req.open("POST", FlowURL , true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) { }
            }
}
req.send(FlowParamater);
    }                
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
   setInterval(refreshGrid, 50000); 
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
    alert ("resend invitation started");


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