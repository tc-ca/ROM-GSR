//
// Basic Form - Site - Create.js
//

var _busy = false;

$(document).ready(function () {
    debugger;
    document.getElementById("address1_latitude").addEventListener('change', (event) => { 
        var Lat = $("#address1_latitude").val() ;
      });

    // address
    tdg.cid.address_init(true);

    var cid_legalname = "{{user.cid_legalname}}";
    cid_legalname = tdg.c.replace_special_char(cid_legalname);

    $("#ovs_legalname").val(cid_legalname);
    $("#name").val(cid_legalname);

    // hide controls
    tdg.c.control_hide("name");
    tdg.c.control_hide("cid_siteclaim");

    $("#ovs_legalname").attr("readonly", "true");
    $("#address1_country").attr("readonly", "true");
    $("#name").attr("readonly", "true");

    // cid_same_as_company
    $("#cid_same_as_company").change(function () {
        cid_same_as_company_change();
    });
    cid_same_as_company_change();

    $("#cid_sitename").attr("autocomplete", "new-password");
    $("#telephone1").attr("autocomplete", "new-password");
    $("#fax").attr("autocomplete", "new-password");

    //Phone masking
    var selected_language = '{{website.selected_language.code}}';

    //Phone number formatting
    tdg.cid.phone_init("telephone1", selected_language);
    tdg.cid.phone_init("fax", selected_language);

    $("#ovs_address_type").change(function () {
        tdg.cid.address_type_change(true);
    });
    tdg.cid.address_type_change(false);

    //Add listeners for the address fields to change the "manually entered" flag
    $("#address1_line1").attr("oninput", "setManualAddressEntryFlag()");
    $("#address1_city").attr("oninput", "setManualAddressEntryFlag()");
    $("#address1_stateorprovince").attr("oninput", "setManualAddressEntryFlag()");
    $("#address1_postalcode").attr("oninput", "setManualAddressEntryFlag()");
    $("#address1_country").attr("oninput", "setManualAddressEntryFlag()");
});

function cid_same_as_company_change() {
    debugger;

    if (_busy) return;

    _busy = true;

    var parent_id = '{{ user.parentcustomerid.id }}';
    tdg.cid.address_same_as_company(parent_id);

    _busy = false;
}

//toggles the manual entry flag to on
function setManualAddressEntryFlag() {
    $("#cid_addressoverwritten").val(1);
}
