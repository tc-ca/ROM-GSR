declare namespace Form.account.Main {
  namespace AccountforMultisessionexperience {
    namespace Tabs {
      interface DETAILS_TAB extends Xrm.SectionCollectionBase {
        get(name: "BILLING"): Xrm.PageSection;
        get(name: "COMPANY_PROFILE"): Xrm.PageSection;
        get(name: "CONTACT_PREFERENCES"): Xrm.PageSection;
        get(name: "DETAILS_TAB_section_6"): Xrm.PageSection;
        get(name: "MARKETING"): Xrm.PageSection;
        get(name: "SHIPPING"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "ACCOUNT_INFORMATION"): Xrm.PageSection;
        get(name: "SUMMARY_TAB_section_4"): Xrm.PageSection;
        get(name: "Timeline"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string> | null;
      get(name: "address1_composite"): Xrm.Attribute<string> | null;
      get(name: "address1_country"): Xrm.Attribute<string> | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string> | null;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
      get(name: "lastusedincampaign"): Xrm.DateAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "numberofemployees"): Xrm.NumberAttribute;
      get(name: "originatingleadid"): Xrm.LookupAttribute<"lead">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.Attribute<any>;
      get(name: "revenue"): Xrm.NumberAttribute;
      get(name: "sic"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "RelatedCases"): Xrm.SubGridControl<"incident">;
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetControl<boolean>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "header_numberofemployees"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_revenue"): Xrm.NumberControl;
      get(name: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
      get(name: "lastusedincampaign"): Xrm.DateControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "originatingleadid"): Xrm.LookupControl<"lead">;
      get(name: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
      get(name: "parentaccountid"): Xrm.LookupControl<"account">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
      get(name: "primarycontactid"): Xrm.LookupControl<"contact">;
      get(name: "sic"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "DETAILS_TAB"): Xrm.PageTab<Tabs.DETAILS_TAB>;
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AccountforMultisessionexperience extends Xrm.PageBase<AccountforMultisessionexperience.Attributes,AccountforMultisessionexperience.Tabs,AccountforMultisessionexperience.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<account_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<account_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<account_industrycode>;
    getAttribute(attributeName: "lastusedincampaign"): Xrm.DateAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "numberofemployees"): Xrm.NumberAttribute;
    getAttribute(attributeName: "originatingleadid"): Xrm.LookupAttribute<"lead">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "ownershipcode"): Xrm.OptionSetAttribute<account_ownershipcode>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<account_paymenttermscode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<account_preferredcontactmethodcode>;
    getAttribute(attributeName: "primarycontactid"): Xrm.Attribute<any>;
    getAttribute(attributeName: "revenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "sic"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "RelatedCases"): Xrm.SubGridControl<"incident">;
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<account_address1_freighttermscode>;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<account_address1_shippingmethodcode>;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotsendmm"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_numberofemployees"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_revenue"): Xrm.NumberControl;
    getControl(controlName: "industrycode"): Xrm.OptionSetControl<account_industrycode>;
    getControl(controlName: "lastusedincampaign"): Xrm.DateControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "originatingleadid"): Xrm.LookupControl<"lead">;
    getControl(controlName: "ownershipcode"): Xrm.OptionSetControl<account_ownershipcode>;
    getControl(controlName: "parentaccountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<account_paymenttermscode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<account_preferredcontactmethodcode>;
    getControl(controlName: "primarycontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "sic"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "websiteurl"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
