//
// CompanyRegistrationWizard-NAICS Code.js
//
$(document).ready(function () {
	debugger;
	subgrid_language();

	var cid_naicscode_label = tdg.error_message.message("cid_naicscode"); // NAICS Code
	sessionStorage.setItem("cid_naicscode_label", cid_naicscode_label);
});

function subgrid_language() {
	var selected_language = '{{website.selected_language.code}}';

	var entityList = $(".entity-grid").eq(0);

	entityList.on("loaded", function () {
		debugger;

		// header
		let header = entityList.find("table thead > tr");
		for (var index1 = 0; index1 < header.length; index1++) {
			//debugger;
			let tr = header[index1];

			let cols = $(tr).find('th');
			for (var i = 0; i < cols.length; i++) {
				var tdElement = cols[i];
				var className = $(tdElement)[0].className;
				if (className.indexOf("sort-enabled") == -1) {
					var text = $(tdElement).text();
					text = tdg.c.text_language(text, selected_language);
					$(tdElement).text(text);
				}
			}
		}

		debugger;

		let rows = entityList.find("table tbody > tr");
		rows.each(function (index, tr) {
			debugger;

			let cols = $(tr).find('td');
			cols.each(function (index, td) {
				//debugger;
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
		});
	});
}
