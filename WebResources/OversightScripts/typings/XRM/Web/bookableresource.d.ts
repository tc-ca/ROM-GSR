declare namespace web {
  interface BookableResource_Base extends WebEntity {
    bookableresourceid?: string | null;
    createdon?: Date | null;
    exchangerate?: number | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    msdyn_bookingstodrip?: number | null;
    msdyn_crewstrategy?: msdyn_crewstrategy | null;
    msdyn_derivecapacity?: boolean | null;
    msdyn_displayonscheduleassistant?: boolean | null;
    msdyn_displayonscheduleboard?: boolean | null;
    msdyn_enabledforfieldservicemobile?: boolean | null;
    msdyn_enabledripscheduling?: boolean | null;
    msdyn_endlocation?: msdyn_workstartlocationtype | null;
    msdyn_generictype?: msdyn_generictype | null;
    msdyn_hourlyrate?: number | null;
    msdyn_hourlyrate_base?: number | null;
    msdyn_internalflags?: string | null;
    msdyn_latitude?: number | null;
    msdyn_longitude?: number | null;
    msdyn_pooltype?: msdyn_pooltype | null;
    msdyn_primaryemail?: string | null;
    msdyn_startlocation?: msdyn_workstartlocationtype | null;
    msdyn_targetutilization?: number | null;
    msdyn_timeoffapprovalrequired?: boolean | null;
    name?: string | null;
    overriddencreatedon?: Date | null;
    processid?: string | null;
    resourcetype?: bookableresource_resourcetype | null;
    stageid?: string | null;
    statecode?: bookableresource_statecode | null;
    statuscode?: bookableresource_statuscode | null;
    timezone?: number | null;
    timezoneruleversionnumber?: number | null;
    transactioncurrencyid_guid?: string | null;
    traversedpath?: string | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface BookableResource_Relationships {
    AccountId?: Account_Result | null;
    ContactId?: Contact_Result | null;
    bookableresource_bookableresourcecategoryassn_Resource?: BookableResourceCategoryAssn_Result[] | null;
    msdyn_bookableresource_account_PreferredResource?: Account_Result[] | null;
    msdyn_bookableresource_msdyn_workorder_PreferredResource?: msdyn_workorder_Result[] | null;
    msdyn_bookableresource_msdyn_workorder_SupportContact?: msdyn_workorder_Result[] | null;
    ovs_msdyn_workorder_PrimaryInspector_Bookable?: msdyn_workorder_Result[] | null;
    ovs_msdyn_workorder_SecondaryInspector_Bookab?: msdyn_workorder_Result[] | null;
  }
  interface BookableResource extends BookableResource_Base, BookableResource_Relationships {
    AccountId_bind$accounts?: string | null;
    ContactId_bind$contacts?: string | null;
    msdyn_OrganizationalUnit_bind$msdyn_organizationalunits?: string | null;
    msdyn_facilityequipmentid_bind$equipments?: string | null;
    msdyn_warehouse_bind$msdyn_warehouses?: string | null;
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
    stageid_bind$processstages?: string | null;
    transactioncurrencyid_bind$transactioncurrencies?: string | null;
  }
  interface BookableResource_Create extends BookableResource {
    UserId_bind$systemusers?: string | null;
    calendarid_bind$calendars?: string | null;
  }
  interface BookableResource_Update extends BookableResource {
  }
  interface BookableResource_Select {
    accountid_guid: WebAttribute<BookableResource_Select, { accountid_guid: string | null }, { accountid_formatted?: string }>;
    bookableresourceid: WebAttribute<BookableResource_Select, { bookableresourceid: string | null }, {  }>;
    calendarid_guid: WebAttribute<BookableResource_Select, { calendarid_guid: string | null }, { calendarid_formatted?: string }>;
    contactid_guid: WebAttribute<BookableResource_Select, { contactid_guid: string | null }, { contactid_formatted?: string }>;
    createdby_guid: WebAttribute<BookableResource_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<BookableResource_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<BookableResource_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    exchangerate: WebAttribute<BookableResource_Select, { exchangerate: number | null }, {  }>;
    importsequencenumber: WebAttribute<BookableResource_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<BookableResource_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<BookableResource_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<BookableResource_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    msdyn_bookingstodrip: WebAttribute<BookableResource_Select, { msdyn_bookingstodrip: number | null }, {  }>;
    msdyn_crewstrategy: WebAttribute<BookableResource_Select, { msdyn_crewstrategy: msdyn_crewstrategy | null }, { msdyn_crewstrategy_formatted?: string }>;
    msdyn_derivecapacity: WebAttribute<BookableResource_Select, { msdyn_derivecapacity: boolean | null }, {  }>;
    msdyn_displayonscheduleassistant: WebAttribute<BookableResource_Select, { msdyn_displayonscheduleassistant: boolean | null }, {  }>;
    msdyn_displayonscheduleboard: WebAttribute<BookableResource_Select, { msdyn_displayonscheduleboard: boolean | null }, {  }>;
    msdyn_enabledforfieldservicemobile: WebAttribute<BookableResource_Select, { msdyn_enabledforfieldservicemobile: boolean | null }, {  }>;
    msdyn_enabledripscheduling: WebAttribute<BookableResource_Select, { msdyn_enabledripscheduling: boolean | null }, {  }>;
    msdyn_endlocation: WebAttribute<BookableResource_Select, { msdyn_endlocation: msdyn_workstartlocationtype | null }, { msdyn_endlocation_formatted?: string }>;
    msdyn_facilityequipmentid_guid: WebAttribute<BookableResource_Select, { msdyn_facilityequipmentid_guid: string | null }, { msdyn_facilityequipmentid_formatted?: string }>;
    msdyn_generictype: WebAttribute<BookableResource_Select, { msdyn_generictype: msdyn_generictype | null }, { msdyn_generictype_formatted?: string }>;
    msdyn_hourlyrate: WebAttribute<BookableResource_Select, { msdyn_hourlyrate: number | null; transactioncurrencyid_guid: string | null }, { msdyn_hourlyrate_formatted?: string; transactioncurrencyid_formatted?: string }>;
    msdyn_hourlyrate_base: WebAttribute<BookableResource_Select, { msdyn_hourlyrate_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_hourlyrate_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
    msdyn_internalflags: WebAttribute<BookableResource_Select, { msdyn_internalflags: string | null }, {  }>;
    msdyn_latitude: WebAttribute<BookableResource_Select, { msdyn_latitude: number | null }, {  }>;
    msdyn_longitude: WebAttribute<BookableResource_Select, { msdyn_longitude: number | null }, {  }>;
    msdyn_organizationalunit_guid: WebAttribute<BookableResource_Select, { msdyn_organizationalunit_guid: string | null }, { msdyn_organizationalunit_formatted?: string }>;
    msdyn_pooltype: WebAttribute<BookableResource_Select, { msdyn_pooltype: msdyn_pooltype | null }, { msdyn_pooltype_formatted?: string }>;
    msdyn_primaryemail: WebAttribute<BookableResource_Select, { msdyn_primaryemail: string | null }, {  }>;
    msdyn_startlocation: WebAttribute<BookableResource_Select, { msdyn_startlocation: msdyn_workstartlocationtype | null }, { msdyn_startlocation_formatted?: string }>;
    msdyn_targetutilization: WebAttribute<BookableResource_Select, { msdyn_targetutilization: number | null }, {  }>;
    msdyn_timeoffapprovalrequired: WebAttribute<BookableResource_Select, { msdyn_timeoffapprovalrequired: boolean | null }, {  }>;
    msdyn_warehouse_guid: WebAttribute<BookableResource_Select, { msdyn_warehouse_guid: string | null }, { msdyn_warehouse_formatted?: string }>;
    name: WebAttribute<BookableResource_Select, { name: string | null }, {  }>;
    overriddencreatedon: WebAttribute<BookableResource_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<BookableResource_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<BookableResource_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<BookableResource_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<BookableResource_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    processid: WebAttribute<BookableResource_Select, { processid: string | null }, {  }>;
    resourcetype: WebAttribute<BookableResource_Select, { resourcetype: bookableresource_resourcetype | null }, { resourcetype_formatted?: string }>;
    stageid: WebAttribute<BookableResource_Select, { stageid: string | null }, {  }>;
    statecode: WebAttribute<BookableResource_Select, { statecode: bookableresource_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<BookableResource_Select, { statuscode: bookableresource_statuscode | null }, { statuscode_formatted?: string }>;
    timezone: WebAttribute<BookableResource_Select, { timezone: number | null }, {  }>;
    timezoneruleversionnumber: WebAttribute<BookableResource_Select, { timezoneruleversionnumber: number | null }, {  }>;
    transactioncurrencyid_guid: WebAttribute<BookableResource_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
    traversedpath: WebAttribute<BookableResource_Select, { traversedpath: string | null }, {  }>;
    userid_guid: WebAttribute<BookableResource_Select, { userid_guid: string | null }, { userid_formatted?: string }>;
    utcconversiontimezonecode: WebAttribute<BookableResource_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<BookableResource_Select, { versionnumber: number | null }, {  }>;
  }
  interface BookableResource_Filter {
    accountid_guid: XQW.Guid;
    bookableresourceid: XQW.Guid;
    calendarid_guid: XQW.Guid;
    contactid_guid: XQW.Guid;
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    exchangerate: any;
    importsequencenumber: number;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    msdyn_bookingstodrip: number;
    msdyn_crewstrategy: msdyn_crewstrategy;
    msdyn_derivecapacity: boolean;
    msdyn_displayonscheduleassistant: boolean;
    msdyn_displayonscheduleboard: boolean;
    msdyn_enabledforfieldservicemobile: boolean;
    msdyn_enabledripscheduling: boolean;
    msdyn_endlocation: msdyn_workstartlocationtype;
    msdyn_facilityequipmentid_guid: XQW.Guid;
    msdyn_generictype: msdyn_generictype;
    msdyn_hourlyrate: number;
    msdyn_hourlyrate_base: number;
    msdyn_internalflags: string;
    msdyn_latitude: number;
    msdyn_longitude: number;
    msdyn_organizationalunit_guid: XQW.Guid;
    msdyn_pooltype: msdyn_pooltype;
    msdyn_primaryemail: string;
    msdyn_startlocation: msdyn_workstartlocationtype;
    msdyn_targetutilization: number;
    msdyn_timeoffapprovalrequired: boolean;
    msdyn_warehouse_guid: XQW.Guid;
    name: string;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    processid: XQW.Guid;
    resourcetype: bookableresource_resourcetype;
    stageid: XQW.Guid;
    statecode: bookableresource_statecode;
    statuscode: bookableresource_statuscode;
    timezone: number;
    timezoneruleversionnumber: number;
    transactioncurrencyid_guid: XQW.Guid;
    traversedpath: string;
    userid_guid: XQW.Guid;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface BookableResource_Expand {
    AccountId: WebExpand<BookableResource_Expand, Account_Select, Account_Filter, { AccountId: Account_Result }>;
    ContactId: WebExpand<BookableResource_Expand, Contact_Select, Contact_Filter, { ContactId: Contact_Result }>;
    bookableresource_bookableresourcecategoryassn_Resource: WebExpand<BookableResource_Expand, BookableResourceCategoryAssn_Select, BookableResourceCategoryAssn_Filter, { bookableresource_bookableresourcecategoryassn_Resource: BookableResourceCategoryAssn_Result[] }>;
    msdyn_bookableresource_account_PreferredResource: WebExpand<BookableResource_Expand, Account_Select, Account_Filter, { msdyn_bookableresource_account_PreferredResource: Account_Result[] }>;
    msdyn_bookableresource_msdyn_workorder_PreferredResource: WebExpand<BookableResource_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_bookableresource_msdyn_workorder_PreferredResource: msdyn_workorder_Result[] }>;
    msdyn_bookableresource_msdyn_workorder_SupportContact: WebExpand<BookableResource_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_bookableresource_msdyn_workorder_SupportContact: msdyn_workorder_Result[] }>;
    ovs_msdyn_workorder_PrimaryInspector_Bookable: WebExpand<BookableResource_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { ovs_msdyn_workorder_PrimaryInspector_Bookable: msdyn_workorder_Result[] }>;
    ovs_msdyn_workorder_SecondaryInspector_Bookab: WebExpand<BookableResource_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { ovs_msdyn_workorder_SecondaryInspector_Bookab: msdyn_workorder_Result[] }>;
  }
  interface BookableResource_FormattedResult {
    accountid_formatted?: string;
    calendarid_formatted?: string;
    contactid_formatted?: string;
    createdby_formatted?: string;
    createdon_formatted?: string;
    createdonbehalfby_formatted?: string;
    modifiedby_formatted?: string;
    modifiedon_formatted?: string;
    modifiedonbehalfby_formatted?: string;
    msdyn_crewstrategy_formatted?: string;
    msdyn_endlocation_formatted?: string;
    msdyn_facilityequipmentid_formatted?: string;
    msdyn_generictype_formatted?: string;
    msdyn_hourlyrate_base_formatted?: string;
    msdyn_hourlyrate_formatted?: string;
    msdyn_organizationalunit_formatted?: string;
    msdyn_pooltype_formatted?: string;
    msdyn_startlocation_formatted?: string;
    msdyn_warehouse_formatted?: string;
    overriddencreatedon_formatted?: string;
    ownerid_formatted?: string;
    owningbusinessunit_formatted?: string;
    owningteam_formatted?: string;
    owninguser_formatted?: string;
    resourcetype_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
    transactioncurrencyid_formatted?: string;
    userid_formatted?: string;
  }
  interface BookableResource_Result extends BookableResource_Base, BookableResource_Relationships {
    "@odata.etag": string;
    accountid_guid: string | null;
    calendarid_guid: string | null;
    contactid_guid: string | null;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    msdyn_facilityequipmentid_guid: string | null;
    msdyn_organizationalunit_guid: string | null;
    msdyn_warehouse_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
    transactioncurrencyid_guid: string | null;
    userid_guid: string | null;
  }
  interface BookableResource_RelatedOne {
    AccountId: WebMappingRetrieve<web.Account_Select,web.Account_Expand,web.Account_Filter,web.Account_Fixed,web.Account_Result,web.Account_FormattedResult>;
    ContactId: WebMappingRetrieve<web.Contact_Select,web.Contact_Expand,web.Contact_Filter,web.Contact_Fixed,web.Contact_Result,web.Contact_FormattedResult>;
  }
  interface BookableResource_RelatedMany {
    bookableresource_bookableresourcecategoryassn_Resource: WebMappingRetrieve<web.BookableResourceCategoryAssn_Select,web.BookableResourceCategoryAssn_Expand,web.BookableResourceCategoryAssn_Filter,web.BookableResourceCategoryAssn_Fixed,web.BookableResourceCategoryAssn_Result,web.BookableResourceCategoryAssn_FormattedResult>;
    msdyn_bookableresource_account_PreferredResource: WebMappingRetrieve<web.Account_Select,web.Account_Expand,web.Account_Filter,web.Account_Fixed,web.Account_Result,web.Account_FormattedResult>;
    msdyn_bookableresource_msdyn_workorder_PreferredResource: WebMappingRetrieve<web.msdyn_workorder_Select,web.msdyn_workorder_Expand,web.msdyn_workorder_Filter,web.msdyn_workorder_Fixed,web.msdyn_workorder_Result,web.msdyn_workorder_FormattedResult>;
    msdyn_bookableresource_msdyn_workorder_SupportContact: WebMappingRetrieve<web.msdyn_workorder_Select,web.msdyn_workorder_Expand,web.msdyn_workorder_Filter,web.msdyn_workorder_Fixed,web.msdyn_workorder_Result,web.msdyn_workorder_FormattedResult>;
    ovs_msdyn_workorder_PrimaryInspector_Bookable: WebMappingRetrieve<web.msdyn_workorder_Select,web.msdyn_workorder_Expand,web.msdyn_workorder_Filter,web.msdyn_workorder_Fixed,web.msdyn_workorder_Result,web.msdyn_workorder_FormattedResult>;
    ovs_msdyn_workorder_SecondaryInspector_Bookab: WebMappingRetrieve<web.msdyn_workorder_Select,web.msdyn_workorder_Expand,web.msdyn_workorder_Filter,web.msdyn_workorder_Fixed,web.msdyn_workorder_Result,web.msdyn_workorder_FormattedResult>;
  }
}
interface WebEntitiesRetrieve {
  bookableresources: WebMappingRetrieve<web.BookableResource_Select,web.BookableResource_Expand,web.BookableResource_Filter,web.BookableResource_Fixed,web.BookableResource_Result,web.BookableResource_FormattedResult>;
}
interface WebEntitiesRelated {
  bookableresources: WebMappingRelated<web.BookableResource_RelatedOne,web.BookableResource_RelatedMany>;
}
interface WebEntitiesCUDA {
  bookableresources: WebMappingCUDA<web.BookableResource_Create,web.BookableResource_Update,web.BookableResource_Select>;
}
