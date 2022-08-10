//
// CompanyRegistrationWizard-Company Edit.js
//
$(document).ready(function () {
    debugger;

    // address
    tdg.cid.address_init(false);

    tdg.cid.WebResource_address_complete_readonly(false);

    // header
    advanced_form_header();

    var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name }}');
    if (companyName) {
        $(".previous-btn").attr('disabled', true);
    }

    $("#websiteurl").width('100%');
    $("#telephone1").attr("placeholder", "");
    tdg.c.control_hide("cid_reasonfornobnnumber_other");
    tdg.c.control_hide("cid_companyclaim");

    var step_start = sessionStorage.getItem("step_start");
    step_start = (step_start == "null" ? "" : step_start);

    if (step_start == "2") {
        var cid_has_cra_bn = $('#cid_has_cra_bn').val();
        var address1_line1 = $("#address1_line1").val();
        var cid_legalname = $('#ovs_legalname').val();
        var cid_operatingname = $('#name').val();
        var cid_has_cra_bn = $('#cid_has_cra_bn').val();
        var cid_reasonfornobnnumber = $('#cid_reasonfornobnnumber').val();
        var cid_reasonfornobnnumber_other = $('#cid_reasonfornobnnumber_other').val();
    }
    else {
        var cid_has_cra_bn = '{{user.cid_has_cra_bn}}';
        cid_has_cra_bn = (cid_has_cra_bn == "true" ? 1 : 0);
        var cid_crabusinessnumber = '{{user.cid_crabusinessnumber}}';
        var cid_reasonfornobnnumber = "{{user.cid_reasonfornobnnumber.Value}}";
        var cid_reasonfornobnnumber_other = tdg.c.replace_special_char("{{user.cid_reasonfornobnnumber_other}}");
        var cid_legalname = tdg.c.replace_special_char("{{user.cid_legalname}}");
        var cid_operatingname = tdg.c.replace_special_char("{{user.cid_operatingname}}");
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
        $("#address1_country").val(address1_country);
    }
    tdg.c.control_hide("cid_has_cra_bn");

    cid_legalname = tdg.c.replace_special_char(cid_legalname);
    cid_operatingname = tdg.c.replace_special_char(cid_operatingname);

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
        debugger;
        var value = $("#address1_line1").val();
        address1_line1_set(value);
    }

    $('#cid_crabusinessnumber').attr("readonly", true);
    $('#ovs_legalname').attr("readonly", true);
    $('#cid_reasonfornobnnumber').attr("readonly", true);
    $('#cid_reasonfornobnnumber').css("pointer-events", "none");
    $('#cid_reasonfornobnnumber_other').attr("readonly", true);

    // autocomplete off
    $("#name").attr("autocomplete", "new-password");
    $("#address1_longitude").attr("autocomplete", "new-password");
    $("#address1_latitude").attr("autocomplete", "new-password");
    $("#telephone1").attr("autocomplete", "new-password");
    $("#fax").attr("autocomplete", "new-password");
    $("#cid_reasonfornobnnumber_other").attr("autocomplete", "new-password");
    $("#websiteurl").attr("autocomplete", "new-password");
});

function advanced_form_header() {
    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name}}');

    try {
        var value = tdg.error_message.message("m000009");
        value = value.replace("{0}", companyName);
        $('h1:first')[0].innerHTML = value;
    } catch (e) { }

    var steps = $('li.list-group-item');
    for (var i = 0; i < steps.length; i++) {
        var item = steps[i];
        var text = item.innerText;
        text = tdg.error_message.message(text);
        item.innerText = text;
    }
}

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
