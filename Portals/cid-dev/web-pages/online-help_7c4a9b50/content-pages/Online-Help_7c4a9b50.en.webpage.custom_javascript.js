$(document).ready(function () {
	
	
	var companyName = '{{user.parentcustomerid.name }}';
	var topNav = $('#navbar');

	if(companyName)
		if(topNav)
			$( "<h2>TDG Site Registration Database: " + companyName + "</h2>" ).insertAfter(topNav);

	//console.log(company_status);
	var  company_reg_date = "{{entities.account[user.parentcustomerid.id].cid_officiallyregistrationcompletationdate}}";
	

	if(company_reg_date !=null && company_reg_date !="")
	{
	//== '100000005'){//registration completed
      
    	 tdg.c.weblink_hide("/RegistrationWizard/");
	}
	else
	{
		window.location.replace( '~/OnlineHelpRegisteration/' );

	}
});