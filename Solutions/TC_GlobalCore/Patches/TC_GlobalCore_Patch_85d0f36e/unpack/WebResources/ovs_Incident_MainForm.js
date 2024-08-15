///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>


var TDG_Incident_MainForm = (function (window, document) {
    //variables
    var formType;
    var facilityTypeExcluded = new Array(1, 12, 15, 19, 22);

    var PostalAdressArray = new Array("ovs_street1_txt", "ovs_street2_txt", "ovs_street3_txt", "ovs_city_txt", "ovs_state_province_txt", "ovs_zip_postalcode_txt", "ovs_country_txt");
    var LongLatArray = new Array("ovs_latitude_num", "ovs_longitude_num");
    var LLD_Array = new Array("ovs_quarter_lsd_cd", "ovs_range_cd", "ovs_section_cd", "ovs_township_cd");


    //********************private methods*******************

    function clearHideEase(formContext, arrayOfFields, doClearHideEase) {

        for (var i = 0; i < arrayOfFields.length; i++) {
            if (doClearHideEase) glHelper.SetValue(formContext, arrayOfFields[i], null);
            glHelper.SetControlVisibility(formContext, arrayOfFields[i], !doClearHideEase);
            glHelper.SetRequiredLevel(formContext, arrayOfFields[i], !doClearHideEase);
        }
    }

    function setReportable(formContext, isScope) {

        //is Reportable
        var isReportable = formType == glHelper.FORMTYPE_CREATE;

        //!formContext.getAttribute("ovs_reportable_ind").getIsDirty() 

        if (isScope && isReportable) glHelper.SetValue(formContext, "ovs_reportable_ind", true);
    }

    function filterFacilityType(formContext) {

        glHelper.filterOptionSet(formContext, "ovs_facility_type_cd", facilityTypeExcluded, false);
    }

    //********************private methods end***************

    //********************public methods***************
    return {

        OnLoad: async function (executionContext) {

            var formContext = executionContext.getFormContext();
            formType = glHelper.GetFormType(formContext);

            filterFacilityType(formContext);

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

            var evacuatioFlag = formContext.getAttribute("ovs_evacuation_due_incident_ind");
            evacuatioFlag.removeOnChange(TDG_Incident_MainForm.EvacuationProfileFlag_OnChange);
            evacuatioFlag.addOnChange(TDG_Incident_MainForm.EvacuationProfileFlag_OnChange);
            evacuatioFlag.fireOnChange();

            var emergencyPers = formContext.getAttribute("ovs_emergency_response_personnel_cds");
            emergencyPers.removeOnChange(TDG_Incident_MainForm.EmergencyPersonnel_OnChange);
            emergencyPers.addOnChange(TDG_Incident_MainForm.EmergencyPersonnel_OnChange);

            var contributingFactors = formContext.getAttribute("ovs_contributing_factors_cds");
            contributingFactors.removeOnChange(TDG_Incident_MainForm.ContributingFactors_OnChange);
            contributingFactors.addOnChange(TDG_Incident_MainForm.ContributingFactors_OnChange);

            //var addressType = formContext.getAttribute("ovs_address_type_cd");
            //addressType.removeOnChange(TDG_Incident_MainForm.AddressType_OnChange);
            //addressType.addOnChange(TDG_Incident_MainForm.AddressType_OnChange);
            //addressType.fireOnChange();

            var addressDetementFlag = formContext.getAttribute("ovs_address_not_determent_ind");
            addressDetementFlag.removeOnChange(TDG_Incident_MainForm.AddressDeterment_OnChange);
            addressDetementFlag.addOnChange(TDG_Incident_MainForm.AddressDeterment_OnChange);
            addressDetementFlag.fireOnChange();            

            var causes = formContext.getAttribute("ovs_causes_cds");
            causes.removeOnChange(TDG_Incident_MainForm.Causes_OnChange);
            causes.addOnChange(TDG_Incident_MainForm.Causes_OnChange);

            //initiate Copy Address control
            var wrControl = formContext.getControl("WebResource_CopyButton");
            if (wrControl) wrControl.getContentWindow().then(function (contentWindow) {contentWindow.setClientApiContext(Xrm, formContext);})  

            if (formType == glHelper.FORMTYPE_CREATE) {


            }
            else {
                emergencyPers.fireOnChange();

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
            //glHelper.SetRequiredLevel(formContext, "ovs_main_impact_cds", isScope);

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
            glHelper.SetControlReadOnly(formContext, "ovs_evacuation_count_num", !flagOn);

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
        },

        EmergencyPersonnel_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();

            glHelper.openOtherFromChoice_s(formContext, "ovs_emergency_response_personnel_cds", "21", "ovs_other_emergency_response_personnel_txt");
        },

        ContributingFactors_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();

            glHelper.openOtherFromChoice_s(formContext, "ovs_contributing_factors_cds", "9", "ovs_contributing_factor_other_txt");
        },

        AddressType_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();

            switch (formContext.getAttribute("ovs_address_type_cd").getValue()) {

                //Postal Address
                case 0: {
                    //clean and hide LongLat, LLD, enabel Postal
                    clearHideEase(formContext, LongLatArray, true);
                    clearHideEase(formContext, PostalAdressArray, false);
                    clearHideEase(formContext, LLD_Array, true);

                    //street2 and 3 are never required
                    glHelper.SetRequiredLevel(formContext, "ovs_street2_txt", false);
                    glHelper.SetRequiredLevel(formContext, "ovs_street3_txt", false);
                } break;
                case 1: {
                    //clean and hide Postal Adress fields, LongLat, enable LLD
                    clearHideEase(formContext, LongLatArray, true);
                    clearHideEase(formContext, PostalAdressArray, true);
                    clearHideEase(formContext, LLD_Array, false);
                } break;
                //LongLat
                case 2: {
                    //clean and hide Postal Adress fields,LLD, enable LongLat
                    clearHideEase(formContext, LongLatArray, false);
                    clearHideEase(formContext, PostalAdressArray, true);
                    clearHideEase(formContext, LLD_Array, true);
                } break;
                default: {
                    //clean and hide all
                    clearHideEase(formContext, LongLatArray, true);
                    clearHideEase(formContext, PostalAdressArray, true);
                    clearHideEase(formContext, LLD_Array, true);
                } break;
            }
        },

        AddressDeterment_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();
            var isNotDeterment = glHelper.GetValue(formContext, "ovs_address_not_determent_ind");
            var addressType = formContext.getAttribute("ovs_address_type_cd");

            //set section visibility
            glHelper.SetSectionVisibility(formContext, "tab_5", "tab_5_section_addressAuto", !isNotDeterment);
            glHelper.SetSectionVisibility(formContext, "tab_5", "tab_5_section_siteAddress", !isNotDeterment);
            glHelper.SetSectionVisibility(formContext, "tab_5", "tab_5_section_addressManual", isNotDeterment);
            
            //set fields required
            for (var i = 0; i < PostalAdressArray.length; i++) {
                glHelper.SetRequiredLevel(formContext, PostalAdressArray[i], !isNotDeterment);
            }

            if (isNotDeterment) {

                addressType.removeOnChange(TDG_Incident_MainForm.AddressType_OnChange);
            }//determent
            else {

                addressType.removeOnChange(TDG_Incident_MainForm.AddressType_OnChange);
                addressType.addOnChange(TDG_Incident_MainForm.AddressType_OnChange);
                addressType.fireOnChange();
            }

        },
        Causes_OnChange: async function (executionContext) {
            try {
                var formContext = executionContext.getFormContext();
                var causesSelectOptionSet = formContext.getAttribute("ovs_causes_cds").getValue();
                if (causesSelectOptionSet != null) {
                    let causesString = causesSelectOptionSet.toString();
                    if (causesString.indexOf("25") !== -1 || causesString.indexOf("26") !== -1 || causesString.indexOf("27") !== -1 || causesString.indexOf("28") !== -1) {
                        formContext.getAttribute("ovs_loss_theft_ind").setValue(true);
                    } else {
                        formContext.getAttribute("ovs_loss_theft_ind").setValue(false);
                    }
                } 
            } catch (error) {
                Xrm.Navigation.openErrorDialog({ message: error })

            } finally {
            }
        },
    };
    //********************public methods end***************
})(window, document);
