///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>


var TDG_Incident_MainForm = (function (window, document) {
    //variables
    var formType;
    //********************private methods*******************

    //********************private methods end***************

    //********************public methods***************
    return {
        OnLoad: async function (executionContext) {


            var formContext = executionContext.getFormContext();

            var releasetype = formContext.getAttribute("ovs_releasetype");
            releasetype.removeOnChange(TDG_Incident_MainForm.ReleaseType_OnChange);
            releasetype.addOnChange(TDG_Incident_MainForm.ReleaseType_OnChange);
            releasetype.fireOnChange();

            var scope = formContext.getAttribute("ovs_scope");
            scope.removeOnChange(TDG_Incident_MainForm.Scope_OnChange);
            scope.addOnChange(TDG_Incident_MainForm.Scope_OnChange);
            scope.fireOnChange();

        },

        ReleaseType_OnChange: async function (executionContext) {
            try {
                var formContext = executionContext.getFormContext();
                var multiSelectOptionSet = formContext.getAttribute("ovs_releasetype").getValue();
                if (multiSelectOptionSet != null) {
                    let optionString = multiSelectOptionSet.toString();
                    if (optionString.indexOf("918640008") !== -1) {
                        formContext.getControl("ovs_otherreleasetype").setVisible(true);
                        formContext.getAttribute("ovs_otherreleasetype").setRequiredLevel("required");
                    } else {
                        formContext.getControl("ovs_otherreleasetype").setVisible(false);
                        formContext.getAttribute("ovs_otherreleasetype").setRequiredLevel("none");
                    }
                    if (optionString.indexOf("918640004") !== -1) {
                        formContext.getAttribute("ovs_releasetype").setValue([918640004])
                        formContext.getControl("ovs_otherreleasetype").setVisible(false);
                        formContext.getAttribute("ovs_otherreleasetype").setRequiredLevel("none");
                    }
               } else {
                    formContext.getControl("ovs_otherreleasetype").setVisible(false);
                    formContext.getAttribute("ovs_otherreleasetype").setRequiredLevel("none");
                }
            } catch (error) {
                throw error;

            } finally {
            }
        },

        Scope_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();
            //var isScope = formContext.getAttribute("ovs_scope").getSelectedOption();

            var isScope = formContext.getAttribute("ovs_scope").getValue() != null;

            if (!isScope) formContext.getAttribute("crs_mainimpact").setValue(null);
            glHelper.SetDisabled(formContext, "crs_mainimpact", !isScope);
            //glHelper.SetControlReadOnly(formContext, "crs_mainimpact", !isScope);
            glHelper.SetRequiredLevel(formContext, "crs_mainimpact", isScope);
            
        },
    };
    //********************public methods end***************
})(window, document);
