//
// CompanyRegistrationWizard-ERAP.js
//
$(document).ready(function () {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

	var entityList = $(".entity-grid").eq(0);

	entityList.on("loaded", function () {
		debugger;

        var k_msg = "company_registration_wizard_ERAP";

        var alert_ind = sessionStorage.getItem(k_msg);

		// header
        if (alert_ind != "true") {
            let rows = entityList.find("table tbody > tr");
            if (rows.length > 0) {
                var msg = tdg.error_message.message("m000101");
                tdg.c.dialog_OK(msg);
            }
            sessionStorage.setItem(k_msg,"true");
        }

	});
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            debugger;

            var validation = true;

            return validation;
        }
    }(window.jQuery));
}
