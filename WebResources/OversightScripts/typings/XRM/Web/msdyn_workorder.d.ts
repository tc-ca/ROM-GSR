interface msdyn_workorder_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_address1?: string | null;
  msdyn_address2?: string | null;
  msdyn_address3?: string | null;
  msdyn_addressname?: string | null;
  msdyn_autonumbering?: string | null;
  msdyn_bookingsummary?: string | null;
  msdyn_childindex?: number | null;
  msdyn_city?: string | null;
  msdyn_completedon?: Date | null;
  msdyn_country?: string | null;
  msdyn_datewindowend?: Date | null;
  msdyn_datewindowstart?: Date | null;
  msdyn_estimatesubtotalamount?: number | null;
  msdyn_estimatesubtotalamount_base?: number | null;
  msdyn_firstarrivedon?: Date | null;
  msdyn_followupnote?: string | null;
  msdyn_followuprequired?: boolean | null;
  msdyn_instructions?: string | null;
  msdyn_internalflags?: string | null;
  msdyn_isfollowup?: boolean | null;
  msdyn_ismobile?: boolean | null;
  msdyn_latitude?: number | null;
  msdyn_longitude?: number | null;
  msdyn_mapcontrol?: string | null;
  msdyn_name?: string | null;
  msdyn_postalcode?: string | null;
  msdyn_primaryincidentdescription?: string | null;
  msdyn_primaryincidentestimatedduration?: number | null;
  msdyn_stateorprovince?: string | null;
  msdyn_subtotalamount?: number | null;
  msdyn_subtotalamount_base?: number | null;
  msdyn_systemstatus?: msdyn_wosystemstatus | null;
  msdyn_taxable?: boolean | null;
  msdyn_timeclosed?: Date | null;
  msdyn_timefrompromised?: Date | null;
  msdyn_timetopromised?: Date | null;
  msdyn_timewindowend?: Date | null;
  msdyn_timewindowstart?: Date | null;
  msdyn_totalamount?: number | null;
  msdyn_totalamount_base?: number | null;
  msdyn_totalestimatedduration?: number | null;
  msdyn_totalsalestax?: number | null;
  msdyn_totalsalestax_base?: number | null;
  msdyn_worklocation?: msdyn_worklocation | null;
  msdyn_workorderid?: string | null;
  msdyn_workordersummary?: string | null;
  overriddencreatedon?: Date | null;
  ovs_iisid?: string | null;
  ovs_mocid?: string | null;
  ovs_rolluptestdeletemeafter?: Date | null;
  ovs_rolluptestdeletemeafter_date?: Date | null;
  ovs_rolluptestdeletemeafter_state?: number | null;
  processid?: string | null;
  stageid?: string | null;
  statecode?: msdyn_workorder_statecode | null;
  statuscode?: msdyn_workorder_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_workorder_Relationships {
  msdyn_SupportContact?: BookableResource_Result | null;
  msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder?: BookableResourceBooking_Result[] | null;
  msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder?: msdyn_workorder_Result[] | null;
  msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder?: msdyn_workorderincident_Result[] | null;
  msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder?: msdyn_workorderservicetask_Result[] | null;
  msdyn_parentworkorder_msdyn_workorder?: msdyn_workorder_Result | null;
  msdyn_workorder_Appointments?: Appointment_Result[] | null;
  msdyn_workorder_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_workorder_connections1?: Connection_Result[] | null;
  msdyn_workorder_connections2?: Connection_Result[] | null;
  ovs_FiscalQuarter?: tc_TCFiscalQuarter_Result | null;
  ovs_FiscalYear?: tc_TCFiscalYear_Result | null;
  ovs_OversightType?: ovs_OversightType_Result | null;
  ovs_PrimaryInspector?: BookableResource_Result | null;
  ovs_Rational?: ovs_TYRational_Result | null;
  ovs_SecondaryInspector?: BookableResource_Result | null;
  ovs_SiteofViolation?: Account_Result | null;
  ovs_TYRational?: ovs_TYRational_Result | null;
}
interface msdyn_workorder extends msdyn_workorder_Base, msdyn_workorder_Relationships {
  msdyn_FunctionalLocation_bind$msdyn_functionallocations?: string | null;
  msdyn_IoTAlert_bind$msdyn_iotalerts?: string | null;
  msdyn_SupportContact_bind$bookableresources?: string | null;
  msdyn_agreement_bind$msdyn_agreements?: string | null;
  msdyn_billingaccount_bind$accounts?: string | null;
  msdyn_closedby_bind$systemusers?: string | null;
  msdyn_customerasset_bind$msdyn_customerassets?: string | null;
  msdyn_opportunityid_bind$opportunities?: string | null;
  msdyn_parentworkorder_msdyn_workorder_bind$msdyn_workorders?: string | null;
  msdyn_preferredresource_bind$bookableresources?: string | null;
  msdyn_pricelist_bind$pricelevels?: string | null;
  msdyn_primaryincidenttype_bind$msdyn_incidenttypes?: string | null;
  msdyn_priority_bind$msdyn_priorities?: string | null;
  msdyn_reportedbycontact_bind$contacts?: string | null;
  msdyn_serviceaccount_bind$accounts?: string | null;
  msdyn_servicerequest_bind$incidents?: string | null;
  msdyn_serviceterritory_bind$territories?: string | null;
  msdyn_substatus_bind$msdyn_workordersubstatuses?: string | null;
  msdyn_taxcode_bind$msdyn_taxcodes?: string | null;
  msdyn_timegroup_bind$msdyn_timegroups?: string | null;
  msdyn_timegroupdetailselected_bind$msdyn_timegroupdetails?: string | null;
  msdyn_workhourtemplate_bind$msdyn_workhourtemplates?: string | null;
  msdyn_workorderarrivaltimekpiid_bind$slakpiinstances?: string | null;
  msdyn_workorderresolutionkpiid_bind$slakpiinstances?: string | null;
  msdyn_workordertype_bind$msdyn_workordertypes?: string | null;
  ovs_FiscalQuarter_bind$tc_tcfiscalquarters?: string | null;
  ovs_FiscalYear_bind$tc_tcfiscalyears?: string | null;
  ovs_OversightType_bind$ovs_oversighttypes?: string | null;
  ovs_PrimaryInspector_bind$bookableresources?: string | null;
  ovs_Rational_bind$ovs_tyrationals?: string | null;
  ovs_SecondaryInspector_bind$bookableresources?: string | null;
  ovs_SiteofViolation_bind$accounts?: string | null;
  ovs_TYRational_bind$ovs_tyrationals?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_workorder_Create extends msdyn_workorder {
}
interface msdyn_workorder_Update extends msdyn_workorder {
}
interface msdyn_workorder_Select {
  createdby_guid: WebAttribute<msdyn_workorder_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_workorder_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_workorder_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_workorder_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_workorder_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_workorder_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_workorder_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_workorder_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_address1: WebAttribute<msdyn_workorder_Select, { msdyn_address1: string | null }, {  }>;
  msdyn_address2: WebAttribute<msdyn_workorder_Select, { msdyn_address2: string | null }, {  }>;
  msdyn_address3: WebAttribute<msdyn_workorder_Select, { msdyn_address3: string | null }, {  }>;
  msdyn_addressname: WebAttribute<msdyn_workorder_Select, { msdyn_addressname: string | null }, {  }>;
  msdyn_agreement_guid: WebAttribute<msdyn_workorder_Select, { msdyn_agreement_guid: string | null }, { msdyn_agreement_formatted?: string }>;
  msdyn_autonumbering: WebAttribute<msdyn_workorder_Select, { msdyn_autonumbering: string | null }, {  }>;
  msdyn_billingaccount_guid: WebAttribute<msdyn_workorder_Select, { msdyn_billingaccount_guid: string | null }, { msdyn_billingaccount_formatted?: string }>;
  msdyn_bookingsummary: WebAttribute<msdyn_workorder_Select, { msdyn_bookingsummary: string | null }, {  }>;
  msdyn_childindex: WebAttribute<msdyn_workorder_Select, { msdyn_childindex: number | null }, {  }>;
  msdyn_city: WebAttribute<msdyn_workorder_Select, { msdyn_city: string | null }, {  }>;
  msdyn_closedby_guid: WebAttribute<msdyn_workorder_Select, { msdyn_closedby_guid: string | null }, { msdyn_closedby_formatted?: string }>;
  msdyn_completedon: WebAttribute<msdyn_workorder_Select, { msdyn_completedon: Date | null }, { msdyn_completedon_formatted?: string }>;
  msdyn_country: WebAttribute<msdyn_workorder_Select, { msdyn_country: string | null }, {  }>;
  msdyn_customerasset_guid: WebAttribute<msdyn_workorder_Select, { msdyn_customerasset_guid: string | null }, { msdyn_customerasset_formatted?: string }>;
  msdyn_datewindowend: WebAttribute<msdyn_workorder_Select, { msdyn_datewindowend: Date | null }, { msdyn_datewindowend_formatted?: string }>;
  msdyn_datewindowstart: WebAttribute<msdyn_workorder_Select, { msdyn_datewindowstart: Date | null }, { msdyn_datewindowstart_formatted?: string }>;
  msdyn_estimatesubtotalamount: WebAttribute<msdyn_workorder_Select, { msdyn_estimatesubtotalamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_estimatesubtotalamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_estimatesubtotalamount_base: WebAttribute<msdyn_workorder_Select, { msdyn_estimatesubtotalamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_estimatesubtotalamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_firstarrivedon: WebAttribute<msdyn_workorder_Select, { msdyn_firstarrivedon: Date | null }, { msdyn_firstarrivedon_formatted?: string }>;
  msdyn_followupnote: WebAttribute<msdyn_workorder_Select, { msdyn_followupnote: string | null }, {  }>;
  msdyn_followuprequired: WebAttribute<msdyn_workorder_Select, { msdyn_followuprequired: boolean | null }, {  }>;
  msdyn_functionallocation_guid: WebAttribute<msdyn_workorder_Select, { msdyn_functionallocation_guid: string | null }, { msdyn_functionallocation_formatted?: string }>;
  msdyn_instructions: WebAttribute<msdyn_workorder_Select, { msdyn_instructions: string | null }, {  }>;
  msdyn_internalflags: WebAttribute<msdyn_workorder_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_iotalert_guid: WebAttribute<msdyn_workorder_Select, { msdyn_iotalert_guid: string | null }, { msdyn_iotalert_formatted?: string }>;
  msdyn_isfollowup: WebAttribute<msdyn_workorder_Select, { msdyn_isfollowup: boolean | null }, {  }>;
  msdyn_ismobile: WebAttribute<msdyn_workorder_Select, { msdyn_ismobile: boolean | null }, {  }>;
  msdyn_latitude: WebAttribute<msdyn_workorder_Select, { msdyn_latitude: number | null }, {  }>;
  msdyn_longitude: WebAttribute<msdyn_workorder_Select, { msdyn_longitude: number | null }, {  }>;
  msdyn_mapcontrol: WebAttribute<msdyn_workorder_Select, { msdyn_mapcontrol: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_workorder_Select, { msdyn_name: string | null }, {  }>;
  msdyn_opportunityid_guid: WebAttribute<msdyn_workorder_Select, { msdyn_opportunityid_guid: string | null }, { msdyn_opportunityid_formatted?: string }>;
  msdyn_parentworkorder_guid: WebAttribute<msdyn_workorder_Select, { msdyn_parentworkorder_guid: string | null }, { msdyn_parentworkorder_formatted?: string }>;
  msdyn_postalcode: WebAttribute<msdyn_workorder_Select, { msdyn_postalcode: string | null }, {  }>;
  msdyn_preferredresource_guid: WebAttribute<msdyn_workorder_Select, { msdyn_preferredresource_guid: string | null }, { msdyn_preferredresource_formatted?: string }>;
  msdyn_pricelist_guid: WebAttribute<msdyn_workorder_Select, { msdyn_pricelist_guid: string | null }, { msdyn_pricelist_formatted?: string }>;
  msdyn_primaryincidentdescription: WebAttribute<msdyn_workorder_Select, { msdyn_primaryincidentdescription: string | null }, {  }>;
  msdyn_primaryincidentestimatedduration: WebAttribute<msdyn_workorder_Select, { msdyn_primaryincidentestimatedduration: number | null }, {  }>;
  msdyn_primaryincidenttype_guid: WebAttribute<msdyn_workorder_Select, { msdyn_primaryincidenttype_guid: string | null }, { msdyn_primaryincidenttype_formatted?: string }>;
  msdyn_priority_guid: WebAttribute<msdyn_workorder_Select, { msdyn_priority_guid: string | null }, { msdyn_priority_formatted?: string }>;
  msdyn_reportedbycontact_guid: WebAttribute<msdyn_workorder_Select, { msdyn_reportedbycontact_guid: string | null }, { msdyn_reportedbycontact_formatted?: string }>;
  msdyn_serviceaccount_guid: WebAttribute<msdyn_workorder_Select, { msdyn_serviceaccount_guid: string | null }, { msdyn_serviceaccount_formatted?: string }>;
  msdyn_servicerequest_guid: WebAttribute<msdyn_workorder_Select, { msdyn_servicerequest_guid: string | null }, { msdyn_servicerequest_formatted?: string }>;
  msdyn_serviceterritory_guid: WebAttribute<msdyn_workorder_Select, { msdyn_serviceterritory_guid: string | null }, { msdyn_serviceterritory_formatted?: string }>;
  msdyn_stateorprovince: WebAttribute<msdyn_workorder_Select, { msdyn_stateorprovince: string | null }, {  }>;
  msdyn_substatus_guid: WebAttribute<msdyn_workorder_Select, { msdyn_substatus_guid: string | null }, { msdyn_substatus_formatted?: string }>;
  msdyn_subtotalamount: WebAttribute<msdyn_workorder_Select, { msdyn_subtotalamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_subtotalamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_subtotalamount_base: WebAttribute<msdyn_workorder_Select, { msdyn_subtotalamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_subtotalamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_supportcontact_guid: WebAttribute<msdyn_workorder_Select, { msdyn_supportcontact_guid: string | null }, { msdyn_supportcontact_formatted?: string }>;
  msdyn_systemstatus: WebAttribute<msdyn_workorder_Select, { msdyn_systemstatus: msdyn_wosystemstatus | null }, { msdyn_systemstatus_formatted?: string }>;
  msdyn_taxable: WebAttribute<msdyn_workorder_Select, { msdyn_taxable: boolean | null }, {  }>;
  msdyn_taxcode_guid: WebAttribute<msdyn_workorder_Select, { msdyn_taxcode_guid: string | null }, { msdyn_taxcode_formatted?: string }>;
  msdyn_timeclosed: WebAttribute<msdyn_workorder_Select, { msdyn_timeclosed: Date | null }, { msdyn_timeclosed_formatted?: string }>;
  msdyn_timefrompromised: WebAttribute<msdyn_workorder_Select, { msdyn_timefrompromised: Date | null }, { msdyn_timefrompromised_formatted?: string }>;
  msdyn_timegroup_guid: WebAttribute<msdyn_workorder_Select, { msdyn_timegroup_guid: string | null }, { msdyn_timegroup_formatted?: string }>;
  msdyn_timegroupdetailselected_guid: WebAttribute<msdyn_workorder_Select, { msdyn_timegroupdetailselected_guid: string | null }, { msdyn_timegroupdetailselected_formatted?: string }>;
  msdyn_timetopromised: WebAttribute<msdyn_workorder_Select, { msdyn_timetopromised: Date | null }, { msdyn_timetopromised_formatted?: string }>;
  msdyn_timewindowend: WebAttribute<msdyn_workorder_Select, { msdyn_timewindowend: Date | null }, { msdyn_timewindowend_formatted?: string }>;
  msdyn_timewindowstart: WebAttribute<msdyn_workorder_Select, { msdyn_timewindowstart: Date | null }, { msdyn_timewindowstart_formatted?: string }>;
  msdyn_totalamount: WebAttribute<msdyn_workorder_Select, { msdyn_totalamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_totalamount_base: WebAttribute<msdyn_workorder_Select, { msdyn_totalamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_totalestimatedduration: WebAttribute<msdyn_workorder_Select, { msdyn_totalestimatedduration: number | null }, {  }>;
  msdyn_totalsalestax: WebAttribute<msdyn_workorder_Select, { msdyn_totalsalestax: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalsalestax_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_totalsalestax_base: WebAttribute<msdyn_workorder_Select, { msdyn_totalsalestax_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalsalestax_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_workhourtemplate_guid: WebAttribute<msdyn_workorder_Select, { msdyn_workhourtemplate_guid: string | null }, { msdyn_workhourtemplate_formatted?: string }>;
  msdyn_worklocation: WebAttribute<msdyn_workorder_Select, { msdyn_worklocation: msdyn_worklocation | null }, { msdyn_worklocation_formatted?: string }>;
  msdyn_workorderarrivaltimekpiid_guid: WebAttribute<msdyn_workorder_Select, { msdyn_workorderarrivaltimekpiid_guid: string | null }, { msdyn_workorderarrivaltimekpiid_formatted?: string }>;
  msdyn_workorderid: WebAttribute<msdyn_workorder_Select, { msdyn_workorderid: string | null }, {  }>;
  msdyn_workorderresolutionkpiid_guid: WebAttribute<msdyn_workorder_Select, { msdyn_workorderresolutionkpiid_guid: string | null }, { msdyn_workorderresolutionkpiid_formatted?: string }>;
  msdyn_workordersummary: WebAttribute<msdyn_workorder_Select, { msdyn_workordersummary: string | null }, {  }>;
  msdyn_workordertype_guid: WebAttribute<msdyn_workorder_Select, { msdyn_workordertype_guid: string | null }, { msdyn_workordertype_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_workorder_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ovs_fiscalquarter_guid: WebAttribute<msdyn_workorder_Select, { ovs_fiscalquarter_guid: string | null }, { ovs_fiscalquarter_formatted?: string }>;
  ovs_fiscalyear_guid: WebAttribute<msdyn_workorder_Select, { ovs_fiscalyear_guid: string | null }, { ovs_fiscalyear_formatted?: string }>;
  ovs_iisid: WebAttribute<msdyn_workorder_Select, { ovs_iisid: string | null }, {  }>;
  ovs_mocid: WebAttribute<msdyn_workorder_Select, { ovs_mocid: string | null }, {  }>;
  ovs_oversighttype_guid: WebAttribute<msdyn_workorder_Select, { ovs_oversighttype_guid: string | null }, { ovs_oversighttype_formatted?: string }>;
  ovs_primaryinspector_guid: WebAttribute<msdyn_workorder_Select, { ovs_primaryinspector_guid: string | null }, { ovs_primaryinspector_formatted?: string }>;
  ovs_rational_guid: WebAttribute<msdyn_workorder_Select, { ovs_rational_guid: string | null }, { ovs_rational_formatted?: string }>;
  ovs_rolluptestdeletemeafter: WebAttribute<msdyn_workorder_Select, { ovs_rolluptestdeletemeafter: Date | null }, { ovs_rolluptestdeletemeafter_formatted?: string }>;
  ovs_rolluptestdeletemeafter_date: WebAttribute<msdyn_workorder_Select, { ovs_rolluptestdeletemeafter_date: Date | null }, { ovs_rolluptestdeletemeafter_date_formatted?: string }>;
  ovs_rolluptestdeletemeafter_state: WebAttribute<msdyn_workorder_Select, { ovs_rolluptestdeletemeafter_state: number | null }, {  }>;
  ovs_secondaryinspector_guid: WebAttribute<msdyn_workorder_Select, { ovs_secondaryinspector_guid: string | null }, { ovs_secondaryinspector_formatted?: string }>;
  ovs_siteofviolation_guid: WebAttribute<msdyn_workorder_Select, { ovs_siteofviolation_guid: string | null }, { ovs_siteofviolation_formatted?: string }>;
  ovs_tyrational_guid: WebAttribute<msdyn_workorder_Select, { ovs_tyrational_guid: string | null }, { ovs_tyrational_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_workorder_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_workorder_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_workorder_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_workorder_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<msdyn_workorder_Select, { processid: string | null }, {  }>;
  stageid: WebAttribute<msdyn_workorder_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_workorder_Select, { statecode: msdyn_workorder_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_workorder_Select, { statuscode: msdyn_workorder_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_workorder_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_workorder_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<msdyn_workorder_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_workorder_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_workorder_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_workorder_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_address1: string;
  msdyn_address2: string;
  msdyn_address3: string;
  msdyn_addressname: string;
  msdyn_agreement_guid: XQW.Guid;
  msdyn_autonumbering: string;
  msdyn_billingaccount_guid: XQW.Guid;
  msdyn_bookingsummary: string;
  msdyn_childindex: number;
  msdyn_city: string;
  msdyn_closedby_guid: XQW.Guid;
  msdyn_completedon: Date;
  msdyn_country: string;
  msdyn_customerasset_guid: XQW.Guid;
  msdyn_datewindowend: Date;
  msdyn_datewindowstart: Date;
  msdyn_estimatesubtotalamount: number;
  msdyn_estimatesubtotalamount_base: number;
  msdyn_firstarrivedon: Date;
  msdyn_followupnote: string;
  msdyn_followuprequired: boolean;
  msdyn_functionallocation_guid: XQW.Guid;
  msdyn_instructions: string;
  msdyn_internalflags: string;
  msdyn_iotalert_guid: XQW.Guid;
  msdyn_isfollowup: boolean;
  msdyn_ismobile: boolean;
  msdyn_latitude: number;
  msdyn_longitude: number;
  msdyn_mapcontrol: string;
  msdyn_name: string;
  msdyn_opportunityid_guid: XQW.Guid;
  msdyn_parentworkorder_guid: XQW.Guid;
  msdyn_postalcode: string;
  msdyn_preferredresource_guid: XQW.Guid;
  msdyn_pricelist_guid: XQW.Guid;
  msdyn_primaryincidentdescription: string;
  msdyn_primaryincidentestimatedduration: number;
  msdyn_primaryincidenttype_guid: XQW.Guid;
  msdyn_priority_guid: XQW.Guid;
  msdyn_reportedbycontact_guid: XQW.Guid;
  msdyn_serviceaccount_guid: XQW.Guid;
  msdyn_servicerequest_guid: XQW.Guid;
  msdyn_serviceterritory_guid: XQW.Guid;
  msdyn_stateorprovince: string;
  msdyn_substatus_guid: XQW.Guid;
  msdyn_subtotalamount: number;
  msdyn_subtotalamount_base: number;
  msdyn_supportcontact_guid: XQW.Guid;
  msdyn_systemstatus: msdyn_wosystemstatus;
  msdyn_taxable: boolean;
  msdyn_taxcode_guid: XQW.Guid;
  msdyn_timeclosed: Date;
  msdyn_timefrompromised: Date;
  msdyn_timegroup_guid: XQW.Guid;
  msdyn_timegroupdetailselected_guid: XQW.Guid;
  msdyn_timetopromised: Date;
  msdyn_timewindowend: Date;
  msdyn_timewindowstart: Date;
  msdyn_totalamount: number;
  msdyn_totalamount_base: number;
  msdyn_totalestimatedduration: number;
  msdyn_totalsalestax: number;
  msdyn_totalsalestax_base: number;
  msdyn_workhourtemplate_guid: XQW.Guid;
  msdyn_worklocation: msdyn_worklocation;
  msdyn_workorderarrivaltimekpiid_guid: XQW.Guid;
  msdyn_workorderid: XQW.Guid;
  msdyn_workorderresolutionkpiid_guid: XQW.Guid;
  msdyn_workordersummary: string;
  msdyn_workordertype_guid: XQW.Guid;
  overriddencreatedon: Date;
  ovs_fiscalquarter_guid: XQW.Guid;
  ovs_fiscalyear_guid: XQW.Guid;
  ovs_iisid: string;
  ovs_mocid: string;
  ovs_oversighttype_guid: XQW.Guid;
  ovs_primaryinspector_guid: XQW.Guid;
  ovs_rational_guid: XQW.Guid;
  ovs_rolluptestdeletemeafter: Date;
  ovs_rolluptestdeletemeafter_date: Date;
  ovs_rolluptestdeletemeafter_state: number;
  ovs_secondaryinspector_guid: XQW.Guid;
  ovs_siteofviolation_guid: XQW.Guid;
  ovs_tyrational_guid: XQW.Guid;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: msdyn_workorder_statecode;
  statuscode: msdyn_workorder_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_workorder_Expand {
  msdyn_SupportContact: WebExpand<msdyn_workorder_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_SupportContact: BookableResource_Result }>;
  msdyn_billingaccount: WebExpand<msdyn_workorder_Expand, Account_Select, Account_Filter, { msdyn_billingaccount: Account_Result }>;
  msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: WebExpand<msdyn_workorder_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: BookableResourceBooking_Result[] }>;
  msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: WebExpand<msdyn_workorder_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: msdyn_workorder_Result[] }>;
  msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: WebExpand<msdyn_workorder_Expand, msdyn_workorderincident_Select, msdyn_workorderincident_Filter, { msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: msdyn_workorderincident_Result[] }>;
  msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: WebExpand<msdyn_workorder_Expand, msdyn_workorderservicetask_Select, msdyn_workorderservicetask_Filter, { msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: msdyn_workorderservicetask_Result[] }>;
  msdyn_parentworkorder_msdyn_workorder: WebExpand<msdyn_workorder_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_parentworkorder_msdyn_workorder: msdyn_workorder_Result }>;
  msdyn_preferredresource: WebExpand<msdyn_workorder_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_preferredresource: BookableResource_Result }>;
  msdyn_reportedbycontact: WebExpand<msdyn_workorder_Expand, Contact_Select, Contact_Filter, { msdyn_reportedbycontact: Contact_Result }>;
  msdyn_serviceaccount: WebExpand<msdyn_workorder_Expand, Account_Select, Account_Filter, { msdyn_serviceaccount: Account_Result }>;
  msdyn_serviceterritory: WebExpand<msdyn_workorder_Expand, Territory_Select, Territory_Filter, { msdyn_serviceterritory: Territory_Result }>;
  msdyn_workorder_Appointments: WebExpand<msdyn_workorder_Expand, Appointment_Select, Appointment_Filter, { msdyn_workorder_Appointments: Appointment_Result[] }>;
  msdyn_workorder_ServiceAppointments: WebExpand<msdyn_workorder_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_workorder_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_workorder_connections1: WebExpand<msdyn_workorder_Expand, Connection_Select, Connection_Filter, { msdyn_workorder_connections1: Connection_Result[] }>;
  msdyn_workorder_connections2: WebExpand<msdyn_workorder_Expand, Connection_Select, Connection_Filter, { msdyn_workorder_connections2: Connection_Result[] }>;
  ovs_FiscalQuarter: WebExpand<msdyn_workorder_Expand, tc_TCFiscalQuarter_Select, tc_TCFiscalQuarter_Filter, { ovs_FiscalQuarter: tc_TCFiscalQuarter_Result }>;
  ovs_FiscalYear: WebExpand<msdyn_workorder_Expand, tc_TCFiscalYear_Select, tc_TCFiscalYear_Filter, { ovs_FiscalYear: tc_TCFiscalYear_Result }>;
  ovs_OversightType: WebExpand<msdyn_workorder_Expand, ovs_OversightType_Select, ovs_OversightType_Filter, { ovs_OversightType: ovs_OversightType_Result }>;
  ovs_PrimaryInspector: WebExpand<msdyn_workorder_Expand, BookableResource_Select, BookableResource_Filter, { ovs_PrimaryInspector: BookableResource_Result }>;
  ovs_Rational: WebExpand<msdyn_workorder_Expand, ovs_TYRational_Select, ovs_TYRational_Filter, { ovs_Rational: ovs_TYRational_Result }>;
  ovs_SecondaryInspector: WebExpand<msdyn_workorder_Expand, BookableResource_Select, BookableResource_Filter, { ovs_SecondaryInspector: BookableResource_Result }>;
  ovs_SiteofViolation: WebExpand<msdyn_workorder_Expand, Account_Select, Account_Filter, { ovs_SiteofViolation: Account_Result }>;
  ovs_TYRational: WebExpand<msdyn_workorder_Expand, ovs_TYRational_Select, ovs_TYRational_Filter, { ovs_TYRational: ovs_TYRational_Result }>;
  ownerid: WebExpand<msdyn_workorder_Expand, Team_Select, Team_Filter, { ownerid: Team_Result }>;
  owningteam: WebExpand<msdyn_workorder_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
}
interface msdyn_workorder_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_agreement_formatted?: string;
  msdyn_billingaccount_formatted?: string;
  msdyn_closedby_formatted?: string;
  msdyn_completedon_formatted?: string;
  msdyn_customerasset_formatted?: string;
  msdyn_datewindowend_formatted?: string;
  msdyn_datewindowstart_formatted?: string;
  msdyn_estimatesubtotalamount_base_formatted?: string;
  msdyn_estimatesubtotalamount_formatted?: string;
  msdyn_firstarrivedon_formatted?: string;
  msdyn_functionallocation_formatted?: string;
  msdyn_iotalert_formatted?: string;
  msdyn_opportunityid_formatted?: string;
  msdyn_parentworkorder_formatted?: string;
  msdyn_preferredresource_formatted?: string;
  msdyn_pricelist_formatted?: string;
  msdyn_primaryincidenttype_formatted?: string;
  msdyn_priority_formatted?: string;
  msdyn_reportedbycontact_formatted?: string;
  msdyn_serviceaccount_formatted?: string;
  msdyn_servicerequest_formatted?: string;
  msdyn_serviceterritory_formatted?: string;
  msdyn_substatus_formatted?: string;
  msdyn_subtotalamount_base_formatted?: string;
  msdyn_subtotalamount_formatted?: string;
  msdyn_supportcontact_formatted?: string;
  msdyn_systemstatus_formatted?: string;
  msdyn_taxcode_formatted?: string;
  msdyn_timeclosed_formatted?: string;
  msdyn_timefrompromised_formatted?: string;
  msdyn_timegroup_formatted?: string;
  msdyn_timegroupdetailselected_formatted?: string;
  msdyn_timetopromised_formatted?: string;
  msdyn_timewindowend_formatted?: string;
  msdyn_timewindowstart_formatted?: string;
  msdyn_totalamount_base_formatted?: string;
  msdyn_totalamount_formatted?: string;
  msdyn_totalsalestax_base_formatted?: string;
  msdyn_totalsalestax_formatted?: string;
  msdyn_workhourtemplate_formatted?: string;
  msdyn_worklocation_formatted?: string;
  msdyn_workorderarrivaltimekpiid_formatted?: string;
  msdyn_workorderresolutionkpiid_formatted?: string;
  msdyn_workordertype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ovs_fiscalquarter_formatted?: string;
  ovs_fiscalyear_formatted?: string;
  ovs_oversighttype_formatted?: string;
  ovs_primaryinspector_formatted?: string;
  ovs_rational_formatted?: string;
  ovs_rolluptestdeletemeafter_date_formatted?: string;
  ovs_rolluptestdeletemeafter_formatted?: string;
  ovs_secondaryinspector_formatted?: string;
  ovs_siteofviolation_formatted?: string;
  ovs_tyrational_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_workorder_Result extends msdyn_workorder_Base, msdyn_workorder_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_agreement_guid: string | null;
  msdyn_billingaccount_guid: string | null;
  msdyn_closedby_guid: string | null;
  msdyn_customerasset_guid: string | null;
  msdyn_functionallocation_guid: string | null;
  msdyn_iotalert_guid: string | null;
  msdyn_opportunityid_guid: string | null;
  msdyn_parentworkorder_guid: string | null;
  msdyn_preferredresource_guid: string | null;
  msdyn_pricelist_guid: string | null;
  msdyn_primaryincidenttype_guid: string | null;
  msdyn_priority_guid: string | null;
  msdyn_reportedbycontact_guid: string | null;
  msdyn_serviceaccount_guid: string | null;
  msdyn_servicerequest_guid: string | null;
  msdyn_serviceterritory_guid: string | null;
  msdyn_substatus_guid: string | null;
  msdyn_supportcontact_guid: string | null;
  msdyn_taxcode_guid: string | null;
  msdyn_timegroup_guid: string | null;
  msdyn_timegroupdetailselected_guid: string | null;
  msdyn_workhourtemplate_guid: string | null;
  msdyn_workorderarrivaltimekpiid_guid: string | null;
  msdyn_workorderresolutionkpiid_guid: string | null;
  msdyn_workordertype_guid: string | null;
  ovs_fiscalquarter_guid: string | null;
  ovs_fiscalyear_guid: string | null;
  ovs_oversighttype_guid: string | null;
  ovs_primaryinspector_guid: string | null;
  ovs_rational_guid: string | null;
  ovs_secondaryinspector_guid: string | null;
  ovs_siteofviolation_guid: string | null;
  ovs_tyrational_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_workorder_RelatedOne {
  msdyn_SupportContact: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_billingaccount: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_parentworkorder_msdyn_workorder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_preferredresource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_reportedbycontact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  msdyn_serviceaccount: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_serviceterritory: WebMappingRetrieve<Territory_Select,Territory_Expand,Territory_Filter,Territory_Fixed,Territory_Result,Territory_FormattedResult>;
  ovs_FiscalQuarter: WebMappingRetrieve<tc_TCFiscalQuarter_Select,tc_TCFiscalQuarter_Expand,tc_TCFiscalQuarter_Filter,tc_TCFiscalQuarter_Fixed,tc_TCFiscalQuarter_Result,tc_TCFiscalQuarter_FormattedResult>;
  ovs_FiscalYear: WebMappingRetrieve<tc_TCFiscalYear_Select,tc_TCFiscalYear_Expand,tc_TCFiscalYear_Filter,tc_TCFiscalYear_Fixed,tc_TCFiscalYear_Result,tc_TCFiscalYear_FormattedResult>;
  ovs_OversightType: WebMappingRetrieve<ovs_OversightType_Select,ovs_OversightType_Expand,ovs_OversightType_Filter,ovs_OversightType_Fixed,ovs_OversightType_Result,ovs_OversightType_FormattedResult>;
  ovs_PrimaryInspector: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  ovs_Rational: WebMappingRetrieve<ovs_TYRational_Select,ovs_TYRational_Expand,ovs_TYRational_Filter,ovs_TYRational_Fixed,ovs_TYRational_Result,ovs_TYRational_FormattedResult>;
  ovs_SecondaryInspector: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  ovs_SiteofViolation: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  ovs_TYRational: WebMappingRetrieve<ovs_TYRational_Select,ovs_TYRational_Expand,ovs_TYRational_Filter,ovs_TYRational_Fixed,ovs_TYRational_Result,ovs_TYRational_FormattedResult>;
  ownerid: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface msdyn_workorder_RelatedMany {
  msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: WebMappingRetrieve<msdyn_workorderincident_Select,msdyn_workorderincident_Expand,msdyn_workorderincident_Filter,msdyn_workorderincident_Fixed,msdyn_workorderincident_Result,msdyn_workorderincident_FormattedResult>;
  msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: WebMappingRetrieve<msdyn_workorderservicetask_Select,msdyn_workorderservicetask_Expand,msdyn_workorderservicetask_Filter,msdyn_workorderservicetask_Fixed,msdyn_workorderservicetask_Result,msdyn_workorderservicetask_FormattedResult>;
  msdyn_workorder_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_workorder_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_workorder_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_workorder_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_workorders: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_workorders: WebMappingRelated<msdyn_workorder_RelatedOne,msdyn_workorder_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_workorders: WebMappingCUDA<msdyn_workorder_Create,msdyn_workorder_Update,msdyn_workorder_Select>;
}
