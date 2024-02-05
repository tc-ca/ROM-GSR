///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>

var AccountTDGmain = (function (window, document) {
     //variables
    var formType;
     //optionset value: form name
    var formMapping_EN = {
        "948010001": "Site",
        "948010000": "Company",
    };

    var formMapping_FR = {
        "948010001": "Site",
        "948010000": "Entreprise",
    };
    var formContextGlobalRef;

    const STREET1 = "address1_line1";
    const CITY = "address1_city";
    const STATE_PROVINCE = "address1_stateorprovince";
    const ZIP_POSTALCODE = "address1_postalcode";
    const COUNTRY = "address1_country";
    const PRIMARYCONTACT = "primarycontactid";




    //********************private methods*******************

    function getViolationHistory(formContext) {

        var parameters = {};
        parameters.accountid = formContext.data.entity.getId().replace("{", "").replace("}", "");

        var ovs_ViolationsHistoryPostRequest = {
            accountid: parameters.accountid,

            getMetadata: function () {
                return {
                    boundParameter: null,
                    parameterTypes: {
                        "accountid": {
                            "typeName": "Edm.String",
                            "structuralProperty": 1
                        }
                    },
                    operationType: 0,
                    operationName: "ovs_ViolationsHistoryPost"
                };
            }
        };

        Xrm.WebApi.online.execute(ovs_ViolationsHistoryPostRequest).then(
            function success(result) {
                if (result.ok) {
                    //var results = JSON.parse(result.responseText);

                    result.text().then(function (i) {
                        var data = JSON.parse(i);
                        if (data != null || typeof data !== 'undefined') {

                            if (data.violationsHistory != null && typeof data.violationsHistory !== 'undefined' && data.violationsHistory != "") {
                                window.top.localStorage.setItem('_violationsHistory', data.violationsHistory);
                            }
                        }
                    }, function (error) {
                            console.log("getViolationHistory error: " + error.message);
                    });

                    //result.json().then(function (i) {
                    //    var data = i;
                    //    if (data != null || typeof data !== 'undefined') {

                    //        if (data.violationsHistory != null && typeof data.violationsHistory !== 'undefined' && data.violationsHistory != "") {
                    //            window.top.localStorage.setItem('_violationsHistory', data.violationsHistory);
                    //        }
                    //    }
                    //}, function (error) {
                    //        console.log("getViolationHistory error: " + error.message);
                    //});
                    
                }
            },
            function (error) {
                console.log("getViolationHistory error: " + error.message);
            }
        );

    }
        
    function filter_customertypecode(formContext) {

        var options = new Array("948010000","948010001");
        glHelper.filterOptionSet(formContext, "customertypecode", options, true);
        
    }

    /// Update by Elena K - fixing a bug when switching forms reset customertypecode
    function setFormUsage(formContext) {
        //ROM - Force the selection of a company when site is created
        // 0 = Undefined, 1 = Create, 2 = Update, 3 = Read Only, 4 = Disabled, 6 = Bulk Edit
        formType = glHelper.GetFormType(formContext);

        var formName = formContext.ui.formSelector.getCurrentItem().getLabel();
        var langId = Xrm.Utility.getGlobalContext().userSettings.languageId;

        if (langId == 1033) {

            if (formName.toUpperCase() == "SITE") {
                //Parent company is required
                glHelper.SetRequiredLevel(formContext, "parentaccountid", true);

                //Company specific fields are not required and hidden
                glHelper.SetRequiredLevel(formContext, "ovs_legalname", false);
                glHelper.SetRequiredLevel(formContext, "ovs_legalnamefr", false);
                glHelper.SetRequiredLevel(formContext, "name", false);
                glHelper.SetRequiredLevel(formContext, "ovs_namefr", false);

                glHelper.SetControlVisibility(formContext, "ovs_legalname", false);
                glHelper.SetControlVisibility(formContext, "ovs_legalnamefr", false);
                glHelper.SetControlVisibility(formContext, "name", false);
                glHelper.SetControlVisibility(formContext, "ovs_namefr", false);

                glHelper.SetRequiredLevel(formContext, "customertypecode", false);
                glHelper.SetControlVisibility(formContext, "customertypecode", false);

                // Update related to the CID_PBI# 314125
                //There is no review for CID Sites that are being added to Core Data. The purpose of CID Regulations was passed to add sites to CORE Data for oversight.
                if (formType == 1) {
                    glHelper.SetValue(formContext, "customertypecode", 948010001);
                    ///a new field has been added: cid_cidflag. 
                    // From the ROM form:  Default value when Site created = 'Unknown'.
                    //This value will be updated to 'In Scope' if a HOTI or HOTI GOA operation is created.

                    if (formContext.getAttribute("cid_cidflag"))
                        glHelper.SetValue(formContext, "cid_cidflag", 100000000);
                }

            }
            else if (formName.toUpperCase()  == "COMPANY") {
                glHelper.SetRequiredLevel(formContext, "parentaccountid", false);
                glHelper.SetControlVisibility(formContext, "parentaccountid", false);

                glHelper.SetControlVisibility(formContext, "customertypecode", false);

                if (formType == 1)
                    glHelper.SetValue(formContext, "customertypecode", 948010000);

                if (!glHelper.hasCurrentUserRole("System Administrator") &&
                    (
                        (glHelper.hasCurrentUserRole("TDG Inspector")) ||
                        (glHelper.hasCurrentUserRole("TDG Analyst")) ||
                        (glHelper.hasCurrentUserRole("TDG Manager"))
                    )
                ) {
                    if (formContext.getAttribute("cid_crabusinessnumber"))
                        glHelper.SetControlReadOnly(formContext, "cid_crabusinessnumber", true);
                }


            }
        }
        else if (langId == 1036) {
            if (formName.toUpperCase()  == "SITE") {
                //Parent company is required
                glHelper.SetRequiredLevel(formContext, "parentaccountid", true);

                //Company specific fields are not required and hidden
                glHelper.SetRequiredLevel(formContext, "ovs_legalname", false);
                glHelper.SetRequiredLevel(formContext, "ovs_legalnamefr", false);
                glHelper.SetRequiredLevel(formContext, "name", false);
                glHelper.SetRequiredLevel(formContext, "ovs_namefr", false);

                glHelper.SetControlVisibility(formContext, "ovs_legalname", false);
                glHelper.SetControlVisibility(formContext, "ovs_legalnamefr", false);
                glHelper.SetControlVisibility(formContext, "name", false);
                glHelper.SetControlVisibility(formContext, "ovs_namefr", false);

                glHelper.SetRequiredLevel(formContext, "customertypecode", false);
                glHelper.SetControlVisibility(formContext, "customertypecode", false);

                // Update related to the CID_PBI# 314125
                //There is no review for CID Sites that are being added to Core Data. The purpose of CID Regulations was passed to add sites to CORE Data for oversight.
                if (formType == 1) {
                    glHelper.SetValue(formContext, "customertypecode", 948010001);
                    ///a new field has been added: cid_cidflag. 
                    // From the ROM form:  Default value when Site created = 'Unknown'.
                    //This value will be updated to 'In Scope' if a HOTI or HOTI GOA operation is created.

                    if (formContext.getAttribute("cid_cidflag"))
                        glHelper.SetValue(formContext, "cid_cidflag", 100000000);
                }
            }

            else if (formName.toUpperCase()  == "ENTREPRISE") {
                glHelper.SetRequiredLevel(formContext, "parentaccountid", false);
                glHelper.SetControlVisibility(formContext, "parentaccountid", false);

                glHelper.SetControlVisibility(formContext, "customertypecode", false);
                glHelper.SetControlVisibility(formContext, "cid_cidcompanystatus", false);

                if (formType == 1)
                    glHelper.SetValue(formContext, "customertypecode", 948010000);

                if (!glHelper.hasCurrentUserRole("System Administrator") &&
                    (
                        (glHelper.hasCurrentUserRole("TDG Inspector")) ||
                        (glHelper.hasCurrentUserRole("TDG Analyst")) ||
                        (glHelper.hasCurrentUserRole("TDG Manager"))
                    )
                ) {
                    if (formContext.getAttribute("cid_crabusinessnumber"))
                        glHelper.SetControlReadOnly(formContext, "cid_crabusinessnumber", true);
                }
            }
        }
    }

    //composite control fields manipulation
    //function setAddressFieldsLevel(formContext) {
        
    //    glHelper.SetRequiredLevel(formContext, STREET1, true);
    //    glHelper.SetRequiredLevel(formContext, CITY, true);
    //    glHelper.SetRequiredLevel(formContext, STATE_PROVINCE, true);
    //    glHelper.SetRequiredLevel(formContext, ZIP_POSTALCODE, true);
    //    glHelper.SetRequiredLevel(formContext, COUNTRY, true);

    //}

    //********************private methods end***************

    //********************public methods***************
    return {


        OnLoad: function (executionContext) {
            
            const formContext = executionContext.getFormContext();
            formContextGlobalRef = formContext;

            //filter Relationship Type
            filter_customertypecode(formContext);

            // 0 = Undefined, 1 = Create, 2 = Update, 3 = Read Only, 4 = Disabled, 6 = Bulk Edit
            formType = glHelper.GetFormType(formContext);
            // Retrieve customertypecode 
            var _customerType;
            var rTypeCode = formContext.getAttribute("customertypecode");
            if (rTypeCode) _customerType = formContext.getAttribute("customertypecode").getValue();

            rTypeCode.removeOnChange(AccountTDGmain.relationShip_OnChange); // avoid binding multiple event handlers
            rTypeCode.addOnChange(AccountTDGmain.relationShip_OnChange);
            
            if (formType > 1)
            {

                rTypeCode.fireOnChange();

                //prepare data for Violations History grid
                getViolationHistory(formContext);

            }
            
            //Set form usage for Company Vs Site specific fields
            setFormUsage(formContext);


            //ROM - Force the selection of a company when site is created

           // var formName = formContext.ui.formSelector.getCurrentItem().getLabel();
           // var langId = Xrm.Utility.getGlobalContext().userSettings.languageId;

            //Hide customer type
            glHelper.SetRequiredLevel(formContext, "customertypecode", false);
            glHelper.SetControlVisibility(formContext, "customertypecode", false);



            //setAddressFieldsLevel(formContext);

            // This info needed for Contact-Quick create form i.e. Contact_QuickCreate.js
            //TO Do: re-engeenir for mobile
            try {
                window.top.QuickCreateHelper = {};
                window.top.QuickCreateHelper.site = {};
                window.top.QuickCreateHelper.site.id = formContext.entityReference.id;
                window.top.QuickCreateHelper.site.et = formContext.entityReference.entityType;
                window.top.QuickCreateHelper.site.name = formContext.getAttribute("name").getValue();

            } catch (e) {
                console.log("Site_OnChange failed - lookup is empty");
            }
            
            
        },


        //Refresh_AccountClass: function () {

        //    var accountClass = formContextGlobalRef.getControl("Subgrid_AccountClasses");
        //    accountClass.refresh();
        //},


        relationShip_OnChange: function (executionContext) {
            
            var formContext = executionContext.getFormContext();

            //Load up resources for English/French labels
            var langId = Xrm.Utility.getGlobalContext().userSettings.languageId;
            var rType = glHelper.GetValue(formContext, "customertypecode");

            if (langId == 1033)
                glHelper.SwitchFormByName(formContext, formMapping_EN[rType.toString()]);
            else if (langId == 1036)
                glHelper.SwitchFormByName(formContext, formMapping_FR[rType.toString()]);

        },
    }
    //********************public methods end***************

})(window, document);