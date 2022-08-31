$(document).ready(function () {
    debugger;

    var topNav = $('#navbar');
    if (topNav) {
        var companyName = $("#ovs_legalname").val();
        var value = tdg.error_message.message("m000106");
        value = value.replace("{0}", companyName);
        $(value).insertAfter(topNav);
    }

	$("legend").each(function() {
		$(this).removeClass();
		$(this).css("font-size", "24px");
		$(this).css("font-weight", "bold");
    });

    var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();

    if (cidCompanyStatus.indexOf("Inactive") >= 0){
        $(".submit-btn").prop("disabled", true);
  
        //$(".create-action").prop("disabled", true);
        
        //$(".entitylist-download").prop("disabled", true);
        //$(":button").prop("disabled", true);

        
        //$("a").removeAttr("href");  
        //$(':a').prop('disabled', true);
        //$('a').prop('disabled', true);
        //$(':input').prop('disabled', true);
    }


});