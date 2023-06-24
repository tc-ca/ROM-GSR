var _form;

function Me_OnLoad(context) {
    debugger;
    _form = context.getFormContext();
}

function NewRecord()
{
    debugger;
    var parameters = null;
    Xrm.Utility.openEntityForm("cid_fake_cra_bn_api", null, parameters);
}

function NewRecord_subgrid()
{
    debugger;
}