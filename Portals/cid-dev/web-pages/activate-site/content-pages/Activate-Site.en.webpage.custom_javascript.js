$(document).ready(function () {
	$('#cid_siteactivationmemofr').hide();
    $('#cid_siteactivationmemofr_label').hide();

	var companyName = '{{user.parentcustomerid.name }}';
	var topNav = $('#navbar');

	if(companyName)
		if(topNav)
			$( "<h2>TDG Site Registration Database: " + companyName + "</h2>" ).insertAfter(topNav);
});