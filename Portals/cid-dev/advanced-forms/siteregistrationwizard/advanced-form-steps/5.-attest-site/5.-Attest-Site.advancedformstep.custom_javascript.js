$(document).ready(function() {
    $('#PreviousButton').on('click', async function () {
        ow.location.href = "~/en-US/OperationRegistrationWizard";
    });

    $('table').each(function () {
        var selectedTable = $(this);
        if(selectedTable.attr('data-name').includes('_readonly')){
            selectedTable.find("tr").each(function () {
		        $(this).css("background-color", "#F0F0F0");
            });
        }
	});
 //   	if ($("#printSummary").length <= 0)
 //       $('#ValidationSummaryEntityFormView').after("<br><div id='printSummary' class='input-group pull-right'><input type='button' value='Print Summary' onclick='window.print();' class='btn btn-primary button next submit-btn'></div>");
    if ($("#printSummary").length <= 0)
        $("#NextButton").after("<div id='printSummary' role='group' class='btn-group entity-action-button'><input type='button' name='PrintButton' value='Print Summary' onclick='window.print();' class='btn btn-primary button next submit-btn' nonactionlinkbutton='true'></div>");

});

if (window.jQuery) {
 (function ($) {
    webFormClientValidate = function() {
        var validation = true;
        var siteId = $("#EntityFormView_EntityID").val();
        var errorMessage = "";
       
		//Classes validation
		if(!SiteHasOperationClasses(null, siteId)){
            errorMessage = errorMessage + "You cannot proceed before adding classes(s).</br>";
            validation = false;
        }

		//UN Numbers validation
        var isExtendedSite = $("#cid_requirementlevel").find(":selected").text();

		if(IsExtendedSite == 'Basic' && !SiteHasOperationUNNumbers(null, siteId)){
            errorMessage = errorMessage + "You cannot proceed before adding UN Number(s).</br>";
            validation = false;
        }

        if (!validation){
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