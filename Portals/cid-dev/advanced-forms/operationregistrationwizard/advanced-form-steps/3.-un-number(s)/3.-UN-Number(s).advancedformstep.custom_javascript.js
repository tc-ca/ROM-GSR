//
// OperationRegistrationWizard-UN Number.js
//

$(document).ready(function () {
    debugger;
  
	//hide empty message for registeration only
	$(".entity-grid").on("loaded", function () { const EmptyMessageDiv = document.querySelector(".view-empty");	
         	EmptyMessageDiv.style.display = "none";
      });
  

    $('#NextButton').on('click', function () {
        sessionStorage.setItem('to_attst_site', 'true');
    });

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    var tdg_unnumberid_label = tdg.error_message.message("tdg_unnumberid"); // UN Number
    sessionStorage.setItem("tdg_unnumberid_label", tdg_unnumberid_label);

    subgrid_language();
    debugger;
    //****Logic used to add comma to annual number of consigment in the UN number grid */
   //define digit function to update Grid Cell
   $.fn.digits = function(){
    return this.each(function(){
        var selected_language = '{{website.selected_language.code}}';
        console.log(selected_language);
       if (selected_language == "en")
       { 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
       }
       else
       {
           $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));

       }
      });};
       
    //define variable to reference UN Grid
    var list = $(".entity-grid");
     //add onload event to grid 
     list.on("loaded", function () {
      //loop for each UN number in the current page
      list.find("td[data-attribute='cid_annualnumberofshipment']").each(function (i, e){
          //call function to update whole number format to include comma
          $(this).digits();
        }); 
    }); 
    /******************** */

});

function subgrid_language() {
    var selected_language = sessionStorage.getItem("selected_language");

    var entityList = $(".entity-grid");
    var unnumber = tdg.c.subgrid_index(entityList, "ovs_OperationUNNumber_OperationUNNumber_o");
    if (unnumber != null) {
        tdg.cid.subgrid_unnumber(unnumber);
    }
}

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            var validation = true;
            var errorMessage = "";

            var urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('id')) {
                var operationId = urlParams.get('id');
                if (!SiteHasOperationUNNumbers(operationId, null)) {
                    errorMessage = tdg.error_message.message("m000017"); // "You cannot proceed before adding UN Number(s).";
                    validation = false;
                }
            }

            if (!validation) {
                $('#ValidationSummaryEntityFormView div').remove();
                var validationSection = $('#ValidationSummaryEntityFormView');

                validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
                validationSection.show();
                $('#alertMessages').focus();
            }
            else {
                OperationDetailsProvided(operationId, true);
                if (urlParams.has('siteid')) {

                    var siteId = urlParams.get('siteid');

                    if (urlParams.has('in_year')) {
                        window.location.href = "~/my-sites/in-year-site/?id=" + siteId;
                    }
                    else {
                        window.location.href = "~/SiteRegistrationWizard/?id=" + siteId;
                    }
                }
            }
            //return validation;
        }
    }(window.jQuery));
}

async function OperationDetailsProvided(operationId, flag) {
    await UpdateOperationDetailsProvided(operationId, flag);
}
