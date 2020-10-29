/* eslint-disable no-undef */
// namespace instantiation

let TDG = {}
if (typeof (TDG) === 'undefined') { TDG = { __namespace: true } }

// class property definitions

// functions
TDG.GetTemplateConfiguration = function (template, inspection, callback) {
  let templateName = template.properties.tc_name

  var entity = new MobileCRM.FetchXml.Entity('tc_questionnaire_template')
  entity.addAttribute('tc_name', 'template_name')
  entity.addAttribute('tc_englishtitle', 'template_title_english')
  entity.addAttribute('tc_frenchtitle', 'template_title_french')

  entity.addAttribute('tc_englishdescription', 'template_description_english')
  entity.addAttribute('tc_frenchdescription', 'template_description_french')

  entity.filter = new MobileCRM.FetchXml.Filter()
  entity.filter.where('tc_name', 'eq', templateName)

  var linkTemplateQuestionGroup = entity.addLink('tc_template_questions_group', 'tc_questionnaire_templateid', 'tc_questionnaire_templateid', 'outer')
  var linkQuestionnaireQuestionGroup = linkTemplateQuestionGroup.addLink('tc_questionnaire_questions_group', 'tc_questionnaire_questions_groupid', 'tc_questionnaire_questions_groupid', 'inner')

  linkQuestionnaireQuestionGroup.addAttribute('tc_name', 'group_name')
  linkQuestionnaireQuestionGroup.addAttribute('tc_englishtitle', 'group_title_english')
  linkQuestionnaireQuestionGroup.addAttribute('tc_frenchtitle', 'group_title_french')

  linkQuestionnaireQuestionGroup.addAttribute('tc_isrepeatable', 'group_is_repeatable')
  linkQuestionnaireQuestionGroup.addAttribute('tc_htmlelementid', 'group_html_element_id')

  var linkQuestionGroupOrder = linkQuestionnaireQuestionGroup.addLink('tc_qtn_question_group_order', 'tc_group', 'tc_questionnaire_questions_groupid', 'inner')

  linkQuestionGroupOrder.addAttribute('tc_showkey', 'group_show_key')
  linkQuestionGroupOrder.addAttribute('tc_hidekey', 'group_hide_key')
  linkQuestionGroupOrder.addAttribute('tc_visible', 'group_visible')
  linkQuestionGroupOrder.addAttribute('tc_order', 'group_order')
  linkQuestionGroupOrder.addAttribute('tc_responsedelimiter', 'group_response_delimiter')
  linkQuestionGroupOrder.orderBy('tc_order')

  var linkQuestionGroupQuestion = linkQuestionnaireQuestionGroup.addLink('tc_questions_group_question', 'tc_questionnaire_questions_groupid', 'tc_questionnaire_questions_groupid', 'inner')
  var linkQuestionnaireQuestion = linkQuestionGroupQuestion.addLink('tc_questionnaire_question', 'tc_questionnaire_questionid', 'tc_questionnaire_questionid', 'inner')

  linkQuestionnaireQuestion.addAttribute('tc_englishtext', 'question_text_english')
  linkQuestionnaireQuestion.addAttribute('tc_frenchtext', 'question_text_french')

  linkQuestionnaireQuestion.addAttribute('tc_name', 'question_name')
  linkQuestionnaireQuestion.addAttribute('tc_htmlelementid', 'question_html_element_id')

  var linkQuestionOrder = linkQuestionnaireQuestion.addLink('tc_qtn_question_order', 'tc_question', 'tc_questionnaire_questionid', 'inner')
  linkQuestionOrder.addAttribute('tc_order', 'question_order')
  linkQuestionOrder.addAttribute('tc_visible', 'question_visible')
  linkQuestionOrder.addAttribute('tc_showkey', 'question_show_key')
  linkQuestionOrder.addAttribute('tc_hidekey', 'question_hide_key')
  linkQuestionOrder.orderBy('tc_order')

  var linkQuestionResponse = linkQuestionnaireQuestion.addLink('tc_questionnaire_question_response', 'tc_questionnaire_question', 'tc_questionnaire_questionid', 'inner')

  linkQuestionResponse.addAttribute('tc_controlinputtype', 'response_control_input_type')
  linkQuestionResponse.addAttribute('tc_controllabelenglishtext', 'response_control_label_text_english')
  linkQuestionResponse.addAttribute('tc_controllabelfrenchtext', 'response_control_label_text_french')

  linkQuestionResponse.addAttribute('tc_controlinputname', 'response_control_input_name')
  linkQuestionResponse.addAttribute('tc_controlinputid', 'response_control_input_id')
  linkQuestionResponse.addAttribute('tc_name', 'response_name')
  linkQuestionResponse.addAttribute('tc_internalcomment', 'response_internal_comment')
  linkQuestionResponse.addAttribute('tc_isproblem', 'response_is_problem')
  linkQuestionResponse.addAttribute('tc_externalcomment', 'response_external_comment')
  linkQuestionResponse.addAttribute('tc_emitvalue', 'response_emit_value')
  linkQuestionResponse.addAttribute('tc_picture', 'response_picture')
  linkQuestionResponse.addAttribute('tc_issafetyconcern', 'response_is_safety_concern')
  linkQuestionResponse.addAttribute('tc_order', 'response_order')
  linkQuestionResponse.addAttribute('tc_displayingroupheader', 'response_display_in_group_header')
  linkQuestionResponse.orderBy('tc_order')

  var fetch = new MobileCRM.FetchXml.Fetch(entity)
  fetch.execute(
    'JSON',
    function (res) {
      if (res) {
        if (callback !== 'undefined' && callback != null) {
          callback(res, template, inspection)
        }
      }
    }, function (err) {
      alert(err)
    }
  )
}

