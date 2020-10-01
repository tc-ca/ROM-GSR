interface tc_TCLocationType_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: tc_tclocationtype_statecode | null;
  statuscode?: tc_tclocationtype_statuscode | null;
  tc_locationtypeelbl?: string | null;
  tc_locationtypeflbl?: string | null;
  tc_name?: string | null;
  tc_tclocationtypeid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface tc_TCLocationType_Relationships {
}
interface tc_TCLocationType extends tc_TCLocationType_Base, tc_TCLocationType_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface tc_TCLocationType_Create extends tc_TCLocationType {
}
interface tc_TCLocationType_Update extends tc_TCLocationType {
}
interface tc_TCLocationType_Select {
  createdby_guid: WebAttribute<tc_TCLocationType_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<tc_TCLocationType_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<tc_TCLocationType_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<tc_TCLocationType_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<tc_TCLocationType_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<tc_TCLocationType_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<tc_TCLocationType_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<tc_TCLocationType_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<tc_TCLocationType_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<tc_TCLocationType_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<tc_TCLocationType_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<tc_TCLocationType_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<tc_TCLocationType_Select, { statecode: tc_tclocationtype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<tc_TCLocationType_Select, { statuscode: tc_tclocationtype_statuscode | null }, { statuscode_formatted?: string }>;
  tc_locationtypeelbl: WebAttribute<tc_TCLocationType_Select, { tc_locationtypeelbl: string | null }, {  }>;
  tc_locationtypeflbl: WebAttribute<tc_TCLocationType_Select, { tc_locationtypeflbl: string | null }, {  }>;
  tc_name: WebAttribute<tc_TCLocationType_Select, { tc_name: string | null }, {  }>;
  tc_tclocationtypeid: WebAttribute<tc_TCLocationType_Select, { tc_tclocationtypeid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<tc_TCLocationType_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<tc_TCLocationType_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<tc_TCLocationType_Select, { versionnumber: number | null }, {  }>;
}
interface tc_TCLocationType_Filter {
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
  statecode: tc_tclocationtype_statecode;
  statuscode: tc_tclocationtype_statuscode;
  tc_locationtypeelbl: string;
  tc_locationtypeflbl: string;
  tc_name: string;
  tc_tclocationtypeid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface tc_TCLocationType_Expand {
}
interface tc_TCLocationType_FormattedResult {
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
interface tc_TCLocationType_Result extends tc_TCLocationType_Base, tc_TCLocationType_Relationships {
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
interface tc_TCLocationType_RelatedOne {
}
interface tc_TCLocationType_RelatedMany {
}
interface WebEntitiesRetrieve {
  tc_tclocationtypes: WebMappingRetrieve<tc_TCLocationType_Select,tc_TCLocationType_Expand,tc_TCLocationType_Filter,tc_TCLocationType_Fixed,tc_TCLocationType_Result,tc_TCLocationType_FormattedResult>;
}
interface WebEntitiesRelated {
  tc_tclocationtypes: WebMappingRelated<tc_TCLocationType_RelatedOne,tc_TCLocationType_RelatedMany>;
}
interface WebEntitiesCUDA {
  tc_tclocationtypes: WebMappingCUDA<tc_TCLocationType_Create,tc_TCLocationType_Update,tc_TCLocationType_Select>;
}
