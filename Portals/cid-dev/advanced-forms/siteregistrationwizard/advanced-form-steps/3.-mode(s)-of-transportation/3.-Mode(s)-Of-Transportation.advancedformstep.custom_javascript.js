$(document).ready(function () {
    debugger;

    $('#loader').hide();

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

     var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('id')) {
		var siteid = urlParams.get('id');
        var operationid = urlParams.get('operationid');
        if (urlParams.has('operationid')) {

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

				//var message = tdg.error_message.message("BTN_PREVIOUS");
        }

        else
       { 
           var operationDataset = tdg.webapi.SelectedColumnlist("ovs_mocregistrations", "ovs_mocregistrationid",
			"statuscode eq 1 and ovs_operationtype eq 918640038 and _ovs_siteid_value eq "  + siteid);
            var operationid = operationDataset[0].ovs_mocregistrationid ;
            insertParam("operationid",operationid ); 

       }  //$('#liquid_form').attr('action', $('#liquid_form').attr('action')+ '&operationid=' + operationid);
    }

    tdg.c.page_instructions("page_orw_mot");

	//var urlParams = new URLSearchParams(window.location.search);
	debugger;


		// remove role attribute from lables due accessiblity issue in PBI #262949
	     setTimeout( function(){        
                $("#cid_modeoftransportationroad_label").attr("role", "");            
                $("#cid_modeoftransportationrail_label").attr("role", "");
                $("#cid_modeoftransportationair_label").attr("role", "");
                $("#cid_modeoftransportationmarine_label").attr("role", "");
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

					var checkedCheckBoxes = $('[id*="cid_"]:checkbox:checked');

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
