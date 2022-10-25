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
				   //fins Menue action
		          $(this).find('td[aria-label="action menu"]').each(function() {
				   //find ul
				   var ul = $(this).find("ul");
                    if (contactType != "Primary")
					  {
                          $(ul).append('<li role="none"><a href="#" onclick="AssignAsAdmin(' + "'" + contactid + "'" + ')" role="menuitem" tabindex="-1" title="Assign as Primary Admin" aria-setsize="4" aria-posinset="4">Assign as Primary Admin</a></li>');
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


                    //
function AssignAsAdmin(contactid)
 {
     //get current login user type
   var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
   //msdyn_portaltermsagreementdate
   console.log("user type");
   console.log(cid_usercontacttype);
    //if not primary contact
    if (cid_usercontacttype != 100000000)
    {
        //var m000022 = tdg.error_message.message("m000022");
       tdg.c.dialog_OK("The Assign as Primary Admin is restricted to only the Primary Admin for this company.");
    }
    else
    {
        // retrieve contact by GUID

        //if contact doesn't have agreement date
        {

        }
        //else
        //update contact type to primary
        //switch current contact to secondary




    }//end else
                     
 }