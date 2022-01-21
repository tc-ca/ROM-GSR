if (window.jQuery) {
   (function ($) {
        webFormClientValidate = function() {
          var validation = false;

          var rows = $("#operation_classes .view-grid table").find("tbody > tr");

          if (rows.length <= 0) {
                alert('You cannot proceed before adding classes(s).');
          }
          else{
                validation = true;
          }
          return validation; 
        }
   }(window.jQuery));
}