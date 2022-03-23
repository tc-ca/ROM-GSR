$(document).ready(function () {
	var companyName = '{{user.parentcustomerid.name }}';
	var header = $('.page-header h1');
	//var startStep = $('ol.progress > li').first();

	if(companyName)
	{
		if(header)
			header.text(header.text() + ' - ' + companyName);
		//if(startStep)
		//{
		//	startStep.css('background-color', '#eaebed');
		//	startStep.css('color', 'grey');
		//}
		var companyid = '{{user.parentcustomerid.id}}';

		var  company_status = "{{entities.account['20e6041a-3610-453f-af55-009e75690d3f'].cid_cidcompanystatus.value}}";

		if(company_status == '100000005'){
			window.location.href = "~/registration";
		}
	}

    var instructionBtns = $(".instruction-btn");

    if (instructionBtns.length > 0)
	    instructionBtns.click(function(){ alert('Choose the same named button found below'); });
});