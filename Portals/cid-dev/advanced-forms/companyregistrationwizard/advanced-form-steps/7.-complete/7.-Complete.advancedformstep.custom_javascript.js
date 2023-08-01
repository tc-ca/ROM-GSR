//
// CompanyRegistrationWizard-Complete.js
//

$(document).ready(function () {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);
      console.log ("turn off mode");
      var softLunchmode = "off";
       var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq 'CID_Soft_lunch_mode'");
console.log ("resuts");
        console.log(EnvironmentSettingResult) ; 
            if (EnvironmentSettingResult.length > 0) {
                 softLunchmode = EnvironmentSettingResult[0]["qm_value"];
                 if ( softLunchmode == "ON")
                 {
                     $("#NextButton").attr("disabled", true);
                     var m000207 = tdg.error_message.message("m000207");
                     tdg.c.dialog_OK(m000207);
                         //"Thank you for testing Transport Canada's Client Identification Database (CID). Once CID is officially launched, you will be able to log in and return to this screen to attest and complete your registration.<br><br>Please take a few minutes to complete this anonymous survey: <a href='https://forms.office.com/r/gLEmNr6Wa9'>https://forms.office.com/r/gLEmNr6Wa9</a><br><br>Your feedback will be important in helping us make sure that this application meets the needs of our stakeholders.");
                 }


            }


    //var msg = tdg.error_message.message("BTN_ATTEST_COMPLETE_REG");
    //$("#NextButton")[0].val = msg;

    Disable_ContactTypeFieldsForSecondaryUser();
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

   // tdg.c.control_hide("ovs_name_fr");
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

       var softLunchmode = "off";
       var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq 'Soft lunch mode'");

            if (EnvironmentSettingResult.length > 0) {
                 softLunchmode = EnvironmentSettingResult[0]["qm_value"];
                 if ( softLunchmode == "ON")
                 {
                     $("#NextButton").attr("disabled", true);
                     tdg.c.dialog_OK("Thank you for testing Transport Canada's Client Identification Database (CID). Once CID is officially launched, you will be able to log in and return to this screen to attest and complete your registration.<br><br>Please take a few minutes to complete this anonymous survey: https://forms.office.com/r/gLEmNr6Wa9<br><br>Your feedback will be important in helping us make sure that this application meets the needs of our stakeholders.");
                 }


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

function subgrid_language() {
    debugger;

    var entityList = $(".entity-grid");
    var companynaicscode = tdg.c.subgrid_index(entityList, "cid_account_companynaicscode");
    if (companynaicscode != null) {
        tdg.cid.subgrid_companynaicscode(companynaicscode);
    }
}

function Disable_ContactTypeFieldsForSecondaryUser() {
    debugger;
    var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
    //if not primary contact
    if (cid_usercontacttype != 100000000) {
        $("#NextButton").attr("disabled", true);
        $("#NextButton").css("pointer-events", "none");
    }
}
