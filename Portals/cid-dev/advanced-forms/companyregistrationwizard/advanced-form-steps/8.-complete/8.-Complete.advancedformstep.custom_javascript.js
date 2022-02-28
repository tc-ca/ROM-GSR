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
    	if ($("#printSummary").length <= 0)
        $('#ValidationSummaryEntityFormView').after("<br><div id='printSummary' class='input-group pull-right'><input type='button' value='Print Summary' onclick='window.print();' class='btn btn-primary button next submit-btn'></div>");

});