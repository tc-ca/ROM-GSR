//
// Web Page-Company History Log.js
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
        if (topNav)
            $("<h2>TDG Site Registration Database: " + tdg.c.replace_special_char(companyName) + "</h2>").insertAfter(topNav);

    var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();

    $('#cid_cidcompanystatus').hide();
    $('#cid_cidcompanystatus_label').hide();

    var deactivateCompanyWebLink = $('a[href*="deactivate-company"]');

    if (cidCompanyStatus.indexOf("Inactive") >= 0) {
        deactivateCompanyWebLink.addClass("hidden");
    }
    else {
        deactivateCompanyWebLink.removeClass("hidden");
    }
});
