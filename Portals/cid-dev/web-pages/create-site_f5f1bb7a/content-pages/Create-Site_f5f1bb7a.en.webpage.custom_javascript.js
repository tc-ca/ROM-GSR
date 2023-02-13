// CreateSite.js
$(document).ready(function ()
{
	debugger;
	$("#createdon").closest("tr").hide();
	$("#cid_createdbyregistrant_label").closest("tr").hide();
	if (sessionStorage.getItem('frominyearsites') == "true")
	{
		tdg.c.weblink_hide("/RegistrationWizard/");
		tdg.c.weblink_hide("/Bulk_Site_Upload/");
	}
	else
	{
		tdg.c.weblink_hide("/company_dashboard/");
		tdg.c.weblink_hide("/Bulk_Site_Update/");
	}
	console.log("document read");
	$(".breadcrumb li").each(function ()
	{
		if ($(this).text() == '\n  Site Registration\n ')
		{
			if (sessionStorage.getItem('frominyearsites') == "true")
			{
				var bredcrumb = $(this);
				bredcrumb.text('\n My Sites\n');
				bredcrumb[0].innerHTML = "\n  <a href=\"/my-sites/\" title=\"My Sites\">My Sites</a>\n ";
			}
			else
			{
				var bredcrumb = $(this);
				bredcrumb[0].innerHTML = "\n  <a href=\"/RegistrationWizard/\" title=\"Site Registration\">Site Registration</a>\n ";
			}
		}
	});
});


if (window.jQuery)
{
	(function ($)
	{
		if (typeof (entityFormClientValidate) != 'undefined')
		{
			var originalValidationFunction = entityFormClientValidate;
			if (originalValidationFunction && typeof (originalValidationFunction) == "function")
			{
				entityFormClientValidate = function ()
				{
					originalValidationFunction.apply(this, arguments);
					// do your custom validation here
					// return false; // to prevent the form submit you need to return false
					// end custom validation.
					debugger;
					var duplicatefound = false;
					var account_id = '{{user.parentcustomerid.Id}}';
					var addressType = $("#ovs_address_type").val();
					switch (addressType)
					{
						case "1":
							// legal land description
							var quarter = $("#ovs_lld_quarter").val();
							var section = $("#ovs_lld_section").val();
							var township = $("#ovs_lld_township").val();
							var range = $("#ovs_lld_range").val();
							var meridian = $("#ovs_lld_meridian").val();
							break;
						case "2":
							// lat/long
							var latitude = $("#address1_latitude").val();
							var longitude = $("#address1_longitude").val();
							break;
						default:
							//postal
							debugger;
							var address1_line1 = $("#address1_line1").val();
							var address1_city = $("#address1_city").val();
							var address1_stateorprovince = $("#address1_stateorprovince").val();

							var parameters = {};
							parameters.Parent_Id = account_id; // Edm.String
							parameters.AddressType = 0; // Edm.Int32
							parameters.Address1_StateorProvince = "ON"; // Edm.String
							//var result = tdg.webapi.executeAction("account", account_id, parameters, "cid_CID_Create_Update_SiteDuplicateValidation");
							//var result = tdg.cid.flow.Call_Flow("CID_Flow_Site_Duplicate_Validation_Test", JSON.stringify(parameters));
							
                            var FlowName = "CID_Flow_Site_Duplicate_Validation_Test";
                            var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");							if (EnvironmentSettingResult.length > 0)
							{                                
								var FlowURL = EnvironmentSettingResult[0]["qm_value"];
								// Execute flow
								var req = new XMLHttpRequest();
								req.open("POST", FlowURL, true);
								req.setRequestHeader('Content-Type', 'application/json');
                                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
								req.onreadystatechange = function ()
								{
									if (this.readyState === 4)
									{
										req.onreadystatechange = null;
										if (this.status === 200)
										{ 
                                            debugger;
											if (duplicatefound)
											{
												var message = tdg.error_message.message("m000131");
												//message = message.replaceAll("{0}", "AAA");
												tdg.c.dialog_YN(message, (ans) => {
													var contact_id = '{{user.id}}';
													alert(ans);
													if (ans)
													{}
												});
											}
										}
									} //end ready status
								} //end on ready function
								req.send(parameters);
							} //end check if flow url found
							break;
					}
					//if (duplicatefound)
					//{
					//	var message = tdg.error_message.message("m000131");
					//	//message = message.replaceAll("{0}", "AAA");
					//	tdg.c.dialog_YN(message, (ans) => {
					//		var contact_id = '{{user.id}}';
					//		alert(ans);
					//		if (ans)
					//		{}
					//	});
					//}
					return false;
				};
			}
		}
	}(window.jQuery));
}
