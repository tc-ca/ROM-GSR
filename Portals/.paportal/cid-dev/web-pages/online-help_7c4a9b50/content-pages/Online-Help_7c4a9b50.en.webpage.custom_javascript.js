// 
// Web Page-Online Help.js
// 

$(document).ready(function () {
	debugger;

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);
	// format sign-out's tooltip
	
	$('#cdts-signout-btn').tooltip({
					trigger: 'hover',
					placement: 'right',
					container: 'body'
						});
	var companyName = '{{user.parentcustomerid.name }}';
	var topNav = $('#navbar');

	if (companyName)
		if (topNav) {
			var msg = tdg.error_message.message("CID_PORTAL");
			$("<h2>" + msg + " : " + companyName + "</h2>").insertAfter(topNav);
        }

	var company_reg_date = "{{entities.account[user.parentcustomerid.id].cid_officiallyregistrationcompletationdate}}";

	if (company_reg_date != null && company_reg_date != "") {
		tdg.c.weblink_hide("/RegistrationWizard/");
	}
	else {
		window.location.replace('~/OnlineHelpRegisteration/');
	}
});