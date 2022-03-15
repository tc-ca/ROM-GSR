if (window.jQuery) {
   (function ($) {
        webFormClientValidate = function() {
            var validation = true;
            var errorMessage = "";

            var urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('id')) {
                var operationId = urlParams.get('id');

          //var rows = $("#operation_classes .view-grid table").find("tbody > tr");

          //if (rows.length <= 0) {
          //      //alert('You cannot proceed before adding classes(s).');
          //      validation = false;
          //      errorMessage = "You cannot proceed before adding classes(s).";
          //}
				if(!SiteHasOperationClasses(operationId, null)){
					errorMessage = "You cannot proceed before adding classes(s).";
					validation = false;
				}
			}

            if(!validation){
				$('#ValidationSummaryEntityFormView div').remove(); 

				var validationSection = $('#ValidationSummaryEntityFormView');
   
                validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
                validationSection.show();
				$('#alertMessages').focus();
			}
            else{
                if(!IsExtendedSite(operationId, null)){
                    OperationDetailsProvided(operationId, true);
                }
            }
			return validation; 
        }
   }(window.jQuery));
}

async function OperationDetailsProvided(operationId, flag){
    await UpdateOperationDetailsProvided(operationId, flag);
}