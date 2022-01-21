
if (window.jQuery) {
   (function ($) {
        webFormClientValidate = function() {
          var validation = false;
		  
			var value = $('#cid_iscompanyattested_1').val();

            if (value == null || value == 0) {
                validation = false;
            }
            else{
                validation = true;
            }
            return validation; 
        }
   }(window.jQuery));
}