// CompanyRegistrationWizard-NAICS Code.js

$(document).ready(function () {
	//debugger;
	subgrid_language();

	var companyName = '{{user.parentcustomerid.name }}';
    var header = $('.page-header h1');
	if(companyName != null && header != null)
		header.text(header.text() + ' - ' + companyName);

});

function subgrid_language() {
	debugger;
	var selected_language = '{{website.selected_language.code}}';

	var entityList = $(".entity-grid").eq(0);

	entityList.on("loaded", function () {
		//debugger;
		entityList.find("table tbody > tr").each(function (index, tr) {
			debugger;
			var primaryColumn = $(tr).find('td')[0];

			/// or retrieve column by name
			/// var primaryColumn = tr.find('td[data-attribute="name"]');

			var url = $(primaryColumn).find("a")[0].href;
			//console.log("URL: " + url);
			if (!!url) {
				$(tr).find('td').each(function (index, td) {
					debugger;
					var tdElement = $(this);
					var value = tdElement.attr('data-attribute');
					if (value != null) {
						var index1 = value.indexOf('.cid_naicsclasstitle');
						if (index1 != -1) {
							debugger;
							var cellValue = $(td).text();
							cellValue = text_language(cellValue,selected_language);
							$(td).text(cellValue);

							//var newElement = '<a href="' + url + '" class="details-link has-tooltip" data-toggle="tooltip">' + cellValue + '</a>';
							//$(td).append(newElement);
						}
                    }
				});
			}
		});
	});
}

function text_language (text, language) {
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

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            var validation = true;
            var errorMessage = "";
            var companyId = $("#EntityFormView_EntityID").val();	
			//var filter = "cid_company/Id eq (guid'" + companyId + "')";
			//var data = ExecuteOData("Validation_CompanyNAICSCodes", filter);
            
			//if(data == null || data.length <= 0)
			if(companyId == null)
			{
				errorMessage = "Error: Missing company Id.";
                validation = false;
			}
			else if(!CompanyHasNAICSCodes(companyId))
			{
                errorMessage = "You cannot proceed before adding company NAICS code(s).";
                validation = false;
            }

            if (!validation) {
                $('#ValidationSummaryEntityFormView div').remove();

                var validationSection = $('#ValidationSummaryEntityFormView');

                validationSection.append($("<div class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
                validationSection.show();
            }

           return validation;
		}
    }(window.jQuery));
}

//if (window.jQuery) {
//    (function ($) {
//        webFormClientValidate = function () {
//            debugger;

//            var validation = true;
//            var errorMessage = "";
//            var rows = $("#CompanyNAICSCodes .view-grid table").find("tbody > tr");

//            if (rows.length <= 0) {
//                errorMessage = "You cannot proceed before adding company NAICS code(s).";
//                validation = false;
//            }

//            if (!validation) {
//                $('#ValidationSummaryEntityFormView div').remove();

//                var validationSection = $('#ValidationSummaryEntityFormView');

//                validationSection.append($("<div class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
//                validationSection.show();
//            }

//            return validation;
//        }
//    }(window.jQuery));
//}