"use strict";
var ROM;
(function (ROM) {
    var Questionnaire;
    (function (Questionnaire) {
        // EVENTS
        function onLoad(eContext) {
            // Get formContext
            var Form = eContext.getFormContext();
            // Get the web resource control on the form
            var wrCtrl = Form.getControl('WebResource_QuestionnaireCreator');
            // Get the web resource inner content window
            if (wrCtrl !== null && wrCtrl !== undefined) {
                wrCtrl.getContentWindow().then(function (win) {
                    var surveyDefinition = Form.getAttribute('ovs_questionnairedefinition').getValue();
                    var languageCode = Xrm.Utility.getGlobalContext().userSettings.languageId;
                    var surveyLocale = 'en';
                    if (languageCode == 1036) {
                        //French
                        surveyLocale = 'fr';
                    }
                    win.InitializeSurveyCreator(surveyDefinition, surveyLocale);
                });
            }
        }
        Questionnaire.onLoad = onLoad;
        function onSave(eContext) {
            // Get formContext
            var Form = eContext.getFormContext();
            // Get the web resource control on the form
            var wrCtrl = Form.getControl('WebResource_QuestionnaireCreator');
            // Get the web resource inner content window
            if (wrCtrl !== null && wrCtrl !== undefined) {
                wrCtrl.getContentWindow().then(function (win) {
                    var surveyDefinition = win.GetSurveyDefinition();
                    Form.getAttribute('ovs_questionnairedefinition').setValue(surveyDefinition);
                });
            }
        }
        Questionnaire.onSave = onSave;
    })(Questionnaire = ROM.Questionnaire || (ROM.Questionnaire = {}));
})(ROM || (ROM = {}));
