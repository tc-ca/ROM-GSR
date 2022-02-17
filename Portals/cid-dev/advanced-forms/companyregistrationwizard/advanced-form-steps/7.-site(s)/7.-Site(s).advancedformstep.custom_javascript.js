$(document).ready(function() {
	$(".entity-grid").on("loaded", function () {
		var actionButtonsToolbar = $('.view-toolbar');
		//if ($("#bulkUploadBtn").length <= 0)
		//	actionButtonsToolbar.prepend("<div id='bulkUploadBtn' class='input-group pull-left'><a href='/Bulk_Site_Upload'  target='_blank' rel='noopener noreferrer' class='btn btn-info pull-left action' title='Bulk Site Upload'>Bulk Site Upload</a></div>");
		//if ($("#attestMultipledBtn").length <= 0)
		//	actionButtonsToolbar.prepend("<div id='attestMultipledBtn' class='input-group pull-left'><a href='#' class='btn btn-info pull-left action' title='Attest Multiple' disabled>Attest Multiple</a></div>");
		
		$(this).find("tbody").find("tr").each(function () {
			var trElement = $(this);
			var recId = trElement.attr('data-id');
			var firstTdElement = trElement.find('td:first');
			var disabledRow = false;
			
			trElement.find("td").each(function () {
				var tdElement = $(this);
				if(tdElement.attr('data-attribute') == 'cid_issiteattested')
				{
					if(tdElement.attr('data-value') == 'true')
					{
						if ($("#spn_" + recId).length <= 0)
						{
							firstTdElement.prepend("<span id='spn_' + recId +' class='glyphicon glyphicon-ok' style='color: #3c763d;'></span>&nbsp;&nbsp;&nbsp;");
							trElement.css("background-color", "#dff0d8");
						}
					}
					else
					{
						//if ($("#chk_" + recId).length <= 0)
						//	firstTdElement.prepend("<input type='checkbox' id='chk_' + recId +'>&nbsp;&nbsp;&nbsp;");
					}
				}
				
				if(tdElement.attr('data-attribute') == 'statuscode' && tdElement.attr('aria-label') == 'Inactive')
				{
					firstTdElement.find('a').removeAttr("href");
					firstTdElement.find('span').remove();
					firstTdElement.find('input').remove();
				}
			});
		});
    });
	
	webFormClientValidate = function() {
    var validation = true;
    var rows = $("#CompanySites .view-grid table").find("tbody > tr");

	var errorMessage = "";

    if (rows.length <= 0) {
		validation = false;
        //alert('You cannot proceed before adding company site(s).');
		errorMessage = "You cannot proceed before adding company site(s).";
    }
    else{
		rows.each(function(){
			var skipRow = false;
			if(validation == true) 
			{			
				$(this).find('td').each(function(){
					if(skipRow == false){
						var tdElement = $(this);
						
						//if(tdElement.attr('data-attribute') == 'statuscode' && tdElement.attr('data-value').includes('2'))
						if(tdElement.attr('data-attribute') == 'statuscode' && tdElement.attr('aria-label') == 'Inactive')
							skipRow = true;
						else if(tdElement.attr('data-attribute') == 'cid_issiteattested' && tdElement.attr('data-value') == 'false')
						{
							validation = false;
							//alert('You cannot proceed before attesting all the company sites.');
							errorMessage = 'You cannot proceed before attesting all the company sites.';
						}
					}
				})	
			}
//			else
//				return validation;
		})
	}

	          if(!validation)
    {
    $('#ValidationSummaryEntityFormView div').remove(); 

   var validationSection = $('#ValidationSummaryEntityFormView');
   
   validationSection.append($("<div class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));  
  validationSection.show();
    }


	return validation; 
    }
});


