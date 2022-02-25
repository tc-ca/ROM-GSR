if (window.jQuery) {
   (function ($) {
      if (typeof (webFormClientValidate) != 'undefined') {
         var originalValidationFunction = webFormClientValidate;
         if (originalValidationFunction && typeof (originalValidationFunction) == "function") {
            webFormClientValidate = function() {
               originalValidationFunction.apply(this, arguments);
               // do your custom validation here
               // return false; // to prevent the form submit you need to return false
               // end custom validation.
               return false;
            };
         }
      }
   }(window.jQuery));
}