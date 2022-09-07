//
// CompanyRegistrationWizard-Company Create.js
//
$(document).ready(function () {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    // address
    tdg.cid.address_init(false);

    tdg.cid.WebResource_address_complete_readonly(false);

    var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name }}');
    if (companyName) {
        $(".previous-btn").attr('disabled', true);
    }

    $("#websiteurl").width('100%');
    $("#telephone1").attr("placeholder", "");
    //phone field formatting
    $("#telephone1").attr("maxlength", "10");
    $("#fax").attr("maxlength", "10");

    $("#telephone1").on('keyup', function () {
        var n = $(this).val().replace(/\D/g, '');
        $(this).val(n);
        var match = n.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            $(this).val('(' + match[1] + ') ' + match[2] + '-' + match[3]);
        }
    });
    $("#fax").on('keyup', function () {
        var n = $(this).val().replace(/\D/g, '');
        $(this).val(n);
        var match = n.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            $(this).val('(' + match[1] + ') ' + match[2] + '-' + match[3]);
        }
    });


    tdg.c.control_hide("cid_reasonfornobnnumber_other");
    tdg.c.control_hide("cid_companyclaim");

    var step_start = sessionStorage.getItem("step_start");
    step_start = (step_start == "null" ? "" : step_start);

    //var contactId = window.parent["Microsoft"]["Dynamic365"]["Portal"]["User"]["contactId"];

    var cid_has_cra_bn = '{{user.cid_has_cra_bn}}';
    var cid_has_cra_bn = (cid_has_cra_bn == "true" ? 1 : 0);
    var cid_crabusinessnumber = '{{user.cid_crabusinessnumber}}';
    var cid_reasonfornobnnumber = "{{user.cid_reasonfornobnnumber.Value}}";
    var cid_reasonfornobnnumber_other = tdg.c.replace_special_char("{{user.cid_reasonfornobnnumber_other}}");
    var cid_legalname = tdg.c.replace_special_char("{{user.cid_legalname}}");
    var cid_operatingname = tdg.c.replace_special_char("{{user.cid_operatingname}}");

    $('#cid_has_cra_bn').val(cid_has_cra_bn);
    tdg.c.control_hide("cid_has_cra_bn");

    // do not have a business number?
    if (cid_has_cra_bn != 1) {
        tdg.c.control_hide("cid_crabusinessnumber");
        tdg.c.control_show("cid_reasonfornobnnumber");

        $("#cid_reasonfornobnnumber").val(cid_reasonfornobnnumber);

        if (cid_reasonfornobnnumber == "3")   // other
        {
            tdg.c.control_show("cid_reasonfornobnnumber_other");
            $("#cid_reasonfornobnnumber_other").val(cid_reasonfornobnnumber_other);
        }
        else {
            tdg.c.control_hide("cid_reasonfornobnnumber_other");
        }
    }
    else {
        tdg.c.control_show("cid_crabusinessnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber_other");

        $("#cid_crabusinessnumber").val(cid_crabusinessnumber);
    }

    if (step_start != "2") {
        $("#ovs_legalname").val(cid_legalname);
        $("#name").val(cid_operatingname);
        debugger;
        var value = $("#address1_line1").val();
        address1_line1_set(value);
    }

    $('#cid_crabusinessnumber').attr("readonly", true);
    $('#ovs_legalname').attr("readonly", true);
    $('#cid_reasonfornobnnumber').attr("readonly", true);
    $('#cid_reasonfornobnnumber').css("pointer-events", "none");
    $('#cid_reasonfornobnnumber_other').attr("readonly", true);

    if (step_start == "1") {
        var address1_line1 = tdg.c.replace_special_char("{{user.address1_line1}}");
        var address1_line2 = tdg.c.replace_special_char("{{user.address1_line2}}");
        var address1_line3 = tdg.c.replace_special_char("{{user.address1_line3}}");
        var address1_city = tdg.c.replace_special_char("{{user.address1_city}}");
        var address1_stateorprovince = tdg.c.replace_special_char("{{user.address1_stateorprovince}}");
        var address1_postalcode = tdg.c.replace_special_char("{{user.address1_postalcode}}");
        var address1_country = tdg.c.replace_special_char("{{user.address1_country}}");

        $("#address1_line1").val(address1_line1);
        $("#address1_line2").val(address1_line2);
        $("#address1_line3").val(address1_line3);
        $("#address1_city").val(address1_city);
        $("#address1_stateorprovince").val(address1_stateorprovince);
        $("#address1_postalcode").val(address1_postalcode);
        //$("#address1_country").val(address1_country);

        sessionStorage.setItem("AddressLine1Text", address1_line1);
    }

    // autocomplete off
    $("#name").attr("autocomplete", "new-password");
    $("#address1_longitude").attr("autocomplete", "new-password");
    $("#address1_latitude").attr("autocomplete", "new-password");
    $("#telephone1").attr("autocomplete", "new-password");
    $("#fax").attr("autocomplete", "new-password");
    $("#cid_reasonfornobnnumber_other").attr("autocomplete", "new-password");
    $("#websiteurl").attr("autocomplete", "new-password");

    //Add listeners for the address fields to change the "manually entered" flag
    $("#address1_line1").attr("oninput", "setManualAddressEntryFlag()");
    $("#address1_city").attr("oninput", "setManualAddressEntryFlag()");
    $("#address1_stateorprovince").attr("oninput", "setManualAddressEntryFlag()");
    $("#address1_postalcode").attr("oninput", "setManualAddressEntryFlag()");
    $("#address1_country").attr("oninput", "setManualAddressEntryFlag()");

    tdg.cid.convert_province_to_code(selected_language);
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            debugger;
            var address1_line1 = $("#address1_line1").val();
            sessionStorage.setItem("AddressLine1Text", address1_line1);

            sessionStorage.setItem("step_start", "");

            // cid claim company
            $('#cid_companyclaim').val(1);

            return true;
        }
    }(window.jQuery));
}

function address1_line1_set(value) {
    debugger;

    try {
        var f = document.getElementById("WebResource_address_complete");
        var c = f.contentWindow;
        c.document.getElementById("address1_line1").value = value;
    } catch (e) { }
}