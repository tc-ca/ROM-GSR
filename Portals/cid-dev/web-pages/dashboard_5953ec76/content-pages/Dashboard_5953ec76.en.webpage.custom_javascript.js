//
// Web Page-Dashboard
//

$(document).ready(function () {
    debugger;

//alert($("#companyAnniversaryDate").val());
    //var urlParams = new URLSearchParams(window.location.search);
//	if (urlParams.has('firsttime')) {
   //     var firstTime = urlParams.get('firsttime')

  //      if(firstTime == "true"){
   //         var companyAnniversaryDate = $('#cid_companyanniversarydate').val();
            
   //         var message = tdg.error_message.message("m000030");
   //         message = message.replace("{0}", companyAnniversaryDate.substring(0, 10));
	//        tdg.c.dialog_OK(message);
   //     }
  //  }

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
