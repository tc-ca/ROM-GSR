//
// Basic Form-Contact - New.js
//
var _reload = false;
$(document).ready(function () {
    debugger;
    page_setup();
    $( "#content_form" ).submit(function( event ) {
    event.preventDefault();
      });
    $("#modalwindow").modal({ "backdrop": "static" });
    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');

    $("#emailaddress1").width('100%');

    var selected_language = '{{website.selected_language.code}}';

    //Phone number formatting
    tdg.cid.phone_init("telephone1", selected_language);
    tdg.cid.phone_init("mobilephone", selected_language);
    tdg.cid.phone_init("fax", selected_language);
    
    tdg.c.addValidator("emailaddress1");

    // autocomplete off
    try {
        $("#firstname").attr("autocomplete", "new-password");
        $("#lastname").attr("autocomplete", "new-password");
        $("#emailaddress1").attr("autocomplete", "new-password");
        $("#telephone1").attr("autocomplete", "new-password");
        $("#mobilephone").attr("autocomplete", "new-password");
        $("#fax").attr("autocomplete", "new-password");

//*************************submit button **********************/      
        $("#InsertButton").css("display", "none");
            //get submit button value to use it with the new button  
            var SubmitButtonValue = $("#InsertButton").val();
            //add new insert and update button
            $("#InsertButton").after('<input type="button" onclick="" id="InsertUpdateButton" class="submit-btn btn btn-primary form-action-container-left" value="'+SubmitButtonValue +'"/>');
             var ParentAccount = '{{user.parentcustomerid.id}}' ;
            //define click event
            $('#InsertUpdateButton').on('click', function () {
        
            // function will check of existing contact need to be linke to company
            //instead of add new else it will call the click event of the origional submit button
              invitation.New_and_Existing_Contact_Submit_Logic(ParentAccount);
                var emailaddressTextBox = $("#emailaddress1").val();
                var firstnameTextBox = $("#firstname").val();
                var lastnameTextBox = $("#lastname").val();
                sessionStorage.setItem("NewContactFlag", true);
                sessionStorage.setItem("FullName", firstnameTextBox + " " + lastnameTextBox);
                sessionStorage.setItem("Email", emailaddressTextBox);
                //location.reload();
        });
//********************************************* */


    } catch (e) { }
});

$(window).unload(function () {
    debugger;
    if (_reload) {
        var wp = window.parent;
        try {
            wp.form_refresh();
            // this will close the dialog even there is any validation erros. Therefore form_refresh() was reinstated. 
            //wp.location.reload()
        } catch (e) { }
    }

});

if (window.jQuery) {
    (function ($) {

        entityFormClientValidate = function () {
            debugger;
            var validation = true;

            _reload = true;

            return validation;
        }
    }(window.jQuery));
}

function page_setup() {
    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    const files = ["/tdgcore_common.js", "/tdgcore_message.js" , "/tdgcore_invitation.js"];
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = file;

        $("body").append(script);
    }

    // server error?
    tdg.c.message_panel();
}

(function (webapi, $) {
	function safeAjax(ajaxOptions) {
		var deferredAjax = $.Deferred();

		shell.getTokenDeferred().done(function (token) {
			// add headers for AJAX
			if (!ajaxOptions.headers) {
				$.extend(ajaxOptions, {
					headers: {
						"__RequestVerificationToken": token
					}
				});
			} else {
				ajaxOptions.headers["__RequestVerificationToken"] = token;
			}
			$.ajax(ajaxOptions)
				.done(function (data, textStatus, jqXHR) {
					validateLoginSession(data, textStatus, jqXHR, deferredAjax.resolve);
				}).fail(deferredAjax.reject); //AJAX
		}).fail(function () {
			deferredAjax.rejectWith(this, arguments); // on token failure pass the token AJAX and args
		});

		return deferredAjax.promise();
	}
	webapi.safeAjax = safeAjax;
})(window.webapi = window.webapi || {}, jQuery)


