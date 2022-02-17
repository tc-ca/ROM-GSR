	$(document).ready(function() {
	    $('table').each(function () {
            var selectedTable = $(this);
		    if(selectedTable.attr('data-name').includes('_readonly'))
		    {
                selectedTable.find("tr").each(function () {
			        $(this).css("background-color", "#F0F0F0");
                });
            }
	    });
	});