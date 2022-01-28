if (window.jQuery) {
   (function ($) {
        webFormClientValidate = function() {
          var validation = false;

          var rows = $("#CompanyNAICSCodes .view-grid table").find("tbody > tr");

          if (rows.length <= 0) {
                alert('You cannot proceed before adding company NAICS code(s).');
          }
          else{
                validation = true;
          }
          return validation; 
        }
   }(window.jQuery));
}