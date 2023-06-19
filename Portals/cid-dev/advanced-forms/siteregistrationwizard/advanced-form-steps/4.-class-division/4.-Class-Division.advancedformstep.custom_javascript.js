$(document).ready(function () {
    debugger;

    $('#loader').hide();

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

     var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('id')) {
		var siteid = urlParams.get('id');
        console.log ("site id :" + siteid);
       
          
                
    if (urlParams.has('operationid')) {
        var operationid = urlParams.get('operationid');
        var operationidparamater = '&operationid=' +  operationid;
          var formaction = $('#liquid_form').attr('action').replace(operationidparamater, '') ;
        $('#liquid_form').attr('action', formaction );
    }

    else {
        console.log("getting id ...");
        var operationDataset = tdg.webapi.SelectedColumnlist("ovs_mocregistrations", "ovs_mocregistrationid",
            "statuscode eq 1 and ovs_operationtype eq 918640038 and _ovs_siteid_value eq " + siteid);
        var operationid = operationDataset[0].ovs_mocregistrationid;
        insertParam("operationid", operationid);
      

    }

    }

    
	tdg.c.page_instructions("page_orw_class");

	$('#NextButton').on('click', function () {
		sessionStorage.setItem('to_attst_site', 'true');
	});

	//hide grid empty message
	$(".entity-grid").on("loaded", function () {
		const EmptyMessageDiv = document.querySelector(".view-empty");
		EmptyMessageDiv.style.display = "none";
	});
	var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('in_year')) {
		tdg.c.weblink_hide("/RegistrationWizard/");
		tdg.c.weblink_show("/company_dashboard/");
	}
	else
	{
			tdg.c.weblink_show("/RegistrationWizard/");
			tdg.c.weblink_hide("/company_dashboard/");
	}
});

function insertParam(key, value) {
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);

    // kvp looks like ['key1=value1', 'key2=value2', ...]
    var kvp = document.location.search.substr(1).split('&');
    let i = 0;

    for (; i < kvp.length; i++) {
        if (kvp[i].startsWith(key + '=')) {
            let pair = kvp[i].split('=');
            pair[1] = value;
            kvp[i] = pair.join('=');
            break;
        }
    }

    if (i >= kvp.length) {
        kvp[kvp.length] = [key, value].join('=');
    }


    let params = kvp.join('&');

    // reload page with new params
    document.location.search = params;
}

if (window.jQuery) {
	(function ($) {
		webFormClientValidate = function () {
			var validation = true;
			var errorMessage = "";
			var urlParams = new URLSearchParams(window.location.search);

			if (urlParams.has('id')) {
				var operationId = urlParams.get('id');
				if (!SiteHasOperationClasses(operationId, null)) {
					errorMessage = tdg.error_message.message("m000016");
					validation = false;
				}

				if (!validation) {
					$('#ValidationSummaryEntityFormView div').remove();
					var validationSection = $('#ValidationSummaryEntityFormView');
					validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
					validationSection.show();
					$('#alertMessages').focus();

					return validation;
				}
				else {
					OperationDetailsProvided(operationId, true);
					if (urlParams.has('siteid')) {
						var siteId = urlParams.get('siteid');
						if (urlParams.has('in_year')) {
							window.location.href = "~/my-sites/in-year-site/?id=" + siteId;
						}
						else {
							window.location.href = "~/SiteRegistrationWizard/?id=" + siteId;
						}
					}
				}
				//return validation; 
			}
		}
	}(window.jQuery));
}