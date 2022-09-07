$(document).ready(function () {
    var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();

    if (cidCompanyStatus.indexOf("Inactive") >= 0){       
        $(".submit-btn").prop("disabled", true); 
        $(".create-action").hide();
        $('.crmEntityFormView').find('input, textarea, select').attr('disabled','disabled'); 

        $("#CompanyNAICSCodes").on("loaded", function () {
		    $(this).find("tbody").find("tr").each(function () {
                $(this).find('td:last').remove();
            });
        });

        $("#eraps").on("loaded", function () {
		    $(this).find("tbody").find("tr").each(function () {
                $(this).find('td:last').remove();
            });
        });
    }
});