declare namespace Form.tc_acfacility.Main {
  namespace Information {
    namespace Tabs {
      interface GeneralTab extends Xrm.SectionCollectionBase {
        get(name: "General"): Xrm.PageSection;
        get(name: "General Tab_section_4"): Xrm.PageSection;
        get(name: "General Tab_section_5"): Xrm.PageSection;
        get(name: "General Tab_section_6"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "tc_address1city"): Xrm.Attribute<string>;
      get(name: "tc_address1country"): Xrm.Attribute<string>;
      get(name: "tc_address1latitude"): Xrm.NumberAttribute;
      get(name: "tc_address1line1"): Xrm.Attribute<string>;
      get(name: "tc_address1line2"): Xrm.Attribute<string>;
      get(name: "tc_address1line3"): Xrm.Attribute<string>;
      get(name: "tc_address1longitude"): Xrm.NumberAttribute;
      get(name: "tc_address1postalcode"): Xrm.Attribute<string>;
      get(name: "tc_address1postofficebox"): Xrm.Attribute<string>;
      get(name: "tc_address1stateorprovince"): Xrm.Attribute<string>;
      get(name: "tc_address2city"): Xrm.Attribute<string>;
      get(name: "tc_address2country"): Xrm.Attribute<string>;
      get(name: "tc_address2latitude"): Xrm.NumberAttribute;
      get(name: "tc_address2line1"): Xrm.Attribute<string>;
      get(name: "tc_address2line2"): Xrm.Attribute<string>;
      get(name: "tc_address2line3"): Xrm.Attribute<string>;
      get(name: "tc_address2longitude"): Xrm.NumberAttribute;
      get(name: "tc_address2postalcode"): Xrm.Attribute<string>;
      get(name: "tc_address2postofficebox"): Xrm.Attribute<string>;
      get(name: "tc_address2stateorprovince"): Xrm.Attribute<string>;
      get(name: "tc_name"): Xrm.Attribute<string>;
      get(name: "tc_tcfacilitytypeid"): Xrm.LookupAttribute<"tc_tcfacilitytype">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Accounts"): Xrm.SubGridControl<"tc_acfacilityaccounts">;
      get(name: "Contacts"): Xrm.SubGridControl<"tc_acfacilitycontacts">;
      get(name: "Subgrid_1"): Xrm.SubGridControl<"tc_acfacilitylocation">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "tc_address1city"): Xrm.StringControl;
      get(name: "tc_address1country"): Xrm.StringControl;
      get(name: "tc_address1latitude"): Xrm.NumberControl;
      get(name: "tc_address1line1"): Xrm.StringControl;
      get(name: "tc_address1line2"): Xrm.StringControl;
      get(name: "tc_address1line3"): Xrm.StringControl;
      get(name: "tc_address1longitude"): Xrm.NumberControl;
      get(name: "tc_address1postalcode"): Xrm.StringControl;
      get(name: "tc_address1postofficebox"): Xrm.StringControl;
      get(name: "tc_address1stateorprovince"): Xrm.StringControl;
      get(name: "tc_address2city"): Xrm.StringControl;
      get(name: "tc_address2country"): Xrm.StringControl;
      get(name: "tc_address2latitude"): Xrm.NumberControl;
      get(name: "tc_address2line1"): Xrm.StringControl;
      get(name: "tc_address2line2"): Xrm.StringControl;
      get(name: "tc_address2line3"): Xrm.StringControl;
      get(name: "tc_address2longitude"): Xrm.NumberControl;
      get(name: "tc_address2postalcode"): Xrm.StringControl;
      get(name: "tc_address2postofficebox"): Xrm.StringControl;
      get(name: "tc_address2stateorprovince"): Xrm.StringControl;
      get(name: "tc_name"): Xrm.StringControl;
      get(name: "tc_tcfacilitytypeid"): Xrm.LookupControl<"tc_tcfacilitytype">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "General Tab"): Xrm.PageTab<Tabs.GeneralTab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "tc_address1city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_address1country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_address1latitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "tc_address1line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_address1line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_address1line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_address1longitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "tc_address1postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_address1postofficebox"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_address1stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_address2city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_address2country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_address2latitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "tc_address2line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_address2line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_address2line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_address2longitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "tc_address2postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_address2postofficebox"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_address2stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tc_tcfacilitytypeid"): Xrm.LookupAttribute<"tc_tcfacilitytype">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "Accounts"): Xrm.SubGridControl<"tc_acfacilityaccounts">;
    getControl(controlName: "Contacts"): Xrm.SubGridControl<"tc_acfacilitycontacts">;
    getControl(controlName: "Subgrid_1"): Xrm.SubGridControl<"tc_acfacilitylocation">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "tc_address1city"): Xrm.StringControl;
    getControl(controlName: "tc_address1country"): Xrm.StringControl;
    getControl(controlName: "tc_address1latitude"): Xrm.NumberControl;
    getControl(controlName: "tc_address1line1"): Xrm.StringControl;
    getControl(controlName: "tc_address1line2"): Xrm.StringControl;
    getControl(controlName: "tc_address1line3"): Xrm.StringControl;
    getControl(controlName: "tc_address1longitude"): Xrm.NumberControl;
    getControl(controlName: "tc_address1postalcode"): Xrm.StringControl;
    getControl(controlName: "tc_address1postofficebox"): Xrm.StringControl;
    getControl(controlName: "tc_address1stateorprovince"): Xrm.StringControl;
    getControl(controlName: "tc_address2city"): Xrm.StringControl;
    getControl(controlName: "tc_address2country"): Xrm.StringControl;
    getControl(controlName: "tc_address2latitude"): Xrm.NumberControl;
    getControl(controlName: "tc_address2line1"): Xrm.StringControl;
    getControl(controlName: "tc_address2line2"): Xrm.StringControl;
    getControl(controlName: "tc_address2line3"): Xrm.StringControl;
    getControl(controlName: "tc_address2longitude"): Xrm.NumberControl;
    getControl(controlName: "tc_address2postalcode"): Xrm.StringControl;
    getControl(controlName: "tc_address2postofficebox"): Xrm.StringControl;
    getControl(controlName: "tc_address2stateorprovince"): Xrm.StringControl;
    getControl(controlName: "tc_name"): Xrm.StringControl;
    getControl(controlName: "tc_tcfacilitytypeid"): Xrm.LookupControl<"tc_tcfacilitytype">;
    getControl(controlName: string): undefined;
  }
}
