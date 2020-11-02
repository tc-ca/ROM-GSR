interface tc_Account_Account_test_ains_Base extends WebEntity {
  accountidone?: string | null;
  accountidtwo?: string | null;
  tc_account_account_test_ainsid?: string | null;
  versionnumber?: number | null;
}
interface tc_Account_Account_test_ains_Relationships {
  tc_Account_Account_Account_test_ains?: Account_Result[] | null;
}
interface tc_Account_Account_test_ains extends tc_Account_Account_test_ains_Base, tc_Account_Account_test_ains_Relationships {
}
interface tc_Account_Account_test_ains_Create extends tc_Account_Account_test_ains {
}
interface tc_Account_Account_test_ains_Update extends tc_Account_Account_test_ains {
}
interface tc_Account_Account_test_ains_Select {
  accountidone: WebAttribute<tc_Account_Account_test_ains_Select, { accountidone: string | null }, {  }>;
  accountidtwo: WebAttribute<tc_Account_Account_test_ains_Select, { accountidtwo: string | null }, {  }>;
  tc_account_account_test_ainsid: WebAttribute<tc_Account_Account_test_ains_Select, { tc_account_account_test_ainsid: string | null }, {  }>;
  versionnumber: WebAttribute<tc_Account_Account_test_ains_Select, { versionnumber: number | null }, {  }>;
}
interface tc_Account_Account_test_ains_Filter {
  accountidone: XQW.Guid;
  accountidtwo: XQW.Guid;
  tc_account_account_test_ainsid: XQW.Guid;
  versionnumber: number;
}
interface tc_Account_Account_test_ains_Expand {
  tc_Account_Account_Account_test_ains: WebExpand<tc_Account_Account_test_ains_Expand, Account_Select, Account_Filter, { tc_Account_Account_Account_test_ains: Account_Result[] }>;
}
interface tc_Account_Account_test_ains_FormattedResult {
}
interface tc_Account_Account_test_ains_Result extends tc_Account_Account_test_ains_Base, tc_Account_Account_test_ains_Relationships {
  "@odata.etag": string;
}
interface tc_Account_Account_test_ains_RelatedOne {
}
interface tc_Account_Account_test_ains_RelatedMany {
  tc_Account_Account_Account_test_ains: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
}
interface WebEntitiesRetrieve {
  tc_account_account_test_ainsset: WebMappingRetrieve<tc_Account_Account_test_ains_Select,tc_Account_Account_test_ains_Expand,tc_Account_Account_test_ains_Filter,tc_Account_Account_test_ains_Fixed,tc_Account_Account_test_ains_Result,tc_Account_Account_test_ains_FormattedResult>;
}
interface WebEntitiesRelated {
  tc_account_account_test_ainsset: WebMappingRelated<tc_Account_Account_test_ains_RelatedOne,tc_Account_Account_test_ains_RelatedMany>;
}
interface WebEntitiesCUDA {
  tc_account_account_test_ainsset: WebMappingCUDA<tc_Account_Account_test_ains_Create,tc_Account_Account_test_ains_Update,tc_Account_Account_test_ains_Select>;
}
