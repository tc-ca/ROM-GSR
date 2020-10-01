import { format } from "path";
//import { XrmQuery} from "src/lib/dg.xrmquery.web";

namespace TSIS.PPP {
  var Form: Form.msdyn_workorder.Main.OversightActivity;

  export function SetDefaultFiscalYear(eContext: Xrm.ExecutionContext<any, any>){
    
    var currentFiscalQuarter = 0;
    // XrmQuery.retrieveMultiple(x => x.accounts) // Tells XrmQuery to retrieve accounts
    // .select(x => [ x.accountnumber ]) // Select which attributes to retrieve, in this case just accountnumber
    // .filter(x => Filter.equals(x.name, "Contoso")) // Only get accounts which have a name equal to "Contoso"
    // .execute(accounts => { 
    //     // Do something with the retrieved accounts
    //     console.dir(accounts);
    // });
    // currentFiscalQuarter
    //Form.getAttribute("ovs_fiscalquarter").setValue(ne);
  }

  
  
}
