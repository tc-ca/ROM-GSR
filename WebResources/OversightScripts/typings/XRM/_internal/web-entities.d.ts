interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUDA<ICreate, IUpdate, ISelect> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
interface WebEntity {
}
interface WebEntity_Fixed {
  "@odata.etag": string;
}
interface Account_Base extends WebEntity {
}
interface Account_Fixed extends WebEntity_Fixed {
  accountid: string;
}
interface Account extends Account_Base, Account_Relationships {
}
interface Account_Relationships {
}
interface Account_Result extends Account_Base, Account_Relationships {
}
interface Account_FormattedResult {
}
interface Account_Select {
}
interface Account_Expand {
}
interface Account_Filter {
}
interface Account_Create extends Account {
}
interface Account_Update extends Account {
}
interface BookableResource_Base extends WebEntity {
}
interface BookableResource_Fixed extends WebEntity_Fixed {
  bookableresourceid: string;
}
interface BookableResource extends BookableResource_Base, BookableResource_Relationships {
}
interface BookableResource_Relationships {
}
interface BookableResource_Result extends BookableResource_Base, BookableResource_Relationships {
}
interface BookableResource_FormattedResult {
}
interface BookableResource_Select {
}
interface BookableResource_Expand {
}
interface BookableResource_Filter {
}
interface BookableResource_Create extends BookableResource {
}
interface BookableResource_Update extends BookableResource {
}
interface BookableResourceBooking_Base extends WebEntity {
}
interface BookableResourceBooking_Fixed extends WebEntity_Fixed {
  bookableresourcebookingid: string;
}
interface BookableResourceBooking extends BookableResourceBooking_Base, BookableResourceBooking_Relationships {
}
interface BookableResourceBooking_Relationships {
}
interface BookableResourceBooking_Result extends BookableResourceBooking_Base, BookableResourceBooking_Relationships {
}
interface BookableResourceBooking_FormattedResult {
}
interface BookableResourceBooking_Select {
}
interface BookableResourceBooking_Expand {
}
interface BookableResourceBooking_Filter {
}
interface BookableResourceBooking_Create extends BookableResourceBooking {
}
interface BookableResourceBooking_Update extends BookableResourceBooking {
}
interface Contact_Base extends WebEntity {
}
interface Contact_Fixed extends WebEntity_Fixed {
  contactid: string;
}
interface Contact extends Contact_Base, Contact_Relationships {
}
interface Contact_Relationships {
}
interface Contact_Result extends Contact_Base, Contact_Relationships {
}
interface Contact_FormattedResult {
}
interface Contact_Select {
}
interface Contact_Expand {
}
interface Contact_Filter {
}
interface Contact_Create extends Contact {
}
interface Contact_Update extends Contact {
}
interface msdyn_incidenttypeservicetask_Base extends WebEntity {
}
interface msdyn_incidenttypeservicetask_Fixed extends WebEntity_Fixed {
  msdyn_incidenttypeservicetaskid: string;
}
interface msdyn_incidenttypeservicetask extends msdyn_incidenttypeservicetask_Base, msdyn_incidenttypeservicetask_Relationships {
}
interface msdyn_incidenttypeservicetask_Relationships {
}
interface msdyn_incidenttypeservicetask_Result extends msdyn_incidenttypeservicetask_Base, msdyn_incidenttypeservicetask_Relationships {
}
interface msdyn_incidenttypeservicetask_FormattedResult {
}
interface msdyn_incidenttypeservicetask_Select {
}
interface msdyn_incidenttypeservicetask_Expand {
}
interface msdyn_incidenttypeservicetask_Filter {
}
interface msdyn_incidenttypeservicetask_Create extends msdyn_incidenttypeservicetask {
}
interface msdyn_incidenttypeservicetask_Update extends msdyn_incidenttypeservicetask {
}
interface msdyn_servicetasktype_Base extends WebEntity {
}
interface msdyn_servicetasktype_Fixed extends WebEntity_Fixed {
  msdyn_servicetasktypeid: string;
}
interface msdyn_servicetasktype extends msdyn_servicetasktype_Base, msdyn_servicetasktype_Relationships {
}
interface msdyn_servicetasktype_Relationships {
}
interface msdyn_servicetasktype_Result extends msdyn_servicetasktype_Base, msdyn_servicetasktype_Relationships {
}
interface msdyn_servicetasktype_FormattedResult {
}
interface msdyn_servicetasktype_Select {
}
interface msdyn_servicetasktype_Expand {
}
interface msdyn_servicetasktype_Filter {
}
interface msdyn_servicetasktype_Create extends msdyn_servicetasktype {
}
interface msdyn_servicetasktype_Update extends msdyn_servicetasktype {
}
interface msdyn_workorder_Base extends WebEntity {
}
interface msdyn_workorder_Fixed extends WebEntity_Fixed {
  msdyn_workorderid: string;
}
interface msdyn_workorder extends msdyn_workorder_Base, msdyn_workorder_Relationships {
}
interface msdyn_workorder_Relationships {
}
interface msdyn_workorder_Result extends msdyn_workorder_Base, msdyn_workorder_Relationships {
}
interface msdyn_workorder_FormattedResult {
}
interface msdyn_workorder_Select {
}
interface msdyn_workorder_Expand {
}
interface msdyn_workorder_Filter {
}
interface msdyn_workorder_Create extends msdyn_workorder {
}
interface msdyn_workorder_Update extends msdyn_workorder {
}
interface msdyn_workorderservicetask_Base extends WebEntity {
}
interface msdyn_workorderservicetask_Fixed extends WebEntity_Fixed {
  msdyn_workorderservicetaskid: string;
}
interface msdyn_workorderservicetask extends msdyn_workorderservicetask_Base, msdyn_workorderservicetask_Relationships {
}
interface msdyn_workorderservicetask_Relationships {
}
interface msdyn_workorderservicetask_Result extends msdyn_workorderservicetask_Base, msdyn_workorderservicetask_Relationships {
}
interface msdyn_workorderservicetask_FormattedResult {
}
interface msdyn_workorderservicetask_Select {
}
interface msdyn_workorderservicetask_Expand {
}
interface msdyn_workorderservicetask_Filter {
}
interface msdyn_workorderservicetask_Create extends msdyn_workorderservicetask {
}
interface msdyn_workorderservicetask_Update extends msdyn_workorderservicetask {
}
interface ovs_operation_Base extends WebEntity {
}
interface ovs_operation_Fixed extends WebEntity_Fixed {
  ovs_operationid: string;
}
interface ovs_operation extends ovs_operation_Base, ovs_operation_Relationships {
}
interface ovs_operation_Relationships {
}
interface ovs_operation_Result extends ovs_operation_Base, ovs_operation_Relationships {
}
interface ovs_operation_FormattedResult {
}
interface ovs_operation_Select {
}
interface ovs_operation_Expand {
}
interface ovs_operation_Filter {
}
interface ovs_operation_Create extends ovs_operation {
}
interface ovs_operation_Update extends ovs_operation {
}
interface ovs_OversightType_Base extends WebEntity {
}
interface ovs_OversightType_Fixed extends WebEntity_Fixed {
  ovs_oversighttypeid: string;
}
interface ovs_OversightType extends ovs_OversightType_Base, ovs_OversightType_Relationships {
}
interface ovs_OversightType_Relationships {
}
interface ovs_OversightType_Result extends ovs_OversightType_Base, ovs_OversightType_Relationships {
}
interface ovs_OversightType_FormattedResult {
}
interface ovs_OversightType_Select {
}
interface ovs_OversightType_Expand {
}
interface ovs_OversightType_Filter {
}
interface ovs_OversightType_Create extends ovs_OversightType {
}
interface ovs_OversightType_Update extends ovs_OversightType {
}
interface ovs_Questionnaire_Base extends WebEntity {
}
interface ovs_Questionnaire_Fixed extends WebEntity_Fixed {
  ovs_questionnaireid: string;
}
interface ovs_Questionnaire extends ovs_Questionnaire_Base, ovs_Questionnaire_Relationships {
}
interface ovs_Questionnaire_Relationships {
}
interface ovs_Questionnaire_Result extends ovs_Questionnaire_Base, ovs_Questionnaire_Relationships {
}
interface ovs_Questionnaire_FormattedResult {
}
interface ovs_Questionnaire_Select {
}
interface ovs_Questionnaire_Expand {
}
interface ovs_Questionnaire_Filter {
}
interface ovs_Questionnaire_Create extends ovs_Questionnaire {
}
interface ovs_Questionnaire_Update extends ovs_Questionnaire {
}
interface ovs_SiteType_Base extends WebEntity {
}
interface ovs_SiteType_Fixed extends WebEntity_Fixed {
  ovs_sitetypeid: string;
}
interface ovs_SiteType extends ovs_SiteType_Base, ovs_SiteType_Relationships {
}
interface ovs_SiteType_Relationships {
}
interface ovs_SiteType_Result extends ovs_SiteType_Base, ovs_SiteType_Relationships {
}
interface ovs_SiteType_FormattedResult {
}
interface ovs_SiteType_Select {
}
interface ovs_SiteType_Expand {
}
interface ovs_SiteType_Filter {
}
interface ovs_SiteType_Create extends ovs_SiteType {
}
interface ovs_SiteType_Update extends ovs_SiteType {
}
interface ovs_TYRational_Base extends WebEntity {
}
interface ovs_TYRational_Fixed extends WebEntity_Fixed {
  ovs_tyrationalid: string;
}
interface ovs_TYRational extends ovs_TYRational_Base, ovs_TYRational_Relationships {
}
interface ovs_TYRational_Relationships {
}
interface ovs_TYRational_Result extends ovs_TYRational_Base, ovs_TYRational_Relationships {
}
interface ovs_TYRational_FormattedResult {
}
interface ovs_TYRational_Select {
}
interface ovs_TYRational_Expand {
}
interface ovs_TYRational_Filter {
}
interface ovs_TYRational_Create extends ovs_TYRational {
}
interface ovs_TYRational_Update extends ovs_TYRational {
}
interface ovs_UnplannedForecast_Base extends WebEntity {
}
interface ovs_UnplannedForecast_Fixed extends WebEntity_Fixed {
  ovs_unplannedforecastid: string;
}
interface ovs_UnplannedForecast extends ovs_UnplannedForecast_Base, ovs_UnplannedForecast_Relationships {
}
interface ovs_UnplannedForecast_Relationships {
}
interface ovs_UnplannedForecast_Result extends ovs_UnplannedForecast_Base, ovs_UnplannedForecast_Relationships {
}
interface ovs_UnplannedForecast_FormattedResult {
}
interface ovs_UnplannedForecast_Select {
}
interface ovs_UnplannedForecast_Expand {
}
interface ovs_UnplannedForecast_Filter {
}
interface ovs_UnplannedForecast_Create extends ovs_UnplannedForecast {
}
interface ovs_UnplannedForecast_Update extends ovs_UnplannedForecast {
}
interface tc_Account_Account_test_ains_Base extends WebEntity {
}
interface tc_Account_Account_test_ains_Fixed extends WebEntity_Fixed {
  tc_account_account_test_ainsid: string;
}
interface tc_Account_Account_test_ains extends tc_Account_Account_test_ains_Base, tc_Account_Account_test_ains_Relationships {
}
interface tc_Account_Account_test_ains_Relationships {
}
interface tc_Account_Account_test_ains_Result extends tc_Account_Account_test_ains_Base, tc_Account_Account_test_ains_Relationships {
}
interface tc_Account_Account_test_ains_FormattedResult {
}
interface tc_Account_Account_test_ains_Select {
}
interface tc_Account_Account_test_ains_Expand {
}
interface tc_Account_Account_test_ains_Filter {
}
interface tc_Account_Account_test_ains_Create extends tc_Account_Account_test_ains {
}
interface tc_Account_Account_test_ains_Update extends tc_Account_Account_test_ains {
}
interface tc_ACFacility_Base extends WebEntity {
}
interface tc_ACFacility_Fixed extends WebEntity_Fixed {
  tc_acfacilityid: string;
}
interface tc_ACFacility extends tc_ACFacility_Base, tc_ACFacility_Relationships {
}
interface tc_ACFacility_Relationships {
}
interface tc_ACFacility_Result extends tc_ACFacility_Base, tc_ACFacility_Relationships {
}
interface tc_ACFacility_FormattedResult {
}
interface tc_ACFacility_Select {
}
interface tc_ACFacility_Expand {
}
interface tc_ACFacility_Filter {
}
interface tc_ACFacility_Create extends tc_ACFacility {
}
interface tc_ACFacility_Update extends tc_ACFacility {
}
interface tc_ACFacilityAccounts_Base extends WebEntity {
}
interface tc_ACFacilityAccounts_Fixed extends WebEntity_Fixed {
  tc_acfacilityaccountsid: string;
}
interface tc_ACFacilityAccounts extends tc_ACFacilityAccounts_Base, tc_ACFacilityAccounts_Relationships {
}
interface tc_ACFacilityAccounts_Relationships {
}
interface tc_ACFacilityAccounts_Result extends tc_ACFacilityAccounts_Base, tc_ACFacilityAccounts_Relationships {
}
interface tc_ACFacilityAccounts_FormattedResult {
}
interface tc_ACFacilityAccounts_Select {
}
interface tc_ACFacilityAccounts_Expand {
}
interface tc_ACFacilityAccounts_Filter {
}
interface tc_ACFacilityAccounts_Create extends tc_ACFacilityAccounts {
}
interface tc_ACFacilityAccounts_Update extends tc_ACFacilityAccounts {
}
interface tc_ACFacilityContacts_Base extends WebEntity {
}
interface tc_ACFacilityContacts_Fixed extends WebEntity_Fixed {
  tc_acfacilitycontactsid: string;
}
interface tc_ACFacilityContacts extends tc_ACFacilityContacts_Base, tc_ACFacilityContacts_Relationships {
}
interface tc_ACFacilityContacts_Relationships {
}
interface tc_ACFacilityContacts_Result extends tc_ACFacilityContacts_Base, tc_ACFacilityContacts_Relationships {
}
interface tc_ACFacilityContacts_FormattedResult {
}
interface tc_ACFacilityContacts_Select {
}
interface tc_ACFacilityContacts_Expand {
}
interface tc_ACFacilityContacts_Filter {
}
interface tc_ACFacilityContacts_Create extends tc_ACFacilityContacts {
}
interface tc_ACFacilityContacts_Update extends tc_ACFacilityContacts {
}
interface tc_ACFacilityLocation_Base extends WebEntity {
}
interface tc_ACFacilityLocation_Fixed extends WebEntity_Fixed {
  tc_acfacilitylocationid: string;
}
interface tc_ACFacilityLocation extends tc_ACFacilityLocation_Base, tc_ACFacilityLocation_Relationships {
}
interface tc_ACFacilityLocation_Relationships {
}
interface tc_ACFacilityLocation_Result extends tc_ACFacilityLocation_Base, tc_ACFacilityLocation_Relationships {
}
interface tc_ACFacilityLocation_FormattedResult {
}
interface tc_ACFacilityLocation_Select {
}
interface tc_ACFacilityLocation_Expand {
}
interface tc_ACFacilityLocation_Filter {
}
interface tc_ACFacilityLocation_Create extends tc_ACFacilityLocation {
}
interface tc_ACFacilityLocation_Update extends tc_ACFacilityLocation {
}
interface tc_ACFacilityLocationAccount_Base extends WebEntity {
}
interface tc_ACFacilityLocationAccount_Fixed extends WebEntity_Fixed {
  tc_acfacilitylocationaccountid: string;
}
interface tc_ACFacilityLocationAccount extends tc_ACFacilityLocationAccount_Base, tc_ACFacilityLocationAccount_Relationships {
}
interface tc_ACFacilityLocationAccount_Relationships {
}
interface tc_ACFacilityLocationAccount_Result extends tc_ACFacilityLocationAccount_Base, tc_ACFacilityLocationAccount_Relationships {
}
interface tc_ACFacilityLocationAccount_FormattedResult {
}
interface tc_ACFacilityLocationAccount_Select {
}
interface tc_ACFacilityLocationAccount_Expand {
}
interface tc_ACFacilityLocationAccount_Filter {
}
interface tc_ACFacilityLocationAccount_Create extends tc_ACFacilityLocationAccount {
}
interface tc_ACFacilityLocationAccount_Update extends tc_ACFacilityLocationAccount {
}
interface tc_Country_Base extends WebEntity {
}
interface tc_Country_Fixed extends WebEntity_Fixed {
  tc_countryid: string;
}
interface tc_Country extends tc_Country_Base, tc_Country_Relationships {
}
interface tc_Country_Relationships {
}
interface tc_Country_Result extends tc_Country_Base, tc_Country_Relationships {
}
interface tc_Country_FormattedResult {
}
interface tc_Country_Select {
}
interface tc_Country_Expand {
}
interface tc_Country_Filter {
}
interface tc_Country_Create extends tc_Country {
}
interface tc_Country_Update extends tc_Country {
}
interface tc_Province_Base extends WebEntity {
}
interface tc_Province_Fixed extends WebEntity_Fixed {
  tc_provinceid: string;
}
interface tc_Province extends tc_Province_Base, tc_Province_Relationships {
}
interface tc_Province_Relationships {
}
interface tc_Province_Result extends tc_Province_Base, tc_Province_Relationships {
}
interface tc_Province_FormattedResult {
}
interface tc_Province_Select {
}
interface tc_Province_Expand {
}
interface tc_Province_Filter {
}
interface tc_Province_Create extends tc_Province {
}
interface tc_Province_Update extends tc_Province {
}
interface tc_TCAccountFacilityRelationType_Base extends WebEntity {
}
interface tc_TCAccountFacilityRelationType_Fixed extends WebEntity_Fixed {
  tc_tcaccountfacilityrelationtypeid: string;
}
interface tc_TCAccountFacilityRelationType extends tc_TCAccountFacilityRelationType_Base, tc_TCAccountFacilityRelationType_Relationships {
}
interface tc_TCAccountFacilityRelationType_Relationships {
}
interface tc_TCAccountFacilityRelationType_Result extends tc_TCAccountFacilityRelationType_Base, tc_TCAccountFacilityRelationType_Relationships {
}
interface tc_TCAccountFacilityRelationType_FormattedResult {
}
interface tc_TCAccountFacilityRelationType_Select {
}
interface tc_TCAccountFacilityRelationType_Expand {
}
interface tc_TCAccountFacilityRelationType_Filter {
}
interface tc_TCAccountFacilityRelationType_Create extends tc_TCAccountFacilityRelationType {
}
interface tc_TCAccountFacilityRelationType_Update extends tc_TCAccountFacilityRelationType {
}
interface tc_TCFacilityType_Base extends WebEntity {
}
interface tc_TCFacilityType_Fixed extends WebEntity_Fixed {
  tc_tcfacilitytypeid: string;
}
interface tc_TCFacilityType extends tc_TCFacilityType_Base, tc_TCFacilityType_Relationships {
}
interface tc_TCFacilityType_Relationships {
}
interface tc_TCFacilityType_Result extends tc_TCFacilityType_Base, tc_TCFacilityType_Relationships {
}
interface tc_TCFacilityType_FormattedResult {
}
interface tc_TCFacilityType_Select {
}
interface tc_TCFacilityType_Expand {
}
interface tc_TCFacilityType_Filter {
}
interface tc_TCFacilityType_Create extends tc_TCFacilityType {
}
interface tc_TCFacilityType_Update extends tc_TCFacilityType {
}
interface tc_TCFiscalPeriod_Base extends WebEntity {
}
interface tc_TCFiscalPeriod_Fixed extends WebEntity_Fixed {
  tc_tcfiscalperiodid: string;
}
interface tc_TCFiscalPeriod extends tc_TCFiscalPeriod_Base, tc_TCFiscalPeriod_Relationships {
}
interface tc_TCFiscalPeriod_Relationships {
}
interface tc_TCFiscalPeriod_Result extends tc_TCFiscalPeriod_Base, tc_TCFiscalPeriod_Relationships {
}
interface tc_TCFiscalPeriod_FormattedResult {
}
interface tc_TCFiscalPeriod_Select {
}
interface tc_TCFiscalPeriod_Expand {
}
interface tc_TCFiscalPeriod_Filter {
}
interface tc_TCFiscalPeriod_Create extends tc_TCFiscalPeriod {
}
interface tc_TCFiscalPeriod_Update extends tc_TCFiscalPeriod {
}
interface tc_TCFiscalQuarter_Base extends WebEntity {
}
interface tc_TCFiscalQuarter_Fixed extends WebEntity_Fixed {
  tc_tcfiscalquarterid: string;
}
interface tc_TCFiscalQuarter extends tc_TCFiscalQuarter_Base, tc_TCFiscalQuarter_Relationships {
}
interface tc_TCFiscalQuarter_Relationships {
}
interface tc_TCFiscalQuarter_Result extends tc_TCFiscalQuarter_Base, tc_TCFiscalQuarter_Relationships {
}
interface tc_TCFiscalQuarter_FormattedResult {
}
interface tc_TCFiscalQuarter_Select {
}
interface tc_TCFiscalQuarter_Expand {
}
interface tc_TCFiscalQuarter_Filter {
}
interface tc_TCFiscalQuarter_Create extends tc_TCFiscalQuarter {
}
interface tc_TCFiscalQuarter_Update extends tc_TCFiscalQuarter {
}
interface tc_TCFiscalYear_Base extends WebEntity {
}
interface tc_TCFiscalYear_Fixed extends WebEntity_Fixed {
  tc_tcfiscalyearid: string;
}
interface tc_TCFiscalYear extends tc_TCFiscalYear_Base, tc_TCFiscalYear_Relationships {
}
interface tc_TCFiscalYear_Relationships {
}
interface tc_TCFiscalYear_Result extends tc_TCFiscalYear_Base, tc_TCFiscalYear_Relationships {
}
interface tc_TCFiscalYear_FormattedResult {
}
interface tc_TCFiscalYear_Select {
}
interface tc_TCFiscalYear_Expand {
}
interface tc_TCFiscalYear_Filter {
}
interface tc_TCFiscalYear_Create extends tc_TCFiscalYear {
}
interface tc_TCFiscalYear_Update extends tc_TCFiscalYear {
}
interface tc_TCLocationType_Base extends WebEntity {
}
interface tc_TCLocationType_Fixed extends WebEntity_Fixed {
  tc_tclocationtypeid: string;
}
interface tc_TCLocationType extends tc_TCLocationType_Base, tc_TCLocationType_Relationships {
}
interface tc_TCLocationType_Relationships {
}
interface tc_TCLocationType_Result extends tc_TCLocationType_Base, tc_TCLocationType_Relationships {
}
interface tc_TCLocationType_FormattedResult {
}
interface tc_TCLocationType_Select {
}
interface tc_TCLocationType_Expand {
}
interface tc_TCLocationType_Filter {
}
interface tc_TCLocationType_Create extends tc_TCLocationType {
}
interface tc_TCLocationType_Update extends tc_TCLocationType {
}
interface tc_TCMonth_Base extends WebEntity {
}
interface tc_TCMonth_Fixed extends WebEntity_Fixed {
  tc_tcmonthid: string;
}
interface tc_TCMonth extends tc_TCMonth_Base, tc_TCMonth_Relationships {
}
interface tc_TCMonth_Relationships {
}
interface tc_TCMonth_Result extends tc_TCMonth_Base, tc_TCMonth_Relationships {
}
interface tc_TCMonth_FormattedResult {
}
interface tc_TCMonth_Select {
}
interface tc_TCMonth_Expand {
}
interface tc_TCMonth_Filter {
}
interface tc_TCMonth_Create extends tc_TCMonth {
}
interface tc_TCMonth_Update extends tc_TCMonth {
}
interface Territory_Base extends WebEntity {
}
interface Territory_Fixed extends WebEntity_Fixed {
  territoryid: string;
}
interface Territory extends Territory_Base, Territory_Relationships {
}
interface Territory_Relationships {
}
interface Territory_Result extends Territory_Base, Territory_Relationships {
}
interface Territory_FormattedResult {
}
interface Territory_Select {
}
interface Territory_Expand {
}
interface Territory_Filter {
}
interface Territory_Create extends Territory {
}
interface Territory_Update extends Territory {
}
interface BulkOperationLog_Base extends WebEntity {
}
interface BulkOperationLog_Fixed extends WebEntity_Fixed {
  bulkoperationlogid: string;
}
interface BulkOperationLog extends BulkOperationLog_Base, BulkOperationLog_Relationships {
}
interface BulkOperationLog_Relationships {
}
interface BulkOperationLog_Result extends BulkOperationLog_Base, BulkOperationLog_Relationships {
}
interface BulkOperationLog_FormattedResult {
}
interface BulkOperationLog_Select {
}
interface BulkOperationLog_Expand {
}
interface BulkOperationLog_Filter {
}
interface BulkOperationLog_Create extends BulkOperationLog {
}
interface BulkOperationLog_Update extends BulkOperationLog {
}
interface msdyn_workorderincident_Base extends WebEntity {
}
interface msdyn_workorderincident_Fixed extends WebEntity_Fixed {
  msdyn_workorderincidentid: string;
}
interface msdyn_workorderincident extends msdyn_workorderincident_Base, msdyn_workorderincident_Relationships {
}
interface msdyn_workorderincident_Relationships {
}
interface msdyn_workorderincident_Result extends msdyn_workorderincident_Base, msdyn_workorderincident_Relationships {
}
interface msdyn_workorderincident_FormattedResult {
}
interface msdyn_workorderincident_Select {
}
interface msdyn_workorderincident_Expand {
}
interface msdyn_workorderincident_Filter {
}
interface msdyn_workorderincident_Create extends msdyn_workorderincident {
}
interface msdyn_workorderincident_Update extends msdyn_workorderincident {
}
interface ActivityParty_Base extends WebEntity {
}
interface ActivityParty_Fixed extends WebEntity_Fixed {
  activitypartyid: string;
}
interface ActivityParty extends ActivityParty_Base, ActivityParty_Relationships {
}
interface ActivityParty_Relationships {
}
interface ActivityParty_Result extends ActivityParty_Base, ActivityParty_Relationships {
}
interface ActivityParty_FormattedResult {
}
interface ActivityParty_Select {
}
interface ActivityParty_Expand {
}
interface ActivityParty_Filter {
}
interface ActivityParty_Create extends ActivityParty {
}
interface ActivityParty_Update extends ActivityParty {
}
interface Team_Base extends WebEntity {
}
interface Team_Fixed extends WebEntity_Fixed {
  teamid: string;
}
interface Team extends Team_Base, Team_Relationships {
}
interface Team_Relationships {
}
interface Team_Result extends Team_Base, Team_Relationships {
}
interface Team_FormattedResult {
}
interface Team_Select {
}
interface Team_Expand {
}
interface Team_Filter {
}
interface Team_Create extends Team {
}
interface Team_Update extends Team {
}
interface Connection_Base extends WebEntity {
}
interface Connection_Fixed extends WebEntity_Fixed {
  connectionid: string;
}
interface Connection extends Connection_Base, Connection_Relationships {
}
interface Connection_Relationships {
}
interface Connection_Result extends Connection_Base, Connection_Relationships {
}
interface Connection_FormattedResult {
}
interface Connection_Select {
}
interface Connection_Expand {
}
interface Connection_Filter {
}
interface Connection_Create extends Connection {
}
interface Connection_Update extends Connection {
}
interface ServiceAppointment_Base extends WebEntity {
}
interface ServiceAppointment_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface ServiceAppointment extends ServiceAppointment_Base, ServiceAppointment_Relationships {
}
interface ServiceAppointment_Relationships {
}
interface ServiceAppointment_Result extends ServiceAppointment_Base, ServiceAppointment_Relationships {
}
interface ServiceAppointment_FormattedResult {
}
interface ServiceAppointment_Select {
}
interface ServiceAppointment_Expand {
}
interface ServiceAppointment_Filter {
}
interface ServiceAppointment_Create extends ServiceAppointment {
}
interface ServiceAppointment_Update extends ServiceAppointment {
}
interface PostFollow_Base extends WebEntity {
}
interface PostFollow_Fixed extends WebEntity_Fixed {
  postfollowid: string;
}
interface PostFollow extends PostFollow_Base, PostFollow_Relationships {
}
interface PostFollow_Relationships {
}
interface PostFollow_Result extends PostFollow_Base, PostFollow_Relationships {
}
interface PostFollow_FormattedResult {
}
interface PostFollow_Select {
}
interface PostFollow_Expand {
}
interface PostFollow_Filter {
}
interface PostFollow_Create extends PostFollow {
}
interface PostFollow_Update extends PostFollow {
}
interface Appointment_Base extends WebEntity {
}
interface Appointment_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface Appointment extends Appointment_Base, Appointment_Relationships {
}
interface Appointment_Relationships {
}
interface Appointment_Result extends Appointment_Base, Appointment_Relationships {
}
interface Appointment_FormattedResult {
}
interface Appointment_Select {
}
interface Appointment_Expand {
}
interface Appointment_Filter {
}
interface Appointment_Create extends Appointment {
}
interface Appointment_Update extends Appointment {
}
interface BookableResourceCategoryAssn_Base extends WebEntity {
}
interface BookableResourceCategoryAssn_Fixed extends WebEntity_Fixed {
  bookableresourcecategoryassnid: string;
}
interface BookableResourceCategoryAssn extends BookableResourceCategoryAssn_Base, BookableResourceCategoryAssn_Relationships {
}
interface BookableResourceCategoryAssn_Relationships {
}
interface BookableResourceCategoryAssn_Result extends BookableResourceCategoryAssn_Base, BookableResourceCategoryAssn_Relationships {
}
interface BookableResourceCategoryAssn_FormattedResult {
}
interface BookableResourceCategoryAssn_Select {
}
interface BookableResourceCategoryAssn_Expand {
}
interface BookableResourceCategoryAssn_Filter {
}
interface BookableResourceCategoryAssn_Create extends BookableResourceCategoryAssn {
}
interface BookableResourceCategoryAssn_Update extends BookableResourceCategoryAssn {
}
interface BookingStatus_Base extends WebEntity {
}
interface BookingStatus_Fixed extends WebEntity_Fixed {
  bookingstatusid: string;
}
interface BookingStatus extends BookingStatus_Base, BookingStatus_Relationships {
}
interface BookingStatus_Relationships {
}
interface BookingStatus_Result extends BookingStatus_Base, BookingStatus_Relationships {
}
interface BookingStatus_FormattedResult {
}
interface BookingStatus_Select {
}
interface BookingStatus_Expand {
}
interface BookingStatus_Filter {
}
interface BookingStatus_Create extends BookingStatus {
}
interface BookingStatus_Update extends BookingStatus {
}
