/// <reference path='../typings/XRM/xrm.d.ts' />
/// <reference path='../typings/XRM/dg.xrmquery.web.d.ts' />
/// <reference path='../typings/XRM/Form/msdyn_workorder/Main/OversightActivity.d.ts' />
namespace ROM {


 export function onLoad(executionContext: Xrm.ExecutionContext<any, any>): void {
  
  console.log('Onload has been called')
  console.log('Xrm execution context: ',executionContext);
 }


  
}
