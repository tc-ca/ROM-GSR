$(document).ready(function() {
  //var urlParams = new URLSearchParams(window.location.search);
	//if (urlParams.has('siteid')) {
	//	var siteid = urlParams.get('siteid');

    //if ($("#backToSiteWizard").length <= 0)
    //  $('#mainContent').prepend("<div id='backToSiteWizard' class='input-group pull-left'><p><a href='~/en-US/SiteRegistrationWizard/?id=" + siteid + " class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Site Registration Wizard</a><br><br></p></div>");
  //}
  var companyName = '{{user.parentcustomerid.name }}';
  var header = $('.page-header h1');
	if(companyName != null && header != null)
		header.text(header.text() + ' - ' + companyName);

  var instructionBtns = $(".instruction-btn");

  if (instructionBtns.length > 0)
    instructionBtns.click(function(){ alert('Choose the same named button found below'); });

    $("legend").each(function() {
		$(this).removeClass();
		$(this).css("font-size", "24px");
		$(this).css("font-weight", "bold");
    });
    
    window.triggerUpdate = function(){
      console.log('hi in trigger');
      //TODO Add logic for refreshing the data in the subgrid (or page if subgrid is not doable)
    }
});