$(document).ready(function ()
{

    var contentControl = $("table[data-name='Knowledge Information']").find('textarea');


		var htmlContent = contentControl.text();//val();

		//contentControl.parent().after(htmlContent);

		//contentControl.hide();

		$("table[data-name='Knowledge Information']").on("loaded", function () {
				var contentControl = $("table[data-name='Knowledge Information']").find('input');


		//var htmlContent = contentControl.text();//val();

		//contentControl.parent().after(htmlContent);
		//alert(htmlContent);
		contentControl.hide();
		contentControl.attr('style', "display:none;");
			});


});
			

			