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