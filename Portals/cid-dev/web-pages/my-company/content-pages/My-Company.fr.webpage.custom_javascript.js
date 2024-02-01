//
// Web Page-My Company.js
//

$(document).ready(function () {
    debugger;
    
    tdg.c.removeValidator("name");
    tdg.c.removeValidator("ovs_namefr");
    document.getElementById("UpdateButton").addEventListener('click', (event) => {
        
        if (sessionStorage.getItem("EditOrg") != "none")
        {
            taskid = sessionStorage.getItem("EditOrg");
            sessionStorage.setItem("updateOrgCheckList", "Yes");
            sessionStorage.setItem("EditOrg", "none");
             var data = {
                        "statecode": 1,
                        "statuscode": 5
                    };
            tdg.cid.WebApi_Update_With_Spinner("tasks", taskid, data);


        }
      });

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);
    // format sign-out's tooltip
	$('#cdts-signout-btn').tooltip({
					trigger: 'hover',
					placement: 'right',
					container: 'body'
						});
    var lbl_inactive = tdg.error_message.message("lbl_inactive");

  
    sessionStorage.setItem('frominyearsites', 'false');
    sessionStorage.setItem('fromannualcompliance', 'false');
    sessionStorage.setItem('frominyearsitepage', 'false');

    var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();
    var activationButon = $("#EntityFormPanel").find(".workflow-link");

    if (cidCompanyStatus.indexOf(lbl_inactive) < 0) {
        activationButon.hide();
    }
    else {
        activationButon[0].innerHTML = tdg.error_message.message("m000141");
        activationButon.css("color", "#000000");
        activationButon.css("background-color", "#4CAF50");
    }

    // Update Organization
    var updateCompanyBtn = "<div><input id='update_company' type='button' name='update_company' value='' class='btn btn-primary action create-action' nonactionlinkbutton='true'/></div>"
    $('table[data-name="company_details_section_3"]').after(updateCompanyBtn);
    var msg = tdg.error_message.message("BTN_UPDATE_ORG");
    $("#update_company")[0].value = msg;

    var cancelLabel = tdg.error_message.message("BTN_CANCEL");
    var cancelBtn = "&nbsp;<input id='cancel_company_update' type='button' name='cancel_company_update' value='" + cancelLabel + "' class='btn btn-default button previous previous-btn' nonactionlinkbutton='true'/>";
    $(".form-action-container-left").eq(2).after(cancelBtn);

    var companyName = "{{user.parentcustomerid.name}}";
    $('div[data-name="company_details"]').parent().before("<h2>" + companyName + "</h2><hr>");
    var legend = $('fieldset[aria-label="Head Office"] legend').first();
    legend.text("");
    var msg = tdg.error_message.message("m000156");
    legend.after("<h2>" + companyName + " - " + msg + "</h2><hr>");

    $('div[data-name="tab_3"]').parent().parent().addClass("hidden");
    $("#cid_registrationasof").parent().parent().hide();
    var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();
    var deactivateCompanyWebLink = $('a[href*="deactivate-company"]');

    if (cidCompanyStatus.indexOf(lbl_inactive) >= 0) {
        deactivateCompanyWebLink.addClass("hidden");
    }
    else {
        deactivateCompanyWebLink.removeClass("hidden");
    }

    var topNav = $('#navbar');
    if (topNav) {
        var companyName = $("#ovs_legalname").val();
        var value = tdg.error_message.message("m000106");
        value = value.replace("{0}", companyName);
        $(value).insertAfter(topNav);
    }

    $("legend").each(function () {
        $(this).removeClass();
        $(this).css("font-size", "20px");
        $(this).css("font-weight", "bold");
        $(this).css("text-decoration", "underline");
    });

    // address
    tdg.cid.address_init(false);

    tdg.cid.WebResource_address_complete_readonly(false);

    //tdg.c.control_hide("ovs_namefr");
    tdg.c.control_hide("cid_reasonfornobnnumber_other");


    //Phone number formatting
    tdg.cid.phone_init("telephone1", selected_language);
    tdg.cid.phone_init("fax", selected_language);

    var cid_has_cra_bn = ($('#cid_crabusinessnumber').val() != "" ? "1" : "0");
    var cid_reasonfornobnnumber = $('#cid_reasonfornobnnumber').val();

    tdg.c.control_hide("cid_has_cra_bn");
  
    // do not have a business number?
    if (cid_has_cra_bn != "1") {
        tdg.c.control_hide("cid_crabusinessnumber");
        tdg.c.control_show("cid_reasonfornobnnumber");

        if (cid_reasonfornobnnumber == "3")   // other
        {
            tdg.c.control_show("cid_reasonfornobnnumber_other");
        }
        else {
            tdg.c.control_hide("cid_reasonfornobnnumber_other");
        }
    }
    else {
        tdg.c.control_show("cid_crabusinessnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber_other");
    }

    $('#cid_crabusinessnumber').attr("readonly", true);
    $('#ovs_legalname').attr("readonly", true);
 // $('#ovs_legalnamefr').attr("readonly", true);
    $('#cid_reasonfornobnnumber').attr("readonly", true);
    $('#cid_reasonfornobnnumber').css("pointer-events", "none");
    $('#cid_reasonfornobnnumber_other').attr("readonly", true);
     //Remove required attribute
    tdg.c.removeValidator("name");
    $('#address1_country').attr("readonly", true);

    tdg.cid.convert_province_to_code(selected_language);

    if ($("#cid_addressoverwritten").val() == 0) { $("#ovs_address1_province").prop('disabled', true); }
    else { $("#ovs_address1_province").prop('disabled', false); }


    change_duplicatefieldID();

    subgrid_language();

    //Add listeners for the address fields to change the "manually entered" flag
    $("#address1_line1").attr("oninput", "setManualAddressEntryFlag()");
    $("#address1_city").attr("oninput", "setManualAddressEntryFlag()");
    $("#address1_stateorprovince").attr("oninput", "setManualAddressEntryFlag()");
    $("#address1_postalcode").attr("oninput", "setManualAddressEntryFlag()");
    $("#address1_country").attr("oninput", "setManualAddressEntryFlag()");

    if ($("#ovs_address1_province option:selected").text().trim() != $("#address1_stateorprovince").val().trim()) {
        $("#address1_stateorprovince").val($("#ovs_address1_province option:selected").text().trim());
    }

    //tdg.cid.phone_init("telephone1", selected_language);
    Formate_PhoneNumber_AllControlsWithSameID("telephone1");
    Formate_PhoneNumber_AllControlsWithSameID("fax");
    if ($("#fax").closest("div").get(0).children[1] != "undefined") {
        $("#fax").closest("div").get(0).children[1].innerHTML = "<p> </p>";
    }




});

