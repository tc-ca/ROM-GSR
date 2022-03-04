if (window.jQuery) {
   (function ($) {
        webFormClientValidate = function() {
           var validation = true;
            var errorMessage = "";

            var urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('id')) {
                var operationId = urlParams.get('id');
				
				
          //var rows = $("#operation_un_numbers .view-grid table").find("tbody > tr");

          //if (rows.length <= 0) {
                //validation = false;
                //errorMessage = "You cannot proceed before adding UN Number(s).";
                //alert('You cannot proceed before adding UN Number(s).');
          //}

          		if(!SiteHasOperationUNNumbers(operationId, null))
				{
					errorMessage = "You cannot proceed before adding UN Number(s).";
					validation = false;
				}
			}
			
            if(!validation)
			{
				$('#ValidationSummaryEntityFormView div').remove(); 

				var validationSection = $('#ValidationSummaryEntityFormView');
		   
                validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
                validationSection.show();
				$('#alertMessages').focus();
			}

          return validation; 
        }
   }(window.jQuery));
}