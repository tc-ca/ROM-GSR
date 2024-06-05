///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>

var AccountCRS_org = (function (window, document) {
    //variables
    var formType;
    //optionset value: form name
    var formMapping_EN = {
        "948010001": "CRS Site Profile",
        "948010000": "CRS Organization",
    };

    var formMapping_FR = {
        "948010001": "Profil du site SIC",
        "948010000": "Organisation SIC",
    };
    var formContextGlobalRef;

    var PostalAdressArray = new Array("address1_line1", "address1_line2", "address1_line3", "address1_city", "address1_stateorprovince", "address1_postalcode", "address1_country");
    var LongLatArray = new Array("address1_longitude", "address1_latitude");


    //********************private methods*******************


    function bnRelatedFieldsManager(formContext, showReason) {

        if (showReason) glHelper.SetValue(formContext, "cid_crabusinessnumber", null);

        glHelper.SetControlVisibility(formContext, "cid_reasonfornobnnumber", showReason);
        if (!showReason) glHelper.SetValue(formContext, "cid_reasonfornobnnumber", null);

        glHelper.SetControlVisibility(formContext, "cid_reasonfornobnnumber_other", showReason);
        if (!showReason) glHelper.SetValue(formContext, "cid_reasonfornobnnumber_other", null);
    }

    function setRemoveNotification(formContext, doRemove, message) {

        if (doRemove) {

            glHelper.ClearFieldNotification(formContext, "cid_crabusinessnumber");
            glHelper.ClearFieldNotification(formContext, "cid_reasonfornobnnumber");
            glHelper.ClearFieldNotification(formContext, "cid_reasonfornobnnumber_other");
        }
        else {

            glHelper.SetFieldNotification(formContext, "cid_crabusinessnumber", message);
            glHelper.SetFieldNotification(formContext, "cid_reasonfornobnnumber", message);
            glHelper.SetFieldNotification(formContext, "cid_reasonfornobnnumber_other", message);
        }
    }

    function filter_customertypecode(formContext) {

        var options = new Array("948010000", "948010001");
        glHelper.filterOptionSet(formContext, "customertypecode", options, true);

    }

    function populateDataBasedOnBN(formContext, BN, isUpdate) {


        var ovs_GetAccountByBN = {
            BN: BN,

            getMetadata: function () {
                return {
                    boundParameter: null,
                    parameterTypes: {
                        "BN": {
                            "typeName": "Edm.String",
                            "structuralProperty": 1
                        }
                    },
                    operationType: 0,
                    operationName: "ovs_GetAccountByBN"
                };
            }
        };

        Xrm.Utility.showProgressIndicator("Getting information from partners ...");

        Xrm.WebApi.online.execute(ovs_GetAccountByBN).then(
            function success(result) {
                if (result.ok) {
                    //var results = JSON.parse(result.responseText);

                    result.text().then(function (i) {
                        var data = JSON.parse(i);
                        if (data != null || typeof data !== 'undefined') {

                            //success
                            if (data.responseSuccess != null && typeof data.responseSuccess !== 'undefined' && data.responseSuccess != "") {
                                var data = JSON.parse(data.responseSuccess);
                                var OperatingName = "";
                                var LegalName = data.LegalName;
                                var OperatingName = data.OperatingName;
                                var address = data.PhysicalLocationAddress;

                                //for existing record: populate only empty fields, override is not allowed
                                //for all: check if it's a certain BN number
                                if (isUpdate) {
                                    if (glHelper.GetValue(formContext, "ovs_legalname") == "") glHelper.SetValue(formContext, "ovs_legalname", data.LegalName);
                                    if (glHelper.GetValue(formContext, "name") == "") glHelper.SetValue(formContext, "name", data.OperatingName);
                                    if (glHelper.GetValue(formContext, "address1_line1") == "") glHelper.SetValue(formContext, "address1_line1", address.AddressLine1Text);
                                    if (glHelper.GetValue(formContext, "address1_line2") == "") glHelper.SetValue(formContext, "address1_line2", address.AddressLine2Text);
                                    if (glHelper.GetValue(formContext, "address1_line3") == "") glHelper.SetValue(formContext, "address1_line3", address.CareOfLine);
                                    if (glHelper.GetValue(formContext, "address1_city") == "") glHelper.SetValue(formContext, "address1_city", address.CityName);
                                    if (glHelper.GetValue(formContext, "address1_stateorprovince") == "") glHelper.SetValue(formContext, "address1_stateorprovince", address.ProvinceStateCode);
                                    if (glHelper.GetValue(formContext, "address1_postalcode") == "") glHelper.SetValue(formContext, "address1_postalcode", address.PostalZipCode);
                                    if (glHelper.GetValue(formContext, "address1_country") == "") glHelper.SetValue(formContext, "address1_country", address.CountryCode);
                                    ////? French ?
                                    //if (glHelper.GetValue(formContext, "ovs_legalnamefr") == "") glHelper.SetValue(formContext, "ovs_legalnamefr", "");
                                    //if (glHelper.GetValue(formContext, "ovs_namefr") == "") glHelper.SetValue(formContext, "ovs_namefr", "");

                                }

                                //for new record: populate all fields, override is allowed
                                else {

                                    glHelper.SetValue(formContext, "ovs_legalname", data.LegalName);
                                    glHelper.SetValue(formContext, "name", data.OperatingName);
                                    glHelper.SetValue(formContext, "address1_line1", address.AddressLine1Text);
                                    glHelper.SetValue(formContext, "address1_line2", address.AddressLine2Text);
                                    glHelper.SetValue(formContext, "address1_line3", address.CareOfLine);
                                    glHelper.SetValue(formContext, "address1_city", address.CityName);
                                    glHelper.SetValue(formContext, "address1_stateorprovince", address.ProvinceStateCode);
                                    glHelper.SetValue(formContext, "address1_postalcode", address.PostalZipCode);
                                    glHelper.SetValue(formContext, "address1_country", address.CountryCode);
                                    ////? French ?
                                    //glHelper.SetValue(formContext, "ovs_legalnamefr", "");
                                    //glHelper.SetValue(formContext, "ovs_namefr", "");

                                    setFirstTabFillingSequence(formContext, !isUpdate);
                                }

                                setRemoveNotification(formContext, true);
                                bnRelatedFieldsManager(formContext, false);

                                Xrm.Utility.closeProgressIndicator();
                            }
                            //not found
                            else if (data.responseError != null && typeof data.responseError !== 'undefined' && data.responseError != "") {

                                var invalidResponse = JSON.parse(data.responseError);

                                Xrm.Utility.closeProgressIndicator();
                                Xrm.Navigation.openErrorDialog({ message: "Invalid response : " + invalidResponse.EnglishMessageText });
                                bnRelatedFieldsManager(formContext, true);
                                setRemoveNotification(formContext, true);
                                glHelper.SetFieldNotification(formContext, "cid_crabusinessnumber", invalidResponse.EnglishMessageText);

                                //localize: invalidResponse.FrenchMessageText
                            }
                            //server error
                            else if (data.executionError != null && typeof data.executionError !== 'undefined' && data.executionError != "") {

                                Xrm.Utility.closeProgressIndicator();
                                Xrm.Navigation.openErrorDialog({ message: "Information could not be fetched: " + data.executionError });
                                bnRelatedFieldsManager(formContext, true);
                                setRemoveNotification(formContext, true);
                                glHelper.SetFieldNotification(formContext, "cid_crabusinessnumber", data.executionError);

                            }
                        }
                    }, function (error) {
                        Xrm.Utility.closeProgressIndicator();
                        console.log("getAccountByBN error: " + error.message);
                        Xrm.Navigation.openErrorDialog({ message: "Information cannot be read: " + error.message });

                        bnRelatedFieldsManager(formContext, true);
                        setRemoveNotification(formContext, true);
                        setRemoveNotification(formContext, false, error.message);

                    });


                }
            },
            function (error) {
                Xrm.Utility.closeProgressIndicator();
                console.log("getViolationHistory error: " + error.message);
                Xrm.Navigation.openErrorDialog({ message: "Request failed: " + error.message });
                bnRelatedFieldsManager(formContext, true);
                setRemoveNotification(formContext, true);
                setRemoveNotification(formContext, false, error.message);

            }
        );

    }

    function setFirstTabFillingSequence(formContext, othersVisibility) {

        //glHelper.SetControlVisibility(formContext, "cid_crabusinessnumber", bnIsReadOnly);

        var tab = formContext.ui.tabs.get("SUMMARY_TAB");
        var sections = tab.sections;


        sections.forEach(function (section, sectionIndex) {

            var sectionName = section.getName();
            if (sectionName != "SUMMARY_TAB_section_bn") section.setVisible(othersVisibility);

        });
    }

    function filter_addressType(formContext) {

        var options = new Array("0", "2");
        glHelper.filterOptionSet(formContext, "ovs_address_type", options, true);

    }

    function clearHideEase(formContext, arrayOfFields, doClearHideEase) {

        for (var i = 0; i < arrayOfFields.length; i++) {
            if (doClearHideEase) glHelper.SetValue(formContext, arrayOfFields[i], null);
            glHelper.SetControlVisibility(formContext, arrayOfFields[i], !doClearHideEase);
            glHelper.SetRequiredLevel(formContext, arrayOfFields[i], !doClearHideEase);
        }
    }

  

    //********************private methods end***************

    //********************public methods***************
    return {

        OnLoad: function (executionContext) {
            
            const formContext = executionContext.getFormContext();
            formContextGlobalRef = formContext;
            debugger;

           

            //filter Relationship Type
            filter_customertypecode(formContext);
            //filter Address Type
            filter_addressType(formContext);

            // 0 = Undefined, 1 = Create, 2 = Update, 3 = Read Only, 4 = Disabled, 6 = Bulk Edit
            formType = glHelper.GetFormType(formContext);



            // Retrieve customertypecode 
            var _customerType;
            var rTypeCode = formContext.getAttribute("customertypecode");
            if (rTypeCode) _customerType = formContext.getAttribute("customertypecode").getValue();
            rTypeCode.removeOnChange(AccountCRS_org.relationShip_OnChange); // avoid binding multiple event handlers
            rTypeCode.addOnChange(AccountCRS_org.relationShip_OnChange);
            rTypeCode.fireOnChange();
           


            //Address type
            var adrType = formContext.getAttribute("ovs_address_type");
            adrType.removeOnChange(AccountCRS_org.AddressType_OnChange);
            adrType.addOnChange(AccountCRS_org.AddressType_OnChange);



            //populate bn
            var CRA_BN = formContext.getAttribute("cid_crabusinessnumber");
            CRA_BN.removeOnChange(AccountCRS_org.CRABusinessNumber_OnChange); 
            CRA_BN.addOnChange(AccountCRS_org.CRABusinessNumber_OnChange);

            var reason = formContext.getAttribute("cid_reasonfornobnnumber");
            reason.removeOnChange(AccountCRS_org.CRABusinessNumber_OnChange);
            reason.addOnChange(AccountCRS_org.CRABusinessNumber_OnChange);

            var reasonText = formContext.getAttribute("cid_reasonfornobnnumber_other");
            reasonText.removeOnChange(AccountCRS_org.CRABusinessNumber_OnChange);
            reasonText.addOnChange(AccountCRS_org.CRABusinessNumber_OnChange);

            //fire address type on change
            adrType.fireOnChange();


            //create
            if (formType == 1) {
                   
                CRA_BN.fireOnChange();
                //rTypeCode.fireOnChange();
            }
            //update etc
            if (formType > 1) {
                //rTypeCode.fireOnChange();
            }
        },


        //relationShip_OnChange: function (executionContext) {

        //    var formContext = executionContext.getFormContext();

        //    //Load up resources for English/French labels
        //    var langId = Xrm.Utility.getGlobalContext().userSettings.languageId;
        //    var rType = glHelper.GetValue(formContext, "customertypecode");

        //    if (langId == 1033)
        //        glHelper.SwitchFormByName(formContext, formMapping_EN[rType.toString()]);
        //    else if (langId == 1036)
        //        glHelper.SwitchFormByName(formContext, formMapping_FR[rType.toString()]);

        //},


        relationShip_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();
            var parentaccountid = glHelper.GetLookupAttrId(formContext, "parentaccountid");
            var langId = Xrm.Utility.getGlobalContext().userSettings.languageId;

            if (formType > 1) {

                var rType = glHelper.GetValue(formContext, "customertypecode");

                if (langId == 1033)
                    glHelper.SwitchFormByName(formContext, formMapping_EN[rType.toString()]);
                else if (langId == 1036)
                    glHelper.SwitchFormByName(formContext, formMapping_FR[rType.toString()]);
            } else {

                if (formType == 1 && parentaccountid != null) {

                    glHelper.SetValue(formContext, "customertypecode", 948010001);

                    if (langId == 1033)
                        glHelper.SwitchFormByName(formContext, formMapping_EN["948010001"]);
                    else if (langId == 1036)
                        glHelper.SwitchFormByName(formContext, formMapping_FR["948010001"]);

                }

            }

        },

        //for new record: populate all fields, override is allowed
        //for existing record: populate only empty fields, override is not allowed
        //for all: check if it's a certain BN number
        CRABusinessNumber_OnChange: function getAccountByBN(executionContext) {

            var formContext = executionContext.getFormContext();
            //hide/unhide all sections, except bn number & Co
            setFirstTabFillingSequence(formContext, formType > 1);

            var bn = glHelper.GetValue(formContext, "cid_crabusinessnumber");
            var reason = glHelper.GetOptionsetValue(formContext, "cid_reasonfornobnnumber");
            var reasonText = glHelper.GetValue(formContext, "cid_reasonfornobnnumber_other");

            var doCheckBn = (bn != null && bn != undefined && bn.trim() != "") ? true : false;
            var noBnByReason = (!doCheckBn && reason != "" && reason != 3) ? true : false;
            var noReasonExplained = (!doCheckBn && reasonText != null && reasonText != undefined && reasonText.trim() != "" && reason == 3) ? true : false;

            //if bn exists
            if (doCheckBn) {

                //9 dijits check
                var pattern = /^\d{9}$/;
                if (bn.match(pattern)) populateDataBasedOnBN(formContext, bn, formType > 1);
                else {
                    Xrm.Navigation.openErrorDialog({ message: "Business number has incorrect format" });
                    setRemoveNotification(formContext, true);
                    glHelper.SetFieldNotification(formContext, "cid_crabusinessnumber", "Business number has incorrect format"); 
                    bnRelatedFieldsManager(formContext, false);
                    bnRelatedFieldsManager(formContext, true);
                }
            }
            //if no bn, but reason(except Other) is placed
            else if (noBnByReason) {
                setFirstTabFillingSequence(formContext, true);
                setRemoveNotification(formContext, true);
            }
            //if no bn, but Other reason and explanation are placed
            else if (noReasonExplained) {
                setFirstTabFillingSequence(formContext, true);
                setRemoveNotification(formContext, true);

            }
            //nothing is entered - set fields notifications
            else {
                var message = "Business Number or reason for its abcense must be populated";
                bnRelatedFieldsManager(formContext, true);
                setRemoveNotification(formContext, false, message);
            }
        },

        AddressType_OnChange: function (executionContext) {
            var formContext = executionContext.getFormContext();
            //var addrTypeValue = glHelper.GetOptionsetValue(formContext, "ovs_address_type");

            switch (formContext.getAttribute("ovs_address_type").getValue()) {

                //Postal Address
                case 0: {
                    //clean and hide long and lat, enabel Postal
                    clearHideEase(formContext, LongLatArray, true);
                    clearHideEase(formContext, PostalAdressArray, false);
                    //street2 and 3 are never required
                    glHelper.SetRequiredLevel(formContext, "address1_line2", false);
                    glHelper.SetRequiredLevel(formContext, "address1_line3", false);

                } break;
                //LongLat
                case 2: {
                    //clean and hide Postal Adress fields, enable LongLat
                    clearHideEase(formContext, LongLatArray, false);
                    clearHideEase(formContext, PostalAdressArray, true);

                } break;
                default: {
                    //clean and hide all
                    clearHideEase(formContext, LongLatArray, true);
                    clearHideEase(formContext, PostalAdressArray, true);
                } break;

            }

        }
    }
    //********************public methods end***************

})(window, document);

