$(document).ready(function () {
    debugger;

//alert($("#companyAnniversaryDate").val()); 
//alert($('#cid_companyanniversarydate').val());

    var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has('firsttime')) {
        var firstTime = urlParams.get('firsttime')

        if(firstTime == "true"){
            var companyAnniversaryDate = $('#cid_companyanniversarydate').val();

            if(companyAnniversaryDate == ""){
                var todayDate = new Date();
                var dueDate = new Date(todayDate);
                dueDate.setDate(todayDate.getDate() + 365);

                companyAnniversaryDate = dueDate.getFullYear() + "-" + (dueDate.getMonth() + 1) + "-" + dueDate.getDate();
            }

            var message = tdg.error_message.message("m000030");
            message = message.replace("{0}", companyAnniversaryDate.substring(0, 10));
	        tdg.c.dialog_OK(message);
        }
    }
});