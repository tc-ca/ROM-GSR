//
// OperationRegistrationWizard-MOT.js
//
$(document).ready(function () {
	debugger;

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	tdg.c.page_instructions("page_orw_mot");

	var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('siteid')) {
		var siteId = urlParams.get('siteid');
		var sitePageURL = "";

		if (urlParams.has('in_year') || sessionStorage.getItem('frominyearsites')) {
			sitePageURL = "~/my-sites/in-year-site/?id=" + siteId  + '&in_year=true&stepid=ed4377eb-f997-ec11-b3fe-0022483c0c24';
			tdg.c.weblink_hide("/RegistrationWizard/");
		
			tdg.c.weblink_show("/company_dashboard/");

		}
		else {
			sitePageURL = "~/SiteRegistrationWizard/?id=" + siteId  + '&in_year=true&stepid=ed4377eb-f997-ec11-b3fe-0022483c0c24';
				tdg.c.weblink_show("/RegistrationWizard/");
			    tdg.c.weblink_hide("/company_dashboard/");
		}

		sessionStorage.setItem('to_actvt_stp', 'true');

		$("#NextButton").parent().before("<div id='previousButton' role='group' class='btn-group entity-action-button'><a href='" + sitePageURL + "'><input type='button' value='Previous' id='PreviousButton' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'></a></div>");
	//	$("#NextButton").parent().before("<div id='previousButton' role='group' class='btn-group entity-action-button'><input type='button' value='Previous' id='PreviousButton' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'></div>");
		$('#PreviousButton').click(function (e) {
			 e.preventDefault();
			debugger;        
			var urlParams = new URLSearchParams(window.location.search);
			if (urlParams.has('id')) {
					var siteid = urlParams.get('id');
					if (siteid != "") 
					{	
						if(urlParams.has('in_year') || sessionStorage.getItem('frominyearsites'))
                        {
                                                       
														var url_replace = '~/SiteRegistrationWizard/?id=' + siteid + '&in_year=true&stepid=ed4377eb-f997-ec11-b3fe-0022483c0c24';
														debugger;                  
														window.location.href = '~/SiteRegistrationWizard/?id=' + siteid + '&in_year=true&stepid=ed4377eb-f997-ec11-b3fe-0022483c0c24';
                                                        //window.location.href = '~/SiteRegistrationWizard/?id=' + siteid + '&in_year=true';
														

														
												//	else window.location.href = '~/SiteRegistrationWizard/?id=' + siteid + '&newsite=true&stepid=ed4377eb-f997-ec11-b3fe-0022483c0c24';
                        }
                    }
				}
		});
		//https://rd-tdgcore-dev.powerappsportals.com/en/SiteRegistrationWizard/?id=fc607dba-37dd-ed11-a81f-000d3af4e91d&in_year=true&stepid=fefc6fdb-bd95-ec11-b3fe-000d3ae9ac74
		
		//https://rd-tdgcore-dev.powerappsportals.com/en/SiteRegistrationWizard/?id=63ca5d93-9fe3-ed11-a81c-000d3af47669&newsite=true&stepid=ed4377eb-f997-ec11-b3fe-0022483c0c24
	}
	
});

if (window.jQuery) {
	(function ($) {
		webFormClientValidate = function () {
			var validation = true;
			var errorMessage = "";

			//var rows = $("#mode_of_transportations .view-grid table").find("tbody > tr");
			//if (rows.length <= 0) {
			//    errorMessage = "You cannot proceed before adding at least one mode of transportation.";
			//    validation = false;
			//}

			//var urlParams = new URLSearchParams(window.location.search);

			//if (urlParams.has('id')) {
			//    var operationId = urlParams.get('id');

			//	if(!checkMOTExist(operationId, null)){
			//		errorMessage = "You cannot proceed before adding at least one mode of transportation.";
			//		validation = false;
			//	}
			//}

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
