///<reference path="../Utilities/GlobalHelper.js"/>

var FDR_SubmissionFunctions = (function (window, document) {
  var currentWebApi = Xrm.WebApi.online;

  const CustomerTypeCode = {
     ParentCompany: 948010000,
     Site: 948010001,
  };

  const ServiceRequestCodes = {
     RequestSource: {
        Portal: 794600001,
        Internal: 794600000,
     },
     StatusCode: {
        Submitted: 794600010,
     },
  };

  const Roles = {
     FDRCompanyPrimaryContact: "cf121971-848b-ed11-81ad-0022483d0343",
     FDRCompanySecondaryContact: "fcfbfac2-848b-ed11-81ad-0022483d0343",
     FDRCompliance: "56786d45-848b-ed11-81ad-0022483d0343",
     FDRSitePrimaryContact: "51925999-848b-ed11-81ad-0022483d0343",
     FDRSiteSecondaryContact: "2b4e0ff2-848b-ed11-81ad-0022483d0343",
  };

  const MarkType = {
     Text: 794600000,
     Logo: 794600001,
  };

  const DesignType = {
     Parent: 794600000,
     Child: 794600001,
  };

  const submissionFunctions = {
     getConnections: async function (accountId) {
        let data = [];
        //todo check if should be active
        await currentWebApi
           .retrieveMultipleRecords(
              "connection",
              `?$select=_record2id_value,_record2roleid_value&$filter=_record1id_value eq ${accountId}`
           )
           .then(
              function success(results) {
                 if (results.entities.length > 0) {
                    data = results.entities;
                 }
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.getConnections, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );
        return data;
     },
     getPreferedSuggestionsForParentCompany: async function (submissionId) {
        let data = [];

        //todo check if should be active
        await currentWebApi
           .retrieveMultipleRecords(
              "fdr_accountsubmissionsuggestion",
              `?$select=_fdr_match_value,fdr_name&$filter=_fdr_submission_value eq ${submissionId} and  fdr_choosenprimarycompany eq true`
           )
           .then(
              function success(results) {
                 if (results.entities.length > 0) {
                    data = results.entities;
                 }
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.getPreferedSuggestionsForParentCompany, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );
        return data;
     },
     getPreferedSuggestionsForSite: async function (submissionId) {
        let data = [];

        //todo check if should be active
        await currentWebApi
           .retrieveMultipleRecords(
              "fdr_accountsubmissionsuggestion",
              `?$select=_fdr_match_value,fdr_name&$filter=_fdr_submission_value eq ${submissionId} and  fdr_choosensite eq true`
           )
           .then(
              function success(results) {
                 if (results.entities.length > 0) {
                    data = results.entities;
                 }
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.getPreferedSuggestionsForSite, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );
        return data;
     },
     findParentCompanyMatches: async function (operatingName) {
        let data = [];
        //todo check if should be active
        await currentWebApi
           .retrieveMultipleRecords(
              "account",
              `?$select=accountid&$filter=contains(name, '${operatingName}')  and  customertypecode eq ${CustomerTypeCode.ParentCompany}&$top=20`
           )
           .then(
              function success(results) {
                 if (results.entities.length > 0) {
                    data = results.entities;
                 }
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.findParentCompanyMatches, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );
        return data;
     },
     findParentCompanySites: async function (parentCompanyId) {
        let data = [];
        //todo check if should be active
        await currentWebApi
           .retrieveMultipleRecords(
              "account",
              `?$select=accountid&$filter=_parentaccountid_value eq ${parentCompanyId}`
           )
           .then(
              function success(results) {
                 if (results.entities.length > 0) {
                    data = results.entities;
                 }
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.findParentCompanySites, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );
        return data;
     },
     findServiceRequestByMTOAId: async function (serviceRequestId) {
        let data = [];
        //todo check if should be active
        await currentWebApi
           .retrieveMultipleRecords(
              "fdr_servicerequest",
              `?$select=fdr_name&$filter=fdr_mtoa_sr_id eq ${serviceRequestId}`
           )
           .then(
              function success(results) {
                 if (results.entities.length > 0) {
                    data = results.entities;
                 }
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.findServiceRequestByMTOAId, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );
        return data;
     },
     AddAccountToSuggestionList: async function (submissionId, accountId) {
        let data = null;

        var entity = {};
        entity["fdr_submission@odata.bind"] = `/fdr_submissions(${submissionId})`;
        entity["fdr_match_account@odata.bind"] = `/accounts(${accountId})`;

        await currentWebApi
           .createRecord("fdr_accountsubmissionsuggestion", entity)
           .then(
              function success(result) {
                 data = result.id;
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.AddAccountToSuggestionList, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );

        return data;
     },
     linkServiceRequestToSubmission: async function (
        submissionId,
        serviceRequstId
     ) {
        let data = null;

        var entity = {};
        entity[
           "fdr_servicerequest@odata.bind"
        ] = `/fdr_servicerequests(${serviceRequstId})`;

        await currentWebApi
           .updateRecord("fdr_submission", submissionId, entity)
           .then(
              function success(result) {
                 data = result.id;
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.linkServiceRequestToSubmission, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );

        return data;
     },
     RemoveSuggestion: async function (suggestionId) {
        let data = false;

        await currentWebApi
           .deleteRecord("fdr_accountsubmissionsuggestion", suggestionId)
           .then(
              function success(result) {
                 data = true;
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.RemoveSuggestion, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );

        return data;
     },
     getContactDetails: async function (contactId) {
        let data = null;

        await currentWebApi
           .retrieveRecord(
              "contact",
              contactId,
              "?$select=emailaddress1,fax,firstname,jobtitle,lastname,mobilephone,telephone1"
           )
           .then(
              function success(result) {
                 data = {
                    emailaddress1: result["emailaddress1"],
                    fax: result["fax"],
                    firstname: result["firstname"],
                    jobtitle: result["jobtitle"],
                    lastname: result["lastname"],
                    mobilephone: result["mobilephone"],
                    telephone1: result["telephone1"],
                 };
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.getContactDetails, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );

        return data;
     },
     getSubmissionDetails: async function (submissionId) {
        let data = null;

        await currentWebApi
           .retrieveRecord(
              "fdr_submission",
              submissionId,
              "?$select=createdon,fdr_json,fdr_name,fdr_serviceattributeid,fdr_servicerequestid,_fdr_registrationtype_value,fdr_servicerequesttype"
           )
           .then(
              function success(result) {
                 data = result;
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.getSubmissionDetails, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );

        return data;
     },
     getAllParentCompanyAndSiteSuggestions: async function (submissionId) {
        let data = [];

        await currentWebApi
           .retrieveMultipleRecords(
              "fdr_accountsubmissionsuggestion",
              `?$select=fdr_name&$expand=fdr_match_account($select=customertypecode)&$filter=_fdr_submission_value eq ${submissionId}`
           )
           .then(
              function success(result) {
                 if (result.entities.length > 0) {
                    data = result.entities;
                 }
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.getAllParentCompanyAndSiteSuggestions, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );

        return data;
     },
     getFunctionByASRFSchemaMappingName: async function (name) {
        let data = [];

        await currentWebApi
           .retrieveMultipleRecords(
              "fdr_function",
              `?$select=fdr_name&$filter=fdr_asrfjsonmappingname eq '${name}'`
           )
           .then(
              function success(result) {
                 if (result.entities.length > 0) {
                    data = result.entities[0];
                 }
                 else {
                    console.log("ASRF - Function value not found: ", name);
                 }
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.getFunctionByASRFSchemaMappingName, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );

        return data;
     },
     getContainerFunctionByRegistrationTypeAndFunctionId: async function (
        registrationTypeId,
        functionId
     ) {
        let data = null;

        //todo check if should be active
        await currentWebApi
           .retrieveMultipleRecords(
              "fdr_containerfunction",
              `?$select=fdr_name&$filter=_fdr_containertype_value eq ${registrationTypeId} and  _fdr_function_value eq ${functionId}`
           )
           .then(
              function success(results) {
                 if (results.entities.length > 0) {
                    data = results.entities[0];
                 }
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.getContainerFunctionByRegistrationTypeAndFunctionId, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );
        return data;
     },
     getSpecsByCode: async function (specCode) {
        let data = null;

        //todo check if should be active
        await currentWebApi
           .retrieveMultipleRecords(
              "fdr_specification",
              `?$select=fdr_name&$filter=fdr_englishname eq '${specCode}'`
           )
           .then(
              function success(results) {
                 if (results.entities.length > 0) {
                    data = results.entities[0];
                 }
                 else {
                    console.log("ASRF - Specification value not found: ", specCode);
                 }
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.getSpecsByCode, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );
        return data;
     },
     getSpecs: async function (specs) {
        let specifications = [];
        for (let i = 0; i < specs.length; i++) {
           let spec = await submissionFunctions.getSpecsByCode(specs[i]);
           if (spec != null) {
              specifications.push(spec);
           }
        }
        return specifications;
     },
     addServiceRequest: async function (
        registrationTypeId,
        siteId,
        mtoaRequestId,
        serviceRequestType,
        submissionDate
     ) {
        let data = null;

        var entity = {};
        entity[
           "fdr_ContainerType@odata.bind"
        ] = `/fdr_containertypes(${registrationTypeId})`;
        entity["fdr_Site@odata.bind"] = `/accounts(${siteId})`;
        entity.fdr_submissiondate = submissionDate; //new Date("02/01/2023 01:30:00").toISOString(); //date of submission
        entity.fdr_mtoa_sr_id = mtoaRequestId;
        entity.fdr_srtype = serviceRequestType;
        entity.statuscode = ServiceRequestCodes.StatusCode.Submitted;
        entity.fdr_requestsource = ServiceRequestCodes.RequestSource.Portal;

        await currentWebApi.createRecord("fdr_servicerequest", entity).then(
           function success(result) {
              data = result.id;
           },
           function (error) {
              Xrm.Navigation.openErrorDialog({
                 message: `Error With Method: submissionFunctions.addServiceRequest, error msg: ${error.message}`,
                 details: `${error.raw}`,
              });
           }
        );

        return data;
     },
     addServiceRequestFunction: async function (
        containerFunctionId,
        functionName,
        serviceRequestId,
        ec
     ) {
        let data = null;

        var entity = {};
        entity[
           "fdr_ContainerFunction@odata.bind"
        ] = `/fdr_containerfunctions(${containerFunctionId})`;
        entity.fdr_name = functionName;
        entity.fdr_certificatenumber = ec;
        entity[
           "fdr_ServiceRequest@odata.bind"
        ] = `/fdr_servicerequests(${serviceRequestId})`;

        await currentWebApi
           .createRecord("fdr_servicerequestfunction", entity)
           .then(
              function success(result) {
                 data = result.id;
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.addServiceRequestFunction, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );

        return data;
     },
     addSpecToServiceRequestFunction: async function (
        containerFunctionId,
        functionName,
        serviceRequestId,
        ec
     ) {
        let data = null;

        var entity = {};
        entity[
           "fdr_ContainerFunction@odata.bind"
        ] = `/fdr_containerfunctions(${containerFunctionId})`;
        entity.fdr_name = functionName;
        entity.fdr_certificatenumber = ec;
        entity[
           "fdr_ServiceRequest@odata.bind"
        ] = `/fdr_servicerequests(${serviceRequestId})`;

        await currentWebApi
           .createRecord("fdr_servicerequestfunction", entity)
           .then(
              function success(result) {
                 data = result.id;
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.addSpecToServiceRequestFunction, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );

        return data;
     },
     associateSpecToServiceRequestFunction: async function (
        serviceRequestFunctionId,
        specificationIds
     ) {
        let data = null;
        let relatedEntities = [];

        specificationIds.forEach((specId) => {
           relatedEntities.push({
              entityType: "fdr_specification",
              id: specId
           });
        });

        if (relatedEntities.length === 0) {
           return;
        }

        var associateRequest = {
           target: {
              entityType: "fdr_servicerequestfunction",
              id: serviceRequestFunctionId,
           },
           relatedEntities,
           relationship: "fdr_ServiceRequestFunction_Specification",
           getMetadata: function () {
              return {
                 boundParameter: null,
                 parameterTypes: {},
                 operationType: 2,
                 operationName: "Associate",
              };
           },
        };
        await Xrm.WebApi.online.execute(associateRequest).then(
           function success(result) {
              data = result.ok;
           },
           function (error) {
              Xrm.Navigation.openErrorDialog({
                 message: `Error With Method: submissionFunctions.associateSpecToServiceRequestFunction, error msg: ${error.message}`,
                 details: `${error.raw}`,
              });
           }
        );

        return data;
     },
     associateRegulatoryRequirementToServiceRequest: async function (
        serviceRequestId,
        regulatoryRequirementIds
     ) {
        let data = null;
        let relatedEntities = [];

        regulatoryRequirementIds
           .filter((x) => x != undefined)
           .forEach((regreqId) => {
              relatedEntities.push({
                 entityType: "fdr_regulatoryrequirement",
                 id: regreqId,
              });
           });

        if (relatedEntities.length === 0) {
           return;
        }

        var associateRequest = {
           target: {
              entityType: "fdr_servicerequest",
              id: serviceRequestId
           },
           relatedEntities,
           relationship: "fdr_regulatoryrequirement_servicerequest",
           getMetadata: function () {
              return {
                 boundParameter: null,
                 parameterTypes: {},
                 operationType: 2,
                 operationName: "Associate",
              };
           },
        };

        await Xrm.WebApi.online.execute(associateRequest).then(
           function success(result) {
              data = result.ok;
           },
           function (error) {
              Xrm.Navigation.openErrorDialog({
                 message: `Error With Method: submissionFunctions.associateRegulatoryRequirementToServiceRequest, error msg: ${error.message}`,
                 details: `${error.raw}`,
              });
           }
        );

        return data;
     },
     associateEquipmentToServiceRequest: async function (
        serviceRequestId,
        equipmentIds
     ) {
        let data = null;
        let relatedEntities = [];

        equipmentIds
           .filter((x) => x != undefined)
           .forEach((regreqId) => {
              relatedEntities.push({
                 entityType: "fdr_equipment",
                 id: regreqId
              });
           });

        if (relatedEntities.length === 0) {
           return;
        }

        var associateRequest = {
           target: {
              entityType: "fdr_servicerequest",
              id: serviceRequestId
           },
           relatedEntities,
           relationship: "fdr_Equipment_ServiceRequest",
           getMetadata: function () {
              return {
                 boundParameter: null,
                 parameterTypes: {},
                 operationType: 2,
                 operationName: "Associate",
              };
           },
        };

        await Xrm.WebApi.online.execute(associateRequest).then(
           function success(result) {
              data = result.ok;
           },
           function (error) {
              Xrm.Navigation.openErrorDialog({
                 message: `Error With Method: submissionFunctions.associateEquipmentToServiceRequest, error msg: ${error.message}`,
                 details: `${error.raw}`,
              });
           }
        );

        return data;
     },
     addRegisterMarkText: async function (markText, serviceRequestId) {
        let data = null;

        var entity = {};
        entity.fdr_marktext = markText;
        entity.fdr_marktype = MarkType.Text;
        entity.fdr_name = "Registered Mark Text";
        entity[
           "fdr_ServiceRequest@odata.bind"
        ] = `/fdr_servicerequests(${serviceRequestId})`;

        await currentWebApi.createRecord("fdr_registeredmark", entity).then(
           function success(result) {
              data = result.id;
           },
           function (error) {
              Xrm.Navigation.openErrorDialog({
                 message: `Error With Method: submissionFunctions.addRegisterMarkText, error msg: ${error.message}`,
                 details: `${error.raw}`,
              });
           }
        );

        return data;
     },
     getRegulatoryRequirementByName: async function (name) {
        let data = [];

        //todo check if should be active
        await currentWebApi
           .retrieveMultipleRecords(
              "fdr_regulatoryrequirement",
              `?$select=fdr_name&$filter=fdr_englishname eq '${name}'`
           )
           .then(
              function success(results) {
                 if (results.entities.length > 0) {
                    data = results.entities[0];
                 }
                 else {
                    console.log(
                       "ASRF - Regulatory Requirement value not found: ",
                       name
                    );
                 }
              },
              function (error) {
                 console.log("ASRF - Error: ", error);
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.getRegulatoryRequirementByName, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );
        return data;
     },
     getEquipmentByName: async function (name) {
        let data = [];

        //todo check if should be active
        await currentWebApi
           .retrieveMultipleRecords(
              "fdr_equipment",
              `?$select=fdr_name&$filter=fdr_name eq '${name}'`
           )
           .then(
              function success(results) {
                 if (results.entities.length > 0) {
                    data = results.entities[0];
                 }
                 else {
                    console.log("ASRF - Equipment value not found: ", name);
                 }
              },
              function (error) {
                 console.log("ASRF - Error: ", error);
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.getEquipmentByName, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );
        return data;
     },
     getRegulatoryRequirements: async function (regreqs) {
        let regulatoryRequirements = [];
        for (let i = 0; i < regreqs.length; i++) {
           let spec = await submissionFunctions.getRegulatoryRequirementByName(
              regreqs[i]
           );
           regulatoryRequirements.push(spec);
        }
        return regulatoryRequirements;
     },
     getEquipment: async function (items) {
        let equipments = [];
        for (let i = 0; i < items.length; i++) {
           let equipment = await submissionFunctions.getEquipmentByName(items[i]);
           equipments.push(equipment);
        }
        return equipments;
     },
     getLimitationById: async function (id) {
        let data = null;

        if (id === undefined || id === null) {
           return data;
        }

        //todo check if should be active
        await currentWebApi
           .retrieveRecord("fdr_limitation", id, "?$select=fdr_name")
           .then(
              function success(result) {
                 data = result;
              },
              function (error) {
                 console.log("ASRF - Limitation value not found: ", name);
                 console.log("ASRF - Error: ", error);
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.getLimitationById, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );
        return data;
     },
     addDesign: async function (designMarkingRequirementId,initalServiceRequestFunctionId,ec,designMarkingRequirements) {
        let data = null;

        var entity = {};
        entity["fdr_DesignMarkingRequirement@odata.bind"] = `/fdr_designmarkingrequirements(${designMarkingRequirementId})`;
        entity.fdr_designtype = DesignType.Parent;
        entity.fdr_initialsrfunctionid = initalServiceRequestFunctionId;
        entity.fdr_certificatenumber = ec;

        
        const json2 = Object.values(json)
        .filter((value) => value!= undefined || value != null) 
        .reduce((obj, key) => {
           return Object.assign(obj, {
              [key]: json[key],
           });
        }, {});

        Object.assign(entity, designMarkingRequirements)


        await currentWebApi.createRecord("fdr_design", entity).then(
           function success(result) {
              data = result.id;
           },
           function (error) {
              Xrm.Navigation.openErrorDialog({
                 message: `Error With Method: submissionFunctions.addDesign, error msg: ${error.message}`,
                 details: `${error.raw}`,
              });
           }
        );

        return data;
     },
     addLimitationServiceRequestFunction: async function (
        limitationId,
        serviceRequestFunctionId
     ) {
        let data = null;

        var entity = {};
        entity["fdr_limitation@odata.bind"] = `/fdr_limitations(${limitationId})`; // Lookup
        entity["fdr_servicerequestfunction@odata.bind"] = `/fdr_servicerequestfunctions(${serviceRequestFunctionId})`; // Lookup

        await currentWebApi.createRecord("fdr_functionlimitation", entity).then(
           function success(result) {
              data = result.id;
           },
           function (error) {
              Xrm.Navigation.openErrorDialog({
                 message: `Error With Method: submissionFunctions.addLimitationServiceRequestFunction, error msg: ${error.message}`,
                 details: `${error.raw}`,
              });
           }
        );

        return data;
     },
     getDesignMarkingRequirmentByRegistrationAndSpecType: async function (
        registrationTypeId,
        specId
     ) {
        let data = [];

        await currentWebApi
           .retrieveMultipleRecords(
              "fdr_designmarkingrequirement",
              `?$select=fdr_name&$filter=_fdr_containertype_value eq ${registrationTypeId} and  _fdr_specification_value eq ${specId}`
           )
           .then(
              function success(results) {
                 if (results.entities.length > 0) {
                    data = results.entities[0];
                 }
                 else {
                    console.log(
                       "ASRF - Regulatory Requirement value not found: ",
                       name
                    );
                 }
              },
              function (error) {
                 console.log("ASRF - Error: ", error);
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.getDesignMarkingRequirmentByRegistrationAndSpecType, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );
        return data;
     },
     associateDesignToServiceRequestFunction: async function (
        serviceRequestFunctionId,
        designIds
     ) {
        let data = null;
        let relatedEntities = [];

        designIds.forEach((designId) => {
           relatedEntities.push({
              entityType: "fdr_design",
              id: designId
           });
        });

        if (relatedEntities.length === 0) {
           return;
        }

        var associateRequest = {
           target: {
              entityType: "fdr_servicerequestfunction",
              id: serviceRequestFunctionId,
           },
           relatedEntities,
           relationship: "fdr_Design_ServiceRequestFunction",
           getMetadata: function () {
              return {
                 boundParameter: null,
                 parameterTypes: {},
                 operationType: 2,
                 operationName: "Associate",
              };
           },
        };

        await Xrm.WebApi.online.execute(associateRequest).then(
           function success(result) {
              data = result.ok;
           },
           function (error) {
              Xrm.Navigation.openErrorDialog({
                 message: `Error With Method: submissionFunctions.associateDesignToServiceRequestFunction, error msg: ${error.message}`,
                 details: `${error.raw}`,
              });
           }
        );

        return data;
     },
     getRegisterMarkByMarkText: async function (markText) {
        let data = [];

        await currentWebApi
           .retrieveMultipleRecords(
              "fdr_registeredmark",
              `?$select=fdr_marktext,fdr_name&$filter=fdr_marktext eq '${markText}'`
           )
           .then(
              function success(result) {
                 if (result.entities.length > 0) {
                    data = result.entities;
                 }
              },
              function (error) {
                 Xrm.Navigation.openErrorDialog({
                    message: `Error With Method: submissionFunctions.getRegisterMarkByMarkText, error msg: ${error.message}`,
                    details: `${error.raw}`,
                 });
              }
           );

        return data;
     },
  };

  class serviceRequestFunction {
     constructor(prefix) {
        this.prefix = prefix;
     }

     get name() {
        return `${this.prefix}_specifications`;
     } // holds spec value if provided on form
     get ec() {
        return `${this.prefix}_equivalency_numbers`;
     }
     get mobile() {
        return `${this.prefix}_mobile_units`;
     }
     //functions have designs
     get design_key() {
        return `${this.prefix}_design`;
     }
     design_spec_key(i) {
        return `${this.design_key}${i}_specifications`;
     }
     design_ec_Key(i) {
        return `${this.design_key}${i}_equivalency_numbers`;
     }
     design_mainDrawingNumber_Key(i) {
        return `${this.design_key}${i}_drawing_number`;
     }
     design_mainDrawingRevisionNumber_Key(i) {
        return `${this.design_key}${i}_revision_number`;
     }
     design_mainDrawingDate_Key(i) {
        return `${this.design_key}${i}_drawing_date`;
     }
  }


  const schema = {
     //service request contain functions
     functions: {
        manufacture: new serviceRequestFunction("manufacture"),
        repair: new serviceRequestFunction("repair"),
        rebuilding: new serviceRequestFunction("rebuilding"),
        reheatTreatment: new serviceRequestFunction("reheat"),
        acousticEmissionTest: new serviceRequestFunction("acoustic"),
        modalAcousticEmessionTest: new serviceRequestFunction("modal"),
        ultrasonicTest: new serviceRequestFunction("ultrasonic"),
        inspectionAcetyleneCylinders: new serviceRequestFunction("acetylene"),
        externalVisualInspection: new serviceRequestFunction("external"),
        hydrostaticPressureTest_voluMetetricExpansion_directExpansion: new serviceRequestFunction("hydrostatic_direct"),
        hydrostaticPressureTest_proofPressure: new serviceRequestFunction(
           "hydrostatic_proof"
        ),
        hydrostaticPressureTest_voluMetetricExpansion_waterJacket: new serviceRequestFunction("hydrostatic_jacket"),
     },
     //service request contain  regulatory requirements
     regulatoryRequirement: "regulatory_requirements",
     equipment: ["equipment_details","inspection_details", "test_details"],
     primaryCompany: {
        registeredMark: "registered_mark",
        name: "company_name",
        businessNumber: "company_business_number",
        address: "maf_ab_company_address",
        city: "maf_ab_company_city",
        provinceOrState: "maf_ab_company_provinceCode",
        country: "maf_ab_company_country",
        postalOrZip: "maf_ab_company_postalcode",
     },
     site: {
        address: "maf_ab_Site_address",
        city: "maf_ab_Site_city",
        provinceOrState: "maf_ab_Site_provinceCode",
        country: "maf_ab_Site_country",
        postalOrZip: "maf_ab_Site_postalcode",
     },
  };

  const mobileValue = {
     NotAppliable: {
        value: "na",
        entityIdInDynamics: null
     },
     Mobile: {
        value: "Mobile unit(s) included",
        entityIdInDynamics: "038f8896-f8bf-ec11-983f-0022483dac7e", // id should be the same accros all environments.
     },
     OnlyMobile: {
        value: "Mobile unit only",
        entityIdInDynamics: "96bbc33e-5b59-ed11-9562-0022483d0343", // id should be the same accros all environments.
     },
  };

  const asrfHelpers = {
     getFunctionsFromJSON: async function (json) {
        let functions = [];

        for (var functionKey in schema.functions) {
           for (var jsonKey in json) {
              //get to the correct key
              let functinon_key = schema.functions[functionKey]["name"];
              let ec_key = schema.functions[functionKey]["ec"];
              let mobile_key = schema.functions[functionKey]["mobile"];

              if (!json[mobile_key]) {
                 console.log("ASRF - Function Mobile key not found: ", mobile_key);
              }
              if (!json[ec_key]) {
                 console.log("ASRF - Function EC key not found: ", ec_key);
              }

              let mobileId;
              let mobile = json[mobile_key];

              if (mobile) {
                 switch (mobile) {
                    case mobileValue.NotAppliable.value:
                       mobileId = mobileValue.NotAppliable.entityIdInDynamics;
                       break;
                    case mobileValue.Mobile.value:
                       mobileId = mobileValue.Mobile.entityIdInDynamics;
                       break;
                    case mobileValue.OnlyMobile.value:
                       mobileId = mobileValue.OnlyMobile.entityIdInDynamics;
                       break;
                 }
              }

              if (jsonKey === functinon_key) {
                 let funcObject = {
                    entity: await submissionFunctions.getFunctionByASRFSchemaMappingName(
                       functinon_key
                    ),
                    specs: await submissionFunctions.getSpecs(
                       json[functinon_key].split(",")
                    ), // the value holds specs
                    ec: json[ec_key],
                    mobile: await submissionFunctions.getLimitationById(mobileId),
                 };
                 functions.push(funcObject);
              }
           }
        }

        return functions;
     },
     getRegulatoryRequirementFromJSON: async function (json) {
        if (!json[schema.regulatoryRequirement]) {
           console.log("ASRF - Regulatory Requirment key not found: ", schema.regulatoryRequirement);
           return [];
        }
        return await submissionFunctions.getRegulatoryRequirements(json[schema.regulatoryRequirement].split(","));
     },
     getRegisterMarkFromJSON: function (json) {
        if (!json[schema.primaryCompany.registeredMark]) {
           console.log("ASRF - Register Mark key not found: ", schema.primaryCompany.registeredMark);
           return null;
        }
        return schema.primaryCompany.registeredMark;
     },
     getEquipmentFromJSON: async function (json) {
        
      let found = false;
      let equipments = []
      for (let i = 0; i < schema.equipment.length; i++) {
        const element = schema.equipment[i];

        if (json[element]) {
          found = true;
          let items = json[element].split(",")
          equipments = equipments.concat(items)
        }else{
          console.log("ASRF - Equipment Key not found: ", element)
        }
      }

      if(!found){return []}
        return await submissionFunctions.getEquipment(equipments);
     },
     getDesignsFromJSON: async function (json) {
        let designs = [];
        let functions = [];

        for (var functionKey in schema.functions) {
           //for (var jsonKey in json) {
           //get to the correct key
           let design_key = schema.functions[functionKey]["design_key"]; //manufacturer_design
           let addFunction = false;

           //reassemble new object filter to specific function
           const json2 = Object.keys(json)
              .filter((key) => key.includes(design_key))
              .reduce((obj, key) => {
                 return Object.assign(obj, {
                    [key]: json[key],
                 });
              }, {});

           //search for key, because multiple designs can be on object in flatten manner. the keys strings are number as such
           //manufacture_design1, manufacture_design2, manufacture_design3 etc...
           //because each form can have  1 to many designs, we will set an arbitrary number number of 100
           let attempts = 100;
           for (let i = 1; i < attempts; i++) {
              let designSpecKey = schema.functions[functionKey].design_spec_key(i); //manufacturer_design1_specifications-->manufacture_design1_rigid_liquids_specifications
              let ecKey = schema.functions[functionKey].design_ec_Key(i);
              let mainDrawingNumberKey = schema.functions[functionKey].design_mainDrawingNumber_Key(i);
              let mainDrawingRevisionNumberKey = schema.functions[functionKey].design_mainDrawingRevisionNumber_Key(i);
              let mainDrawingDate = schema.functions[functionKey].design_mainDrawingDate_Key(i);

              let spec = json2[designSpecKey];
              if (spec === undefined) {
                 break;
              }

              if (!json[ecKey]) {console.log("ASRF - Design EC key not found: ", ecKey);}
              if (!json[mainDrawingNumberKey]) {console.log("ASRF - Design Main Drawing Number key not found: ", mainDrawingNumberKey);}
              if (!json[mainDrawingRevisionNumberKey]) {console.log("ASRF - Design Main Drawing Revision Number key not found: ", mainDrawingRevisionNumberKey);}
              if (!json[mainDrawingDate]) {console.log("ASRF - Design Main Drawing Date key not found: ", mainDrawingDate);}


              let designObj = {
                 specs: await submissionFunctions.getSpecs(spec.split(",")),
                 ec: json[ecKey],
                 requirements:{       
                  fdr_maincontainerdrawing: json[mainDrawingNumberKey],
                  fdr_maincontainerdrawingrevision: json[mainDrawingRevisionNumberKey],
                  fdr_maincontainerdrawingdate: json[mainDrawingDate]
                }

              };

              addFunction = true;
              designs.push(designObj);
           }

           let functionObj = {
              entity: await submissionFunctions.getFunctionByASRFSchemaMappingName(
                 schema.functions[functionKey].name
              ),
              designs,
           };

           //only add the function if it has designs
           if (addFunction) {
              functions.push(functionObj);
           }
        }

        return functions;
     },
     getPrimaryCompanyFromJSON: function (json) {
        return {
           name: json[schema.primaryCompany.name],
           businessNumber: json[schema.primaryCompany.businessNumber],
           registeredMark: json[schema.primaryCompany.registeredMark],
           address: json[schema.primaryCompany.address],
           city: json[schema.primaryCompany.city],
           provinceOrState: json[schema.primaryCompany.provinceOrState],
           country: json[schema.primaryCompany.country],
           postalOrZip: json[schema.primaryCompany.postalOrZip],
        };
     },
     getSiteFromJSON: function (json) {
        return {
           address: json[schema.site.address],
           city: json[schema.site.city],
           provinceOrState: json[schema.site.provinceOrState],
           country: json[schema.site.country],
           postalOrZip: json[schema.site.postalOrZip],
        };
     },
  };

  return {
     CustomerTypeCode,
     Roles,
     getConnections: submissionFunctions.getConnections,
     getPreferedSuggestionsForParentCompany: submissionFunctions.getPreferedSuggestionsForParentCompany,
     getPreferedSuggestionsForSite: submissionFunctions.getPreferedSuggestionsForSite,
     findParentCompanyMatches: submissionFunctions.findParentCompanyMatches,
     findParentCompanySites: submissionFunctions.findParentCompanySites,
     AddAccountToSuggestionList: submissionFunctions.AddAccountToSuggestionList,
     RemoveSuggestion: submissionFunctions.RemoveSuggestion,
     getContactDetails: submissionFunctions.getContactDetails,
     getSubmissionDetails: submissionFunctions.getSubmissionDetails,
     getAllParentCompanyAndSiteSuggestions: submissionFunctions.getAllParentCompanyAndSiteSuggestions,
     addServiceRequest: submissionFunctions.addServiceRequest,
     getContainerFunctionByRegistrationTypeAndFunctionId: submissionFunctions.getContainerFunctionByRegistrationTypeAndFunctionId,
     findServiceRequestByMTOAId: submissionFunctions.findServiceRequestByMTOAId,
     linkServiceRequestToSubmission: submissionFunctions.linkServiceRequestToSubmission,
     getFunctionByASRFSchemaMappingName: submissionFunctions.getFunctionByASRFSchemaMappingName,
     addServiceRequestFunction: submissionFunctions.addServiceRequestFunction,
     associateSpecToServiceRequestFunction: submissionFunctions.associateSpecToServiceRequestFunction,
     addRegisterMarkText: submissionFunctions.addRegisterMarkText,
     getRegulatoryRequirement: submissionFunctions.getRegulatoryRequirementByName,
     associateRegulatoryRequirementToServiceRequest: submissionFunctions.associateRegulatoryRequirementToServiceRequest,
     getDesignMarkingRequirmentByRegistrationAndSpecType: submissionFunctions.getDesignMarkingRequirmentByRegistrationAndSpecType,
     addDesign: submissionFunctions.addDesign,
     addLimitationServiceRequestFunction: submissionFunctions.addLimitationServiceRequestFunction,
     associateDesignToServiceRequestFunction: submissionFunctions.associateDesignToServiceRequestFunction,
     associateEquipmentToServiceRequest: submissionFunctions.associateEquipmentToServiceRequest,
     getRegisterMarkByMarkText: submissionFunctions.getRegisterMarkByMarkText,
     asrfHelpers: {
        getFunctionsFromJSON: asrfHelpers.getFunctionsFromJSON,
        getRegulatoryRequirementFromJSON: asrfHelpers.getRegulatoryRequirementFromJSON,
        getDesignsFromJSON: asrfHelpers.getDesignsFromJSON,
        getPrimaryCompanyFromJSON: asrfHelpers.getPrimaryCompanyFromJSON,
        getSiteFromJSON: asrfHelpers.getSiteFromJSON,
        getEquipmentFromJSON: asrfHelpers.getEquipmentFromJSON,
        getRegisterMarkFromJSON: asrfHelpers.getRegisterMarkFromJSON
     },
  };
})(window, document);