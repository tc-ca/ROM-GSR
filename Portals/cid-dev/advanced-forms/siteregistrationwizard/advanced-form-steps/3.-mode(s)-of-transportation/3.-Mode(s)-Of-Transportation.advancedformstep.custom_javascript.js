$(document).ready(function () {
    debugger;

    $('#loader').hide();
   
    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);
		

     var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('id')) {
		var siteid = urlParams.get('id');
       // var operationid = urlParams.get('operationid');
		
	
	  //prevent update mode of transportation
		if (
		$("#ovs_road").prop("checked") ==  true ||
		$("#ovs_rail").prop("checked") ==  true ||
		$("#ovs_air").prop("checked") == true ||
		$("#ovs_marine").prop("checked") == true)
		{
			$("#ovs_road").attr("disabled" , "disabled");
			$("#ovs_rail").attr("disabled" , "disabled");
			$("#ovs_air").attr("disabled" , "disabled");
			$("#ovs_marine").attr("disabled" , "disabled");

		} else if(
		$("#ovs_road").prop("checked") != true &&
		$("#ovs_rail").prop("checked") !=  true &&
		$("#ovs_air").prop("checked") != true &&
		$("#ovs_marine").prop("checked") != true)
		{
			$("#NextButton").prop("disabled" , true);
		}
		else
		{
			$("#NextButton").prop("disabled" , false);
		}

            $('#ovs_road').change(function() {
				Check_if_All_required_field_is_entered();
			});

			 $('#ovs_rail').change(function() {
				Check_if_All_required_field_is_entered();
			});

			 $('#ovs_air').change(function() {
				Check_if_All_required_field_is_entered();
			});

			 $('#ovs_marine').change(function() {
				Check_if_All_required_field_is_entered();
			});


      //  if (urlParams.has('operationid')) {
		//	update_Operation_Type_Based_on(operationid);

				if (urlParams.has('in_year') || sessionStorage.getItem('frominyearsites')) {
					sitePageURL = "~/my-sites/in-year-site/?id=" + siteid;
					tdg.c.weblink_hide("/RegistrationWizard/");
					tdg.c.weblink_show("/company_dashboard/");
					
				}
				else {
					sitePageURL = "~/SiteRegistrationWizard/?id=" + siteid;
					tdg.c.weblink_show("/RegistrationWizard/");
					tdg.c.weblink_hide("/company_dashboard/");
				}

				sessionStorage.setItem('to_actvt_stp', 'true');
				//add * after the header
				$("#EntityFormView > h2").append('<span style="color:red">*</span>');

				//var message = tdg.error_message.message("BTN_PREVIOUS");
       // }

       var operationid ;
       // else
       { 
           var operationDataset = tdg.webapi.SelectedColumnlist("ovs_mocregistrations", "ovs_mocregistrationid",
			"statuscode eq 1 and ( ovs_operationtype eq 918640038 or ovs_operationtype eq 918640042 ) and _ovs_siteid_value eq "  + siteid);
            var operationid = operationDataset[0].ovs_mocregistrationid ;
		    if (operationDataset.length == 2)
            {
                if (operationDataset[1].ovs_operationtype == 918640038 )
                {
                    operationid = operationDataset[1].ovs_mocregistrationid ;
                }

            }
           // insertParam("operationid",operationid ); 
			//update_Operation_Type_Based_on(operationid);

       }  //$('#liquid_form').attr('action', $('#liquid_form').attr('action')+ '&operationid=' + operationid);
    }

    tdg.c.page_instructions("page_orw_mot");

	//var urlParams = new URLSearchParams(window.location.search);
	debugger;


		// remove role attribute from lables due accessiblity issue in PBI #262949
	     setTimeout( function(){        
                $("#ovs_road_label").attr("role", "");            
                $("#ovs_rail_label").attr("role", "");
                $("#ovs_air_label").attr("role", "");
                $("#ovs_marine_label").attr("role", "");
    			}, 1000); 
				
		}		
	);

		function insertParam(key, value) {
			key = encodeURIComponent(key);
			value = encodeURIComponent(value);

			// kvp looks like ['key1=value1', 'key2=value2', ...]
			var kvp = document.location.search.substr(1).split('&');
			let i=0;

			for(; i<kvp.length; i++){
				if (kvp[i].startsWith(key + '=')) {
					let pair = kvp[i].split('=');
					pair[1] = value;
					kvp[i] = pair.join('=');
					break;
				}
			}

			if(i >= kvp.length){
				kvp[kvp.length] = [key,value].join('=');
			}

			// can return this or...
			let params = kvp.join('&');

			// reload page with new params
			document.location.search = params;
		}

		if (window.jQuery) {
			(function ($) {
				webFormClientValidate = function () {
					var validation = true;
					var errorMessage = "";

					var checkedCheckBoxes = $('[id*="ovs_"]:checkbox:checked');

					if (checkedCheckBoxes && checkedCheckBoxes.length <= 0) {
						errorMessage = tdg.error_message.message("m000015"); // You cannot proceed before adding at least one mode of transportation
						validation = false;
					}

					if (!validation) {
						$('#ValidationSummaryEntityFormView div').remove();
						var validationSection = $('#ValidationSummaryEntityFormView');
						validationSection.append($("<div class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
						validationSection.show();
					}
					return validation;
				}
			}(window.jQuery));
		}
function update_Operation_Type_Based_on(operationid)
{
	console.log ("inside operation function");
	var ovs_road = $("#ovs_road").prop("checked");
	var ovs_rail = $("#ovs_rail").prop("checked");
	var ovs_air = $("#ovs_air").prop("checked");
	var ovs_marine = $("#ovs_marine").prop("checked");

	////address1_stateorprovince
	 var urlParams = new URLSearchParams(window.location.search);
		if (urlParams.has('id'))
		 {
			 var siteid = urlParams.get('id');
			  var SiteDataSet = tdg.webapi.SelectedColumnlist("accounts", "address1_stateorprovince",
			"statuscode eq 1 and accountid eq "  + siteid);
			 var province = SiteDataSet[0].address1_stateorprovince ;
			 console.log ("province : " + province);

			 var OpeartionDataSet = tdg.webapi.SelectedColumnlist("ovs_mocregistrations", "ovs_operationtype",
			"statuscode eq 1 and ovs_mocregistrationid eq "  + operationid);
			 var operationType = OpeartionDataSet[0].ovs_operationtype ;
			 console.log ("type  : " + operationType);
			 if (province == "AB")
			 {
				 if (ovs_road == false)
				 {
					 if (operationType  != 918640042 )
					 if (ovs_rail == true || ovs_air == true
					 || ovs_marine == true )
					 {
						 // update operation type
						  var data = {
							"ovs_operationtype":918640042
						};
						console.log("operation id " + operationid);
						tdg.webapi.update("ovs_mocregistrations", operationid, data);

					 }
				 }
				 else if (ovs_road == true)
				 {
					  // update operation type
						  var data = {
							"ovs_operationtype":918640038
						};
						tdg.webapi.update("ovs_mocregistrations", operationid, data);

				 }//end check if road was selected
			 }//end check province
		}


}


if (window.jQuery) {
	(function ($) {
		webFormClientValidate = function () {
		$("#ovs_road").removeAttr("disabled" );
			$("#ovs_rail").removeAttr("disabled");
			$("#ovs_air").removeAttr("disabled");
			$("#ovs_marine").removeAttr("disabled");
	


		return true;
			
		}
	}(window.jQuery));
}

function Check_if_All_required_field_is_entered ()
{

	if(
		$("#ovs_road").prop("checked") != true &&
		$("#ovs_rail").prop("checked") !=  true &&
		$("#ovs_air").prop("checked") != true &&
		$("#ovs_marine").prop("checked") != true)
		{
			$("#NextButton").prop("disabled" , true);



		}
		else
		{
			$("#NextButton").prop("disabled" , false);
		}

}