//
// CompanyRegistrationWizard-Contact.js
//
$(document).ready(function ()
{
	$(".create-action").click(function ()
	{
		//alert("Test");
		$('#ValidationSummaryEntityFormView div').remove();
	});
	//*******Remove menu item basedon user type******** */
	var gridList = $(".entity-grid");
	//add onload event to grid 
	tdg.grid.Registeration_ContactGrid_Actions (gridList);
	
	//gridList.on("loaded", function ()
	//{
	/*	gridList.find("tr").each(function ()
		{
			var ContactTypeCell = $(this).find('td')[0];
			var ContactFullNameCell = $(this).find('td')[1];
			var contctId = $(this).attr("data-id");
			//Console.log(contctId) ;
			//console.log($(this).attr("data-id"));
			var contactType = $(ContactTypeCell).attr("aria-label");
			var ContactFullName = $(ContactFullNameCell).attr("aria-label");
			
			//find Menue action
			$(this).find('td[aria-label="action menu"]').each(function ()
			{
				//find ul
				var ul = $(this).find("ul");
				  //add the "resend invitation" action
                $(ul).append('<li role="none"><a href="#"  role="menuitem" tabindex="-1" title="Resend Invitation" aria-setsize="4" aria-posinset="4">Resend Invitation</a></li>');
                 $(ul).append('<li role="none"><a href="#" onclick="DeactivateContact(' + "'" + contctId +"'" +  ')" role="menuitem" tabindex="-1" title="Deactivate" aria-setsize="4" aria-posinset="4">Deactivate</a></li>');
                         
				//find list item (Li)
				$(ul).find("li").each(function ()
				{
					//get the menue titel
					var menueTitle = $(this).find("a").attr("title");
					if (contactType == "Primary")
					{
						if (menueTitle != "View details")
						{
							$(this).attr("hidden", "true");
						}
					} //end check if primary
						//$(link).attr("Class", "details-link");
				}); //end find ul li
			}); //end find menu action
		}); //end find tr
	}); //end on grid load
	*/
	//$('.create-action').on("click", function () {
	//    //alert("Test");
	//    $('#ValidationSummaryEntityFormView div').remove();
	//})
	debugger;
	sessionStorage.setItem("step_start", 2);
	root_erap_setup();
	//make for readonly for secondary users
	var currentUserId = '{{user.contactid}}';
	Disable_ContactTypeFieldsForSecondaryUser(currentUserId);
});
if (window.jQuery)
{
	(function ($)
	{
		webFormClientValidate = function ()
		{
			debugger;
			var validation = false;
			var companyId = $("#EntityFormView_EntityID").val();
			//var filter = "parentcustomerid/Id eq (guid'" + companyId + "')";
			var filter = "_parentcustomerid_value eq '" + companyId + "'";
			//var data = ExecuteQuery("Validation_CompanyPrimarySecondaryContacts", filter);
			var data = tdg.webapi.list("contacts", filter);
			//var data = tdg.c.OData_List("contact", filter);
			if (data != null)
			{
				var primaryFound = false;
				var secondaryFound = false;
				for (i = 0; i < data.length; i++)
				{
					//if (data[i].cid_contacttype.Value == 100000000) primaryFound = true;
					//if (data[i].cid_contacttype.Value == 100000001) secondaryFound = true;
					if (data[i].cid_contacttype == 100000000) primaryFound = true;
					if (data[i].cid_contacttype == 100000001) secondaryFound = true;
				}
				if (primaryFound && secondaryFound)
				{
					validation = true;
					return true;
				}
			}
			if (!validation)
			{
				tdg.c.error_message_advanced_form("m000002", true); // You cannot proceed before adding at least one secondary contact.
				//$('#ValidationSummaryEntityFormView div').remove();
				//var validationSection = $('#ValidationSummaryEntityFormView');
				//var errorMessage = "You cannot proceed before adding at least one secondary contact.";
				//validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
				//validationSection.show();
				//$('#alertMessages').focus();
			}
			return validation;
		}
	}(window.jQuery));
}

function root_erap_setup()
{
	debugger;
	var cid_has_cra_bn = '{{user.cid_has_cra_bn}}';
	cid_has_cra_bn = (cid_has_cra_bn == "true" ? true : false);
	var parentcustomerid = '{{user.parentcustomerid.Id}}';
	var contact_id = '{{user.id}}';
	var cid_crabusinessnumber = '{{user.cid_crabusinessnumber}}';
	tdg.root.setup(cid_has_cra_bn, cid_crabusinessnumber, parentcustomerid, contact_id);
}

function Disable_ContactTypeFieldsForSecondaryUser(currentuserId)
{
	debugger;
	var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
	//if not primary contact
	if (cid_usercontacttype != 100000000)
	{
		$(".create-action").attr("disabled", true);
		$(".create-action").css("pointer-events", "none");
		//Wait till subgrid load
		$("#Contacts").on("loaded", function ()
		{
			$(".btn.btn-default.btn-xs").prop("disabled", true);
			$(".details-link").prop("disabled", true);
			$(".details-link").css("pointer-events", "none");
		});
	}
}

function DeactivateContact(ContactId)
{
	var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
	var CurrentUserID = '{{user.id}}';
   var ParentAccount = '{{user.parentcustomerid.id}}' ;
   var LanguageCode = '{{website.selected_language.code}}';
	//if not primary
   if (cid_usercontacttype != 100000000)
	{
		 // var m000115 = tdg.error_message.message("m000115");
            //show error message
           tdg.c.dialog_OK("Only the Primary Admin can deactivate a Secondary Admin");
	}//end check user type
	else
	{
		 //get all secondary contacts
		 var contactQueryResults =  tdg.webapi.SelectedColumnlist ("contacts", "firstname", "cid_contacttype ne 100000000 and _parentcustomerid_value eq " + ParentAccount );
		 console.log (contactQueryResults.length);
		 if (contactQueryResults.length > 1)
		 {
			  //get flow URL
			  var FlowName = "CID Send Portal Contact Email by EmailCode";
            var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");
            console.log("URL  " +  EnvironmentSettingResult.length);



			  tdg.c.dialog_OK("Deactivation started");
			  var data =
           '{"EmailCode" : "S4-4", '+
            '"AccountId" : "' + ParentAccount + '" ,' +
            '"Primary_Contactid" : "' + ContactId + '" ,' +
            '"Secondary_Contactid" : "' + CurrentUserID + '"}';
			
			  tdg.cid.flow.Call_Flow("CID_Send_Portal_Contact_Email_by_Email_Code",data) ;
		 }
		 else
		 {
		   // var m000115 = tdg.error_message.message("m000115");
           //show error message
           tdg.c.dialog_OK("At least one other active Secondary Admin needs to be added before you can deactivate this Secondary Admin.");
		 }




	}//end else
}