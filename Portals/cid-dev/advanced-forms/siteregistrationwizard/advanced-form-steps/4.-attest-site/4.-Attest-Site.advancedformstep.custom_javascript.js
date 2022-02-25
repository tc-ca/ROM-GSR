$(document).ready(function() {
     if ($("#backToCompanyWizard").length <= 0)
        $('#mainContent').prepend("<div id='backToCompanyWizard' class='input-group pull-left'><p><a href='~/en-US/RegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Company Registration Wizard</a><br><br></p></div>");
 
    var companyName = '{{user.parentcustomerid.name }}';
    var header = $('.page-header h1');
	if(companyName != null && header != null)
		header.text(header.text() + ' - ' + companyName);

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