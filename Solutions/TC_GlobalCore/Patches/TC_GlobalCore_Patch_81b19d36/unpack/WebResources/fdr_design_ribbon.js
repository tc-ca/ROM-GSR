var Design_Ribbon = (function (window, document) {

    var localObj = {};
    var clientUrl;

    ///the method uses sync call - helps to reuse and better for screen control
    function getData(SRF_id) {

        var fetchXml = [
            "<fetch top='1' no-lock='true'>",
            "  <entity name='fdr_servicerequestfunction'>",
            "    <filter>",
            "      <condition attribute='fdr_servicerequestfunctionid' operator='eq' value='", SRF_id, "'/>",
            "    </filter>",
            "    <link-entity name='fdr_servicerequest' from='fdr_servicerequestid' to='fdr_servicerequest' alias='SR'>",
            "      <attribute name='fdr_servicerequestid' />",
            "      <link-entity name='ovs_mocregistration' from='ovs_mocregistrationid' to='fdr_operation' link-type='outer' alias='Opp'>",
            "        <attribute name='ovs_mocregistrationid' />",
            "        <attribute name='ovs_name' />",
            "        <link-entity name='fdr_containertype' from='fdr_containertypeid' to='fdr_registrationtype' link-type='outer' alias='RT'>",
            "          <attribute name='fdr_containertypeid' />",
            "        </link-entity>",
            "      </link-entity>",
            "    </link-entity>",
            "  </entity>",
            "</fetch>",
        ].join("");

        var encodedFetchXML = encodeURIComponent(fetchXml);

        //sync call!
        var req = new XMLHttpRequest();
        req.open("GET", clientUrl + "/api/data/v9.2/fdr_servicerequestfunctions?fetchXml=" + encodedFetchXML, false);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");

        req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {

                    var results = JSON.parse(this.response);
                    //if Specs with DMRs related to Container function are found  => get DMRs IDs
                    if (results.value != null && results.value != undefined && results.value.length > 0) {
                        localObj.rt_id = results.value[0]["RT.fdr_containertypeid"].replace('{', '').replace('}', '');
                        localObj.opp_id = results.value[0]["Opp.ovs_mocregistrationid"].replace('{', '').replace('}', '');
                        localObj.opp_name = results.value[0]["Opp.ovs_name"];
                    }
                    else {
                        console.log("Design_Ribbon getData method returns nothing");
                    }

                } else {
                    console.log("Something went wrong " + this.statusText);
                    containerFunctions = new Array();
                    Xrm.Navigation.openErrorDialog({ message: "Something went wrong " + this.statusText });
                }

                DMR_control.addPreSearch(Design_main.DMR_Pre_filter);
            }
        };
        req.send();


    }

    //user can add only designs associated with current operation (SRF <- Sr <- Opearation)
    function design_SRF_M_M_associate(srfId, LCID, gridControl, formConrol) {

        var formContext = formConrol;
        var globalContext = Xrm.Utility.getGlobalContext();
        clientUrl = globalContext.getClientUrl();

        var SRF_id = srfId.replace('{', '').replace('}', '');

        if (LCID == 1033)
            resexResourceName = "ovs_Labels.1033.resx";
        else if (LCID == 1036)
            resexResourceName = "ovs_Labels.1036.resx";

        //get SR's operation sync
        getData(SRF_id);

        var formParameters = {};
        formParameters["srfId"] = SRF_id;
        formParameters["op_id"] = localObj.opp_id;;
        formParameters["langId"] = LCID;

        var pageData = {
            pageType: "webresource",
            webresourceName: "fdr_/Designs2SRF.html",
            data: JSON.stringify(formParameters)
        };
        var navigationOptions = {
            target: 2,
            height: { value: 90, unit: "%" },
            width: { value: 25, unit: "%" },
            position: 2,
            title: "Available Designs"
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

    function design_SRF_M_M_create(srfId, LCID, gridControl, formConrol) {

        var formContext = formConrol;

        var SRF_id = srfId.replace('{', '').replace('}', '');

        var globalContext = Xrm.Utility.getGlobalContext();
        clientUrl = globalContext.getClientUrl();

        if (LCID == 1033)
            resexResourceName = "ovs_Labels.1033.resx";
        else if (LCID == 1036)
            resexResourceName = "ovs_Labels.1036.resx";


        //get SR's operation sync
        getData(SRF_id);

        // Set default values for the Contact form
        var formParameters = {};

        // Set lookup column
        formParameters["fdr_ovs_mocregistration"] = localObj.opp_id; // ID of the Operation
        formParameters["fdr_ovs_mocregistrationname"] = localObj.opp_name;
        formParameters["fdr_ovs_mocregistrationtype"] = "ovs_mocregistration"; // etn
        formParameters["fdr_initialsrfunctionid"] = srfId.replace('{', '').replace('}', '');
        formParameters["fdr_initialregtypeid"] = localObj.rt_id;


        //var entityFormOptions = {};
        //entityFormOptions["entityName"] = "fdr_design";
        //entityFormOptions["formId"] = "f90a6783-527f-4c28-97bc-28afe3feed37";
        //entityFormOptions["windowPosition"] = 1;
        //entityFormOptions["openInNewWindow"] = false;
        //entityFormOptions["width"] = 600;
        //entityFormOptions["height"] = 400;     



        //// Open the form.
        //Xrm.Navigation.openForm(entityFormOptions, formParameters).then(
        //    function (success) {

        //        //refresh specs grid
        //        gridControl.refresh();
        //        //console.log(success);
        //    },
        //    function (error) {
        //        console.log(error);
        //        Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Error: " + error });
        //        //refresh specs grid
        //        gridControl.refresh();
        //    }
        //);

        var pageData = {
            pageType: "entityrecord",
            entityName: "fdr_design",
            formId: "f90a6783-527f-4c28-97bc-28afe3feed37",
            data: formParameters,
        };


        var navigationOptions = {
            target: 2,
            height: { value: 90, unit: "%" },
            width: { value: 80, unit: "%" },
            position: 1,
        };

        Xrm.Navigation.navigateTo(pageData, navigationOptions).then(
            function success(result) {

                gridControl.refresh();
            },
            function error() {
                console.log(error);
                Xrm.Navigation.openErrorDialog({ message: "Something went wrong. Error: " + error });
            }
        );

    }

    return {

        design_SRF_M_M_associate: design_SRF_M_M_associate,
        design_SRF_M_M_create: design_SRF_M_M_create,
    };


})(window, document);