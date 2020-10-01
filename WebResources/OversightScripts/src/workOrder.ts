/// <reference path='../typings/XRM/xrm.d.ts' />
/// <reference path='../typings/XRM/dg.xrmquery.web.d.ts' />
/// <reference path='../typings/XRM/Form/msdyn_workorder/Main/OversightActivity.d.ts' />
namespace ROM {
  var Form: Form.msdyn_workorder.Main.OversightActivity;


 export function onLoad(executionContext: Xrm.ExecutionContext<any, any>): void {
  
  console.log('Onload has been called')
  console.log('Xrm execution context: ',executionContext);
  
  
  //  const formContext = <Form.msdyn_workorder.Main.OversightActivity;
  //  const attrFirstName = formContext.getAttribute('firstname');
  //  Xrm.Navigation.openAlertDialog({ text: attrFirstName.getValue() });
 }

  // export function SetDefaultFiscalYear(eContext: Xrm.ExecutionContext<any, any>){
    
  //   var currentFiscalQuarter = 1;
  //   XrmQuery.retrieveMultiple(x => x.accounts) // Tells XrmQuery to retrieve accounts
  //   .select(x => [ x.accountnumber ]) // Select which attributes to retrieve, in this case just accountnumber
  //   .filter(x => Filter.equals(x.name, "Contoso")) // Only get accounts which have a name equal to "Contoso"
  //   .execute(accounts => { 
  //       // Do something with the retrieved accounts
  //       console.dir(accounts);
  //   });
  //   currentFiscalQuarter
  //   Form.getAttribute("ovs_fiscalquarter").setValue(ne);
  // }

  
  
}
