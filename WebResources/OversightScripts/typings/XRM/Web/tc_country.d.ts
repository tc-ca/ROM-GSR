interface tc_Country_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: tc_country_statecode | null;
  statuscode?: tc_country_statuscode | null;
  tc_countryid?: string | null;
  tc_countryisocodealpha2?: string | null;
  tc_countryisocodealpha3?: string | null;
  tc_countrynameenglish?: string | null;
  tc_countrynamefrench?: string | null;
  tc_name?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface tc_Country_Relationships {
  tc_Province_Country?: tc_Province_Result[] | null;
}
interface tc_Country extends tc_Country_Base, tc_Country_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface tc_Country_Create extends tc_Country {
}
interface tc_Country_Update extends tc_Country {
}
interface tc_Country_Select {
  createdby_guid: WebAttribute<tc_Country_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<tc_Country_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<tc_Country_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<tc_Country_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<tc_Country_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<tc_Country_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<tc_Country_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<tc_Country_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<tc_Country_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<tc_Country_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<tc_Country_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<tc_Country_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<tc_Country_Select, { statecode: tc_country_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<tc_Country_Select, { statuscode: tc_country_statuscode | null }, { statuscode_formatted?: string }>;
  tc_countryid: WebAttribute<tc_Country_Select, { tc_countryid: string | null }, {  }>;
  tc_countryisocodealpha2: WebAttribute<tc_Country_Select, { tc_countryisocodealpha2: string | null }, {  }>;
  tc_countryisocodealpha3: WebAttribute<tc_Country_Select, { tc_countryisocodealpha3: string | null }, {  }>;
  tc_countrynameenglish: WebAttribute<tc_Country_Select, { tc_countrynameenglish: string | null }, {  }>;
  tc_countrynamefrench: WebAttribute<tc_Country_Select, { tc_countrynamefrench: string | null }, {  }>;
  tc_name: WebAttribute<tc_Country_Select, { tc_name: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<tc_Country_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<tc_Country_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<tc_Country_Select, { versionnumber: number | null }, {  }>;
}
interface tc_Country_Filter {
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
  statecode: tc_country_statecode;
  statuscode: tc_country_statuscode;
  tc_countryid: XQW.Guid;
  tc_countryisocodealpha2: string;
  tc_countryisocodealpha3: string;
  tc_countrynameenglish: string;
  tc_countrynamefrench: string;
  tc_name: string;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface tc_Country_Expand {
  ownerid: WebExpand<tc_Country_Expand, Team_Select, Team_Filter, { ownerid: Team_Result }>;
  owningteam: WebExpand<tc_Country_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  tc_Province_Country: WebExpand<tc_Country_Expand, tc_Province_Select, tc_Province_Filter, { tc_Province_Country: tc_Province_Result[] }>;
}
interface tc_Country_FormattedResult {
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
interface tc_Country_Result extends tc_Country_Base, tc_Country_Relationships {
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
interface tc_Country_RelatedOne {
  ownerid: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface tc_Country_RelatedMany {
  tc_Province_Country: WebMappingRetrieve<tc_Province_Select,tc_Province_Expand,tc_Province_Filter,tc_Province_Fixed,tc_Province_Result,tc_Province_FormattedResult>;
}
interface WebEntitiesRetrieve {
  tc_countries: WebMappingRetrieve<tc_Country_Select,tc_Country_Expand,tc_Country_Filter,tc_Country_Fixed,tc_Country_Result,tc_Country_FormattedResult>;
}
interface WebEntitiesRelated {
  tc_countries: WebMappingRelated<tc_Country_RelatedOne,tc_Country_RelatedMany>;
}
interface WebEntitiesCUDA {
  tc_countries: WebMappingCUDA<tc_Country_Create,tc_Country_Update,tc_Country_Select>;
}
