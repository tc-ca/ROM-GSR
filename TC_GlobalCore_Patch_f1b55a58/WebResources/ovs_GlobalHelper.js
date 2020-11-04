var glHelper = (function (window, document) {

    //********************global vars*******************
    var FORMSTAGE_Create = 1;
    var FORMSTAGE_Update = 2;
    var FORMSTAGE_RO = 3;
    var FORMSTAGE_Disabled = 4;


    //********************methods***************
       

    function getGlobalContext() {
        return Xrm.Utility.getGlobalContext();
    }

    function getFormContext(executionContext) {
        return executionContext.getFormContext();
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

    /****************************************************************************************
    VALUES
    ****************************************************************************************/

    function GetValue(formContext, attr) {
        var result;
        var val = formContext.getAttribute(attr).getValue();
        if (val == null) {
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

    function GetOptionsetText(formContext, attr) {
        var val = formContext.getAttribute(attr).getText();
        return val ? val : "";
    }

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

    function SetValue(formContext, attr, val) {
        formContext.getAttribute(attr).setValue(val);
        formContext.getAttribute(attr).setSubmitMode("always");
    }

    function SetLookup(formContext, attr, entitytype, id, name) {
        var setLookupValue = new Array();
        setLookupValue[0] = new Object();
        setLookupValue[0].id = id;
        setLookupValue[0].entityType = entitytype;
        setLookupValue[0].name = name;
        formContext.getAttribute(attr).setValue(setLookupValue);
        formContext.getAttribute(attr).setSubmitMode("always");
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
    function filterOptionSet(formContext, attr, arrayOfIntValues = null, isValuesToKeep = true) {
        var oSet = formContext.getControl(attr);
        var options = formContext.getControl(attr).getOptions();


        if (isValuesToKeep) {

            var optionsToKeep = new Array();

            for (var i = 0; i < options.length; i++) {

                var toKeep = false;
                //contains
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

    /****************************************************************************************
    VISIBILITY
    ****************************************************************************************/

    function SetControlVisibility(formContext, controlname, visible) {
        if (formContext.getControl(controlname)) {
            formContext.getControl(controlname).setVisible(visible);
        }
    }

    function SetSectionVisibility(formContext, tabname, sectionname, visible) {
        var tab = formContext.ui.tabs.get(tabname);
        var section = tab.sections.get(sectionname);
        section.setVisible(visible);
    }

    function SetTabVisibility(formContext, tabname, visible) {
        formContext.ui.tabs.get(tabname).setVisible(visible);
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
    MISCELLANEOUS
    ****************************************************************************************/

    function SetDisabled(formContext, attr, disabled) {
        formContext.getControl(attr).setDisabled(disabled);
    }

    function GetCurrentUserId() {
        return getGlobalContext().userSettings.userId;
    }

    function GetCurrentUserName() {
        return getGlobalContext().userSettings.userName;
    }

    function RemoveOptionSetOption(formContext, attr, optionSetValue) {
        var current = formContext.getControl(attr);
        if (current)
            formContext.getControl(attr).removeOption(optionSetValue);
    }

    function GetCurrentRecordId(formContext) {
        return formContext.data.entity.getId();
    }

    function GetCurrentRecordName(formContext) {
        return formContext.data.entity.getPrimaryAttributeValue();
    }

    function setNotificationWithPhoneNumberFormat(executionContext) {
        var phoneNumber = executionContext.getEventSource();
        if (typeof (phoneNumber) != "undefined") {
            var formatedNumber = FormatPhoneNumber2(phoneNumber.getValue());
            var formContext = executionContext.getFormContext();
            var attributeName = phoneNumber.getName();
            if (formatedNumber && formatedNumber.length >= 10)  // fix for auto adjust
                phoneNumber.setValue(formatedNumber);
            if (!checkPhoneNumber(formatedNumber)) {
                formContext.getControl(attributeName).setNotification("Phone field requires 10 digit number", attributeName + "_ID");
            }
            else formContext.getControl(attributeName).clearNotification(attributeName + "_ID");
        }
    }

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

    //Public  properties and methods
    return {

        FORMTYPE_CREATE: FORMSTAGE_Create,
        FORMTYPE_EDIT: FORMSTAGE_Update,
        FORMTYPE_READONLY: FORMSTAGE_RO,
        FORMTYPE_DISABLED: FORMSTAGE_Disabled,



        alertDialogText: alertDialogText,
        alertDialogWindow: alertDialogWindow,

        getGlobalContext: getGlobalContext,
        GetFormName: GetFormName,
        GetFormType: GetFormType,
        GetLookupAttrId: GetLookupAttrId,
        GetLookupName: GetLookupName,
        GetOptionsetText: GetOptionsetText,
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
        GetCurrentUserId: GetCurrentUserId,
        GetCurrentUserName: GetCurrentUserName,
    };

    //********************public methods end***************

})(window, document);