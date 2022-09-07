///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/RNOP_ValidationFunctions.js"/>

var CFunctions_main = (function (window, document) {

    //**************** Variables

    var globalFormContext;
    var globalContext;
    var formType;

    //**************** Private methods


    //**************** Public methods
    return {

        OnLoad: function (executionContext) {
            //get context
            globalContext = glHelper.getGlobalContext();
            var formContext = executionContext.getFormContext();
            globalFormContext = formContext;

            // 0 = Undefined, 1 = Create, 2 = Update, 3 = Read Only, 4 = Disabled, 6 = Bulk Edit
            formType = glHelper.GetFormType(formContext);

            if (formType == 1) {

                var rType = formContext.getAttribute("fdr_containertype");
                rType.removeOnChange(CFunctions_main.ContainerType_OnChange);
                rType.addOnChange(CFunctions_main.ContainerType_OnChange);
                rType.fireOnChange();
            }
            else if (formType == 2) {

                //set Reg type read only fields read only
                glHelper.SetDisabled(formContext, "fdr_containertype", formType == 2);
            }
        },

        ContainerType_OnChange(executionContext) {

            var rTypeId = glHelper.GetLookupAttrId(globalFormContext, "fdr_containertype");
            if (rTypeId != null) {


                rTypeId = rTypeId.replace('{', '').replace('}', '');
                var req = new XMLHttpRequest();
                req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/fdr_containertypes(" + rTypeId + ")?$select=fdr_designregistrationsupported", false);
                req.setRequestHeader("OData-MaxVersion", "4.0");
                req.setRequestHeader("OData-Version", "4.0");
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
                req.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        req.onreadystatechange = null;
                        if (this.status === 200) {
                            var result = JSON.parse(this.response);
                            var fdr_designregistrationsupported = result["fdr_designregistrationsupported"];
                            var fdr_designregistrationsupported_formatted = result["fdr_designregistrationsupported@OData.Community.Display.V1.FormattedValue"];
                            //set flag
                            glHelper.SetValue(globalFormContext, "fdr_supportsdesignregistration", fdr_designregistrationsupported);
                            //if !SupportsDesignRegistration => then lock, else => unlock
                            glHelper.SetDisabled(globalFormContext, "fdr_supportsdesignregistration", !fdr_designregistrationsupported);

                        } else {
                            Xrm.Navigation.openErrorDialog({ message: "Something went wrong with Registration Type query. Error: " + this.statusText });
                        }
                    }
                };
                req.send();
            }
        },
    }

})(window, document)