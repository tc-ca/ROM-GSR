function Me_OnLoad(eContext)
{
    debugger;
    var lang = Xrm.Page.context.getUserLcid();
    var field = (lang == 1033 ? "cid_memoenglish" : "cid_memofrench");
    Xrm.Page.getControl(field).setVisible(true);

   //show hide history code description

   //get the quick view control
   var quickViewControlEnglish =Xrm.Page.ui.quickForms.get("QuickviewControl_EnglishDescription");
  var quickViewControlFrench = Xrm.Page.ui.quickForms.get("QuickviewControlFrenchDescripton");
	
  //hide the quick view
  if (lang == 1033 )
  {  
          quickViewControlEnglish.setVisible(true);
          quickViewControlFrench.setVisible(false);
  }
  else
   {
          quickViewControlEnglish.setVisible(false);
          quickViewControlFrench.setVisible(true);

   }



}