$(document).ready(function () {
    debugger;

    var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();
    var activationButon = $("#EntityFormPanel").find(".workflow-link");

    if (cidCompanyStatus.indexOf("Inactive") < 0) {
        activationButon.hide();
    }
    else {
        activationButon.css("color", "#000000");
        activationButon.css("background-color", "#4CAF50");
    }

	var updateCompanyBtn = "<div><input id='update_company' type='button' onclick='alert('Test')' name='UpdateCompany' value='Update Company' class='btn btn-primary action create-action' nonactionlinkbutton='true'/></div>";
    var companyName  = "{{user.parentcustomerid.name}}";
    $( ".form-custom-actions" ).first().parent().after(updateCompanyBtn);

    $('div[data-name="company_details"]').parent().before("<h2>" + companyName +"</h2><hr>");
    var legend = $('fieldset[aria-label="Head Office"] legend').first();
    legend.text("");
    legend.after("<h2>"+ companyName + " - Head Office</h2><hr>");

    $('div[data-name="tab_3"]').parent().parent().addClass("hidden");

	$("#cid_registrationasof").parent().parent().hide();
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