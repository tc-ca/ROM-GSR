interface tc_TCFiscalYear_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: tc_tcfiscalyear_statecode | null;
  statuscode?: tc_tcfiscalyear_statuscode | null;
  tc_fiscalend?: Date | null;
  tc_fiscalstart?: Date | null;
  tc_fiscalyearlonglbl?: string | null;
  tc_fiscalyearnum?: string | null;
  tc_iscurrentfiscalyear?: boolean | null;
  tc_name?: string | null;
  tc_tcfiscalyearid?: string | null;
  tc_test_number?: number | null;
  tc_todaysdate?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface tc_TCFiscalYear_Relationships {
  ovs_UnplannedForecast_FiscalYear_tc_TCFis?: ovs_UnplannedForecast_Result[] | null;
  ovs_msdyn_workorder_FiscalYear_tc_TCFiscalYea?: msdyn_workorder_Result[] | null;
  ovs_tc_tcfiscalyear_bookableresourcebooking?: BookableResourceBooking_Result[] | null;
  tc_TCFiscalPeriod_TCFiscalYear?: tc_TCFiscalPeriod_Result[] | null;
  tc_TCFiscalQuarter_TCFiscalYear?: tc_TCFiscalQuarter_Result[] | null;
}
interface tc_TCFiscalYear extends tc_TCFiscalYear_Base, tc_TCFiscalYear_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface tc_TCFiscalYear_Create extends tc_TCFiscalYear {
}
interface tc_TCFiscalYear_Update extends tc_TCFiscalYear {
}
interface tc_TCFiscalYear_Select {
  createdby_guid: WebAttribute<tc_TCFiscalYear_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<tc_TCFiscalYear_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<tc_TCFiscalYear_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<tc_TCFiscalYear_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<tc_TCFiscalYear_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<tc_TCFiscalYear_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<tc_TCFiscalYear_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<tc_TCFiscalYear_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<tc_TCFiscalYear_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<tc_TCFiscalYear_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<tc_TCFiscalYear_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<tc_TCFiscalYear_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<tc_TCFiscalYear_Select, { statecode: tc_tcfiscalyear_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<tc_TCFiscalYear_Select, { statuscode: tc_tcfiscalyear_statuscode | null }, { statuscode_formatted?: string }>;
  tc_fiscalend: WebAttribute<tc_TCFiscalYear_Select, { tc_fiscalend: Date | null }, { tc_fiscalend_formatted?: string }>;
  tc_fiscalstart: WebAttribute<tc_TCFiscalYear_Select, { tc_fiscalstart: Date | null }, { tc_fiscalstart_formatted?: string }>;
  tc_fiscalyearlonglbl: WebAttribute<tc_TCFiscalYear_Select, { tc_fiscalyearlonglbl: string | null }, {  }>;
  tc_fiscalyearnum: WebAttribute<tc_TCFiscalYear_Select, { tc_fiscalyearnum: string | null }, {  }>;
  tc_iscurrentfiscalyear: WebAttribute<tc_TCFiscalYear_Select, { tc_iscurrentfiscalyear: boolean | null }, {  }>;
  tc_name: WebAttribute<tc_TCFiscalYear_Select, { tc_name: string | null }, {  }>;
  tc_tcfiscalyearid: WebAttribute<tc_TCFiscalYear_Select, { tc_tcfiscalyearid: string | null }, {  }>;
  tc_test_number: WebAttribute<tc_TCFiscalYear_Select, { tc_test_number: number | null }, {  }>;
  tc_todaysdate: WebAttribute<tc_TCFiscalYear_Select, { tc_todaysdate: Date | null }, { tc_todaysdate_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<tc_TCFiscalYear_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<tc_TCFiscalYear_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<tc_TCFiscalYear_Select, { versionnumber: number | null }, {  }>;
}
interface tc_TCFiscalYear_Filter {
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
  statecode: tc_tcfiscalyear_statecode;
  statuscode: tc_tcfiscalyear_statuscode;
  tc_fiscalend: Date;
  tc_fiscalstart: Date;
  tc_fiscalyearlonglbl: string;
  tc_fiscalyearnum: string;
  tc_iscurrentfiscalyear: boolean;
  tc_name: string;
  tc_tcfiscalyearid: XQW.Guid;
  tc_test_number: number;
  tc_todaysdate: Date;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface tc_TCFiscalYear_Expand {
  ovs_UnplannedForecast_FiscalYear_tc_TCFis: WebExpand<tc_TCFiscalYear_Expand, ovs_UnplannedForecast_Select, ovs_UnplannedForecast_Filter, { ovs_UnplannedForecast_FiscalYear_tc_TCFis: ovs_UnplannedForecast_Result[] }>;
  ovs_msdyn_workorder_FiscalYear_tc_TCFiscalYea: WebExpand<tc_TCFiscalYear_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { ovs_msdyn_workorder_FiscalYear_tc_TCFiscalYea: msdyn_workorder_Result[] }>;
  ovs_tc_tcfiscalyear_bookableresourcebooking: WebExpand<tc_TCFiscalYear_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { ovs_tc_tcfiscalyear_bookableresourcebooking: BookableResourceBooking_Result[] }>;
  ownerid: WebExpand<tc_TCFiscalYear_Expand, Team_Select, Team_Filter, { ownerid: Team_Result }>;
  owningteam: WebExpand<tc_TCFiscalYear_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  tc_TCFiscalPeriod_TCFiscalYear: WebExpand<tc_TCFiscalYear_Expand, tc_TCFiscalPeriod_Select, tc_TCFiscalPeriod_Filter, { tc_TCFiscalPeriod_TCFiscalYear: tc_TCFiscalPeriod_Result[] }>;
  tc_TCFiscalQuarter_TCFiscalYear: WebExpand<tc_TCFiscalYear_Expand, tc_TCFiscalQuarter_Select, tc_TCFiscalQuarter_Filter, { tc_TCFiscalQuarter_TCFiscalYear: tc_TCFiscalQuarter_Result[] }>;
}
interface tc_TCFiscalYear_FormattedResult {
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
  tc_fiscalend_formatted?: string;
  tc_fiscalstart_formatted?: string;
  tc_todaysdate_formatted?: string;
}
interface tc_TCFiscalYear_Result extends tc_TCFiscalYear_Base, tc_TCFiscalYear_Relationships {
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
interface tc_TCFiscalYear_RelatedOne {
  ownerid: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface tc_TCFiscalYear_RelatedMany {
  ovs_UnplannedForecast_FiscalYear_tc_TCFis: WebMappingRetrieve<ovs_UnplannedForecast_Select,ovs_UnplannedForecast_Expand,ovs_UnplannedForecast_Filter,ovs_UnplannedForecast_Fixed,ovs_UnplannedForecast_Result,ovs_UnplannedForecast_FormattedResult>;
  ovs_msdyn_workorder_FiscalYear_tc_TCFiscalYea: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  ovs_tc_tcfiscalyear_bookableresourcebooking: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  tc_TCFiscalPeriod_TCFiscalYear: WebMappingRetrieve<tc_TCFiscalPeriod_Select,tc_TCFiscalPeriod_Expand,tc_TCFiscalPeriod_Filter,tc_TCFiscalPeriod_Fixed,tc_TCFiscalPeriod_Result,tc_TCFiscalPeriod_FormattedResult>;
  tc_TCFiscalQuarter_TCFiscalYear: WebMappingRetrieve<tc_TCFiscalQuarter_Select,tc_TCFiscalQuarter_Expand,tc_TCFiscalQuarter_Filter,tc_TCFiscalQuarter_Fixed,tc_TCFiscalQuarter_Result,tc_TCFiscalQuarter_FormattedResult>;
}
interface WebEntitiesRetrieve {
  tc_tcfiscalyears: WebMappingRetrieve<tc_TCFiscalYear_Select,tc_TCFiscalYear_Expand,tc_TCFiscalYear_Filter,tc_TCFiscalYear_Fixed,tc_TCFiscalYear_Result,tc_TCFiscalYear_FormattedResult>;
}
interface WebEntitiesRelated {
  tc_tcfiscalyears: WebMappingRelated<tc_TCFiscalYear_RelatedOne,tc_TCFiscalYear_RelatedMany>;
}
interface WebEntitiesCUDA {
  tc_tcfiscalyears: WebMappingCUDA<tc_TCFiscalYear_Create,tc_TCFiscalYear_Update,tc_TCFiscalYear_Select>;
}
