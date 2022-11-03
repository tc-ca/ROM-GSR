$(document).ready(function () {
    debugger;

 	var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();
    var deactivateCompanyWebLink = $('a[href*="deactivate-company"]');
    
    if (cidCompanyStatus.indexOf("Inactive") >= 0) {
        deactivateCompanyWebLink.addClass("hidden");
    }
    else{
        deactivateCompanyWebLink.removeClass("hidden");
    }
    
    var topNav = $('#navbar');
    if (topNav) {
        var companyName = $("#ovs_legalname").val();
        var value = tdg.error_message.message("m000106");
        value = value.replace("{0}", companyName);
        $(value).insertAfter(topNav);
    }

	$("legend").each(function() {
		$(this).removeClass();
		$(this).css("font-size", "20px");
		$(this).css("font-weight", "bold");
        $(this).css("text-decoration", "underline");
    });
});