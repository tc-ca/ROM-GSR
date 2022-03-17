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
        const rType = glHelper.GetValue(formContext, "customertypecode");
       
        if (rType !== null && rType.toString() === "948010001") {
           
            if(isInspectorOrAnalystOrManager === (glHelper.hasCurrentUserRole("TDG Inspector")|| glHelper.hasCurrentUserRole("TDG Analyst") ||glHelper.hasCurrentUserRole("TDG Manager"))){
                glHelper.SetSectionVisibility(formContext, TAB_NAME, SECTION_NAME, false);
            }
           
            if(isPlanner === (glHelper.hasCurrentUserRole("TDG Planner"))) {
                glHelper.SetSectionVisibility(formContext, TAB_NAME, SECTION_NAME, true);
            }

        }
    }
    return{
        OnLoad: function (executionContext) {

            const formContextGlobalRef = executionContext.getFormContext();

            setFieldPermissions(formContextGlobalRef);
        }
    }
    
})(window, document);