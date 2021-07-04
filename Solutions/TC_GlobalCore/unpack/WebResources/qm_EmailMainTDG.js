///<reference path="../../Utilities/GlobalHelper.js"/>

var EmailTDG = (function (window, document) {


    return {

        OnLoad: function (executionContext) {

            var formContext = executionContext.getFormContext();

            //populate To if certain conditions are fullfilled
            //1. Parent window contains required info 
            if (parent.window.top.QuickCreateHelper != null && parent.window.top.QuickCreateHelper != undefined
                && parent.window.top.QuickCreateHelper.contact != null && parent.window.top.QuickCreateHelper.contact[0] != undefined) {

                //2.Set party list
                var contact = parent.window.top.QuickCreateHelper.contact[0];                
                formContext.getAttribute("to").setValue([contact]);
            }
        },
    }

})(window, document)