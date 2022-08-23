// AnnualComplianceUpdate.js

$(document).ready(function () {
    var parentcustomerid = '{{user.parentcustomerid}}';

    if (parentcustomerid == "") {
        var regurl = "~/RegistrationWizard";
        var registerationURL = regurl;
        window.location.href = registerationURL;
        return;
    }
});