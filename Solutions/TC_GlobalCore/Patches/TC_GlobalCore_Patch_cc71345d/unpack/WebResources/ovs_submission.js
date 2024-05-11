///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>

var submission = (function (window, document) {

    var _formContext;

    function statuscode_OnChange() {
        debugger;
        var statuscode = _formContext.getAttribute("statuscode").getValue();
        /*
         * Status = Active
         *  Status Reason: 
         *  Submitted	1
            Additional Info Required	918640001
            Approved	918640002
            Declined	918640003
            Cancelled	918640004
            /////////////////////////////////////////////////
            Status = InActive
         *  Status Reason:
            Inactive	2
            Approved	918640005
            Declined	918640006
            Cancelled	918640007

         */
        if (statuscode == 918640002 || statuscode == 918640003 || statuscode == 918640004
            || statuscode == 918640005 || statuscode == 918640006 || statuscode == 918640007) {
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