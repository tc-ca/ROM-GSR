window.open('/Bulk_Site_Upload', '_blank');



$(document).ready(function() {
	$(".entity-grid").on("loaded", function () {
		//var actionButtonsToolbar = $('.view-grid');
		//var actionButtonsToolbar = $('.pull-right toolbar-actions');
		var actionButtonsToolbar = $('.view-toolbar');
		actionButtonsToolbar.prepend("<div class='input-group pull-left'><a href='/Bulk_Site_Upload'  target='_blank' rel='noopener noreferrer' class='btn btn-info pull-left action' title='Bulk Site Upload'>Bulk Site Upload</a></div>");
		actionButtonsToolbar.prepend("<div class='input-group pull-left'><a href='#' class='btn btn-info pull-left action' title='Attest Multiple' disabled>Attest Multiple</a></div>");
		
		$(this).find("tbody").find("tr").each(function () {
			var trElement = $(this);
			var recId = trElement.attr('data-id');
			var firstTdElement = trElement.find('td:first');
			
			trElement.find("td").each(function () {
				var tdElement = $(this);
				if(tdElement.attr('data-attribute') == 'cid_issiteattested')
				{
					if(tdElement.attr('data-value') == 'true')
					{
						firstTdElement.prepend("<span class='glyphicon glyphicon-ok' style='color: #3c763d;'></span>&nbsp;&nbsp;&nbsp;");
						trElement.css("background-color", "#dff0d8");
					}
					else
					{
						firstTdElement.prepend("<input type='checkbox' id='chk-' + recId +'>&nbsp;&nbsp;&nbsp;");
					}
				}
			});
		});
    });
	
	webFormClientValidate = function() {
    var validation = true;
    var rows = $("#CompanySites .view-grid table").find("tbody > tr");

    if (rows.length <= 0) {
		validation = false;
        alert('You cannot proceed before adding company site(s).');
    }
    else{
		rows.each(function(){
			$(this).find('td').each(function(){
				var tdElement = $(this);
				
				if(validation == true && tdElement.attr('data-attribute') == 'cid_issiteattested')
				{
					if(tdElement.attr('data-value') == 'false')
					{
						validation = false;
						alert('You cannot proceed before attesting all the company sites.');
					}
				}
			})
		})

	}
	
	return validation; 
    }
});