// TODO: ains, come back and clean things up
TDG.GetInspectionQuestionnaire = function (inspection, callback) {
  var entity = new MobileCRM.FetchXml.Entity('tc_inspectionquestionnaire')
  entity.addAttribute('tc_inspectionquestionnaireid', 'inspectionQuestionnaireEntityId')
  entity.addAttribute('tc_parentinspection', 'inspectionId')

  entity.filter = new MobileCRM.FetchXml.Filter()
  entity.filter.where('tc_parentinspection', 'eq', inspection.id)

  var fetch = new MobileCRM.FetchXml.Fetch(entity)
  fetch.execute(
    'JSON',
    function (res) {
      if (res) {
        if (callback !== 'undefined' && callback != null) {
          callback(res, inspection)
        }
      }
    }, function (err) {
      alert(err)
    }
  )
}

/// this should be linked to the entity form that is hosting the iFrame
/// if opening an iFrame directly with no host form, then bind to TDG.QuestionnaireTemplateIFrame
TDG.QuestionnaireEntityForm = {
  init: function () {
    // Request entity form (currently edited Account form).
    MobileCRM.UI.EntityForm.requestObject(
      function (entityForm) {
        TDG.QuestionnaireEntityForm.onload(entityForm)
      },
      MobileCRM.bridge.alert
    )
  },
  save: function (props) {
    // Request entity form (currently edited Account form).
    TDG.GetInspectionQuestionnaire(
      props.inspection,
      function (res, ins) {
        // update questionnaire
        if (res.length === 1) {
          MobileCRM.DynamicEntity.loadById(
            'tc_inspectionquestionnaire',
            res[0].inspectionQuestionnaireEntityId,
            function (entity) {
              // inspectionQuestionnaire.properties.tc_jsoncontent = JSON.stringify(window.TCQuestionnaireBuilder.responses)
              entity.properties.tc_jsoncontent = 'update: ' + new Date().toString()
              entity.save(
                function (error) {
                  if (error) {
                    MobileCRM.bridge.alert('An error occurred: ' + error)
                  } else {
                    MobileCRM.bridge.alert('save successful')
                  }
                }
              )
            },
            function (error) {
              MobileCRM.bridge.alert('An error occurred: ' + error)
            },
            null
          )
          // save new questionnaire
        } else if (res.length === 0) {
          const inspection = new MobileCRM.Reference(
            'tc_tcinspection',
            props.inspection.id
          )

          let inspectionQuestionnaire = MobileCRM.DynamicEntity.createNew('tc_inspectionquestionnaire')
          // inspectionQuestionnaire.properties.tc_jsoncontent = JSON.stringify(window.TCQuestionnaireBuilder.responses)
          inspectionQuestionnaire.properties.tc_parentinspection = inspection
          inspectionQuestionnaire.properties.tc_inspectionquestionnaire = props.template.primaryName
          // ...
          inspectionQuestionnaire.save(
            function (error) {
              if (error) {
                MobileCRM.bridge.alert('An error occurred: ' + error)
              } else {
                MobileCRM.bridge.alert('save successful')
              }
            }
          )
        } else if (res.length > 1) {
          MobileCRM.bridge.alert('error: response length = ' + res.length)
        }
      }
    )
  },

  onload: function (entityForm) {
    /// <param name="entityForm" type="MobileCRM.UI.EntityForm"/>
    this._instance = entityForm

    let props = entityForm.iFrameOptions
    // let inspection = props.inspection
    // let template = props.template

    const questionnaire = document.querySelector('questionnaire-builder')

    questionnaire.setAttribute('schema', JSON.stringify(props.configurationData))
    questionnaire.setAttribute('lang', props.lang)
    // questionnaire.setAttribute('metadata', JSON.stringify({ title: { 'en-US': props.template.properties.tc_englishtitle, 'fr-FR': props.template.properties.tc_frenchtitle } }))
    // TODO: ains, come back and clean things up

    document.addEventListener('click', function (event) {
      // MobileCRM.bridge.alert('dataset' + event.target.dataset.qtnId)
      // MobileCRM.bridge.alert('closet' + event.target.closest('[data-qtn-id]').id)

      if (event.target.dataset) {
        // v-btn adds extra elements when the screen is rendered therefore when user clicks near the save they maybe clicking on a nested element, hence the use of closest.
        if (event.target.dataset.qtnId === 'save' || event.target.closest('[data-qtn-id]').id === 'save') {
          TDG.QuestionnaireEntityForm.save(props)
        }
      }
    }, false)
  }
}

