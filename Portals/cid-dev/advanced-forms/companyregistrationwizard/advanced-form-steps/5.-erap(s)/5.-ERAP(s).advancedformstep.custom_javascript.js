$(document).ready(function () {
		var companyName = '{{user.parentcustomerid.name }}';
    var header = $('.page-header h1');
	if(companyName != null && header != null)
		header.text(header.text() + ' - ' + companyName);
});
    
//if (window.jQuery) {
//    (function ($) {
//        webFormClientValidate = function () {
//            var validation = true;
//            var errorMessage = "";
//            var companyId = $("#EntityFormView_EntityID").val();	

//			if(companyId == null)
//			{
//				errorMessage = "Error: Missing company Id.";
//                validation = false;
//			}
//			else if(!CompanyHasERAPs(companyId))
//			{
//                errorMessage = "You cannot proceed before adding company ERAP(s).";
//                validation = false;
//            }


//			var filter = "cid_company/Id eq (guid'" + companyId + "')";
//			var data = ExecuteOData("Validation_CompanyERAPs", filter);
//            
//			if(data == null || data.length <= 0)
//			{
//                errorMessage = "You cannot proceed before adding company ERAP(s).";
//               validation = false;
//            }
//
//            if (!validation) {
//                $('#ValidationSummaryEntityFormView div').remove();
//
//                var validationSection = $('#ValidationSummaryEntityFormView');
//
//                validationSection.append($("<div class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
//                validationSection.show();
//            }
//
//           return validation;
//		}
//    }(window.jQuery));
//}