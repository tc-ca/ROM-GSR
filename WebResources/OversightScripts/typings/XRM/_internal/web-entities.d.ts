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
