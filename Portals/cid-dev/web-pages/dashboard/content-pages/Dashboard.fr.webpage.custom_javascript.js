//
// Web Page-Dashboard
//

$(document).ready(function () {
    debugger;
    // format sign-out's tooltip
	
	$('#cdts-signout-btn').tooltip({
					trigger: 'hover',
					placement: 'right',
					container: 'body'
						});

    sessionStorage.setItem('frominyearsites', 'false');
    sessionStorage.setItem('fromannualcompliance', 'false');
    sessionStorage.setItem('frominyearsitepage', 'false');

    var companyName = "{{user.parentcustomerid.name}}";
    $('div[data-name="tab_5"]').parent().before("<h2>" + companyName + "</h2><hr>");

    var topNav = $('#navbar');
    if (topNav) {
        var companyName = $("#ovs_legalname").val();
        var value = tdg.error_message.message("m000106");
        value = value.replace("{0}", companyName);
        $(value).insertAfter(topNav);
    }

    //tdg.c.control_hide("ovs_name_fr");
    tdg.c.addValidator("ovs_legalnamefr");
    tdg.c.addValidator("ovs_name_fr");

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
