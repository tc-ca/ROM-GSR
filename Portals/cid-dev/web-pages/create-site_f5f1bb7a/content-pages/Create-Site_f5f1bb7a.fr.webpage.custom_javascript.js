$(document).ready(function ()
{
	debugger;
    tdg.c.weblink_hide("/RegistrationWizard/");
	tdg.c.weblink_hide("/Bulk_Site_Upload/"); 

	$(".breadcrumb li").each(function ()
	{
		if ($(this).text() == '\n  Inscription au site\n ' && sessionStorage.getItem('frominyearsites') == "true")
		{
			var bredcrumb = $(this);
			bredcrumb.text('\n My Sites\n');
			bredcrumb[0].innerHTML = "\n  <a href=\"/my-sites/\" title=\"Mes sites\">Mes sites</a>\n ";
		}
	});
});