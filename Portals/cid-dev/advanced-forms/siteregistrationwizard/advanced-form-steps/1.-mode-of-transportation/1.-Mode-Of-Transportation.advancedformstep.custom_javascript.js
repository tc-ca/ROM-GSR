$(document).ready(function() {
    if ($("#backToCompanyWizard").length <= 0)
        $('#mainContent').prepend("<div id='backToCompanyWizard' class='input-group pull-left'><p><a href='~/en-US/RegistrationWizard' class='entitylist-create btn btn-info pull-right action' title='Back'>Back to Company Registration Wizard</a><br><br></p></div>"); 
});

if (window.jQuery) {
   (function ($) {
        webFormClientValidate = function() {
            var validation = false;
            var errorMessage = "";

            var urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('id')) {
                var siteid = urlParams.get('id');
                //var data = await site_has_mode_of_transportation(siteid);

                var rows = $("#Modes_Of_Transportation .view-grid table").find("tbody > tr");

          if (rows.length <= 0) {
              errorMessage = "You cannot proceed before adding at least one mode of transportation.";
              validation = false;
                //alert('You cannot proceed before adding at least one mode of transportation.');
          }
          //else{
          //      validation = true;
          //}
          //return validation; 


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


// odata
function OData_List(entity, filter) {
   var url = entity + "?$filter=" + encodeURIComponent(filter);
   var oDataUrl = "~/_odata/" + url ;

    var response = null;

    $.ajax({
        type: "GET",
        url: oDataUrl,
        dataType: "json",
        async: false
    }).done(function (json) {
        response = json.value;
    });
    return response;
}