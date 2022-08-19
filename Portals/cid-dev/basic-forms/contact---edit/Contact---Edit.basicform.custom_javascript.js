//
// CompanyRegistrationWizard-Company Edit.js
//
$(document).ready(function () {
    debugger;
   
   //hide modified on by field
   $("#cid_portalrecordmodificationdetails").hide();
   $("#cid_portalrecordmodificationdetails_label").hide();
//get the form contact id (please note this is differnt than login user id)
//this will be used to check if user updated the contact is the same user or not
  var currentRecordID = document.getElementById("EntityFormControl_EntityFormView_EntityID").value;
  //id="EntityFormControl_EntityFormView_EntityID"
//  $('#EntityFormControl_EntityFormView_EntityID').val();
  console.log(currentRecordID);
  var currentUserId = '{{user.contactid}}' ;
  var userfullname = '{{user.fullname}}';
  var today = new Date();
  var dd = String(today.getDate());
  //.padStart(2, '0');
  var mm = String(today.getMonth() + 1);
  //.padStart(2, '0'); //January is 0!
  console.log(mm);
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  var modificationDetails = today + ", " + userfullname;
  console.log('before check');
  if (currentRecordID != currentUserId )
  {
      console.log('not the same user as form contact');
    $("cid_modifiedbyregistrant_id").attr("value",'{{user.contactid}}');
    $("cid_modifiedbyregistrant_name").attr("value",'{{user.fullname}}');
    $("#cid_modifiedbyregistrant_entityname").attr("value","contact");
  }
  else
  {

    $("#cid_portalrecordmodificationdetails").val(modificationDetails);
  
   console.log('the same user as form contact');
  }
  console.log(modificationDetails);

    //$("#cid_modifiedbyregistrant") = '{{user}}';

    var companyName = '{{user.parentcustomerid.name }}';
    if (companyName) {
        $(".previous-btn").attr('disabled', true);
    }

    // resize WebResource_address_complete
    $("#WebResource_address_complete").height('72px');
    $("#websiteurl").width('100%');

    $("#telephone1").attr("placeholder", "");
    $("#mobilephone").attr("placeholder", "");

    $("#telephone1").attr("maxlength", "10");
    $("#mobilephone").attr("maxlength", "10");
    $("#fax").attr("maxlength", "10");

    $("#telephone1").on('keyup', function() {
        var n = $(this).val().replace(/\D/g, '');
        $(this).val(n);
        var match = n.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            $(this).val('(' + match[1] + ') ' + match[2] + '-' + match[3]);
        }
    });
    $("#mobilephone").on('keyup', function() {
        var n = $(this).val().replace(/\D/g, '');
        $(this).val(n);
        var match = n.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            $(this).val('(' + match[1] + ') ' + match[2] + '-' + match[3]);
        }
    });
    $("#fax").on('keyup', function() {
        var n = $(this).val().replace(/\D/g, '');
        $(this).val(n);
        var match = n.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            $(this).val('(' + match[1] + ') ' + match[2] + '-' + match[3]);
        }
    });

    var step_start = sessionStorage.getItem("step_start");
    step_start = (step_start == "null" ? "" : step_start);

    if (step_start == "2") {
        var cid_has_cra_bn = $('#cid_has_cra_bn').val();
        var address1_line1 = $("#address1_line1").val();
        var cid_legalname = $('#ovs_legalname').val();
        var cid_operatingname = $('#name').val();
    }
    else {
        var cid_has_cra_bn = '{{user.cid_has_cra_bn}}';
        cid_has_cra_bn = (cid_has_cra_bn == "true" ? 1 : 0);
        var cid_crabusinessnumber = '{{user.cid_crabusinessnumber}}';
        var cid_reasonfornobnnumber = "{{user.cid_reasonfornobnnumber.Value}}";
        var cid_reasonfornobnnumber_other = "{{user.cid_reasonfornobnnumber_other}}";
        var cid_legalname = "{{user.cid_legalname}}";
        var cid_operatingname = "{{user.cid_operatingname}}";
        var address1_line1 = "{{user.address1_line1}}";
        var address1_line2 = "{{user.address1_line2}}";
        var address1_line3 = "{{user.address1_line3}}";
        var address1_city = "{{user.address1_city}}";
        var address1_stateorprovince = "{{user.address1_stateorprovince}}";
        var address1_postalcode = "{{user.address1_postalcode}}";
        var address1_country = "{{user.address1_country}}";

        $("#address1_line1").val(address1_line1);
        $("#address1_line2").val(address1_line2);
        $("#address1_line3").val(address1_line3);
        $("#address1_city").val(address1_city);
        $("#address1_stateorprovince").val(address1_stateorprovince);
        $("#address1_postalcode").val(address1_postalcode);
        $("#address1_country").val(address1_country);
    }
    tdg.c.control_hide("cid_has_cra_bn");
    sessionStorage.setItem("AddressLine1Text", address1_line1);

    tdg.c.replace_special_char(cid_legalname);
    tdg.c.replace_special_char(cid_operatingname);

    // do not have a business number?
    if (cid_has_cra_bn != "1") {
        tdg.c.control_hide("cid_crabusinessnumber");
        tdg.c.control_show("cid_reasonfornobnnumber");

        if (step_start != "2") {
            $("#cid_reasonfornobnnumber").val(cid_reasonfornobnnumber);
        }

        if (cid_reasonfornobnnumber == "3")   // other
        {
            tdg.c.control_show("cid_reasonfornobnnumber_other");
            if (step_start != "2") {
                $("#cid_reasonfornobnnumber_other").val(cid_reasonfornobnnumber_other);
            }
        }
        else {
            tdg.c.control_hide("cid_reasonfornobnnumber_other");
        }
    }
    else {
        if (step_start != "2") {
            $("#cid_crabusinessnumber").val(cid_crabusinessnumber);
        }
        tdg.c.control_show("cid_crabusinessnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber_other");
    }

    if (step_start != "2") {
        $("#ovs_legalname").val(cid_legalname);
        $("#name").val(cid_operatingname);
    }

    $('#cid_crabusinessnumber').attr("readonly", true);
    $('#ovs_legalname').attr("readonly", true);
    $('#cid_reasonfornobnnumber').attr("readonly", true);
    $('#cid_reasonfornobnnumber').css("pointer-events", "none");
    $('#cid_reasonfornobnnumber_other').attr("readonly", true);

    tdg.c.addValidator("address1_line1");
    tdg.c.addValidator("address1_city");
    tdg.c.addValidator("address1_stateorprovince");
    tdg.c.addValidator("address1_postalcode");
    tdg.c.addValidator("address1_country");

    // autocomplete off
    $("#name").attr("autocomplete", "new-password");
    $("#address1_line2").attr("autocomplete", "new-password");
    $("#address1_line3").attr("autocomplete", "new-password");
    $("#address1_city").attr("autocomplete", "new-password");
    $("#address1_stateorprovince").attr("autocomplete", "new-password");
    $("#address1_postalcode").attr("autocomplete", "new-password");
    $("#address1_country").attr("autocomplete", "new-password");
    $("#address1_longitude").attr("autocomplete", "new-password");
    $("#address1_latitude").attr("autocomplete", "new-password");
    $("#telephone1").attr("autocomplete", "new-password");
    $("#fax").attr("autocomplete", "new-password");
    $("#cid_reasonfornobnnumber_other").attr("autocomplete", "new-password");
    $("#websiteurl").attr("autocomplete", "new-password");
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            sessionStorage.setItem("step_start", "");

            return true;
        }
    }(window.jQuery));
}

function AddressComplete_Hide_address1_line1() {
    debugger;
    tdg.c.control_hide("address1_line1");
}

function AddressComplete_address1_line1() {
    debugger;
    $("#address1_line1").val(sessionStorage.getItem("Line1"));
}

function AddressComplete_Selected() {
    $("#address1_line1").val(sessionStorage.getItem("Line1"));
    $("#address1_line2").val(sessionStorage.getItem("Line2"));
    $("#address1_line3").val(sessionStorage.getItem("Line3"));
    $("#address1_city").val(sessionStorage.getItem("City"));
    $("#address1_stateorprovince").val(sessionStorage.getItem("ProvinceName"));
    $("#address1_postalcode").val(sessionStorage.getItem("PostalCode"));
    $("#address1_country").val(sessionStorage.getItem("CountryName"));
}
