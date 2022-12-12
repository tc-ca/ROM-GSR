$(document).ready(function ()
{
    var contentControl = $("table[data-name='Knowledge Information']").find('textarea');


		var htmlContent = contentControl.text();

		contentControl.parent().after(htmlContent);

		var contentControlX = $("#content_label");
		//var contentControlXX = $("#content").parent();
		//contentControlXX.attr('style', "display:none;");
		 contentControl.attr('style', 'display:none;');
		 contentControlX.attr('style', 'display:none;');
		//contentControlXX.css("visibility", "hidden");
		//contentControlXX.attr('style', "display:none;");

		//$("table[data-name='Knowledge Information']").on("loaded", function () {
		//		var contentControl = $("table[data-name='Knowledge Information']").find('input');


		//var htmlContent = contentControl.text();//val();

		//contentControl.parent().after(htmlContent);
		//alert(htmlContent);
		//contentControl.hide();
		//contentControl.attr('style', "display:none;");
		//	});


});
			

			