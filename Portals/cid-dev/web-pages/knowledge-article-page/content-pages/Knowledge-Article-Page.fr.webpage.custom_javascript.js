//
// Web Page-Knowledge Article Page
//

$(document).ready(function () {
    debugger;
    // format sign-out's tooltip
	
	$('#cdts-signout-btn').tooltip({
					trigger: 'hover',
					placement: 'right',
					container: 'body'
						});
    var ctrl = $("textarea#content");
    var div = $("<div>").html(ctrl.text());
    ctrl.replaceWith(div);
});