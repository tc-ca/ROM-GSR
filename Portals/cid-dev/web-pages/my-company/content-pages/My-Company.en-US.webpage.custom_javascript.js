$(document).ready(function () {
	var companyName = '{{user.parentcustomerid.name }}';
	var header = $('.page-header h1');

	if(companyName)
	{
		if(header)
			header.text(header.text() + ' - ' + companyName);
		
	}

	$("legend").each(function() {
		$(this).removeClass();
		$(this).css("font-size", "24px");
		$(this).css("font-weight", "bold");
    });
});