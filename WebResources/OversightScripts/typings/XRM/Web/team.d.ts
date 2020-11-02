interface Team_Base extends WebEntity {
  azureactivedirectoryobjectid?: string | null;
  createdon?: Date | null;
  description?: string | null;
  emailaddress?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  isdefault?: boolean | null;
  membershiptype?: team_membershiptype | null;
  modifiedon?: Date | null;
  name?: string | null;
  organizationid?: string | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  systemmanaged?: boolean | null;
  teamid?: string | null;
  teamtype?: team_type | null;
  traversedpath?: string | null;
  versionnumber?: number | null;
}
interface Team_Relationships {
  OwningTeam_postfollows?: PostFollow_Result[] | null;
  team_accounts?: Account_Result[] | null;
  team_appointment?: Appointment_Result[] | null;
  team_bookableresource?: BookableResource_Result[] | null;
  team_bookableresourcebooking?: BookableResourceBooking_Result[] | null;
  team_bookableresourcecategoryassn?: BookableResourceCategoryAssn_Result[] | null;
  team_bookingstatus?: BookingStatus_Result[] | null;
  team_bulkoperationlog?: BulkOperationLog_Result[] | null;
  team_connections1?: Connection_Result[] | null;
  team_connections2?: Connection_Result[] | null;
  team_contacts?: Contact_Result[] | null;
  team_msdyn_servicetasktype?: msdyn_servicetasktype_Result[] | null;
  team_msdyn_workorder?: msdyn_workorder_Result[] | null;
  team_ovs_operation?: ovs_operation_Result[] | null;
  team_ovs_oversighttype?: ovs_OversightType_Result[] | null;
  team_ovs_sitetype?: ovs_SiteType_Result[] | null;
  team_ovs_survey?: ovs_Survey_Result[] | null;
  team_ovs_tyrational?: ovs_TYRational_Result[] | null;
  team_ovs_unplannedforecast?: ovs_UnplannedForecast_Result[] | null;
  team_service_appointments?: ServiceAppointment_Result[] | null;
  team_tc_acfacility?: tc_ACFacility_Result[] | null;
  team_tc_acfacilityaccounts?: tc_ACFacilityAccounts_Result[] | null;
  team_tc_acfacilitycontacts?: tc_ACFacilityContacts_Result[] | null;
  team_tc_acfacilitylocation?: tc_ACFacilityLocation_Result[] | null;
  team_tc_acfacilitylocationaccount?: tc_ACFacilityLocationAccount_Result[] | null;
  team_tc_country?: tc_Country_Result[] | null;
  team_tc_province?: tc_Province_Result[] | null;
  team_tc_tcaccountfacilityrelationtype?: tc_TCAccountFacilityRelationType_Result[] | null;
  team_tc_tcfacilitytype?: tc_TCFacilityType_Result[] | null;
  team_tc_tcfiscalperiod?: tc_TCFiscalPeriod_Result[] | null;
  team_tc_tcfiscalquarter?: tc_TCFiscalQuarter_Result[] | null;
  team_tc_tcfiscalyear?: tc_TCFiscalYear_Result[] | null;
  team_tc_tclocationtype?: tc_TCLocationType_Result[] | null;
  team_tc_tcmonth?: tc_TCMonth_Result[] | null;
}
interface Team extends Team_Base, Team_Relationships {
  administratorid_bind$systemusers?: string | null;
  businessunitid_bind$businessunits?: string | null;
  queueid_bind$queues?: string | null;
  stageid_processstage_bind$processstages?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Team_Create extends Team {
  associatedteamtemplateid_bind$teamtemplates?: string | null;
  regardingobjectid_knowledgearticle_bind$knowledgearticles?: string | null;
  regardingobjectid_opportunity_bind$opportunities?: string | null;
}
interface Team_Update extends Team {
}
interface Team_Select {
  administratorid_guid: WebAttribute<Team_Select, { administratorid_guid: string | null }, { administratorid_formatted?: string }>;
  azureactivedirectoryobjectid: WebAttribute<Team_Select, { azureactivedirectoryobjectid: string | null }, {  }>;
  businessunitid_guid: WebAttribute<Team_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  createdby_guid: WebAttribute<Team_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Team_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Team_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Team_Select, { description: string | null }, {  }>;
  emailaddress: WebAttribute<Team_Select, { emailaddress: string | null }, {  }>;
  exchangerate: WebAttribute<Team_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<Team_Select, { importsequencenumber: number | null }, {  }>;
  isdefault: WebAttribute<Team_Select, { isdefault: boolean | null }, {  }>;
  membershiptype: WebAttribute<Team_Select, { membershiptype: team_membershiptype | null }, { membershiptype_formatted?: string }>;
  modifiedby_guid: WebAttribute<Team_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Team_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Team_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Team_Select, { name: string | null }, {  }>;
  organizationid: WebAttribute<Team_Select, { organizationid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<Team_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processid: WebAttribute<Team_Select, { processid: string | null }, {  }>;
  queueid_guid: WebAttribute<Team_Select, { queueid_guid: string | null }, { queueid_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<Team_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  stageid: WebAttribute<Team_Select, { stageid: string | null }, {  }>;
  systemmanaged: WebAttribute<Team_Select, { systemmanaged: boolean | null }, {  }>;
  teamid: WebAttribute<Team_Select, { teamid: string | null }, {  }>;
  teamtemplateid_guid: WebAttribute<Team_Select, { teamtemplateid_guid: string | null }, { teamtemplateid_formatted?: string }>;
  teamtype: WebAttribute<Team_Select, { teamtype: team_type | null }, { teamtype_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<Team_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<Team_Select, { traversedpath: string | null }, {  }>;
  versionnumber: WebAttribute<Team_Select, { versionnumber: number | null }, {  }>;
}
interface Team_Filter {
  administratorid_guid: XQW.Guid;
  azureactivedirectoryobjectid: XQW.Guid;
  businessunitid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  emailaddress: string;
  exchangerate: any;
  importsequencenumber: number;
  isdefault: boolean;
  membershiptype: team_membershiptype;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid: XQW.Guid;
  overriddencreatedon: Date;
  processid: XQW.Guid;
  queueid_guid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  stageid: XQW.Guid;
  systemmanaged: boolean;
  teamid: XQW.Guid;
  teamtemplateid_guid: XQW.Guid;
  teamtype: team_type;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  versionnumber: number;
}
interface Team_Expand {
  OwningTeam_postfollows: WebExpand<Team_Expand, PostFollow_Select, PostFollow_Filter, { OwningTeam_postfollows: PostFollow_Result[] }>;
  team_accounts: WebExpand<Team_Expand, Account_Select, Account_Filter, { team_accounts: Account_Result[] }>;
  team_appointment: WebExpand<Team_Expand, Appointment_Select, Appointment_Filter, { team_appointment: Appointment_Result[] }>;
  team_bookableresource: WebExpand<Team_Expand, BookableResource_Select, BookableResource_Filter, { team_bookableresource: BookableResource_Result[] }>;
  team_bookableresourcebooking: WebExpand<Team_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { team_bookableresourcebooking: BookableResourceBooking_Result[] }>;
  team_bookableresourcecategoryassn: WebExpand<Team_Expand, BookableResourceCategoryAssn_Select, BookableResourceCategoryAssn_Filter, { team_bookableresourcecategoryassn: BookableResourceCategoryAssn_Result[] }>;
  team_bookingstatus: WebExpand<Team_Expand, BookingStatus_Select, BookingStatus_Filter, { team_bookingstatus: BookingStatus_Result[] }>;
  team_bulkoperationlog: WebExpand<Team_Expand, BulkOperationLog_Select, BulkOperationLog_Filter, { team_bulkoperationlog: BulkOperationLog_Result[] }>;
  team_connections1: WebExpand<Team_Expand, Connection_Select, Connection_Filter, { team_connections1: Connection_Result[] }>;
  team_connections2: WebExpand<Team_Expand, Connection_Select, Connection_Filter, { team_connections2: Connection_Result[] }>;
  team_contacts: WebExpand<Team_Expand, Contact_Select, Contact_Filter, { team_contacts: Contact_Result[] }>;
  team_msdyn_servicetasktype: WebExpand<Team_Expand, msdyn_servicetasktype_Select, msdyn_servicetasktype_Filter, { team_msdyn_servicetasktype: msdyn_servicetasktype_Result[] }>;
  team_msdyn_workorder: WebExpand<Team_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { team_msdyn_workorder: msdyn_workorder_Result[] }>;
  team_ovs_operation: WebExpand<Team_Expand, ovs_operation_Select, ovs_operation_Filter, { team_ovs_operation: ovs_operation_Result[] }>;
  team_ovs_oversighttype: WebExpand<Team_Expand, ovs_OversightType_Select, ovs_OversightType_Filter, { team_ovs_oversighttype: ovs_OversightType_Result[] }>;
  team_ovs_sitetype: WebExpand<Team_Expand, ovs_SiteType_Select, ovs_SiteType_Filter, { team_ovs_sitetype: ovs_SiteType_Result[] }>;
  team_ovs_survey: WebExpand<Team_Expand, ovs_Survey_Select, ovs_Survey_Filter, { team_ovs_survey: ovs_Survey_Result[] }>;
  team_ovs_tyrational: WebExpand<Team_Expand, ovs_TYRational_Select, ovs_TYRational_Filter, { team_ovs_tyrational: ovs_TYRational_Result[] }>;
  team_ovs_unplannedforecast: WebExpand<Team_Expand, ovs_UnplannedForecast_Select, ovs_UnplannedForecast_Filter, { team_ovs_unplannedforecast: ovs_UnplannedForecast_Result[] }>;
  team_service_appointments: WebExpand<Team_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { team_service_appointments: ServiceAppointment_Result[] }>;
  team_tc_acfacility: WebExpand<Team_Expand, tc_ACFacility_Select, tc_ACFacility_Filter, { team_tc_acfacility: tc_ACFacility_Result[] }>;
  team_tc_acfacilityaccounts: WebExpand<Team_Expand, tc_ACFacilityAccounts_Select, tc_ACFacilityAccounts_Filter, { team_tc_acfacilityaccounts: tc_ACFacilityAccounts_Result[] }>;
  team_tc_acfacilitycontacts: WebExpand<Team_Expand, tc_ACFacilityContacts_Select, tc_ACFacilityContacts_Filter, { team_tc_acfacilitycontacts: tc_ACFacilityContacts_Result[] }>;
  team_tc_acfacilitylocation: WebExpand<Team_Expand, tc_ACFacilityLocation_Select, tc_ACFacilityLocation_Filter, { team_tc_acfacilitylocation: tc_ACFacilityLocation_Result[] }>;
  team_tc_acfacilitylocationaccount: WebExpand<Team_Expand, tc_ACFacilityLocationAccount_Select, tc_ACFacilityLocationAccount_Filter, { team_tc_acfacilitylocationaccount: tc_ACFacilityLocationAccount_Result[] }>;
  team_tc_country: WebExpand<Team_Expand, tc_Country_Select, tc_Country_Filter, { team_tc_country: tc_Country_Result[] }>;
  team_tc_province: WebExpand<Team_Expand, tc_Province_Select, tc_Province_Filter, { team_tc_province: tc_Province_Result[] }>;
  team_tc_tcaccountfacilityrelationtype: WebExpand<Team_Expand, tc_TCAccountFacilityRelationType_Select, tc_TCAccountFacilityRelationType_Filter, { team_tc_tcaccountfacilityrelationtype: tc_TCAccountFacilityRelationType_Result[] }>;
  team_tc_tcfacilitytype: WebExpand<Team_Expand, tc_TCFacilityType_Select, tc_TCFacilityType_Filter, { team_tc_tcfacilitytype: tc_TCFacilityType_Result[] }>;
  team_tc_tcfiscalperiod: WebExpand<Team_Expand, tc_TCFiscalPeriod_Select, tc_TCFiscalPeriod_Filter, { team_tc_tcfiscalperiod: tc_TCFiscalPeriod_Result[] }>;
  team_tc_tcfiscalquarter: WebExpand<Team_Expand, tc_TCFiscalQuarter_Select, tc_TCFiscalQuarter_Filter, { team_tc_tcfiscalquarter: tc_TCFiscalQuarter_Result[] }>;
  team_tc_tcfiscalyear: WebExpand<Team_Expand, tc_TCFiscalYear_Select, tc_TCFiscalYear_Filter, { team_tc_tcfiscalyear: tc_TCFiscalYear_Result[] }>;
  team_tc_tclocationtype: WebExpand<Team_Expand, tc_TCLocationType_Select, tc_TCLocationType_Filter, { team_tc_tclocationtype: tc_TCLocationType_Result[] }>;
  team_tc_tcmonth: WebExpand<Team_Expand, tc_TCMonth_Select, tc_TCMonth_Filter, { team_tc_tcmonth: tc_TCMonth_Result[] }>;
}
interface Team_FormattedResult {
  administratorid_formatted?: string;
  businessunitid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  membershiptype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  queueid_formatted?: string;
  regardingobjectid_formatted?: string;
  teamtemplateid_formatted?: string;
  teamtype_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Team_Result extends Team_Base, Team_Relationships {
  "@odata.etag": string;
  administratorid_guid: string | null;
  businessunitid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  queueid_guid: string | null;
  regardingobjectid_guid: string | null;
  teamtemplateid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Team_RelatedOne {
}
interface Team_RelatedMany {
  OwningTeam_postfollows: WebMappingRetrieve<PostFollow_Select,PostFollow_Expand,PostFollow_Filter,PostFollow_Fixed,PostFollow_Result,PostFollow_FormattedResult>;
  team_accounts: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  team_appointment: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  team_bookableresource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  team_bookableresourcebooking: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  team_bookableresourcecategoryassn: WebMappingRetrieve<BookableResourceCategoryAssn_Select,BookableResourceCategoryAssn_Expand,BookableResourceCategoryAssn_Filter,BookableResourceCategoryAssn_Fixed,BookableResourceCategoryAssn_Result,BookableResourceCategoryAssn_FormattedResult>;
  team_bookingstatus: WebMappingRetrieve<BookingStatus_Select,BookingStatus_Expand,BookingStatus_Filter,BookingStatus_Fixed,BookingStatus_Result,BookingStatus_FormattedResult>;
  team_bulkoperationlog: WebMappingRetrieve<BulkOperationLog_Select,BulkOperationLog_Expand,BulkOperationLog_Filter,BulkOperationLog_Fixed,BulkOperationLog_Result,BulkOperationLog_FormattedResult>;
  team_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  team_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  team_contacts: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  team_msdyn_servicetasktype: WebMappingRetrieve<msdyn_servicetasktype_Select,msdyn_servicetasktype_Expand,msdyn_servicetasktype_Filter,msdyn_servicetasktype_Fixed,msdyn_servicetasktype_Result,msdyn_servicetasktype_FormattedResult>;
  team_msdyn_workorder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  team_ovs_operation: WebMappingRetrieve<ovs_operation_Select,ovs_operation_Expand,ovs_operation_Filter,ovs_operation_Fixed,ovs_operation_Result,ovs_operation_FormattedResult>;
  team_ovs_oversighttype: WebMappingRetrieve<ovs_OversightType_Select,ovs_OversightType_Expand,ovs_OversightType_Filter,ovs_OversightType_Fixed,ovs_OversightType_Result,ovs_OversightType_FormattedResult>;
  team_ovs_sitetype: WebMappingRetrieve<ovs_SiteType_Select,ovs_SiteType_Expand,ovs_SiteType_Filter,ovs_SiteType_Fixed,ovs_SiteType_Result,ovs_SiteType_FormattedResult>;
  team_ovs_survey: WebMappingRetrieve<ovs_Survey_Select,ovs_Survey_Expand,ovs_Survey_Filter,ovs_Survey_Fixed,ovs_Survey_Result,ovs_Survey_FormattedResult>;
  team_ovs_tyrational: WebMappingRetrieve<ovs_TYRational_Select,ovs_TYRational_Expand,ovs_TYRational_Filter,ovs_TYRational_Fixed,ovs_TYRational_Result,ovs_TYRational_FormattedResult>;
  team_ovs_unplannedforecast: WebMappingRetrieve<ovs_UnplannedForecast_Select,ovs_UnplannedForecast_Expand,ovs_UnplannedForecast_Filter,ovs_UnplannedForecast_Fixed,ovs_UnplannedForecast_Result,ovs_UnplannedForecast_FormattedResult>;
  team_service_appointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  team_tc_acfacility: WebMappingRetrieve<tc_ACFacility_Select,tc_ACFacility_Expand,tc_ACFacility_Filter,tc_ACFacility_Fixed,tc_ACFacility_Result,tc_ACFacility_FormattedResult>;
  team_tc_acfacilityaccounts: WebMappingRetrieve<tc_ACFacilityAccounts_Select,tc_ACFacilityAccounts_Expand,tc_ACFacilityAccounts_Filter,tc_ACFacilityAccounts_Fixed,tc_ACFacilityAccounts_Result,tc_ACFacilityAccounts_FormattedResult>;
  team_tc_acfacilitycontacts: WebMappingRetrieve<tc_ACFacilityContacts_Select,tc_ACFacilityContacts_Expand,tc_ACFacilityContacts_Filter,tc_ACFacilityContacts_Fixed,tc_ACFacilityContacts_Result,tc_ACFacilityContacts_FormattedResult>;
  team_tc_acfacilitylocation: WebMappingRetrieve<tc_ACFacilityLocation_Select,tc_ACFacilityLocation_Expand,tc_ACFacilityLocation_Filter,tc_ACFacilityLocation_Fixed,tc_ACFacilityLocation_Result,tc_ACFacilityLocation_FormattedResult>;
  team_tc_acfacilitylocationaccount: WebMappingRetrieve<tc_ACFacilityLocationAccount_Select,tc_ACFacilityLocationAccount_Expand,tc_ACFacilityLocationAccount_Filter,tc_ACFacilityLocationAccount_Fixed,tc_ACFacilityLocationAccount_Result,tc_ACFacilityLocationAccount_FormattedResult>;
  team_tc_country: WebMappingRetrieve<tc_Country_Select,tc_Country_Expand,tc_Country_Filter,tc_Country_Fixed,tc_Country_Result,tc_Country_FormattedResult>;
  team_tc_province: WebMappingRetrieve<tc_Province_Select,tc_Province_Expand,tc_Province_Filter,tc_Province_Fixed,tc_Province_Result,tc_Province_FormattedResult>;
  team_tc_tcaccountfacilityrelationtype: WebMappingRetrieve<tc_TCAccountFacilityRelationType_Select,tc_TCAccountFacilityRelationType_Expand,tc_TCAccountFacilityRelationType_Filter,tc_TCAccountFacilityRelationType_Fixed,tc_TCAccountFacilityRelationType_Result,tc_TCAccountFacilityRelationType_FormattedResult>;
  team_tc_tcfacilitytype: WebMappingRetrieve<tc_TCFacilityType_Select,tc_TCFacilityType_Expand,tc_TCFacilityType_Filter,tc_TCFacilityType_Fixed,tc_TCFacilityType_Result,tc_TCFacilityType_FormattedResult>;
  team_tc_tcfiscalperiod: WebMappingRetrieve<tc_TCFiscalPeriod_Select,tc_TCFiscalPeriod_Expand,tc_TCFiscalPeriod_Filter,tc_TCFiscalPeriod_Fixed,tc_TCFiscalPeriod_Result,tc_TCFiscalPeriod_FormattedResult>;
  team_tc_tcfiscalquarter: WebMappingRetrieve<tc_TCFiscalQuarter_Select,tc_TCFiscalQuarter_Expand,tc_TCFiscalQuarter_Filter,tc_TCFiscalQuarter_Fixed,tc_TCFiscalQuarter_Result,tc_TCFiscalQuarter_FormattedResult>;
  team_tc_tcfiscalyear: WebMappingRetrieve<tc_TCFiscalYear_Select,tc_TCFiscalYear_Expand,tc_TCFiscalYear_Filter,tc_TCFiscalYear_Fixed,tc_TCFiscalYear_Result,tc_TCFiscalYear_FormattedResult>;
  team_tc_tclocationtype: WebMappingRetrieve<tc_TCLocationType_Select,tc_TCLocationType_Expand,tc_TCLocationType_Filter,tc_TCLocationType_Fixed,tc_TCLocationType_Result,tc_TCLocationType_FormattedResult>;
  team_tc_tcmonth: WebMappingRetrieve<tc_TCMonth_Select,tc_TCMonth_Expand,tc_TCMonth_Filter,tc_TCMonth_Fixed,tc_TCMonth_Result,tc_TCMonth_FormattedResult>;
}
interface WebEntitiesRetrieve {
  teams: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface WebEntitiesRelated {
  teams: WebMappingRelated<Team_RelatedOne,Team_RelatedMany>;
}
interface WebEntitiesCUDA {
  teams: WebMappingCUDA<Team_Create,Team_Update,Team_Select>;
}
