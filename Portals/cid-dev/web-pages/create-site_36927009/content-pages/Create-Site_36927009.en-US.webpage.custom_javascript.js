// CreateSite.js

$(document).ready(function () {
	var name = '{{user.fullname}}';
	//alert("Create Site - " + name);

	$('#cid_siteclaim option[value="0"]').attr('selected', true);
	$("#cid_siteclaim").attr("readonly", true);	// not working????
});
