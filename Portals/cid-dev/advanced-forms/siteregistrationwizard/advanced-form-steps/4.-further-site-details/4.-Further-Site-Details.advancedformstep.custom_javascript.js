$(document).ready(function() {
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
							if(tdElement.attr('data-value') == 'false')
								window.location.href = "~/en-US/OperationRegistrationWizard/?id=" + operationId;
							else
								$("#NextButton").click();
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
						validation = false;
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