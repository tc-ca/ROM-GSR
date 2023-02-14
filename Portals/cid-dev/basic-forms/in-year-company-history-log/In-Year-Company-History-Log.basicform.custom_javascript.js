$(document).ready(function () {	
    $("#cid_registrationasof").parent().parent().hide();

    var companyName = "{{user.parentcustomerid.name}}";
    $(".tab-title").text('History Logs for ' + companyName);
});