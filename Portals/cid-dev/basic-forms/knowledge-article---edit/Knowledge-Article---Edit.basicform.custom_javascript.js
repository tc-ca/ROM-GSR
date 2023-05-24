//
// Basic Form-Knowledge Article - Edit.js
//

$(document).ready(function ()
{
	debugger;
    page_setup();
	var msg_description = tdg.error_message.message("m000162");
	var msg_content = tdg.error_message.message("m000163");

	var title = $("input[aria-label='Title']").val(); 
    var content = $("table[data-name='Knowledge Information']").find('textarea').text();
	$("table[data-name='Knowledge Information']").find('textarea').attr("id" ,"content2");
	var description = $("#description").text();
	var htmlContent = "<div style='padding: 40px;'><label>Title:</label></br>" + title + "</br></br>" + 
		"<label>" + msg_description + "</label></br>" + description + "</br></br>" +
		"<label>" + msg_content + "</label></br>" + content + "</div>";

	$("#content-container").after(htmlContent);
	$("#content").hide();
});

function page_setup() {
    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    const files = ["/tdgcore_common.js", "/tdgcore_message.js"];
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = file;

        $("body").append(script);
    }

    // server error?
    tdg.c.message_panel();
}