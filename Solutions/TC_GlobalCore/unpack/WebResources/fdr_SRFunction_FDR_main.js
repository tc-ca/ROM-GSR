///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/RNOP_ValidationFunctions.js"/>


var SRFunctions_FDR_main = (function (window, document) {

    //**************** Variables

    var globalFormContext;
    var globalContext;
    var formType;
    var clientUrl;

    var containerFunctions = new Array();



    //**************** Private methods

    //get SR's container type and if any => list of related container functions
    function getSRs_ContainerType(formContext, SR_id) {

        var containerF = formContext.getControl("fdr_containerfunction");

        var fetchData = {
            fdr_servicerequestid: SR_id
        };
        var fetchXml = [
            "<fetch>",
            "  <entity name='fdr_servicerequest'>",
            "    <attribute name='fdr_containertype' />",
            "    <filter>",
            "      <condition attribute='fdr_servicerequestid' operator='eq' value='", fetchData.fdr_servicerequestid, "'/>",
            "    </filter>",
            "    <link-entity name='fdr_containertype' from='fdr_containertypeid' to='fdr_containertype' alias='CT'>",
            "      <link-entity name='fdr_containerfunction' from='fdr_containertype' to='fdr_containertypeid' alias='CF'>",
            "        <attribute name='fdr_containerfunctionid' />",
            "      </link-entity>",
            "    </link-entity>",
            "  </entity>",
            "</fetch>",
        ].join("");

        /*5b658d22-02cb-ec11-a7b5-0022483cebf0*/
        var encodedFetchXML = encodeURIComponent(fetchXml);

        var req = new XMLHttpRequest();
        req.open("GET", clientUrl + "/api/data/v9.2/fdr_servicerequests?fetchXml=" + encodedFetchXML, true);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");

        req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {

                    var results = JSON.parse(this.response);
                    //if Service Request has container type => get list of related container functions => filter
                    if (results.value != null && results.value != undefined && results.value.length > 0)
                        for (var i = 0; i < results.value.length; i++) {

                            containerFunctions.push(results.value[i]["CF.fdr_containerfunctionid"]);
                        }                    
                    else {
                        console.log("Cannot find Container Type relate Container Functions");
                        containerFunctions = new Array();
                        Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Cannot find Container Type relate Container Functions" });
                    }

                } else {
                    console.log("Something went wrong " + this.statusText);
                    containerFunctions = new Array();
                    Xrm.Navigation.openErrorDialog({ message: "Something went wrong " + this.statusText });
                }

                containerF.addPreSearch(SRFunctions_FDR_main.Pre_filterContainerFunction);
            }
        };
        req.send();

        //fdr_servicerequest
        //fdr_containerfunction
    }



    //**************** Public methods
    return {

        OnLoad: function (executionContext) {
            //get context
            globalContext = glHelper.getGlobalContext();
            var formContext = executionContext.getFormContext();
            globalFormContext = formContext;

            clientUrl = globalContext.getClientUrl();

            // 0 = Undefined, 1 = Create, 2 = Update, 3 = Read Only, 4 = Disabled, 6 = Bulk Edit
            formType = glHelper.GetFormType(formContext);

            //if Service Request is populated check for its container type
            var SR_id = glHelper.GetLookupAttrId(formContext, "fdr_servicerequest");
            if (SR_id != null)
                getSRs_ContainerType(formContext, SR_id);
            else {
                Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "No Service Request is associated with current Service Request Function" });
            }


            //fdr_servicerequest
            //fdr_containerfunction
        },

        Pre_filterContainerFunction: function () {

            var strTemplate = "<value>{0}</value>";
            var currentLine = "";

            //no primary/related contacts
            if (containerFunctions.length == 0) {
                // filter have to return an empty result
                var functionFilter = "<filter type='and'><condition attribute='fdr_containerfunctionid' operator='eq' value='00000000-0000-0000-0000-000000000000'></condition></filter>";

            }
            else {

                for (var i = 0; i < containerFunctions.length; i++) {

                    currentLine = currentLine + strTemplate.replace("{0}", containerFunctions[i]);
                }
                var functionFilter = "<filter type='and'><condition attribute='fdr_containerfunctionid' operator='in'>" + currentLine + "</condition></filter>";
            }
            globalFormContext.getControl("fdr_containerfunction").addCustomFilter(functionFilter, "fdr_containerfunction");

        },

    }

})(window, document)