/* eslint-disable @typescript-eslint/triple-slash-reference */
namespace ROM.Account {
    // EVENTS
    export function onLoad(eContext: Xrm.ExecutionContext<any, any>): void {
      console.log('Onload has been called');
      console.log('Xrm execution context: ', eContext);
      hideShowOperations(eContext);
    }

    export function hideShowOperations(eContext: Xrm.ExecutionContext<any, any>): void {
        console.log('hideShowOperations has been called');
        console.log('Xrm execution context: ', eContext);
        const form = <Form.account.Main.Organizations>eContext.getFormContext();
        var accountType = form.getAttribute('customertypecode').getValue();
        if (accountType == account_customertypecode.RegulatedEntity){
        form.getControl('regulated_entities_subgrid').setVisible(false);
        form.getControl('sites_subgrid').setVisible(true);
        };
        if (accountType == account_customertypecode.Site){
            form.getControl('regulated_entities_subgrid').setVisible(true);
            form.getControl('sites_subgrid').setVisible(false);
        };
      }
}