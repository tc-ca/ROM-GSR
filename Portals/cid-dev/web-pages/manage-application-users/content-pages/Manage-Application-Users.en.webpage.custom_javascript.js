$(document).ready(function () {
	debugger;

 	var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();

    //$('#cid_cidcompanystatus').hide();
    //$('#cid_cidcompanystatus_label').hide();
    
    var deactivateCompanyWebLink = $('a[href*="deactivate-company"]');

    
    if (cidCompanyStatus.indexOf("Inactive") >= 0) {
        deactivateCompanyWebLink.addClass("hidden");
    }
    else{
        deactivateCompanyWebLink.removeClass("hidden");
    }
});