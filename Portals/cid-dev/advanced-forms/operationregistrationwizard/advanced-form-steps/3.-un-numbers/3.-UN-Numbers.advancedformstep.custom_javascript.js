$(document).ready(function() {
      if ($("#backToSiteWizard").length <= 0)
        $('#mainContent').prepend("<div id='backToSiteWizard' class='input-group pull-left'><p><a href='~/en-US/SiteRegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Site Registration Wizard</a><br><br></p></div>");
});

if (window.jQuery) {
   (function ($) {
        webFormClientValidate = function() {
          var validation = false;

          var rows = $("#operation_un_numbers .view-grid table").find("tbody > tr");

          if (rows.length <= 0) {
                alert('You cannot proceed before adding UN Number(s).');
          }
          else{
                validation = true;
          }
          return validation; 
        }
   }(window.jQuery));
}