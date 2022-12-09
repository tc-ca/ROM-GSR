// CreateSite.js
$(document).ready(function ()
{
	debugger;
    tdg.c.weblink_hide("/RegistrationWizard/");
	tdg.c.weblink_hide("/Bulk_Site_Upload/"); 

	console.log("document read");
	$(".breadcrumb li").each(function ()
	{
		if ($(this).text() == '\n  Site Registration\n ' && sessionStorage.getItem('frominyearsites'))
		{
			var bredcrumb = $(this);
			bredcrumb.text('\n My Sites\n');
			bredcrumb[0].innerHTML = "\n  <a href=\"/my-sites/\" title=\"My Sites\">My Sites</a>\n ";
		}
	});
});
