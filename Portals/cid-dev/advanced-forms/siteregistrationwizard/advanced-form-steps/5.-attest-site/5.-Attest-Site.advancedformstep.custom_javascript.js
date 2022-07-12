//
// SiteRegistrationWizard-Attest Site.js
//



async function OperationDetailsProvided(operationId, flag) {
    await UpdateOperationDetailsProvided(operationId, flag);
}

$(document).ready(function () {
    page_setup();
    $('#PreviousButton').on('click', function () {
        var siteId = $("#EntityFormView_EntityID").val();
        
        var operationId = GetHOTIOperation(siteId);

        OperationDetailsProvided(operationId, false);
    });

     Display_Modes($("#EntityFormView_EntityID").val());
     // display_Modes();

    $('table').each(function () {
        var selectedTable = $(this);
        if (selectedTable.attr('data-name').includes('_readonly')) {
            selectedTable.find("tr").each(function () {
                $(this).css("background-color", "#F0F0F0");
            });
        }
    });

    if ($("#printSummary").length <= 0)
        var msg = tdg.error_message.message("m000007"); // Print Summary
    $("#NextButton").parent().after("<div id='printSummary' role='group' class='btn-group entity-action-button'><input type='button' name='PrintButton' value='" + msg + "' onclick='window.print();' class='btn btn-primary button next submit-btn' nonactionlinkbutton='true'></div>");
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            var validation = true;
            var siteId = $("#EntityFormView_EntityID").val();
            var errorMessage = "";

            //Classes validation
            if (!SiteHasOperationClasses(null, siteId)) {
                var msg = tdg.error_message.message("m000016"); // You cannot proceed before adding class(es).
                errorMessage = errorMessage + msg + "</br>";
                validation = false;
            }

            //UN Numbers validation
            var isExtendedSite = $("#cid_requirementlevel").find(":selected").text();

            if (IsExtendedSite == 'Basic' && !SiteHasOperationUNNumbers(null, siteId)) {
                var msg = tdg.error_message.message("m000017"); // UN ??
                errorMessage = errorMessage + msg + "</br>";
                validation = false;
            }

            if (!validation) {
                $('#ValidationSummaryEntityFormView div').remove();
                var validationSection = $('#ValidationSummaryEntityFormView');
                validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>"));
                validationSection.show();
                $('#alertMessages').focus();
            }
            return validation;
        }
    }(window.jQuery));
}

