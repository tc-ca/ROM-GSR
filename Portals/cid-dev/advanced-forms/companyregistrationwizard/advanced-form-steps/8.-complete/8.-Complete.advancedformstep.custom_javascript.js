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

	var companyName = '{{user.parentcustomerid.name }}';
    var header = $('.page-header h1');
	if(companyName != null && header != null)
		header.text(header.text() + ' - ' + companyName);
});