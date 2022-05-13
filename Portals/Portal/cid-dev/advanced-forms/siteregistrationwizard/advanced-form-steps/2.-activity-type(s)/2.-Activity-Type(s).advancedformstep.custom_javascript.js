if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            var validation = true;
            var errorMessage = "";
            var checkedCheckBoxes = $('[id*="cid_"]:checkbox:checked'); 

			if(checkedCheckBoxes && checkedCheckBoxes.length <= 0)
			{
                errorMessage = "You cannot proceed before selecting the site activity types.";
                validation = false;
            }

            if (!validation) {
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
