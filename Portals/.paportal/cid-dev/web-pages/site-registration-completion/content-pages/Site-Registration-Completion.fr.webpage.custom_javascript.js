//
// Web Page-Site Registration Completion.js
//

$(document).ready(function () {
    $('#loader').hide();
    debugger;

	var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);
    var title = tdg.error_message.message("m000200");
    var ctl = $('#cdts-signout-btn').tooltip()[0];
    ctl.title = title;   
    ctl.href = (selected_language == "en" ? "/en/Account/Login/LogOff" : "/fr/Account/Login/LogOff");
});