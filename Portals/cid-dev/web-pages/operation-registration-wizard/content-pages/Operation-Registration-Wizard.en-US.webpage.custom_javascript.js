//
// Web Page-Operation Registration Wizard.js
//
$(document).ready(function () {
    //var urlParams = new URLSearchParams(window.location.search);
    //if (urlParams.has('siteid')) {
    //	var siteid = urlParams.get('siteid');

    //if ($("#backToSiteWizard").length <= 0)
    //  $('#mainContent').prepend("<div id='backToSiteWizard' class='input-group pull-left'><p><a href='~/en-US/SiteRegistrationWizard/?id=" + siteid + " class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Site Registration Wizard</a><br><br></p></div>");
    //}

    debugger;

    header_setup();

    var instructionBtns = $(".instruction-btn");

    if (instructionBtns.length > 0) {
        var msg = tdg.error_message.message("m000010");	// Choose the same named button found below
        tdg.c.dialog_OK(msg);
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

    try {
        var code = "m000009";
        var companyName = '{{user.parentcustomerid.name}}';
        var value = tdg.error_message.message(code);
        value = value.replace("{0}", companyName);
        $('.page-header h1').text(value);
    } catch (e) { }
}
