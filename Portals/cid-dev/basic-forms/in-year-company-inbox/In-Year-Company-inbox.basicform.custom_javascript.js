$(document).ready(function () {
	$(".entity-grid").on("loaded", function () {
		$(this).find("tbody").find("tr").each(function () {
			var trElement = $(this);
			var recId = trElement.attr('data-id');
			var firstTdElement = trElement.find('td:first');

			trElement.find("td").each(function () {
				var tdElement = $(this);
				if (tdElement.attr('data-value') == 'task') {
					firstTdElement.find('a').removeAttr("href");
				}
			});
		});
	});
});
