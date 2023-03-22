///<reference path="../Utilities/GlobalHelper.js"/>
///<reference path="../Utilities/FDR_SubmissionFunctions.js"/>
var FDR_Submission_Ribbon = (function (window, document) {
    var cepDialogOptions = { height: 300, width: 500 };

    const submissionFunctions = {

       

        createServiceRequest: async function (primaryControl) {
            if (primaryControl == null) {
                return;
            }

            const formContext = primaryControl;

            let formType = glHelper.GetFormType(formContext);
            if (formType == 1) {
                return;
            } //on create

            let submissionId = formContext.data.entity
                .getId()
                .replace("{", "")
                .replace("}", "");


        try {
            Xrm.Utility.showProgressIndicator("Validating Data");
            
            let parentCompanies = await FDR_SubmissionFunctions.getPreferedSuggestionsForParentCompany(submissionId);
            let sites = await FDR_SubmissionFunctions.getPreferedSuggestionsForSite(submissionId);
         
            let msg = "";
            let valid = true;

    

            if (parentCompanies.length === 0) {
                msg += "> Parent Company Selection Required" + "\n";
                valid = false;
            }

            if (sites.length === 0) {
                msg += "> Site Selection Required" + "\n";
                valid = false;

            }

            if (parentCompanies.length > 1) {

                msg += "> Only one parent company can be associated" + "\n";
                valid = false;

            }

            if (sites.length > 1) {
                msg += "> Only one site can be associated" + "\n";
                valid = false;

            }


            if (!valid) {
                Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: msg, title: "Validation Check" }, cepDialogOptions);
                Xrm.Utility.closeProgressIndicator();

                return; // exit early
            }

            
            let submission = await FDR_SubmissionFunctions.getSubmissionDetails(submissionId);
            let FormJSONObj = JSON.parse(submission["fdr_json"]);
            let serviceRequests = await FDR_SubmissionFunctions.findServiceRequestByMTOAId(submission["fdr_servicerequestid"]);

            if(serviceRequests.length > 1)
            {
              msg = "> Service Request Already Exist" + "\n";
              valid = false;
              Xrm.Utility.closeProgressIndicator();

              return; // exit early
            }

            
            if (!valid) {
                Xrm.Navigation.openAlertDialog({ confirmButtonLabel: "OK", text: msg, title: "Validation Check" }, cepDialogOptions);
                return; // exit early
            }
            //create service request
             Xrm.Utility.showProgressIndicator("Creating Service Request");


            let site = sites[0]["_fdr_match_value"];

            let serviceRequestId =
              await FDR_SubmissionFunctions.addServiceRequest(
                submission["_fdr_registrationtype_value"],
                site,
                submission["fdr_servicerequestid"],
                submission["fdr_servicerequesttype"],
                submission["createdon"]
              );

              if(serviceRequestId == null){
                //todo add msg to user.
                return 
              }

            let regulatoryRequirements = await FDR_SubmissionFunctions.asrfHelpers.getRegulatoryRequirementFromJSON(FormJSONObj)
            await FDR_SubmissionFunctions.associateRegulatoryRequirementToServiceRequest(serviceRequestId, regulatoryRequirements.map(x=>x["fdr_regulatoryrequirementid"]))

            let equipments = await FDR_SubmissionFunctions.asrfHelpers.getEquipmentFromJSON(FormJSONObj)
            await FDR_SubmissionFunctions.associateEquipmentToServiceRequest(serviceRequestId, equipments.map(x=>x["fdr_equipmentid"]))

            //only add register mark if mark not already in use by another company
            let registerMarkText = FDR_SubmissionFunctions.asrfHelpers.getRegisterMarkFromJSON(FormJSONObj)
              if(registerMarkText != null)
              {
                let foundItems = await FDR_SubmissionFunctions.getRegisterMarkByMarkText(registerMarkText);
                if(foundItems.length === 0)
                {
                  await FDR_SubmissionFunctions.addRegisterMarkText(registerMarkText, serviceRequestId) 
                }
              }

            await FDR_SubmissionFunctions.linkServiceRequestToSubmission(submissionId, serviceRequestId)
            
            let functions = await FDR_SubmissionFunctions.asrfHelpers.getFunctionsFromJSON(FormJSONObj)
            for (let i = 0; i < functions.length; i++) {
                const func = functions[i];

                if(func.entity["fdr_functionid"] === undefined){ break } // if we dont have a function that has been mapped to something in the system then skip.
                
                
                let containerFunction =
                  await FDR_SubmissionFunctions.getContainerFunctionByRegistrationTypeAndFunctionId(
                    submission["_fdr_registrationtype_value"],
                    func.entity["fdr_functionid"]
                  );



                  const serviceRequestFunctionId = await FDR_SubmissionFunctions.addServiceRequestFunction(
                    containerFunction["fdr_containerfunctionid"],
                    func.entity["fdr_name"], //todo fix for localization
                    serviceRequestId,
                    func.ec
                  );

                    
                  if(func.mobile != null)
                  {
                    FDR_SubmissionFunctions.addLimitationServiceRequestFunction(func.mobile["fdr_limitationid"],serviceRequestFunctionId)
                  }


                  const specIds = func.specs.map(x=> x["fdr_specificationid"])
                  await FDR_SubmissionFunctions.associateSpecToServiceRequestFunction(serviceRequestFunctionId, specIds)
            }

            let functionsWithDesigns = await FDR_SubmissionFunctions.asrfHelpers.getDesignsFromJSON(FormJSONObj)



            for (let i = 0; i < functionsWithDesigns.length; i++) {
              const func = functionsWithDesigns[i];

               if (func.designs.length === 0){break} //no design, then dont proceed
                    
                let containerFunction =
                  await FDR_SubmissionFunctions.getContainerFunctionByRegistrationTypeAndFunctionId(
                    submission["_fdr_registrationtype_value"],
                    func.entity["fdr_functionid"]
                  );


                        const serviceRequestFunctionId = await FDR_SubmissionFunctions.addServiceRequestFunction(
                    containerFunction["fdr_containerfunctionid"],
                    func.entity["fdr_name"], //todo fix for localization
                    serviceRequestId,
                    func.ec
                  );

                  let addedDesigns = [];
                  for (let y = 0; y < func.designs.length; y++) {
                    const design = func.designs[y];

                    //if no spec, then unable to add design
                    if(design.specs.length > 0)
                    {
                      let designMarkingRequirement =
                        await FDR_SubmissionFunctions.getDesignMarkingRequirmentByRegistrationAndSpecType(
                          submission["_fdr_registrationtype_value"],
                          design.specs[0]["fdr_specificationid"] // designs always only have one spec associated to it, safe to do index 0
                          );

                     
                      let addedDesignId = await FDR_SubmissionFunctions.addDesign(
                        designMarkingRequirement["fdr_designmarkingrequirementid"],
                        serviceRequestFunctionId,
                        design.ec,
                        design.designRequirements
                      );
                      addedDesigns.push(addedDesignId);
                    }
              
                    
                  }

                  await FDR_SubmissionFunctions.associateDesignToServiceRequestFunction(serviceRequestFunctionId, addedDesigns)



              
            }




        } catch (error) {
           throw error;

        }finally{
           Xrm.Utility.closeProgressIndicator();
           formContext.data.refresh();
        }
       

        },

    };



    return {
      createServiceRequest: submissionFunctions.createServiceRequest,
    };
})(window, document);
