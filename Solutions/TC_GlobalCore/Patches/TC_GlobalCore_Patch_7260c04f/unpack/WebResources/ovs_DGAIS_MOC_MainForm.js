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

            var release = formContext.getAttribute("ovs_release_cd");
            release.removeOnChange(DGAIS_MOC_MainForm.Release_OnChange);
            release.addOnChange(DGAIS_MOC_MainForm.Release_OnChange);
            release.fireOnChange();

            var releaseLocation = formContext.getAttribute("ovs_release_location_mcd");
            releaseLocation.removeOnChange(DGAIS_MOC_MainForm.ReleaseLocation_OnChange);
            releaseLocation.addOnChange(DGAIS_MOC_MainForm.ReleaseLocation_OnChange);
            releaseLocation.fireOnChange();


            if (formType == glHelper.FORMTYPE_CREATE) {


            }
            else {

 
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

            var isRelease = formContext.getAttribute("ovs_release_cd").getValue();

            if (!isRelease)
                formContext.getAttribute("ovs_release_location_mcd").setValue([]);
            glHelper.SetDisabled(formContext, "ovs_release_location_mcd", !isRelease);
            glHelper.SetRequiredLevel(formContext, "ovs_release_location_mcd", isRelease);

        },

  
    };
    //********************public methods end***************
})(window, document);
