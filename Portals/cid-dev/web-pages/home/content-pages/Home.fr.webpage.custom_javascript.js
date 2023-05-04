//
// Web Page-Home.js
//

$(document).ready(function () {
    debugger;

    var  company_status = "{{entities.account[user.parentcustomerid.id].cid_cidcompanystatus.value}}";

	if(company_status == '100000005'){//registration completed
        $("a[href|='/en-US/RegistrationWizard/']").hide();
    	//window.location.href = "~/registration/";
       // window.location.href = "~/Dashboard/";
	}
    //else{
    //    window.location.href = "~/RegistrationWizard/";
    //}
});