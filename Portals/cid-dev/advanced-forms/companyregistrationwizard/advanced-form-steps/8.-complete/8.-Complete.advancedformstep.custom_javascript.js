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
        $("#NextButton").parent().after("<div id='printSummary' role='group' class='btn-group entity-action-button'><input type='button' name='PrintButton' value='Print Summary' onclick='window.print();' class='btn btn-primary button next submit-btn' nonactionlinkbutton='true'></div>");
});