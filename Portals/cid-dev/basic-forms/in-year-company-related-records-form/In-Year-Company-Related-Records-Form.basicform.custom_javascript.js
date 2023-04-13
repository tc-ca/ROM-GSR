$(document).ready(function () {
    var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();
    tdg.cid.phone_init("telephone1", selected_language);

    Disable_ContactTypeFieldsForSecondaryUser();

    if (cidCompanyStatus.indexOf("Inactive") >= 0){       
        $(".submit-btn").prop("disabled", true); 
        $(".create-action").hide();
        $('.crmEntityFormView').find('input, textarea, select').attr('disabled','disabled'); 

        $("#CompanyNAICSCodes").on("loaded", function () {
		    $(this).find("tbody").find("tr").each(function () {
                $(this).find('td:last').remove();
            });
        });

        //$("#eraps").on("loaded", function () {
		//   $(this).find("tbody").find("tr").each(function () {
        //        $(this).find('td:last').remove();
        //    });
        //});
    }
});

function Disable_ContactTypeFieldsForSecondaryUser() {
	debugger;
	var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
	
	//if not primary contact
	if (cid_usercontacttype != 100000000) {
		$(".create-action").attr("disabled", true);
		$(".create-action").css("pointer-events", "none");
		//Wait till subgrid load
		$("#Contacts").on("loaded", function () {
			$(".btn.btn-default.btn-xs").prop("disabled", true);
			$(".details-link").prop("disabled", true);
			$(".details-link").css("pointer-events", "none");
		});
	}
}