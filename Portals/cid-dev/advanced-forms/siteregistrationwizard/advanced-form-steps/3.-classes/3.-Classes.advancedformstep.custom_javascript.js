$(document).ready(function() {
    $('#mainContent').prepend("<div class='input-group pull-left'><p><a href='~/en-US/RegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Company Registration Wizard</a><br><br></p></div>");
});


$(document).ready(function() {
    $('#mainContent').prepend("<div class='input-group pull-left'><p><a href='~/en-US/RegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Company Registration Wizard</a><br><br></p></div>");
});

if (window.jQuery) {
   (function ($) {
        webFormClientValidate = function() {
          var validation = false;

          var rows = $("#Site_Classes .view-grid table").find("tbody > tr");

          if (rows.length <= 0) {
                alert('You cannot proceed before adding at least one site class.');
          }
          else{
                validation = true;
          }
          return validation; 
        }
   }(window.jQuery));
}