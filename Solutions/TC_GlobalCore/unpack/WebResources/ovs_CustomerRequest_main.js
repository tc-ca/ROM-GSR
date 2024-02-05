///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>

var CR_main = (function (window, document) {

    //**********************global variables ******************
    var formType;
    //optionset value: form name
    var formMapping_EN = {
        "1": "Information",
        "2": "Information",
        "918640000": "Information",
        "918640001": "Information",
        "918640002": "Information",
        "918640003": "Information",
        "918640004": "Information",
        "918640005": "Information",
        "918640006": "Information",
        "918640007": "Information",
        "918640008": "Information",
        "918640009": "Parent"
    };

    var formMapping_FR = {
        "0": "",
        "918640009": ""
    };
    var formContextGlobalRef;


    //********************private methods*******************

    //********************private methods end***************

    //********************public methods***************
    return {


        OnLoad: function (executionContext) {

            var formContext = executionContext.getFormContext();
            formContextGlobalRef = formContext;
            formType = glHelper.GetFormType(formContext);

            var statusreason = formContext.getAttribute("statuscode");
            statusreason.removeOnChange(CR_main.status_OnChange); // avoid binding multiple event handlers
            statusreason.addOnChange(CR_main.status_OnChange);


            if (formType > 1) {

                statusreason.fireOnChange();
            }

            // not display in parrent
            if (statusreason.getValue() != 918640009) {
                var wrControl = formContext.getControl("WebResource_DataGrid");
                if (wrControl) {
                    wrControl.getContentWindow().then(
                        function (contentWindow) {
                            contentWindow.setClientApiContext(Xrm, formContext, formType == glHelper.FORMTYPE_CREATE);
                        }
                    )
                }
            }
        },

        status_OnChange: function (executionContext) {

            var formContext = executionContext.getFormContext();

            //Load up resources for English/French labels
            var langId = Xrm.Utility.getGlobalContext().userSettings.languageId;
            var status = glHelper.GetValue(formContext, "statuscode");

            if (langId == 1033)
                glHelper.SwitchFormByName(formContext, formMapping_EN[status.toString()]);
            else if (langId == 1036)
                glHelper.SwitchFormByName(formContext, formMapping_FR[status.toString()]);

        },

    }
    //********************public methods end***************

})(window, document);