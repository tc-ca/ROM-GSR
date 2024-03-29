$(document).ready(function () {
	debugger;

    var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
    // format sign-out's tooltip
	
	$('#cdts-signout-btn').tooltip({
					trigger: 'hover',
					placement: 'right',
					container: 'body'
						});
    $('#cid_cidsitestatus').hide();
    $('#cid_cidsitestatus_label').hide();
    
    var deactivateSiteWebLink = $('a[href*="deactivate-site"]');
    var activateSiteWebLink = $('a[href*="activate-site"]');
    
    if (cidSiteStatus.indexOf("Inactive") >= 0) {
        activateSiteWebLink.removeClass("hidden");
        deactivateSiteWebLink.addClass("hidden");
    }
    else{
        activateSiteWebLink.addClass("hidden");
        deactivateSiteWebLink.removeClass("hidden");
    }
});
