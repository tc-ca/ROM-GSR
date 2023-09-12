//
// Web Page-Operation Registration Wizard.js
//

$(document).ready(function () {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    sessionStorage.setItem('to_actvt_stp', 'false');
    sessionStorage.setItem('to_oprtn_wzrd', 'false');

    var urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('siteid')) {
        var siteId = urlParams.get('siteid');

        if (!urlParams.has('in_year') || urlParams.get('in_year') != "true") {

            if ($("#backToActivityTypesStep").length > 0) {
                $('#mainContent').remove();
            }
            var msg = tdg.error_message.message("m000108");
            var text = "<div id='backToActivityTypesStep' class='input-group pull-left'><p><input type='button' id='backToActivityTypes' name='Back' value='' class='btn btn-primary button next submit-btn' nonactionlinkbutton='true'><br><br></p></div>";
            $('#mainContent').prepend(text);
            $("#backToActivityTypes")[0].value = msg;

            $("#backToActivityTypes").click(function () {
                sessionStorage.setItem('to_actvt_stp', 'true');
                window.location.href = "~/SiteRegistrationWizard/?id=" + siteId;
            });
            tdg.c.weblink_hide("/RegistrationWizard/");
            tdg.c.weblink_hide("/Bulk_Site_Upload/");
            tdg.c.weblink_show("/company_dashboard/");
            tdg.c.weblink_show("/Bulk_Site_Update/");
        }

        if (sessionStorage.getItem('frominyearsites') == "true" || sessionStorage.getItem('fromannualcompliance') == 'true') {
            tdg.c.weblink_hide("/RegistrationWizard/");
            tdg.c.weblink_hide("/Bulk_Site_Upload/");
        }
        else {
            tdg.c.weblink_hide("/company_dashboard/");
            tdg.c.weblink_hide("/Bulk_Site_Update/");
        }
    }

    header_setup();

    var instructionBtns = $(".instruction-btn");

    if (instructionBtns.length > 0) {
        instructionBtns.click(function () {
            var msg = tdg.error_message.message("m000010");	// Choose the same named button found below
            tdg.c.dialog_OK(msg);
        });
    }

    $("legend").each(function () {
        $(this).removeClass();
        $(this).css("font-size", "24px");
        $(this).css("font-weight", "bold");
    });

    window.triggerUpdate = function () {
        console.log('hi in trigger');
        //TODO Add logic for refreshing the data in the subgrid (or page if subgrid is not doable)
    }
});

function header_setup() {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    var urlParams = new URLSearchParams(window.location.search);

    try {
        var code = "m000024";
        var site_id = urlParams.get('siteid');
        filter = "accountid eq " + site_id ;
        var account = tdg.webapi.SelectedColumnlist("accounts", "cid_sitename", filter);
        var cid_sitename = ""
        if (account.length > 0) {
            var cid_sitename = account[0].cid_sitename;
        }
        var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name}}');
        if (cid_sitename != null) {
            companyName += " - " + cid_sitename;
        }
        var value = tdg.error_message.message(code);
        value = value.replace("{0}", companyName);
        $('.page-header h1').text(value);
    } catch (e) { }
}
