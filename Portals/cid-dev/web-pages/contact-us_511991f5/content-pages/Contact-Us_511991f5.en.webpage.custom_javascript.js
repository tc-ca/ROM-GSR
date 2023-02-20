$(document).ready(function () {
    var  company_status = "{{entities.account[user.parentcustomerid.id].cid_cidcompanystatus.value}}";

	if(company_status == '100000005'){//registration completed
      
    	tdg.c.weblink_hide("/RegistrationWizard/");
	}
    else{

    tdg.c.weblink_hide("/company_dashboard/");
    }
});