declare namespace web {
  interface tc_Province_Base extends WebEntity {
    createdon?: Date | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    overriddencreatedon?: Date | null;
    statecode?: tc_province_statecode | null;
    statuscode?: tc_province_statuscode | null;
    tc_provincecode?: string | null;
    tc_provinceid?: string | null;
    tc_provincename?: string | null;
    tc_provincenameenglish?: string | null;
    tc_provincenamefrench?: string | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface tc_Province_Relationships {
  }
  interface tc_Province extends tc_Province_Base, tc_Province_Relationships {
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
    tc_Country_bind$tc_countries?: string | null;
  }
  interface tc_Province_Create extends tc_Province {
  }
  interface tc_Province_Update extends tc_Province {
  }
  interface tc_Province_Select {
    createdby_guid: WebAttribute<tc_Province_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<tc_Province_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<tc_Province_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    importsequencenumber: WebAttribute<tc_Province_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<tc_Province_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<tc_Province_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<tc_Province_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    overriddencreatedon: WebAttribute<tc_Province_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<tc_Province_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<tc_Province_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<tc_Province_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<tc_Province_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    statecode: WebAttribute<tc_Province_Select, { statecode: tc_province_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<tc_Province_Select, { statuscode: tc_province_statuscode | null }, { statuscode_formatted?: string }>;
    tc_country_guid: WebAttribute<tc_Province_Select, { tc_country_guid: string | null }, { tc_country_formatted?: string }>;
    tc_provincecode: WebAttribute<tc_Province_Select, { tc_provincecode: string | null }, {  }>;
    tc_provinceid: WebAttribute<tc_Province_Select, { tc_provinceid: string | null }, {  }>;
    tc_provincename: WebAttribute<tc_Province_Select, { tc_provincename: string | null }, {  }>;
    tc_provincenameenglish: WebAttribute<tc_Province_Select, { tc_provincenameenglish: string | null }, {  }>;
    tc_provincenamefrench: WebAttribute<tc_Province_Select, { tc_provincenamefrench: string | null }, {  }>;
    timezoneruleversionnumber: WebAttribute<tc_Province_Select, { timezoneruleversionnumber: number | null }, {  }>;
    utcconversiontimezonecode: WebAttribute<tc_Province_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<tc_Province_Select, { versionnumber: number | null }, {  }>;
  }
  interface tc_Province_Filter {
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
    statecode: tc_province_statecode;
    statuscode: tc_province_statuscode;
    tc_country_guid: XQW.Guid;
    tc_provincecode: string;
    tc_provinceid: XQW.Guid;
    tc_provincename: string;
    tc_provincenameenglish: string;
    tc_provincenamefrench: string;
    timezoneruleversionnumber: number;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface tc_Province_Expand {
  }
  interface tc_Province_FormattedResult {
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
    tc_country_formatted?: string;
  }
  interface tc_Province_Result extends tc_Province_Base, tc_Province_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
    tc_country_guid: string | null;
  }
  interface tc_Province_RelatedOne {
  }
  interface tc_Province_RelatedMany {
  }
}
interface WebEntitiesRetrieve {
  tc_provinces: WebMappingRetrieve<web.tc_Province_Select,web.tc_Province_Expand,web.tc_Province_Filter,web.tc_Province_Fixed,web.tc_Province_Result,web.tc_Province_FormattedResult>;
}
interface WebEntitiesRelated {
  tc_provinces: WebMappingRelated<web.tc_Province_RelatedOne,web.tc_Province_RelatedMany>;
}
interface WebEntitiesCUDA {
  tc_provinces: WebMappingCUDA<web.tc_Province_Create,web.tc_Province_Update,web.tc_Province_Select>;
}
