$(document).ready(function() {
    if ($("#backToCompanyWizard").length <= 0)
        $('#mainContent').prepend("<div id='backToCompanyWizard' class='input-group pull-left'><p><a href='~/en-US/RegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Company Registration Wizard</a><br><br></p></div>");
});

if (window.jQuery) {
   (function ($) {
        webFormClientValidate = function() {
          var validation = false;

          var rows = $("#Modes_Of_Transportation .view-grid table").find("tbody > tr");

          if (rows.length <= 0) {
                alert('You cannot proceed before adding at least one mode of transportation.');
          }
          else{
                validation = true;
          }
          return validation; 
        }
   }(window.jQuery));
}