var Account_TDGSiteProfile = (function (window, document) {

    const formMapping_EN = {
        "948010001": "TDG Site Profile",
        "948010000": "TDG Organizations",
    };

    const formMapping_FR = {
        "948010001": "Profil du site de TMD",
        "948010000": "Organisations TMD",
    };
    //const formContextGlobalRef;

    const TAB_NAME = "tab_Operations"
    const SECTION_NAME = "tab_Operations_section_NOP_Plaaning";
    const isInspectorOrAnalyst = true;
    const isPlannerOrManager = true;

    function filter_customertypecode(formContext) {

        const options = new Array("948010000","948010001");
        glHelper.filterOptionSet(formContext, "customertypecode", options, true);

    }

    function setFieldPermissions(formContext) {
        const rType = glHelper.GetValue(formContext, "customertypecode");
        console.log(rType);
        console.log("Inside my methode");
        if (rType !== null && rType.toString() === "948010001") {
            console.log(rType);
            console.log("IsInspector :-->"+ glHelper.hasCurrentUserRole("TDG Inspector"));
            console.log("IsAnalyst :-->"+ glHelper.hasCurrentUserRole("TDG Analyst"));
            if(isInspectorOrAnalyst === (glHelper.hasCurrentUserRole("TDG Inspector")||glHelper.hasCurrentUserRole("TDG Analyst"))){
                glHelper.SetSectionVisibility(formContext, TAB_NAME, SECTION_NAME, false);
            }
            console.log("After Inspector Check IF Loop");
            console.log("IsPlanner :-->"+glHelper.hasCurrentUserRole("TDG Planner") );
            console.log("IsManager :-->"+ glHelper.hasCurrentUserRole("TDG Manager"));
            if(isPlannerOrManager === (glHelper.hasCurrentUserRole("TDG Planner")||glHelper.hasCurrentUserRole("TDG Manager"))){
                glHelper.SetSectionVisibility(formContext, TAB_NAME, SECTION_NAME, true);
            }

        }
    }


    return{

        OnLoad: function (executionContext) {

            this.formContextGlobalRef = executionContext.getFormContext();

            setFieldPermissions(this.formContextGlobalRef);
        }
    }
    
})(window, document);