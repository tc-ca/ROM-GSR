///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/DGAIS _SpecsMapping.js"/>


var DGAIS_MOC_MainForm = (function (window, document) {

    //variables
    var formType;
    var globalContext;
    var clientUrl;
    var incidentGuid;
    var vehicleConfigurationOptions;
    var regTypeId;

    var mode = new Array();
    mode[0] = []; //none
    mode[1] = [1, 2, 3, 4, 5];//road vehType
    mode[2] = [6, 7];//rail vehType
    mode[3] = [8, 9, 10];//marine vehType
    mode[4] = [11, 12, 13];//air vehType


    var vehType = new Array();
    vehType[0] = vehType[5] = [];//none, car/bus
    vehType[1] = vehType[3] = vehType[4] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 31];//truck, off road, unkhown vehicle
    vehType[2] = [14, 15]; //farm tractor    
    vehType[6] = vehType[7] = [16, 17, 18, 19, 20, 21, 22, 31];//locomotive, unknown train vehicle
    vehType[8] = [23, 24, 25, 26, 27, 31];//ship
    vehType[9] = vehType[10] = [27, 31];//barge, unknown    
    vehType[11] = vehType[12] = vehType[13] = [28, 29, 30, 31];//airplane, helicopter, unknown

    //TO DO: Location section  tab_specs_location

    //not in use
    var specs2Forms = {

        "180f07ea-f4dc-ec11-bb3c-000d3a848097": "",
        "7ec1942e-bbc0-ec11-983f-0022483da58f": "tab_specs_C_S_T",
        "82c1942e-bbc0-ec11-983f-0022483da58f": "tab_specs_HT",
        "8ac1942e-bbc0-ec11-983f-0022483da58f": "tab_specs_SC",
        "8cc1942e-bbc0-ec11-983f-0022483da58f": "",
        "8ec1942e-bbc0-ec11-983f-0022483da58f": "tab_specs_IBC_LP",
        "90c1942e-bbc0-ec11-983f-0022483da58f": "tab_specs_IBC_LP",
        "94c1942e-bbc0-ec11-983f-0022483da58f": "",
        "703f6983-8edb-ec11-bb3c-000d3a848097": "",
        "abb98cb7-67dc-ec11-bb3c-000d3a848097": "",
        "3ad54314-68dc-ec11-bb3c-000d3a848097": "",
        "c3fb8486-68dc-ec11-bb3c-000d3a848097": "tab_specs_PT",
        "21dda322-6bdc-ec11-bb3c-000d3a848097": "",
        "602194da-f3dc-ec11-bb3c-000d3a848097": "",
        "6028857c-f5dc-ec11-bb3c-000d3a848097": "tab_specs_C_S_T",
        "7722eb41-ffdc-ec11-bb3c-000d3a848097": "",
        "80c1942e-bbc0-ec11-983f-0022483da58f": "",
        "84c1942e-bbc0-ec11-983f-0022483da58f": "tab_specs_TankCars",
        "86c1942e-bbc0-ec11-983f-0022483da58f": "",
        "92c1942e-bbc0-ec11-983f-0022483da58f": "tab_specs_AC_GC",
        "96c1942e-bbc0-ec11-983f-0022483da58f": "",
        "b4398281-7f7a-ee11-8179-0022483cb0d4": "",

    };

    var MOC_List2Forms = {
        "1": {
            "section_name": "tab_specs_AC_GC",
            "required_fields":["",""]
        },
        "2": {
            "section_name": "tab_specs_TankCars",
            "required_fields": ["", ""]
        },
        "3": {
            "section_name": "tab_specs_TC",
            "required_fields": ["", ""]
        },
        "4": {
            "section_name": "tab_specs_HT",
            "required_fields": ["ovs_test_inspection_markings_txt","ovs_tank_serial_number_txt","ovs_manufacturers_serial_number_txt"]
        },
        "5": {
            "section_name": "tab_specs_TCPT_NT",
            "required_fields": ["ovs_tank_serial_number_txt","ovs_manufacturers_serial_number_txt"]
        },
        "6": {
            "section_name": "tab_specs_IBC_LP",
            "required_fields": ["", ""]
        },
        "7": {
            "section_name": "tab_specs_PT",
            "required_fields": ["ovs_tank_reporting_mark_txt", ""]
        },
        "8": {
            "section_name": "tab_specs_C_S_T",
            "required_fields": ["ovs_manufacturer_registered_mark_txt","ovs_tank_serial_number_txt","ovs_manufacturers_serial_number_txt"]
        },
        "9": {
            "section_name": "tab_specs_SC",
            "required_fields": ["", ""]
        }
    };

    //********************private methods*******************


    function findPropBySection(sectionName) {

        for (var i = 1; i < 10; i++) {
            if (typeof MOC_List2Forms[i] == 'undefined')
                return null;
            if (MOC_List2Forms[i].section_name == sectionName) {
                return MOC_List2Forms[i];
            }
        }
    }

    function filterVehicleType(executionContext, formContext) {

        Xrm.WebApi.online.retrieveRecord("ovs_incident_report", incidentGuid, "?$select=ovs_mode_cd").then(
            function success(result) {
                if (result != null) {
                    var ovs_mode_cd = result["ovs_mode_cd"];
                    var ovs_mode_cd_formatted = result["ovs_mode_cd@OData.Community.Display.V1.FormattedValue"];
                    if (ovs_mode_cd != null)
                        glHelper.filterOptionSet(formContext, "ovs_vehicle_type_cd", mode[ovs_mode_cd], true);
                    else {

                        glHelper.filterOptionSet(formContext, "ovs_vehicle_type_cd", mode[0], true);
                        Xrm.Navigation.openErrorDialog({ message: "Parent Incident Report is missing the Mode.\n Vehicle Type and Configuration are not accessible!" });
                    }

                    //call vehicle type on change to update vehicle configuration
                    DGAIS_MOC_MainForm.VehicleType_OnChange(executionContext);
                }
            },
            function (error) {
                Xrm.Navigation.openErrorDialog({ message: error.message });
            }
        );
    }

    function sectionManager(formContext, selectedSectionInfo) {

        var tabObj = formContext.ui.tabs.get("tab_specs");
        var selectedSectionObject;
        tabObj.sections.forEach(function (sectionObj) {

            var sectionName = sectionObj.getName();
            var currentSectionInfo = findPropBySection(sectionName);
            if (sectionName != selectedSectionInfo.section_name) {
                //hide and clean previosly selected section
                processSectionControls(formContext, sectionObj, currentSectionInfo, sectionName == selectedSectionInfo.section_name).then(
                    function (success) {

                    },
                    function (error) {

                        console.log("processSectionControls error: " + error.message);
                        Xrm.Navigation.openErrorDialog({ message: "Cannot process Specs tab sections" + sectionName + ". Please contact support. Error: " + error.message });
                    }
                );
            }
            else selectedSectionObject = sectionObj;

        });
        //set up newly selected section
        processSectionControls(formContext, selectedSectionObject, selectedSectionInfo, true);
    }

    async function processSectionControls(formContext, sectionObj, sectionInfo, isVisible) {


        //form object
        if (sectionInfo != null) {

            //get list of controls
            var controls = sectionObj.controls;
            //interate through controls and clean the attributes with glHelper.SetValue
            controls.forEach(function (ctrl) {

                //value and visibility
                var attr = ctrl.getAttribute();
                var attrName = attr.getName()
                if (!isVisible) {
                    attr.setValue(null);
                    attr.setSubmitMode("always");
                }
                ctrl.setVisible(isVisible);

                //required level per section
                if (sectionInfo.required_fields.includes(attrName))
                    glHelper.SetRequiredLevel(formContext, attrName, isVisible);
            });
        }
        sectionObj.setVisible(isVisible);

        return true;
    }

    //not in use
    function getRegTypeId(formContext, specid, specname) {

        var fetchData = {
            "fdr_specificationid": specid,
            "fdr_name": specname
        };
        var fetchXml = [
            "<fetch distinct='true'>",
            "  <entity name='fdr_containertype'>",
            "    <attribute name='fdr_containertypeid'/>",
            "    <link-entity name='qm_tylegislationsource' from='qm_tylegislationsourceid' to='fdr_standard' link-type='inner' alias='LS'>",
            "      <link-entity name='fdr_specification' from='fdr_legislationsource' to='qm_tylegislationsourceid' link-type='inner' alias='Spec'>",
            "        <filter>",
            "          <condition attribute='fdr_specificationid' operator='eq' value='", fetchData.fdr_specificationid, "' uiname='", fetchData.fdr_name, "' uitype='fdr_specification'/>",
            "        </filter>",
            "      </link-entity>",
            "    </link-entity>",
            "  </entity>",
            "</fetch>"
        ].join("");

        var encodedFetchXML = encodeURIComponent(fetchXml);
        //do sync
        var req = new XMLHttpRequest();
        req.open("GET", clientUrl + "/api/data/v9.2/fdr_containertypes?fetchXml=" + encodedFetchXML, false);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");

        req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {

                    var results = JSON.parse(this.response);
                    if (results.value != null && results.value != undefined && results.value.length > 0) {
                        if (results.value.length == 1) {
                            regTypeId = results.value[0]["fdr_containertypeid"];
                            return;
                        }
                        //more than one
                        else {
                            console.log("More than one Registration Type found");
                            Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Data issue.More than one Registration Type found." });
                        }
                    }
                    //not found
                    else {
                        console.log("Cannot find related Registration Type");
                        Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: "Data issue.Cannot find related Registration Type." });
                    }

                } else {
                    console.log("Something went wrong " + this.statusText);
                    Xrm.Navigation.openErrorDialog({ message: "Something went wrong " + this.statusText });
                }               
            }
        };
        req.send();

    }

    //********************private methods end***************

    //********************public methods***************
    return {

        OnLoad: function (executionContext) {

            var formContext = executionContext.getFormContext();
            globalContext = glHelper.getGlobalContext();
            clientUrl = globalContext.getClientUrl();


            formType = glHelper.GetFormType(formContext);
            //header_
            incidentGuid = glHelper.GetLookupAttrId(formContext, "ovs_incident_report_id");

            if (incidentGuid == null)
            {
                Xrm.Navigation.openErrorDialog({ message: "Incident Report must be populated" });
                glHelper.SetFieldNotification(formContext, "header_ovs_incident_report_id", "Incident Report must be populated");
                return;
            } else incidentGuid = incidentGuid.replace('{', '').replace('}', '');
            //store original list of options
            vehicleConfigurationOptions = formContext.getAttribute("ovs_vehicle_configuration_cd").getOptions();

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

            var damageLocation = formContext.getAttribute("ovs_damage_location_cds");
            damageLocation.removeOnChange(DGAIS_MOC_MainForm.DamageLocation_OnChange);
            damageLocation.addOnChange(DGAIS_MOC_MainForm.DamageLocation_OnChange);

            var vType = formContext.getAttribute("ovs_vehicle_type_cd");
            vType.removeOnChange(DGAIS_MOC_MainForm.VehicleType_OnChange);
            vType.addOnChange(DGAIS_MOC_MainForm.VehicleType_OnChange);

            var isCanadianMOC = formContext.getAttribute("ovs_moc_built_in_canada_ind");
            isCanadianMOC.removeOnChange(DGAIS_MOC_MainForm.WasCanMOC_OnChange);
            isCanadianMOC.addOnChange(DGAIS_MOC_MainForm.WasCanMOC_OnChange);

            //var specs = formContext.getAttribute("ovs_specification_id");
            //specs.removeOnChange(DGAIS_MOC_MainForm.Specs_OnChange);
            //specs.addOnChange(DGAIS_MOC_MainForm.Specs_OnChange);

            var country = formContext.getAttribute("ovs_country_cd");
            country.removeOnChange(DGAIS_MOC_MainForm.Country_OnChange);
            country.addOnChange(DGAIS_MOC_MainForm.Country_OnChange);

            var MOC_list = formContext.getAttribute("ovs_moc_form_cd");
            MOC_list.removeOnChange(DGAIS_MOC_MainForm.MOC_List_OnChange);
            MOC_list.addOnChange(DGAIS_MOC_MainForm.MOC_List_OnChange);

            
            if (formType == glHelper.FORMTYPE_CREATE) {

                filterVehicleType(executionContext, formContext);
            }
            else {

                releaseLocation.fireOnChange();
                damageType.fireOnChange();
                damageLocation.fireOnChange();
                vType.fireOnChange();
                country.fireOnChange();
                isCanadianMOC.fireOnChange();
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

        VehicleType_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();

            var vType = glHelper.GetOptionsetValue(formContext, "ovs_vehicle_type_cd");
            if (vType != "")
                glHelper.filterOptionSetUsingOrigin(formContext, "ovs_vehicle_configuration_cd", vehicleConfigurationOptions, vehType[vType], true);
            else {
                glHelper.filterOptionSetUsingOrigin(formContext, "ovs_vehicle_configuration_cd", vehicleConfigurationOptions, vehType[0], true);
                glHelper.SetValue(formContext, "ovs_vehicle_configuration_cd", null);
            }
        },

        WasCanMOC_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();

            var isCanadian = glHelper.GetValue(formContext, "ovs_moc_built_in_canada_ind");
            //if not originaly set - set all blocked
            if (isCanadian === "") {

                glHelper.SetDisabled(formContext, "ovs_specification_id", true);
                glHelper.SetDisabled(formContext, "ovs_other_code_txt", true);
                glHelper.SetDisabled(formContext, "ovs_moc_form_cd", true);
                return;
            }
            //update
            glHelper.SetRequiredLevel(formContext, "ovs_specification_id", isCanadian);
            glHelper.SetRequiredLevel(formContext, "ovs_other_code_txt", !isCanadian);
            glHelper.SetRequiredLevel(formContext, "ovs_moc_form_cd", !isCanadian);
            glHelper.SetDisabled(formContext, "ovs_specification_id", false);
            glHelper.SetDisabled(formContext, "ovs_other_code_txt", isCanadian);
            glHelper.SetDisabled(formContext, "ovs_moc_form_cd", isCanadian);
            //glHelper.SetControlVisibility(formContext, "ovs_other_code_txt", !isCanadian);
            //glHelper.SetControlVisibility(formContext, "ovs_moc_form_cd", !isCanadian);
            if (isCanadian) {

                glHelper.SetValue(formContext, "ovs_other_code_txt", null);
                //glHelper.SetValue(formContext, "ovs_moc_form_cd", null);
                var specs = formContext.getAttribute("ovs_specification_id");
                specs.fireOnChange();
            }
            else {
                var MOC_list = formContext.getAttribute("ovs_moc_form_cd");
                MOC_list.fireOnChange();
            }

        },

        //not in use
        Specs_OnChange: function (executionContext) {


            //TO DO: Location section  tab_specs_location
            var formContext = executionContext.getFormContext();

            var sectionToDisplay;
            //get spec id
            var ovs_specification_id = glHelper.GetLookupAttrId(formContext, "ovs_specification_id");
            var ovs_specification_fdr_name = glHelper.GetLookupName(formContext, "ovs_specification_id");

            if (ovs_specification_id == null) sectionToDisplay = ""; //clean and hide all
            else {

                //get regTypeId
                getRegTypeId(formContext, ovs_specification_id.replace('{', '').replace('}', ''), ovs_specification_fdr_name);

                //use mapping to get section name (form name)
                sectionToDisplay = specs2Forms[regTypeId];// "section name from mapping or empty";
            }

            //get form with mapping and enble the section.
            //clean other section
            //if lookup isn't maped or lookup is maped to "undefined" - notification
            sectionManager(formContext, sectionToDisplay);
        },

        Country_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();
            var country = glHelper.GetOptionsetValue(formContext, "ovs_country_cd");

            //ovs_province_territory_cd
            //ovs_state_cd

            glHelper.SetControlVisibility(formContext, "ovs_province_territory_cd", country == 1);
            if (country == 1) glHelper.SetValue(formContext, "ovs_state_cd", null);
            glHelper.SetControlVisibility(formContext, "ovs_state_cd", country == 2);
            if (country == 1) glHelper.SetValue(formContext, "ovs_province_territory_cd", null);

            //clean
            if (country == "" || country > 2) {

                glHelper.SetValue(formContext, "ovs_province_territory_cd", null);
                glHelper.SetValue(formContext, "ovs_state_cd", null);
            }
        },

        MOC_List_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();
            var listN = glHelper.GetOptionsetValue(formContext, "ovs_moc_form_cd");
            //empty
            if (listN === "") return;

            sectionManager(formContext, MOC_List2Forms[listN]);
        },
    };
    //********************public methods end***************
})(window, document);
