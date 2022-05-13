$(document).ready(function () {
	var primarycontactid = '{{user.Id}}';
	var fullname = '{{user.fullname}}';

	//alert(fullname + " > " + primarycontactid);

	$("#primarycontactid").attr("value", primarycontactid);
	$("#primarycontactid_name").attr("value", fullname);
	$("#primarycontactid_entityname").attr("value", 'contact');
});

