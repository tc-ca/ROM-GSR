﻿///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>


var TDG_Incident_MainForm = (function (window, document) {
    //variables
    var formType;
    //********************private methods*******************

    function openOtherMultiselect(formContext, mChoiceControlName, valueOfOthersOptionAsString, otherTxtControlName) {

        var optionString, visible, required;
        var multiSelectOptionSet = formContext.getAttribute(mChoiceControlName).getValue();
        var other = formContext.getAttribute(otherTxtControlName);

        if (multiSelectOptionSet != null) {
            optionString = multiSelectOptionSet.toString();
            visible = multiSelectOptionSet != null && optionString.indexOf(valueOfOthersOptionAsString) !== -1;
            required = (multiSelectOptionSet != null && optionString.indexOf(valueOfOthersOptionAsString) !== -1)
                ? "required" : "none";
        }
        else {
            visible = multiSelectOptionSet != null;
            required = (multiSelectOptionSet != null) ? "required" : "none";
        }
        if (!visible) other.setValue(null);
        formContext.getControl(otherTxtControlName).setVisible(visible);
        other.setRequiredLevel(required);
    }

    //********************private methods end***************

    //********************public methods***************
    return {

        OnLoad: async function (executionContext) {


            var formContext = executionContext.getFormContext();

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
            closuretype.fireOnChange();

            var source = formContext.getAttribute("crs_source_mcd");
            source.removeOnChange(TDG_Incident_MainForm.Source_OnChange);
            source.addOnChange(TDG_Incident_MainForm.Source_OnChange);
            source.fireOnChange();

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
                throw error;

            } finally {
            }
        },

        Scope_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();
            //var isScope = formContext.getAttribute("ovs_scope_cd").getSelectedOption();

            var isScope = formContext.getAttribute("ovs_scope_cd").getValue() != null;

            if (!isScope) formContext.getAttribute("ovs_main_impact_cd").setValue(null);
            glHelper.SetDisabled(formContext, "ovs_main_impact_cd", !isScope);
            //glHelper.SetControlReadOnly(formContext, "ovs_main_impact_cd", !isScope);
            glHelper.SetRequiredLevel(formContext, "ovs_main_impact_cd", isScope);
            
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
        },

        ClosureType_OnChange: async function (executionContext) {
            try {
                var formContext = executionContext.getFormContext();
                openOtherMultiselect(formContext, "ovs_closure_type_cd", "11", "ovs_closure_type_other_txt");


            } catch (error) {
                throw error;

            } finally {
            }
        },

        Source_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();

            openOtherMultiselect(formContext, "crs_source_mcd", "23", "crs_other_source_txt");
        }
    };
    //********************public methods end***************
})(window, document);
