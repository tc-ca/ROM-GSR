//
// SiteRegistrationWizard-Site.js
//

var _busy = false;
$(document).ready(function () {
	debugger;
	page_setup();
	$("#adx_modifiedbyusername").val('{{user.adx_identity_username}}');
	 tdg.c.control_hide("adx_modifiedbyusername");
	 tdg.c.control_hide("ovs_duplicatesiteflag");
	 tdg.c.control_hide("cid_portalrecordcreationdetails");
	 tdg.c.control_hide("cid_cidflag");

	
    sessionStorage.setItem("Address1Onload", $("#address1_line1").val());
	console.log( "address 1 on load " + $("#address1_line1").val());
     $("#address1_line1").change(function(e) {
		 sessionStorage.setItem("AddressDataChanged", true);
	 });
	     $("#address1_line2").change(function(e) {
		 sessionStorage.setItem("AddressDataChanged", true);
	 });
	     $("#address1_line3").change(function(e) {
		 sessionStorage.setItem("AddressDataChanged", true);
	 });
	     $("#address1_postalcode").change(function(e) {
		 sessionStorage.setItem("AddressDataChanged", true);
	 });
	     $("#address1_latitude").change(function(e) {
		 sessionStorage.setItem("AddressDataChanged", true);
	 });
	  $("#address1_longitude").change(function(e) {
		 sessionStorage.setItem("AddressDataChanged", true);
	 });
	     $("#ovs_lld_quarter").change(function(e) {
		 sessionStorage.setItem("AddressDataChanged", true);
	 });
	     $("#ovs_lld_section").change(function(e) {
		 sessionStorage.setItem("AddressDataChanged", true);
	 });
	     $("#ovs_lld_township").change(function(e) {
		 sessionStorage.setItem("AddressDataChanged", true);
	 });
	     $("#ovs_lld_township").change(function(e) {
		 sessionStorage.setItem("AddressDataChanged", true);
	 });
	      $("#ovs_lld_range").change(function(e) {
		 sessionStorage.setItem("AddressDataChanged", true);
	 });
	     $("#ovs_lld_meridian").change(function(e) {
		 sessionStorage.setItem("AddressDataChanged", true);
	 });




	var selected_language = '{{website.selected_language.code}}';

	sessionStorage.setItem("selected_language", selected_language);

	$("#ValidationSummaryEntityFormView").after($('.text-danger').parent());
	$("#ValidationSummaryEntityFormView").after('<div id="ErrorMessageDiv" class="alert alert-danger" role="alert" style="display: none;">  </div>');
	Show_PluginError_TextLanguag($('.text-danger').parent());

	tdg.c.message_panel();

	tdg.c.page_instructions("page_srw_site");

	$("#NextButton").click(function (e) {
		$("#ovs_address1_province").attr("disabled", false);
	});

        var urlParams = new URLSearchParams(window.location.search);
		if (urlParams.has('id')) 
		{
					var siteid = urlParams.get('id');
				if (siteid != "") 
				{
				     var operationDataset = tdg.webapi.SelectedColumnlist("ovs_mocregistrations", "ovs_mocregistrationid",
						"statuscode eq 1 and  ovs_operationtype eq 918640038  and _ovs_siteid_value eq "  + siteid);
						console.log ("province : "  + $("#address1_stateorprovince").val());
						if ( $("#address1_stateorprovince").val() == "AB")
						{
							 operationDataset = tdg.webapi.SelectedColumnlist("ovs_mocregistrations", "ovs_mocregistrationid",
						"statuscode eq 1 and ( ovs_operationtype eq 918640038 or ovs_operationtype eq 918640042 ) and _ovs_siteid_value eq "  + siteid);

						}
						
						//var operationid = operationDataset[0].ovs_mocregistrationid ;
					
						if (operationDataset.length == 0)
						{
							var data = {
								"ovs_SiteId@odata.bind": "/accounts(" + siteid + ")",
								"ovs_operationtype": 918640038
							};
							tdg.webapi.create("ovs_mocregistrations", data);

						}
				}
		}

	var inYear = sessionStorage.getItem('frominyearsites');
	var annualCompliance = sessionStorage.getItem('fromannualcompliance');
	var frominyearsitepage = sessionStorage.getItem('frominyearsitepage');

	var addressReadOnly = false;

	$("#createdon").closest("tr").hide();
	$("#cid_createdbyregistrant_label").closest("tr").hide();

	if (inYear == 'true' || annualCompliance == 'true' || frominyearsitepage == 'true') {
		if ($("#cancelButton").length <= 0) {
			var cancelLabel = tdg.error_message.message("BTN_CANCEL");
			$("#NextButton").parent().after("<div role='group' class='btn-group entity-action-button'><input id='cancelButton' type='button' name='CancelButton' value='" + cancelLabel + "' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'></div>");
		}
		$('#cancelButton').click(function (e) {
			if (inYear == 'true') window.location.href = '~/my-sites/';
			else if (annualCompliance == 'true') window.location.href = '~/my-company/annual-compliance-update/';
			else if (frominyearsitepage == 'true') {
				var urlParams = new URLSearchParams(window.location.search);
				if (urlParams.has('id')) {
					var siteid = urlParams.get('id');
					if (siteid != "") window.location.href = '~/my-sites/in-year-site/?id=' + siteid;
				}
			}
		});

		//Control address edit
		var parent_Id = '{{ user.parentcustomerid.id }}';
		

		var created_On = new Date($("#createdon").val()).getTime();
	
		if ($("#cid_createdbyregistrant").val() != parent_Id && (Date.now() - created_On) / 1000 / 60 / 60 / 24 < 1) {
			$("#cid_same_as_company").attr("disabled", false);
			debugger;
			//form-control picklist 
			var addressTypeValue =  $("#ovs_address_type :selected").text();
    		$("#ovs_address_type").after('<div class="readonly form-control picklist" tabindex="0">'+addressTypeValue +' </div>')
            //hid disbled drop down
    		$("#ovs_address_type").css("display" , "none");


			$("#EntityFormView :input").prop("disabled",  false);
			  
			  


			
		}
		else {

			setTimeout(disable_All_Address_fields , 2000);
		

		}
	}

	document.getElementById("address1_latitude").addEventListener('change', (event) => {
		var Lat = $("#address1_latitude").val();
	});
	document.getElementById("address1_longitude").addEventListener('change', (event) => {
		var Longtitude = $("#address1_longitude").val();
	});

	// address
	tdg.cid.address_init(true);
	var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('newsite') && urlParams.get('newsite') == 'true' && !urlParams.has('stepid')) {
		$('#redirectInstruction').show();
		$('#instructions').hide();
		$('#EntityFormView').hide();
		$("#NextButton").click();
		//return;
	}
	else $('#redirectInstruction').hide();
	//Phone number formatting
	tdg.cid.phone_init("telephone1", selected_language);
	tdg.cid.phone_init("fax", selected_language);

	var cid_legalname = $("#name").val();
	if (cid_legalname == "") {
		var cid_legalname = "{{user.cid_legalname}}";
		cid_legalname = (cid_legalname == "" ? "N/A" : cid_legalname);
	}

	cid_legalname = tdg.c.replace_special_char(cid_legalname);
	$("#ovs_legalname").val(cid_legalname);
	$("#name").val(cid_legalname);
	// hide controls
	tdg.c.control_hide("name");
	
	tdg.c.control_hide("cid_siteclaim");
	$("#cid_sitename").attr("autocomplete", "new-password");
	$("#telephone1").attr("autocomplete", "new-password");
	$("#fax").attr("autocomplete", "new-password");

	tdg.cid.convert_province_to_code(selected_language);

	$('#loader').hide();

	var ovs_address_type = $("#ovs_address_type").val();
	switch (ovs_address_type) {
		case "1":
			// legal land description
			tdg.c.section_show("section_legal_land_description");
			if (addressReadOnly) {
				//cid_input_read_only("section_legal_land_description");
			}
			break;
		case "2":
			// lat/long
			if (addressReadOnly) {
				//cid_input_read_only("section_latitude_longitude");
			}
			break;
		default:
			tdg.c.section_show("section_address");
			$("#address1_line2").prop('readonly', true);
			$("#address1_line3").prop('readonly', true);
			$("#address1_city").prop('readonly', true);
			//$("#ovs_address1_province").prop('disabled', true);
			$("#address1_stateorprovince").prop('readonly', true);
			$("#address1_postalcode").prop('readonly', true);
			if (addressReadOnly) {
				//$("#ovs_address1_province").prop("disabled", true);
				//cid_input_read_only("section_address");
			}
	}

	$("#ovs_address_type").change(function () {
		tdg.cid.address_type_change(true);
	});
	tdg.cid.address_type_change(false);
	// cid_same_as_company
	$("#cid_same_as_company").change(function () {
		cid_same_as_company_change();
	});
	cid_same_as_company_change();
});

