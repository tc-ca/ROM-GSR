//
// Basic Form-Knowledge Article - Edit.js
//

$(document).ready(function ()
{
	debugger;

	var msg_description = tdg.error_message.message("m000162");
	var msg_content = tdg.error_message.message("m000163");

	var title = $("input[aria-label='Title']").val(); 
    var content = $("table[data-name='Knowledge Information']").find('textarea').text();
	var description = $("#description").text();
	var htmlContent = "<div style='padding: 40px;'><label>Title:</label></br>" + title + "</br></br>" + 
		"<label>" + msg_description + "</label></br>" + description + "</br></br>" +
		"<label>" + msg_content + "</label></br>" + content + "</div>";

	$("#content-container").after(htmlContent);
	$("#content").hide();
});