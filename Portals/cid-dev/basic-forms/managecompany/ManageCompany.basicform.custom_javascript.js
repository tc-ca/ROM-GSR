//
// Basic Form-ManageCompany.js
//

$(document).ready(function () {
	debugger;

	var primarycontactid = '{{user.Id}}';
	var fullname = '{{user.fullname}}';

	$("#primarycontactid").attr("value", primarycontactid);
	$("#primarycontactid_name").attr("value", fullname);
	$("#primarycontactid_entityname").attr("value", 'contact');
});

