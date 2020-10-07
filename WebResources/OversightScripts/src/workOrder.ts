/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path='../typings/XRM/xrm.d.ts' />
/// <reference path='../typings/XRM/dg.xrmquery.web.d.ts' />
/// <reference path='../typings/XRM/Form/msdyn_workorder/Main/OversightActivity.d.ts' />
namespace ROM {
  // EVENTS
  export function onLoad(eContext: Xrm.ExecutionContext<any, any>): void {
    console.log('Onload has been called');
    console.log('Xrm execution context: ', eContext);

    setDefaultFiscalYear(eContext);
  }

  export function fiscalYearOnchange(eContext: Xrm.ExecutionContext<any, any>): void {
    console.log('fiscalYearOnChange has been called');
    console.log('Xrm execution context: ', eContext);
    //if new fiscal year is selected, then previous selection of quarter no longer corresponds
    removeSelectedFiscalQuarter(eContext);
  }

  // FUNCTIONS

  function setDefaultFiscalYear(eContext: Xrm.ExecutionContext<any, any>): void {
    const form = <Form.msdyn_workorder.Main.OversightActivity>eContext.getFormContext();

    XrmQuery.retrieveMultiple((x) => x.tc_tcfiscalyears)
      .select((x) => [x.tc_name])
      .filter((x) => Filter.equals(x.tc_iscurrentfiscalyear, true))
      .execute((fiscalYears) => {
        //should only return one fiscal year record as the current
        if (fiscalYears.length === 1) {
          const targetedFiscalYear = fiscalYears[0];
          const lookup = new Array();
          lookup[0] = new Object();
          lookup[0].id = targetedFiscalYear.tc_tcfiscalyearid;
          lookup[0].name = targetedFiscalYear.tc_name;
          lookup[0].entityType = 'tc_tcfiscalyear';

          form.getAttribute('ovs_fiscalyear').setValue(lookup);
        } else {
          // do not set a default if multiple records are found, error.
        }
      });
  }

  function removeSelectedFiscalQuarter(eContext: Xrm.ExecutionContext<any, any>): void {
    const form = <Form.msdyn_workorder.Main.OversightActivity>eContext.getFormContext();
    form.getAttribute('ovs_fiscalquarter').setValue(null);
  }
}
