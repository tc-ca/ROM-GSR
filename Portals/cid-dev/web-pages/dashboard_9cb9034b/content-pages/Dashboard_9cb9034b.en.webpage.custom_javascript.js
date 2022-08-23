$(document).ready(function () {
	var companyName = '{{user.parentcustomerid.name }}';
	var header = $('.page-header h1');
	var breadcrumb = $('.breadcrumb');

	if(companyName){
		//if(header)
		//	header.text(header.text() + " " + companyName);
		if(breadcrumb){
			var closestParent = breadcrumb.closest('div');
			//var newDiv = document.getElementById("<div>TDG Site Registration Database: " + companyName + "</div>");
			//closestParent.append($("<div><h2>TDG Site Registration Database: " + companyName + "</h2></div>"));
		}
	}
});