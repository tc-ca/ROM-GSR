interface tc_ACFacilityAccounts_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: tc_acfacilityaccounts_statecode | null;
  statuscode?: tc_acfacilityaccounts_statuscode | null;
  tc_acfacilityaccountsid?: string | null;
  tc_name?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface tc_ACFacilityAccounts_Relationships {
  tc_ACFacilityId?: tc_ACFacility_Result | null;
  tc_AccountId?: Account_Result | null;
  tc_TCAccountFacilityRelationTypeId?: tc_TCAccountFacilityRelationType_Result | null;
}
interface tc_ACFacilityAccounts extends tc_ACFacilityAccounts_Base, tc_ACFacilityAccounts_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  tc_ACFacilityId_bind$tc_acfacilities?: string | null;
  tc_AccountId_bind$accounts?: string | null;
  tc_TCAccountFacilityRelationTypeId_bind$tc_tcaccountfacilityrelationtypes?: string | null;
}
interface tc_ACFacilityAccounts_Create extends tc_ACFacilityAccounts {
}
interface tc_ACFacilityAccounts_Update extends tc_ACFacilityAccounts {
}
interface tc_ACFacilityAccounts_Select {
  createdby_guid: WebAttribute<tc_ACFacilityAccounts_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<tc_ACFacilityAccounts_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<tc_ACFacilityAccounts_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<tc_ACFacilityAccounts_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<tc_ACFacilityAccounts_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<tc_ACFacilityAccounts_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<tc_ACFacilityAccounts_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<tc_ACFacilityAccounts_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<tc_ACFacilityAccounts_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<tc_ACFacilityAccounts_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<tc_ACFacilityAccounts_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<tc_ACFacilityAccounts_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<tc_ACFacilityAccounts_Select, { statecode: tc_acfacilityaccounts_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<tc_ACFacilityAccounts_Select, { statuscode: tc_acfacilityaccounts_statuscode | null }, { statuscode_formatted?: string }>;
  tc_accountid_guid: WebAttribute<tc_ACFacilityAccounts_Select, { tc_accountid_guid: string | null }, { tc_accountid_formatted?: string }>;
  tc_acfacilityaccountsid: WebAttribute<tc_ACFacilityAccounts_Select, { tc_acfacilityaccountsid: string | null }, {  }>;
  tc_acfacilityid_guid: WebAttribute<tc_ACFacilityAccounts_Select, { tc_acfacilityid_guid: string | null }, { tc_acfacilityid_formatted?: string }>;
  tc_name: WebAttribute<tc_ACFacilityAccounts_Select, { tc_name: string | null }, {  }>;
  tc_tcaccountfacilityrelationtypeid_guid: WebAttribute<tc_ACFacilityAccounts_Select, { tc_tcaccountfacilityrelationtypeid_guid: string | null }, { tc_tcaccountfacilityrelationtypeid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<tc_ACFacilityAccounts_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<tc_ACFacilityAccounts_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<tc_ACFacilityAccounts_Select, { versionnumber: number | null }, {  }>;
}
interface tc_ACFacilityAccounts_Filter {
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
  statecode: tc_acfacilityaccounts_statecode;
  statuscode: tc_acfacilityaccounts_statuscode;
  tc_accountid_guid: XQW.Guid;
  tc_acfacilityaccountsid: XQW.Guid;
  tc_acfacilityid_guid: XQW.Guid;
  tc_name: string;
  tc_tcaccountfacilityrelationtypeid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface tc_ACFacilityAccounts_Expand {
  tc_ACFacilityId: WebExpand<tc_ACFacilityAccounts_Expand, tc_ACFacility_Select, tc_ACFacility_Filter, { tc_ACFacilityId: tc_ACFacility_Result }>;
  tc_AccountId: WebExpand<tc_ACFacilityAccounts_Expand, Account_Select, Account_Filter, { tc_AccountId: Account_Result }>;
  tc_TCAccountFacilityRelationTypeId: WebExpand<tc_ACFacilityAccounts_Expand, tc_TCAccountFacilityRelationType_Select, tc_TCAccountFacilityRelationType_Filter, { tc_TCAccountFacilityRelationTypeId: tc_TCAccountFacilityRelationType_Result }>;
}
interface tc_ACFacilityAccounts_FormattedResult {
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
  tc_accountid_formatted?: string;
  tc_acfacilityid_formatted?: string;
  tc_tcaccountfacilityrelationtypeid_formatted?: string;
}
interface tc_ACFacilityAccounts_Result extends tc_ACFacilityAccounts_Base, tc_ACFacilityAccounts_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  tc_accountid_guid: string | null;
  tc_acfacilityid_guid: string | null;
  tc_tcaccountfacilityrelationtypeid_guid: string | null;
}
interface tc_ACFacilityAccounts_RelatedOne {
  tc_ACFacilityId: WebMappingRetrieve<tc_ACFacility_Select,tc_ACFacility_Expand,tc_ACFacility_Filter,tc_ACFacility_Fixed,tc_ACFacility_Result,tc_ACFacility_FormattedResult>;
  tc_AccountId: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  tc_TCAccountFacilityRelationTypeId: WebMappingRetrieve<tc_TCAccountFacilityRelationType_Select,tc_TCAccountFacilityRelationType_Expand,tc_TCAccountFacilityRelationType_Filter,tc_TCAccountFacilityRelationType_Fixed,tc_TCAccountFacilityRelationType_Result,tc_TCAccountFacilityRelationType_FormattedResult>;
}
interface tc_ACFacilityAccounts_RelatedMany {
}
interface WebEntitiesRetrieve {
  tc_acfacilityaccountses: WebMappingRetrieve<tc_ACFacilityAccounts_Select,tc_ACFacilityAccounts_Expand,tc_ACFacilityAccounts_Filter,tc_ACFacilityAccounts_Fixed,tc_ACFacilityAccounts_Result,tc_ACFacilityAccounts_FormattedResult>;
}
interface WebEntitiesRelated {
  tc_acfacilityaccountses: WebMappingRelated<tc_ACFacilityAccounts_RelatedOne,tc_ACFacilityAccounts_RelatedMany>;
}
interface WebEntitiesCUDA {
  tc_acfacilityaccountses: WebMappingCUDA<tc_ACFacilityAccounts_Create,tc_ACFacilityAccounts_Update,tc_ACFacilityAccounts_Select>;
}
