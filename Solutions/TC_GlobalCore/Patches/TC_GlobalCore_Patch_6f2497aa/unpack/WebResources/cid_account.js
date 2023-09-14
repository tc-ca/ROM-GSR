var k_form_org = "CID - Organization::BDIC - Organisation";
var k_form_site = "CID - Site::BDIC - Site";
var k_customertypecode_org = 948010000;
var k_customertypecode_site = 948010001;
var k_customertypecode = "cid_customertypecode";

var _form;
var _CRAFlowURL;
var _environment;
var _cid_crabusinessnumber;

function Me_OnLoad(context) {
    debugger;

    _form = context.getFormContext();

    var customertypecode = null;
    var parentaccountid = _form.getAttribute("parentaccountid");

    // create?
    if (_form.ui.getFormType() == 1) {
        customertypecode = k_customertypecode_org;
        _form.getAttribute("cid_addressrequired").setValue(true);
    }
    else {
        customertypecode = _form.getAttribute("customertypecode").getValue();
    }

    var value = form_setup(_form, customertypecode);
    if (value) return;

    sessionStorage.setItem(k_customertypecode, k_customertypecode_org);

    _form.getAttribute("ovs_address1_province").setRequiredLevel("required");
    _form.getAttribute("address1_country").setValue("Canada");

    _cid_crabusinessnumber = _form.getAttribute("cid_crabusinessnumber").getValue();

    var cid_has_cra_bn = _form.getAttribute("cid_has_cra_bn").getValue();
    _form.getAttribute("cid_has_cra_bn").addOnChange(cid_has_cra_bn_OnChange);
    cid_has_cra_bn_OnChange();

    var ovs_address1_province = _form.getAttribute("ovs_address1_province").getValue();
    var address1_stateorprovince = _form.getAttribute("address1_stateorprovince").getValue();

    _form.getAttribute("ovs_address1_province").addOnChange(ovs_address1_province_OnChange);

    if ((ovs_address1_province != null) && (address1_stateorprovince == null)) {
        ovs_address1_province_OnChange();
    }
    else if ((address1_stateorprovince != null) && (ovs_address1_province == null)) {
        ovs_address1_province_setup();
    }

    //  _form.getAttribute("cid_crabusinessnumber").addOnChange(cid_crabusinessnumber_OnChange);
    var getFormType = _form.ui.getFormType();
    if ((cid_has_cra_bn) && (getFormType != 1)) {
        // cid_crabusinessnumber_OnChange();
    }

    _form.getAttribute("cid_reasonfornobnnumber").addOnChange(cid_reasonfornobnnumber_OnChange);
    _form.getAttribute("cid_addressrequired").addOnChange(cid_addressrequired_OnChange);

    cid_addressrequired_OnChange(context);

    Get_FlowURL_and_Environment();
}

function Me_OnSave(context) {
    debugger;
    sessionStorage.setItem(k_customertypecode, "");
}

function cid_addressrequired_OnChange(context) {
    debugger;
    var value = _form.getAttribute("cid_addressrequired").getValue();
    value = (value == null ? true : value);
    var required_level = (value ? "required" : "none");
    _form.getAttribute("address1_line1").setRequiredLevel(required_level);
    _form.getAttribute("address1_city").setRequiredLevel(required_level);
    _form.getAttribute("ovs_address1_province").setRequiredLevel(required_level);
    _form.getAttribute("address1_postalcode").setRequiredLevel(required_level);
    _form.getAttribute("address1_country").setRequiredLevel(required_level);
}

function Get_FlowURL_and_Environment() {
    debugger;
    Xrm.WebApi.retrieveMultipleRecords("qm_environmentsettings",
        "?$select=qm_name,qm_value&$filter=qm_name eq 'CID_Flow_CRA_API' or qm_name eq 'CID_Environment'").then(
            function success(result) {
                debugger;
                for (var i = 0; i < result.entities.length; i++) {
                    // console.log(result.entities[i].qm_value);
                    // alert(result.entities[i].qm_value);
                    if (result.entities[i].qm_name == "CID_Flow_CRA_API") {
                        _CRAFlowURL = result.entities[i].qm_value;
                    }
                    else if (result.entities[i].qm_name == "CID_Environment") {
                        _environment = result.entities[i].qm_value;
                    }
                }
                // perform additional operations on retrieved records
            },
            function (error) {
                // handle error conditions
                debugger;
            }
        );
}

