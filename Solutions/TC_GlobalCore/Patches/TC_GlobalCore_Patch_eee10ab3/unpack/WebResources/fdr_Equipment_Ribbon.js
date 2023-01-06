var Equipment_Ribbon = (function (window, document) {

    function openEquipmentPanel(srId, LCID, gridControl, formConrol) {

        var formContext = formConrol;
        //get registration type id
        var rtID = formContext.getAttribute("fdr_containertype").getValue()[0].id;

        var globalContext = Xrm.Utility.getGlobalContext();
        var clientUrl = globalContext.getClientUrl();

        if (LCID == 1033)
            resexResourceName = "ovs_Labels.1033.resx";
        else if (LCID == 1036)
            resexResourceName = "ovs_Labels.1036.resx";


        var formParameters = {};
        formParameters["srfId"] = srId.replace('{', '').replace('}', '');
        formParameters["cfId"] = rtID.replace('{', '').replace('}', '');
        formParameters["langId"] = LCID;

        var pageData = {
            pageType: "webresource",
            webresourceName: "fdr_/Equipmet2SR",
            data: JSON.stringify(formParameters)
        };
        var navigationOptions = {
            target: 2,
            height: { value: 90, unit: "%" },
            width: { value: 25, unit: "%" },
            position: 2,
            title: "Available Equipments"
        };
        Xrm.Navigation.navigateTo(pageData, navigationOptions).then(
            function success(returnValue) {

                //success
                //refresh specs grid
                gridControl.refresh();
            },
            function error() {
                console.log(error);
                Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Error: " + error });
                //refresh specs grid
                gridControl.refresh();
            }
        );

    }

    return {

        openEquipmentPanel: openEquipmentPanel,
    };


})(window, document);