TDG.QuestionnaireTemplateIFrame = {
  init: function () {
    // main object load
    MobileCRM.UI.IFrameForm.requestObject(function (iFrame) {
      this.onLoad(iFrame)
    }, this.onError, null)
  },

  onLoad: function (iFrame) {
    /// <param name='iFrame' type='MobileCRM.UI.IFrameForm'/>
    this._instance = iFrame
  },

  onError: function (errorContext) {
    alert(errorContext)
  }
}

TDG.InspectionTemplateList = {
  init: function () {
    var self = this

    // main object load
    MobileCRM.UI.EntityList.requestObject(
      function (entityList) {
        self.onLoad(entityList)
      }, self.onError, null)

    // register on click handler
    MobileCRM.UI.EntityList.onClick(function (entityList) {
      self.onClick(entityList)
    }, true, null)
  },

  onLoad: function (entityList) {
    this._instance = entityList
  },

  onError: function (errorContext) {
    alert(errorContext)
  },

  onClick: function (entityList) {
    var context = entityList.context
    var template = context.entities[0]
    var inspection = entityList.relationship.target

    if (template.properties.tc_name !== 'undefined') {
      TDG.GetTemplateConfiguration(
        template,
        inspection,
        this.onInspectionTemplateDataLoaded
      )
    }
  },

  onInspectionTemplateDataLoaded: function (json, template, inspection) {
    MobileCRM.Localization.getLoadedLangId(startPointFn, MobileCRM.bridge.alert, null)

    // returns the localized loaded language id ("EN" for English);
    function startPointFn (loadedLangId) {
      TDG.QuestionnaireTemplateConfigurationJson = json

      // enable zooming on Android iFrame
      MobileCRM.bridge.enableZoom(true)

      /// <param name='iFrame' type='MobileCRM.UI.IFrameForm'/>
      // MobileCRM.UI.IFrameForm.show(
      //    iFrameOptions.templateName,
      //    "file://TDG_Questionnaire/QuestionnaireTemplateIFrame.html",
      //    false,
      //    options = { text: "Some Text as option." }
      // );

      var target = new MobileCRM.Reference(inspection.entityName, inspection.id)
      var relationShip = new MobileCRM.Relationship('tc_Questionnaire_Template_tc_inpsecitonty', target, null, null)

      MobileCRM.UI.FormManager.showNewDialog(
        'tc_questionnaire_template',
        relationShip,
        {
          // These props will be passed to all iFrames on the contact form which is being opened
          iFrameOptions: {
            configurationData: json,
            inspection: inspection,
            template: template,
            lang: loadedLangId
          }
        }
      )
    }
  }
}

// GlobalEvents Overrides

/**
 * Register global handler for 'EntityFormClosed' event. Event handler display message with closed entity form caption.
 * @param register If 'true' handler is bound.
 */
TDG.Global = {
  onEntityFormClosed: function (register) {
    MobileCRM.bridge.onGlobalEvent('EntityFormClosed', function (entityForm) {
      MobileCRM.bridge.alert("Trying to close entity form ['" + entityForm.form.caption + "']")
    }, register, null)
  }
}

// function onSyncStarted (register) {
//   MobileCRM.bridge.onGlobalEvent('SyncStarted', function (args) {
//     interval = setInterval(function () {
//       interval += new Date().getMilliseconds()
//     }, 1000)
//   }, register, null)
// }

/*
* Register global handler for 'SyncFinshed' event. Event handler displays elapsed time of synchronization process if new customization is not ready.
* @param register If 'true' handler is bound.
*/
// function onSyncFinished (register) {
//   MobileCRM.bridge.onGlobalEvent('SyncFinished', function (syncResult) {
//     if (interval != null) {
//       clearInterval(interval)
//     }
//     var syncDurationMsg = '\nSynchronization tooks ' + interval + ' [ms].'
//     if (syncResult.newCustomizationReady) { MobileCRM.bridge.alert('New Customization ready.' + syncDurationMsg) } else { MobileCRM.bridge.alert('Not any new Customization ready.' + syncDurationMsg) }
//   }, register, null)
// }

// window.onload = function () {
//    //onSyncStarted(true);
//    //onSyncFinished(true);
//    onEntityFormClosed(true);
// };