function cid_same_as_company_change() {
	debugger;
	if (_busy) return;
	_busy = true;
	var parent_id = '{{ user.parentcustomerid.id }}';
	tdg.cid.address_same_as_company(parent_id);
	_busy = false;
}

if (window.jQuery) {
	(function ($) {
		webFormClientValidate = function () {
			$('#ErrorMessageDiv').css('display', 'none');
			var addressType = $("#ovs_address_type").val();
			var account_id = '{{user.parentcustomerid.Id}}';
		
		

			console.log ("Line 1" + sessionStorage.getItem("Line1"))
			console.log ( "address afeter change " + $("#address1_line1").val());
			var address1AfterLoad=sessionStorage.getItem("Line1");
			var address1Onload = sessionStorage.getItem("Address1Onload");

			
		//if ($("#ovs_duplicatesiteflag :selected").val() != 918640000 && $("#ovs_duplicatesiteflag :selected").val() != 918640001 )
	
		if (sessionStorage.getItem("AddressDataChanged") == "true" || (address1AfterLoad != address1Onload && address1AfterLoad != null ) )
		{
			switch (addressType) {
			case "1":
				// legal land description
				debugger;

				var lldProvince = $("#ovs_lld_province").val();
				var quarter = $("#ovs_lld_quarter").val();
				var section = $("#ovs_lld_section").val();
				var township = $("#ovs_lld_township").val();
				var range = $("#ovs_lld_range").val();
				var meridian = $("#ovs_lld_meridian").val();

				if ((lldProvince == '') || (quarter == '') || (section == '') || (township == '') || (range == '') || (meridian == '')) {
					return true;
				}
				var parameters = {};
				parameters.Parent_Id = account_id; // Edm.String
				if (lldProvince != (null || "")) { parameters.Lld_Province = parseInt(lldProvince); }   // Edm.Int32                    
				if (quarter != (null || "")) { parameters.Lld_Quarter = parseInt(quarter); }   // Edm.Int32    
				if (section != (null || "")) { parameters.Lld_Section = parseInt(section); }   // Edm.Int32                    
				if (township != (null || "")) { parameters.Lld_Township = parseInt(township); }   // Edm.Int32                    
				if (range != (null || "")) { parameters.Lld_Range = parseInt(range); }   // Edm.Int32                    
				if (meridian != (null || "")) { parameters.Lld_Meridian = parseInt(meridian); }   // Edm.Int32 
				parameters.AddressType = 1; // Edm.Int32

				var FlowName = "CID_Flow_Site_Duplicate_Validation_Test";
				var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");

				if (EnvironmentSettingResult.length > 0) {
					var FlowURL = EnvironmentSettingResult[0]["qm_value"];
					return CheckDuplicate(FlowURL, parameters);
				} //end check if flow url found
				else {
					return true;
				}

				break;

			case "2":
				// lat/long
				debugger;
				if (($("#address1_latitude").val() == '') || ($("#address1_longitude").val() == '')) {
					return true;
				}
				var latitude = $("#address1_latitude").val();
				var longitude = $("#address1_longitude").val();
				$('#ErrorMessageDiv').css('display', 'none');
				var checkresult = CheckLatLongDecimal();
				if (checkresult == false) {
					return false;
				}
				else {

					var parameters = {};
					parameters.Parent_Id = account_id; // Edm.String
					parameters.AddressType = 2; // Edm.Int32
					if (latitude != (null || "")) { parameters.Address1_Latitude = parseFloat(latitude).toFixed(4); }   // Edm.Float                    
					if (longitude != (null || "")) { parameters.Address1_Longitude = parseFloat(longitude).toFixed(4); }   // Edm.Float    

					var FlowName = "CID_Flow_Site_Duplicate_Validation_Test";
					var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");

					if (EnvironmentSettingResult.length > 0) {
						var FlowURL = EnvironmentSettingResult[0]["qm_value"];
						return CheckDuplicate(FlowURL, parameters);
					}
					else { return true; }
				}

				break;

			default:
				//postal
				debugger;



				var address1_line1 = $("#address1_line1").val();
				var address1_line2 = $("#address1_line2").val();
				var address1_line3 = $("#address1_line3").val();
				var address1_postalcode = $("#address1_postalcode").val();

				if ((address1_line1 == '') || ($("#address1_city").val() == '') || (address1_postalcode == '') || ($("#ovs_address1_province").val() == '')) {
					return true;
				}

				var parameters = {};
				parameters.Parent_Id = account_id; // Edm.String
				parameters.AddressType = 0; // Edm.Int32
				parameters.Address1_Postal = address1_postalcode; // Edm.String
				parameters.Address1_Line1 = address1_line1; // Edm.String
				parameters.Address1_Line2 = address1_line2; // Edm.String
				parameters.Address1_Line3 = address1_line3; // Edm.String

				var FlowName = "CID_Flow_Site_Duplicate_Validation_Test";
				var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");

				if (EnvironmentSettingResult.length > 0) {
					var FlowURL = EnvironmentSettingResult[0]["qm_value"];
					
					return CheckDuplicate(FlowURL, parameters);
					
				}
				else
					return true;

				break;
					}//end witch
		}

			if (addressType == 2) {
				var checkresult = CheckLatLongDecimal();
				return checkresult;

			}
			else { return true; }
		}
	}(window.jQuery));
}

