///<reference path="../../Utilities/GlobalHelper.js"/>


var DGAIS_MOC_MainForm = (function (window, document) {
    //variables
    var formType;
    //********************private methods*******************


    //********************private methods end***************

    //********************public methods***************
    return {

        OnLoad: async function (executionContext) {

            var formContext = executionContext.getFormContext();
            formType = glHelper.GetFormType(formContext);

            var release = formContext.getAttribute("ovs_release_ind");
            release.removeOnChange(DGAIS_MOC_MainForm.Release_OnChange);
            release.addOnChange(DGAIS_MOC_MainForm.Release_OnChange);
            release.fireOnChange();

            var releaseLocation = formContext.getAttribute("ovs_release_location_mcd");
            releaseLocation.removeOnChange(DGAIS_MOC_MainForm.ReleaseLocation_OnChange);
            releaseLocation.addOnChange(DGAIS_MOC_MainForm.ReleaseLocation_OnChange);

            var damage = formContext.getAttribute("ovs_damage_ind");
            damage.removeOnChange(DGAIS_MOC_MainForm.Damage_OnChange);
            damage.addOnChange(DGAIS_MOC_MainForm.Damage_OnChange);
            damage.fireOnChange();

            var damageType = formContext.getAttribute("ovs_damage_type_cds");
            damageType.removeOnChange(DGAIS_MOC_MainForm.DamageType_OnChange);
            damageType.addOnChange(DGAIS_MOC_MainForm.DamageType_OnChange);

            var damageLocation = formContext.getAttribute("ovs_damage_location_cds");
            damageLocation.removeOnChange(DGAIS_MOC_MainForm.DamageLocation_OnChange);
            damageLocation.addOnChange(DGAIS_MOC_MainForm.DamageLocation_OnChange);


            if (formType == glHelper.FORMTYPE_CREATE) {


            }
            else {

                releaseLocation.fireOnChange();
                damageType.fireOnChange();
                damageLocation.fireOnChange();
            }
        },

        ReleaseLocation_OnChange: async function (executionContext) {
            try {
                var formContext = executionContext.getFormContext();
                glHelper.openOtherFromChoice_s(formContext, "ovs_release_location_mcd", "918640019", "ovs_release_location_other_txt");

            } catch (error) {
                Xrm.Navigation.openErrorDialog({ message: error })

            } finally {
            }
        },

        Release_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();

            var isRelease = formContext.getAttribute("ovs_release_ind").getValue();

            if (!isRelease)
                formContext.getAttribute("ovs_release_location_mcd").setValue([]);
            glHelper.SetDisabled(formContext, "ovs_release_location_mcd", !isRelease);
            glHelper.SetRequiredLevel(formContext, "ovs_release_location_mcd", isRelease);

        },

        DamageType_OnChange: async function (executionContext) {

            var formContext = executionContext.getFormContext();
                glHelper.openOtherFromChoice_s(formContext, "ovs_damage_type_cds", "12", "ovs_other_damage_txt");
        },

        DamageLocation_OnChange: async function (executionContext) {

            var formContext = executionContext.getFormContext();
            glHelper.openOtherFromChoice_s(formContext, "ovs_damage_location_cds", "22", "ovs_other_damage_location_txt");
        },

        Damage_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();

            var isDamage = formContext.getAttribute("ovs_damage_ind").getValue();

            if (!isDamage) {
                formContext.getAttribute("ovs_damage_type_cds").setValue(null);
                formContext.getAttribute("ovs_damage_location_cds").setValue(null);
            }
            glHelper.SetDisabled(formContext, "ovs_damage_type_cds", !isDamage);
            glHelper.SetRequiredLevel(formContext, "ovs_damage_type_cds", isDamage);
            glHelper.SetDisabled(formContext, "ovs_damage_location_cds", !isDamage);
            glHelper.SetRequiredLevel(formContext, "ovs_damage_location_cds", isDamage);

        },  
    };
    //********************public methods end***************
})(window, document);
