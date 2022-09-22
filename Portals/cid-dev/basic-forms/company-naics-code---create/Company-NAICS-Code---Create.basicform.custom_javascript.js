// 
// Basic Form-Company NAICS Code - Create.js 
// 

var _reload = false;
var _count = 0;
$(document).ready(function () {
	debugger;
	page_setup();
	var cid_naicscode_label = tdg.error_message.message("cid_naicscode"); // NAICS Code
	sessionStorage.setItem("cid_naicscode_label", cid_naicscode_label);

	// hide controls
	tdg.c.control_hide("cid_naicscode", true);

	//when the page is done loading, disable autocomplete on all inputs[text]
	$('input[type="text"]').attr('autocomplete', 'off');

	// insert button
	tdg.c.btn_save_new_setup();

	// clear form
	$("#cid_naicscode").attr("value", null);
	$("#cid_naicscode_name").attr("value", null);
});
$(window).unload(function () {
	debugger;
	if (_reload) {
		var wp = window.parent;
		try {
			//wp.form_refresh();
			wp.location.reload()
		}
		catch (e) { }
	}
});

function page_setup() {
	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);
	const files = ["/tdgcore_common.js", "/tdgcore_message.js"];
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

if (window.jQuery) {
	(function ($) {
		entityFormClientValidate = function () {
			debugger;
			var naicsCodeVal = $("#cid_naicscode").attr("value");
			if (naicsCodeVal == null || !isValidGUID(naicsCodeVal)) {
				var msg = tdg.error_message.message("m000107"); // Record added
				var selected_language = '{{website.selected_language.code}}';
				msg = tdg.c.text_language(msg, selected_language);

				var validationSection = $('.validation-summary');
				validationSection.html($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + msg + "</div>"));
				validationSection.show();
				$('.validation-summary div').focus();

				var validation = false;
				return validation;
			}
			var validation = true;
			return validation;
		}
	}(window.jQuery));
}

// call back from tdg.c 
function btn_save_new_onclick() {
	//disable button to prevent adding duplicate classes by double click
	$("#btn_save_new").prop('disabled', true);
	var value = false;
	//tdg.c.error_message_clear();
	if (typeof entityFormClientValidate === 'function') {
		if (entityFormClientValidate()) {
			if (typeof Page_ClientValidate === 'function') {
				value = Page_ClientValidate('');
			}
		}
	};
	debugger;
	if (!value) {
		// clear form
		$("#btn_save_new").prop('disabled', false);
		return;
	}
	// insert 
	var account_id = '{{user.parentcustomerid.Id}}';
	var contact_id = '{{user.id}}';
	var cid_naicscode = $("#cid_naicscode").attr("value");
	cid_companynaicscode_insert(account_id, cid_naicscode, contact_id);
}

function cid_companynaicscode_insert(account_id, cid_naicscode, contact_id) {
	debugger;
	var data = {
		"cid_Company@odata.bind": "/accounts(" + account_id + ")",
		"cid_NAICSCode@odata.bind": "/cid_naicscodes(" + cid_naicscode + ")",
		"cid_CreatedByRegistrant@odata.bind": "/contacts(" + contact_id + ")"
	};
	tdg.webapi.create("cid_companynaicscodes", data, success_cb, error_cb);
}

function form_clear() {
	debugger;
	try {
		var f = document.getElementById("WebResource_naicscode");
		var c = f.contentWindow;
		c.clear_field();
	}
	catch (e) { }
}

function success_cb() {
	debugger;
	_count += 1;
	msg = tdg.error_message.message("m000005"); // Record added
	msg = msg.replace("{0}", _count);
	tdg.c.message_panel_set("EntityFormControl", msg);
	// clear form
	form_clear();
	_reload = true;
	$("#btn_save_new").prop('disabled', false);
}

function error_cb(msg) {
	debugger;
	var selected_language = '{{website.selected_language.code}}';
	msg = tdg.c.text_language(msg, selected_language);
	tdg.c.message_panel_set("EntityFormControl", msg);
	$("#btn_save_new").prop('disabled', false);
}

function isValidGUID(value) {
	if (value.length > 0) {
		if (!(/^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/).test(value)) {
			return false;
		}
	}
	return true;
}
