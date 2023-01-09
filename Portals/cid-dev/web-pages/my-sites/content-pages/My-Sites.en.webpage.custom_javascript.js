//
// Web Page-My Sites
//

$(document).ready(function () {
    debugger;

	sessionStorage.setItem('frominyearsites', 'true');
    sessionStorage.setItem('fromannualcompliance', 'false');
	sessionStorage.setItem('frominyearsitepage', 'false');


    var topNav = $('#navbar');
    if (topNav) {
        var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name}}');

        var value = tdg.error_message.message("m000106");
        value = value.replace("{0}", companyName);
        $(value).insertAfter(topNav);
    }

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

    	$(".entity-grid").on("loaded", function () {
		$(this).find("tbody").find("tr").each(function () {
			var trElement = $(this);
			var recId = trElement.attr('data-id');
			var firstTdElement = trElement.find('td:first');
			var lastTdElement = trElement.find('td:last');
			var detailsLink = firstTdElement.find(".details-link");

			var href = lastTdElement.find('a:last').attr('href');
			detailsLink.attr("href", href);

			trElement.find("td").each(function () {
				var tdElement = $(this);
				if (tdElement.attr('data-attribute') == 'cid_issiteattested') {
					if (tdElement.attr('data-value') == 'true') {
						if ($("#spn_" + recId).length <= 0) {
							firstTdElement.prepend("<span id='spn_' + recId +' class='glyphicon glyphicon-ok' style='color: #3c763d;'></span>&nbsp;&nbsp;&nbsp;");
							trElement.css("background-color", "#dff0d8");
						}
					}
				}
				if ((tdElement.attr('data-attribute') == 'statuscode' && tdElement.attr('aria-label') == 'Inactive') ||
					(tdElement.attr('data-attribute') == 'cid_siteclaim' && tdElement.attr('aria-label') != 'My Site Active')) {
					firstTdElement.find('a').removeAttr("href");
					firstTdElement.find('span').remove();
					firstTdElement.find('input').remove();
					trElement.css("background-color", "#ddd");
					trElement.css("color", "grey");
				}
			});
		});
	});
});