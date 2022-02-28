$(document).ready(function () {
	var companyName = '{{user.parentcustomerid.name }}';
	var header = $('.page-header h1');
	var startStep = $('ol.progress > li').first();//$(".progress li:first");
	testFunc();
	if(companyName)
	{
		if(header)
			header.text(header.text() + ' - ' + companyName);
		if(startStep)
		{
			startStep.css('background-color', '#eaebed');
			startStep.css('color', 'grey');
		}
	}

    var instructionBtns = $(".instruction-btn");

    if (instructionBtns.length > 0)
	    instructionBtns.click(function(){ alert('Choose the same named button found below'); });
});