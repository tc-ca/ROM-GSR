﻿///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>


var OrgQuickCreate = (function (window, document) {


    //********************private methods*******************

    function filter_customertypecode(formContext) {

        var options = new Array("948010001");
        glHelper.filterOptionSet(formContext, "customertypecode", options, true);

        glHelper.SetOptionsetByValue(formContext, "customertypecode",948010001);

        glHelper.SetRequiredLevel(formContext, "customertypecode", false);


        glHelper.SetControlVisibility(formContext, "customertypecode", false);

        //Company specific fields are not required and hidden
        glHelper.SetRequiredLevel(formContext, "ovs_legalname", false);
        glHelper.SetControlVisibility(formContext, "ovs_legalname", false);

        //Site name is programatically set by plugin
        //Company specific fields are not required and hidden
        glHelper.SetRequiredLevel(formContext, "name", false);
        glHelper.SetControlVisibility(formContext, "name", false);
    }


    //********************public methods***************
    return {


        OnLoad: function (executionContext) {

            var formContext = executionContext.getFormContext();

            glHelper.SetValue(formContext, "customertypecode", 948010001);

            //filter Relationship Type
            filter_customertypecode(formContext);

            // Update related to the CID_PBI# 314125
            //There is no review for CID Sites that are being added to Core Data. The purpose of CID Regulations was passed to add sites to CORE Data for oversight.
            ///a new field has been added: cid_cidflag. 
            // From the ROM form:  Default value when Site created = 'Unknown'.
            //This value will be updated to 'In Scope' if a HOTI or HOTI GOA operation is created.

            if (formContext.getAttribute("cid_cidflag"))
                glHelper.SetValue(formContext, "cid_cidflag", 100000000);

            //var rTypeCode = formContext.getAttribute("customertypecode");
            //rTypeCode.removeOnChange(OrgQuickCreate.relationShip_OnChange); // avoid binding multiple event handlers
            //rTypeCode.addOnChange(OrgQuickCreate.relationShip_OnChange);

        },
        relationShip_OnChange: function (executionContext)
        {

            var formContext = executionContext.getFormContext();

            //Load up resources for English/French labels
            var langId = Xrm.Utility.getGlobalContext().userSettings.languageId;
            var rType = glHelper.GetValue(formContext, "customertypecode");

            if (rType == 948010000)//Parent Company
            {
                glHelper.SetRequiredLevel(formContext, "ovs_legalname", true);


                glHelper.SetControlVisibility(formContext, "ovs_legalname", true);

                if (formContext.getAttribute("cid_cidflag"))
                    glHelper.SetValue(formContext, "cid_cidflag", null);


            }
            else if (rType == 948010001)//Site
            {
                //Company specific fields are not required and hidden
                glHelper.SetRequiredLevel(formContext, "ovs_legalname", false);

                glHelper.SetControlVisibility(formContext, "ovs_legalname", false);

                if (formContext.getAttribute("cid_cidflag"))
                    glHelper.SetValue(formContext, "cid_cidflag", 100000000);
                
            }


        }
    }
})(window, document);