function Append_Modes_html_checkboxes(air , marine, rail , road  )
{
//get Air translation from file
  
  var cid_Air_label = tdg.error_message.message("m000102");
  var cid_Maritime_label = tdg.error_message.message("m000103");
  var cid_Rail_label = tdg.error_message.message("m000104");
  var cid_Road_label = tdg.error_message.message("m000105");





    //check if air is selected
    var airchecked = "" ;
    if (air == true)
    {
      airchecked =  'checked="checked"' ;
    }
    //check if rail
    var railchecked = "" ;
    if (rail == true)
    {
      railchecked =  'checked="checked"' ;
    }
    //check if marine
    var marinechecked = "" ;
    if (marine == true)
    {
      marinechecked =  'checked="checked"' ;
    }
    //check if road
    var roadchecked = "" ;
    if (road == true)
    {
      roadchecked =  'checked="checked"' ;
    }


var row1 = ' <tr style="background-color: rgb(240, 240, 240);">' +

    '<td colspan="1" rowspan="1" class="clearfix cell checkbox-cell">' +
    '<div class="info">' +
    '<label for="cid_Road" id="cid_Road_label" class="field-label" role="none">'+ cid_Road_label +'</label>' +
    '</div>' +
    '<div class="control">' +
    '<span class="checkbox ">' +
    '<input id="cid_Road" type="checkbox" name="cid_Road" ' + roadchecked + ' class="checkbox readonly" disabled="disabled" aria-disabled="true">' +
    '</span>' +
    '<input type="hidden" name="cid_Road_Value" id="cid_Road_Value" value="'+ road +'">' +
    '</div>' +
    '</td>' +
    '<td class="cell zero-cell"></td>' +
    '<td colspan = "1" rowspan = "1" class="clearfix cell checkbox-cell" >' +
    '<div class="info">' +
    '<label for="cid_Rail" id="cid_Rail_label" class="field-label" role="none">'+cid_Rail_label+'</label>' +
    '</div>' +
    '<div class="control">' +
    '<span class="checkbox ">' +
    '<input id="cid_Rail" type="checkbox" name="cid_Rail" ' + railchecked + '   class="checkbox readonly" disabled="disabled" aria-disabled="true">' +
    '</span>' +
    '<input type="hidden" name="cid_Rail_Value" id="cid_Rail_Value" value="'+rail+'">' +
    '</div>' +
    '</td>' +
'</tr>';

var row2 = ' <tr style="background-color: rgb(240, 240, 240);">' +
'<td colspan = "1" rowspan = "1" class="clearfix cell checkbox-cell" >' +
    '<div class="info">' +
    '<label for="cid_Air" id="cid_Air_label" class="field-label" role="none">'+cid_Air_label+'</label>' +
    '</div>' +
    '<div class="control">' +
    '<span class="checkbox ">' +
    '<input id="cid_Air" type="checkbox" name="cid_Air" ' + airchecked + ' class="checkbox readonly" disabled="disabled" aria-disabled="true">' +
    '</span>' +
    '<input type="hidden" name="cid_Air_Value" id="cid_Air_Value" value="' + air   +'">' +
    '</div>' +
    '</td>' +

    '<td colspan="1" rowspan="1" class="clearfix cell checkbox-cell">' +
    '<div class="info">' +
    '<label for="cid_Maritime" id="cid_Maritime_label" class="field-label" role="none">'+cid_Maritime_label+'</label>' +
    '</div>' +
    '<div class="control">' +
    '<span class="checkbox ">' +
    '<input id="cid_Marine" type="checkbox" name="cid_Marine" ' + marinechecked + ' class="checkbox readonly" disabled="disabled" aria-disabled="true">' +
    '</span>' +
    '<input type="hidden" name="cid_Marine_Value" id="cid_Marine_Value" value="'+ marine +'">' +
    '</div>' +
    '</td>' +
    '<td class="cell zero-cell"></td>' +
'</tr>';

// JavaScript source code
$('table').each(function () {
    var selectedTable = $(this);
    if (selectedTable.attr('data-name').includes('site_attestation_section_Modes')) {
       // $(this).innerHTML += ModesCheckBox_HtmlTags;
        selectedTable.find("tbody").each(function () {

            $(this).after(row2);
             $(this).after(row1);
            

        });



       
    }
});
}




function Display_Modes(siteid) {
	var operationid;
	console.log("input site id " + siteid);
	//cid_ModeOfTransportationAir,Marine,cid_ModeOfTransportationRoad,cid_modeoftransportationrail
	var queryURL = "$select=cid_modeoftransportationair,cid_modeoftransportationmarine,cid_modeoftransportationroad,cid_modeoftransportationrail&$filter=ovs_operationtype eq 918640038 and ovs_SiteId/accountid eq " + siteid;

	webapi.safeAjax({
		type: "GET",
		url: "/_api/ovs_mocregistrations?" + queryURL
			,
		contentType: "application/json",

		type: "GET",
	
		success: function (res) {

			operationid = res.value[0]['ovs_mocregistrationid'];
			var air = false ; 
           if ( res.value[0]['cid_modeoftransportationair'] == true)
              air = true;
            var road = false ;
            if (res.value[0]['cid_modeoftransportationroad'] == true)
              road = true;
            var marine = false ; 
            if( res.value[0]['cid_modeoftransportationmarine'] == true)
              marine = true;
            var rail = false ;
            if( res.value[0]['cid_modeoftransportationrail'] == true)
              rail = true;
          Append_Modes_html_checkboxes(air, marine, rail , road);
           //cid_modeoftransportationmarine
			console.log("Operation query results for Modes " +" Air " + air + " Road " + road + " Marine " + marine  + " Rail " + rail);
		}
	});

}

function page_setup() {
    var selected_language = '{{website.selected_language.code}}';
    console.log("selected language " + selected_language);
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