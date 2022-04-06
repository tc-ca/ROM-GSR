$(document).ready(function () {
	var companyName = '{{user.parentcustomerid.name }}';
	var header = $('.page-header h1');

	if(companyName)
	{
		if(header)
			header.text(header.text() + ' - ' + companyName);
		
	}
});