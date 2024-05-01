///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>

var submission = (function (window, document) {

    var _formContext;

    function statuscode_OnChange() {
        debugger;
        var statuscode = _formContext.getAttribute("statuscode").getValue();
        if (statuscode == 918640002 || statuscode == 918640003 || statuscode == 918640004) {
            const date = new Date();
            _formContext.getAttribute("ovs_date_decision_dte").setValue(date);
        }

    }
  
    //********************public methods***************
    return {

        OnLoad: function (executionContext) {

            const formContext = executionContext.getFormContext();
            _formContext = formContext;

            debugger;
            formContext.getAttribute("statuscode").addOnChange(statuscode_OnChange);
        }

    }
    

})(window, document);