$(document).ready(function () {
    var companyName  = "{{user.parentcustomerid.name}}";

    $("#update_company").click(function(){
        $('div[data-name="tab_3"]').parent().parent().removeClass("hidden");
        $('div[data-name="company_details"]').parent().parent().addClass("hidden");
        $('#update_company').parent().addClass("hidden");

        $('div[data-name="tab_3"]').parent().before("<h2>" + companyName +"</h2><hr>");

        var legend2 = $('fieldset[aria-label="Head Office"] legend').eq(1);
        legend2.text("");
        legend2.after("<h2>"+ companyName + " - Head Office</h2><hr>");
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

    // autocomplete off
    $("#name").attr("autocomplete", "new-password");
    $("#telephone1").attr("autocomplete", "new-password");
    $("#fax").attr("autocomplete", "new-password");
    $("#cid_reasonfornobnnumber_other").attr("autocomplete", "new-password");
    $("#websiteurl").attr("autocomplete", "new-password");

        // readonly
    $('#statuscode').attr("readonly", true);
    $('#address1_country').attr("readonly", true);

    subgrid_language();
});

function subgrid_language() {
    debugger;

    var entityList = $(".entity-grid");
    var companynaicscode = tdg.c.subgrid_index(entityList, "cid_account_companynaicscode");
    if (companynaicscode != null) {
        tdg.cid.subgrid_companynaicscode(companynaicscode);
    }
}