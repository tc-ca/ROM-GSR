$(document).ready(function () {
    debugger;

    $('#loader').hide();

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

     var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('id')) {
		var siteid = urlParams.get('id');          
                
    if (urlParams.has('operationid')) {
        var operationid = urlParams.get('operationid');
        var operationidparamater = '&operationid=' +  operationid;
          var formaction = $('#liquid_form').attr('action').replace(operationidparamater, '') ;
        $('#liquid_form').attr('action', formaction );
    }

    else {
       
        var operationDataset = tdg.webapi.SelectedColumnlist("ovs_mocregistrations", "ovs_mocregistrationid",
            "statuscode eq 1 and ovs_operationtype eq 918640038 and _ovs_siteid_value eq " + siteid);
        var operationid = operationDataset[0].ovs_mocregistrationid;
        insertParam("operationid", operationid);
      

    }

    }

    
	tdg.c.page_instructions("page_orw_class");


	//hide grid empty message
	$(".entity-grid").on("loaded", function () {
		const EmptyMessageDiv = document.querySelector(".view-empty");
		EmptyMessageDiv.style.display = "none";
	});
	//get totla number of rows in the class grid
	var entityGrid = $(".entity-grid.subgrid").eq(0);
	entityGrid.on("loaded", function () {
		var rowTotal = 0;
		entityGrid.find("table tbody > tr").each(function(index, tr) {
			rowTotal++;  
		});
	
	    //check if at least one class is added
		if (rowTotal >0)
		{
			sessionStorage.setItem('IsClassAdded', 'true');
		}
		else
		{
			sessionStorage.setItem('IsClassAdded', 'false');

		}
	});

     //show and hide menue items based on inyear paramater in the url
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
		        //check if no class is added to show error message and prevent proceeding to next step
				if (sessionStorage.getItem('IsClassAdded') == 'false') {
					errorMessage = tdg.error_message.message("m000016");
					validation = false;
				
				if (!validation) {
					$('#ValidationSummaryEntityFormView div').remove();
					var validationSection = $('#ValidationSummaryEntityFormView');
					validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
					validationSection.show();
					$('#alertMessages').focus();

					return validation;
				}
				
				
			}
			return validation; 
		}
	}(window.jQuery));
}
