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

