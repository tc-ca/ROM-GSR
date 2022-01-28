
if (window.jQuery) {
   (function ($) {
        webFormClientValidate = function() {
          var validation = false;
          $("#Contacts").each(function(){
              if($(this).html().indexOf("Primary") <= -1 || $(this).html().indexOf("Secondary") <= -1){
                alert('You cannot proceed before adding primary and secondary contacts.');
              }
              else{
                validation = true;
              }
            }); 
            return validation; 
        }
   }(window.jQuery));
}