function cra_api_get_v2() {
    debugger;

    var cid_crabusinessnumber = _form.getAttribute("cid_crabusinessnumber").getValue();
    _form.ui.clearFormNotification("1");

    Xrm.Utility.showProgressIndicator("Please wait while retrieving information from CRA");
    if (cid_crabusinessnumber != null) {
        if (_environment == "PreProd" || _environment == "Prod") {
            debugger;
            let body = {
                "cid_crabusinessnumber": cid_crabusinessnumber
            };

            let req = new XMLHttpRequest();
            req.open("POST", _CRAFlowURL, true);
            req.setRequestHeader("Content-Type", "application/json");
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        debugger;

                        var json = JSON.parse(this.response);
                        if (json.IsInvalidData) {
                            _form.ui.setFormNotification("Invalid CRA number.", "ERROR", "1");
                            clear_data();
                        }
                        else {
                            tdg.cid.crw.start_BN_Selected(json);
                            ovs_address1_province_setup();
                            // cra_api_get_callback(json);
                        }
                        Xrm.Utility.closeProgressIndicator();
                    } else {
                        debugger;

                        _form.ui.setFormNotification("Invalid CRA number.", "ERROR", "1");
                        clear_data();
                        Xrm.Utility.closeProgressIndicator();
                    }
                }
            };
            req.send(JSON.stringify(body));
        }//end check if pre-prod enviroment
        else {
            tdg.cid.crw.cid_fake_cra_bn_get(cid_crabusinessnumber);
            Xrm.Utility.closeProgressIndicator();
        }
    }//end if bn not null
    else {
        clear_data();
    }
}

async function cid_crabusinessnumber_OnChange() {
    debugger;
    var cid_crabusinessnumber = _form.getAttribute("cid_crabusinessnumber").getValue();
    if (cid_crabusinessnumber != null) {
        tdg.cid.crw.start_Retrieve_cra(cid_crabusinessnumber, "1");
    }
    else {
        // clear data
        clear_data();
    }
}

function clear_data() {
    _form.getAttribute("ovs_legalname").setValue("");
    _form.getAttribute("name").setValue("");
    _form.getAttribute("ovs_name_fr").setValue("");
    _form.getAttribute("address1_line1").setValue("");
    _form.getAttribute("address1_line2").setValue("");
    _form.getAttribute("address1_line3").setValue("");
    _form.getAttribute("address1_city").setValue("");
    _form.getAttribute("ovs_address1_province").setValue("");
    _form.getAttribute("address1_stateorprovince").setValue("");
    _form.getAttribute("address1_postalcode").setValue("");
}

var _list = null;
function cid_crabusinessnumber_success() {
    debugger;
    var current_id = _form.data.entity.getId();
    if (_list.length > 0) {
        var data = _list[0];
        if (data.accountid != current_id) {
            if (data.address1_line2 == null) data.address1_line2 = "";
            if (data.address1_line3 == null) data.address1_line3 = "";
            if (data.address1_stateorprovince == null) data.address1_stateorprovince = "";

            _form.getAttribute("ovs_legalname").setValue(data.ovs_legalname);
            _form.getAttribute("name").setValue(data.name);
            _form.getAttribute("ovs_name_fr").setValue(data.ovs_name_fr);
            _form.getAttribute("address1_line1").setValue(data.address1_line1);
            _form.getAttribute("address1_line2").setValue(data.address1_line2);
            _form.getAttribute("address1_line3").setValue(data.address1_line3);
            _form.getAttribute("address1_city").setValue(data.address1_city);
            _form.getAttribute("ovs_address1_province").setValue(data.ovs_address1_province);
            _form.getAttribute("address1_stateorprovince").setValue(data.address1_stateorprovince);
            _form.getAttribute("address1_postalcode").setValue(data.address1_postalcode);
        }
        else {
            _form.getAttribute("cid_crabusinessnumber").setValue(_cid_crabusinessnumber);
        }
    }
    else {
        clear_data();
    }
}

var _canProvincesCodes = ["AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT"];
function ovs_address1_province_OnChange() {
    //debugger;

    var prov = _form.getAttribute("ovs_address1_province").getValue();
    if (prov != null) {
        var value = _canProvincesCodes[prov];
        _form.getAttribute("address1_stateorprovince").setValue(value);
    }
    else {
        _form.getAttribute("address1_stateorprovince").setValue("");
    }
}

function ovs_address1_province_setup() {
    debugger;

    _form.getAttribute("ovs_address1_province").setValue("");

    var prov = _form.getAttribute("address1_stateorprovince").getValue();
    if (prov != null) {
        for (var i = 0; i < _canProvincesCodes.length; i++) {
            if (prov == _canProvincesCodes[i]) {
                _form.getAttribute("ovs_address1_province").setValue(i);
                break;
            }
        }
    }
}

