///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>


var OrgQuickCreate = (function (window, document) {


    //********************private methods*******************

    function filter_customertypecode(formContext) {

        var options = new Array("948010000", "948010001");
        glHelper.filterOptionSet(formContext, "customertypecode", options, true);

    }


    //********************public methods***************
    return {


        OnLoad: function (executionContext) {

            var formContext = executionContext.getFormContext();

            //filter Relationship Type
            filter_customertypecode(formContext);

        }
    }
})(window, document);