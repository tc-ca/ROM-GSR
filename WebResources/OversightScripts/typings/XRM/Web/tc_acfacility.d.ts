declare namespace web {
  interface tc_ACFacility_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: tc_acfacility_statecode | null;
    statuscode?: tc_acfacility_statuscode | null;
    tc_acfacilityid?: string | null;
    tc_address1city?: string | null;
    tc_address1country?: string | null;
    tc_address1latitude?: number | null;
    tc_address1line1?: string | null;
    tc_address1line2?: string | null;
    tc_address1line3?: string | null;
    tc_address1longitude?: number | null;
    tc_address1name?: string | null;
    tc_address1postalcode?: string | null;
    tc_address1postofficebox?: string | null;
    tc_address1stateorprovince?: string | null;
    tc_address2city?: string | null;
    tc_address2country?: string | null;
    tc_address2latitude?: number | null;
    tc_address2line1?: string | null;
    tc_address2line2?: string | null;
    tc_address2line3?: string | null;
    tc_address2longitude?: number | null;
    tc_address2name?: string | null;
    tc_address2postalcode?: string | null;
    tc_address2postofficebox?: string | null;
    tc_address2stateorprovince?: string | null;
    tc_emailaddress1?: string | null;
    tc_facilitydescriptiontxt?: string | null;
    tc_fax?: string | null;
    tc_name?: string | null;
    tc_telephone1?: string | null;
    tc_telephone2?: string | null;
    tc_websiteurl?: string | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface tc_ACFacility_Relationships {
    tc_ACFacilityAccounts_ACFacility?: tc_ACFacilityAccounts_Result[] | null;
    tc_ACFacilityContacts_ACFacility?: tc_ACFacilityContacts_Result[] | null;
    tc_ACFacilityLocation_ACFacility?: tc_ACFacilityLocation_Result[] | null;
    tc_TCFacilityTypeId?: tc_TCFacilityType_Result | null;
  }
  interface tc_ACFacility extends tc_ACFacility_Base, tc_ACFacility_Relationships {
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
    tc_TCFacilityTypeId_bind$tc_tcfacilitytypes?: string | null;
  }
  interface tc_ACFacility_Create extends tc_ACFacility {
  }
  interface tc_ACFacility_Update extends tc_ACFacility {
  }
  interface tc_ACFacility_Select {
    createdby_guid: WebAttribute<tc_ACFacility_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<tc_ACFacility_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<tc_ACFacility_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<tc_ACFacility_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<tc_ACFacility_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<tc_ACFacility_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<tc_ACFacility_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<tc_ACFacility_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<tc_ACFacility_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<tc_ACFacility_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<tc_ACFacility_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<tc_ACFacility_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<tc_ACFacility_Select, { statecode: tc_acfacility_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<tc_ACFacility_Select, { statuscode: tc_acfacility_statuscode | null }, { statuscode_formatted?: string }>;
    tc_acfacilityid: WebAttribute<tc_ACFacility_Select, { tc_acfacilityid: string | null }, {  }>;
    tc_address1city: WebAttribute<tc_ACFacility_Select, { tc_address1city: string | null }, {  }>;
    tc_address1country: WebAttribute<tc_ACFacility_Select, { tc_address1country: string | null }, {  }>;
    tc_address1latitude: WebAttribute<tc_ACFacility_Select, { tc_address1latitude: number | null }, {  }>;
    tc_address1line1: WebAttribute<tc_ACFacility_Select, { tc_address1line1: string | null }, {  }>;
    tc_address1line2: WebAttribute<tc_ACFacility_Select, { tc_address1line2: string | null }, {  }>;
    tc_address1line3: WebAttribute<tc_ACFacility_Select, { tc_address1line3: string | null }, {  }>;
    tc_address1longitude: WebAttribute<tc_ACFacility_Select, { tc_address1longitude: number | null }, {  }>;
    tc_address1name: WebAttribute<tc_ACFacility_Select, { tc_address1name: string | null }, {  }>;
    tc_address1postalcode: WebAttribute<tc_ACFacility_Select, { tc_address1postalcode: string | null }, {  }>;
    tc_address1postofficebox: WebAttribute<tc_ACFacility_Select, { tc_address1postofficebox: string | null }, {  }>;
    tc_address1stateorprovince: WebAttribute<tc_ACFacility_Select, { tc_address1stateorprovince: string | null }, {  }>;
    tc_address2city: WebAttribute<tc_ACFacility_Select, { tc_address2city: string | null }, {  }>;
    tc_address2country: WebAttribute<tc_ACFacility_Select, { tc_address2country: string | null }, {  }>;
    tc_address2latitude: WebAttribute<tc_ACFacility_Select, { tc_address2latitude: number | null }, {  }>;
    tc_address2line1: WebAttribute<tc_ACFacility_Select, { tc_address2line1: string | null }, {  }>;
    tc_address2line2: WebAttribute<tc_ACFacility_Select, { tc_address2line2: string | null }, {  }>;
    tc_address2line3: WebAttribute<tc_ACFacility_Select, { tc_address2line3: string | null }, {  }>;
    tc_address2longitude: WebAttribute<tc_ACFacility_Select, { tc_address2longitude: number | null }, {  }>;
    tc_address2name: WebAttribute<tc_ACFacility_Select, { tc_address2name: string | null }, {  }>;
    tc_address2postalcode: WebAttribute<tc_ACFacility_Select, { tc_address2postalcode: string | null }, {  }>;
    tc_address2postofficebox: WebAttribute<tc_ACFacility_Select, { tc_address2postofficebox: string | null }, {  }>;
    tc_address2stateorprovince: WebAttribute<tc_ACFacility_Select, { tc_address2stateorprovince: string | null }, {  }>;
    tc_emailaddress1: WebAttribute<tc_ACFacility_Select, { tc_emailaddress1: string | null }, {  }>;
    tc_facilitydescriptiontxt: WebAttribute<tc_ACFacility_Select, { tc_facilitydescriptiontxt: string | null }, {  }>;
    tc_fax: WebAttribute<tc_ACFacility_Select, { tc_fax: string | null }, {  }>;
    tc_name: WebAttribute<tc_ACFacility_Select, { tc_name: string | null }, {  }>;
    tc_tcfacilitytypeid_guid: WebAttribute<tc_ACFacility_Select, { tc_tcfacilitytypeid_guid: string | null }, { tc_tcfacilitytypeid_formatted?: string }>;
    tc_telephone1: WebAttribute<tc_ACFacility_Select, { tc_telephone1: string | null }, {  }>;
    tc_telephone2: WebAttribute<tc_ACFacility_Select, { tc_telephone2: string | null }, {  }>;
    tc_websiteurl: WebAttribute<tc_ACFacility_Select, { tc_websiteurl: string | null }, {  }>;
    timezoneruleversionnumber: WebAttribute<tc_ACFacility_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<tc_ACFacility_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<tc_ACFacility_Select, { versionnumber: number | null }, {  }>;
  }
  interface tc_ACFacility_Filter {
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    importsequencenumber: number;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    statecode: tc_acfacility_statecode;
    statuscode: tc_acfacility_statuscode;
    tc_acfacilityid: XQW.Guid;
    tc_address1city: string;
    tc_address1country: string;
    tc_address1latitude: number;
    tc_address1line1: string;
    tc_address1line2: string;
    tc_address1line3: string;
    tc_address1longitude: number;
    tc_address1name: string;
    tc_address1postalcode: string;
    tc_address1postofficebox: string;
    tc_address1stateorprovince: string;
    tc_address2city: string;
    tc_address2country: string;
    tc_address2latitude: number;
    tc_address2line1: string;
    tc_address2line2: string;
    tc_address2line3: string;
    tc_address2longitude: number;
    tc_address2name: string;
    tc_address2postalcode: string;
    tc_address2postofficebox: string;
    tc_address2stateorprovince: string;
    tc_emailaddress1: string;
    tc_facilitydescriptiontxt: string;
    tc_fax: string;
    tc_name: string;
    tc_tcfacilitytypeid_guid: XQW.Guid;
    tc_telephone1: string;
    tc_telephone2: string;
    tc_websiteurl: string;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface tc_ACFacility_Expand {
    tc_ACFacilityAccounts_ACFacility: WebExpand<tc_ACFacility_Expand, tc_ACFacilityAccounts_Select, tc_ACFacilityAccounts_Filter, { tc_ACFacilityAccounts_ACFacility: tc_ACFacilityAccounts_Result[] }>;
    tc_ACFacilityContacts_ACFacility: WebExpand<tc_ACFacility_Expand, tc_ACFacilityContacts_Select, tc_ACFacilityContacts_Filter, { tc_ACFacilityContacts_ACFacility: tc_ACFacilityContacts_Result[] }>;
    tc_ACFacilityLocation_ACFacility: WebExpand<tc_ACFacility_Expand, tc_ACFacilityLocation_Select, tc_ACFacilityLocation_Filter, { tc_ACFacilityLocation_ACFacility: tc_ACFacilityLocation_Result[] }>;
    tc_TCFacilityTypeId: WebExpand<tc_ACFacility_Expand, tc_TCFacilityType_Select, tc_TCFacilityType_Filter, { tc_TCFacilityTypeId: tc_TCFacilityType_Result }>;
  }
  interface tc_ACFacility_FormattedResult {
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    overriddencreatedon_formatted?: string;
    ownerid_formatted?: string;
    owningbusinessunit_formatted?: string;
    owningteam_formatted?: string;
    owninguser_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
    tc_tcfacilitytypeid_formatted?: string;
  }
  interface tc_ACFacility_Result extends tc_ACFacility_Base, tc_ACFacility_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
    tc_tcfacilitytypeid_guid: string | null;
  }
  interface tc_ACFacility_RelatedOne {
    tc_TCFacilityTypeId: WebMappingRetrieve<web.tc_TCFacilityType_Select,web.tc_TCFacilityType_Expand,web.tc_TCFacilityType_Filter,web.tc_TCFacilityType_Fixed,web.tc_TCFacilityType_Result,web.tc_TCFacilityType_FormattedResult>;
  }
  interface tc_ACFacility_RelatedMany {
    tc_ACFacilityAccounts_ACFacility: WebMappingRetrieve<web.tc_ACFacilityAccounts_Select,web.tc_ACFacilityAccounts_Expand,web.tc_ACFacilityAccounts_Filter,web.tc_ACFacilityAccounts_Fixed,web.tc_ACFacilityAccounts_Result,web.tc_ACFacilityAccounts_FormattedResult>;
    tc_ACFacilityContacts_ACFacility: WebMappingRetrieve<web.tc_ACFacilityContacts_Select,web.tc_ACFacilityContacts_Expand,web.tc_ACFacilityContacts_Filter,web.tc_ACFacilityContacts_Fixed,web.tc_ACFacilityContacts_Result,web.tc_ACFacilityContacts_FormattedResult>;
    tc_ACFacilityLocation_ACFacility: WebMappingRetrieve<web.tc_ACFacilityLocation_Select,web.tc_ACFacilityLocation_Expand,web.tc_ACFacilityLocation_Filter,web.tc_ACFacilityLocation_Fixed,web.tc_ACFacilityLocation_Result,web.tc_ACFacilityLocation_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  tc_acfacilities: WebMappingRetrieve<web.tc_ACFacility_Select,web.tc_ACFacility_Expand,web.tc_ACFacility_Filter,web.tc_ACFacility_Fixed,web.tc_ACFacility_Result,web.tc_ACFacility_FormattedResult>;
}
interface WebEntitiesRelated {
  tc_acfacilities: WebMappingRelated<web.tc_ACFacility_RelatedOne,web.tc_ACFacility_RelatedMany>;
}
interface WebEntitiesCUDA {
  tc_acfacilities: WebMappingCUDA<web.tc_ACFacility_Create,web.tc_ACFacility_Update,web.tc_ACFacility_Select>;
}
