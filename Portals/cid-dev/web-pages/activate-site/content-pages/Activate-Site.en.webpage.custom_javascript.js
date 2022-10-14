//
// Web Page-Activate Site.js
//

$(document).ready(function () {
	debugger;

    $("#cid_siteactivationeffectivedate_datepicker_description").change(function (e) {
        alert('Test1');
    });	
    $("#cid_siteactivationeffectivedate_datepicker_description").change(function(){   // 1st way
        alert('Test2');
    });


    $("#cid_siteactivationeffectivedate_datepicker_description").on('change', function(){    // 2nd way
        alert('Test3');
    });

    $("body").on('change', '#cid_siteactivationeffectivedate_datepicker_description', function(){    // 3rd way
        alert('Test4');
    });

$("#cid_siteactivationeffectivedate_datepicker_description").change(function(){
    alert('Test5');
});


	var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name}}');
	var topNav = $('#navbar');

	if (companyName)
		if (topNav) {
			var msg = tdg.error_message.message("m000108");
			var value = "<h2>{0} - {1}</h2>";
			value = value.replace("{0}", msg);
			value = value.replace("{1}", companyName);
			$(value).insertAfter(topNav);
		}
});
