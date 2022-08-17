//
// Web Page-Profile.js
//
$(document).ready(function () {
    debugger;

    var parent_id = '{{user.parentcustomerid.Id}}';
    var filter = "accountid eq guid'" + parent_id + "'";
    var data = tdg.c.OData_List("account", filter)
    var cid_cidcompanystatus = data[0].cid_cidcompanystatus.Value;
    if (cid_cidcompanystatus == 100000005)  // Active: Registration complete, part of CID Reporting
    {
	    tdg.c.weblink_hide("/RegistrationWizard/");
	    tdg.c.weblink_hide("/Bulk_Site_Upload/");
    }
    else {
	    tdg.c.weblink_hide("/company_dashboard/");
	    tdg.c.weblink_hide("/Bulk_Site_Update/");
    }

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    // resize WebResource_address_complete
    //$("#WebResource_address_complete").height('72px');
    $("#emailaddress1").width('100%');

    $("#telephone1").attr("placeholder", "");
    $("#mobilephone").attr("placeholder", "");

    tdg.c.addValidator("emailaddress1");
    $('#emailaddress1').attr("readonly", true);

    $("#firstname").attr("autocomplete", "new-password");
    $("#lastname").attr("autocomplete", "new-password");
    $("#emailaddress1").attr("autocomplete", "new-password");
    $("#telephone1").attr("autocomplete", "new-password");
    $("#mobilephone").attr("autocomplete", "new-password");
    $("#fax").attr("autocomplete", "new-password");
});

