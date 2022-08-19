//
// CompanyRegistrationWizard-Attestation.js
//
$(document).ready(function () {
    debugger;

    subgrid_language();

    var cid_crabusinessnumber = $("#cid_crabusinessnumber").val();
    cid_crabusinessnumber = (cid_crabusinessnumber != "null" ? cid_crabusinessnumber : "");

    $("#telephone1").attr("placeholder", "—");
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

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {

            debugger;
            var validation = false;
            var companyId = $("#EntityFormView_EntityID").val();

            //Contacts validation
            var filter = "parentcustomerid/Id eq (guid'" + companyId + "')";
            var data = ExecuteQuery("Validation_CompanyPrimarySecondaryContacts", filter);

            if (data != null) {
                var primaryFound = false;
                var secondaryFound = false;

                for (i = 0; i < data.length; i++) {
                    if (data[i].cid_contacttype.Value == 100000000)
                        primaryFound = true;
                    if (data[i].cid_contacttype.Value == 100000001)
                        secondaryFound = true;
                }
                if (primaryFound && secondaryFound) {
                    validation = true;
                    return true;
                }
            }

            if (!validation) {
                // "You cannot attest company before adding primary and secondary contacts.</br>";
                tdg.c.error_message_advanced_form("m000006", true);   // You cannot proceed before adding at least one secondary contact.
            }
            return validation;
        }
    }(window.jQuery));
}

function subgrid_language() {
    var selected_language = '{{website.selected_language.code}}';

    var cid_account_companynaicscode = $(".entity-grid").eq(1);
    cid_account_companynaicscode.on("loaded", function () {
        debugger;

        // header
        let header = cid_account_companynaicscode.find("table thead > tr");
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

        let rows = cid_account_companynaicscode.find("table tbody > tr");
        rows.each(function (index, tr) {
            //debugger;

            let cols = $(tr).find('td');
            cols.each(function (index, td) {
                debugger;
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
