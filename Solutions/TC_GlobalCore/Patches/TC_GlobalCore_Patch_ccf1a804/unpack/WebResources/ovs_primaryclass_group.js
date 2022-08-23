var _form;

function Me_OnLoad(context) {
    debugger;
    _form = context.getFormContext();
    _form.getAttribute("ovs_primaryclass").addOnChange(name_setup);
    _form.getAttribute("ovs_class_compatibility_group").addOnChange(name_setup);
    _form.getControl("ovs_name").setDisabled(true);
}

function name_setup(context) {
    debugger;

    // ovs_name
    _form = context.getFormContext();
    var ovs_primaryclass = _form.getAttribute("ovs_primaryclass").getValue();
    var ovs_class_compatibility_group = _form.getAttribute("ovs_class_compatibility_group").getValue();

    if ((ovs_primaryclass == null) || (ovs_class_compatibility_group == null))
    {
        _form.getAttribute("ovs_name").setValue("");
        return;
    }
    var ovs_name = ovs_primaryclass[0].name + ovs_class_compatibility_group[0].name;
    _form.getAttribute("ovs_name").setValue(ovs_name);
}