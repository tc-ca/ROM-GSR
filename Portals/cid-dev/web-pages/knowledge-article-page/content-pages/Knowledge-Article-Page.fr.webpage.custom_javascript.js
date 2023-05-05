//
// Web Page-Knowledge Article Page
//

$(document).ready(function () {
    debugger;

    var ctrl = $("textarea#content");
    var div = $("<div>").html(ctrl.text());
    ctrl.replaceWith(div);
});