///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>

var AccountDGAIS_site = (function (window, document) {
    //variables
    var formType;
    //optionset value: form name
    var formMapping_EN = {
        "948010001": "DGAIS Site Profile",
        "948010000": "DGAIS Organization",
    };

    var formMapping_FR = {
        "948010001": "FR:DGAIS Site Profile",
        "948010000": "FR:DGAIS Organization",
    };
    var formContextGlobalRef;

    var PostalAdressArray = new Array("address1_line1", "address1_line2", "address1_line3", "address1_city", "address1_stateorprovince", "address1_postalcode", "address1_country");
    var LongLatArray = new Array("address1_longitude", "address1_latitude");



    //********************private methods*******************


    function filter_addressType(formContext) {

        var options = new Array("0", "2");
        glHelper.filterOptionSet(formContext, "ovs_address_type", options, true);

    }

    function filter_customertypecode(formContext) {

        var options = new Array("948010000", "948010001");
        glHelper.filterOptionSet(formContext, "customertypecode", options, true);

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
            rTypeCode.removeOnChange(AccountDGAIS_site.relationShip_OnChange); // avoid binding multiple event handlers
            rTypeCode.addOnChange(AccountDGAIS_site.relationShip_OnChange);
            //Address type
            var adrType = formContext.getAttribute("ovs_address_type");
            adrType.removeOnChange(AccountDGAIS_site.AddressType_OnChange);
            adrType.addOnChange(AccountDGAIS_site.AddressType_OnChange);
            //set org mandatory
            glHelper.SetRequiredLevel(formContext, "parentaccountid", true);
            adrType.fireOnChange();

            //create
            if (formType == 1) {


            }
            //update etc
            if (formType > 1) {
                rTypeCode.fireOnChange();
            }
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

