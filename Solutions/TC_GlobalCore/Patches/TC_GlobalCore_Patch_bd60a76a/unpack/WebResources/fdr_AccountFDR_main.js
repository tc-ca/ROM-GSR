﻿///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>

var AccountFDRmain = (function (window, document) {
     //variables
    var formType;
     //optionset value: form name
    var formMapping_EN = {
        "948010001": "FDR Site Profile",
        "948010000": "FDR Organizations",
    };

    var formMapping_FR = {
        "948010001": "Profil du site de TMD",
        "948010000": "Organisations TMD",
    };
    var formContextGlobalRef;
    var regionMapping = {"AB": "0","BC": "1","MB": "2","NB": "3","NL": "4","NT": "5","NS": "6","NU": "7","ON": "8","PE": "9","QC": "10",	"SK": "11","YK": "12"};



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

    function setRegion(formContext, langId, postalCode) {

        Xrm.WebApi.online.retrieveMultipleRecords("territory", "?$select=territoryid,name,ovs_territorynameenglish,ovs_territorynamefrench&$filter=Microsoft.Dynamics.CRM.ContainValues(PropertyName='ovs_tc_region',PropertyValues=['" + postalCode + "'])&$top=1").then(
            function success(results) {
                console.log(results);
                for (var i = 0; i < results.entities.length; i++) {
                    var result = results.entities[i];
                    // Columns
                    var territoryid = result["territoryid"]; // Guid
                    var name = result["name"]; // Text
                    var ovs_territorynameenglish = result["ovs_territorynameenglish"]; // Text
                    var ovs_territorynamefrench = result["ovs_territorynamefrench"]; // Text

                    glHelper.SetLookup(formContext, "territoryid", "territory", territoryid, langId == 1036 ? ovs_territorynamefrench : ovs_territorynameenglish);
                }
            },
            function (error) {
                console.log(error.message);
            }
        );

    }

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

            var rTypeCode = formContext.getAttribute("customertypecode");
            rTypeCode.removeOnChange(AccountFDRmain.relationShip_OnChange); // avoid binding multiple event handlers
            rTypeCode.addOnChange(AccountFDRmain.relationShip_OnChange);

            var Street1 = formContext.getAttribute("address1_line1");
            Street1.removeOnChange(AccountFDRmain.Stree1_OnChange); 
            Street1.addOnChange(AccountFDRmain.Stree1_OnChange);
            
            if (formType > 1) {

                rTypeCode.fireOnChange();

                //prepare data for Violations History grid
                getViolationHistory(formContext);

            }

            //setAddressFieldsLevel(formContext);            
            
        },


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

        Stree1_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();
            var langId = Xrm.Utility.getGlobalContext().userSettings.languageId;
            var postalCode = regionMapping[glHelper.GetValue(formContext, "address1_stateorprovince")];
            var regionId = glHelper.GetLookupAttrId(formContext, "territoryid");
            //if autocomplete control updates Province then set Region accordingly (hardcoded mapping)
            //ifRegion is not empty => no override!
            if (regionId != null) return;

            setRegion(formContext, langId, postalCode);

        },
    }
    //********************public methods end***************

})(window, document);