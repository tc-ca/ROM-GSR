///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/RNOP_ValidationFunctions.js"/>


var SRFunctions_FDR_main = (function (window, document) {

    //**************** Variables

    var globalFormContext;
    var globalContext;
    var formType;
    var clientUrl;
    var isDesignRegSupported = false;
    var displayDesign = false;
    var hasOperation = false;

    var containerFunctions = new Array();



    //**************** Private methods

    //get service request operation and status reason
    function getSRs_status(formContext, SR_id) {

        var req = new XMLHttpRequest();
        req.open("GET", Xrm.Utility.getGlobalContext().getClientUrl() + "/api/data/v9.2/fdr_servicerequests(" + SR_id + ")?$select=_fdr_operation_value,statuscode", false);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Prefer", "odata.include-annotations=*");
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {
                    var result = JSON.parse(this.response);
                    console.log(result);
                    // Columns
                    var fdr_servicerequestid = result["fdr_servicerequestid"]; // Guid
                    var fdr_operation = result["_fdr_operation_value"]; // Lookup
                    var fdr_operation_formatted = result["_fdr_operation_value@OData.Community.Display.V1.FormattedValue"];
                    var fdr_operation_lookuplogicalname = result["_fdr_operation_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
                    var statuscode = result["statuscode"]; // Status
                    var statuscode_formatted = result["statuscode@OData.Community.Display.V1.FormattedValue"];


                    //set flag to display Designs based on SR status and operation presence
                    if (fdr_operation == null) {
                        displayDesign = false;
                        hasOperation = false;
                    }
                    else if (statuscode == 1 || statuscode == 794600010 || statuscode == 794600000 || statuscode == 794600006) {
                        displayDesign = false;
                        hasOperation = true;
                    } else {
                        displayDesign = true;
                        hasOperation = true;
                    }

                } else {

                    displayDesign = false;
                    hasOperation = false;
                    //Xrm.Navigation.openErrorDialog({ message: "Something went wrong " + this.statusText });
                    console.log("Something went wrong in getSRs_status methods :" + this.responseText);
                }
            }
        };
        req.send();
    }

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
    }


    function getSpecAndLimitations() {

        var containerId = globalFormContext.data.entity.getId();

        //212216 show specs and limitations comma seperated in the functions grid
        Xrm.WebApi.online.retrieveRecord("fdr_servicerequestfunction", containerId, "?$select=fdr_name&$expand=fdr_fdr_servicerequestfunction_fdr_functionlimitation_servicerequestfunction($select=_fdr_limitation_value,fdr_texten,fdr_textfr,statecode),fdr_ServiceRequestFunction_Specification($select=fdr_englishname,fdr_name,statecode)").then(
            function success(result) {
                console.log(result);
                var limitations = "";
                var specifications = "";

                // Limitations
                for (var j = 0; j < result.fdr_fdr_servicerequestfunction_fdr_functionlimitation_servicerequestfunction.length; j++) {
                    var fdr_limitation_formatted = result.fdr_fdr_servicerequestfunction_fdr_functionlimitation_servicerequestfunction[j]["_fdr_limitation_value@OData.Community.Display.V1.FormattedValue"];
                    var statecode_formatted = result.fdr_fdr_servicerequestfunction_fdr_functionlimitation_servicerequestfunction[j]["statecode@OData.Community.Display.V1.FormattedValue"];
                    if (statecode_formatted == "Active") {

                        if (limitations.length > 0)
                            limitations = limitations + ", ";
                        limitations = limitations + fdr_limitation_formatted;
                    }
                }

                // Specifications
                for (var j = 0; j < result.fdr_ServiceRequestFunction_Specification.length; j++) {
                    var fdr_name = result.fdr_ServiceRequestFunction_Specification[j]["fdr_name"];
                    var statecode_formatted = result.fdr_ServiceRequestFunction_Specification[j]["statecode@OData.Community.Display.V1.FormattedValue"];
                    //if (statecode_formatted == "Active") {
                    if (specifications.length > 0)
                        specifications = specifications + ", ";
                    specifications = specifications + fdr_name;
                    //}
                }

                //fdr_limitations
                //fdr_specifications

                if (glHelper.GetValue(globalFormContext, "fdr_limitations") != limitations
                    || glHelper.GetValue(globalFormContext, "fdr_specifications") != specifications) {

                    glHelper.SetValue(globalFormContext, "fdr_limitations", limitations);
                    glHelper.SetValue(globalFormContext, "fdr_specifications", specifications);
                    globalFormContext.data.save();
                }
            },
            function (error) {
                console.log(error.message);
            }
        );
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

            var cf = formContext.getAttribute("fdr_containerfunction");
            cf.removeOnChange(SRFunctions_FDR_main.On_ContainerFunctionChange);
            cf.addOnChange(SRFunctions_FDR_main.On_ContainerFunctionChange);

            isDesignRegSupported = glHelper.GetValue(formContext, "fdr_supportsdesignregistration");

            var SR_id = glHelper.GetLookupAttrId(formContext, "fdr_servicerequest").replace('{', '').replace('}','');
            if (SR_id != null) getSRs_status(formContext, SR_id);

            if (formType == 1) {

                glHelper.SetControlReadOnly(formContext, "fdr_containerfunction", false);

                //if Service Request is populated check for its container type
                if (SR_id != null)
                    getSRs_ContainerType(formContext, SR_id);
                else {
                    Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "No Service Request is associated with current Service Request Function" });
                }
            }
            else if (formType == 2) {

                //make container function read only
                glHelper.SetControlReadOnly(formContext, "fdr_containerfunction", true);
                //set design or specs visible
                cf.fireOnChange();

                //212216 show specs and limitations comma seperated in the functions grid
                getSpecAndLimitations();

                var specGrid = globalFormContext.getControl("GRID_SPECS");
                var limitationGrid = globalFormContext.getControl("grdFunctionLimitations");
                if (specGrid != null) {
                    var recs = specGrid.getGrid().getTotalRecordCount();
                    specGrid.addOnLoad(getSpecAndLimitations);
                }
                if (limitationGrid != null) {
                    limitationGrid.addOnLoad(getSpecAndLimitations);
                }
            }

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

        On_ContainerFunctionChange: function (executionContext) {

            var formContext = executionContext.getFormContext();
            //get container function id
            var containerId = glHelper.GetLookupAttrId(formContext, "fdr_containerfunction");

            if (containerId != null) {


                if (formType == 1) {

                    //populate Service Request Function name
                    var currentName = glHelper.GetValue(formContext, "fdr_name");
                    if (currentName == "" || currentName == null || currentName == undefined)
                        glHelper.SetValue(formContext, "fdr_name", glHelper.GetLookupName(formContext, "fdr_containerfunction"));

                    //select Container Functions that have already been added to a Service Request.
                    var SR_id = glHelper.GetLookupAttrId(formContext, "fdr_servicerequest");
                    if (SR_id != null) {
                        var filter = "?$select=_fdr_containerfunction_value&$filter=(_fdr_containerfunction_value eq " + containerId;
                        filter = filter + " and _fdr_servicerequest_value eq " + SR_id + " and statecode eq 0) ";
                        Xrm.WebApi.online.retrieveMultipleRecords("fdr_servicerequestfunction", filter).then(
                            function success(results) {
                                if (results.entities.length > 0) {
                                    glHelper.SetFieldNotification(formContext, "fdr_containerfunction", "Selected Container Function has already been added to the current Service Request.");
                                } else {
                                    glHelper.ClearFieldNotification(formContext, "fdr_containerfunction");

                                }
                            },
                            function (error) {
                                console.log(error.message);
                            }
                        );
                    }

                }
                //update, Michael. September 1, 2022
                //logic changed to make design registration option to change on Container function level, task 198729
                //get and save design allowence value on create only, no futher mutations!
                Xrm.WebApi.online.retrieveRecord("fdr_containerfunction", containerId, "?$select=fdr_supportsdesignregistration").then(
                    function success(result) {

                        isDesignRegSupported = result["fdr_supportsdesignregistration"];
                        //var sdr_value = result["fdr_supportsdesignregistration@OData.Community.Display.V1.FormattedValue"];
                        glHelper.SetValue(formContext, "fdr_supportsdesignregistration", isDesignRegSupported);

                        //set notification about design grid absence
                        if (isDesignRegSupported && (!hasOperation || !displayDesign)) {

                            //service request lacks operation
                            if (!hasOperation)
                                glHelper.DisplayFormNotificationModern(formContext, "Parent Service Request has no Operation selected. Design cannot be added.", "WARNING", false);

                            //service request technical review yet reached
                            if (hasOperation && !displayDesign)
                                glHelper.DisplayFormNotificationModern(formContext, "Parent Service Request yet reached Technical Review stage. Design cannot be added.", "WARNING", false);
                        }

                        glHelper.SetSectionVisibility(formContext, "General", "section_design", (isDesignRegSupported && hasOperation && displayDesign));
                        glHelper.SetControlVisibility(formContext, "Subgrid_Designs_N_N", (isDesignRegSupported && hasOperation && displayDesign));
                        glHelper.SetSectionVisibility(formContext, "General", "section_specs", !isDesignRegSupported);
                        glHelper.SetControlVisibility(formContext, "GRID_SPECS", !isDesignRegSupported);
                        //199424 : Hide Specs grid in Service Request Function if the selected Container Function record does not support Designs AND has no specifications 
                        if (!isDesignRegSupported) {
                            var originalFetchXML = `<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true">
                              <entity name="fdr_specification">
                                <attribute name="fdr_specificationid" />
                                <filter type="and">
                                  <condition attribute="statecode" operator="eq" value="0" />
                                </filter>
                                <link-entity name="fdr_containerfunction_specification" from="fdr_specificationid" to="fdr_specificationid" visible="false" intersect="true">
                                  <link-entity name="fdr_containerfunction" from="fdr_containerfunctionid" to="fdr_containerfunctionid" alias="ad">
                                    <filter type="and">
                                      <condition attribute="fdr_containerfunctionid" operator="eq" uiname="Thickness test (T)" uitype="fdr_containerfunction" value="{SFID}" />
                                    </filter>
                                  </link-entity>
                                </link-entity>
                              </entity>
                            </fetch>`;
                            originalFetchXML = originalFetchXML.replace("{SFID}", containerId)
                            var escapedFetchXML = encodeURIComponent(originalFetchXML);
                            var hasSpec = true;
                            Xrm.WebApi.online.retrieveMultipleRecords("fdr_specification", "?fetchXml=" + escapedFetchXML).then(
                                function success(results) {

                                    if (results.entities.length <= 0) {
                                        hasSpec = false;
                                    }
                                    glHelper.SetSectionVisibility(formContext, "General", "section_specs", hasSpec);
                                },
                                function (error) {
                                    console.log(error.message);
                                }
                            );
                        }
                    },
                    function (error) {
                        Xrm.Navigation.openErrorDialog({ message: "Something went wrong with Container Function query. Error: " + error.message });
                    }
                );

            }
            else {
                //hide both
                glHelper.SetSectionVisibility(formContext, "General", "section_design", false);
                glHelper.SetControlVisibility(formContext, "Subgrid_Designs_N_N", false);
                glHelper.SetSectionVisibility(formContext, "General", "section_specs", false);
                glHelper.SetControlVisibility(formContext, "GRID_SPECS", false);
                //throw a message?
            }
        },
    }

})(window, document)