function subgrid_language() {
    debugger;
    var entityList = $(".entity-grid");
    var companynaicscode = tdg.c.subgrid_index(entityList, "cid_account_companynaicscode");
    if (companynaicscode != null) {
        tdg.cid.subgrid_companynaicscode(companynaicscode);
    }
}

function setManualAddressEntryFlag() {
    $("#cid_addressoverwritten").val(1);
}
function change_duplicatefieldID()
{
  //add id to iframe 
  $("#WebResource_address_complete").attr("title", "Address Complete lookup");

    //company_details_section_3
     $('table[data-name="company_details_section_3"] tbody').find('tr td div.control input').each(function (i) {
        var fieldset = $(this);
         var fieldid = fieldset[0].id;
       
        $(this).attr("id", fieldset[0].id + "_1" );
        
      });
       $('table[data-name="company_details_section_3"] tbody').find('tr td div.info label').each(function (i) {
        var fieldset = $(this);
        var id = fieldset[0].id;
        
       var forattribute = "";
       //cid_companyanniversarydate_1_datepicker_description
       if (id.indexOf("date")>0)
       {   
            forattribute = id.replace("_label" , "")  + "_1_datepicker_description"; 
             }
       else
       {
           forattribute = id.replace("_label" , "") + "_1";}
        //_label
        //datepicker_description
        $(this).attr("for", forattribute );
      });



    //data-name="ACCOUNT_INFORMATION"
      $('table[data-name="ACCOUNT_INFORMATION"] tbody').find('tr td div.control input').each(function (i) {
        var fieldset = $(this);
         var fieldid = fieldset[0].id;
       if ((fieldid.indexOf("date") ==  -1 && fieldid !="cid_reasonfornobnnumber_other") || fieldid =="cid_officiallyregistrationcompletationdate")
        {$(this).attr("id", fieldset[0].id + "_1" );}
        
      });

      $('table[data-name="ACCOUNT_INFORMATION"] tbody').find('tr td div.info label').each(function (i) {
        var fieldset = $(this);
        var id = fieldset[0].id;
        if (id.indexOf("cid_officiallyregistrationcompletationdate") != -1)
       {$(this).attr("id", id + "_1" );}
       var forattribute = "";
       //cid_companyanniversarydate_1_datepicker_description
       if (id.indexOf("date")>0)
       {   
            forattribute = id.replace("_label" , "")  + "_1_datepicker_description"; 
            $(this).attr("for", forattribute );
             
             }
       else
       {
           forattribute = id.replace("_label" , "") + "_1";}
        //_label
        //datepicker_description
        $(this).attr("for", forattribute );
      });

     $('table[data-name="ACCOUNT_INFORMATION"] tbody').find('tr td div.control select').each(function (i) {
        var fieldset = $(this);
         var fieldid = fieldset[0].id;
       
        if (fieldid.indexOf("date") == -1)
        {
           $(this).attr("id", fieldset[0].id + "_1" );
        }
      });
   
    
}
function Formate_PhoneNumber_AllControlsWithSameID(TargetFieldId) {
    $('table[data-name="tab_8_section_2"] tbody').find('tr td div.control input').each(function (i) {
        var fieldset = $(this);
      
        var fieldid = fieldset[0].id;
        if (fieldid == TargetFieldId) {
            fieldset.attr("placeholder", "(___) ___-____");
            fieldset.attr("maxlength", "14");
            fieldset.on('keyup', function (event) {
                //Strip all characters from the input except digits
                var input = $(this).val().replace(/\D/g, '');
                //Trim the remaining input to ten characters, to preserve phone number format
                input = input.substring(0, 10);
                //Based upon the length of the string, we add formatting as necessary
                var inLength = input.length;
                if (inLength == 0) {
                    input = input;
                } else if (inLength < 3) {
                    input = '(' + input;
                } else if (inLength < 6) {
                    input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6);
                } else {
                    input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6) + '-' + input.substring(6, 10);
                }
                if (event.keyCode != 46 && event.keyCode != 8)
                    $(this).val(input);
            });
            fieldset.focusout(function () {
                var inLength = $(this).val().replace(/\D/g, '').length;
                if (inLength < 10 && inLength != 0) {
                    var msg = tdg.error_message.message("m000171");
                    alert(msg);
                    $(this).val("");
                }
            });
        }

    });
}