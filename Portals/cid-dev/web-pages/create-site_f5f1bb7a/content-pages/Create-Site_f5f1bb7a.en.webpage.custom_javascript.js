// CreateSite.js
$(document).ready(function () {
	debugger;
	$("#createdon").closest("tr").hide();
	$("#cid_createdbyregistrant_label").closest("tr").hide();
	if (sessionStorage.getItem('frominyearsites') == "true") {
		tdg.c.weblink_hide("/RegistrationWizard/");
		tdg.c.weblink_hide("/Bulk_Site_Upload/");
	}
	else {
		tdg.c.weblink_hide("/company_dashboard/");
		tdg.c.weblink_hide("/Bulk_Site_Update/");
	}
	console.log("document read");
	$(".breadcrumb li").each(function () {
		if ($(this).text() == '\n  Site Registration\n ') {
			if (sessionStorage.getItem('frominyearsites') == "true") {
				var bredcrumb = $(this);
				bredcrumb.text('\n My Sites\n');
				bredcrumb[0].innerHTML = "\n  <a href=\"/my-sites/\" title=\"My Sites\">My Sites</a>\n ";
			}
			else {
				var bredcrumb = $(this);
				bredcrumb[0].innerHTML = "\n  <a href=\"/RegistrationWizard/\" title=\"Site Registration\">Site Registration</a>\n ";
			}
		}
	});
});


if (window.jQuery) {
	(function ($) {
		if (typeof (entityFormClientValidate) != 'undefined') {
			var originalValidationFunction = entityFormClientValidate;
			if (originalValidationFunction && typeof (originalValidationFunction) == "function") {
				entityFormClientValidate = function () {
					originalValidationFunction.apply(this, arguments);
					// do your custom validation here
					// return false; // to prevent the form submit you need to return false
					// end custom validation.
					debugger;
					var account_id = '{{user.parentcustomerid.Id}}';
					var addressType = $("#ovs_address_type").val();
					switch (addressType) 
                    {
						case "1":
							// legal land description
							var lldProvince = $("#ovs_lld_province").val();
							var quarter = $("#ovs_lld_quarter").val();
							var section = $("#ovs_lld_section").val();
							var township = $("#ovs_lld_township").val();
							var range = $("#ovs_lld_range").val();
							var meridian = $("#ovs_lld_meridian").val();

							var parameters = {};
							parameters.Parent_Id = account_id; // Edm.String
                            if(lldProvince != (null || "")){  parameters.Lld_Province = parseInt(lldProvince); }   // Edm.Int32                    
                            if(quarter != (null || "")){  parameters.Lld_Quarter = parseInt(quarter); }   // Edm.Int32    
                            if(section != (null || "")){  parameters.Lld_Section = parseInt(section); }   // Edm.Int32                    
                            if(township != (null || "")){  parameters.Lld_Township = parseInt(township); }   // Edm.Int32                    
                            if(range != (null || "")){  parameters.Lld_Range = parseInt(range); }   // Edm.Int32                    
                            if(meridian != (null || "")){  parameters.Lld_Meridian = parseInt(meridian); }   // Edm.Int32 
                            parameters.AddressType = 1; // Edm.Int32

                            var FlowName = "CID_Flow_Site_Duplicate_Validation_Test";
                            var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");

                            if (EnvironmentSettingResult.length > 0) 
                            {
                                var FlowURL = EnvironmentSettingResult[0]["qm_value"];
                                //Execute flow
                                var duplicateFound = tdg.webapi.executeFlow(FlowURL, parameters);
                                 if (duplicateFound) //IF DUPLICATE FOUND
                                 { 
                                    var message = tdg.error_message.message("m000131");
                                    tdg.c.dialog_YN(message, (ans) => 
                                    {
                                        if (ans) 
                                        {
                                            return false;
                                            //Do nothing
                                        }
                                        else 
                                        {   
                                            return true; 
                                            //Add ALM record.                                            
                                            var data = {
                                                "cid_Company_cid_activityreviewlog@odata.bind": "/accounts(" + account_id + ")",
                                                "subject": "A duplicate Site was created, LLD",
                                                "prioritycode": 1,
                                                "actualdurationminutes": 30,
                                                "cid_arlcategory":100000000
                                            };
                                            tdg.webapi.create("cid_activityreviewlogs", data); 
                                            Page_IsValid = true;
                                            return true; 
                                        }
                                    });
                                }
                               else
                                   return true;
                           }
                            else
                                return true;
                
                        break;
                        
						case "2":
							// lat/long
							var latitude = $("#address1_latitude").val();
							var longitude = $("#address1_longitude").val();
                            
                            var parameters = {};   
                            parameters.Parent_Id = account_id; // Edm.String
                            parameters.AddressType = 2; // Edm.Int32
                            if(latitude != (null || "")){  parameters.Address1_Latitude = parseFloat(latitude); }   // Edm.Float                    
                            if(longitude != (null || "")){  parameters.Address1_Longitude = parseFloat(longitude); }   // Edm.Float    

                            var FlowName = "CID_Flow_Site_Duplicate_Validation_Test";
                            var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");

                            if (EnvironmentSettingResult.length > 0) 
                            {
                                var FlowURL = EnvironmentSettingResult[0]["qm_value"];
                                //Execute flow
                                var duplicateFound = tdg.webapi.executeFlow(FlowURL, parameters);
                                 if (duplicateFound) //IF DUPLICATE FOUND
                                 { 
                                    var message = tdg.error_message.message("m000131");
                                    tdg.c.dialog_YN(message, (ans) => 
                                    {
                                        if (ans) 
                                        {
                                            return false;
                                            //Do nothing
                                        }
                                        else 
                                        {
                                            //add ALM record.
                                            return true;                                        
                                        }
                                    });
                                }
                               else
                                   return true;
                           }
                            else
                                return true;
                                
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
							parameters.Address1_StateorProvince = address1_stateorprovince; // Edm.String
							parameters.Address1_Line1 = address1_line1; // Edm.String
							parameters.Address1_City = address1_city;
                                                        
                            var FlowName = "CID_Flow_Site_Duplicate_Validation_Test";
                            var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");

                            if (EnvironmentSettingResult.length > 0) 
                            {
                                var FlowURL = EnvironmentSettingResult[0]["qm_value"];
                                //Execute flow
                                var duplicateFound = tdg.webapi.executeFlow(FlowURL, parameters);
                                 if (duplicateFound) //IF DUPLICATE FOUND
                                 { 
                                    var message = tdg.error_message.message("m000131");
                                    tdg.c.dialog_YN(message, (ans) => 
                                    {
                                        if (ans) 
                                        {
                                            return false;
                                            //Do nothing
                                        }
                                        else 
                                        {
                                            return false;
                                        //need to add ALM record.
                                        }
                                    });
                                }
                               else
                                   return true;
                           }
                            else
                                return true;
                                
							break;                  
					}
				};
			}
		}
	}(window.jQuery));
}

var cb = function (v) { console.log('value', v); return v; };