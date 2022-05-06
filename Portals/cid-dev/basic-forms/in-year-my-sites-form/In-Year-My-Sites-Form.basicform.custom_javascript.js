$(document).ready(function () {
	$(".entity-grid").on("loaded", function () {
		$(this).find("tbody").find("tr").each(function () {
			var trElement = $(this);
			var recId = trElement.attr('data-id');
			var firstTdElement = trElement.find('td:first');
			var disabledRow = false;
			
			var detailsLink = firstTdElement.find("a:first");

			trElement.find("td").each(function () {
				var tdElement = $(this);

				if (tdElement.attr('data-attribute') == 'cid_issiteattested') {
					if (tdElement.attr('data-value') == 'true') {
						if ($("#spn_" + recId).length <= 0) {
							firstTdElement.prepend("<span id='spn_" + recId + "' class='glyphicon glyphicon-ok' style='color: #3c763d;'></span>&nbsp;&nbsp;&nbsp;");
							trElement.css("background-color", "#dff0d8");
						}
					}
					else{
						detailsLink.attr("href", "/SiteRegistrationWizard/?id=" + recId + "&in_year=true");
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