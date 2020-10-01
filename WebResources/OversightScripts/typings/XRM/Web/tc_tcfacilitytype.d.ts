interface tc_TCFacilityType_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: tc_tcfacilitytype_statecode | null;
  statuscode?: tc_tcfacilitytype_statuscode | null;
  tc_facilitytypeelbl?: string | null;
  tc_facilitytypeflbl?: string | null;
  tc_name?: string | null;
  tc_tcfacilitytypeid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface tc_TCFacilityType_Relationships {
  tc_ACFacility_TCFacilityType?: tc_ACFacility_Result[] | null;
}
interface tc_TCFacilityType extends tc_TCFacilityType_Base, tc_TCFacilityType_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface tc_TCFacilityType_Create extends tc_TCFacilityType {
}
interface tc_TCFacilityType_Update extends tc_TCFacilityType {
}
interface tc_TCFacilityType_Select {
  createdby_guid: WebAttribute<tc_TCFacilityType_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<tc_TCFacilityType_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<tc_TCFacilityType_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<tc_TCFacilityType_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<tc_TCFacilityType_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<tc_TCFacilityType_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<tc_TCFacilityType_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<tc_TCFacilityType_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<tc_TCFacilityType_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<tc_TCFacilityType_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<tc_TCFacilityType_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<tc_TCFacilityType_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<tc_TCFacilityType_Select, { statecode: tc_tcfacilitytype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<tc_TCFacilityType_Select, { statuscode: tc_tcfacilitytype_statuscode | null }, { statuscode_formatted?: string }>;
  tc_facilitytypeelbl: WebAttribute<tc_TCFacilityType_Select, { tc_facilitytypeelbl: string | null }, {  }>;
  tc_facilitytypeflbl: WebAttribute<tc_TCFacilityType_Select, { tc_facilitytypeflbl: string | null }, {  }>;
  tc_name: WebAttribute<tc_TCFacilityType_Select, { tc_name: string | null }, {  }>;
  tc_tcfacilitytypeid: WebAttribute<tc_TCFacilityType_Select, { tc_tcfacilitytypeid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<tc_TCFacilityType_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<tc_TCFacilityType_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<tc_TCFacilityType_Select, { versionnumber: number | null }, {  }>;
}
interface tc_TCFacilityType_Filter {
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
  statecode: tc_tcfacilitytype_statecode;
  statuscode: tc_tcfacilitytype_statuscode;
  tc_facilitytypeelbl: string;
  tc_facilitytypeflbl: string;
  tc_name: string;
  tc_tcfacilitytypeid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface tc_TCFacilityType_Expand {
  tc_ACFacility_TCFacilityType: WebExpand<tc_TCFacilityType_Expand, tc_ACFacility_Select, tc_ACFacility_Filter, { tc_ACFacility_TCFacilityType: tc_ACFacility_Result[] }>;
}
interface tc_TCFacilityType_FormattedResult {
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
}
interface tc_TCFacilityType_Result extends tc_TCFacilityType_Base, tc_TCFacilityType_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface tc_TCFacilityType_RelatedOne {
}
interface tc_TCFacilityType_RelatedMany {
  tc_ACFacility_TCFacilityType: WebMappingRetrieve<tc_ACFacility_Select,tc_ACFacility_Expand,tc_ACFacility_Filter,tc_ACFacility_Fixed,tc_ACFacility_Result,tc_ACFacility_FormattedResult>;
}
interface WebEntitiesRetrieve {
  tc_tcfacilitytypes: WebMappingRetrieve<tc_TCFacilityType_Select,tc_TCFacilityType_Expand,tc_TCFacilityType_Filter,tc_TCFacilityType_Fixed,tc_TCFacilityType_Result,tc_TCFacilityType_FormattedResult>;
}
interface WebEntitiesRelated {
  tc_tcfacilitytypes: WebMappingRelated<tc_TCFacilityType_RelatedOne,tc_TCFacilityType_RelatedMany>;
}
interface WebEntitiesCUDA {
  tc_tcfacilitytypes: WebMappingCUDA<tc_TCFacilityType_Create,tc_TCFacilityType_Update,tc_TCFacilityType_Select>;
}
