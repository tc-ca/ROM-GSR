//
// SiteRegistrationWizard-Activity Type.js
//

$(document).load(function () {
    $('#loader').show();
});

$(document).ready(function () {
    debugger;

    $('#loader').hide();
    $("#adx_modifiedbyusername").val('{{user.adx_identity_username}}');
	 tdg.c.control_hide("adx_modifiedbyusername");
     //function to update company status if it is in year and current status is Initial Registration - Organization Complete
     CheckParentCompanyStatus_updateIfRequired();


    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    tdg.c.page_instructions("page_srw_activity_type");

    var inYear = sessionStorage.getItem('frominyearsites');
    var annualCompliance = sessionStorage.getItem('fromannualcompliance');
    var frominyearsitepage = sessionStorage.getItem('frominyearsitepage');

    				//add * after the header
				$("#EntityFormView > h2").append('<span style="color:red">*</span>');

    var urlParams = new URLSearchParams(window.location.search);
     if (urlParams.has('id')) {
		var siteid = urlParams.get('id');
       /*
        var operationDataset = tdg.webapi.SelectedColumnlist("ovs_mocregistrations", "ovs_mocregistrationid,ovs_operationtype",
			"statuscode eq 1 and ( ovs_operationtype eq 918640038 or ovs_operationtype eq 918640042 ) and _ovs_siteid_value eq "  + siteid);
            var operationid = operationDataset[0].ovs_mocregistrationid ;
            if (operationDataset.length == 2)
            {
                if (operationDataset[1].ovs_operationtype == 918640038 )
                {
                    operationid = operationDataset[1].ovs_mocregistrationid ;
                }

            }
           
            var formaction = $('#liquid_form').attr('action') ;
             if ( formaction.indexOf('&operationid=' + operationid) <0)
             { $('#liquid_form').attr('action', $('#liquid_form').attr('action')+ '&operationid=' + operationid);}
*/
    }
     
     
     //remove role from label control- issue flaged by accessibility PBI #     
     setTimeout( function(){ 
                    
                $("#cid_importingsitetype_label").attr("role", "");            
                $("#cid_offeringfortransportsitetype_label").attr("role", "");
                $("#cid_handlingsitetype_label").attr("role", "");
                $("#cid_transportingsitetype_label").attr("role", "");
             
    }, 1000); 
                

    if (inYear == 'true' || annualCompliance == 'true' || frominyearsitepage == 'true') {
        if ($("#cancelButton").length <= 0) {
            var cancelLabel = tdg.error_message.message("BTN_CANCEL");
            $("#NextButton").parent().after("<div role='group' class='btn-group entity-action-button'><input id='cancelButton' type='button' name='CancelButton' value='' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'></div>");
            $("#cancelButton")[0].value = cancelLabel;
        }

        $('#cancelButton').click(function (e) {
            if (inYear == 'true')
                window.location.href = '~/my-sites/';
            else if (annualCompliance == 'true')
                window.location.href = '~/my-company/annual-compliance-update/';
            else if (frominyearsitepage == 'true') {
                var urlParams = new URLSearchParams(window.location.search);
                if (urlParams.has('id')) {
                    var siteid = urlParams.get('id');

                    if (siteid != "")
                        window.location.href = '~/my-sites/in-year-site/?id=' + siteid;
                }
            }
        });
    }
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            sessionStorage.setItem('to_oprtn_wzrd', 'true');

            var validation = true;
            var errorMessage = "";
            var checkedCheckBoxes = $('[id*="cid_"]:checkbox:checked');

            if (checkedCheckBoxes && checkedCheckBoxes.length <= 0) {
                errorMessage = tdg.error_message.message("m000146");
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

function CheckParentCompanyStatus_updateIfRequired()
{
    debugger;
        customerid = '{{user.parentcustomerid.id}}';
        var parentAccountdata = tdg.webapi.SelectedColumnlist("accounts", "name,cid_cidcompanystatus,cid_officiallyregistrationcompletationdate"
            , "accountid eq " + customerid);
        //company registeration date
        company_reg_date = parentAccountdata[0]["cid_officiallyregistrationcompletationdate"];
        company_Status = parentAccountdata[0]["cid_cidcompanystatus"];
       //check if not in year
        if ((company_reg_date == null || company_reg_date == "") && company_Status == 100000000 ) {
              var data = {
                "cid_cidcompanystatus": 100000009
            };
            tdg.webapi.update("accounts", customerid, data);
        
        }   

}