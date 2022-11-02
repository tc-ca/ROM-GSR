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
	//*******Add actions and events to contact grid ******** */
	var gridList = $(".entity-grid");
	//add onload event to grid 
	tdg.grid.Registeration_ContactGrid_Actions (gridList);
	//*********************************************** */
	
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
   console.log ("cid_usercontacttype " + cid_usercontacttype );
   var LanguageCode = '{{website.selected_language.code}}';
   console.log("after moving the code to js file2");
   invitation.Execute_Invitation_Deactivation_Logic(ContactId,cid_usercontacttype, CurrentUserID, ParentAccount, LanguageCode  );
   /*
   var FlowEmailCode = "" ;
	//if not primary
   if (cid_usercontacttype != 100000000)
	{
		//m000118
		 var m000118 = tdg.error_message.message("m000118");
         tdg.c.dialog_OK(m000118);
			 //"Only the Primary Admin can deactivate a Secondary Admin");
	}//end check user type
	else
	{
		 //get all secondary contacts
		 var contactQueryResults =  tdg.webapi.SelectedColumnlist ("contacts", "firstname", "cid_contacttype ne 100000000 and _parentcustomerid_value eq " + ParentAccount );
		//if more than one secondary contact eixts
		 if (contactQueryResults.length > 1)
		 {

			 //get user invitation
			  var adx_invitationResults =  tdg.webapi.SelectedColumnlist ("adx_invitations", "adx_expirydate", "_adx_invitecontact_value eq " + ContactId );
			  console.log("Inviation results");
			  console.log(adx_invitationResults);
		
			 //check if user logined before
			  var result =  tdg.webapi.SelectedColumnlist ("contacts", "msdyn_portaltermsagreementdate", "contactid eq " + ContactId );
               console.log("after select contacts results");
			  console.log (result[0]["msdyn_portaltermsagreementdate"]);
              //if contact doesn't have agreement date
              if (result[0]["msdyn_portaltermsagreementdate"] != null)
              {
				 //adx_invitation
				if (adx_invitationResults.length > 0 )
				{
					FlowEmailCode = "S4-2";
				}
				else
				{
					FlowEmailCode = "S4-1";
				}
		
			  }//end check if user login before
			  else
			  {
				  //check the user that did not login has invitation
				  if (adx_invitationResults.length > 0 )
				  {
					  FlowEmailCode = "S4-3";

				  }

			  }
			  //deactivate contact
			  tdg.webapi.update ("contacts",ContactId ,'{ "statuscode " :"2" , "statecode " : "1" }' );
			 		
              //Execute flow to send email and set expiry date for invitation   
			  //get flow URL
			  tdg.c.dialog_OK("Deactivation started");
			  var data =
           '{ "EmailCode" : "' + FlowEmailCode + '", '+
            '"AccountId" : "' + ParentAccount + '" ,' +
            '"Primary_Contactid" : "' + CurrentUserID + '" ,' +
            '"Secondary_Contactid" : "' + ContactId + '"}';
			// call function to execute flow
			  tdg.cid.flow.Call_Flow("CID_Send_Portal_Contact_Email_by_Email_Code",  data)  ;
		 }
		 else
		 {
		    var m000119 = tdg.error_message.message("m000119");
           //show error message
           tdg.c.dialog_OK(m000119);
		 }

	}//end else
	*/
}