function cid_has_cra_bn_OnChange() {
    //debugger;
    var value = _form.getAttribute("cid_has_cra_bn").getValue();

    _form.getControl("cid_crabusinessnumber").setVisible(value);
    _form.getControl("cid_reasonfornobnnumber").setVisible(!value);
    _form.getControl("cid_reasonfornobnnumber_other").setVisible(!value);

    _form.getAttribute("cid_crabusinessnumber").setRequiredLevel("none");
    _form.getAttribute("cid_reasonfornobnnumber").setRequiredLevel("none");
    _form.getAttribute("cid_reasonfornobnnumber_other").setRequiredLevel("none");

    if (value) {
        _form.getAttribute("cid_crabusinessnumber").setRequiredLevel("none");
    }
    else {
        _form.getAttribute("cid_reasonfornobnnumber").setRequiredLevel("required");
        cid_reasonfornobnnumber_OnChange();
    }
}

function cid_reasonfornobnnumber_OnChange() {
    //debugger;
    var value = _form.getAttribute("cid_reasonfornobnnumber").getValue();
    switch (value) {
        case 3:
            _form.getControl("cid_reasonfornobnnumber_other").setVisible(true);
            _form.getAttribute("cid_reasonfornobnnumber_other").setRequiredLevel("required");
            break;
        default:
            _form.getControl("cid_reasonfornobnnumber_other").setVisible(false);
            _form.getAttribute("cid_reasonfornobnnumber_other").setRequiredLevel("none");
    }
}

function form_setup(context, customertypecode) {
    debugger;

    var load_form_name = "";
    switch (customertypecode) {
        case k_customertypecode_org:
            load_form_name = k_form_org;
            break;
        case k_customertypecode_site:
            load_form_name = k_form_site;
            break;
        default:
            return false;
    }
    load_form_name = load_form_name.toLowerCase();

    var current_form = Xrm.Page.ui.formSelector.getCurrentItem();
    var label = current_form.getLabel().toLowerCase();

    if (load_form_name.indexOf(label) != -1) return false;

    var forms = context.ui.formSelector.items.get();
    var form_name = load_form_name.toLowerCase();

    for (var item in forms) {
        var form = forms[item];
        var curent_form_name = form.getLabel().toLowerCase();
        if (form_name.indexOf(curent_form_name) != -1) {
            form.navigate();
            return true;
        }
    }
    return false;
}

function cra_api_get_callback(data) {
    debugger;
    tdg.cid.crw.start_BN_Selected(data);
    ovs_address1_province_setup();
}

function cra_api_get(bn) {
    debugger;
    var entity = "cid_fake_cra_bn_api";
    var fetchXml = `
            <fetch mapping='logical'>
    	        <entity name='{0}'>
    			    <filter type='and'>
    				    <condition attribute='cid_businessregistrationnumber' operator='eq' value='{1}'/>
    			    </filter>
    	        </entity>
            </fetch>`;
    fetchXml = "?fetchXml=" + encodeURIComponent(fetchXml);

    fetchXml = fetchXml.replaceAll("{0}", entity);
    fetchXml = fetchXml.replaceAll("{1}", bn);

    return new Promise(function (resolve, reject) {
        parent.Xrm.WebApi.retrieveMultipleRecords(entity, fetchXml).then(
            function (result) {
                debugger;
                var response = result.entities;
                resolve(response);
            },
            function (error) {
                reject(error);
            });

    });
}

function _cra_api_get(bn) {
    debugger;
    var entity = "cid_fake_cra_bn_api";
    var fetchXml = `
            <fetch mapping='logical'>
    	        <entity name='{0}'>
    			    <filter type='and'>
    				    <condition attribute='cid_businessregistrationnumber' operator='eq' value='{1}'/>
    			    </filter>
    	        </entity>
            </fetch>`;
    fetchXml = fetchXml.replaceAll("{0}", entity);
    fetchXml = fetchXml.replaceAll("{1}", bn);

    var encodedFetchXML = encodeURI(fetchXml);

    var query = "/api/data/v9.2/" + entity + "?fetchXml=" + encodedFetchXML;

    var globalContext = Xrm.Utility.getGlobalContext();

    var finalpathwithquery = globalContext.getClientUrl() + query;

    var data = null;
    var isAsync = false;

    var req = null;
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        req = new ActiveXObject("MSXML2.XMLHTTP.3.0");
    }

    req.open("GET", finalpathwithquery, isAsync);
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
                data = result;
            }
            else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();

    if (data.value.length > 0) {
        debugger;
    }
}

// common

if (typeof (tdg) == "undefined") {
    tdg = {
        __namespace: true
    };
}

if (typeof (tdg.cid) == "undefined") {
    tdg.cid = {
        __namespace: true
    };
}

