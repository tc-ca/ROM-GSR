$(document).ready(function () {
	var companyName = '{{user.parentcustomerid.name }}';
	var topNav = $('#navbar');

	if(companyName)
		if(topNav)
			$( "<h2>TDG Site Registration Database: " + companyName + "</h2>" ).insertAfter(topNav);z
});