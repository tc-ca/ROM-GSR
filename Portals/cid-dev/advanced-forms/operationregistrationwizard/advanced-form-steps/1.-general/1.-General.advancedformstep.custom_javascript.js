$(document).ready(function() {
    if ($("#backToSiteWizard").length <= 0)
        $('#mainContent').prepend("<div id='backToSiteWizard' class='input-group pull-left'><p><a href='~/en-US/SiteRegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Site Registration Wizard</a><br><br></p></div>");
});