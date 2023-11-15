$(document).ready(function () {
	debugger;
    var deactivateSiteWebLink = $('a[href*="deactivate-site"]');
    var activateSiteWebLink = $('a[href*="activate-site"]');
    // format sign-out's tooltip
	
	$('#cdts-signout-btn').tooltip({
					trigger: 'hover',
					placement: 'right',
					container: 'body'
						});
    if ($("#siteStatus").val() != null 
        && $("#siteStatus").val() != "" 
        && $("#siteStatus").val().toLowerCase().includes("inactive")){
            activateSiteWebLink.removeClass("hidden");
            deactivateSiteWebLink.addClass("hidden");
    }
    else{
        activateSiteWebLink.addClass("hidden");
        deactivateSiteWebLink.removeClass("hidden");
    }
});