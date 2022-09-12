//
// CompanyRegistrationWizard-Complete.js
//
$(document).ready(function () {
    debugger;

    var cid_crabusinessnumber = $("#cid_crabusinessnumber").val();
    cid_crabusinessnumber = (cid_crabusinessnumber != "null" ? cid_crabusinessnumber : "");

    // do not have a business number?
    if (cid_crabusinessnumber == "") {
        tdg.c.control_hide("cid_crabusinessnumber");
        tdg.c.control_show("cid_reasonfornobnnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber_other");
    }
    else {
        tdg.c.control_show("cid_crabusinessnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber_other");
    }

    $('table').each(function () {
        var selectedTable = $(this);
        if (selectedTable.attr('data-name').includes('_readonly')) {
            selectedTable.find("tr").each(function () {
                $(this).css("background-color", "#F0F0F0");
            });
        }
    });

    if ($("#printSummary").length <= 0) {
        printSummary();
    }

    $("#address1_line2").attr("placeholder", "");
    $("#address1_line3").attr("placeholder", "");
    $("#telephone1").attr("placeholder", "");
    $("#fax").attr("placeholder", "");
    $("#websiteurl").attr("placeholder", "");

    subgrid_language();

//$('#NextButton').on('click', function(){
//   
//});

// 	(function ($) {
//		webFormClientValidate = function () {
//			var validation = true;

//			if (!validation) {
//				$('#ValidationSummaryEntityFormView div').remove();
//				var validationSection = $('#ValidationSummaryEntityFormView');
//				validationSection.append($("<div class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
//				validationSection.show();
//			}
//			return validation;
//		}
//	}(window.jQuery));




});

function printSummary() {
    var button = $('<input type="button" name="printSummary" id="printSummary" />');
    $("#NextButton").after(button);

    var button1 = $("#NextButton");
    var className = button1[0].className
    var fontSize = button1.css("fontSize");
    var color = button1.css("color");
    var background_color = button1.css("background-color");

    var button2 = $("#printSummary");
    var text1 = tdg.error_message.message("m000007");
    button2.prop("value", text1);
    button2[0].className = className;
    button2.css("fontSize", fontSize);
    button2.css('color', color);
    button2.css("background-color", background_color);

    // bind the click event to this custom buttton
    $("#printSummary").bind("click", function () {
        debugger;
        window.print();
    });
}

function subgrid_language() {
    debugger;
    var selected_language = sessionStorage.getItem("selected_language");

    var entityList = $(".entity-grid");
    var naicscode = entityList.eq(1);   // cid_account_companynaicscode
    var refRel = naicscode[0].dataset.refRel;
    if (refRel == "cid_account_companynaicscode") {
        naicscode.on("loaded", function () {
            debugger;

            // header
            let header = naicscode.find("table thead > tr");
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

            let rows = naicscode.find("table tbody > tr");
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
}
