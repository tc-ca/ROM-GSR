//
// Web Page-Profile.js
//

$(document).ready(function () {
    debugger;

    page_setup();
    //remove heading role and aria-level not allowed role for legend by accessbility check
     $( 'legend[role="heading"]' ).removeAttr('aria-level').removeAttr("role");

    //redirect to my company after save success
    var msg = tdg.error_message.message("m000147");
    if (msg != null) {
        sessionStorage.setItem("profile_msg", msg);
    }
    if ($('#ContentContainer_MainContent_MainContent_ContentBottom_ConfirmationMessage').find('.xrm-attribute-value').length > 0 &&
        $('#ContentContainer_MainContent_MainContent_ContentBottom_ConfirmationMessage').find('.xrm-attribute-value')[0].innerHTML.contains(sessionStorage.getItem("profile_msg"))) // "Your profile has been updated successfully"
    {
        //window.location.href = '~/my-company/';
        window.location.href = '~/';
    }

    //disable submit button by default  
    $('#ContentContainer_MainContent_MainContent_ContentBottom_SubmitButton').attr("disabled", true);
    if ($("#telephone1").val() != "" && $("#firstname").val() != "" && $("#lastname").val() != ""  && $("#cid_languageofcorrespondence").val() != "") {
        $('#ContentContainer_MainContent_MainContent_ContentBottom_SubmitButton').attr("disabled", false);
    }
    //phone number change event
    $('#telephone1').change(function () {
        if ($("#telephone1").val() != "") {
            $('#ContentContainer_MainContent_MainContent_ContentBottom_SubmitButton').attr("disabled", false);
        }
        else {
            $('#ContentContainer_MainContent_MainContent_ContentBottom_SubmitButton').attr("disabled", true);
        }
    });

    //language of correspondence change event
    $('#cid_languageofcorrespondence').change(function () {
        if ($("#cid_languageofcorrespondence").val() != "") {
            $('#ContentContainer_MainContent_MainContent_ContentBottom_SubmitButton').attr("disabled", false);
        }
        else {
            $('#ContentContainer_MainContent_MainContent_ContentBottom_SubmitButton').attr("disabled", true);
        }
    });

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    tdg.c.control_hide("cid_contacttype");

    tdg.c.addValidator("telephone1");
    tdg.c.addValidator("emailaddress1");

    var parent_id = '{{user.parentcustomerid.Id}}';

    //hide page header
    const PageHeaderElement = document.getElementsByClassName("page-header");
    PageHeaderElement[0].setAttribute("hidden", "");
    //get security section div
    const SecuritySection = document.getElementsByClassName("panel panel-default nav-profile");
    SecuritySection[0].setAttribute("hidden", "");

    //add bottom to profile link in page-heading
    const PageheadingElement = document.getElementsByClassName("page-heading");
    PageheadingElement[0].style.marginBottom = "10px";
    //add margin to update button
    const UpdateButtonElement = document.getElementById("ContentContainer_MainContent_MainContent_ContentBottom_SubmitButton");
    UpdateButtonElement.style.marginTop = "10px";

    //Phone number formatting
    tdg.cid.phone_init("telephone1", selected_language);
    tdg.cid.phone_init("mobilephone", selected_language);
    tdg.cid.phone_init("fax", selected_language);

    //Name formatting
    tdg.cid.name_init("firstname");
    tdg.cid.name_init("lastname");

    
     //add Privace Statement
     var privaceStatementLabelPre = tdg.error_message.message("PRIV_STMT1");
     var privaceStatementLabelPost = tdg.error_message.message("PRIV_STMT2");
     var psUrl = window.location.origin + "/registration/privacystatement"; 
     $("table.section").after('<div style="padding-left: 20px;padding-top: 10px;" ><input type="checkbox" name="PrivaceStatement" id="privacestatement" name="privacestatement"/><label for="privacestatement" style="font-weight: 200; padding: 0 8px;"><p>'+ privaceStatementLabelPre + '<a href="' + psUrl +'" target="_blank">' + privaceStatementLabelPost + '</a>.</p></label><br></div>');
     $("#privacestatement").css("padding", "0 23px");


    var data = {};
    data.length = 0;

    if (parent_id != "") {
        var data = tdg.webapi.SelectedColumnlist("accounts",
            "cid_cidcompanystatus,cid_officiallyregistrationcompletationdate",
            "accountid eq " + parent_id);
    }

    if (data.length == 0) {
        tdg.c.weblink_hide("/RegistrationWizard/");
        tdg.c.weblink_hide("/Bulk_Site_Upload/");
        tdg.c.weblink_hide("/company_dashboard/");
        tdg.c.weblink_hide("/Bulk_Site_Update/");
    }
    else {
        var cid_cidcompanystatus = data[0]['cid_cidcompanystatus'];
        var completionDate = data[0]['cid_officiallyregistrationcompletationdate'];

        if (completionDate != "" && completionDate != null) {
            tdg.c.weblink_hide("/RegistrationWizard/");
            tdg.c.weblink_hide("/Bulk_Site_Upload/");
        }
        else {
            tdg.c.weblink_hide("/company_dashboard/");
            tdg.c.weblink_hide("/Bulk_Site_Update/");
        }
    }

    $("#emailaddress1").width('100%');
    $('#emailaddress1').attr("readonly", true);

    $("#firstname").attr("autocomplete", "new-password");
    $("#lastname").attr("autocomplete", "new-password");
    $("#emailaddress1").attr("autocomplete", "new-password");
    $("#telephone1").attr("autocomplete", "new-password");
    $("#mobilephone").attr("autocomplete", "new-password");
    $("#fax").attr("autocomplete", "new-password");

    // default primary if 1st time
    var firstname = $("#firstname").val();
    if (firstname == "") {
        $("#cid_contacttype").val(100000000);
    }

    //Remove email link
    var checkEmaillinkExist = setInterval(function () {
        if ($(".text-primary").hasClass("text-primary")) {
            $(".text-primary").css({ "cursor": "text" });
            $(".text-primary").removeAttr("href");
            clearInterval(checkEmaillinkExist);
        }
    }, 100); // check every 100ms

});

function page_setup() {
    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    const files = ["/tdgcore_common.js", "/tdgcore_message.js"];
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = file;

        $("body").append(script);
    }
}
