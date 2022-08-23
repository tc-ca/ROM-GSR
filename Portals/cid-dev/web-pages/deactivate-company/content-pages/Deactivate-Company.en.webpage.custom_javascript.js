$(document).ready(function () {
	var companyName = '{{user.parentcustomerid.name }}';
	var topNav = $('#navbar');
	var h2Header = $('.tab-title');

	if(companyName)
		if(topNav)
			$( "<h2>TDG Site Registration Database: " + companyName + "</h2>" ).insertAfter(topNav);
	if(h2Header)
		h2Header.html(companyName + " - Deactivate Company");
});