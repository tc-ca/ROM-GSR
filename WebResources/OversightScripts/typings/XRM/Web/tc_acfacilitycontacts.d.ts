interface tc_ACFacilityContacts_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: tc_acfacilitycontacts_statecode | null;
  statuscode?: tc_acfacilitycontacts_statuscode | null;
  tc_acfacilitycontactsid?: string | null;
  tc_name?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface tc_ACFacilityContacts_Relationships {
  tc_ACFacilityId?: tc_ACFacility_Result | null;
  tc_ContactId?: Contact_Result | null;
}
interface tc_ACFacilityContacts extends tc_ACFacilityContacts_Base, tc_ACFacilityContacts_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  tc_ACFacilityId_bind$tc_acfacilities?: string | null;
  tc_ContactId_bind$contacts?: string | null;
}
interface tc_ACFacilityContacts_Create extends tc_ACFacilityContacts {
}
interface tc_ACFacilityContacts_Update extends tc_ACFacilityContacts {
}
interface tc_ACFacilityContacts_Select {
  createdby_guid: WebAttribute<tc_ACFacilityContacts_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<tc_ACFacilityContacts_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<tc_ACFacilityContacts_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<tc_ACFacilityContacts_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<tc_ACFacilityContacts_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<tc_ACFacilityContacts_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<tc_ACFacilityContacts_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<tc_ACFacilityContacts_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<tc_ACFacilityContacts_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<tc_ACFacilityContacts_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<tc_ACFacilityContacts_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<tc_ACFacilityContacts_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<tc_ACFacilityContacts_Select, { statecode: tc_acfacilitycontacts_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<tc_ACFacilityContacts_Select, { statuscode: tc_acfacilitycontacts_statuscode | null }, { statuscode_formatted?: string }>;
  tc_acfacilitycontactsid: WebAttribute<tc_ACFacilityContacts_Select, { tc_acfacilitycontactsid: string | null }, {  }>;
  tc_acfacilityid_guid: WebAttribute<tc_ACFacilityContacts_Select, { tc_acfacilityid_guid: string | null }, { tc_acfacilityid_formatted?: string }>;
  tc_contactid_guid: WebAttribute<tc_ACFacilityContacts_Select, { tc_contactid_guid: string | null }, { tc_contactid_formatted?: string }>;
  tc_name: WebAttribute<tc_ACFacilityContacts_Select, { tc_name: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<tc_ACFacilityContacts_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<tc_ACFacilityContacts_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<tc_ACFacilityContacts_Select, { versionnumber: number | null }, {  }>;
}
interface tc_ACFacilityContacts_Filter {
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
  statecode: tc_acfacilitycontacts_statecode;
  statuscode: tc_acfacilitycontacts_statuscode;
  tc_acfacilitycontactsid: XQW.Guid;
  tc_acfacilityid_guid: XQW.Guid;
  tc_contactid_guid: XQW.Guid;
  tc_name: string;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface tc_ACFacilityContacts_Expand {
  tc_ACFacilityId: WebExpand<tc_ACFacilityContacts_Expand, tc_ACFacility_Select, tc_ACFacility_Filter, { tc_ACFacilityId: tc_ACFacility_Result }>;
  tc_ContactId: WebExpand<tc_ACFacilityContacts_Expand, Contact_Select, Contact_Filter, { tc_ContactId: Contact_Result }>;
}
interface tc_ACFacilityContacts_FormattedResult {
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
  tc_acfacilityid_formatted?: string;
  tc_contactid_formatted?: string;
}
interface tc_ACFacilityContacts_Result extends tc_ACFacilityContacts_Base, tc_ACFacilityContacts_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  tc_acfacilityid_guid: string | null;
  tc_contactid_guid: string | null;
}
interface tc_ACFacilityContacts_RelatedOne {
  tc_ACFacilityId: WebMappingRetrieve<tc_ACFacility_Select,tc_ACFacility_Expand,tc_ACFacility_Filter,tc_ACFacility_Fixed,tc_ACFacility_Result,tc_ACFacility_FormattedResult>;
  tc_ContactId: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface tc_ACFacilityContacts_RelatedMany {
}
interface WebEntitiesRetrieve {
  tc_acfacilitycontactses: WebMappingRetrieve<tc_ACFacilityContacts_Select,tc_ACFacilityContacts_Expand,tc_ACFacilityContacts_Filter,tc_ACFacilityContacts_Fixed,tc_ACFacilityContacts_Result,tc_ACFacilityContacts_FormattedResult>;
}
interface WebEntitiesRelated {
  tc_acfacilitycontactses: WebMappingRelated<tc_ACFacilityContacts_RelatedOne,tc_ACFacilityContacts_RelatedMany>;
}
interface WebEntitiesCUDA {
  tc_acfacilitycontactses: WebMappingCUDA<tc_ACFacilityContacts_Create,tc_ACFacilityContacts_Update,tc_ACFacilityContacts_Select>;
}
