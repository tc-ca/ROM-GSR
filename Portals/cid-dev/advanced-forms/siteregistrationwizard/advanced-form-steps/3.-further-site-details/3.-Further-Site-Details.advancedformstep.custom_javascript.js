$(document).ready(function() {
     if ($("#backToCompanyWizard").length <= 0)
        $('#mainContent').prepend("<div id='backToCompanyWizard' class='input-group pull-left'><p><a href='~/en-US/RegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Company Registration Wizard</a><br><br></p></div>");
 
    var companyName = '{{user.parentcustomerid.name }}';
    var header = $('.page-header h1');
	if(companyName != null && header != null)
		header.text(header.text() + ' - ' + companyName);

	//var rows1 = $("#Operations .view-grid table tbody").find("tr");
	
	//var recId = '14ec1ae5-0479-ec11-a81b-000d3a09e5b1';//rows[0].attr('data-id');
	
	//rows1.each(function(){
	//	var rec2 = row1.attr('data-id');
//$('#NextButton').parent().prepend("<div class='input-group pull-left'><p><a href='~/en-US/OperationRegistrationWizard/?id=" + recId2 + "' class='entitylist-create btn btn-info pull-right action' title='Back'>Operation Details</a><br><br></p></div>");
	

//		});

	

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
    $('#ValidationSummaryEntityFormView div').remove(); 

   var validationSection = $('#ValidationSummaryEntityFormView');
   
   validationSection.append($("<div class='notification alert-danger' role='alert'>You cannot proceed before completing site operation details.</div>"));  
  validationSection.show();
    }
        return validation;
    }
});