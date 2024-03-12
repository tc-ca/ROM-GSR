///<reference path="../Utilities/GlobalHelper.js"/>

var Booking_Ribbon = (function (window, document) {
    var userSettings = Xrm.Utility.getGlobalContext().userSettings;
    var pageInput = Xrm.Utility.getPageContext().input;
    var k_inspection_setting_onsite = 0;
    var k_inspection_setting_remote = 1;
    var k_inspection_setting_hybrid = 2;

    function subgridAddNew(gridTypeName, parentEntityTypeName, parentEntityId, primaryControl, gridControl) {
        debugger;
        
        var allow_ind = false;
        var formContext = primaryControl._ui._formContext;

        var ovs_inspection_setting = formContext.getAttribute("ovs_inspection_setting").getValue();

        var pre_approved = formContext.getAttribute("ovs_pre_approved_for_remote_inspection").getValue();
        if (pre_approved && ovs_inspection_setting == k_inspection_setting_remote) {
            allow_ind = true;
        }
        else {
            var ovs_manager_approval = formContext.getAttribute("ovs_manager_approval").getValue();
            ovs_manager_approval = (ovs_manager_approval == null ? -1 : ovs_manager_approval);
            // manager approved or "onsite"
            if ((ovs_inspection_setting == k_inspection_setting_onsite) || (ovs_manager_approval == 0))
            {
                allow_ind = true;
            }
        }

        if (allow_ind) {
            XrmCore.Commands.Open.addNewFromSubGridStandard(gridTypeName, parentEntityTypeName, parentEntityId, primaryControl, gridControl);
        }
        else {
            var globalContext = Xrm.Utility.getGlobalContext();
            var userSettings = globalContext.userSettings;
            LCID = userSettings.languageId;

            var resexResourceName = (LCID === 1033 ? "ovs_Labels.1033.resx" : "ovs_Labels.1036.resx");
            var msg = Xrm.Utility.getResourceString(resexResourceName, "msdyn_workorder.NotAllowCreateBooking");
            Xrm.Navigation.openErrorDialog({ message: msg });
        }
    }

    return {
        subgridAddNew: subgridAddNew
    };

})(window, document);
