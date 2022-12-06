$(document).ready(function ()
{
	debugger;
	$(".breadcrumb li").each(function ()
	{
		if ($(this).text() == '\n  Inscription au site\n ' && sessionStorage.getItem('frominyearsites'))
		{
			var bredcrumb = $(this);
			bredcrumb.text('\n My Sites\n');
			bredcrumb[0].innerHTML = "\n  <a href=\"/my-sites/\" title=\"Mes sites\">Mes sites</a>\n ";
		}
	});
});