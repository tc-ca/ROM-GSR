$(document).ready(function() {
      if ($("#backToSiteWizard").length <= 0)
        $('#mainContent').prepend("<div id='backToSiteWizard' class='input-group pull-left'><p><a href='~/en-US/SiteRegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Site Registration Wizard</a><br><br></p></div>");
});

if (window.jQuery) {
   (function ($) {
        webFormClientValidate = function() {
          var validation = false;
var errorMessage = "";
          var rows = $("#operation_un_numbers .view-grid table").find("tbody > tr");

          if (rows.length <= 0) {
                validation = false;
                errorMessage = "You cannot proceed before adding UN Number(s).";
                //alert('You cannot proceed before adding UN Number(s).');
          }
          //else{
            //    validation = true;
          //}

          
                                   if(!validation)
    {
    $('#ValidationSummaryEntityFormView div').remove(); 

   var validationSection = $('#ValidationSummaryEntityFormView');
   
   validationSection.append($("<div class='notification alert-danger' role='alert'>"+ errorMessage + "</div>"));  
  validationSection.show();
    }

          return validation; 
        }
   }(window.jQuery));
}