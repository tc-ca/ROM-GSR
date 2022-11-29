//
// SiteRegistrationWizard-Site.js
//

var _busy = false;

$(document).ready(function () {
    debugger;
document.getElementById("address1_latitude").addEventListener('change', (event) => {
    //get Latitude and set it to nearest 4 digits
    var Lat = $("#address1_latitude").val();
    $("#address1_latitude").val(Number.parseFloat(Lat).toFixed(4));
});
document.getElementById("address1_longitude").addEventListener('change', (event) => {
    //get Lontitude and set it to nearest 4 digits
    var Longtitude = $("#address1_longitude").val();
    $("#address1_longitude").val(Number.parseFloat(Longtitude).toFixed(4));

});


    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    // address
    tdg.cid.address_init(true);

    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('newsite') && urlParams.get('newsite') == 'true' && !urlParams.has('stepid')) {
        $('#redirectInstruction').show();
        $('#instructions').hide();
        $('#EntityFormView').hide();

        $("#NextButton").click();
    }
    else
        $('#redirectInstruction').hide();

    //Phone number formatting
    tdg.cid.phone_init("telephone1", selected_language);
    tdg.cid.phone_init("fax", selected_language);

    var cid_legalname = "{{user.cid_legalname}}";
    cid_legalname = tdg.c.replace_special_char(cid_legalname);

    $("#ovs_legalname").val(cid_legalname);
    $("#name").val(cid_legalname);

    // hide controls
    tdg.c.control_hide("name");
    tdg.c.control_hide("cid_siteclaim");

    // cid_same_as_company
    $("#cid_same_as_company").change(function () {
        cid_same_as_company_change();
    });
    cid_same_as_company_change();

    $("#cid_sitename").attr("autocomplete", "new-password");
    $("#telephone1").attr("autocomplete", "new-password");
    $("#fax").attr("autocomplete", "new-password");

    $("#ovs_address_type").change(function () {
        tdg.cid.address_type_change(true);
    });
    tdg.cid.address_type_change(false);

    tdg.cid.convert_province_to_code(selected_language);
    $('#loader').hide();
});

function cid_same_as_company_change() {
    debugger;

    if (_busy) return;

    _busy = true;

    var parent_id = '{{ user.parentcustomerid.id }}';
    tdg.cid.address_same_as_company(parent_id);

    _busy = false;
}

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            return true;
        }
    }(window.jQuery));
}
