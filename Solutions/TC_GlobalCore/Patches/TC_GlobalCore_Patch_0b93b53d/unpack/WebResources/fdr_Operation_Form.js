var QuickCreateHelper = QuickCreateHelper || {};
window.top.QuickCreateHelper = QuickCreateHelper;

var globalFormContext;

const FIELD_SITE = "ovs_siteid";
const FIELD_OPERATION_TYPE = "ovs_operationtype";
const FIELD_MOC_REGISTRATION_ID = "ovs_mocregistrationname";
const FIELD_MOC_FACILITY_TYPE = "ovs_operationfacilitytype";
const FIELD_MOC_REGISTRATION_EXPIRY_DATE = "ovs_registrationexpiry";
const FIELD_MOC_REGISTRATION_INITIAL_DATE = "ovs_mocinitialregistrationdate";
const FIELD_HUB_INDICATOR = "ovs_hubind";
const FIELD_TARGETED_INDICATOR = "ovs_targetedind";
const FIELD_ACCIDENT_INDICATOR = "ovs_accidentind";
const FIELD_CEP_INDICATOR = "ovs_cepind";
const FIELD_FOLLOW_UP_INDICATOR = "ovs_followupind";
const FIELD_RISK_SCORE = "ovs_cdriskscore";

const VALUE_HOTI = 918640038;
const VALUE_HOTI_GOA = 918640042;
const VALUE_CIV_AV = 918640040;

async function OnLoad(executionContext) {
  //get context
  globalContext = glHelper.getGlobalContext();
  var formContext = executionContext.getFormContext();
  globalFormContext = formContext;

  // 0 = Undefined, 1 = Create, 2 = Update, 3 = Read Only, 4 = Disabled, 6 = Bulk Edit
  let formType = glHelper.GetFormType(formContext);

  
   if (glHelper.isTopAccessible()) {
     globalObj = window.top.QuickCreateHelper;
     globalObj.formContext = formContext;
   }

  //Toggle required level based on Operation Type
  toggleRequiredLevel(formContext);


  //Add function to Refresh Operation Class when UNCode is added
  if (formType > 1) {
    var OperationUN = formContext.getControl("Subgrid_OperationUNNumber");
    if (OperationUN != null) OperationUN.addOnLoad(Refresh_OperationClass);
  }
}

function Refresh_OperationClass() {
  var OperationClass = globalFormContext.getControl("grd_Class");
  if (OperationClass != null) OperationClass.refresh();
}

function hasCurrentUserRole(roleName) {
  let hasRole = false;
  let roles = Xrm.Utility.getGlobalContext().userSettings.roles;
  roles.forEach((x) => {
    if (x.name === "System Administrator" || x.name === roleName) {
      hasRole = true;
      return;
    }
  });
  return hasRole;
}

function OnSave(executionContext) {}

function toggleRequiredLevel(formContext) {
  var operationType = glHelper.GetValue(formContext, FIELD_OPERATION_TYPE);
  var fieldsRequired = true;

  if (
    operationType == VALUE_CIV_AV ||
    operationType == VALUE_HOTI ||
    operationType == VALUE_HOTI_GOA
  )
    fieldsRequired = false;

  glHelper.SetRequiredLevel(formContext, FIELD_SITE, true);
  glHelper.SetRequiredLevel(formContext, FIELD_OPERATION_TYPE, fieldsRequired);
  //glHelper.SetRequiredLevel(formContext, FIELD_MOC_FACILITY_TYPE, fieldsRequired);
  glHelper.SetRequiredLevel(
    formContext,
    FIELD_MOC_REGISTRATION_EXPIRY_DATE,
    fieldsRequired
  );
  glHelper.SetRequiredLevel(
    formContext,
    FIELD_MOC_REGISTRATION_ID,
    fieldsRequired
  );
  glHelper.SetRequiredLevel(
    formContext,
    FIELD_MOC_REGISTRATION_INITIAL_DATE,
    fieldsRequired
  );
}

function OperationType_OnChange(executionContext) {
  var formContext = executionContext.getFormContext();

  toggleRequiredLevel(formContext);
}
