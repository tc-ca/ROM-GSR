// CompanyRegistrationWizard-Start.js

$(document).ready(function () {
    debugger;

    // default current use is "Primary"
    $("#cid_contacttype").val(100000000);
    control_hide("cid_contacttype");

    //$("#parentcustomerid").parent().parent().parent().hide();
    //$("#cid_operatingname").parent().parent().hide();
    control_hide("parentcustomerid", true);
    control_hide("cid_operatingname");

    $("#cid_has_cra_bn").change(cid_has_cra_bn_onchange);
    cid_has_cra_bn_onchange();

    $("#cid_reasonfornobnnumber").change(cid_reasonfornobnnumber_onchange);
    cid_reasonfornobnnumber_onchange();
});

function cid_reasonfornobnnumber_onchange() {
    debugger;

    $("#cid_reasonfornobnnumber_other").val("");

    $("#cid_reasonfornobnnumber_other").val();
    cid_reasonfornobnnumber = $("#cid_reasonfornobnnumber").val();
    if (cid_reasonfornobnnumber == 3)   // other
    {
        $("#cid_reasonfornobnnumber_other").parent().parent().show();
        addValidator("cid_reasonfornobnnumber_other", "Other Reason");
    }
    else
    {
        $("#cid_reasonfornobnnumber_other").parent().parent().hide();
        removeValidator("cid_reasonfornobnnumber_other");
    }
}

// clear parentcustomerid
function clear_parentcustomerid() {
    // clear data
    sessionStorage.setItem("AddressLine1Text", "");
    sessionStorage.setItem("AddressLine2Text", "");
    sessionStorage.setItem("CityName", "");
    sessionStorage.setItem("ProvinceStateCode", "");
    sessionStorage.setItem("PostalZipCode", "");
    sessionStorage.setItem("CountryCode", "");

    $("#cid_crabusinessnumber").val("");
    $("#cid_reasonfornobnnumber").val("");
    $("#cid_reasonfornobnnumber_other").val("");
    $("#cid_legalname").val("");
    $("#cid_operatingname").val("");

    $("#parentcustomerid").attr("value", null);
    $("#parentcustomerid_name").attr("value", null);
}

function cid_has_cra_bn_onchange() {
    debugger;
    clear_parentcustomerid();

    removeValidator("cid_crabusinessnumber");
    removeValidator("cid_reasonfornobnnumber");
    removeValidator("cid_reasonfornobnnumber_other");
    removeValidator("cid_legalname");

    var cid_has_cra_bn = $("#cid_has_cra_bn").val();

    $("#cid_reasonfornobnnumber_other").parent().parent().hide();

    // do not have a business number?
    if (cid_has_cra_bn == 0) {
        $("#cid_crabusinessnumber").parent().parent().hide();
        $("#cid_reasonfornobnnumber").parent().parent().show();
        $("#cid_legalname").parent().parent().show();

        addValidator("cid_legalname", "Legal Name");
        addValidator("cid_reasonfornobnnumber", "Reason for no CRA Business Number");
    }
    else {
        $("#cid_crabusinessnumber").parent().parent().show();
        $("#cid_reasonfornobnnumber").parent().parent().hide();
        $("#cid_legalname").parent().parent().hide();

        addValidator("cid_crabusinessnumber", "CRA Business Number");
    }
}

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            sessionStorage.setItem("step_start", "1");
            debugger;
            var cid_has_cra_bn = $("#cid_has_cra_bn").val();

            var validation = false;
            var rom_data, filter, legalname;

            // do not have a business number?
            if (cid_has_cra_bn == 0) {
                debugger;

                legalname = $("#cid_legalname").val();
                filter = "ovs_legalname eq '" + legalname + "'";
                rom_data = OData_List("account", filter);
                if (rom_data.length > 0) {
                    rom_data = rom_data[0];

                    $("#parentcustomerid").attr("value", rom_data.accountid);
                    $("#parentcustomerid_name").attr("value", legalname);
                    $("#parentcustomerid_entityname").attr("value", 'account');

                    $("#cid_operatingname").val(rom_data.name);
                }

                validation = true;
            }
            else {
                debugger;
                var data = cid_crabusinessnumber_onchange();

                if (data == "") {
                    error_message("Invalid CRA Business Number");
                    //alert("Invalid CRA Business Number");
                }
                else {
                    legalname = data.cid_legalname;
                    var cid_crabusinessnumber = $("#cid_crabusinessnumber").val();

                    validation = false; // true

                    filter = "cid_crabusinessnumber eq '" + cid_crabusinessnumber + "'";
                    rom_data = OData_List("account", filter);
                    if (rom_data.length > 0) {
                        rom_data = rom_data[0];

                        $("#parentcustomerid").attr("value", rom_data.accountid);
                        $("#parentcustomerid_name").attr("value", legalname);
                        $("#parentcustomerid_entityname").attr("value", 'account');
                    }
                    validation = true;
                }
            }
            return validation;
        }
    }(window.jQuery));
}

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

