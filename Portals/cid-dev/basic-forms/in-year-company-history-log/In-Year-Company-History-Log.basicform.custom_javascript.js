$(document).ready(function () {	
    $("#cid_registrationasof").parent().parent().hide();

    var companyName = "{{user.parentcustomerid.name}}";
    $(".tab-title").text('History Logs for ' + companyName);

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