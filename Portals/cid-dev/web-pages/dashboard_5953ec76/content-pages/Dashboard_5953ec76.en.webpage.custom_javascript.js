//
// Web Page-Dashboard
//

$(document).ready(function () {
    debugger;

    var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('firsttime')) {
        var firstTime = urlParams.get('firsttime')

        if(firstTime == "true"){
            message = "The registration of your Company in the CID Data Platform is now complete. " +
            "An email has been sent to your address, confirming the completion of the registration." +
            "<br><br>You are currently in the initial in-year page, which will be your starting page for each future CID session.";//tdg.error_message.message("m000000");
	        tdg.c.dialog_OK(message);
        }
    }

    var topNav = $('#navbar');
    if (topNav) {
        var companyName = $("#ovs_legalname").val();
        var value = tdg.error_message.message("m000106");
        value = value.replace("{0}", companyName);
        $(value).insertAfter(topNav);
    }

    var cid_crabusinessnumber = $('#cid_crabusinessnumber').val();
    if (cid_crabusinessnumber != "") {
        tdg.c.control_hide("cid_reasonfornobnnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber_other");
    }
    else {
        tdg.c.control_hide("cid_crabusinessnumber");
        var cid_reasonfornobnnumber = $('#cid_reasonfornobnnumber').val();

        if (cid_reasonfornobnnumber == "3")   // other
        {
            tdg.c.control_show("cid_reasonfornobnnumber_other");
        }
        else {
            tdg.c.control_hide("cid_reasonfornobnnumber_other");
        }
    }
});
