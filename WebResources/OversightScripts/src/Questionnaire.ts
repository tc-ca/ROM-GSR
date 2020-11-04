namespace ROM.Questionnaire {
  // EVENTS
  export function onLoad(eContext: Xrm.ExecutionContext<any, any>): void {
    // Get formContext
    const Form = <Form.ovs_questionnaire.Main.Information>eContext.getFormContext();

    // Get the web resource control on the form
    const wrCtrl = Form.getControl('WebResource_QuestionnaireCreator');

    // Get the web resource inner content window
    if (wrCtrl !== null && wrCtrl !== undefined) {
      wrCtrl.getContentWindow().then(function (win) {
        const surveyDefinition = Form.getAttribute('ovs_questionnairedefinition').getValue();
        const languageCode = Xrm.Utility.getGlobalContext().userSettings.languageId;
        let surveyLocale = 'en';
        if (languageCode == 1036) {
          //French
          surveyLocale = 'fr';
        }
        win.InitializeSurveyCreator(surveyDefinition, surveyLocale);
      });
    }
  }

  export function onSave(eContext: Xrm.ExecutionContext<any, any>): void {
    // Get formContext
    const Form = <Form.ovs_questionnaire.Main.Information>eContext.getFormContext();

    // Get the web resource control on the form
    const wrCtrl = Form.getControl('WebResource_QuestionnaireCreator');

    // Get the web resource inner content window
    if (wrCtrl !== null && wrCtrl !== undefined) {
      wrCtrl.getContentWindow().then(function (win) {
        const surveyDefinition = win.GetSurveyDefinition();
        Form.getAttribute('ovs_questionnairedefinition').setValue(surveyDefinition);
      });
    }
  }
}
