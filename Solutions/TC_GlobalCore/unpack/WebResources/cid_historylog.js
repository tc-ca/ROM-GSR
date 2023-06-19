function Me_OnLoad(eContext)
{
    debugger;
    var lang = Xrm.Page.context.getUserLcid();
    var field = (lang == 1033 ? "cid_memoenglish" : "cid_memofrench");
    Xrm.Page.getControl(field).setVisible(true);
}