var _form;

function Me_OnLoad(context) {
    debugger;
    _form = context.getFormContext();

    _form.getAttribute("emailaddress1").setRequiredLevel("required");
}
