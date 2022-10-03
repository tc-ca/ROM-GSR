$(document).ready(function () {
	$("legend").each(function() {
		$(this).removeClass();
		$(this).css("font-size", "18px");
		$(this).css("font-weight", "bold");
    });
	// Remove task ID header
	$("#company_annual_compliance_update table thead").find("tr").each(function () {
		$(this).find('th:first-child').text(""); 
	});	

	$("#sites_annual_compliance_update table thead").find("tr").each(function () {
		$(this).find('th:first-child').text("");
	});	

	$("#sites_annual_compliance_update table tbody").find("tr").each(function () {
		var trElement = $(this);

		trElement.find('td:first').find('a').removeAttr("href");
	});

	$(".entity-grid").on("loaded", function () {
		$(this).find("th").each(function () {
			$(this).find('a').removeAttr("href").css({'cursor': 'pointer', 'pointer-events' : 'none'});
		});

		$(this).find("tbody").find("tr").each(function () {
			var trElement = $(this);

			trElement.find('td:first').find('a').removeAttr("href").css({'cursor': 'pointer', 'pointer-events' : 'none'});
		});

		$("#company_annual_compliance_update table tbody").find("tr").each(function () {
			var trElement = $(this);
			trElement.find("td").each(function () {
				if($(this).attr('data-attribute') == 'statuscode' && $(this).attr('aria-label') == 'Completed'){
					trElement.css("background-color", "#dff0d8");
				}
			});
		});	

		$("#sites_annual_compliance_update table tbody").find("tr").each(function () {
			var trElement = $(this);
			trElement.find("td").each(function () {
				if($(this).attr('data-attribute') == 'statuscode' && $(this).attr('aria-label') == 'Completed'){
					trElement.css("background-color", "#dff0d8");
				}
			});
		});	
	});

	var annualComplianceCompletionDate = $('#cid_annualcompliancecompletiondate').val();

    if (annualComplianceCompletionDate != ""){       
        $("#UpdateButton").prop("disabled", true); 
        $('.crmEntityFormView').find('input, textarea, select').attr('disabled','disabled'); 

		$(".entity-grid").on("loaded", function () {
			$(this).find("thead").find("tr").each(function () {
                $(this).find('th:last').remove();
            });
		    $(this).find("tbody").find("tr").each(function () {
                $(this).find('td:last').remove();
            });
        });
    }
	else{
		//uncheck attestation check box
		$("#cid_iscompanyattested").prop( "checked", false );
	}

	entityFormClientValidate = function () {
		var errorMessage = "";
		var validation = true;
		var firstErrorFound = false;
		var secondErrorFound = false;

        if($("#cid_iscompanyattested").prop('checked')){
			$("#company_annual_compliance_update table tbody").find("tr").each(function () {
				if(!firstErrorFound){
					$(this).find("td").each(function () {
						if($(this).attr('data-attribute') == 'statuscode' && $(this).attr('aria-label') != 'Completed'){
							validation = false;
							errorMessage = errorMessage + "You cannot proceed before completing the checklist items in the Company Management section<br>"; 
							firstErrorFound = true;
						}
					});
				}
			});

			$("#sites_annual_compliance_update table tbody").find("tr").each(function () {
				if(!secondErrorFound){
					$(this).find("td").each(function () {
						if($(this).attr('data-attribute') == 'statuscode' && $(this).attr('aria-label') != 'Completed'){
							validation = false;
							errorMessage = errorMessage + "You cannot proceed before completing the checklist items in the Sites Management section<br>";
							secondErrorFound = true;
						}
					});
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