function removeValidator(fieldName) {
    $.each(Page_Validators, function (index, validator) {
        if (validator.id == "RequiredFieldValidator" + fieldName) {
            Page_Validators.splice(index, 1);
        }
    });
    $("#" + fieldName + "_label").parent().removeClass("required");
}

function cid_crabusinessnumber_onchange() {
    var cid_crabusinessnumber = $("#cid_crabusinessnumber").val();
    var data;
    data = Retrieve_cra(cid_crabusinessnumber);
    return data;
}

// CRA BN API - DEV ONLY
function Retrieve_cra(bn) {
    var data;
    var data_fake = {};
    var filter = "cid_businessregistrationnumber eq '" + bn + "'";

    data = OData_List("cid_fake_cra_bn_api", filter);
    if (data.length == 0) {
        return data;
    }

    data = data[0];

    data_fake.LegalName = data.cid_legalname;
    data_fake.OperatingName = data.cid_legalname;
    data_fake.BusinessRegistrationNumber = bn;
    var PhysicalLocationAddress = {};
    PhysicalLocationAddress.AddressLine1Text = data.cid_addressline1text;
    PhysicalLocationAddress.AddressLine2Text = data.cid_addressline2text;
    PhysicalLocationAddress.CityName = data.cid_cityname;
    PhysicalLocationAddress.ProvinceStateCode = data.cid_provincestatecode;
    PhysicalLocationAddress.PostalZipCode = data.cid_postalzipcode;
    PhysicalLocationAddress.CountryCode = data.cid_countrycode;

    data_fake.PhysicalLocationAddress = PhysicalLocationAddress;

    BN_Selected(data_fake);

    return data;
}

function BN_Selected(data) {
    debugger;

    var LegalName = data.LegalName				        // Legal Name
    var OperatingName = data.OperatingName				// Operating Name
    OperatingName = (OperatingName == "" ? LegalName : OperatingName);  // default

    var address = data.PhysicalLocationAddress;
    var AddressLine1Text = address.AddressLine1Text;
    var AddressLine2Text = address.AddressLine2Text;
    var CityName = address.CityName;
    var ProvinceStateCode = address.ProvinceStateCode;
    var PostalZipCode = address.PostalZipCode;
    var CountryCode = address.CountryCode;

    $("#cid_legalname").val(LegalName);
    $("#cid_operatingname").val(OperatingName);

    sessionStorage.setItem("AddressLine1Text", AddressLine1Text);
    sessionStorage.setItem("AddressLine2Text", AddressLine2Text);
    sessionStorage.setItem("CityName", CityName);
    sessionStorage.setItem("ProvinceStateCode", ProvinceStateCode);
    sessionStorage.setItem("PostalZipCode", PostalZipCode);
    sessionStorage.setItem("CountryCode", CountryCode);
}

// odata
function OData_List(entity, filter) {
    var url = entity + "?$filter=" + filter;

    //var oDataUrl = "https://cid-dev.powerappsportals.com/_odata/" + url;
    var oDataUrl = "~/_odata/" + url;

    var response = null;

    $.ajax({
        type: "GET",
        url: oDataUrl,
        dataType: "json",
        async: false
    }).done(function (json) {
        response = json.value;
    });
    return response;
}

function error_message(message)
{
    var validationSection = $('#ValidationSummaryEntityFormView');
    validationSection.append($("<div class='notification alert-danger' role='alert'>" + message + "</div>"));
    validationSection.show();
}

function control_hide(fieldName, is_lookup) {
    if (is_lookup) {
        $("#" + fieldName).parent().parent().parent().hide();
    }
    else {
        $("#" + fieldName).hide();
        $("#" + fieldName + "_label").hide();
    }
}