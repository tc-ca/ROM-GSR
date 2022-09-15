//
// Web Page-Operation Registration Wizard.js
//
$(document).ready(function () {
    sessionStorage.setItem('to_actvt_stp', 'false');
    sessionStorage.setItem('to_oprtn_wzrd', 'false');

    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('isExtended')) {
    	var isExtended = urlParams.get('isExtended');

        if(isExtended =='false'){
            $('.progress li').last().addClass("hidden");
        }
    }

    if (urlParams.has('siteid')) {
        var siteId = urlParams.get('siteid');

 	    if ($("#backToActivityTypesStep").length > 0) {
		    $('#mainContent').remove();
        }
        $('#mainContent').prepend("<div id='backToActivityTypesStep' class='input-group pull-left'><p><input type='button' id='backToActivityTypes' name='Back' value='Back to Activity Types Screen' class='btn btn-primary button next submit-btn' nonactionlinkbutton='true'><br><br></p></div>");
    
        $("#backToActivityTypes").click(function(){
            sessionStorage.setItem('to_actvt_stp', 'true');
            window.location.href = "~/SiteRegistrationWizard/?id=" + siteId;
        });
    }

    debugger;

    header_setup();

    var instructionBtns = $(".instruction-btn");

    if (instructionBtns.length > 0) {
        instructionBtns.click(function () {
			var msg = tdg.error_message.message("m000010");	// Choose the same named button found below
			tdg.c.dialog_OK(msg);
		});
    }

    $("legend").each(function () {
        $(this).removeClass();
        $(this).css("font-size", "24px");
        $(this).css("font-weight", "bold");
    });

    window.triggerUpdate = function () {
        console.log('hi in trigger');
        //TODO Add logic for refreshing the data in the subgrid (or page if subgrid is not doable)
    }
});

function header_setup() {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    try {
        var code = "m000025";
        var companyName = '{{user.parentcustomerid.name}}';
        var value = tdg.error_message.message(code);
        value = value.replace("{0}", companyName);
        $('.page-header h1').text(value);
    } catch (e) { }
}
