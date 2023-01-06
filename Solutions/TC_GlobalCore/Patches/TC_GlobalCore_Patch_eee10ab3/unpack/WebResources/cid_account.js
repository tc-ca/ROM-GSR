var _form;

function Me_OnLoad(context) {
    debugger;
    _form = context.getFormContext();

    // test
    //cra_api_get("134688019");
    //return;

    _cid_crabusinessnumber = _form.getAttribute("cid_crabusinessnumber").getValue();

    _form.getAttribute("ovs_address1_province").setRequiredLevel("required");
    _form.getAttribute("address1_country").setValue("Canada");

    var cid_has_cra_bn = _form.getAttribute("cid_has_cra_bn").getValue();
    _form.getAttribute("cid_has_cra_bn").addOnChange(cid_has_cra_bn_OnChange);
    cid_has_cra_bn_OnChange();

    _form.getAttribute("ovs_address1_province").addOnChange(ovs_address1_province_OnChange);
    ovs_address1_province_OnChange();

    _form.getAttribute("cid_crabusinessnumber").addOnChange(cid_crabusinessnumber_OnChange);
    var getFormType = _form.ui.getFormType();
    if ((cid_has_cra_bn) && (getFormType != 1)) {
        cid_crabusinessnumber_OnChange();
    }

    _form.getAttribute("cid_reasonfornobnnumber").addOnChange(cid_reasonfornobnnumber_OnChange);

    form_setup();

    // temp
    //_form.getControl("address1_stateorprovince").setVisible(true);
    //_form.getControl("address1_stateorprovince").setDisabled(true)
}

