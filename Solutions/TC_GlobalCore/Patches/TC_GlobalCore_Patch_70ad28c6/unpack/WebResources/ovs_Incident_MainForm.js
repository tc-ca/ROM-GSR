///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>


var TDG_Incident_MainForm = (function (window, document) {
    //variables
    var formType;
    //********************private methods*******************

    function setReportable(formContext, isScope) {

        //is Reportable
        var isReportable = formType == glHelper.FORMTYPE_CREATE;

        //!formContext.getAttribute("ovs_reportable_ind").getIsDirty() 

        if (isScope && isReportable) glHelper.SetValue(formContext, "ovs_reportable_ind", true);
    }

    //********************private methods end***************

    //********************public methods***************
    return {

        OnLoad: async function (executionContext) {

            var formContext = executionContext.getFormContext();
            formType = glHelper.GetFormType(formContext);

            var releasetype = formContext.getAttribute("ovs_release_type_cd");
            releasetype.removeOnChange(TDG_Incident_MainForm.ReleaseType_OnChange);
            releasetype.addOnChange(TDG_Incident_MainForm.ReleaseType_OnChange);
            releasetype.fireOnChange();

            var scope = formContext.getAttribute("ovs_scope_cd");
            scope.removeOnChange(TDG_Incident_MainForm.Scope_OnChange);
            scope.addOnChange(TDG_Incident_MainForm.Scope_OnChange);
            scope.fireOnChange();

            var closure = formContext.getAttribute("ovs_closure_cd");
            closure.removeOnChange(TDG_Incident_MainForm.Closure_OnChange);
            closure.addOnChange(TDG_Incident_MainForm.Closure_OnChange);
            closure.fireOnChange();

            var closuretype = formContext.getAttribute("ovs_closure_type_cd");
            closuretype.removeOnChange(TDG_Incident_MainForm.ClosureType_OnChange);
            closuretype.addOnChange(TDG_Incident_MainForm.ClosureType_OnChange);            

            var source = formContext.getAttribute("ovs_source_cds");
            source.removeOnChange(TDG_Incident_MainForm.Source_OnChange);
            source.addOnChange(TDG_Incident_MainForm.Source_OnChange);
            source.fireOnChange();

            var phImpact = formContext.getAttribute("ovs_physical_impact_cds");
            phImpact.removeOnChange(TDG_Incident_MainForm.PhisicalImpact_OnChange);
            phImpact.addOnChange(TDG_Incident_MainForm.PhisicalImpact_OnChange);
           
            var phImpactFlag = formContext.getAttribute("ovs_physical_impact_flag_ind");
            phImpactFlag.removeOnChange(TDG_Incident_MainForm.PhisicalImpactFlag_OnChange);
            phImpactFlag.addOnChange(TDG_Incident_MainForm.PhisicalImpactFlag_OnChange);
            phImpactFlag.fireOnChange();

            var ecacuatioFlag = formContext.getAttribute("ovs_evacuation_due_incident_ind");
            ecacuatioFlag.removeOnChange(TDG_Incident_MainForm.EvacuationProfileFlag_OnChange);
            ecacuatioFlag.addOnChange(TDG_Incident_MainForm.EvacuationProfileFlag_OnChange);
            ecacuatioFlag.fireOnChange();


            if (formType == glHelper.FORMTYPE_CREATE) {


            }
            else {

                var impact = formContext.getAttribute("ovs_main_impact_cds");
                impact.removeOnChange(TDG_Incident_MainForm.Impact_OnChange);
                impact.addOnChange(TDG_Incident_MainForm.Impact_OnChange);
                impact.fireOnChange();               
            }
        },

        ReleaseType_OnChange: async function (executionContext) {
            try {
                var formContext = executionContext.getFormContext();
                var multiSelectOptionSet = formContext.getAttribute("ovs_release_type_cd").getValue();
                if (multiSelectOptionSet != null) {
                    let optionString = multiSelectOptionSet.toString();
                    if (optionString.indexOf("918640008") !== -1) {
                        formContext.getControl("ovs_release_type_other_txt").setVisible(true);
                        formContext.getAttribute("ovs_release_type_other_txt").setRequiredLevel("required");
                    } else {
                        formContext.getControl("ovs_release_type_other_txt").setVisible(false);
                        formContext.getAttribute("ovs_release_type_other_txt").setRequiredLevel("none");
                    }
                    if (optionString.indexOf("918640004") !== -1) {
                        formContext.getAttribute("ovs_release_type_cd").setValue([918640004])
                        formContext.getControl("ovs_release_type_other_txt").setVisible(false);
                        formContext.getAttribute("ovs_release_type_other_txt").setRequiredLevel("none");
                    }
               } else {
                    formContext.getControl("ovs_release_type_other_txt").setVisible(false);
                    formContext.getAttribute("ovs_release_type_other_txt").setRequiredLevel("none");
                }
            } catch (error) {
                Xrm.Navigation.openErrorDialog({ message: error })

            } finally {
            }
        },

        Scope_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();
            //var isScope = formContext.getAttribute("ovs_scope_cd").getSelectedOption();

            var isScope = formContext.getAttribute("ovs_scope_cd").getValue() != null;

            if (!isScope) formContext.getAttribute("ovs_main_impact_cds").setValue(null);
            glHelper.SetDisabled(formContext, "ovs_main_impact_cds", !isScope);
            //glHelper.SetControlReadOnly(formContext, "ovs_main_impact_cds", !isScope);
            glHelper.SetRequiredLevel(formContext, "ovs_main_impact_cds", isScope);

            //update reportable
            setReportable(formContext, isScope);            
        },

        Impact_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();
            var isEditable = false;
            var options = formContext.getAttribute("ovs_main_impact_cds").getSelectedOption();
            //any selected
            if (options != undefined && options.length > 0) {

                for (var i = 0; i < options.length; i++) {
                    //any or both death and injuries selected
                    if (options[i].value == 1 || options[i].value == 2) { isEditable = true; break; }
                }
            }
            //show editable grid
            glHelper.SetSectionVisibility(formContext, "tab_Injuries", "tab_3_section_injuries_editable", isEditable);
            glHelper.SetSectionVisibility(formContext, "tab_Injuries", "tab_3_section_injuries_rd_only", !isEditable);
            formContext.getControl(isEditable ? "injuries_editable" : "injuries_readonly").refresh();
        },

        ClosureType_OnChange: async function (executionContext) {
            try {
                var formContext = executionContext.getFormContext();
                glHelper.openOtherFromChoice_s(formContext, "ovs_closure_type_cd", "11", "ovs_closure_type_other_txt");


            } catch (error) {
                Xrm.Navigation.openErrorDialog({ message: error })
            } finally {
            }
        },

        Closure_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();
   
            var isClosure = formContext.getAttribute("ovs_closure_cd").getValue() ;

            if (!isClosure) {
                formContext.getAttribute("ovs_closure_type_cd").setValue(null);
                formContext.getControl("ovs_closure_type_other_txt").setVisible(false);
                formContext.getAttribute("ovs_closure_type_other_txt").setRequiredLevel("none");
            }
            glHelper.SetDisabled(formContext, "ovs_closure_type_cd", !isClosure);
            glHelper.SetDisabled(formContext, "ovs_duration_num", !isClosure);

            glHelper.SetRequiredLevel(formContext, "ovs_closure_type_cd", isClosure);

            TDG_Incident_MainForm.ClosureType_OnChange(executionContext);

        },

        Source_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();

            glHelper.openOtherFromChoice_s(formContext, "ovs_source_cds", "23", "ovs_other_source_txt");
        },

        EvacuationProfileFlag_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();

            var flagOn = formContext.getAttribute("ovs_evacuation_due_incident_ind").getValue();
            if (!flagOn) glHelper.SetValue(formContext, "ovs_evacuation_profile_cds", null);
            glHelper.SetControlReadOnly(formContext, "ovs_evacuation_profile_cds", !flagOn);

            //glHelper.SetControlVisibility(formContext, "ovs_evacuation_profile_cds", flagOn);

        },

        PhisicalImpact_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();

            glHelper.openOtherFromChoice_s(formContext, "ovs_physical_impact_cds", "9", "ovs_other_physical_impact_txt");
        },

        PhisicalImpactFlag_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();

            var flagOn = formContext.getAttribute("ovs_physical_impact_flag_ind").getValue();
            if (!flagOn) glHelper.SetValue(formContext, "ovs_physical_impact_cds", null);
            glHelper.SetControlReadOnly(formContext, "ovs_physical_impact_cds", !flagOn);
            //glHelper.SetControlVisibility(formContext, "ovs_physical_impact_cds", flagOn);
            TDG_Incident_MainForm.PhisicalImpact_OnChange(executionContext);
        }
    };
    //********************public methods end***************
})(window, document);
