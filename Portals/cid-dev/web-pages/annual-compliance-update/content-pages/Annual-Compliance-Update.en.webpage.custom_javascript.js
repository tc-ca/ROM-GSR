//
// Web Page-Annual Compliance Update
//

$(document).ready(function () {
	debugger;

	sessionStorage.setItem('frominyearsites', 'false');
    sessionStorage.setItem('fromannualcompliance', 'true');
	sessionStorage.setItem('frominyearsitepage', 'false');

	$("legend").each(function() {
		$(this).removeClass();
		$(this).css("font-size", "20px");
		$(this).css("font-weight", "bold");
		$(this).css("text-decoration", "underline");
    });

 var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();

    $('#cid_cidcompanystatus').hide();
    $('#cid_cidcompanystatus_label').hide();
    
    var deactivateCompanyWebLink = $('a[href*="deactivate-company"]');

    
    if (cidCompanyStatus.indexOf("Inactive") >= 0) {
        deactivateCompanyWebLink.addClass("hidden");
    }
    else{
        deactivateCompanyWebLink.removeClass("hidden");
    }

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name}}');
	var topNav = $('#navbar');

	if (companyName)
		if (topNav) {
			var code = "m000024";
			var value = tdg.error_message.message(code);
			value = value.replace("{0}", companyName);

			$("<h2>" + value + "</h2>").insertAfter(topNav);
		}

	subgrid_language();
	
});

function subgrid_language() {
	debugger;

	var entityList = $(".entity-grid");
	for (var i = 0; i < entityList.length; i++) {
		var grid = entityList.eq(i);
        tdg.cid.subgrid_header_language(grid);
    }
}

