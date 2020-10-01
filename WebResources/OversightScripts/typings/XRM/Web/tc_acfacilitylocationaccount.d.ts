interface tc_ACFacilityLocationAccount_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: tc_acfacilitylocationaccount_statecode | null;
  statuscode?: tc_acfacilitylocationaccount_statuscode | null;
  tc_acfacilitylocationaccountid?: string | null;
  tc_name?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface tc_ACFacilityLocationAccount_Relationships {
  tc_ACFacilityLocationId?: tc_ACFacilityLocation_Result | null;
  tc_TCAccountFacilityRelationTypeId?: tc_TCAccountFacilityRelationType_Result | null;
}
interface tc_ACFacilityLocationAccount extends tc_ACFacilityLocationAccount_Base, tc_ACFacilityLocationAccount_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  tc_ACFacilityLocationId_bind$tc_acfacilitylocations?: string | null;
  tc_TCAccountFacilityRelationTypeId_bind$tc_tcaccountfacilityrelationtypes?: string | null;
  tc_accountid_bind$accounts?: string | null;
}
interface tc_ACFacilityLocationAccount_Create extends tc_ACFacilityLocationAccount {
}
interface tc_ACFacilityLocationAccount_Update extends tc_ACFacilityLocationAccount {
}
interface tc_ACFacilityLocationAccount_Select {
  createdby_guid: WebAttribute<tc_ACFacilityLocationAccount_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<tc_ACFacilityLocationAccount_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<tc_ACFacilityLocationAccount_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<tc_ACFacilityLocationAccount_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<tc_ACFacilityLocationAccount_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<tc_ACFacilityLocationAccount_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<tc_ACFacilityLocationAccount_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<tc_ACFacilityLocationAccount_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<tc_ACFacilityLocationAccount_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<tc_ACFacilityLocationAccount_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<tc_ACFacilityLocationAccount_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<tc_ACFacilityLocationAccount_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<tc_ACFacilityLocationAccount_Select, { statecode: tc_acfacilitylocationaccount_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<tc_ACFacilityLocationAccount_Select, { statuscode: tc_acfacilitylocationaccount_statuscode | null }, { statuscode_formatted?: string }>;
  tc_accountid_guid: WebAttribute<tc_ACFacilityLocationAccount_Select, { tc_accountid_guid: string | null }, { tc_accountid_formatted?: string }>;
  tc_acfacilitylocationaccountid: WebAttribute<tc_ACFacilityLocationAccount_Select, { tc_acfacilitylocationaccountid: string | null }, {  }>;
  tc_acfacilitylocationid_guid: WebAttribute<tc_ACFacilityLocationAccount_Select, { tc_acfacilitylocationid_guid: string | null }, { tc_acfacilitylocationid_formatted?: string }>;
  tc_name: WebAttribute<tc_ACFacilityLocationAccount_Select, { tc_name: string | null }, {  }>;
  tc_tcaccountfacilityrelationtypeid_guid: WebAttribute<tc_ACFacilityLocationAccount_Select, { tc_tcaccountfacilityrelationtypeid_guid: string | null }, { tc_tcaccountfacilityrelationtypeid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<tc_ACFacilityLocationAccount_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<tc_ACFacilityLocationAccount_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<tc_ACFacilityLocationAccount_Select, { versionnumber: number | null }, {  }>;
}
interface tc_ACFacilityLocationAccount_Filter {
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
  statecode: tc_acfacilitylocationaccount_statecode;
  statuscode: tc_acfacilitylocationaccount_statuscode;
  tc_accountid_guid: XQW.Guid;
  tc_acfacilitylocationaccountid: XQW.Guid;
  tc_acfacilitylocationid_guid: XQW.Guid;
  tc_name: string;
  tc_tcaccountfacilityrelationtypeid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface tc_ACFacilityLocationAccount_Expand {
  tc_ACFacilityLocationId: WebExpand<tc_ACFacilityLocationAccount_Expand, tc_ACFacilityLocation_Select, tc_ACFacilityLocation_Filter, { tc_ACFacilityLocationId: tc_ACFacilityLocation_Result }>;
  tc_TCAccountFacilityRelationTypeId: WebExpand<tc_ACFacilityLocationAccount_Expand, tc_TCAccountFacilityRelationType_Select, tc_TCAccountFacilityRelationType_Filter, { tc_TCAccountFacilityRelationTypeId: tc_TCAccountFacilityRelationType_Result }>;
  tc_accountid: WebExpand<tc_ACFacilityLocationAccount_Expand, Account_Select, Account_Filter, { tc_accountid: Account_Result }>;
}
interface tc_ACFacilityLocationAccount_FormattedResult {
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
  tc_acfacilitylocationid_formatted?: string;
  tc_tcaccountfacilityrelationtypeid_formatted?: string;
}
interface tc_ACFacilityLocationAccount_Result extends tc_ACFacilityLocationAccount_Base, tc_ACFacilityLocationAccount_Relationships {
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
  tc_acfacilitylocationid_guid: string | null;
  tc_tcaccountfacilityrelationtypeid_guid: string | null;
}
interface tc_ACFacilityLocationAccount_RelatedOne {
  tc_ACFacilityLocationId: WebMappingRetrieve<tc_ACFacilityLocation_Select,tc_ACFacilityLocation_Expand,tc_ACFacilityLocation_Filter,tc_ACFacilityLocation_Fixed,tc_ACFacilityLocation_Result,tc_ACFacilityLocation_FormattedResult>;
  tc_TCAccountFacilityRelationTypeId: WebMappingRetrieve<tc_TCAccountFacilityRelationType_Select,tc_TCAccountFacilityRelationType_Expand,tc_TCAccountFacilityRelationType_Filter,tc_TCAccountFacilityRelationType_Fixed,tc_TCAccountFacilityRelationType_Result,tc_TCAccountFacilityRelationType_FormattedResult>;
  tc_accountid: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
}
interface tc_ACFacilityLocationAccount_RelatedMany {
}
interface WebEntitiesRetrieve {
  tc_acfacilitylocationaccounts: WebMappingRetrieve<tc_ACFacilityLocationAccount_Select,tc_ACFacilityLocationAccount_Expand,tc_ACFacilityLocationAccount_Filter,tc_ACFacilityLocationAccount_Fixed,tc_ACFacilityLocationAccount_Result,tc_ACFacilityLocationAccount_FormattedResult>;
}
interface WebEntitiesRelated {
  tc_acfacilitylocationaccounts: WebMappingRelated<tc_ACFacilityLocationAccount_RelatedOne,tc_ACFacilityLocationAccount_RelatedMany>;
}
interface WebEntitiesCUDA {
  tc_acfacilitylocationaccounts: WebMappingCUDA<tc_ACFacilityLocationAccount_Create,tc_ACFacilityLocationAccount_Update,tc_ACFacilityLocationAccount_Select>;
}
