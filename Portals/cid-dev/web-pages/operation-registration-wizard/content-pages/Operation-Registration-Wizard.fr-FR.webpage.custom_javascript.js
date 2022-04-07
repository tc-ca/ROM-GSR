$(document).ready(function() {
      //if ($("#backToSiteWizard").length <= 0)
      //  $('#mainContent').prepend("<div id='backToSiteWizard' class='input-group pull-left'><p><a href='~/en-US/SiteRegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Site Registration Wizard</a><br><br></p></div>");

      var companyName = '{{user.parentcustomerid.name }}';
      var header = $('.page-header h1');
	if(companyName != null && header != null)
		header.text(header.text() + ' - ' + companyName);

  var instructionBtns = $(".instruction-btn");

  if (instructionBtns.length > 0)
    instructionBtns.click(function(){ alert('Sélectionnez le bouton identique ci-dessous'); });  
});