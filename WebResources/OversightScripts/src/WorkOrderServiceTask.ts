namespace ROM.WorkOrderServiceTask {
  // EVENTS
  const mode = '';
  export function ToggleQuestionnaire(eContext: Xrm.ExecutionContext<any, any>): void {
    const Form = <Form.msdyn_workorderservicetask.Main.Information>eContext.getFormContext();

    // Get the web resource control on the form
    const wrCtrl = Form.getControl('WebResource_QuestionnaireRender');
    const questionnaireDefinition = Form.getAttribute('ovs_questionnairedefinition').getValue();
    const questionnaireResponse = Form.getAttribute('ovs_questionnairereponse').getValue();

    // Exit if no questionnaire exists
    if (questionnaireDefinition === null) {
      wrCtrl.setVisible(false);
      return;
    }

    // Get Questionnaire definition
    wrCtrl.setVisible(true);
    InitiateSurvey(eContext, wrCtrl, questionnaireDefinition, questionnaireResponse, mode);
  }
  // Get surveyJS locale
  function getSurveyLocal(): string {
    const languageCode = Xrm.Utility.getGlobalContext().userSettings.languageId;
    let surveyLocale = 'en';
    if (languageCode == 1036) {
      //French
      surveyLocale = 'fr';
    }
    return surveyLocale;
  }

  function InitiateSurvey(eContext, wrCtrl, questionnaireDefinition, questionnaireResponse, mode) {
    wrCtrl.setVisible(true);
    wrCtrl.getContentWindow().then(function (win) {
      const surveyLocale = getSurveyLocal();
      win.InitialContext(eContext);
      win.InitializeSurveyRender(questionnaireDefinition, questionnaireResponse, surveyLocale, mode);
    });
  }
}
