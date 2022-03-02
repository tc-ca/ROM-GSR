// CompanyRegistrationWizard-Company Create.js

$(document).ready(function () {
    debugger;

    var companyName = '{{user.parentcustomerid.name }}';
    if (companyName)
        $(".previous-btn").attr('disabled', true);

    // resize WebResource_address_complete
    $("#WebResource_address_complete").height('72px');
    $("#websiteurl").width('100%');

    $("#telephone1").attr("placeholder", "");

    var step_start = sessionStorage.getItem("step_start");
    step_start = (step_start == "null" ? "" : step_start);

    //var contactId = window.parent["Microsoft"]["Dynamic365"]["Portal"]["User"]["contactId"];

    var cid_has_cra_bn = '{{user.cid_has_cra_bn}}';
    var cid_has_cra_bn = (cid_has_cra_bn == "true" ? 1 : 0);
    var cid_crabusinessnumber = '{{user.cid_crabusinessnumber}}';
    var cid_reasonfornobnnumber = "{{user.cid_reasonfornobnnumber}}";
    var cid_reasonfornobnnumber_other = "{{user.cid_reasonfornobnnumber_other}}";
    var cid_legalname = "{{user.cid_legalname}}";
    var cid_operatingname = "{{user.cid_operatingname}}";

    tdg.c.replace_special_char(cid_legalname);
    tdg.c.replace_special_char(cid_operatingname);

    $('#cid_has_cra_bn').val(cid_has_cra_bn);
    //$("#cid_has_cra_bn").parent().parent().hide();
    tdg.c.control_hide("cid_has_cra_bn");

    // do not have a business number?
    if (cid_has_cra_bn != 1) {
        tdg.c.control_hide("cid_crabusinessnumber");
        tdg.c.control_show("cid_reasonfornobnnumber");

        //$("#cid_crabusinessnumber").parent().parent().hide();
        //$("#cid_reasonfornobnnumber").parent().parent().show();

        $("#cid_reasonfornobnnumber").val(cid_reasonfornobnnumber);

        if (cid_reasonfornobnnumber == "3")   // other
        {
            tdg.c.control_show("cid_reasonfornobnnumber_other");
            //$("#cid_reasonfornobnnumber_other").parent().parent().show();
            $("#cid_reasonfornobnnumber_other").val(cid_reasonfornobnnumber_other);
        }
        else {
            tdg.c.control_show("cid_reasonfornobnnumber_other");
            //$("#cid_reasonfornobnnumber_other").parent().parent().hide();
        }
    }
    else {
        tdg.c.control_show("cid_crabusinessnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber_other");

        $("#cid_crabusinessnumber").val(cid_crabusinessnumber);
        //$("#cid_crabusinessnumber").parent().parent().show();
        //$("#cid_reasonfornobnnumber").parent().parent().hide();
        //$("#cid_reasonfornobnnumber_other").parent().parent().hide();
    }

    $("#ovs_legalname").val(cid_legalname);
    $("#name").val(cid_operatingname);

    $('#cid_crabusinessnumber').attr("readonly", true);
    $('#ovs_legalname').attr("readonly", true);
    $('#cid_reasonfornobnnumber').attr("readonly", true);
    $('#cid_reasonfornobnnumber').css("pointer-events", "none");
    $('#cid_reasonfornobnnumber_other').attr("readonly", true);

    tdg.c.addValidator("address1_line1", "Street 1");
    tdg.c.addValidator("address1_city", "City");
    tdg.c.addValidator("address1_stateorprovince", "Province");
    tdg.c.addValidator("address1_postalcode", "Postal Code");
    tdg.c.addValidator("address1_country", "Country");

    if (step_start == "1") {
        var AddressLine2Text = sessionStorage.getItem("AddressLine2Text");
        AddressLine2Text = (AddressLine2Text == "null" ? "" : AddressLine2Text);

        $("#address1_line1").val(sessionStorage.getItem("AddressLine1Text"));
        $("#address1_line2").val(AddressLine2Text);
        $("#address1_line3").val("");
        $("#address1_city").val(sessionStorage.getItem("CityName"));
        $("#address1_stateorprovince").val(sessionStorage.getItem("ProvinceStateCode"));
        $("#address1_postalcode").val(sessionStorage.getItem("PostalZipCode"));
        $("#address1_country").val(sessionStorage.getItem("CountryCode"));
    }

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
    //$("#address1_line1").parent().parent().hide();
}

function AddressComplete_address1_line1() {
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
