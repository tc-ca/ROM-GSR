$(document).ready(function () {
    debugger;

    var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();
    var activationButon = $("#EntityFormPanel").find(".workflow-link");

    if (cidCompanyStatus.indexOf("Inactive") < 0) {
        activationButon.hide();
    }
    else {
        activationButon.css("color", "#000000");
        activationButon.css("background-color", "#4CAF50");
    }

	var updateCompanyBtn = "<div><input id='update_company' type='button' onclick='alert('Test')' name='UpdateCompany' value='Update Company' class='btn btn-primary action create-action' nonactionlinkbutton='true'/></div>";
    var companyName  = "{{user.parentcustomerid.name}}";
    $( ".form-custom-actions" ).first().parent().after(updateCompanyBtn);

    $('div[data-name="company_details"]').parent().before("<h2>" + companyName +"</h2><hr>");
    var legend = $('fieldset[aria-label="Head Office"] legend').first();
    legend.text("");
    legend.after("<h2>"+ companyName + " - Head Office</h2><hr>");

    $('div[data-name="tab_3"]').parent().parent().addClass("hidden");

	$("#cid_registrationasof").parent().parent().hide();
 	var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();
    var deactivateCompanyWebLink = $('a[href*="deactivate-company"]');
    
    if (cidCompanyStatus.indexOf("Inactive") >= 0) {
        deactivateCompanyWebLink.addClass("hidden");
    }
    else{
        deactivateCompanyWebLink.removeClass("hidden");
    }
    
    var topNav = $('#navbar');
    if (topNav) {
        var companyName = $("#ovs_legalname").val();
        var value = tdg.error_message.message("m000106");
        value = value.replace("{0}", companyName);
        $(value).insertAfter(topNav);
    }

	$("legend").each(function() {
		$(this).removeClass();
		$(this).css("font-size", "20px");
		$(this).css("font-weight", "bold");
        $(this).css("text-decoration", "underline");
    });

   var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    // address
    tdg.cid.address_init(false);

    tdg.cid.WebResource_address_complete_readonly(false);

    tdg.c.control_hide("cid_reasonfornobnnumber_other");

    //Phone number formatting
    tdg.cid.phone_init("telephone1", selected_language);
    tdg.cid.phone_init("fax", selected_language);

    var cid_has_cra_bn = ($('#cid_crabusinessnumber').val() != "" ? "1" : "0");
    var cid_reasonfornobnnumber = $('#cid_reasonfornobnnumber').val();

    tdg.c.control_hide("cid_has_cra_bn");

    // do not have a business number?
    if (cid_has_cra_bn != "1") {
        tdg.c.control_hide("cid_crabusinessnumber");
        tdg.c.control_show("cid_reasonfornobnnumber");

        if (cid_reasonfornobnnumber == "3")   // other
        {
            tdg.c.control_show("cid_reasonfornobnnumber_other");
        }
        else {
            tdg.c.control_hide("cid_reasonfornobnnumber_other");
        }
    }
    else {
        tdg.c.control_show("cid_crabusinessnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber_other");
    }

    $('#cid_crabusinessnumber').attr("readonly", true);
    $('#ovs_legalname').attr("readonly", true);
    $('#cid_reasonfornobnnumber').attr("readonly", true);
    $('#cid_reasonfornobnnumber').css("pointer-events", "none");
    $('#cid_reasonfornobnnumber_other').attr("readonly", true);


    $('#address1_country').attr("readonly", true);

	var address1_stateorprovince = tdg.c.replace_special_char("{{user.address1_stateorprovince}}");
	$("#address1_stateorprovince").val(address1_stateorprovince);
	tdg.cid.convert_province_to_code(selected_language);

	if ($("#cid_addressoverwritten").val() == 0) { $("#ovs_address1_province").prop('disabled', true); }
	else { $("#ovs_address1_province").prop('disabled', false); }



        subgrid_language();

        	//Add listeners for the address fields to change the "manually entered" flag
	$("#address1_line1").attr("oninput", "setManualAddressEntryFlag()");
	$("#address1_city").attr("oninput", "setManualAddressEntryFlag()");
	$("#address1_stateorprovince").attr("oninput", "setManualAddressEntryFlag()");
	$("#address1_postalcode").attr("oninput", "setManualAddressEntryFlag()");
	$("#address1_country").attr("oninput", "setManualAddressEntryFlag()");

    $("#cid_iscompanyattested").val(1);
    //$("#cid_iscompanyattested").prop( "checked", true );

    $("#cid_iscompanyattested").parent().parent().parent().addClass("hidden");

});

function subgrid_language() {
    debugger;
    var entityList = $(".entity-grid");
    var companynaicscode = tdg.c.subgrid_index(entityList, "cid_account_companynaicscode");
    if (companynaicscode != null) {
        tdg.cid.subgrid_companynaicscode(companynaicscode);
   }
}

function setManualAddressEntryFlag() {
	$("#cid_addressoverwritten").val(1);
}

//function page_setup() {
//	var selected_language = '{{website.selected_language.code}}';
//	sessionStorage.setItem("selected_language", selected_language);

//	const files = ["/tdgcore_common.js", "/tdgcore_message.js"];
//	for (var i = 0; i < files.length; i++) {
//		var file = files[i];
//		var script = document.createElement('script');
//		script.type = 'text/javascript';
//		script.src = file;

//		$("body").append(script);
//	}

	// server error?
//	tdg.c.message_panel();
//}