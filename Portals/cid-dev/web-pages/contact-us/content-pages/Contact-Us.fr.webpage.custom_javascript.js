// 
// Web Page-Contact Us.js
// 

$(document).ready(function () {
	debugger;

	page_setup();
	var customerid = '{{user.parentcustomerid.id}}';

	if (customerid != "" && customerid != null && customerid != 'undefined') {
		//  var company_reg_date = "{{entities.account[user.parentcustomerid.id].cid_officiallyregistrationcompletationdate}}";
		//  if(company_reg_date !=null && company_reg_date !="")
		//  {
		//  //== '100000005'){//registration completed
	   	
		//   tdg.c.weblink_hide("/RegistrationWizard/");
		//  }
		//  else
		//  {
		//   tdg.c.weblink_hide("/company_dashboard/");
		//  }	
	}
	else if (customerid == "" || customerid == null || customerid == 'undefined') {
		tdg.c.weblink_hide("/company_dashboard/");
	}
});

function page_setup() {
	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	const files = ["/tdgcore_common.js", "/tdgcore_message.js"];
	for (var i = 0; i < files.length; i++) {
		var file = files[i];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = file;

		$("body").append(script);
	}
}