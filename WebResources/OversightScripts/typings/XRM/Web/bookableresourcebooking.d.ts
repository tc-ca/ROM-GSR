interface BookableResourceBooking_Base extends WebEntity {
  bookableresourcebookingid?: string | null;
  bookingtype?: bookableresourcebooking_bookingtype | null;
  createdon?: Date | null;
  duration?: number | null;
  endtime?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_acceptcascadecrewchanges?: boolean | null;
  msdyn_actualarrivaltime?: Date | null;
  msdyn_actualtravelduration?: number | null;
  msdyn_allowoverlapping?: boolean | null;
  msdyn_bookingmethod?: msdyn_resourceschedulesource | null;
  msdyn_cascadecrewchanges?: boolean | null;
  msdyn_crewmembertype?: msdyn_crewmembertype | null;
  msdyn_effort?: number | null;
  msdyn_estimatedarrivaltime?: Date | null;
  msdyn_estimatedtravelduration?: number | null;
  msdyn_internalflags?: string | null;
  msdyn_latitude?: number | null;
  msdyn_longitude?: number | null;
  msdyn_milestraveled?: number | null;
  msdyn_offlinetimestamp?: Date | null;
  msdyn_preventtimestampcreation?: boolean | null;
  msdyn_signature?: string | null;
  msdyn_slottext?: string | null;
  msdyn_totalbillableduration?: number | null;
  msdyn_totalbreakduration?: number | null;
  msdyn_totalcost?: number | null;
  msdyn_totalcost_base?: number | null;
  msdyn_totaldurationinprogress?: number | null;
  msdyn_traveltimerescheduling?: boolean | null;
  msdyn_ursinternalflags?: string | null;
  msdyn_worklocation?: msdyn_worklocation | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  starttime?: Date | null;
  statecode?: bookableresourcebooking_statecode | null;
  statuscode?: bookableresourcebooking_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface BookableResourceBooking_Relationships {
  BookingStatus?: BookingStatus_Result | null;
  Resource?: BookableResource_Result | null;
  bookableresourcebooking_Appointments?: Appointment_Result[] | null;
  bookableresourcebooking_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_AppointmentBookingId?: Appointment_Result | null;
  msdyn_Crew?: BookableResource_Result | null;
<<<<<<< HEAD
  msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking?: msdyn_workorderservicetask_Result[] | null;
=======
>>>>>>> 53681a51be8068139a23c22879d3b99dd51be182
}
interface BookableResourceBooking extends BookableResourceBooking_Base, BookableResourceBooking_Relationships {
  BookingStatus_bind$bookingstatuses?: string | null;
  Header_bind$bookableresourcebookingheaders?: string | null;
  Resource_bind$bookableresources?: string | null;
  msdyn_AppointmentBookingId_bind$appointments?: string | null;
  msdyn_BookingSetupMetadataId_bind$msdyn_bookingsetupmetadatas?: string | null;
  msdyn_Crew_bind$bookableresources?: string | null;
  msdyn_ResourceRequirement_bind$msdyn_resourcerequirements?: string | null;
  msdyn_agreementbookingdate_bind$msdyn_agreementbookingdates?: string | null;
  msdyn_requirementgroupid_bind$msdyn_requirementgroups?: string | null;
  msdyn_resourcegroup_bind$bookableresources?: string | null;
  msdyn_serviceappointment_bind$serviceappointments?: string | null;
  msdyn_timegroupdetailselected_bind$msdyn_timegroupdetails?: string | null;
  msdyn_workorder_bind$msdyn_workorders?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface BookableResourceBooking_Create extends BookableResourceBooking {
}
interface BookableResourceBooking_Update extends BookableResourceBooking {
}
interface BookableResourceBooking_Select {
  bookableresourcebookingid: WebAttribute<BookableResourceBooking_Select, { bookableresourcebookingid: string | null }, {  }>;
  bookingstatus_guid: WebAttribute<BookableResourceBooking_Select, { bookingstatus_guid: string | null }, { bookingstatus_formatted?: string }>;
  bookingtype: WebAttribute<BookableResourceBooking_Select, { bookingtype: bookableresourcebooking_bookingtype | null }, { bookingtype_formatted?: string }>;
  createdby_guid: WebAttribute<BookableResourceBooking_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<BookableResourceBooking_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<BookableResourceBooking_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  duration: WebAttribute<BookableResourceBooking_Select, { duration: number | null }, {  }>;
  endtime: WebAttribute<BookableResourceBooking_Select, { endtime: Date | null }, { endtime_formatted?: string }>;
  exchangerate: WebAttribute<BookableResourceBooking_Select, { exchangerate: number | null }, {  }>;
  header_guid: WebAttribute<BookableResourceBooking_Select, { header_guid: string | null }, { header_formatted?: string }>;
  importsequencenumber: WebAttribute<BookableResourceBooking_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<BookableResourceBooking_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<BookableResourceBooking_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<BookableResourceBooking_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_acceptcascadecrewchanges: WebAttribute<BookableResourceBooking_Select, { msdyn_acceptcascadecrewchanges: boolean | null }, {  }>;
  msdyn_actualarrivaltime: WebAttribute<BookableResourceBooking_Select, { msdyn_actualarrivaltime: Date | null }, { msdyn_actualarrivaltime_formatted?: string }>;
  msdyn_actualtravelduration: WebAttribute<BookableResourceBooking_Select, { msdyn_actualtravelduration: number | null }, {  }>;
  msdyn_agreementbookingdate_guid: WebAttribute<BookableResourceBooking_Select, { msdyn_agreementbookingdate_guid: string | null }, { msdyn_agreementbookingdate_formatted?: string }>;
  msdyn_allowoverlapping: WebAttribute<BookableResourceBooking_Select, { msdyn_allowoverlapping: boolean | null }, {  }>;
  msdyn_appointmentbookingid_guid: WebAttribute<BookableResourceBooking_Select, { msdyn_appointmentbookingid_guid: string | null }, { msdyn_appointmentbookingid_formatted?: string }>;
  msdyn_bookingmethod: WebAttribute<BookableResourceBooking_Select, { msdyn_bookingmethod: msdyn_resourceschedulesource | null }, { msdyn_bookingmethod_formatted?: string }>;
  msdyn_bookingsetupmetadataid_guid: WebAttribute<BookableResourceBooking_Select, { msdyn_bookingsetupmetadataid_guid: string | null }, { msdyn_bookingsetupmetadataid_formatted?: string }>;
  msdyn_cascadecrewchanges: WebAttribute<BookableResourceBooking_Select, { msdyn_cascadecrewchanges: boolean | null }, {  }>;
  msdyn_crew_guid: WebAttribute<BookableResourceBooking_Select, { msdyn_crew_guid: string | null }, { msdyn_crew_formatted?: string }>;
  msdyn_crewmembertype: WebAttribute<BookableResourceBooking_Select, { msdyn_crewmembertype: msdyn_crewmembertype | null }, { msdyn_crewmembertype_formatted?: string }>;
  msdyn_effort: WebAttribute<BookableResourceBooking_Select, { msdyn_effort: number | null }, {  }>;
  msdyn_estimatedarrivaltime: WebAttribute<BookableResourceBooking_Select, { msdyn_estimatedarrivaltime: Date | null }, { msdyn_estimatedarrivaltime_formatted?: string }>;
  msdyn_estimatedtravelduration: WebAttribute<BookableResourceBooking_Select, { msdyn_estimatedtravelduration: number | null }, {  }>;
  msdyn_internalflags: WebAttribute<BookableResourceBooking_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_latitude: WebAttribute<BookableResourceBooking_Select, { msdyn_latitude: number | null }, {  }>;
  msdyn_longitude: WebAttribute<BookableResourceBooking_Select, { msdyn_longitude: number | null }, {  }>;
  msdyn_milestraveled: WebAttribute<BookableResourceBooking_Select, { msdyn_milestraveled: number | null }, {  }>;
  msdyn_offlinetimestamp: WebAttribute<BookableResourceBooking_Select, { msdyn_offlinetimestamp: Date | null }, { msdyn_offlinetimestamp_formatted?: string }>;
  msdyn_preventtimestampcreation: WebAttribute<BookableResourceBooking_Select, { msdyn_preventtimestampcreation: boolean | null }, {  }>;
  msdyn_requirementgroupid_guid: WebAttribute<BookableResourceBooking_Select, { msdyn_requirementgroupid_guid: string | null }, { msdyn_requirementgroupid_formatted?: string }>;
  msdyn_resourcegroup_guid: WebAttribute<BookableResourceBooking_Select, { msdyn_resourcegroup_guid: string | null }, { msdyn_resourcegroup_formatted?: string }>;
  msdyn_resourcerequirement_guid: WebAttribute<BookableResourceBooking_Select, { msdyn_resourcerequirement_guid: string | null }, { msdyn_resourcerequirement_formatted?: string }>;
  msdyn_serviceappointment_guid: WebAttribute<BookableResourceBooking_Select, { msdyn_serviceappointment_guid: string | null }, { msdyn_serviceappointment_formatted?: string }>;
  msdyn_signature: WebAttribute<BookableResourceBooking_Select, { msdyn_signature: string | null }, {  }>;
  msdyn_slottext: WebAttribute<BookableResourceBooking_Select, { msdyn_slottext: string | null }, {  }>;
  msdyn_timegroupdetailselected_guid: WebAttribute<BookableResourceBooking_Select, { msdyn_timegroupdetailselected_guid: string | null }, { msdyn_timegroupdetailselected_formatted?: string }>;
  msdyn_totalbillableduration: WebAttribute<BookableResourceBooking_Select, { msdyn_totalbillableduration: number | null }, {  }>;
  msdyn_totalbreakduration: WebAttribute<BookableResourceBooking_Select, { msdyn_totalbreakduration: number | null }, {  }>;
  msdyn_totalcost: WebAttribute<BookableResourceBooking_Select, { msdyn_totalcost: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalcost_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_totalcost_base: WebAttribute<BookableResourceBooking_Select, { msdyn_totalcost_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalcost_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_totaldurationinprogress: WebAttribute<BookableResourceBooking_Select, { msdyn_totaldurationinprogress: number | null }, {  }>;
  msdyn_traveltimerescheduling: WebAttribute<BookableResourceBooking_Select, { msdyn_traveltimerescheduling: boolean | null }, {  }>;
  msdyn_ursinternalflags: WebAttribute<BookableResourceBooking_Select, { msdyn_ursinternalflags: string | null }, {  }>;
  msdyn_worklocation: WebAttribute<BookableResourceBooking_Select, { msdyn_worklocation: msdyn_worklocation | null }, { msdyn_worklocation_formatted?: string }>;
  msdyn_workorder_guid: WebAttribute<BookableResourceBooking_Select, { msdyn_workorder_guid: string | null }, { msdyn_workorder_formatted?: string }>;
  name: WebAttribute<BookableResourceBooking_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<BookableResourceBooking_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<BookableResourceBooking_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<BookableResourceBooking_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<BookableResourceBooking_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<BookableResourceBooking_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<BookableResourceBooking_Select, { processid: string | null }, {  }>;
  resource_guid: WebAttribute<BookableResourceBooking_Select, { resource_guid: string | null }, { resource_formatted?: string }>;
  stageid: WebAttribute<BookableResourceBooking_Select, { stageid: string | null }, {  }>;
  starttime: WebAttribute<BookableResourceBooking_Select, { starttime: Date | null }, { starttime_formatted?: string }>;
  statecode: WebAttribute<BookableResourceBooking_Select, { statecode: bookableresourcebooking_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<BookableResourceBooking_Select, { statuscode: bookableresourcebooking_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<BookableResourceBooking_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<BookableResourceBooking_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<BookableResourceBooking_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<BookableResourceBooking_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<BookableResourceBooking_Select, { versionnumber: number | null }, {  }>;
}
interface BookableResourceBooking_Filter {
  bookableresourcebookingid: XQW.Guid;
  bookingstatus_guid: XQW.Guid;
  bookingtype: bookableresourcebooking_bookingtype;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  duration: number;
  endtime: Date;
  exchangerate: any;
  header_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_acceptcascadecrewchanges: boolean;
  msdyn_actualarrivaltime: Date;
  msdyn_actualtravelduration: number;
  msdyn_agreementbookingdate_guid: XQW.Guid;
  msdyn_allowoverlapping: boolean;
  msdyn_appointmentbookingid_guid: XQW.Guid;
  msdyn_bookingmethod: msdyn_resourceschedulesource;
  msdyn_bookingsetupmetadataid_guid: XQW.Guid;
  msdyn_cascadecrewchanges: boolean;
  msdyn_crew_guid: XQW.Guid;
  msdyn_crewmembertype: msdyn_crewmembertype;
  msdyn_effort: any;
  msdyn_estimatedarrivaltime: Date;
  msdyn_estimatedtravelduration: number;
  msdyn_internalflags: string;
  msdyn_latitude: number;
  msdyn_longitude: number;
  msdyn_milestraveled: number;
  msdyn_offlinetimestamp: Date;
  msdyn_preventtimestampcreation: boolean;
  msdyn_requirementgroupid_guid: XQW.Guid;
  msdyn_resourcegroup_guid: XQW.Guid;
  msdyn_resourcerequirement_guid: XQW.Guid;
  msdyn_serviceappointment_guid: XQW.Guid;
  msdyn_signature: string;
  msdyn_slottext: string;
  msdyn_timegroupdetailselected_guid: XQW.Guid;
  msdyn_totalbillableduration: number;
  msdyn_totalbreakduration: number;
  msdyn_totalcost: number;
  msdyn_totalcost_base: number;
  msdyn_totaldurationinprogress: number;
  msdyn_traveltimerescheduling: boolean;
  msdyn_ursinternalflags: string;
  msdyn_worklocation: msdyn_worklocation;
  msdyn_workorder_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processid: XQW.Guid;
  resource_guid: XQW.Guid;
  stageid: XQW.Guid;
  starttime: Date;
  statecode: bookableresourcebooking_statecode;
  statuscode: bookableresourcebooking_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface BookableResourceBooking_Expand {
  BookingStatus: WebExpand<BookableResourceBooking_Expand, BookingStatus_Select, BookingStatus_Filter, { BookingStatus: BookingStatus_Result }>;
  Resource: WebExpand<BookableResourceBooking_Expand, BookableResource_Select, BookableResource_Filter, { Resource: BookableResource_Result }>;
  bookableresourcebooking_Appointments: WebExpand<BookableResourceBooking_Expand, Appointment_Select, Appointment_Filter, { bookableresourcebooking_Appointments: Appointment_Result[] }>;
  bookableresourcebooking_ServiceAppointments: WebExpand<BookableResourceBooking_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { bookableresourcebooking_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_AppointmentBookingId: WebExpand<BookableResourceBooking_Expand, Appointment_Select, Appointment_Filter, { msdyn_AppointmentBookingId: Appointment_Result }>;
  msdyn_Crew: WebExpand<BookableResourceBooking_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_Crew: BookableResource_Result }>;
<<<<<<< HEAD
  msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: WebExpand<BookableResourceBooking_Expand, msdyn_workorderservicetask_Select, msdyn_workorderservicetask_Filter, { msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: msdyn_workorderservicetask_Result[] }>;
=======
>>>>>>> 53681a51be8068139a23c22879d3b99dd51be182
  msdyn_resourcegroup: WebExpand<BookableResourceBooking_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_resourcegroup: BookableResource_Result }>;
  msdyn_serviceappointment: WebExpand<BookableResourceBooking_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_serviceappointment: ServiceAppointment_Result }>;
  msdyn_workorder: WebExpand<BookableResourceBooking_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_workorder: msdyn_workorder_Result }>;
  ownerid: WebExpand<BookableResourceBooking_Expand, Team_Select, Team_Filter, { ownerid: Team_Result }>;
  owningteam: WebExpand<BookableResourceBooking_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
}
interface BookableResourceBooking_FormattedResult {
  bookingstatus_formatted?: string;
  bookingtype_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  endtime_formatted?: string;
  header_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_actualarrivaltime_formatted?: string;
  msdyn_agreementbookingdate_formatted?: string;
  msdyn_appointmentbookingid_formatted?: string;
  msdyn_bookingmethod_formatted?: string;
  msdyn_bookingsetupmetadataid_formatted?: string;
  msdyn_crew_formatted?: string;
  msdyn_crewmembertype_formatted?: string;
  msdyn_estimatedarrivaltime_formatted?: string;
  msdyn_offlinetimestamp_formatted?: string;
  msdyn_requirementgroupid_formatted?: string;
  msdyn_resourcegroup_formatted?: string;
  msdyn_resourcerequirement_formatted?: string;
  msdyn_serviceappointment_formatted?: string;
  msdyn_timegroupdetailselected_formatted?: string;
  msdyn_totalcost_base_formatted?: string;
  msdyn_totalcost_formatted?: string;
  msdyn_worklocation_formatted?: string;
  msdyn_workorder_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  resource_formatted?: string;
  starttime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface BookableResourceBooking_Result extends BookableResourceBooking_Base, BookableResourceBooking_Relationships {
  "@odata.etag": string;
  bookingstatus_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  header_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_agreementbookingdate_guid: string | null;
  msdyn_appointmentbookingid_guid: string | null;
  msdyn_bookingsetupmetadataid_guid: string | null;
  msdyn_crew_guid: string | null;
  msdyn_requirementgroupid_guid: string | null;
  msdyn_resourcegroup_guid: string | null;
  msdyn_resourcerequirement_guid: string | null;
  msdyn_serviceappointment_guid: string | null;
  msdyn_timegroupdetailselected_guid: string | null;
  msdyn_workorder_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  resource_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface BookableResourceBooking_RelatedOne {
  BookingStatus: WebMappingRetrieve<BookingStatus_Select,BookingStatus_Expand,BookingStatus_Filter,BookingStatus_Fixed,BookingStatus_Result,BookingStatus_FormattedResult>;
  Resource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_AppointmentBookingId: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_Crew: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_resourcegroup: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_serviceappointment: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_workorder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  ownerid: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface BookableResourceBooking_RelatedMany {
  bookableresourcebooking_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  bookableresourcebooking_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
<<<<<<< HEAD
  msdyn_bookableresourcebooking_msdyn_workorderservicetask_Booking: WebMappingRetrieve<msdyn_workorderservicetask_Select,msdyn_workorderservicetask_Expand,msdyn_workorderservicetask_Filter,msdyn_workorderservicetask_Fixed,msdyn_workorderservicetask_Result,msdyn_workorderservicetask_FormattedResult>;
=======
>>>>>>> 53681a51be8068139a23c22879d3b99dd51be182
}
interface WebEntitiesRetrieve {
  bookableresourcebookings: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
}
interface WebEntitiesRelated {
  bookableresourcebookings: WebMappingRelated<BookableResourceBooking_RelatedOne,BookableResourceBooking_RelatedMany>;
}
interface WebEntitiesCUDA {
  bookableresourcebookings: WebMappingCUDA<BookableResourceBooking_Create,BookableResourceBooking_Update,BookableResourceBooking_Select>;
}
