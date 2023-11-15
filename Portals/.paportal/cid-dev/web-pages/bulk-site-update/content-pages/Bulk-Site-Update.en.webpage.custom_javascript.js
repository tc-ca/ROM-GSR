//
// Web Page-Bulk Site Upload.js
//
$(document).ready(function () {
    debugger;
      // format sign-out's tooltip
	
	$('#cdts-signout-btn').tooltip({
					trigger: 'hover',
					placement: 'right',
					container: 'body'
						});
    if (sessionStorage.getItem('frominyearsites') == "true" || sessionStorage.getItem('fromannualcompliance') == 'true') {
        tdg.c.weblink_hide("/RegistrationWizard/");
        tdg.c.weblink_hide("/Bulk_Site_Upload/");
    }
    else {
        tdg.c.weblink_hide("/company_dashboard/");
        tdg.c.weblink_hide("/Bulk_Site_Update/");
    }
    //tdg.c.weblink_hide("/RegistrationWizard/");
    //tdg.c.weblink_hide("/Bulk_Site_Upload/");
});

