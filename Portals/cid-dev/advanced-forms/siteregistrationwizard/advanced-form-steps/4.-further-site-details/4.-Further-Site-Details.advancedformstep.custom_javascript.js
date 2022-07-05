$(document).ready(function() {
	//$('#instructions').hide();
    $('#EntityFormView').hide();
	//$('#redirectInstruction').show();
	$("#NextButton").prop('disabled', true);

	var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('id')) {
		var siteid = urlParams.get('id');
		$(".entity-grid").on("loaded", function () {
			var firstRow = $("#Operations .view-grid table tbody").find("tr:first");
			if(firstRow){
				var operationId = firstRow.attr('data-id');
				if(operationId){
					firstRow.find('td').each(function(){
						var tdElement = $(this);
								
						if(tdElement.attr('data-attribute') == 'cid_operationdetailsprovided')
						{
							if ($("#HOTI_Details").length <= 0)
								$("#PreviousButton").parent().after("<div id='HOTI_Details' role='group' class='btn-group entity-action-button'><a href='~/en-US/OperationRegistrationWizard/?id=" + operationId + "&siteid=" + siteid + "'><input type='button' name='further_site_details' value='Further Site Details' class='btn btn-primary button next submit-btn' nonactionlinkbutton='true'></a></div>");
							
							if((!IsExtendedSite(operationId, null) && SiteHasOperationClasses(operationId, null)) ||
								(IsExtendedSite(operationId, null) && SiteHasOperationUNNumbers(operationId, null)))
								$("#NextButton").prop('disabled', false);
						}
					})
				}
			}
		});
	}

	webFormClientValidate = function() {
    var validation = true;
    var rows = $("#Operations .view-grid table").find("tbody > tr");
		rows.each(function(){
			$(this).find('td').each(function(){
				var tdElement = $(this);
				
				if(validation == true && tdElement.attr('data-attribute') == 'cid_operationdetailsprovided')
				{
					if(tdElement.attr('data-value') == 'false')
					{
						//validation = false;
						//alert('You cannot proceed before completing site operation details.');
					}
				}
			})
		});
		
	    if(!validation)
    	{
			var errorMessage = 'You cannot proceed before completing site operation details.';
    		$('#ValidationSummaryEntityFormView div').remove(); 

   			var validationSection = $('#ValidationSummaryEntityFormView');
   
            validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
            validationSection.show();
			$('#alertMessages').focus();
    	}
        return validation;
    }
});