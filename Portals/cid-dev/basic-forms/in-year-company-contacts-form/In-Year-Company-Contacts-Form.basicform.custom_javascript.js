//
// Basic Form-In Year Company Contacts Form.js
//

$(document).ready(function () {
   
    //*******Remove menu item basedon user type******** */
		var gridList = $(".entity-grid");
          //add onload event to grid 
            gridList.on("loaded", function () {
				gridList.find("tr").each(function (){
                    var ContactTypeCell = $(this).find('td')[0];
					var ContactFullNameCell = $(this).find('td')[1];
                    var contactid = $(this).attr("data-id") ;
                    var contactType = $(ContactTypeCell).attr("aria-label");
                    var ContactFullName = $(ContactFullNameCell).attr("aria-label");
                    console.log ("full name");
                    console.log (ContactFullName);

				   //fins Menue action
		          $(this).find('td[aria-label="action menu"]').each(function() {
				   //find ul
				   var ul = $(this).find("ul");
                    if (contactType != "Primary")
					  {
                          //add the "resend invitation" action
                          $(ul).append('<li role="none"><a href="#"  role="menuitem" tabindex="-1" title="Resend Invitation" aria-setsize="4" aria-posinset="4">Resend Invitation</a></li>');
                      
                         //add "Assign as Primary Admin" action
                          $(ul).append('<li role="none"><a href="#" onclick="AssignAsAdmin(' + "'" + contactid + "','" 
                          + ContactFullName + "'" +  ')" role="menuitem" tabindex="-1" title="Assign as Primary Admin" aria-setsize="4" aria-posinset="4">Assign as Primary Admin</a></li>');
                      
                      
                      }
                  //find list item (Li)
				   $(ul).find("li").each(function()
				   {
					   //get the menue titel
					var menueTitle = $(this).find("a").attr("title");					  
					  if (contactType == "Primary")
					  {
						  if ( menueTitle != "Edit")
						  {
							   $(this).attr("hidden", "true");
						  }
					  }//end check if primary

				   });//end find ul li

				  });//end find menu action

				});//end find tr
					});//end on grid load                  
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

async function Update_contactType(data1 , data2)
{
      var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
   var CurrentUserID = '{{user.id}}';
      await tdg.webapi.update("contacts", contactid, data1);
             
               
    await tdg.webapi.update("contacts", CurrentUserID, data2);
   
     $(".entity-grid").trigger("refresh");

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
       console.log (result[0]["msdyn_portaltermsagreementdate"]);
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
                 //Update_contactType(data1 , data2)
                  tdg.webapi.update("contacts", CurrentUserID, data2);	
                 $(".entity-grid").trigger("refresh");
                 console.log("after refresh");
                 } else {} });
        }
       else
       {
           var m000115 = tdg.error_message.message("m000115");
            //show error message
           tdg.c.dialog_OK(m000115);
       }//end else if user login before

    }//end else


     console.log("flow url123");
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
 }