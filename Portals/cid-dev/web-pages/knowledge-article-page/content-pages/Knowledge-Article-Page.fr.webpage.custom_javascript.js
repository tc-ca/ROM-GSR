$(document).ready(function() {
  var ctrl = $("textarea#content");
  var div = $("<div>").html(ctrl.text());
  ctrl.replaceWith(div);
});