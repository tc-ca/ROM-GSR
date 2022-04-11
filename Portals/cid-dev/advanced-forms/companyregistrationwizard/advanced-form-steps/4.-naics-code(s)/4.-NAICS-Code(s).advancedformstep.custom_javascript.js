//
// CompanyRegistrationWizard-NAICS Code.js
//
$(document).ready(function () {
	debugger;
	subgrid_language();
});

function subgrid_language() {
	var selected_language = '{{website.selected_language.code}}';

	var entityList = $(".entity-grid").eq(0);

	entityList.on("loaded", function () {
		entityList.find("table tbody > tr").each(function (index, tr) {
			var primaryColumn = $(tr).find('td')[0];

			/// or retrieve column by name
			/// var primaryColumn = tr.find('td[data-attribute="name"]');

			var url = $(primaryColumn).find("a")[0].href;
			if (!!url) {
				$(tr).find('td').each(function (index, td) {
					var tdElement = $(this);
					var value = tdElement.attr('data-attribute');
					if (value != null) {
						var index1 = value.indexOf('.cid_naicsclasstitle');
						if (index1 != -1) {
							var cellValue = $(td).text();
							cellValue = tdg.c.text_language(cellValue, selected_language);
							$(td).text(cellValue);
						}
					}
				});
			}
		});
	});
}
