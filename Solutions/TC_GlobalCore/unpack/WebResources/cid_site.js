var k_form_org = "CID - Organization::BDIC - Organisation";
var k_form_site = "CID - Site::BDIC - Site";
var k_customertypecode_org = 948010000;
var k_customertypecode_site = 948010001;
var k_customertypecode = "cid_customertypecode";

var _form;

function Me_OnLoad(context) {
    debugger;

    _form = context.getFormContext();

    var customertypecode = null;
    var parentaccountid = _form.getAttribute("parentaccountid");

    // create?
    if (_form.ui.getFormType() == 1) {
        customertypecode = sessionStorage.getItem(k_customertypecode);
        if (customertypecode == k_customertypecode_org) customertypecode = k_customertypecode_site;
		 if (_form.getAttribute("cid_cidflag")) _form.getAttribute("cid_cidflag").setValue(100000000);
    }
    else {
        customertypecode = _form.getAttribute("customertypecode").getValue();
    }

    var value = form_setup(_form, customertypecode);
    if (value) return;
}

function Me_OnSave(context) {
    debugger;
}

function form_setup(context, customertypecode) {
    debugger;

    var load_form_name = "";
    switch (customertypecode) {
        case k_customertypecode_org:
            load_form_name = k_form_org;
            break;
        case k_customertypecode_site:
            load_form_name = k_form_site;
            break;
        default:
            return false;
    }
    load_form_name = load_form_name.toLowerCase();

    var current_form = Xrm.Page.ui.formSelector.getCurrentItem();
    var label = current_form.getLabel().toLowerCase();

    if (load_form_name.indexOf(label) != -1) return false;

    var forms = context.ui.formSelector.items.get();
    var form_name = load_form_name.toLowerCase();

    for (var item in forms) {
        var form = forms[item];
        var curent_form_name = form.getLabel().toLowerCase();
        if (form_name.indexOf(curent_form_name) != -1) {
            form.navigate();
            return true;
        }
    }
    return false;
}