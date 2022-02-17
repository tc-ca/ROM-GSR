
if (window.jQuery) {
   (function ($) {
        webFormClientValidate = function() {
          var validation = false;
          var errorMessage = "";
          $("#Contacts").each(function(){
              if($(this).html().indexOf("Primary") <= -1 || $(this).html().indexOf("Secondary") <= -1){
                //alert('You cannot proceed before adding primary and secondary contacts.');
                validation = false;
                errorMessage = "You cannot proceed before adding primary and secondary contacts.";
              }
              else{
                validation = true;
              }
            }); 

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