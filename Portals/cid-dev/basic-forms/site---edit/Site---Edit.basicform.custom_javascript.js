//
// Basic Form - Site - Edit.js
//

var _busy = false;

$(document).ready(function ()
{
    debugger;

    // address
    tdg.cid.address_init(true);

    var selected_language = '{{website.selected_language.code}}';

    //Phone number formatting
    tdg.cid.phone_init("telephone1", selected_language);
    tdg.cid.phone_init("fax", selected_language);

    var cid_legalname = "{{user.cid_legalname}}";
    cid_legalname = tdg.c.replace_special_char(cid_legalname);

    $("#ovs_legalname").val(cid_legalname);
    $("#name").val(cid_legalname);
    $("#cid_sitename").val(cid_legalname);

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
});

function cid_same_as_company_change() {
    debugger;

    if (_busy) return;

    _busy = true;

    var parent_id = '{{ user.parentcustomerid.id }}';
    tdg.cid.address_same_as_company(parent_id);

    _busy = false;
}
