var Account_TDGSiteProfile = (function (window, document) {

    var formMapping_EN = {
        "948010001": "TDG Site Profile",
        "948010000": "TDG Organizations",
    };

    var formMapping_FR = {
        "948010001": "Profil du site de TMD",
        "948010000": "Organisations TMD",
    };
    //const formContextGlobalRef : any;

    const TAB_NAME = "tab_Operations"
    const SECTION_NAME = "tab_Operations_section_NOP_Plaaning";
    const isInspectorOrAnalystOrManager = true;
    const isPlanner = true;
    
    function setFieldPermissions(formContext) {
        //const rType = glHelper.GetValue(formContext, "customertypecode");
       
        //if (rType !== null && rType.toString() === "948010001") {
           /*
            if(isInspectorOrAnalystOrManager === (glHelper.hasCurrentUserRole("TDG Inspector")|| glHelper.hasCurrentUserRole("TDG Analyst") ||glHelper.hasCurrentUserRole("TDG Manager"))){
                glHelper.SetSectionVisibility(formContext, TAB_NAME, SECTION_NAME, false);
            }
           
            if(isPlanner === (glHelper.hasCurrentUserRole("TDG Planner"))) {
                glHelper.SetSectionVisibility(formContext, TAB_NAME, SECTION_NAME, true);
            }
            */
            
        var isPlanner = (glHelper.hasCurrentUserRole("TDG Planner"))
        glHelper.SetSectionVisibility(formContext, TAB_NAME, SECTION_NAME, isPlanner);

        // var isTDG_Analyst = (glHelper.hasCurrentUserRole("TDG Analyst"))

        let roles = glHelper.GetCurrentUserRoles();
        // let roles_RemoveAnalyst = roles.Where(s => (s.name != "TDG Analyst")).ToArray();

        if (roles) {

            if (roles.find(r => r.name.includes("Analyst"))
                && !roles.find(r => r.name.includes("Administrator"))
                && !roles.find(r => r.name.includes("Inspector"))
                && !roles.find(r => r.name.includes("Manager"))
            && !roles.find(r => r.name.includes("Planner")))
            {
                glHelper.SetControlReadOnly(formContext, "cid_cidflag", true);
            }
            else glHelper.SetControlReadOnly(formContext, "cid_cidflag", false);
        }

    }
  
    return{
        OnLoad: function (executionContext) {
            debugger;
            const formContextGlobalRef = executionContext.getFormContext();

            setFieldPermissions(formContextGlobalRef);

            // add filter to company
            formContextGlobalRef
        }
    }
    
})(window, document);