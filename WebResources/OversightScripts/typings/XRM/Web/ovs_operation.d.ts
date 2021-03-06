interface ovs_operation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  ovs_name?: string | null;
  ovs_operationid?: string | null;
  ovs_operationtype?: ovs_operation_ovs_operationtype | null;
  statecode?: ovs_operation_statecode | null;
  statuscode?: ovs_operation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ovs_operation_Relationships {
  ovs_RegulatedEntityId?: Account_Result | null;
  ovs_SiteId?: Account_Result | null;
}
interface ovs_operation extends ovs_operation_Base, ovs_operation_Relationships {
  ovs_RegulatedEntityId_bind$accounts?: string | null;
  ovs_SiteId_bind$accounts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface ovs_operation_Create extends ovs_operation {
}
interface ovs_operation_Update extends ovs_operation {
}
interface ovs_operation_Select {
  createdby_guid: WebAttribute<ovs_operation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ovs_operation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ovs_operation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<ovs_operation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ovs_operation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ovs_operation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ovs_operation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<ovs_operation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ovs_name: WebAttribute<ovs_operation_Select, { ovs_name: string | null }, {  }>;
  ovs_operationid: WebAttribute<ovs_operation_Select, { ovs_operationid: string | null }, {  }>;
  ovs_operationtype: WebAttribute<ovs_operation_Select, { ovs_operationtype: ovs_operation_ovs_operationtype | null }, { ovs_operationtype_formatted?: string }>;
  ovs_regulatedentityid_guid: WebAttribute<ovs_operation_Select, { ovs_regulatedentityid_guid: string | null }, { ovs_regulatedentityid_formatted?: string }>;
  ovs_siteid_guid: WebAttribute<ovs_operation_Select, { ovs_siteid_guid: string | null }, { ovs_siteid_formatted?: string }>;
  ownerid_guid: WebAttribute<ovs_operation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ovs_operation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ovs_operation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ovs_operation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<ovs_operation_Select, { statecode: ovs_operation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ovs_operation_Select, { statuscode: ovs_operation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ovs_operation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ovs_operation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ovs_operation_Select, { versionnumber: number | null }, {  }>;
}
interface ovs_operation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ovs_name: string;
  ovs_operationid: XQW.Guid;
  ovs_operationtype: ovs_operation_ovs_operationtype;
  ovs_regulatedentityid_guid: XQW.Guid;
  ovs_siteid_guid: XQW.Guid;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: ovs_operation_statecode;
  statuscode: ovs_operation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ovs_operation_Expand {
  ovs_RegulatedEntityId: WebExpand<ovs_operation_Expand, Account_Select, Account_Filter, { ovs_RegulatedEntityId: Account_Result }>;
  ovs_SiteId: WebExpand<ovs_operation_Expand, Account_Select, Account_Filter, { ovs_SiteId: Account_Result }>;
  ownerid: WebExpand<ovs_operation_Expand, Team_Select, Team_Filter, { ownerid: Team_Result }>;
  owningteam: WebExpand<ovs_operation_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
}
interface ovs_operation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ovs_operationtype_formatted?: string;
  ovs_regulatedentityid_formatted?: string;
  ovs_siteid_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ovs_operation_Result extends ovs_operation_Base, ovs_operation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ovs_regulatedentityid_guid: string | null;
  ovs_siteid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface ovs_operation_RelatedOne {
  ovs_RegulatedEntityId: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  ovs_SiteId: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  ownerid: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface ovs_operation_RelatedMany {
}
interface WebEntitiesRetrieve {
  ovs_operations: WebMappingRetrieve<ovs_operation_Select,ovs_operation_Expand,ovs_operation_Filter,ovs_operation_Fixed,ovs_operation_Result,ovs_operation_FormattedResult>;
}
interface WebEntitiesRelated {
  ovs_operations: WebMappingRelated<ovs_operation_RelatedOne,ovs_operation_RelatedMany>;
}
interface WebEntitiesCUDA {
  ovs_operations: WebMappingCUDA<ovs_operation_Create,ovs_operation_Update,ovs_operation_Select>;
}
