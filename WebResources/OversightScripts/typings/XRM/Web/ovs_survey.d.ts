interface ovs_Survey_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  ovs_description?: string | null;
  ovs_effectivedate?: Date | null;
  ovs_name?: string | null;
  ovs_surveydefinition?: string | null;
  ovs_surveyid?: string | null;
  statecode?: ovs_survey_statecode | null;
  statuscode?: ovs_survey_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ovs_Survey_Relationships {
  ovs_msdyn_servicetasktype_Survey_ovs_Survey?: msdyn_servicetasktype_Result[] | null;
}
interface ovs_Survey extends ovs_Survey_Base, ovs_Survey_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface ovs_Survey_Create extends ovs_Survey {
}
interface ovs_Survey_Update extends ovs_Survey {
}
interface ovs_Survey_Select {
  createdby_guid: WebAttribute<ovs_Survey_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ovs_Survey_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ovs_Survey_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<ovs_Survey_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ovs_Survey_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ovs_Survey_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ovs_Survey_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<ovs_Survey_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ovs_description: WebAttribute<ovs_Survey_Select, { ovs_description: string | null }, {  }>;
  ovs_effectivedate: WebAttribute<ovs_Survey_Select, { ovs_effectivedate: Date | null }, { ovs_effectivedate_formatted?: string }>;
  ovs_name: WebAttribute<ovs_Survey_Select, { ovs_name: string | null }, {  }>;
  ovs_surveydefinition: WebAttribute<ovs_Survey_Select, { ovs_surveydefinition: string | null }, {  }>;
  ovs_surveyid: WebAttribute<ovs_Survey_Select, { ovs_surveyid: string | null }, {  }>;
  ownerid_guid: WebAttribute<ovs_Survey_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ovs_Survey_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ovs_Survey_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ovs_Survey_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<ovs_Survey_Select, { statecode: ovs_survey_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ovs_Survey_Select, { statuscode: ovs_survey_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ovs_Survey_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ovs_Survey_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ovs_Survey_Select, { versionnumber: number | null }, {  }>;
}
interface ovs_Survey_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ovs_description: string;
  ovs_effectivedate: Date;
  ovs_name: string;
  ovs_surveydefinition: string;
  ovs_surveyid: XQW.Guid;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: ovs_survey_statecode;
  statuscode: ovs_survey_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ovs_Survey_Expand {
  ovs_msdyn_servicetasktype_Survey_ovs_Survey: WebExpand<ovs_Survey_Expand, msdyn_servicetasktype_Select, msdyn_servicetasktype_Filter, { ovs_msdyn_servicetasktype_Survey_ovs_Survey: msdyn_servicetasktype_Result[] }>;
  ownerid: WebExpand<ovs_Survey_Expand, Team_Select, Team_Filter, { ownerid: Team_Result }>;
  owningteam: WebExpand<ovs_Survey_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
}
interface ovs_Survey_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ovs_effectivedate_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ovs_Survey_Result extends ovs_Survey_Base, ovs_Survey_Relationships {
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
interface ovs_Survey_RelatedOne {
  ownerid: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface ovs_Survey_RelatedMany {
  ovs_msdyn_servicetasktype_Survey_ovs_Survey: WebMappingRetrieve<msdyn_servicetasktype_Select,msdyn_servicetasktype_Expand,msdyn_servicetasktype_Filter,msdyn_servicetasktype_Fixed,msdyn_servicetasktype_Result,msdyn_servicetasktype_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ovs_surveies: WebMappingRetrieve<ovs_Survey_Select,ovs_Survey_Expand,ovs_Survey_Filter,ovs_Survey_Fixed,ovs_Survey_Result,ovs_Survey_FormattedResult>;
}
interface WebEntitiesRelated {
  ovs_surveies: WebMappingRelated<ovs_Survey_RelatedOne,ovs_Survey_RelatedMany>;
}
interface WebEntitiesCUDA {
  ovs_surveies: WebMappingCUDA<ovs_Survey_Create,ovs_Survey_Update,ovs_Survey_Select>;
}
