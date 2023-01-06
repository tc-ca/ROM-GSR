///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/RNOP_ValidationFunctions.js"/>


var Design_main = (function (window, document) {

    //**************** Variables

    var globalFormContext;
    var globalContext;
    var formType;
    var clientUrl;
    var DMRs_IDs = new Array();
    var DRAs_IDs = new Array();

    var globalObj = {};
    globalObj.Mapping = {};
    globalObj.Mapping.fdr_maincontainerdrawing = new Array("fdr_maincontainerdrawing", "fdr_maincontainerdrawingrevision", "fdr_maincontainerdrawingdate");
    globalObj.Mapping.fdr_tankassemblydrawing = new Array("fdr_tankassemblydrawing", "fdr_tankassemblydrawingrevision", "fdr_tankassemblydrawingdate");
    globalObj.Mapping.fdr_pipingarrangementdrawing = new Array("fdr_pipingarrangementdrawing", "fdr_pipingarrangementdrawingrevision", "fdr_pipingarrangementdrawingdate");
    globalObj.Mapping.fdr_designreviewagencyreportnumber = new Array("fdr_designreviewagencyreportnumber", "fdr_designreviewagencyreportdate");


    //**************** Private methods

    function getAllowedDMRfromSpecs(DMR_control, SRF_id, RT_id) {

        DMRs_IDs = new Array();

        var fetchXml = [
            "<fetch>",
            "<entity name='fdr_servicerequestfunction'>",
            "<filter type='or'>",
            "<condition attribute='fdr_servicerequestfunctionid' operator='eq' value='", SRF_id, "' />",
            "<condition entityname='RT' attribute='fdr_containertypeid' operator='eq' value='" + RT_id + "' />",
            "</filter>",
            "<link-entity name='fdr_containerfunction' from='fdr_containerfunctionid' to='fdr_containerfunction' alias='CF'>",
            "<link-entity name='fdr_containerfunction_specification' from='fdr_containerfunctionid' to='fdr_containerfunctionid' alias='CFS' intersect='true'>",
            "<link-entity name='fdr_specification' from='fdr_specificationid' to='fdr_specificationid' alias='Spec' intersect='true'>",
            "<link-entity name='fdr_designmarkingrequirement' from='fdr_specification' to='fdr_specificationid' alias='DMR'>",
            "<attribute name='fdr_designmarkingrequirementid' />",
            "<link-entity name='fdr_containertype' from='fdr_containertypeid' to='fdr_containertype' alias='RT' />",
            "</link-entity>",
            "</link-entity>",
            "</link-entity>",
            "</link-entity>",
            "</entity>",
            "</fetch>",
        ].join("");

        var encodedFetchXML = encodeURIComponent(fetchXml);

        var req = new XMLHttpRequest();
        req.open("GET", clientUrl + "/api/data/v9.2/fdr_servicerequestfunctions?fetchXml=" + encodedFetchXML, true);
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
                    if (results.value != null && results.value != undefined && results.value.length > 0)
                        for (var i = 0; i < results.value.length; i++) {

                            if (!DMRs_IDs.includes(results.value[i]["DMR.fdr_designmarkingrequirementid"].toLowerCase()))
                                DMRs_IDs.push(results.value[i]["DMR.fdr_designmarkingrequirementid"].toLowerCase());
                        }
                    else {
                        console.log("Cannot find Specs related");
                        DMRs_IDs = new Array();
                        Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Cannot find Specifications and its Design Marking Requirements" });
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

    function getAllowedDesignReviewAgency(DRA_control) {

        var fetchXml = [
            "<fetch>",
            "<entity name='ovs_mocregistration'>",
            "<attribute name='ovs_mocregistrationid' />",
            "<link-entity name='fdr_containertype' from='fdr_containertypeid' to='fdr_registrationtype' link-type='inner' alias='ab'>",
            "<filter type='and'>",
            "<condition attribute='fdr_applicanttype' operator='eq' value='794600001' />",
            "</filter>",
            "</link-entity>",
            "</entity>",
            "</fetch>",
        ].join("");

        var encodedFetchXML = encodeURIComponent(fetchXml);

        var req = new XMLHttpRequest();
        req.open("GET", clientUrl + "/api/data/v9.2/ovs_mocregistrations?fetchXml=" + encodedFetchXML, true);
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
                    if (results.value != null && results.value != undefined && results.value.length > 0)
                        for (var i = 0; i < results.value.length; i++) {

                            DRAs_IDs.push(results.value[i]["ovs_mocregistrationid"]);
                        }
                    else {
                        console.log("Cannot find Design Review Agency");
                        DRAs_IDs = new Array();
                        Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Cannot find Design Review Agency" });
                    }

                } else {
                    console.log("Something went wrong " + this.statusText);
                    containerFunctions = new Array();
                    Xrm.Navigation.openErrorDialog({ message: "Something went wrong " + this.statusText });
                }

                DRA_control.addPreSearch(Design_main.DRA_Pre_filter);
            }
        };
        req.send();


    }

    function initilizeDataObj(formContext, qvName) {

        if (glHelper.GetLookupAttrId(formContext, "fdr_designmarkingrequirement") == null) {

            Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Design Marking Requirement  is absent. Design metadata cannot be loaded.", });
            return;
        }


        //blur screen
        Xrm.Utility.showProgressIndicator("Initilizing design requirements ...");


        var quickViewControl = formContext.ui.quickForms.get(qvName);//"QVC_DMR");
        if (quickViewControl != undefined) {
            if (quickViewControl.isLoaded()) {


                globalObj.quickViewControl = quickViewControl;
                globalObj.qvControls = quickViewControl.getControl();
                globalObj.section = globalObj.quickViewControl.getParent();
                globalObj.sctControls = globalObj.section.controls;

                //loop through quick view controls map and manipulate tab controls
                try {

                    processControls(formContext);
                } catch (e) {

                    console.log(e);
                    Xrm.Utility.closeProgressIndicator();
                    Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Design requirements metadata processing error:" + e, });
                }
                Xrm.Utility.closeProgressIndicator();

            }
            else {
                // Wait for some time and check again
                setTimeout(initilizeDataObj, 2000, formContext, qvName);
            }
        }
        else {
            console.log("No data to display in the quick view control.");
            Xrm.Utility.closeProgressIndicator();
            return false;
        }
    }

    function processControls(formContext) {

        //loop through quick view controls map and manipulate tab controls
        globalObj.qvControls.forEach(function (qvControl, i) {

            var dmrName = qvControl.getName();
            var dmrAttr = qvControl.getAttribute();
            var dmrAttrType = "";
            var dmrAttrValue;
            var isRequired = false;
            if (dmrAttr != null) {
                dmrAttrType = dmrAttr.getAttributeType();
                //boolean for yes/no, array for multiselectoptionset, etc ...
                dmrAttrValue = dmrAttr.getValue();
                isRequired = dmrAttr.getRequiredLevel() == 'required';
            }
            //var currentDesignControl = globalObj.sctControls.find(control => control.getName() == dmrName);
            var currentDesignControl = globalObj.sctControls.getByName(dmrName);

            if (currentDesignControl != null && currentDesignControl != undefined) {

                var designCurrent = currentDesignControl.getAttribute();

                var designAttrType = designCurrent.getAttributeType();
                var isMapped2few = globalObj.Mapping.hasOwnProperty(dmrName);
                //dmrName in globalObj.Mapping

                switch (dmrAttrType + "-" + designAttrType) {

                    case "boolean-boolean":
                    case "boolean-optionset":
                    case "boolean-multiselectoptionset":
                    case "boolean-decimal":
                    case "boolean-double":
                    case "boolean-datetime":
                    case "boolean-integer":
                    case "boolean-lookup":
                    case "boolean-money":
                    case "boolean-memo":
                    case "boolean-string":
                        var boolValue = (dmrAttrValue == null) ? false : dmrAttrValue;
                        // check if design fiels is part of globalObj.Mapping collection
                        if (isMapped2few) {
                            //if (dmrAttrValue == true)
                            //set all fields in collection mandatory   
                            //else - hide all string fields
                            for (var i = 0; i < globalObj.Mapping[dmrName].length; i++) {
                                var currentN = globalObj.Mapping[dmrName][i];
                                glHelper.SetControlVisibility(formContext, currentN, boolValue);
                                //glHelper.SetRequiredLevel(formContext, currentN, boolValue);
                            }

                        }
                        //(no globalObj.Mapping) 
                        else {
                            //if(dmr attribute value == true) set only the string mandatory
                            //else - hide string field
                            glHelper.SetControlVisibility(formContext, dmrName, boolValue);
                            //glHelper.SetRequiredLevel(formContext, dmrName, boolValue);
                        }

                        break;

                    case "multiselectoptionset-multiselectoptionset":

                        //check number of options selected in dmr control
                        //if one  - check same option in design control and make it read only
                        if (dmrAttrValue != null && dmrAttrValue.length == 1) {

                            glHelper.SetValue(formContext, dmrName, dmrAttrValue);
                            glHelper.SetControlReadOnly(formContext, dmrName, dmrAttrValue.length == 1)
                        }
                        //if more then one - leave only same options in design control and filter out others
                        if (dmrAttrValue != null && dmrAttrValue.length > 1) {

                            var options = new Array();
                            var dmrAttrText = qvControl.getAttribute().getText();
                            for (var i = 0; i < dmrAttrText.length; i++) {

                                options.push({ text: dmrAttrText[i], value: dmrAttrValue[i] });
                            }

                            currentDesignControl.clearOptions();
                            options.forEach(option => currentDesignControl.addOption(option));
                            //glHelper.SetRequiredLevel(formContext, dmrName, isRequired);
                            glHelper.SetControlReadOnly(formContext, dmrName, !(dmrAttrValue.length > 1));
                        }
                        //if none - hide
                        if (dmrAttrValue == null || dmrAttrValue.length == 0) {

                            glHelper.SetValue(formContext, dmrName, null);
                            //glHelper.SetRequiredLevel(formContext, dmrName, false);
                            glHelper.SetControlVisibility(formContext, dmrName, false);
                        }

                        break;

                    case "multiselectoptionset-optionset":

                        //if(dmr attribute value == true)                   
                        //check number of options selected in dmr control
                        //if one  - check same option in design control and make it read only
                        if (dmrAttrValue != null && dmrAttrValue.length == 1) {

                            glHelper.SetOptionsetByValue(formContext, dmrName, dmrAttrValue[0]);
                            glHelper.SetControlReadOnly(formContext, dmrName, dmrAttrValue.length == 1)
                        }
                        //if more then one - leave only same options in design control and filter out others
                        if (dmrAttrValue != null && dmrAttrValue.length > 1) {

                            glHelper.filterOptionSet(formContext, dmrName, dmrAttrValue, dmrAttrValue.length > 1);
                            glHelper.SetRequiredLevel(formContext, dmrName, isRequired);
                        }
                        //if none - hide
                        if (dmrAttrValue == null || dmrAttrValue.length == 0) {

                            glHelper.SetValue(formContext, dmrName, null);
                            //glHelper.SetRequiredLevel(formContext, dmrName, false);
                            glHelper.SetControlVisibility(formContext, dmrName, false);
                        }
                        break;

                    case "optionset-optionset":

                        //check if any options selected in dmr control => do the same in design
                        if (dmrAttrValue != null) {

                            glHelper.SetOptionsetByValue(formContext, dmrName, dmrAttrValue);
                            glHelper.SetControlReadOnly(formContext, dmrName, true);
                        }
                        //else => leave option set as is
                        break;

                }

            }
        });
    }

    function SetTCRNOnlyBasedOnType(formContext) {
        var drId = glHelper.GetLookupAttrId(formContext, "fdr_designmarkingrequirement");
        if (drId != null) {
            Xrm.WebApi.online.retrieveRecord("fdr_designmarkingrequirement", drId, "?$select=fdr_designmarkingrequirementid,_fdr_containertype_value&$expand=fdr_ContainerType($select=_fdr_standard_value)").then(
                function success(result) {
                    var fdr_designmarkingrequirementid = result["fdr_designmarkingrequirementid"]; // Guid
                    var fdr_containertype = result["_fdr_containertype_value"]; // Lookup
                    var fdr_containertype_formatted = result["_fdr_containertype_value@OData.Community.Display.V1.FormattedValue"];
                    var fdr_containertype_lookuplogicalname = result["_fdr_containertype_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
                    if (result.hasOwnProperty("fdr_ContainerType") && result["fdr_ContainerType"] !== null) {
                        var fdr_ContainerType_fdr_standard = result["fdr_ContainerType"]["_fdr_standard_value"]; // Lookup
                        var fdr_ContainerType_fdr_standard_formatted = result["fdr_ContainerType"]["_fdr_standard_value@OData.Community.Display.V1.FormattedValue"];
                        var fdr_ContainerType_fdr_standard_lookuplogicalname = result["fdr_ContainerType"]["_fdr_standard_value@Microsoft.Dynamics.CRM.lookuplogicalname"];

                        if (fdr_ContainerType_fdr_standard_formatted.indexOf("B620") > 0) {
                            glHelper.SetSectionVisibility(formContext, "General", "section_TCRN", true);
                            glHelper.SetSectionVisibility(formContext, "General", "section_designRequirement", false);
                        } else {
                            glHelper.SetSectionVisibility(formContext, "General", "section_TCRN", false);
                            glHelper.SetSectionVisibility(formContext, "General", "section_designRequirement", true);

                        }
                    }
                },
                function (error) {
                    console.log(error.message);
                }
            );
        }
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


            //pre-filter lookup Design Review Agency
            var DRA_control = formContext.getControl("fdr_designreviewagency");
            getAllowedDesignReviewAgency(DRA_control);

            //hide Design Requirements section for new forms
            glHelper.SetSectionVisibility(formContext, "General", "section_designRequirement", formType != 1);

            if (formType == 1) {

                //DMR Lookup
                var DMR_control = formContext.getControl("fdr_designmarkingrequirement");

                //check if there Operation
                var operationID = glHelper.GetLookupAttrId(formContext, "fdr_ovs_mocregistration");
                //get SRF Id
                var initialSRF_id = glHelper.GetValue(formContext, "fdr_initialsrfunctionid");
                //get Reg Type 
                var initialRT_id = glHelper.GetValue(formContext, "fdr_initialregtypeid");

                //if oprerationID is not null => we create Design based on Operation
                if (operationID == null) Xrm.Navigation.openErrorDialog({ message: "Design cannot be created without Operation. Plase advice with service team." }).then(
                    function (success) {
                        //lock the form
                        glHelper.disableAllFields(formContext);
                        return;
                    },
                    function (error) {
                        console.log(error);
                        return;
                    }
                );

                if (initialSRF_id == undefined || initialSRF_id.trim() == '') Xrm.Navigation.openErrorDialog({ message: "Design cannot be created from any form except Service request Function. Plase advice with service team." }).then(
                    function (success) {
                        //lock the form
                        glHelper.disableAllFields(formContext);
                        return;
                    },
                    function (error) {
                        console.log(error);
                        return;
                    }
                );

                if (initialRT_id == undefined || initialRT_id.trim() == '') Xrm.Navigation.openErrorDialog({ message: "Registration type value is missing. Plase advice with service team." }).then(
                    function (success) {
                        //lock the form
                        glHelper.disableAllFields(formContext);
                        return;
                    },
                    function (error) {
                        console.log(error);
                        return;
                    }
                );


                //pre-filter DMR lookup and set operation               
                getAllowedDMRfromSpecs(DMR_control, initialSRF_id, initialRT_id);


                //add DMR and Name on change and use initilizeDataObj from there
                var DMR = formContext.getAttribute("fdr_designmarkingrequirement");
                DMR.removeOnChange(Design_main.DMR_OnChange);
                DMR.addOnChange(Design_main.DMR_OnChange);

                var Name = formContext.getAttribute("fdr_name");
                Name.removeOnChange(Design_main.DMR_OnChange);
                Name.addOnChange(Design_main.DMR_OnChange);

            }
            else {

                //lock dmr 
                glHelper.SetDisabled(formContext, "fdr_designmarkingrequirement", true);
                initilizeDataObj(globalFormContext, "QVC_DMR");
                //Design Marking Requirement=B620, TCRN only
                SetTCRNOnlyBasedOnType(formContext);
            }
        },

        DMR_OnChange: function (executionContext) {

            var name = glHelper.GetValue(globalFormContext, "fdr_name");
            if (glHelper.GetLookupAttrId(globalFormContext, "fdr_designmarkingrequirement") != null
                && name != null && name != "" && name != undefined)
                globalFormContext.data.save().then(function () {

                    //init quick view control and collection of controls in quick view
                    initilizeDataObj(globalFormContext, "QVC_DMR");
                }, function (e) {

                    Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Form must be saved before Design Marking requirement are applied. Please, fill all required fields." });
                });

        },

        DMR_Pre_filter: function () {

            var strTemplate = "<value>{0}</value>";
            var currentLine = "";

            //no specs with DMR
            if (DMRs_IDs.length == 0) {
                // filter have to return an empty result
                var functionFilter = "<filter type='and'><condition attribute='fdr_designmarkingrequirementid' operator='eq' value='00000000-0000-0000-0000-000000000000'></condition></filter>";

            }
            else {

                for (var i = 0; i < DMRs_IDs.length; i++) {

                    currentLine = currentLine + strTemplate.replace("{0}", DMRs_IDs[i]);
                }
                var functionFilter = "<filter type='and'><condition attribute='fdr_designmarkingrequirementid' operator='in'>" + currentLine + "</condition></filter>";
            }
            globalFormContext.getControl("fdr_designmarkingrequirement").addCustomFilter(functionFilter, "fdr_designmarkingrequirement");

        },

        DRA_Pre_filter: function () {

            var strTemplate = "<value>{0}</value>";
            var currentLine = "";

            //no specs with DMR
            if (DRAs_IDs.length == 0) {
                // filter have to return an empty result
                var functionFilter = "<filter type='and'><condition attribute='ovs_mocregistrationid' operator='eq' value='00000000-0000-0000-0000-000000000000'></condition></filter>";

            }
            else {

                for (var i = 0; i < DRAs_IDs.length; i++) {

                    currentLine = currentLine + strTemplate.replace("{0}", DRAs_IDs[i]);
                }
                var functionFilter = "<filter type='and'><condition attribute='ovs_mocregistrationid' operator='in'>" + currentLine + "</condition></filter>";
            }
            globalFormContext.getControl("fdr_designreviewagency").addCustomFilter(functionFilter, "ovs_mocregistration");

        },
    }

})(window, document)