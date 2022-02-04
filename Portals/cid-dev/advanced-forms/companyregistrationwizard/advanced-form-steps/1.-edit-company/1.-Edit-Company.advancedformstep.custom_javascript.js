// CompanyRegistrationWizard-Edit Company.js

$(document).ready(function () {
    // resize WebResource_address_complete
    $("#WebResource_address_complete").height('72px');
    $("#websiteurl").width('100%');

    $("#telephone1").attr("placeholder", "");

    var step_start = sessionStorage.getItem("step_start");
    step_start = (step_start == "null" ? "" : step_start);

    //var cid_has_cra_bn = "{{user.cid_has_cra_bn}}";
    //var value = (cid_has_cra_bn ? 1 : 0);
    //$('#cid_has_cra_bn').val(value);

    var cid_has_cra_bn = sessionStorage.getItem("cid_has_cra_bn");
    var cid_has_cra_bn = (cid_has_cra_bn == "1" ? 1 : 0);
    $('#cid_has_cra_bn').val(cid_has_cra_bn);

    var cid_crabusinessnumber = sessionStorage.getItem("cid_crabusinessnumber");
    cid_crabusinessnumber = (cid_crabusinessnumber != "null" ? cid_crabusinessnumber : "");

    // do not have a business number?
    if (cid_crabusinessnumber == "")
    {
        //$('#cid_has_cra_bn_0').prop('checked', true);

        $("#cid_crabusinessnumber").parent().parent().hide();
        $("#cid_reasonfornobnnumber").parent().parent().show();

        //var cid_reasonfornobnnumber = "{{user.cid_reasonfornobnnumber}}";

        var cid_reasonfornobnnumber = sessionStorage.getItem("cid_reasonfornobnnumber");
        $("#cid_reasonfornobnnumber").val(cid_reasonfornobnnumber);

        //addValidator("cid_reasonfornobnnumber", "Reason for no CRA Business Number");

        if (cid_reasonfornobnnumber == "3")   // other
        {
            $("#cid_reasonfornobnnumber_other").parent().parent().show();
            //var cid_reasonfornobnnumber_other = "{{user.cid_reasonfornobnnumber_other}}";
            var cid_reasonfornobnnumber_other = sessionStorage.getItem("cid_reasonfornobnnumber_other");
            $("#cid_reasonfornobnnumber_other").val(cid_reasonfornobnnumber_other);
        }
        else {
            $("#cid_reasonfornobnnumber_other").parent().parent().hide();
        }
    }
    else {
        debugger;

        $("#cid_crabusinessnumber").parent().parent().show();
        $("#cid_reasonfornobnnumber").parent().parent().hide();
        $("#cid_reasonfornobnnumber_other").parent().parent().hide();

        //addValidator("cid_crabusinessnumber", "CRA Business Number");
    }

    $('#cid_crabusinessnumber').attr("readonly", true);
    $('#ovs_legalname').attr("readonly", true);
    $('#cid_reasonfornobnnumber').attr("readonly", true);
    $('#cid_reasonfornobnnumber').css("pointer-events", "none");
    $('#cid_reasonfornobnnumber_other').attr("readonly", true);

    addValidator("address1_line1", "Street 1");
    addValidator("address1_city", "City");
    addValidator("address1_stateorprovince", "Province");
    addValidator("address1_postalcode", "Postal Code");
    addValidator("address1_country", "Country");

    if (step_start == "1") {
        var AddressLine2Text = sessionStorage.getItem("AddressLine2Text");
        AddressLine2Text = (AddressLine2Text == "null" ? "" : AddressLine2Text);

        //$("#cid_crabusinessnumber").val("{{user.cid_crabusinessnumber}}");
        $("#cid_crabusinessnumber").val(sessionStorage.getItem("cid_crabusinessnumber"));

        //var cid_legalname = "{{user.cid_legalname}}";
        var cid_legalname = sessionStorage.getItem("cid_legalname");
        $("#ovs_legalname").val(cid_legalname);

        var OperatingName = sessionStorage.getItem("OperatingName");
        OperatingName = (OperatingName == "null" ? cid_legalname : OperatingName);
        $("#name").val(OperatingName);

        $("#address1_line1").val(sessionStorage.getItem("AddressLine1Text"));
        $("#address1_line2").val(AddressLine2Text);
        $("#address1_line3").val("");
        $("#address1_city").val(sessionStorage.getItem("CityName"));
        $("#address1_stateorprovince").val(sessionStorage.getItem("ProvinceStateCode"));
        $("#address1_postalcode").val(sessionStorage.getItem("PostalZipCode"));
        $("#address1_country").val(sessionStorage.getItem("CountryCode"));
    }
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
    $("#address1_line1").parent().parent().hide();
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

//eg. addValidator("customerid", "Customer")
function addValidator(fieldName, fieldLabel) {
    if (typeof (Page_Validators) == 'undefined') return;

    // Create new validator
    $("#" + fieldName + "_label").parent().addClass("required");

    var newValidator = document.createElement('span');
    newValidator.style.display = "none";
    newValidator.id = "RequiredFieldValidator" + fieldName;
    newValidator.controltovalidate = "casetypecode";
    newValidator.errormessage = "<a href='#" + fieldName + "_label'>" + fieldLabel + " is a mandatory field.</a>";
    newValidator.validationGroup = "";
    newValidator.initialvalue = "";
    newValidator.evaluationfunction = function () {
        var value = $("#" + fieldName).val();
        if (value == null || value == "") {
            return false;
        } else {
            return true;
        }
    };

    // Add the new validator to the page validators array:
    Page_Validators.push(newValidator);

    // Wire-up the click event handler of the validation summary link
    $("a[href='#" + fieldName + "_label']").on("click", function () { scrollToAndFocus(fieldName + '_label', fieldName); });
}

//eg. removeValidator("customerid")
function removeValidator(fieldName) {
    $.each(Page_Validators, function (index, validator) {
        if (validator.id == "RequiredFieldValidator" + fieldName) {
            Page_Validators.splice(index, 1);
        }
    });

    $("#" + fieldName + "_label").parent().removeClass("required");
}

