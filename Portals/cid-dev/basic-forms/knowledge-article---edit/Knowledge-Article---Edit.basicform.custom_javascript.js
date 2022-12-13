$(document).ready(function ()
{
	var title = $("input[aria-label='Title']").val(); 
    var content = $("table[data-name='Knowledge Information']").find('textarea').text();
	var description = $("#description").text();
	var htmlContent = "<div style='padding: 40px;'><label>Title:</label></br>" + title + "</br></br>" + 
	"<label>Description:</label></br>" + description + "</br></br>" + 
	"<label>Content:</label></br>" + content + "</div>";

	$("#content-container").after(htmlContent);
	$("#content").hide();
});