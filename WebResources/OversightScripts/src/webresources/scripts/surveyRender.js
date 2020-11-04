Survey.StylesManager.applyTheme('modern');

function InitializeSurveyRender(surveyDefinition, surveyLocale, mode) {
  if (surveyDefinition !== null && surveyDefinition !== undefined) {
    const questionnaireDefinition = JSON.parse(surveyDefinition);
    window.survey = new Survey.Model(questionnaireDefinition);
    survey.locale = surveyLocale;
    survey.mode = mode;
    $('#surveyElement').Survey({ model: survey });
  }
}

function GetSurveyResponse() {
  return JSON.stringify(result.data, null, 3);
}

// survey.onComplete.add(function (result) {
//   document.querySelector('#surveyResult').textContent = 'Result JSON:\n' + JSON.stringify(result.data, null, 3);
// });