function cid_input_read_only(sectionName) {
	//Disable Address Fileds
	$("#cid_same_as_company").attr("disabled", true);

}

function disable_All_Address_fields()
{
	        $("#EntityFormView :input").prop("disabled", true);
			
			var f = document.getElementById("WebResource_address_complete");
			var c = f.contentWindow;
			c.document.getElementById("address1_line1").disabled = true ;
			
			//form-control picklist 
			 var provincevalue =  $("#ovs_address1_province :selected").text();
    		$("#ovs_address1_province").after('<div class="readonly form-control picklist" tabindex="0">'+provincevalue +' </div>')
            //hid disbled drop down
    		$("#ovs_address1_province").css("display" , "none");

			$("#ovs_address_type").attr("disabled", false);

			debugger;
			//form-control picklist 
			var addressTypeValue =  $("#ovs_address_type :selected").text();
			$("#ovs_address_type").after('<div class="readonly form-control picklist" tabindex="0">'+addressTypeValue +' </div>')
			//hid disbled drop down
			$("#ovs_address_type").css("display" , "none");
			$(".section[data-name='" + sectionName + "']").find(':input').prop("readonly", "readonly");
		}

function page_setup() {
	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	const files = ["/tdgcore_common.js", "/tdgcore_message.js"];
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

function Show_PluginError_TextLanguag(Field) {
	var language = sessionStorage.getItem("selected_language");

	try {
		var text = Field[0].innerText;
		var index1 = text.indexOf("::");
		if (index1 < 0) {
			text = text + "::" + text;
			index1 = text.indexOf("::");
		}
		//if (language == "en-US") {
		if (language == "en") {
			value = text.substr(0, index1);
		}
		else {
			value = text.substr(index1 + 2);
		}
		Field[0].innerText = value;
		var msg = tdg.error_message.message("m000166");
		Field[0].innerHTML = '<h3 id="plugin_error" class="validation-header" role="none"><span role="presentation" class="fa fa-info-circle"></span>' + msg + '</h2><p>' + value + '</p>';
	} catch (e) { }
}

function CheckLatLongDecimal() {
 	return true;
}

var CheckDuplicate = function (_flowURl, _parameters) {
    var req = new XMLHttpRequest();
    req.open("POST", _flowURl, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                debugger;

                var result = JSON.parse(this.response);
                var duplicatefound = result["DuplicateFound"]; // Edm.Boolean
                var currentSiteOwner = result["CurrentSiteOwnerCompany"]; //string
                var currentSiteId = result["CurrentSiteId"]; //string currentSiteId
                var currentSiteOwnerId = result["CurrentSiteOwnerCompanyId"]; //string CurrentSiteOwnerCompanyId
                var InactiveSiteFound = result["InactiveSiteFound"];
                if (InactiveSiteFound == true) {
                    var ReActivatedSiteGUID = result["InactiveSiteGUID"];
                    var currentURL = window.location.href;
                    console.log("split :");
                    console.log(currentURL.replace("https://", "").split("/")[0]);
                    window.location.href = "~/SiteRegistrationWizard?id=" + ReActivatedSiteGUID + "&newsite=true"
                    //currentURL.replace("https://", "").split("/")[0] +"/SiteRegistrationWizard?" +ReActivatedSiteGUID;
                    return false;

                }

                else if (duplicatefound) {
                    var message = tdg.error_message.message("m000203");
                    //"There is already an active Organization at this address. Is your Organization sharing this Site with another Organization or is this the result of a sale, merger or acquisition? If you entered the wrong address, select cancel and re-enter the correct address.";
                    //tdg.error_message.message("m000131");
                    //tdg.c.dialog_YN
                    tdg.c.DialogWith_DropDown(message, (ans) => {
                        var accName = "";
                        var accId = "";
                        var contact_id = '{{user.id}}';
                        if (ans) {
                           
                           // entityFormClientValidate = true;
						   webFormClientValidate = true;
                            //originalValidationFunction = true;
                            $("#NextButton").click();
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                }
                else {
					sessionStorage.setItem("AddressDataChanged",false);
                    entityFormClientValidate = true;
                    originalValidationFunction = true;
					webFormClientValidate = true;
                    $("#NextButton").click();
                    return true;
                }
            }
            else
                debugger;
            return false;

        } //end ready status
    }; //end on ready function
    req.send(JSON.stringify(_parameters));
}