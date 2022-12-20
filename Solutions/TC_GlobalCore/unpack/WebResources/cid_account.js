var _form;

function Me_OnLoad(context) {
    debugger;
    _form = context.getFormContext();

    _form.getAttribute("ovs_address1_province").setRequiredLevel("required");
    _form.getAttribute("address1_country").setValue("Canada");

    _form.getAttribute("cid_has_cra_bn").addOnChange(cid_has_cra_bn_OnChange);
    cid_has_cra_bn_OnChange();

    _form.getAttribute("cid_reasonfornobnnumber").addOnChange(cid_reasonfornobnnumber_OnChange);

    form_setup();
}

function cid_has_cra_bn_OnChange() {
    debugger;
    var value = _form.getAttribute("cid_has_cra_bn").getValue();

    _form.getControl("cid_crabusinessnumber").setVisible(value);
    _form.getControl("cid_reasonfornobnnumber").setVisible(!value);
    _form.getControl("cid_reasonfornobnnumber_other").setVisible(!value);

    _form.getAttribute("cid_crabusinessnumber").setRequiredLevel("none");
    _form.getAttribute("cid_reasonfornobnnumber").setRequiredLevel("none");
    _form.getAttribute("cid_reasonfornobnnumber_other").setRequiredLevel("none");

    if (value) {
        _form.getAttribute("cid_crabusinessnumber").setRequiredLevel("none");
    }
    else {
        _form.getAttribute("cid_reasonfornobnnumber").setRequiredLevel("required");
        cid_reasonfornobnnumber_OnChange();
    }
}

function cid_reasonfornobnnumber_OnChange() {
    debugger;
    var value = _form.getAttribute("cid_reasonfornobnnumber").getValue();
    switch (value) {
        case 3:
            _form.getControl("cid_reasonfornobnnumber_other").setVisible(true);
            _form.getAttribute("cid_reasonfornobnnumber_other").setRequiredLevel("required");
            break;
        default:
            _form.getControl("cid_reasonfornobnnumber_other").setVisible(false);
            _form.getAttribute("cid_reasonfornobnnumber_other").setRequiredLevel("none");
    }
}

function form_setup() {
    debugger;

    var current_form = Xrm.Page.ui.formSelector.getCurrentItem();
    var label = current_form.getLabel();

    // create?
    if (_form.ui.getFormType() == 1) {

    }
    else {
    }
}

//function Me_OnLoad(context) {
//    debugger;
//    _form = context.getFormContext();

//    var current_form = Xrm.Page.ui.formSelector.getCurrentItem();
//    if (current_form.getLabel() == "") {

//    }
//    var forms = _form.ui.formSelector.items.get();
//    var form_company = null;
//    var form_site = null;
//    for (var i = 0; i < forms.length; i++)
//    {
//        var f = forms[i];
//        switch (f.getLabel()) {
//            case "CID - Company":
//                form_company = f;
//                // f.getId();
//                break;
//            case "CID - Site":
//                form_site = f;
//                break;
//        }
//    }

//    // create?
//    if (_form.ui.getFormType() == 1) {

//    }
//    else {
//        var customertypecode = _form.getAttribute("customertypecode").getValue();
//        switch (customertypecode) {
//            case 948010000: // Parent Company
//                //form_company.navigate();
//                break;
//            case 948010001: // Site
//                //form_site.navigate();
//                break;
//        }
//    }
//}
