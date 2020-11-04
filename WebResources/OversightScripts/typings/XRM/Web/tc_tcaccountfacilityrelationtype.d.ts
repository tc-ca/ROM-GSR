interface tc_TCAccountFacilityRelationType_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: tc_tcaccountfacilityrelationtype_statecode | null;
  statuscode?: tc_tcaccountfacilityrelationtype_statuscode | null;
  tc_accountfacilityrelationtypeelbl?: string | null;
  tc_accountfacilityrelationtypeflbl?: string | null;
  tc_name?: string | null;
  tc_tcaccountfacilityrelationtypeid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface tc_TCAccountFacilityRelationType_Relationships {
  tc_ACFacilityAccounts_TCAccountFacilityRe?: tc_ACFacilityAccounts_Result[] | null;
  tc_ACFacilityLocationAccount_TCAccountFac?: tc_ACFacilityLocationAccount_Result[] | null;
}
interface tc_TCAccountFacilityRelationType extends tc_TCAccountFacilityRelationType_Base, tc_TCAccountFacilityRelationType_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface tc_TCAccountFacilityRelationType_Create extends tc_TCAccountFacilityRelationType {
}
interface tc_TCAccountFacilityRelationType_Update extends tc_TCAccountFacilityRelationType {
}
interface tc_TCAccountFacilityRelationType_Select {
  createdby_guid: WebAttribute<tc_TCAccountFacilityRelationType_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<tc_TCAccountFacilityRelationType_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<tc_TCAccountFacilityRelationType_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<tc_TCAccountFacilityRelationType_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<tc_TCAccountFacilityRelationType_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<tc_TCAccountFacilityRelationType_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<tc_TCAccountFacilityRelationType_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<tc_TCAccountFacilityRelationType_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<tc_TCAccountFacilityRelationType_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<tc_TCAccountFacilityRelationType_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<tc_TCAccountFacilityRelationType_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<tc_TCAccountFacilityRelationType_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<tc_TCAccountFacilityRelationType_Select, { statecode: tc_tcaccountfacilityrelationtype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<tc_TCAccountFacilityRelationType_Select, { statuscode: tc_tcaccountfacilityrelationtype_statuscode | null }, { statuscode_formatted?: string }>;
  tc_accountfacilityrelationtypeelbl: WebAttribute<tc_TCAccountFacilityRelationType_Select, { tc_accountfacilityrelationtypeelbl: string | null }, {  }>;
  tc_accountfacilityrelationtypeflbl: WebAttribute<tc_TCAccountFacilityRelationType_Select, { tc_accountfacilityrelationtypeflbl: string | null }, {  }>;
  tc_name: WebAttribute<tc_TCAccountFacilityRelationType_Select, { tc_name: string | null }, {  }>;
  tc_tcaccountfacilityrelationtypeid: WebAttribute<tc_TCAccountFacilityRelationType_Select, { tc_tcaccountfacilityrelationtypeid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<tc_TCAccountFacilityRelationType_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<tc_TCAccountFacilityRelationType_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<tc_TCAccountFacilityRelationType_Select, { versionnumber: number | null }, {  }>;
}
interface tc_TCAccountFacilityRelationType_Filter {
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
  statecode: tc_tcaccountfacilityrelationtype_statecode;
  statuscode: tc_tcaccountfacilityrelationtype_statuscode;
  tc_accountfacilityrelationtypeelbl: string;
  tc_accountfacilityrelationtypeflbl: string;
  tc_name: string;
  tc_tcaccountfacilityrelationtypeid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface tc_TCAccountFacilityRelationType_Expand {
  ownerid: WebExpand<tc_TCAccountFacilityRelationType_Expand, Team_Select, Team_Filter, { ownerid: Team_Result }>;
  owningteam: WebExpand<tc_TCAccountFacilityRelationType_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  tc_ACFacilityAccounts_TCAccountFacilityRe: WebExpand<tc_TCAccountFacilityRelationType_Expand, tc_ACFacilityAccounts_Select, tc_ACFacilityAccounts_Filter, { tc_ACFacilityAccounts_TCAccountFacilityRe: tc_ACFacilityAccounts_Result[] }>;
  tc_ACFacilityLocationAccount_TCAccountFac: WebExpand<tc_TCAccountFacilityRelationType_Expand, tc_ACFacilityLocationAccount_Select, tc_ACFacilityLocationAccount_Filter, { tc_ACFacilityLocationAccount_TCAccountFac: tc_ACFacilityLocationAccount_Result[] }>;
}
interface tc_TCAccountFacilityRelationType_FormattedResult {
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
interface tc_TCAccountFacilityRelationType_Result extends tc_TCAccountFacilityRelationType_Base, tc_TCAccountFacilityRelationType_Relationships {
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
interface tc_TCAccountFacilityRelationType_RelatedOne {
  ownerid: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface tc_TCAccountFacilityRelationType_RelatedMany {
  tc_ACFacilityAccounts_TCAccountFacilityRe: WebMappingRetrieve<tc_ACFacilityAccounts_Select,tc_ACFacilityAccounts_Expand,tc_ACFacilityAccounts_Filter,tc_ACFacilityAccounts_Fixed,tc_ACFacilityAccounts_Result,tc_ACFacilityAccounts_FormattedResult>;
  tc_ACFacilityLocationAccount_TCAccountFac: WebMappingRetrieve<tc_ACFacilityLocationAccount_Select,tc_ACFacilityLocationAccount_Expand,tc_ACFacilityLocationAccount_Filter,tc_ACFacilityLocationAccount_Fixed,tc_ACFacilityLocationAccount_Result,tc_ACFacilityLocationAccount_FormattedResult>;
}
interface WebEntitiesRetrieve {
  tc_tcaccountfacilityrelationtypes: WebMappingRetrieve<tc_TCAccountFacilityRelationType_Select,tc_TCAccountFacilityRelationType_Expand,tc_TCAccountFacilityRelationType_Filter,tc_TCAccountFacilityRelationType_Fixed,tc_TCAccountFacilityRelationType_Result,tc_TCAccountFacilityRelationType_FormattedResult>;
}
interface WebEntitiesRelated {
  tc_tcaccountfacilityrelationtypes: WebMappingRelated<tc_TCAccountFacilityRelationType_RelatedOne,tc_TCAccountFacilityRelationType_RelatedMany>;
}
interface WebEntitiesCUDA {
  tc_tcaccountfacilityrelationtypes: WebMappingCUDA<tc_TCAccountFacilityRelationType_Create,tc_TCAccountFacilityRelationType_Update,tc_TCAccountFacilityRelationType_Select>;
}
