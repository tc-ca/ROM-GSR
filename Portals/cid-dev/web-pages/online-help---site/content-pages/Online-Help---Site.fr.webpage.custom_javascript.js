$(document).ready(function () {
	debugger;
    var deactivateSiteWebLink = $('a[href*="deactivate-site"]');
    var activateSiteWebLink = $('a[href*="activate-site"]');

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