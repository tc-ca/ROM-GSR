declare namespace web {
  interface tc_TCMonth_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: tc_tcmonth_statecode | null;
    statuscode?: tc_tcmonth_statuscode | null;
    tc_fiscalperiodnum?: number | null;
    tc_monthabbrelbl?: string | null;
    tc_monthabbrflbl?: string | null;
    tc_monthenm?: string | null;
    tc_monthfnm?: string | null;
    tc_monthnum?: number | null;
    tc_name?: string | null;
    tc_tcmonthid?: string | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface tc_TCMonth_Relationships {
    tc_TCFiscalPeriod_TCMonth?: tc_TCFiscalPeriod_Result[] | null;
  }
  interface tc_TCMonth extends tc_TCMonth_Base, tc_TCMonth_Relationships {
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
  }
  interface tc_TCMonth_Create extends tc_TCMonth {
  }
  interface tc_TCMonth_Update extends tc_TCMonth {
  }
  interface tc_TCMonth_Select {
    createdby_guid: WebAttribute<tc_TCMonth_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<tc_TCMonth_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<tc_TCMonth_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<tc_TCMonth_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<tc_TCMonth_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<tc_TCMonth_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<tc_TCMonth_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<tc_TCMonth_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<tc_TCMonth_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<tc_TCMonth_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<tc_TCMonth_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<tc_TCMonth_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<tc_TCMonth_Select, { statecode: tc_tcmonth_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<tc_TCMonth_Select, { statuscode: tc_tcmonth_statuscode | null }, { statuscode_formatted?: string }>;
    tc_fiscalperiodnum: WebAttribute<tc_TCMonth_Select, { tc_fiscalperiodnum: number | null }, {  }>;
    tc_monthabbrelbl: WebAttribute<tc_TCMonth_Select, { tc_monthabbrelbl: string | null }, {  }>;
    tc_monthabbrflbl: WebAttribute<tc_TCMonth_Select, { tc_monthabbrflbl: string | null }, {  }>;
    tc_monthenm: WebAttribute<tc_TCMonth_Select, { tc_monthenm: string | null }, {  }>;
    tc_monthfnm: WebAttribute<tc_TCMonth_Select, { tc_monthfnm: string | null }, {  }>;
    tc_monthnum: WebAttribute<tc_TCMonth_Select, { tc_monthnum: number | null }, {  }>;
    tc_name: WebAttribute<tc_TCMonth_Select, { tc_name: string | null }, {  }>;
    tc_tcmonthid: WebAttribute<tc_TCMonth_Select, { tc_tcmonthid: string | null }, {  }>;
    timezoneruleversionnumber: WebAttribute<tc_TCMonth_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<tc_TCMonth_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<tc_TCMonth_Select, { versionnumber: number | null }, {  }>;
  }
  interface tc_TCMonth_Filter {
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
    statecode: tc_tcmonth_statecode;
    statuscode: tc_tcmonth_statuscode;
    tc_fiscalperiodnum: number;
    tc_monthabbrelbl: string;
    tc_monthabbrflbl: string;
    tc_monthenm: string;
    tc_monthfnm: string;
    tc_monthnum: number;
    tc_name: string;
    tc_tcmonthid: XQW.Guid;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface tc_TCMonth_Expand {
    tc_TCFiscalPeriod_TCMonth: WebExpand<tc_TCMonth_Expand, tc_TCFiscalPeriod_Select, tc_TCFiscalPeriod_Filter, { tc_TCFiscalPeriod_TCMonth: tc_TCFiscalPeriod_Result[] }>;
  }
  interface tc_TCMonth_FormattedResult {
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
  interface tc_TCMonth_Result extends tc_TCMonth_Base, tc_TCMonth_Relationships {
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
  interface tc_TCMonth_RelatedOne {
  }
  interface tc_TCMonth_RelatedMany {
    tc_TCFiscalPeriod_TCMonth: WebMappingRetrieve<web.tc_TCFiscalPeriod_Select,web.tc_TCFiscalPeriod_Expand,web.tc_TCFiscalPeriod_Filter,web.tc_TCFiscalPeriod_Fixed,web.tc_TCFiscalPeriod_Result,web.tc_TCFiscalPeriod_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  tc_tcmonths: WebMappingRetrieve<web.tc_TCMonth_Select,web.tc_TCMonth_Expand,web.tc_TCMonth_Filter,web.tc_TCMonth_Fixed,web.tc_TCMonth_Result,web.tc_TCMonth_FormattedResult>;
}
interface WebEntitiesRelated {
  tc_tcmonths: WebMappingRelated<web.tc_TCMonth_RelatedOne,web.tc_TCMonth_RelatedMany>;
}
interface WebEntitiesCUDA {
  tc_tcmonths: WebMappingCUDA<web.tc_TCMonth_Create,web.tc_TCMonth_Update,web.tc_TCMonth_Select>;
}
