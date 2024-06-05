///<reference path="../../Utilities/GlobalHelper.js"/>


var CRS_OrganizationManufacturer_Main = (function (window, document) {

    //variables
    var isOffLine;

    //Constants
    const FIELD_Manufacturer = "ovs_manufacturer_id";
    const FIELD_Organization = "ovs_organization_id";
    const FIELD_Name = "ovs_name";


    //********************public methods***************
    return {

        OnLoad: function (executionContext) {

            var globalContext = Xrm.Utility.getGlobalContext();
            var formContext = executionContext.getFormContext();
            // 0 = Undefined, 1 = Create, 2 = Update, 3 = Read Only, 4 = Disabled, 6 = Bulk Edit
            formType = glHelper.GetFormType(formContext);

            debugger;

            isOffLine = glHelper.isOffline(executionContext);
            clientType = glHelper.getClientType(executionContext);

            if (isOffLine && clientType > 0) {

                //mobile or outlook, offline first
                currentWebApi = Xrm.WebApi.offline;
                clientUrl = "https://localhost:2525";
            }
            else {

                //web, online
                currentWebApi = Xrm.WebApi.online;
                clientUrl = globalContext.getClientUrl();
            }
            // Reset a pre-populated Manufacturer lookup value (The Organization and Manufacturer are associated with the account and both will be pre-populated upon creation.)
            if (formType == 1) 
                glHelper.ResetField(formContext, FIELD_Manufacturer);

            //manufacturer
            var _manufacturer = formContext.getAttribute(FIELD_Manufacturer);
            _manufacturer.removeOnChange(CRS_OrganizationManufacturer_Main.Manufacturer_OnChange);
            _manufacturer.addOnChange(CRS_OrganizationManufacturer_Main.Manufacturer_OnChange);
        },

         Manufacturer_OnChange: function (executionContext) {

             var formContext = executionContext.getFormContext();
            var mnId = glHelper.GetLookupName(formContext, FIELD_Manufacturer);
             if (mnId)
             glHelper.SetValue(formContext, FIELD_Name, mnId);
           
         }

    }

})(window, document);
