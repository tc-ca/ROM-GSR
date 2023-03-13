//
// CompanyRegistrationWizard-Complete.js
//

$(document).ready(function () {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    tdg.c.page_instructions("page_crw_complete");

    $("#cid_registrationasof").parent().parent().hide();

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

    tdg.c.control_hide("ovs_name_fr");
    tdg.c.control_hide("address1_stateorprovince");
    //check if province is not empty
    if ($("#address1_stateorprovince").val() != "" && $("#address1_stateorprovince").val() != "") {
        //fill drop down with province value
        tdg.cid.convert_province_to_code(selected_language);
    }

    //clear extra - that appear over the province field
    document.getElementById("ovs_address1_province").nextSibling.innerHTML = "";

    if ($("#printSummary").length <= 0) {
        printSummary();
    }

    $("#address1_line2").attr("placeholder", "");
    $("#address1_line3").attr("placeholder", "");
    $("#telephone1").attr("placeholder", "");
    $("#fax").attr("placeholder", "");
    $("#websiteurl").attr("placeholder", "");

    subgrid_language();

    $('table').each(function () {
        var selectedTable = $(this);
        if (selectedTable.attr('data-name').includes('_readonly')) {
            selectedTable.find("tr").each(function () {
                $(this).css("background-color", "#F0F0F0");
            });
        }
    });
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

    var entityList = $(".entity-grid");
    var companynaicscode = tdg.c.subgrid_index(entityList, "cid_account_companynaicscode");
    if (companynaicscode != null) {
        tdg.cid.subgrid_companynaicscode(companynaicscode);
    }
}
