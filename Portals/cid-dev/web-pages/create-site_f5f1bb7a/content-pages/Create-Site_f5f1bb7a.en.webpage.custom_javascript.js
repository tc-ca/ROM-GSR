// CreateSite.js
$(document).ready(function () {
    debugger;
    $("#createdon").closest("tr").hide();
    $("#cid_createdbyregistrant_label").closest("tr").hide();
    if (sessionStorage.getItem('frominyearsites') == "true") {
        tdg.c.weblink_hide("/RegistrationWizard/");
        tdg.c.weblink_hide("/Bulk_Site_Upload/");
    }
    else {
        tdg.c.weblink_hide("/company_dashboard/");
        tdg.c.weblink_hide("/Bulk_Site_Update/");
    }
    console.log("document read");
    $(".breadcrumb li").each(function () {
        if ($(this).text() == '\n  Site Registration\n ') {
            if (sessionStorage.getItem('frominyearsites') == "true") {
                var bredcrumb = $(this);
                bredcrumb.text('\n My Sites\n');
                bredcrumb[0].innerHTML = "\n  <a href=\"/my-sites/\" title=\"My Sites\">My Sites</a>\n ";
            }
            else {
                var bredcrumb = $(this);
                bredcrumb[0].innerHTML = "\n  <a href=\"/RegistrationWizard/\" title=\"Site Registration\">Site Registration</a>\n ";
            }
        }
    });
});



if (window.jQuery) {
    (function ($) {
        if (typeof (entityFormClientValidate) != 'undefined') {
            var originalValidationFunction = entityFormClientValidate;
            if (originalValidationFunction && typeof (originalValidationFunction) == "function") {
                entityFormClientValidate = function () {
                    originalValidationFunction.apply(this, arguments);
                    // do your custom validation here
                    // return false; // to prevent the form submit you need to return false
                    // end custom validation.
                    debugger;
                    var account_id = '{{user.parentcustomerid.Id}}';
                    var addressType = $("#ovs_address_type").val();
                    switch (addressType) {
                        case "1":
                            // legal land description
                            var lldProvince = $("#ovs_lld_province").val();
                            var quarter = $("#ovs_lld_quarter").val();
                            var section = $("#ovs_lld_section").val();
                            var township = $("#ovs_lld_township").val();
                            var range = $("#ovs_lld_range").val();
                            var meridian = $("#ovs_lld_meridian").val();

                            var parameters = {};
                            parameters.Parent_Id = account_id; // Edm.String
                            if (lldProvince != (null || "")) { parameters.Lld_Province = parseInt(lldProvince); }   // Edm.Int32                    
                            if (quarter != (null || "")) { parameters.Lld_Quarter = parseInt(quarter); }   // Edm.Int32    
                            if (section != (null || "")) { parameters.Lld_Section = parseInt(section); }   // Edm.Int32                    
                            if (township != (null || "")) { parameters.Lld_Township = parseInt(township); }   // Edm.Int32                    
                            if (range != (null || "")) { parameters.Lld_Range = parseInt(range); }   // Edm.Int32                    
                            if (meridian != (null || "")) { parameters.Lld_Meridian = parseInt(meridian); }   // Edm.Int32 
                            parameters.AddressType = 1; // Edm.Int32

                            var FlowName = "CID_Flow_Site_Duplicate_Validation_Test";
                            var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");

                            if (EnvironmentSettingResult.length > 0) {
                                var FlowURL = EnvironmentSettingResult[0]["qm_value"];
                                return CheckDuplicate(FlowURL, parameters);
                            } //end check if flow url found
                            else
                                return true;

                            break;

                        case "2":
                            // lat/long
                            var latitude = $("#address1_latitude").val();
                            var longitude = $("#address1_longitude").val();

                            var parameters = {};
                            parameters.Parent_Id = account_id; // Edm.String
                            parameters.AddressType = 2; // Edm.Int32
                            if (latitude != (null || "")) { parameters.Address1_Latitude = parseFloat(latitude).toFixed(4); }   // Edm.Float                    
                            if (longitude != (null || "")) { parameters.Address1_Longitude = parseFloat(longitude).toFixed(4); }   // Edm.Float    

                            var FlowName = "CID_Flow_Site_Duplicate_Validation_Test";
                            var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");

                            if (EnvironmentSettingResult.length > 0) {
                                var FlowURL = EnvironmentSettingResult[0]["qm_value"];
                                return CheckDuplicate(FlowURL, parameters);
                            }
                            else
                                return true;

                            break;

                        default:
                            //postal
                            debugger;
                            var address1_line1 = $("#address1_line1").val();
                            var address1_city = $("#address1_city").val();
                            var address1_stateorprovince = $("#address1_stateorprovince").val();

                            var parameters = {};
                            parameters.Parent_Id = account_id; // Edm.String
                            parameters.AddressType = 0; // Edm.Int32
                            parameters.Address1_StateorProvince = address1_stateorprovince; // Edm.String
                            parameters.Address1_Line1 = address1_line1; // Edm.String
                            parameters.Address1_City = address1_city;

                            var FlowName = "CID_Flow_Site_Duplicate_Validation_Test";
                            var EnvironmentSettingResult = tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq '" + FlowName + "'");

                            if (EnvironmentSettingResult.length > 0) {
                                var FlowURL = EnvironmentSettingResult[0]["qm_value"];
                                return CheckDuplicate(FlowURL, parameters);
                            }
                            else
                                return true;

                            break;
                    }
                };
            }
        }
    }(window.jQuery));
}

