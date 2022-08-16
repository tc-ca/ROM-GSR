var glHelper = (function (window, document) {

    //********************global vars*******************
    var FORMSTAGE_Create = 1;
    var FORMSTAGE_Update = 2;
    var FORMSTAGE_RO = 3;
    var FORMSTAGE_Disabled = 4;

    /****************************************************************************************
    Context, form, client
    ****************************************************************************************/

    function getGlobalContext() {
        return Xrm.Utility.getGlobalContext();
    }

    function getFormContext(executionContext) {
        return executionContext.getFormContext();
    }

    /**
    *
    * @param {context} executionContext
    * 
    * 0 -	Web application, Unified Interface
    * 1 -   Mobile app
    * 2	-   Dynamics 365 for Outlook client (COM add-in)	
    */
    function getClientType(executionContext) {

        var result = 0;
        var client = getGlobalContext(executionContext).client.getClient();

        switch (client) {

            case "Mobile": result = 1; break;
            case "Outlook": result = 2; break;
        }

        return result;
    }


    function isOffline(executionContext) {

        return getGlobalContext(executionContext).client.isOffline();
        clientContext.isNetworkAvailable()
    }

    function isNetworkAvailable(executionContext) {

        return getGlobalContext(executionContext).isNetworkAvailable();
    }


    function GetFormType(formContext) {
        if (formContext != null)
            return formContext.ui.getFormType();
        else {
            console.log("formContext is null");
            return null;
        }
    }

    function GetFormName(formContext) {
        var fs = formContext.ui.formSelector;
        if (fs != null) {
            return fs.getCurrentItem().getLabel();
        }
        else { return null; }
    }

    function SwitchFormByName(formContext, formName) {
        if (formContext.ui.formSelector.getCurrentItem().getLabel() != formName) {
            var items = formContext.ui.formSelector.items.get();
            for (var i in items) {
                var item = items[i];
                var itemId = item.getId();
                var itemLabel = item.getLabel();
                if (itemLabel == formName) {
                    SwitchFormById(formContext, itemId);
                }
            }
        }
    }

    function SwitchFormById(formContext, formId) {
        formContext.ui.formSelector.items.get(formId).navigate();
    }

    function SetFormReadOnly(formContext) {

        var formControls = formContext.ui.controls;

        formControls.forEach(element => {
            if (element.getName() != "" && element.getName() != null) {
                element.setDisabled(true);
            }
        });
    }


    /****************************************************************************************
    VALUES
    ****************************************************************************************/

    function GetValue(formContext, attr) {
        var result;
        var val = formContext.getAttribute(attr).getValue();
        if (val === null) {
            result = "";
        }
        else {
            if (val.toString().length > 0) {
                result = val;
            }
            else {
                result = "";
            }
        }
        return result;
    }

    function SetValue(formContext, attr, val) {
        formContext.getAttribute(attr).setValue(val);
        formContext.getAttribute(attr).setSubmitMode("always");
    }

    function SetRequiredLevel(formContext, attr, required) {
        if (required) {
            formContext.getAttribute(attr).setRequiredLevel("required");
        }
        else {
            formContext.getAttribute(attr).setRequiredLevel("none");
        }
    }

    function isAttributeRequired(formContext, attr) {
        return formContext.getAttribute(attr).getRequiredLevel() == 'required';
    }

    function ResetField(formContext, attr) {
        var attribute = formContext.getAttribute(attr);
        var attributeType = formContext.getAttribute(attr).getAttributeType();

        switch (attributeType) {
            case "boolean":
                attribute.setValue(false);
                break;

            case "datetime":
                attribute.setValue(null);
                break;

            case "decimal":
                attribute.setValue(0);
                break;

            case "money":
                break;

            case "double":
                attribute.setValue(0);
                break;

            case "integer":
                attribute.setValue(0);
                break;

            case "lookup":
                attribute.setValue([]);
                break;

            case "memo":
                attribute.setValue("");
                break;

            case "string":
                attribute.setValue("");
                break;

            case "optionset":
                attribute.setValue(0);
                break;
        }
    }

    function GetCurrentRecordId(formContext) {

        return formContext.data.entity.getId();
    }

    function GetCurrentRecordName(formContext) {
        return formContext.data.entity.getPrimaryAttributeValue();
    }


    /****************************************************************************************
    VISIBILITY AND AVAILABILITY
    ****************************************************************************************/

    function SetControlVisibility(formContext, controlname, visible) {
        if (formContext.getControl(controlname)) {
            formContext.getControl(controlname).setVisible(visible);
        }
    }

    function SetSectionVisibility(formContext, tabname, sectionname, visible) {
        var tab = formContext.ui.tabs.get(tabname);
        if (tab !== null) {
            var section = tab.sections.get(sectionname);
            if (section !== null) {
                section.setVisible(visible);
            }
        }
    }

    function SetTabVisibility(formContext, tabname, visible) {
        formContext.ui.tabs.get(tabname).setVisible(visible);
    }

    function SetControlReadOnly(formContext, controlname, readonly) {
        if (formContext.getControl(controlname)) {
            formContext.getControl(controlname).controlDescriptor.Disabled = readonly;
        }
    }

    function disableAllFields(formContext) {
        formContext.ui.controls.forEach(function (control, i) {
            if (control && control.getDisabled && !control.getDisabled()) {
                control.setDisabled(true);
            }
        });
    }

    function SetDisabled(formContext, attr, disabled) {
        formContext.getControl(attr).setDisabled(disabled);
    }

    function SetTabDisplayState(formContext, tabname, expand) {
        var tab = formContext.ui.tabs.get(tabname);
        if (expand == true) {
            tab.setDisplayState("expanded");
        }
        else {
            tab.setDisplayState("collapsed");
        }
    }

    function SetControlsSectionVisibility(ctrl, visible) {
        if (ctrl != null) { ctrl.getParent().setVisible(visible); }
    }


    /****************************************************************************************
    CURRENT USER FUNCTIONS
    ****************************************************************************************/

    function GetCurrentUserSettings() {
        return getGlobalContext().userSettings;
    }

    function GetCurrentUserId() {
        return getGlobalContext().userSettings.userId;
    }

    function GetCurrentUserName() {
        return getGlobalContext().userSettings.userName;
    }

    function GetCurrentUserRoles() {
        return getGlobalContext().userSettings.roles.getAll();
    }

    function hasCurrentUserRole(roleName) {

        let hasRole = false;
        let roles = Xrm.Utility.getGlobalContext().userSettings.roles;
        roles.forEach(x => {
            if (x.name === roleName) {
                hasRole = true;
                return;
            }
        });
        return hasRole;
    }


    function isCurrentUserSystemAdministrator() {
        let currentUserRoles = getGlobalContext().userSettings.roles.getAll();
        if (currentUserRoles && currentUserRoles.find(r => r.name === "System Administrator")) return true;
        return false;
    }

    function GetCurrentUserLanguage() {

        //add as necessery
        var langMap = {
            "1033": "en",
            "1036": "fr",
        }
        try {
            return langMap[getGlobalContext().userSettings.languageId.toString()];
        } catch (e) {

            console.log(e);
            return "en";
        }
    }


    /****************************************************************************************
    Notifications
    ****************************************************************************************/

    function alertDialogText(messeageText, confirmaionText) {
        var mt = (messeageText != null && messeageText != undefined && messeageText.length > 0) ? messeageText : "A message from form";
        var cbl = (confirmaionText != null && confirmaionText != undefined && confirmaionText.length > 0) ? confirmaionText : "OK";
        return { confirmButtonLabel: cbl, text: mt };
    }

    //accepts two integers each must be > 100
    //if empty =>default h: 150, w: 350
    function alertDialogWindow(windowHeigth, windowWidth) {
        try {
            var wh = parseInt(windowHeigth) > 100 ? windowHeigth : 150;
            var ww = parseInt(windowWidth) > 100 ? windowWidth : 350;
            return { height: wh, width: ww };

        } catch (e) {
            return { height: 150, width: 350 };
        }
    }

    /**
        * 
        * @param {MESSAGE TO THE USER} message 
        * @param {TYPE OF NOTIFICATION ["INFO", "WARNING", "ERROR"]} type 
        * @param {TIME IN MS TO CLEAR NOTIFICATION [DEFAULT 5 SECONDS]} timeout 
    */
    function DisplayFormNotification(message, type, timeout = 3000) {
        //UNIQUE ID FOR THIS NOTIFICATION. 
        //ID IS USED TO LATER CLOSE THIS SPECIFIC NOTIFICATION
        var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        var id = randLetter + Date.now();

        //DISPLAY THE NOTIFICATION
        Xrm.Page.ui.setFormNotification(message, type, id);

        //WAIT, AND CLEAR
        setTimeout(
            function () {
                Xrm.Page.ui.clearFormNotification(id);
            },
            timeout
        );
    }

    /**
       * 
       * @param {MESSAGE TO THE USER} message 
       * @param {TYPE OF NOTIFICATION [1: SUCCESS, 2: ERROR, 3: WARNING, 4: INFORMATION ]} type 
       * @param {TIME IN MS TO CLEAR NOTIFICATION [DEFAULT 5 SECONDS]} timeout 
       * @param {ACTION FUNCTION TO PERFORM WHEN NOTIFICATION CLICKED 
       * var myAction = 
       * {
       *    actionLabel: "Click here to Submit", 
       *    eventHandler: function () {
       *      Xrm.Navigation.openUrl("https://test.com");
       *      // perform other operations as required on clicking
       *    }
       * }
       *} action
    */
    function DisplayGlobalNotification(message, type, timeout = 3000, action = null) {
        // DEFINE NOTIFICATION OBJECT
        var notification =
        {
            type: 2,
            level: type, // Information
            message: message
        }

        //ADD ACTION IF DEFINED
        if (!action) notification.action = action;

        //SHOW GLOBAL NOTIFICATION
        Xrm.App.addGlobalNotification(notification).then(

            function success(result) {
                console.log("Notification created with ID: " + result);

                // Wait for 5 seconds and then clear the notification
                window.setTimeout(function () {
                    Xrm.App.clearGlobalNotification(result);
                }, timeout);

            },

            function (error) {
                console.log(error.message);
                // handle error conditions
            }
        );
    }

    /****************************************************************************************
   LOOKUPS
   ****************************************************************************************/

    function GetLookupAttrId(formContext, attr) {
        var lu = formContext.getAttribute(attr);
        if (lu != null) {
            if (lu.getValue() != null && lu.getValue().length > 0) {
                var luValue = lu.getValue();
                if (luValue != null) {
                    return luValue[0].id;
                }
            }
            else {
                return null;
            }
        }
        return null;
    }

    function GetLookupName(formContext, attr) {
        var lu = formContext.getAttribute(attr);
        if (lu != null) {
            if (lu.getValue() != null && lu.getValue().length > 0) {
                var luValue = lu.getValue();
                if (luValue != null) {
                    return luValue[0].name;
                }
            }
            else {
                return "";
            }
        }
        return "";
    }

    function GetLookupEntityType(formContext, attr) {
        var lu = formContext.getAttribute(attr);
        if (lu != null) {
            var luValue = lu.getValue();
            if (luValue != null) {
                return luValue[0].entityType;
            }
        }
        return null;
    }

    function SetLookup(formContext, attr, entityType, id, name) {
        var setLookupValue = new Array();
        setLookupValue[0] = new Object();
        setLookupValue[0].id = id;
        setLookupValue[0].entityType = entityType;
        if (name) setLookupValue[0].name = name;
        formContext.getAttribute(attr).setValue(setLookupValue);
        formContext.getAttribute(attr).setSubmitMode("always");
    }

    function SetHeaderLookup(formContext, attr, entityType, id, name) {
        var setLookupValue = new Array();
        setLookupValue[0] = new Object();
        setLookupValue[0].id = id;
        setLookupValue[0].entityType = entityType;
        if (name) setLookupValue[0].name = name;
        formContext.getControl(attr).getAttribute().setValue(setLookupValue);
        formContext.getAttribute(attr).setSubmitMode("always");
    }

    /****************************************************************************************
    CHOICE
    ****************************************************************************************/

    function GetOptionsetValue(formContext, attr) {
        var val = formContext.getAttribute(attr).getValue();
        return val ? val : "";
    }

    function GetOptionsetText(formContext, attr) {
        var val = formContext.getAttribute(attr).getText();
        return val ? val : "";
    }

    function RemoveOptionSetOption(formContext, attr, optionSetValue) {
        var current = formContext.getControl(attr);
        if (current)
            formContext.getControl(attr).removeOption(optionSetValue);
    }

    function SetOptionsetByText(formContext, attr, text) {
        var options = formContext.getAttribute(attr).getOptions();
        for (var i = 0; i < options.length; i++) {
            if (options[i].text == text) {
                formContext.getAttribute(attr).setValue(options[i].value);
                formContext.getAttribute(attr).setSubmitMode("always");
            }
        }
    }

    function SetOptionsetByValue(formContext, attr, intValue) {

        var oSet = formContext.getAttribute(attr);
        var options = oSet.getOptions();
        for (var i = 0; i < options.length; i++) {
            if (options[i].value == intValue) {
                oSet.setValue(options[i].value);
                oSet.setSubmitMode("always");
            }
        }
    }

    ///to restore option set to default send arrayOfIntValues as null
    /**
       *to restore option set to default send arrayOfIntValues as null    
       * @param {FORM Context} formContext
       * @param {OptionSet attribute logical name} attr
       * @param {Array of OptionSetValues (integers)} arrayOfIntValues
       * @param {Flag of arrayOfIntValues's utilization: keep or revove given values} isValuesToKeep
   */
    function filterOptionSet(formContext, attr, arrayOfIntValues = null, isValuesToKeep = true) {
        var oSet = formContext.getControl(attr);
        if (!oSet) return;

        var options = oSet.getOptions();
        if (isValuesToKeep) {
            var optionsToKeep = new Array();
            for (var i = 0; i < options.length; i++) {

                var toKeep = false;
                for (var j = 0; j < arrayOfIntValues.length; j++) {
                    if (options[i].value == arrayOfIntValues[j]) {
                        toKeep = true;
                        break;
                    }
                }
                if (toKeep) optionsToKeep.push(options[i]);
            }

            oSet.clearOptions();
            for (var i = 0; i < optionsToKeep.length; i++) {
                oSet.addOption(optionsToKeep[i]);
            }
        }
        else {
            for (var i = 0; i < arrayOfIntValues.length; i++) {

                oSet.removeOption(arrayOfIntValues[i]);
            }
        }
    }

    ///to restore option set to default send arrayOfIntValues as null
    /**
       * Use to filter array multiple times on the same form and make sure arryOfOptions is an original list of options
       * to restore option set to default send arrayOfIntValues as null    
       * @param {FORM Context} formContext
       * @param {OptionSet attribute logical name} attr
       * @param {Array of Object - options} arryOfOptions
       * @param {Array of OptionSetValues (integers)} arrayOfIntValues
       * @param {Flag of arrayOfIntValues's utilization: keep or revove given values} isValuesToKeep
   */
    function filterOptionSetUsingOrigin(formContext, attr, arryOfOptions, arrayOfIntValues = null, isValuesToKeep = true) {
        var oSet = formContext.getControl(attr);
        if (!oSet) return;

        var options = arryOfOptions;
        if (isValuesToKeep) {
            var optionsToKeep = new Array();
            for (var i = 0; i < options.length; i++) {

                var toKeep = false;
                for (var j = 0; j < arrayOfIntValues.length; j++) {
                    if (options[i].value == arrayOfIntValues[j]) {
                        toKeep = true;
                        break;
                    }
                }
                if (toKeep) optionsToKeep.push(options[i]);
            }

            oSet.clearOptions();
            for (var i = 0; i < optionsToKeep.length; i++) {
                oSet.addOption(optionsToKeep[i]);
            }
        }
        else {
            for (var i = 0; i < arrayOfIntValues.length; i++) {

                oSet.removeOption(arrayOfIntValues[i]);
            }
        }
    }
    

    /****************************************************************************************
    CONTROLS and ATTRIBUTES
    ****************************************************************************************/

    /**
   *The function returns control type name.
   *Its main purpose to display all types to developer
   * @param {FORM Context} formContext
   * @param {Control control logical name} controlName
    */
    function getControlType(formContext, controlName) {
       
        switch (formContext.getControl(arg).getControlType()) {

            case "standard": return "standard"; break;
            case "iframe": return "iframe"; break;
            case "kbsearch": return "kbsearch"; break;
            case "lookup": return "lookup"; break;
            case "choices": return "choices"; break;
            case "notes": return "notes"; break;
            case "choice": return "choice"; break;
            case "quickform": return "quickform"; break;
            case "subgrid": return "subgrid"; break;
            case "timercontrol": return "timercontrol"; break;
            case "timelinewall": return "timelinewall"; break;
            case "webresource	": return "webresource	"; break;
            //customcontrol: <namespace>.<name>  - may not work
            case "customcontrol": return "customcontrol"; break;
            //customsubgrid:<namespace>.<name>   - may not work
            case "customsubgrid": return "customsubgrid"; break;

            default: return "";
        }
    }

    /**
       *The function returns attribute type name. 
       *Its main purpose to display all types to developer 
       * @param {FORM Context} formContext
       * @param {Attribute attribute logical name} attributeName
   */
    function getAttributeType(formContext, attributeName) { 
        
        switch (formContext.getAttribute(attributeName).getAttributeType()) {

            case "boolean": return "boolean"; break;
            case "datetime": return "datetime"; break;
            case "decimal": return "decimal"; break;
            case "double": return "double"; break;
            case "integer": return "integer"; break;
            case "lookup": return "lookup"; break;
            case "memo": return "memo"; break;
            case "money": return "money"; break;
            case "multiselectoptionset": return "multiselectoptionset"; break;
            case "optionset": return "optionset"; break;
            case "string": return "string"; break;

            default: return "";
        }


    }


    /****************************************************************************************
    MOBILE 
    ****************************************************************************************/


    function isTopAccessible() {
        try {
            window.top.location;
            return true;
        }
        catch (err) {
            return false;
        }
    }


    /****************************************************************************************
    MISCELLANEOUS
    ****************************************************************************************/

    function quarterByDate(selectedDate) {

        var quarter = 0;
        var date = new Date(selectedDate);
        var month = date.getMonth().toString();

        switch (month) {

            case "0":
            case "1":
            case "2":
                quarter = "Q4"; break;
            case "3":
            case "4":
            case "5":
                quarter = "Q1"; break;
            case "6":
            case "7":
            case "8":
                quarter = "Q2"; break;
            case "9":
            case "10":
            case "11":
                quarter = "Q3"; break;

        }
        return quarter;
    }

    function getFiscalYearFromCurrentDate() {

        var result = "";
        var today = new Date();
        var nowY = today.getFullYear();
        var currentQuarter = quarterByDate(today);

        switch (currentQuarter) {

            case "Q1":
            case "Q2":
            case "Q3":
                result = nowY.toString() + "-" + (nowY + 1).toString(); break;
            case "Q4":
                result = nowY.toString() + "-" + (nowY - 1).toString(); break;
        }

        return result;
    }

    function GetLocalizedStrings() {
        // TODO Replace with resx Web Resource

        let lang = GetCurrentUserLanguage();

        if (lang === "en") {
            // english
            return {
                MarkCompleteErrors: "There are errors on the Questionnaire, please fix them before Marking as Complete",
                MarkComplete: "Mark As Complete",
                LoadingQuestionnaire: "Loading Questionnaire...",
                QuestionnaireSaveSuccessful: "Questionnaire Saved Successfully",
                SavingQuestionnaire: "Saving Questionnaire...",
                SavingQuestionnaireCompletionStatus: "Saving Questionnaire Completion Status...",
                TaskTypeChange: "If Task Type is changed, Questionnaire progress will be lost. Proceed?",
                ConfirmationDiaglog: "Confirmation Dialog",
                NoQuestionnaireForTaskType: "No questionnaire associated with service task type {0}. Please open the Service Task Type and associate a valid Questionnaire Template",
                EnforceAction_DetentionNoticeSaveError: "At least one of the reason (HOTI or MOC) must be Yes in order to Save.",
                ValidationInspectionReport: "Cannot generate inspection report.",
                TitleValidationInspectionReport: "Required data is missing",
                GeneralError: "Something went wrong. Impossible to validate report requirements.",
                SafetyAssessmentAlreadyCompleted: "Safety Assessment Already Completed",
                RevisedQuarterRequested: "Revised Quarter Requested",
                CancellationRequested: "Cancellation Requested"
            }
        } else {
            // french
            return {
                MarkCompleteErrors: "Il y a des erreurs dans le questionnaire, veuillez les corriger avant de marquer comme terminé",
                MarkComplete: "Marquer comme terminé",
                LoadingQuestionnaire: "Chargement du questionnaire...",
                QuestionnaireSaveSuccessful: "Questionnaire enregistré avec succès",
                SavingQuestionnaire: "Questionnaire de sauvegarde...",
                SavingQuestionnaireCompletionStatus: "Enregistrement de l'état d'achèvement du questionnaire...",
                TaskTypeChange: "Si le type de tâche est modifié, la progression du questionnaire sera perdue. Procéder?",
                ConfirmationDiaglog: "Boîte de dialogue de confirmation",
                NoQuestionnaireForTaskType: "Aucun questionnaire associé au type de tâche de service {0}. Veuillez ouvrir le type de tâche de service et associer un modèle de questionnaire valide",
                EnforceAction_DetentionNoticeSaveError: "Au moins une des raisons (HOTI ou MOC) doit être Oui pour enregistrer.",
                ValidationInspectionReport: "Impossible de créer un rapport d’inspection.",
                TitleValidationInspectionReport: "Les données requises sont manquantes.",
                GeneralError: "Quelque chose s'est mal passé. Impossible de valider les exigences du rapport.",
                SafetyAssessmentAlreadyCompleted: "Évaluation de la sécurité déjà terminée",
                RevisedQuarterRequested: "Demande de révision de trimestre",
                CancellationRequested: "Annulation demandée"
            }
        }
    }

    //Public  properties and methods
    return {
        FORMTYPE_CREATE: FORMSTAGE_Create,
        FORMTYPE_EDIT: FORMSTAGE_Update,
        FORMTYPE_READONLY: FORMSTAGE_RO,
        FORMTYPE_DISABLED: FORMSTAGE_Disabled,

        DisplayFormNotification: DisplayFormNotification,
        DisplayGlobalNotification: DisplayGlobalNotification,

        alertDialogText: alertDialogText,
        alertDialogWindow: alertDialogWindow,

        getGlobalContext: getGlobalContext,
        GetFormName: GetFormName,
        GetFormType: GetFormType,
        SetFormReadOnly: SetFormReadOnly,
        GetLookupAttrId: GetLookupAttrId,
        GetLookupName: GetLookupName,
        GetOptionsetText: GetOptionsetText,
        GetOptionsetValue: GetOptionsetValue,
        GetValue: GetValue,
        ResetField: ResetField,
        SetTabVisibility: SetTabVisibility,
        SetValue: SetValue,
        SetDisabled: SetDisabled,
        SetSectionVisibility: SetSectionVisibility,
        SetControlVisibility: SetControlVisibility,
        isAttributeRequired: isAttributeRequired,
        SetRequiredLevel: SetRequiredLevel,
        SetOptionsetByText: SetOptionsetByText,
        SetOptionsetByValue: SetOptionsetByValue,
        filterOptionSet: filterOptionSet,
        SwitchFormByName: SwitchFormByName,
        RemoveOptionSetOption: RemoveOptionSetOption,
        SetLookup: SetLookup,
        SetHeaderLookup: SetHeaderLookup,
        GetCurrentUserId: GetCurrentUserId,
        GetCurrentUserName: GetCurrentUserName,
        GetCurrentRecordId: GetCurrentRecordId,
        GetCurrentUserLanguage: GetCurrentUserLanguage,
        GetCurrentUserRoles: GetCurrentUserRoles,
        hasCurrentUserRole: hasCurrentUserRole,
        GetCurrentUserSettings: GetCurrentUserSettings,
        isCurrentUserSystemAdministrator: isCurrentUserSystemAdministrator,
        SetControlReadOnly: SetControlReadOnly,
        disableAllFields: disableAllFields,
        quarterByDate: quarterByDate,
        GetLocalizedStrings: GetLocalizedStrings,
        getClientType: getClientType,
        isTopAccessible: isTopAccessible,
        isNetworkAvailable: isNetworkAvailable,
        isOffline: isOffline,
        getFiscalYearFromCurrentDate: getFiscalYearFromCurrentDate,
        filterOptionSetUsingOrigin: filterOptionSetUsingOrigin,
    };

    //********************public methods end***************

})(window, document);