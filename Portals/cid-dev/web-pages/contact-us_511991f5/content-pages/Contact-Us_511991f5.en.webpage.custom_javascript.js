$(document).ready(function () {
    var  company_status = "{{entities.account[user.parentcustomerid.id].cid_cidcompanystatus.value}}";

	var  company_reg_date = "{{entities.account[user.parentcustomerid.id].cid_officiallyregistrationcompletationdate}}";
	console.log(company_reg_date);

	if(company_reg_date !=null && company_reg_date !="")
	{
	//== '100000005'){//registration completed
      
    	 tdg.c.weblink_hide("/RegistrationWizard/");
	}
	else
	{
		tdg.c.weblink_hide("/company_dashboard/");

	}

});