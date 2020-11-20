<<<<<<< HEAD
<<<<<<< HEAD:WebResources/OversightScripts/typings/XRM/Form/ovs_questionnaire/Quick/Information.d.ts
declare namespace Form.ovs_questionnaire.Quick {
=======
declare namespace Form.ovs_questionnaire.Main {
>>>>>>> 3da507a36dbc174e4e3c9d0346dc626b1b899de8:WebResources/OversightScripts/typings/XRM/Form/ovs_questionnaire/Main/Information.d.ts
=======
declare namespace Form.ovs_questionnaire.Quick {
>>>>>>> 3da507a36dbc174e4e3c9d0346dc626b1b899de8
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
<<<<<<< HEAD
      get(name: "ovs_description"): Xrm.Attribute<string>;
      get(name: "ovs_name"): Xrm.Attribute<string>;
      get(name: "ovs_questionnairedefinition"): Xrm.Attribute<string>;
=======
      get(name: "ovs_name"): Xrm.Attribute<string>;
>>>>>>> 3da507a36dbc174e4e3c9d0346dc626b1b899de8
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
<<<<<<< HEAD
      get(name: "WebResource_QuestionnaireCreator"): Xrm.WebResourceControl;
      get(name: "ovs_description"): Xrm.StringControl;
      get(name: "ovs_name"): Xrm.StringControl;
      get(name: "ovs_questionnairedefinition"): Xrm.StringControl;
=======
      get(name: "ovs_name"): Xrm.StringControl;
>>>>>>> 3da507a36dbc174e4e3c9d0346dc626b1b899de8
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
<<<<<<< HEAD
    getAttribute(attributeName: "ovs_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ovs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ovs_questionnairedefinition"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "WebResource_QuestionnaireCreator"): Xrm.WebResourceControl;
    getControl(controlName: "ovs_description"): Xrm.StringControl;
    getControl(controlName: "ovs_name"): Xrm.StringControl;
    getControl(controlName: "ovs_questionnairedefinition"): Xrm.StringControl;
=======
    getAttribute(attributeName: "ovs_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "ovs_name"): Xrm.StringControl;
>>>>>>> 3da507a36dbc174e4e3c9d0346dc626b1b899de8
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
  }
}
