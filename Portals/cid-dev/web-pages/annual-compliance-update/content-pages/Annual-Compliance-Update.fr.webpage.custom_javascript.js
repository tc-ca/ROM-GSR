//
// Web Page-Annual Compliance Update
//

$(document).ready(function () {
	debugger;

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