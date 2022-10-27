var _form;

function Me_OnLoad(context) {
    debugger;
    _form = context.getFormContext();

    return;

    var current_form = Xrm.Page.ui.formSelector.getCurrentItem();
    if (current_form.getLabel() == "") {

    }
    var forms = _form.ui.formSelector.items.get();
    var form_company = null;
    var form_site = null;
    for (var i = 0; i < forms.length; i++)
    {
        var f = forms[i];
        switch (f.getLabel()) {
            case "CID - Company":
                form_company = f;
                // f.getId();
                break;
            case "CID - Site":
                form_site = f;
                break;
        }
    }

    // create?
    if (_form.ui.getFormType() == 1) {

    }
    else {
        var customertypecode = _form.getAttribute("customertypecode").getValue();
        switch (customertypecode) {
            case 948010000: // Parent Company
                //form_company.navigate();
                break;
            case 948010001: // Site
                //form_site.navigate();
                break;
        }
    }
}
