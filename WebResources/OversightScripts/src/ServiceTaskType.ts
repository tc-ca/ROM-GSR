namespace ROM.ServiceTaskType {
  // EVENTS
  export function ToggleQuestionnaire(eContext: Xrm.ExecutionContext<any, any>): void {
    const Form = <Form.msdyn_servicetasktype.Main.Information>eContext.getFormContext();

    // Get the web resource control on the form
    const wrCtrl = Form.getControl('WebResource_QuestionnaireRender');
    const hasQuestionnaire = Form.getAttribute('ovs_questionnaireenabled').getValue();
    const questionnaireId = Form.getAttribute('ovs_questionnaire').getValue();
    const mode = 'display';

    // Exit if no surveyJS render exists
    if (wrCtrl === null || wrCtrl === undefined) {
      return;
    }

    // Exit if no questionnaire exists
    if (!hasQuestionnaire) {
      wrCtrl.setVisible(false);
      return;
    }

    // Exit if no questionnaire is selected
    if (questionnaireId === null) {
      wrCtrl.setVisible(false);
      return;
    }

    // Get Questionnaire definition
    let surveyDefinition = null;
    Xrm.WebApi.retrieveRecord(
      'ovs_questionnaire',
      questionnaireId[0].id.substr(1, questionnaireId[0].id.length - 2),
      '$select=ovs_questionnairedefinition'
    ).then(
      function success(result) {
        surveyDefinition = result.ovs_questionnairedefinition;
        wrCtrl.setVisible(true);
        wrCtrl.getContentWindow().then(function (win) {
          const surveyLocale = getSurveyLocal();
          win.InitializeSurveyRender(surveyDefinition, surveyLocale, mode);
        });
      },
      function error(error) {
        Xrm.Navigation.openAlertDialog({ text: error.message });
      }
    );

    // XrmQuery.retrieve(
    //   (x) => x.ovs_questionnaire,
    //   questionnaireId[0].id.substr(1, questionnaireId[0].id.length - 2).replace(/-/g, '') //Trim the {} outside the id
    // )
    //   .select((x) => [x.ovs_questionnairedefinition])
    //   .execute(function (x) {
    //     //should only return one fiscal year record as the current
    //     if (x !== null) {
    //       surveyDefinition = x.ovs_questionnairedefinition;
    //       wrCtrl.setVisible(true);
    //     } else {
    //       // do not set a default if multiple records are found, error.
    //       wrCtrl.setVisible(false);
    //     }
    //   });

    // Call the SurveyJS Creator to render
    // if (wrCtrl !== null && wrCtrl !== undefined) {
    //   wrCtrl.getContentWindow().then(function (win) {
    //     const surveyLocale = getSurveyLocal();
    //     win.InitializeSurveyCreator(surveyDefinition, surveyLocale);
    //   });
    // }
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
}
