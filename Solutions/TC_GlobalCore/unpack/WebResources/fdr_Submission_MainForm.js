///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/FDR_SubmissionFunctions.js"/>
var FDR_Submission_MainForm = (function (window, document) {
  //variables
  var formType;
  var userSettings;
  var LCID;
  var clientUrl;
  var resexResourceName;
  var globalObj;
  var currentWebApi;
  var isOffLine;
  var clientType;

  var dialogOptions = {
    height: 300,
    width: 500,
  };
  var submissionId;


  const Roles = {
    FDRCompanyPrimaryContact: "cf121971-848b-ed11-81ad-0022483d0343",
    FDRCompanySecondaryContact: "fcfbfac2-848b-ed11-81ad-0022483d0343",
    FDRCompliance: "56786d45-848b-ed11-81ad-0022483d0343",
    FDRSitePrimaryContact: "51925999-848b-ed11-81ad-0022483d0343",
    FDRSiteSecondaryContact: "2b4e0ff2-848b-ed11-81ad-0022483d0343",
  };
  //********************private methods*******************


  //********************private methods end***************

  //********************public methods***************
  return {
    OnLoad: async function (executionContext) {
      var globalContext = Xrm.Utility.getGlobalContext();
      var formContext = executionContext.getFormContext();
      isOffLine = glHelper.isOffline(executionContext);
      clientType = glHelper.getClientType(executionContext);

      if (isOffLine && clientType > 0) {
        //mobile or outlook, offline first
        currentWebApi = Xrm.WebApi.offline;
        clientUrl = "https://localhost:2525";
      } else {
        //web, online
        currentWebApi = Xrm.WebApi.online;
        clientUrl = globalContext.getClientUrl();
      }

      userSettings = globalContext.userSettings;

      // 0 = Undefined, 1 = Create, 2 = Update, 3 = Read Only, 4 = Disabled, 6 = Bulk Edit
      formType = glHelper.GetFormType(formContext);

      //Load up resources for English/French labels
      LCID = userSettings.languageId;

      if (LCID == 1033) resexResourceName = "ovs_Labels.1033.resx";
      else if (LCID == 1036) resexResourceName = "ovs_Labels.1036.resx";

      submissionId = formContext.data.entity
        .getId()
        .replace("{", "")
        .replace("}", "");

      let submission = await FDR_SubmissionFunctions.getSubmissionDetails(submissionId);
      sessionStorage.setItem("fdr_submission_json", submission["fdr_json"]);

      // var remote = formContext.getAttribute("fdr_validate"); //todo fix
      // remote.removeOnChange(FDR_Submission_MainForm.FindMatch_OnChange);
      // remote.addOnChange(FDR_Submission_MainForm.FindMatch_OnChange);

      //formContext.data.entity.addOnSave(FDR_Submission_MainForm.OnSave);

      //on update etc
      if (formType > 1) {


        FDR_Submission_MainForm.LoadContacts()
        //auto load suggestions

        //attempt to load some suggestions
        try {
            Xrm.Utility.showProgressIndicator("Loading");

            let suggestions = await FDR_SubmissionFunctions.getAllParentCompanyAndSiteSuggestions(submissionId);

            if (suggestions.length === 0) {
              await FDR_Submission_MainForm.AutoloadPrimaryCompanySuggestions();
            }
          
        } catch (error) {
          throw error;
        } finally {
          Xrm.Utility.closeProgressIndicator();

          let formContext = executionContext.getFormContext();
          let parentCompanySubgrid = formContext.getControl("Subgrid_parentCompany");
          parentCompanySubgrid.refresh();
        }
      }
    },
    ParentCompanyGrid_OnSave: async function (executionContext) {
      try {
        var formContext = executionContext.getFormContext();

        let parentCompanies = Xrm.Page.getControl("Subgrid_parentCompany")
          .getGrid()
          .getRows();
        let count = 0;
        let parentCompanyToAssociateId;

        parentCompanies.forEach(function (row, rowIndex) {
          let isAssociate = row
            .getData()
            .getEntity()
            .attributes.getByName("fdr_choosenprimarycompany")
            .getValue();

          if (isAssociate) {
            count += 1;
            parentCompanyToAssociateId = row
              .getData()
              .getEntity()
              .attributes.getByName("fdr_match")
              .getValue()[0].id;
          }
        });

        if (count === 0) {
          //clear sites

          let items =
            await FDR_SubmissionFunctions.getAllParentCompanyAndSiteSuggestions(
              submissionId
            );
          const siteSuggestionToBeRemoved = items.filter(
            (item) =>
              item["fdr_match_account"]["customertypecode"] ===
              FDR_SubmissionFunctions.CustomerTypeCode.Site
          );

          for (let i = 0; i < siteSuggestionToBeRemoved.length; i++) {
            const item =
              siteSuggestionToBeRemoved[i][
                "fdr_accountsubmissionsuggestionid"
              ];
            await FDR_SubmissionFunctions.RemoveSuggestion(item);
          }
        } else if (count > 1) {
          //clear sites

          let items = await FDR_SubmissionFunctions.getAllParentCompanyAndSiteSuggestions(submissionId);
          const siteSuggestionToBeRemoved = items.filter(
            (item) => item["fdr_match_account"]["customertypecode"] ===FDR_SubmissionFunctions.CustomerTypeCode.Site
          );

          for (let i = 0; i < siteSuggestionToBeRemoved.length; i++) {
            const item = siteSuggestionToBeRemoved[i]["fdr_accountsubmissionsuggestionid"];
            await FDR_SubmissionFunctions.RemoveSuggestion(item);
          }
          Xrm.Navigation.openAlertDialog(
            {
              confirmButtonLabel: "OK",
              text: "Only one primary company can be assoicated",
              title: "Warning",
            },
            dialogOptions
          );
        } else {
          items = await FDR_SubmissionFunctions.findParentCompanySites(parentCompanyToAssociateId);
          Xrm.Utility.showProgressIndicator(
            `Found ${items.length} site matches`
          );

          for (let i = 0; i < items.length; i++) {
            const item = items[i];
            await FDR_SubmissionFunctions.AddAccountToSuggestionList( submissionId,item["accountid"]);
          }

          let siteSubgrid = Xrm.Page.getControl("Subgrid_Sites");
          siteSubgrid.refresh();
        }
      } catch (error) {
        throw error;

      } finally {
        Xrm.Utility.closeProgressIndicator();
      }
    },

    AutoloadPrimaryCompanySuggestions: async function () {

      let submission = await FDR_SubmissionFunctions.getSubmissionDetails(submissionId);
      let json = JSON.parse(submission["fdr_json"]);


      //todo does, company map to legal name or operating name
      let items = await FDR_SubmissionFunctions.findParentCompanyMatches(
        json["company_name"]
      );
      Xrm.Utility.showProgressIndicator(`Found ${items.length} matches`);

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        await FDR_SubmissionFunctions.AddAccountToSuggestionList(
          submissionId,
          item.accountid
        );
      }

      //if zero matches found, auto create
      if (items.length === 0) {
        //create account
        //create site
        //link site to account
      }
    },

    LoadContacts: async function () {
      sessionStorage.removeItem("fdr_submission_contacts");

      let companies =
        await FDR_SubmissionFunctions.getPreferedSuggestionsForParentCompany(
          submissionId
        );
      let sites = await FDR_SubmissionFunctions.getPreferedSuggestionsForSite(
        submissionId
      );

      if (companies.length === 0) {
        return;
      }

      if (sites.length === 0) {
        return;
      }
      if (companies.length > 1) {
        return;
      }

      if (sites.length > 1) {
        return;
      }

      let companyConnections = await FDR_SubmissionFunctions.getConnections(
        companies[0]["_fdr_match_value"]
      );
      let siteConnections = await FDR_SubmissionFunctions.getConnections(
        sites[0]["_fdr_match_value"]
      );
      let contacts = {};

      for (let i = 0; i < companyConnections.length; i++) {
        let contactDetails = await FDR_SubmissionFunctions.getContactDetails(
          companyConnections[i]["_record2id_value"]
        );
        let roleId = companyConnections[i]["_record2roleid_value"];
        contacts[roleId] = contactDetails;
      }

      for (let i = 0; i < siteConnections.length; i++) {
        let contactDetails = await FDR_SubmissionFunctions.getContactDetails(
          siteConnections[i]["_record2id_value"]
        );
        let roleId = siteConnections[i]["_record2roleid_value"];
        contacts[roleId] = contactDetails;
      }

      sessionStorage.setItem(
        "fdr_submission_contacts",
        JSON.stringify(contacts)
      );
      //reload webresource
      let webResourceControl = Xrm.Page.getControl("WebResource_contacts");
      let src = webResourceControl.getObject().src;
      webResourceControl.getObject().src = "about:blank";
      webResourceControl.getObject().src = src;
    },
  };
  //********************public methods end***************
})(window, document);
