//
// Basic Form-In Year Company History Log.js
//

$(document).ready(function () {
    debugger;

    $("#cid_registrationasof").parent().parent().hide();

    var companyName = tdg.c.replace_special_char("{{user.parentcustomerid.name}}");
    var msg = tdg.error_message.message("m000160");
    $(".tab-title").text(msg + companyName);

    $(".entity-grid").on("loaded", function () {
        var lang = '{{website.selected_language.code}}';

        if (lang == "en"){
            $(this).find("tbody tr, thead tr").children(":nth-child(4)").hide()
            $(this).find("tbody tr, thead tr").children(":nth-child(6)").hide()
        }
        else{
            $(this).find("tbody tr, thead tr").children(":nth-child(3)").hide()
            $(this).find("tbody tr, thead tr").children(":nth-child(5)").hide()
        }

        $(this).find("tbody").find("tr").each(function () {
	        var trElement = $(this);

	        trElement.find("td").each(function () {
		        var tdElement = $(this);
               
                if ((tdElement.attr('data-attribute') == 'cid_memoenglish' && lang == "en") || (tdElement.attr('data-attribute') == 'cid_memofrench' && lang == "fr")) {
                    tdElement.after('<td>'+ tdElement.text() +'</td>');
                    tdElement.hide();
                }
            });
        });
    });
});