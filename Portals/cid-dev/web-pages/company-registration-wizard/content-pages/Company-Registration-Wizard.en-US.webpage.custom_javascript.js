$(document).ready(function () {
	var companyName = '{{user.parentcustomerid.name }}';
	var header = $('.page-header h1');
	//var startStep = $('ol.progress > li').first();

	if(companyName)
	{
		if(header)
			header.text(header.text() + ' for ' + companyName);
		//if(startStep)
		//{
		//	startStep.css('background-color', '#eaebed');
		//	startStep.css('color', 'grey');
		//}
		var companyid = '{{user.parentcustomerid.id}}';
		var  company_status = "{{entities.account[user.parentcustomerid.id].cid_cidcompanystatus.value}}";

		if(company_status == '100000005'){
			window.location.href = "~/dashboard";
		}
	}

    var instructionBtns = $(".instruction-btn");

    if (instructionBtns.length > 0)
	    instructionBtns.click(function(){ alert('Choose the same named button found below'); });

    $("legend").each(function() {
		$(this).removeClass();
		$(this).css("font-size", "24px");
		$(this).css("font-weight", "bold");
    });
});