var _cid_crabusinessnumber;
async function cid_crabusinessnumber_OnChange() {
    debugger;
    var cid_crabusinessnumber = _form.getAttribute("cid_crabusinessnumber").getValue();
    if (cid_crabusinessnumber != null) {
        //cra_api_get(cid_crabusinessnumber);
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

function form_setup() {
    //debugger;

    var current_form = Xrm.Page.ui.formSelector.getCurrentItem();
    var label = current_form.getLabel();

    // create?
    if (_form.ui.getFormType() == 1) {

    }
    else {
    }
}

function cra_api_get_callback(data) {
    debugger;
    tdg.cid.crw.start_BN_Selected(data);
    ovs_address1_province_setup();
}

//async function cra_api_get(bn) {
//    debugger;
//    var parameters = {};
//    parameters.cid_crabusinessnumber = bn;

//    var settings = {
//        cid_crabusinessnumber: parameters.cid_crabusinessnumber,

//        getMetadata: function () {
//            return {
//                boundParameter: null,
//                parameterTypes: {
//                    "cid_crabusinessnumber": {
//                        "typeName": "Edm.String",
//                        "structuralProperty": 1
//                    }
//                },
//                operationType: 0,
//                operationName: "cid_cra_api_get"
//            };
//        }
//    };

//    var json = {};
//    var result = await Xrm.WebApi.online.execute(settings).then(
//        function success(result) {
//            result.json().then(
//                function (response) {
//                    debugger;
//                    var json = JSON.parse(response.json).Result;
//                    cra_api_get_callback(json);
//                    //eval(callback_function + '(' + json + ')');
//                    //callback_functionjson.Result;
//                }
//            );
//        }
//        ,
//        function (error) {
//            Xrm.Utility.alertDialog(error.message);
//            return "";
//        }
//    );

//    return json;
//}

function cra_api_get(cid_crabusinessnumber) {
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

        retrieve_list: async function (entity, fetchXml) {
            debugger;
            fetchXml = '?fetchXml=' + fetchXml;

            var result = await Xrm.WebApi.retrieveMultipleRecords(entity, fetchXml);

            return result;
        },

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

            var data = await tdg.cid.crw.retrieve_list(entity, fetchXml);
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

            var data = await tdg.cid.crw.retrieve_list(entity, fetchXml);
            return data;
        },

        // cra_api_get_jquery
        cra_api_get: function (bn) {
            debugger;
            var settings = {
                "url": "https://wwwapps.tc.gc.ca/saf-sec-sur/3/TDG-BN/api/v1/businesses/134688019",
                "method": "GET",
                "timeout": 0,
                "headers": {
                    "TC-BN-API-KEY": "481271ac-7937-4ee6-997c-a4e791125538",
                    "TC-BN-IDENTITY-TOKEN": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlNJRCIsIm5hbWVpZCI6IjIwIiwicm9sZSI6IkJ1c2luZXNzQWN0aXZpdHkkQnVzaW5lc3NFdmVudCRCdXNpbmVzc1JlZ2lzdHJhdGlvbk51bWJlciRCdXNpbmVzc1R5cGVDb2RlICRDb3Jwb3JhdGlvbkNlcnRpZmljYXRpb24kTGFuZ3VhZ2VQcmVmZXJlbmNlJExlZ2FsTmFtZSRNYWlsaW5nQWRkcmVzcyRPcGVyYXRpbmdOYW1lcyRPd25lcnNOYW1lJFBoeXNpY2FsTG9jYXRpb25BZGRyZXNzJFJlbGF0ZWRCdXNpbmVzc1JlZ2lzdHJhdGlvbk51bWJlciIsIkNvcnJlbGF0aW9uS2V5IjoiYTRlNzkxMTI1NTM4IiwibmJmIjoxNjcxNzM1OTY3LCJleHAiOjE5ODczNTUxNjcsImlhdCI6MTY3MTczNTk2NywiaXNzIjoiVHJhbnNwb3J0IENhbmFkYSIsImF1ZCI6IlRyYW5zcG9ydCBDYW5hZGEifQ.RjwIdwI2MMa1VcCG88cyTIJGCtRKI-TDuNLs8dLgM_g",
                    "TC-BN-UserRole": "02"
                },
                success: function (result) {
                    debugger;
                },
                error: function (error) {
                    debugger;
                }
            };

            $.ajax(settings);
        },

        // cra_api_get_xhr
        cra_api_get_xhr: function(bn) {
            debugger;

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    debugger;
                    console.log(this.responseText);
                }
            });

            xhr.open("GET", "https://wwwapps.tc.gc.ca/saf-sec-sur/3/TDG-BN/api/v1/businesses/134688019");
            xhr.setRequestHeader("TC-BN-API-KEY", "481271ac-7937-4ee6-997c-a4e791125538");
            xhr.setRequestHeader("TC-BN-IDENTITY-TOKEN", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlNJRCIsIm5hbWVpZCI6IjIwIiwicm9sZSI6IkJ1c2luZXNzQWN0aXZpdHkkQnVzaW5lc3NFdmVudCRCdXNpbmVzc1JlZ2lzdHJhdGlvbk51bWJlciRCdXNpbmVzc1R5cGVDb2RlICRDb3Jwb3JhdGlvbkNlcnRpZmljYXRpb24kTGFuZ3VhZ2VQcmVmZXJlbmNlJExlZ2FsTmFtZSRNYWlsaW5nQWRkcmVzcyRPcGVyYXRpbmdOYW1lcyRPd25lcnNOYW1lJFBoeXNpY2FsTG9jYXRpb25BZGRyZXNzJFJlbGF0ZWRCdXNpbmVzc1JlZ2lzdHJhdGlvbk51bWJlciIsIkNvcnJlbGF0aW9uS2V5IjoiYTRlNzkxMTI1NTM4IiwibmJmIjoxNjcxNzM1OTY3LCJleHAiOjE5ODczNTUxNjcsImlhdCI6MTY3MTczNTk2NywiaXNzIjoiVHJhbnNwb3J0IENhbmFkYSIsImF1ZCI6IlRyYW5zcG9ydCBDYW5hZGEifQ.RjwIdwI2MMa1VcCG88cyTIJGCtRKI-TDuNLs8dLgM_g");
            xhr.setRequestHeader("TC-BN-UserRole", "02");

            xhr.send();
        },

        // end

        // CRA BN API - DEV ONLY
        start_Retrieve_cra: function (bn, step_start) {
            debugger;

            var data;
            var return_address = {};

            // portal
            //var filter = "cid_businessregistrationnumber eq '" + bn + "'";
            //data = tdg.c.WebApi_List("cid_fake_cra_bn_apis", filter);

            // backend
            data = tdg.cid.crw.cid_fake_cra_bn_get(bn);

            if (data == null) {
                return "";
            }

            if (data.length == 0) {
                return "";
            }

            data = data[0];

            return_address.LegalName = data.cid_legalname;
            return_address.OperatingName = data.cid_legalname;
            return_address.BusinessRegistrationNumber = bn;
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
                return data;
            }
            else {
                return return_address;
            }
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

            //$("#ovs_legalname").val(LegalName);
            //$("#name").val(OperatingName);

            //$("#cid_legalname").val(LegalName);
            //$("#cid_operatingname").val(OperatingName);

            //$("#address1_line1").val(address.AddressLine1Text);
            //$("#address1_line2").val(address.AddressLine2Text);
            //$("#address1_line3").val(address.CareOfLine);
            //$("#address1_city").val(address.CityName);
            //$("#address1_stateorprovince").val(address.ProvinceStateCode);
            //$("#address1_postalcode").val(address.PostalZipCode);
        }
    }
}