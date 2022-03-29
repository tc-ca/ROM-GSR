//
// CompanyRegistrationWizard-NAICS Code.js
//
$(document).ready(function () {
	debugger;
	subgrid_language();

	webapi_test();
});

function webapi_test() {
	debugger;

	// https://rd-tdgcore-dev.powerappsportals.com/_api/cid_companynaicscodes
	var account_id = 'efa1192a-620c-4bd0-9524-dfd0c3a83f8e';
	var contact_id = 'a36861c7-86a4-ec11-b3fe-0022483c9e11';
	var cid_naicscode = '72f2e887-d192-ec11-b400-000d3a849007'; // Soybean farming
	//var rows = tdg.webapi.list("cid_companynaicscode", "statuscode eq 1");

	//var data = {
	//	"cid_Company@odata.bind": "/accounts(" + account_id + ")",
	//	"cid_CreatedByRegistrant@odata.bind": "/contacts(" + contact_id + ")",
	//	"cid_NAICSCode@odata.bind": "/cid_naicscodes(" + cid_naicscode + ")"
	//};

	var data = {
		"cid_Company@odata.bind": "/accounts(" + account_id + ")",
		"cid_CreatedByRegistrant@odata.bind": "/contacts(" + contact_id + ")",
		"cid_x@odata.bind": "/cid_naicscodes(" + cid_naicscode + ")"
	};

	tdg.webapi.create("cid_companynaicscode", data);
}

function subgrid_language() {
	//debugger;
	var selected_language = '{{website.selected_language.code}}';

	var entityList = $(".entity-grid").eq(0);

	entityList.on("loaded", function () {
		//debugger;
		entityList.find("table tbody > tr").each(function (index, tr) {
			var primaryColumn = $(tr).find('td')[0];

			/// or retrieve column by name
			/// var primaryColumn = tr.find('td[data-attribute="name"]');

			var url = $(primaryColumn).find("a")[0].href;
			if (!!url) {
				$(tr).find('td').each(function (index, td) {
					//debugger;
					var tdElement = $(this);
					var value = tdElement.attr('data-attribute');
					if (value != null) {
						var index1 = value.indexOf('.cid_naicsclasstitle');
						if (index1 != -1) {
							//debugger;
							var cellValue = $(td).text();
							cellValue = text_language(cellValue, selected_language);
							$(td).text(cellValue);
						}
					}
				});
			}
		});
	});
}

function text_language(text, language) {
	var value = "";
	var index1 = text.indexOf("::");
	if (language == "en-US") {
		value = text.substr(0, index1);
	}
	else {
		value = text.substr(index1 + 2);
	}
	return value;
}

//if (window.jQuery) {
//    (function ($) {
//        webFormClientValidate = function () {
//            var validation = true;
//            var errorMessage = "";
//            var companyId = $("#EntityFormView_EntityID").val();	

//			if (companyId == null)
//			{
//				errorMessage = "Error: Missing company Id.";
//                validation = false;
//			}
//			else if(!CompanyHasNAICSCodes(companyId))
//			{
//                errorMessage = "You cannot proceed before adding company NAICS code(s).";
//                validation = false;
//            }

//            if (!validation) {
//                $('#ValidationSummaryEntityFormView div').remove();

//                var validationSection = $('#ValidationSummaryEntityFormView');

//                validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
//                validationSection.show();
//				$('#alertMessages').focus();
//            }

//           return validation;
//		}
//    }(window.jQuery));
//}