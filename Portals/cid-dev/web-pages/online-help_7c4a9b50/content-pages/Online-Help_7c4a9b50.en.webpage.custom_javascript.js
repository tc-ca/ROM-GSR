$(document).ready(function () {
	
	
	var companyName = '{{user.parentcustomerid.name }}';
	var topNav = $('#navbar');

	if(companyName)
		if(topNav)
			$( "<h2>TDG Site Registration Database: " + companyName + "</h2>" ).insertAfter(topNav);

	
	var  company_status = "{{entities.account[user.parentcustomerid.id].cid_cidcompanystatus.value}}";

	if(company_status == '100000005'){//registration completed
      
    	
	}
	else
	{
		window.location.replace( '~/OnlineHelpRegisteration/' );

	}
});