if (typeof (tdg.cid.crw) == "undefined") {
    tdg.cid.crw = {

        // start

        account_by_bn_get: async function (bn) {
            debugger;

            var entity = "account";
            var fetchXml = `
            <fetch mapping='logical'>
    	        <entity name='{0}'>
    			    <filter type='and'>
    				    <condition attribute='cid_crabusinessnumber' operator='eq' value='{1}'/>
    			    </filter>
    	        </entity>
            </fetch>`;

            fetchXml = fetchXml.replaceAll("{0}", entity);
            fetchXml = fetchXml.replaceAll("{1}", bn);

            fetchXml = '?fetchXml=' + fetchXml;

            var data = await Xrm.WebApi.retrieveMultipleRecords(entity, fetchXml);

            return data;
        },

        cid_fake_cra_bn_get: async function (bn) {
            debugger;

            var entity = "cid_fake_cra_bn_api";
            var fetchXml = `
            <fetch mapping='logical'>
    	        <entity name='{0}'>
    			    <filter type='and'>
    				    <condition attribute='cid_businessregistrationnumber' operator='eq' value='{1}'/>
    			    </filter>
    	        </entity>
            </fetch>`;

            fetchXml = fetchXml.replaceAll("{0}", entity);
            fetchXml = fetchXml.replaceAll("{1}", bn);

            fetchXml = '?fetchXml=' + fetchXml;

            var data = await Xrm.WebApi.retrieveMultipleRecords(entity, fetchXml);
            data = data.entities;

            tdg.cid.crw.start_Retrieve_cra_callback(data);
        },

        cra_api_get: function (cid_crabusinessnumber) {
            debugger;

            var flowURL = "https://prod-11.canadacentral.logic.azure.com:443/workflows/bcba042341b44a2ea2034afb1464af0c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=PVKSxI8Wk6En9Yok9_XQg50ws19V8wPOnvbc1xa5TYk";
            let body = {
                "cid_crabusinessnumber": cid_crabusinessnumber
            };

            let req = new XMLHttpRequest();
            req.open("POST", flowURL, true);
            req.setRequestHeader("Content-Type", "application/json");
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        debugger;
                        var json = JSON.parse(this.response).Result;
                        cra_api_get_callback(json);
                    } else {
                        debugger;
                        console.log(this.statusText);
                    }
                }
            };
            req.send(JSON.stringify(body));
        },

        start_Retrieve_cra_callback: function (data) {
            debugger;

            var return_address = {};

            var step_start = sessionStorage.getItem("step_start");;
            if (data == null) {
                _form.ui.setFormNotification("Invalid CRA number.", "ERROR", "1");
                clear_data();
                return "";

            }

            if (data.length == 0) {
                _form.ui.setFormNotification("Invalid CRA number.", "ERROR", "1");
                clear_data();
                return "";

            }

            data = data[0];

            return_address.LegalName = data.cid_legalname;
            return_address.OperatingName = data.cid_legalname;
            return_address.BusinessRegistrationNumber = data.cid_crabusinessnumber;
            var a = {};
            a.AddressLine1Text = data.cid_addressline1text;
            a.AddressLine2Text = data.cid_addressline2text;
            a.CityName = data.cid_cityname;
            a.ProvinceStateCode = data.cid_provincestatecode;
            a.PostalZipCode = data.cid_postalzipcode;
            a.CountryCode = data.cid_countrycode;

            return_address.PhysicalLocationAddress = a;

            if (step_start == "1") {
                tdg.cid.crw.start_BN_Selected(return_address);
                ovs_address1_province_setup();
                return data;
            }
            else {
                tdg.cid.crw.start_BN_Selected(return_address);
                ovs_address1_province_setup();
                return return_address;
            }
        },

        start_Retrieve_cra: function (bn, step_start) {
            debugger;

            sessionStorage.setItem("step_start", step_start);

            // portal
            //var filter = "cid_businessregistrationnumber eq '" + bn + "'";
            //data = tdg.c.WebApi_List("cid_fake_cra_bn_apis", filter);

            tdg.cid.crw.cid_fake_cra_bn_get(bn);
        },

        start_BN_Selected: function (data) {
            debugger;

            var OperatingName = "";
            var LegalName = data.LegalName;
            if (data.OperatingNames != null) {
                if (data.OperatingNames.length > 0) {
                    OperatingName = data.OperatingNames[0]
                }
            }
            else {
                OperatingName = data.OperatingName
            }
            OperatingName = (OperatingName == "" ? LegalName : OperatingName);

            var address = data.PhysicalLocationAddress;

            _form.getAttribute("ovs_legalname").setValue(LegalName);
            _form.getAttribute("name").setValue(OperatingName);
            _form.getAttribute("address1_line1").setValue(address.AddressLine1Text);
            _form.getAttribute("address1_line2").setValue(address.AddressLine2Text);
            _form.getAttribute("address1_line3").setValue(address.CareOfLine);
            _form.getAttribute("address1_city").setValue(address.CityName);
            _form.getAttribute("address1_stateorprovince").setValue(address.ProvinceStateCode);
            _form.getAttribute("address1_postalcode").setValue(address.PostalZipCode);
        }
    }
}

