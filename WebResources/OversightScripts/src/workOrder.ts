/// <reference path='../typings/XRM/xrm.d.ts' />
/// <reference path='../typings/XRM/dg.xrmquery.web.d.ts' />
/// <reference path='../typings/XRM/Form/msdyn_workorder/Main/OversightActivity.d.ts' />



namespace ROM {

  // EVENTS
  export function onLoad(eContext: Xrm.ExecutionContext<any, any>): void {
      console.log('Onload has been called')
      console.log('Xrm execution context: ',eContext);

      setDefaultFiscalYear(eContext);
  
  }

    export function fiscalYearOnchange(eContext: Xrm.ExecutionContext<any, any>): void {
      {
          console.log('fiscalYearOnChange has been called');
          console.log('Xrm execution context: ', eContext);
        //if new fiscal year is selected, then previous selection of quarter no longer corresponds
        removeSelectedFiscalQuarter(eContext);
      }
    }

// FUNCTIONS

  function setDefaultFiscalYear(eContext: Xrm.ExecutionContext<any, any>): void {
    let Form = <Form.msdyn_workorder.Main.OversightActivity>eContext.getFormContext();

    XrmQuery.retrieveMultiple((x) => x.tc_tcfiscalyears) // Tells XrmQuery to retrieve accounts
      .select((x) => [x.tc_name]) // Select which attributes to retrieve, in this case just accountnumber
      .filter((x) => Filter.equals(x.tc_iscurrentfiscalyear, true)) // Only get accounts which have a name equal to "Contoso"
      .execute((fiscalYears) => {
        if (fiscalYears.length === 1) {
          var targetedFiscalYear = fiscalYears[0];
          var lookup = new Array();
          lookup[0] = new Object();
          lookup[0].id = targetedFiscalYear.tc_tcfiscalyearid;
          lookup[0].name = targetedFiscalYear.tc_name;
          lookup[0].entityType = 'tc_tcfiscalyear';

          Form.getAttribute('ovs_fiscalyear').setValue(lookup);
        }
      });
  }


  function removeSelectedFiscalQuarter(eContext: Xrm.ExecutionContext<any, any>): void {
    {
      let Form = <Form.msdyn_workorder.Main.OversightActivity>eContext.getFormContext();
      Form.getAttribute('ovs_fiscalquarter').setValue(null);
    }
  }


}
  
