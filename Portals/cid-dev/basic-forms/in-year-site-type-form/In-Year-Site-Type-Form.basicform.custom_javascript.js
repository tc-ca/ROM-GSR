$(document).ready(function () {
    debugger;

        var msg = tdg.error_message.message("m000027");
        var html = "<div id='switchSiteType' role='group' ><a href='~/OperationRegistrationWizard/in_year=true'><input id='switchSiteTypeButton' type='button' name='switchSiteType' value='Switch Site Type' class='btn btn-primary button submit-btn' nonactionlinkbutton='true'></a></div>";
        html = html.replaceAll("{0}", msg);
        $('div[data-name="site_type_tab"]').parent().parent().find("#UpdateButton").parent().after(html);
        
    });