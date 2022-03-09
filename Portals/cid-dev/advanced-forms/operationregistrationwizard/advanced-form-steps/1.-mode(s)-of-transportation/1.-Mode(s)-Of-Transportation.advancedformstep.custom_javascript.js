if (window.jQuery) {
   (function ($) {
        webFormClientValidate = function() {
            var validation = true;
            var errorMessage = "";

            var rows = $("#mode_of_transportations .view-grid table").find("tbody > tr");
			if (rows.length <= 0) {
			    errorMessage = "You cannot proceed before adding at least one mode of transportation.";
			    validation = false;
			}

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