declare namespace web {
  interface tc_ACFacilityLocation_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: tc_acfacilitylocation_statecode | null;
    statuscode?: tc_acfacilitylocation_statuscode | null;
    tc_acfacilitylocationid?: string | null;
    tc_name?: string | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface tc_ACFacilityLocation_Relationships {
    tc_ACFacilityId?: tc_ACFacility_Result | null;
    tc_ACFacilityLocationAccount_ACFacilityLo?: tc_ACFacilityLocationAccount_Result[] | null;
  }
  interface tc_ACFacilityLocation extends tc_ACFacilityLocation_Base, tc_ACFacilityLocation_Relationships {
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
    tc_ACFacilityId_bind$tc_acfacilities?: string | null;
  }
  interface tc_ACFacilityLocation_Create extends tc_ACFacilityLocation {
  }
  interface tc_ACFacilityLocation_Update extends tc_ACFacilityLocation {
  }
  interface tc_ACFacilityLocation_Select {
    createdby_guid: WebAttribute<tc_ACFacilityLocation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<tc_ACFacilityLocation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<tc_ACFacilityLocation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<tc_ACFacilityLocation_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<tc_ACFacilityLocation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<tc_ACFacilityLocation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<tc_ACFacilityLocation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<tc_ACFacilityLocation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<tc_ACFacilityLocation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<tc_ACFacilityLocation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<tc_ACFacilityLocation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<tc_ACFacilityLocation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<tc_ACFacilityLocation_Select, { statecode: tc_acfacilitylocation_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<tc_ACFacilityLocation_Select, { statuscode: tc_acfacilitylocation_statuscode | null }, { statuscode_formatted?: string }>;
    tc_acfacilityid_guid: WebAttribute<tc_ACFacilityLocation_Select, { tc_acfacilityid_guid: string | null }, { tc_acfacilityid_formatted?: string }>;
    tc_acfacilitylocationid: WebAttribute<tc_ACFacilityLocation_Select, { tc_acfacilitylocationid: string | null }, {  }>;
    tc_name: WebAttribute<tc_ACFacilityLocation_Select, { tc_name: string | null }, {  }>;
    timezoneruleversionnumber: WebAttribute<tc_ACFacilityLocation_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<tc_ACFacilityLocation_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<tc_ACFacilityLocation_Select, { versionnumber: number | null }, {  }>;
  }
  interface tc_ACFacilityLocation_Filter {
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
    statecode: tc_acfacilitylocation_statecode;
    statuscode: tc_acfacilitylocation_statuscode;
    tc_acfacilityid_guid: XQW.Guid;
    tc_acfacilitylocationid: XQW.Guid;
    tc_name: string;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface tc_ACFacilityLocation_Expand {
    tc_ACFacilityId: WebExpand<tc_ACFacilityLocation_Expand, tc_ACFacility_Select, tc_ACFacility_Filter, { tc_ACFacilityId: tc_ACFacility_Result }>;
    tc_ACFacilityLocationAccount_ACFacilityLo: WebExpand<tc_ACFacilityLocation_Expand, tc_ACFacilityLocationAccount_Select, tc_ACFacilityLocationAccount_Filter, { tc_ACFacilityLocationAccount_ACFacilityLo: tc_ACFacilityLocationAccount_Result[] }>;
  }
  interface tc_ACFacilityLocation_FormattedResult {
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
  }
  interface tc_ACFacilityLocation_Result extends tc_ACFacilityLocation_Base, tc_ACFacilityLocation_Relationships {
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
  }
  interface tc_ACFacilityLocation_RelatedOne {
    tc_ACFacilityId: WebMappingRetrieve<web.tc_ACFacility_Select,web.tc_ACFacility_Expand,web.tc_ACFacility_Filter,web.tc_ACFacility_Fixed,web.tc_ACFacility_Result,web.tc_ACFacility_FormattedResult>;
  }
  interface tc_ACFacilityLocation_RelatedMany {
    tc_ACFacilityLocationAccount_ACFacilityLo: WebMappingRetrieve<web.tc_ACFacilityLocationAccount_Select,web.tc_ACFacilityLocationAccount_Expand,web.tc_ACFacilityLocationAccount_Filter,web.tc_ACFacilityLocationAccount_Fixed,web.tc_ACFacilityLocationAccount_Result,web.tc_ACFacilityLocationAccount_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  tc_acfacilitylocations: WebMappingRetrieve<web.tc_ACFacilityLocation_Select,web.tc_ACFacilityLocation_Expand,web.tc_ACFacilityLocation_Filter,web.tc_ACFacilityLocation_Fixed,web.tc_ACFacilityLocation_Result,web.tc_ACFacilityLocation_FormattedResult>;
}
interface WebEntitiesRelated {
  tc_acfacilitylocations: WebMappingRelated<web.tc_ACFacilityLocation_RelatedOne,web.tc_ACFacilityLocation_RelatedMany>;
}
interface WebEntitiesCUDA {
  tc_acfacilitylocations: WebMappingCUDA<web.tc_ACFacilityLocation_Create,web.tc_ACFacilityLocation_Update,web.tc_ACFacilityLocation_Select>;
}
