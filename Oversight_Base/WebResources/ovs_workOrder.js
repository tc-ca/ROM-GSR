"use strict";
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path='../typings/XRM/xrm.d.ts' />
/// <reference path='../typings/XRM/dg.xrmquery.web.d.ts' />
/// <reference path='../typings/XRM/Form/msdyn_workorder/Main/OversightActivity.d.ts' />
var ROM;
(function (ROM) {
    // EVENTS
    function onLoad(eContext) {
        console.log('Onload has been called');
        console.log('Xrm execution context: ', eContext);
        var form = eContext.getFormContext();
        switch (form.ui.getFormType()) {
            //Create
            case 1:
                setDefaultFiscalYear(form);
            default:
                break;
        }
    }
    ROM.onLoad = onLoad;
    function fiscalYearOnchange(eContext) {
        console.log('fiscalYearOnChange has been called');
        console.log('Xrm execution context: ', eContext);
        //if new fiscal year is selected, then previous selection of quarter no longer corresponds
        removeSelectedFiscalQuarter(eContext);
    }
    ROM.fiscalYearOnchange = fiscalYearOnchange;
    // FUNCTIONS
    function setDefaultFiscalYear(form) {
        XrmQuery.retrieveMultiple(function (x) { return x.tc_tcfiscalyears; })
            .select(function (x) { return [x.tc_name]; })
            .filter(function (x) { return Filter.equals(x.tc_iscurrentfiscalyear, true); })
            .execute(function (fiscalYears) {
            //should only return one fiscal year record as the current
            if (fiscalYears.length === 1) {
                var targetedFiscalYear = fiscalYears[0];
                var lookup = new Array();
                lookup[0] = new Object();
                lookup[0].id = targetedFiscalYear.tc_tcfiscalyearid;
                lookup[0].name = targetedFiscalYear.tc_name;
                lookup[0].entityType = 'tc_tcfiscalyear';
                form.getAttribute('ovs_fiscalyear').setValue(lookup);
            }
            else {
                // do not set a default if multiple records are found, error.
            }
        });
    }
    function removeSelectedFiscalQuarter(eContext) {
        var form = eContext.getFormContext();
        form.getAttribute('ovs_fiscalquarter').setValue(null);
    }
})(ROM || (ROM = {}));
