declare namespace web {
  interface BookableResourceCategoryAssn_Base extends WebEntity {
    bookableresourcecategoryassnid?: string | null;
    createdon?: Date | null;
    exchangerate?: number | null;
    importsequencenumber?: number | null;
    modifiedon?: Date | null;
    name?: string | null;
    overriddencreatedon?: Date | null;
    statecode?: bookableresourcecategoryassn_statecode | null;
    statuscode?: bookableresourcecategoryassn_statuscode | null;
    timezoneruleversionnumber?: number | null;
    utcconversiontimezonecode?: number | null;
    versionnumber?: number | null;
  }
  interface BookableResourceCategoryAssn_Relationships {
    Resource?: BookableResource_Result | null;
  }
  interface BookableResourceCategoryAssn extends BookableResourceCategoryAssn_Base, BookableResourceCategoryAssn_Relationships {
    ResourceCategory_bind$bookableresourcecategories?: string | null;
    Resource_bind$bookableresources?: string | null;
    ownerid_bind$systemusers?: string | null;
    ownerid_bind$teams?: string | null;
    transactioncurrencyid_bind$transactioncurrencies?: string | null;
  }
  interface BookableResourceCategoryAssn_Create extends BookableResourceCategoryAssn {
  }
  interface BookableResourceCategoryAssn_Update extends BookableResourceCategoryAssn {
  }
  interface BookableResourceCategoryAssn_Select {
    bookableresourcecategoryassnid: WebAttribute<BookableResourceCategoryAssn_Select, { bookableresourcecategoryassnid: string | null }, {  }>;
    createdby_guid: WebAttribute<BookableResourceCategoryAssn_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
    createdon: WebAttribute<BookableResourceCategoryAssn_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
    createdonbehalfby_guid: WebAttribute<BookableResourceCategoryAssn_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
    exchangerate: WebAttribute<BookableResourceCategoryAssn_Select, { exchangerate: number | null }, {  }>;
    importsequencenumber: WebAttribute<BookableResourceCategoryAssn_Select, { importsequencenumber: number | null }, {  }>;
    modifiedby_guid: WebAttribute<BookableResourceCategoryAssn_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
    modifiedon: WebAttribute<BookableResourceCategoryAssn_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
    modifiedonbehalfby_guid: WebAttribute<BookableResourceCategoryAssn_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
    name: WebAttribute<BookableResourceCategoryAssn_Select, { name: string | null }, {  }>;
    overriddencreatedon: WebAttribute<BookableResourceCategoryAssn_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
    ownerid_guid: WebAttribute<BookableResourceCategoryAssn_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
    owningbusinessunit_guid: WebAttribute<BookableResourceCategoryAssn_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
    owningteam_guid: WebAttribute<BookableResourceCategoryAssn_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
    owninguser_guid: WebAttribute<BookableResourceCategoryAssn_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
    resource_guid: WebAttribute<BookableResourceCategoryAssn_Select, { resource_guid: string | null }, { resource_formatted?: string }>;
    resourcecategory_guid: WebAttribute<BookableResourceCategoryAssn_Select, { resourcecategory_guid: string | null }, { resourcecategory_formatted?: string }>;
    statecode: WebAttribute<BookableResourceCategoryAssn_Select, { statecode: bookableresourcecategoryassn_statecode | null }, { statecode_formatted?: string }>;
    statuscode: WebAttribute<BookableResourceCategoryAssn_Select, { statuscode: bookableresourcecategoryassn_statuscode | null }, { statuscode_formatted?: string }>;
    timezoneruleversionnumber: WebAttribute<BookableResourceCategoryAssn_Select, { timezoneruleversionnumber: number | null }, {  }>;
    transactioncurrencyid_guid: WebAttribute<BookableResourceCategoryAssn_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
    utcconversiontimezonecode: WebAttribute<BookableResourceCategoryAssn_Select, { utcconversiontimezonecode: number | null }, {  }>;
    versionnumber: WebAttribute<BookableResourceCategoryAssn_Select, { versionnumber: number | null }, {  }>;
  }
  interface BookableResourceCategoryAssn_Filter {
    bookableresourcecategoryassnid: XQW.Guid;
    createdby_guid: XQW.Guid;
    createdon: Date;
    createdonbehalfby_guid: XQW.Guid;
    exchangerate: any;
    importsequencenumber: number;
    modifiedby_guid: XQW.Guid;
    modifiedon: Date;
    modifiedonbehalfby_guid: XQW.Guid;
    name: string;
    overriddencreatedon: Date;
    ownerid_guid: XQW.Guid;
    owningbusinessunit_guid: XQW.Guid;
    owningteam_guid: XQW.Guid;
    owninguser_guid: XQW.Guid;
    resource_guid: XQW.Guid;
    resourcecategory_guid: XQW.Guid;
    statecode: bookableresourcecategoryassn_statecode;
    statuscode: bookableresourcecategoryassn_statuscode;
    timezoneruleversionnumber: number;
    transactioncurrencyid_guid: XQW.Guid;
    utcconversiontimezonecode: number;
    versionnumber: number;
  }
  interface BookableResourceCategoryAssn_Expand {
    Resource: WebExpand<BookableResourceCategoryAssn_Expand, BookableResource_Select, BookableResource_Filter, { Resource: BookableResource_Result }>;
  }
  interface BookableResourceCategoryAssn_FormattedResult {
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
    resource_formatted?: string;
    resourcecategory_formatted?: string;
    statecode_formatted?: string;
    statuscode_formatted?: string;
    transactioncurrencyid_formatted?: string;
  }
  interface BookableResourceCategoryAssn_Result extends BookableResourceCategoryAssn_Base, BookableResourceCategoryAssn_Relationships {
    "@odata.etag": string;
    createdby_guid: string | null;
    createdonbehalfby_guid: string | null;
    modifiedby_guid: string | null;
    modifiedonbehalfby_guid: string | null;
    ownerid_guid: string | null;
    owningbusinessunit_guid: string | null;
    owningteam_guid: string | null;
    owninguser_guid: string | null;
    resource_guid: string | null;
    resourcecategory_guid: string | null;
    transactioncurrencyid_guid: string | null;
  }
  interface BookableResourceCategoryAssn_RelatedOne {
    Resource: WebMappingRetrieve<web.BookableResource_Select,web.BookableResource_Expand,web.BookableResource_Filter,web.BookableResource_Fixed,web.BookableResource_Result,web.BookableResource_FormattedResult>;
  }
  interface BookableResourceCategoryAssn_RelatedMany {
  }
}
interface WebEntitiesRetrieve {
  bookableresourcecategoryassns: WebMappingRetrieve<web.BookableResourceCategoryAssn_Select,web.BookableResourceCategoryAssn_Expand,web.BookableResourceCategoryAssn_Filter,web.BookableResourceCategoryAssn_Fixed,web.BookableResourceCategoryAssn_Result,web.BookableResourceCategoryAssn_FormattedResult>;
}
interface WebEntitiesRelated {
  bookableresourcecategoryassns: WebMappingRelated<web.BookableResourceCategoryAssn_RelatedOne,web.BookableResourceCategoryAssn_RelatedMany>;
}
interface WebEntitiesCUDA {
  bookableresourcecategoryassns: WebMappingCUDA<web.BookableResourceCategoryAssn_Create,web.BookableResourceCategoryAssn_Update,web.BookableResourceCategoryAssn_Select>;
}
