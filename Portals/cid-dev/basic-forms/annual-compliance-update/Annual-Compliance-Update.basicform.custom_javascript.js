$(document).ready(function () {
	

	$(".entity-grid").on("loaded", function () {
		//$("#company_annual_compliance_update table tbody").find("tr").each(function () {
		//	if($(this).attr('data-name') == "Completed")
		//		$(this).css("background-color", "#dff0d8");
		//});

		$("#company_annual_compliance_update_1 table tbody").find("tr").each(function () {
			if($(this).attr('data-name') == "Completed")
				$(this).css("background-color", "#dff0d8");
		});	

		//$("#site_annual_compliance_update table tbody").find("tr").each(function () {
		//	if($(this).attr('data-name') == "Completed")
		//		$(this).css("background-color", "#dff0d8");
		//});
		$("#site_annual_compliance_update_1 table tbody").find("tr").each(function () {
			if($(this).attr('data-name') == "Completed")
				$(this).css("background-color", "#dff0d8");
		});
		$("#site_annual_compliance_update_2 table tbody").find("tr").each(function () {
			if($(this).attr('data-name') == "Completed")
				$(this).css("background-color", "#dff0d8");
		});
		$("#site_annual_compliance_update_3 table tbody").find("tr").each(function () {
			if($(this).attr('data-name') == "Completed")
				$(this).css("background-color", "#dff0d8");
		});
		$("#site_annual_compliance_update_4 table tbody").find("tr").each(function () {
			if($(this).attr('data-name') == "Completed")
				$(this).css("background-color", "#dff0d8");
		});
		$("#site_annual_compliance_update_5 table tbody").find("tr").each(function () {
			if($(this).attr('data-name') == "Completed")
				$(this).css("background-color", "#dff0d8");
		});
	});

    $("#cid_iscompanyattested").prop( "checked", false );

	entityFormClientValidate = function () {
		var errorMessage = "";
		var validation = true;
		var firstErrorFound = false;
		var secondErrorFound = false;

        if($("#cid_iscompanyattested").prop('checked')){
			//$("#company_annual_compliance_update table tbody").find("tr").each(function () {
			//	if(!firstErrorFound && $(this).attr('data-name') != "Completed"){
			//		validation = false;
			//		errorMessage = errorMessage + "You cannot proceed before completing the checklist items in the Company Management section<br>"; 
			//		firstErrorFound = true;
			//	}
			//});

			$("#company_annual_compliance_update1 table tbody").find("tr").each(function () {
				if(!firstErrorFound && $(this).attr('data-name') != "Completed"){
					validation = false;
					errorMessage = errorMessage + "You cannot proceed before completing the checklist items in the Company Management section<br>"; 
					firstErrorFound = true;
				}
			});		

			//$("#site_annual_compliance_update table tbody").find("tr").each(function () {
			//	if(!secondErrorFound && $(this).attr('data-name') != "Completed"){
			//		validation = false;
			//		errorMessage = errorMessage + "You cannot proceed before completing the checklist items in the Sites Management section<br>";
			//		secondErrorFound = true;
			//	}
			//});

			$("#site_annual_compliance_update1 table tbody").find("tr").each(function () {
				if(!secondErrorFound && $(this).attr('data-name') != "Completed"){
					validation = false;
					errorMessage = errorMessage + "You cannot proceed before completing the checklist items in the Sites Management section<br>";
					secondErrorFound = true;
				}
			});	
			$("#site_annual_compliance_update2 table tbody").find("tr").each(function () {
				if(!secondErrorFound && $(this).attr('data-name') != "Completed"){
					validation = false;
					errorMessage = errorMessage + "You cannot proceed before completing the checklist items in the Sites Management section<br>";
					secondErrorFound = true;
				}
			});	
			$("#site_annual_compliance_update3 table tbody").find("tr").each(function () {
				if(!secondErrorFound && $(this).attr('data-name') != "Completed"){
					validation = false;
					errorMessage = errorMessage + "You cannot proceed before completing the checklist items in the Sites Management section<br>";
					secondErrorFound = true;
				}
			});	
			$("#site_annual_compliance_update4 table tbody").find("tr").each(function () {
				if(!secondErrorFound && $(this).attr('data-name') != "Completed"){
					validation = false;
					errorMessage = errorMessage + "You cannot proceed before completing the checklist items in the Sites Management section<br>";
					secondErrorFound = true;
				}
			});	
			$("#site_annual_compliance_update5 table tbody").find("tr").each(function () {
				if(!secondErrorFound && $(this).attr('data-name') != "Completed"){
					validation = false;
					errorMessage = errorMessage + "You cannot proceed before completing the checklist items in the Sites Management section<br>";
					secondErrorFound = true;
				}
			});			
        }
        else{
			validation = false;
 			errorMessage = errorMessage + "You cannot proceed before attesting your company annual compliance update changes, please check the 'Attestation' box<br>";  
        }

		if(errorMessage != ""){
            $('.validation-summary div').remove();
            var validationSection = $('.validation-summary'); 
			validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>")); 
			validationSection.show();
            $('.validation-summary div').focus(); 
		}
		return validation;
	}
});