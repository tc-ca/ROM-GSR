///<reference path="../../Utilities/GlobalHelper.js"/>
///<reference path="../../Utilities/questionnaireFunctions.js"/>

var WO_TDG_ReportHelper = (function (window, document) {

    //variables
    var formType;
    var userSettings;
    var LCID;
    var clientUrl;
    var resexResourceName;
    var currentWebApi;
    var isOffLine;
    var clientType;

    var errorObject = {};
    errorObject.isValid = true;
    errorObject.errorMessage = new Array();


    //********************private methods*******************
    function setReportValidationError(message) {
        errorObject.isValid = false;
        errorObject.errorMessage.push(message);
    }

    //********************private methods end***************

    //********************public methods***************
    return {


        OnLoad: function (executionContext) {
            debugger;
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

            if (LCID == 1033)
                resexResourceName = "ovs_Labels.1033.resx";
            else if (LCID == 1036)
                resexResourceName = "ovs_Labels.1036.resx";


        },

        ReportDataValidate: function (formContext) {

            //Xrm.Utility.showProgressIndicator("Validating ...");

            //check: primary contact with email, phone and job title; primary inspector with RIN and Badge; atleast one booking associated with WO having start date
            debugger;
            var isValid = true;
            errorObject.errorMessage = new Array();

            var messageReportContact = Xrm.Utility.getResourceString(resexResourceName, "msdyn_workorder.ReportValidation.Contact.ErrorMessage");
            var messageReportEmail = Xrm.Utility.getResourceString(resexResourceName, "msdyn_workorder.ReportValidation.Email.ErrorMessage");
            var messageReportFullName = Xrm.Utility.getResourceString(resexResourceName, "msdyn_workorder.ReportValidation.FullName.ErrorMessage");
            var messageReportJobTitle = Xrm.Utility.getResourceString(resexResourceName, "msdyn_workorder.ReportValidation.JobTitle.ErrorMessage");
            var messageReportPrimaryContact = Xrm.Utility.getResourceString(resexResourceName, "msdyn_workorder.ReportValidation.PrimaryContact.ErrorMessage");
            var messagePhone = Xrm.Utility.getResourceString(resexResourceName, "msdyn_workorder.ReportValidation.Phone.ErrorMessage");
            var messageBadge = Xrm.Utility.getResourceString(resexResourceName, "msdyn_workorder.ReportValidation.Badge.ErrorMessage");
            var messageRRIN = Xrm.Utility.getResourceString(resexResourceName, "msdyn_workorder.ReportValidation.RRIN.ErrorMessage");
            var messageWorkOrderNoBookings = Xrm.Utility.getResourceString(resexResourceName, "msdyn_workorder.ReportValidation.Bookings.ErrorMessage");
            var messageWorkOrderfutureBookings = Xrm.Utility.getResourceString(resexResourceName, "msdyn_workorder.ReportValidation.BookingsEndtime.ErrorMessage");
            var messageWorkOrderFewBookings = Xrm.Utility.getResourceString(resexResourceName, "msdyn_workorder.ReportValidation.FewBookings.ErrorMessage");
            var titlePrimaryInspector = Xrm.Utility.getResourceString(resexResourceName, "msdyn_workorder.ReportValidation.PrimaryInspector.Title");
            var messageTimeTracking = Xrm.Utility.getResourceString(resexResourceName, "msdyn_workorder.ReportValidation.TimeTracking.ErrorMessage");
            var genericErrorMsg = Xrm.Utility.getResourceString(resexResourceName, "generic.error.message");


            //check primary contact
            var site = formContext.getAttribute("msdyn_serviceaccount").getValue()[0];
            var req = new XMLHttpRequest();
            req.open("GET", clientUrl + "/api/data/v9.1/accounts(" + site.id.replace("{", "").replace("}", "") + ")?$select=_primarycontactid_value&$expand=primarycontactid($select=telephone1,emailaddress1,fullname,lastname,jobtitle)", false);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        var result = JSON.parse(this.response);
                        if (result.hasOwnProperty("primarycontactid")
                            && result["primarycontactid"] != null) {

                            if (result["primarycontactid"]["telephone1"] == null) {
                                setReportValidationError("Site " + site.name + " " + messagePhone);
                                isValid = false;
                            }
                            if (result["primarycontactid"]["emailaddress1"] == null) {
                                setReportValidationError("Site " + site.name + " " + messageReportEmail);
                                isValid = false;
                            }
                            if (result["primarycontactid"]["lastname"] == null || result["primarycontactid"]["lastname"] == "") {
                                setReportValidationError("Site " + site.name + " " + messageReportFullName);
                                isValid = false;
                            }
                            if (result["primarycontactid"]["jobtitle"] == null || result["primarycontactid"]["jobtitle"] == "") {
                                setReportValidationError("Site " + site.name + " " + messageReportJobTitle);
                                isValid = false;
                            }
                        }
                        else {
                            setReportValidationError("Site " + site.name + " " + messageReportContact);
                            isValid = false;
                        }

                        //Xrm.Utility.closeProgressIndicator();

                    } else {
                        isValid = false;
                        setReportValidationError(genericErrorMsg, this.status);
                    }
                }
            };
            req.send();

            //check primary inspector            
            var prmInspector = formContext.getAttribute("ovs_primaryinspector").getValue()[0];
            var req = new XMLHttpRequest();
            req.open("GET", clientUrl + "/api/data/v9.1/bookableresources(" + prmInspector.id.replace("{", "").replace("}", "") + ")?$select=ovs_registeredinspectornumberrin,ovs_badgenumber&$expand=UserId($select=address1_telephone1,domainname,internalemailaddress,fullname)", false);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        var result = JSON.parse(this.response);
                        if (result["ovs_badgenumber"] == null || result["ovs_badgenumber"] == "") {
                            setReportValidationError(titlePrimaryInspector + " " + prmInspector.name + " " + messageBadge);
                            isValid = false;
                        } if (result["ovs_registeredinspectornumberrin"] == null || result["ovs_registeredinspectornumberrin"] == "") {
                            setReportValidationError(titlePrimaryInspector + " " + prmInspector.name + " " + messageRRIN);
                            isValid = false;
                        }
                        if (result.hasOwnProperty("UserId")) {
                            if (result["UserId"]["address1_telephone1"] == null) {
                                setReportValidationError(titlePrimaryInspector + " " + prmInspector.name + " " + messagePhone);
                                isValid = false;
                            }
                            if (result["UserId"]["internalemailaddress"] == null
                                && result["UserId"]["domainname"] == null) {
                                setReportValidationError(titlePrimaryInspector + " " + prmInspector.name + " " + messageReportEmail);
                                isValid = false;
                            } if (result["UserId"]["fullname"] == null || result["UserId"]["fullname"] == "") {
                                setReportValidationError(messageReportFullName);
                                isValid = false;
                            }
                        }
                        else {
                            setReportValidationError(titlePrimaryInspector + " " + prmInspector.name + " is not associated with any user in the system");
                            isValid = false;
                        }
                    } else {
                        isValid = false;
                        setReportValidationError(genericErrorMsg, this.status);
                    }
                }
            };
            req.send();

            //check booking
            var req = new XMLHttpRequest();
            req.open("GET", clientUrl + "/api/data/v9.1/bookableresourcebookings?$select=starttime&$filter=starttime ne null and statecode eq 0 and _msdyn_workorder_value eq " + formContext.data.entity.getId().replace("{", "").replace("}", ""), false);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("Prefer", "odata.maxpagesize=1");
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        var results = JSON.parse(this.response);
                        if (results.value.length == 0) {
                            isValid = false;
                            setReportValidationError(messageWorkOrderNoBookings);
                        }
                    } else {
                        isValid = false;
                        setReportValidationError(genericErrorMsg, this.status);
                    }

                    //Xrm.Utility.closeProgressIndicator();
                }
            };
            req.send();

            //check booking is current or in the past
            var req = new XMLHttpRequest();
            req.open("GET", clientUrl + "/api/data/v9.1/bookableresourcebookings?$select=endtime&$filter=endtime ne null and statecode eq 0 and _msdyn_workorder_value eq " + formContext.data.entity.getId().replace("{", "").replace("}", ""), false);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("Prefer", "odata.maxpagesize=1");
            req.onreadystatechange = function () {
                debugger;
                const today = new Date();

                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        var results = JSON.parse(this.response);
                        console.log(results);
                        console.log(today.toISOString());
                        if (results.value.length > 0) {
                            if (results.value[0].endtime > today.toISOString()) {
                                setReportValidationError(messageWorkOrderfutureBookings);
                                isValid = false;
                            }
                        }else {
                                isValid = false;
                                setReportValidationError(genericErrorMsg, this.status);
                            }
                        //Xrm.Utility.closeProgressIndicator();
                    }
                }
            };
            req.send();


            var enableTimeTrackingValidationCheck = false; //set to false only the environment variable can turn this time tracking validation on
            var req = new XMLHttpRequest();
            req.open("GET", clientUrl + "/api/data/v9.1/qm_environmentsettingses?$select=ovs_enableforuser&$filter=qm_name eq 'FDR_EnableTimeTrackingPreInspectionReportValidation'", false);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader(
                "Content-Type",
                "application/json; charset=utf-8"
            );
            req.setRequestHeader("Prefer", 'odata.include-annotations="*"');
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        var results = JSON.parse(this.response);

                        if (results.value.length > 0) {
                            enableTimeTrackingValidationCheck = results.value[0]["ovs_enableforuser"];
                        }
                        else {
                            console.log(genericErrorMsg, 'environemnt setting not found');
                        }


                    } else {
                        enableTimeTrackingValidationCheck = false;
                        console.log(genericErrorMsg, this.status)
                    }
                }
            };
            req.send();

            if (enableTimeTrackingValidationCheck) {
                //check time tracking, only validate travel, pre-inspection and execution at this stage
                var parameters = {};
                var travel = "CA3A829A-E917-EC11-B6E7-000D3AE8EF7B";
                var preInspection = "88FD30AD-E917-EC11-B6E7-000D3AE8EF7B";
                var execution = "794A29B3-E917-EC11-B6E7-000D3AE8EF7B";

                parameters.workOrderId = formContext.data.entity.getId().replace("{", "").replace("}", "");
                parameters.taskTypesToValidate = `${travel},${preInspection},${execution}`;

                var req = new XMLHttpRequest();
                req.open("POST", clientUrl + "/api/data/v9.1/ovs_TimeEntryValidation", false);
                req.setRequestHeader("OData-MaxVersion", "4.0");
                req.setRequestHeader("OData-Version", "4.0");
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        req.onreadystatechange = null;
                        if (this.status === 200) {
                            var results = JSON.parse(this.response);
                            if (results["isValidToSave"] == false) {
                                isValid = false;
                                setReportValidationError(messageTimeTracking);

                            };
                        } else {
                            isValid = false;
                            setReportValidationError(genericErrorMsg, this.status);
                        }
                    }
                };
                req.send(JSON.stringify(parameters));
            }


            errorObject.isValid = isValid;

            //Xrm.Utility.closeProgressIndicator();
            return isValid;
        },


        errorObject: errorObject,
    }


    //********************public methods end***************

})(window, document)