var cb = function (v) { console.log('value', v); return v; };

var CheckDuplicate = function (_flowURl, _parameters) {
    var req = new XMLHttpRequest();
    req.open("POST", _flowURl, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                debugger;

                var result = JSON.parse(this.response);
                var duplicatefound = result["DuplicateFound"]; // Edm.Boolean

                if (duplicatefound) {
                    var message = tdg.error_message.message("m000131");
                    //message = message.replaceAll("{0}", "AAA");
                    tdg.c.dialog_YN(message, (ans) => {
                        var contact_id = '{{user.id}}';
                        //alert(ans);
                        if (ans) {
                            return false;
                            //Do nothing
                        }
                        else {
                            //Add ALM record. 
                            var accName = "";
                            var accId = "";
                            var AddrType = "Postal Address"
                            if (_parameters.AddressType == 1) AddrType = "LLD";
                            else if (_parameters.AddressType == 2) AddrType = "Latitude / Longitude";

                            var accountResult = tdg.webapi.SelectedColumnlist("accounts", "cid_crabusinessnumber,ovs_legalname", "accountid eq '" + _parameters.Parent_Id + "'");
                            if (accountResult.length > 0) {
                                accName = accountResult[0]["ovs_legalname"];
                                accId = accountResult[0]["cid_crabusinessnumber"];
                            }
                            var data = {
                                "cid_Company_cid_activityreviewlog@odata.bind": "/accounts(" + _parameters.Parent_Id + ")",
                                "subject": "A duplicate Site was created | Legal Name: " + accName + "| Address Type: " + AddrType,
                                "prioritycode": 1,
                                "actualdurationminutes": 30,
                                "cid_arlcategory": 100000000
                            };
                            tdg.webapi.create("cid_activityreviewlogs", data);
                            entityFormClientValidate = true;
                            originalValidationFunction = true;
                            //trigger second button
                            $("#InsertButton").click();
                            return true;
                        }
                    });
                }
                else
                {
                    entityFormClientValidate = true;
                    originalValidationFunction = true;
                    $("#InsertButton").click();
                    return true;
                }
            }
        } //end ready status
    }; //end on ready function
    req.send(JSON.stringify(_parameters));
}