// Registration.js

$(document).ready(function () {
    var  company_status = "{{entities.account[user.parentcustomerid.id].cid_cidcompanystatus.value}}";
    
	if(company_status == '100000005'){//registration completed
        $("a[href|='/en-US/RegistrationWizard/']").hide();
	}


    var primarycontactid = '{{user.Id}}';
    var fullname = '{{user.fullname}}';
    var parentcustomerid = '{{user.parentcustomerid}}';

    //if (parentcustomerid == "") {
    //    var regurl = "~/RegistrationWizard";
     //   var registerationURL = regurl;
     //   window.location.href = registerationURL;
     //   return;
  //  }

    $("#primarycontactid").attr("value", primarycontactid);
    $("#primarycontactid_name").attr("value", fullname);
    $("#primarycontactid_entityname").attr("value", 'contact');

    $("#cid_crabusinessnumber").change(cid_crabusinessnumber_onchange);

    // if edit mode then lock fields cid_crabusinessnumber, legalname
    var createdon = $("#createdon").val();
    if (createdon != null) {
        $("#cid_crabusinessnumber").attr("readonly", true);
        $("#ovs_legalname").attr("readonly", true);
    }

    var BusinessRegistrationNumber = sessionStorage.getItem("BusinessRegistrationNumber");
    if (BusinessRegistrationNumber != "") {
        $("#name").val(sessionStorage.getItem("OperatingName"));
        $("#ovs_legalname").val(sessionStorage.getItem("LegalName"));
        $("#address1_line1").val(sessionStorage.getItem("AddressLine1Text"));
        $("#address1_line2").val(sessionStorage.getItem("AddressLine2Text"));
        $("#address1_line3").val("");
        $("#address1_city").val(sessionStorage.getItem("CityName"));
        $("#address1_stateorprovince").val(sessionStorage.getItem("ProvinceStateCode"));
        $("#address1_postalcode").val(sessionStorage.getItem("PostalZipCode"));
        $("#address1_country").val(sessionStorage.getItem("CountryCode"));

        // clear
        sessionStorage.setItem("BusinessRegistrationNumber", "");
    }
});

function AddressComplete_Selected() {
    $("#address1_line1").val(sessionStorage.getItem("Line1"));
    $("#address1_line2").val(sessionStorage.getItem("Line2"));
    $("#address1_line3").val(sessionStorage.getItem("Line3"));
    $("#address1_city").val(sessionStorage.getItem("City"));
    $("#address1_stateorprovince").val(sessionStorage.getItem("ProvinceName"));
    $("#address1_postalcode").val(sessionStorage.getItem("PostalCode"));
    $("#address1_country").val(sessionStorage.getItem("CountryName"));
}

function cid_crabusinessnumber_onchange() {

    var cid_crabusinessnumber = $("#cid_crabusinessnumber").val();
    var data;

    data = Retrieve_cra(cid_crabusinessnumber);

    //data = OData_List("account", "cid_crabusinessnumber eq '" + cid_crabusinessnumber + "'");
    //if (data.length > 0) {
    //	var item = data[0];
    //	var name = item.name;
    //	var ovs_legalname = item.ovs_legalname;

    //	$("#ovs_legalname").val(ovs_legalname);
    //	$("#name").val(name);
    //}
}

// CRA BN API
function Retrieve_cra(bn) {
    //debugger;

    $.ajax({
        type: "GET",
        url: "https://wwwapps.tc.gc.ca/Saf-Sec-Sur/3/tdg-bn/api/v1/Businesses/" + bn,
        withCredentials: true,
        headers:
        {
            "TC-BN-API-KEY": "481271ac-7937-4ee6-997c-a4e791125538",
            "TC-BN-IDENTITY-TOKEN": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlNJRCIsIm5hbWVpZCI6IjIwIiwicm9sZSI6IkJ1c2luZXNzUmVnaXN0cmF0aW9uTnVtYmVyJEJ1c2luZXNzVHlwZUNvZGUgIiwiQ29ycmVsYXRpb25LZXkiOiJhNGU3OTExMjU1MzgiLCJuYmYiOjE2MzUxOTIwMTAsImV4cCI6MTk1MDcyNDgxMCwiaWF0IjoxNjM1MTkyMDEwLCJpc3MiOiJUcmFuc3BvcnQgQ2FuYWRhIiwiYXVkIjoiVHJhbnNwb3J0IENhbmFkYSJ9.FbunkYIaglOLhc4THq4pYJeZWTdo4d1e7bmIGGKKE0w",
            "TC-BN-UserRole": "02"
        },

        data:
        {
            format: "json"
        },
        success: function (response) {
            debugger;
            var data = JSON.stringify(response);
            var IsInvalidData = response.Result.IsInvalidData;
            if (!IsInvalidData) {
                data = response.Result;
                data = fake_data(bn).Result;   // temp
                BN_Selected(data);
            }
            else {
                BN_Error();
            }
        },
        error: function (response) { alert('error'); }
    });
}

function fake_data(bn) {
    var data;
    switch (bn) {
        case "832569966":
            data = fake_832569966();
            break;
        case "814340824":
            data = fake_814340824();
            break;
        case "985472299":
            break;
        case "985552793":
            break;
        case "985605591":
            break;
    }
    //data = JSON.parse(data);
    return data;
}

function fake_832569966() {
    var data =
    {
        "TransactionId": 29068,
        "CorrelationId": "86378309-58f4-4fcc-bc32-3b691c0d6f4d",
        "Result": {
            "IsInvalidData": false,
            "BusinessRegistrationNumber": "832569966",
            "LegalName": "SID - Site Identification Database",
            "OperatingNames": [
                "SID - Operating Name",
                "Fly Monkey Wrenches"
            ],
            "LanguagePreference": "01",
            "BusinessTypeCode": "01",
            "MailingAddress": {
                "AddressLine1Text": "2412 AGRICOLA ST",
                "AddressLine2Text": null,
                "CityName": "HALIFAX",
                "CountryCode": "CA",
                "ProvinceStateCode": "NS",
                "PostalZipCode": "B3K4C2",
                "ReturnMailIndicator": "0",
                "CareOfLine": null
            },
            "PhysicalLocationAddress": {
                "AddressLine1Text": "2412 AGRICOLA ST",
                "AddressLine2Text": null,
                "CityName": "HALIFAX",
                "CountryCode": "CA",
                "ProvinceStateCode": "NS",
                "PostalZipCode": "B3K4C2",
                "ReturnMailIndicator": "0",
                "CareOfLine": null
            },
            "OwnersName": [
                {
                    "LastName": "Barnak",
                    "GivenName": "Rhoda"
                }
            ],
            "CorporationCertification": {
                "IncorporationDate": null,
                "IncorporationCertificateIdentifier": null,
                "JurisdictionCode": null,
                "JurisdictionProvinceCode": null
            },
            "BusinessActivity": {
                "BusinessActivityDesc": "",
                "BusinessActivityCertifedDesc": ""
            },
            "RelatedBusinessRegistrationNumber": null,
            "BusinessEvent": [
                {
                    "EventTypeCode": "03",
                    "EventSubTypeCode": null,
                    "EventReasonCode": null,
                    "EffectiveDate": "2018-04-13",
                    "ExpiryDate": "9999-12-31"
                }
            ]
        }
    };
    return data;
}

function fake_814340824() {
    var data =
    {
        "TransactionId": 29071,
        "CorrelationId": "d2457f70-e331-446b-beae-600b2a0fb684",
        "Result": {
            "IsInvalidData": false,
            "BusinessRegistrationNumber": "814340824",
            "LegalName": "Tidy Consulting",
            "OperatingNames": [],
            "LanguagePreference": "01",
            "BusinessTypeCode": "03",
            "MailingAddress": {
                "AddressLine1Text": "3852 BANK ST",
                "AddressLine2Text": null,
                "CityName": "OTTAWA",
                "CountryCode": "CA",
                "ProvinceStateCode": "ON",
                "PostalZipCode": "K1T3W8",
                "ReturnMailIndicator": "0",
                "CareOfLine": null
            },
            "PhysicalLocationAddress": {
                "AddressLine1Text": "3852 BANK ST",
                "AddressLine2Text": null,
                "CityName": "OTTAWA",
                "CountryCode": "CA",
                "ProvinceStateCode": "ON",
                "PostalZipCode": "K1T3W8",
                "ReturnMailIndicator": "0",
                "CareOfLine": null
            },
            "OwnersName": [
                {
                    "LastName": "Beadles",
                    "GivenName": "Connie"
                }
            ],
            "CorporationCertification": {
                "IncorporationDate": "2009-01-01",
                "IncorporationCertificateIdentifier": "2441456",
                "JurisdictionCode": "01",
                "JurisdictionProvinceCode": null
            },
            "BusinessActivity": {
                "BusinessActivityDesc": "",
                "BusinessActivityCertifedDesc": ""
            },
            "RelatedBusinessRegistrationNumber": null,
            "BusinessEvent": [
                {
                    "EventTypeCode": "13",
                    "EventSubTypeCode": null,
                    "EventReasonCode": null,
                    "EffectiveDate": "2015-02-01",
                    "ExpiryDate": "9999-12-31"
                },
                {
                    "EventTypeCode": "03",
                    "EventSubTypeCode": null,
                    "EventReasonCode": null,
                    "EffectiveDate": "2018-04-16",
                    "ExpiryDate": "9999-12-31"
                }
            ]
        }
    };
    return data;
}

function BN_Error() {
    alert('Invalid CRA Business Number.');
}

// odata
function OData_List(entity, filter) {
    //debugger;
    var url = entity + "?$filter=" + filter;
    var oDataUrl = "https://cid-dev.powerappsportals.com/_odata/" + url;
    var response = null;
    $.ajax({
        type: "GET",
        url: oDataUrl,
        dataType: "json",
        async: false
    }).done(function (json) {
        response = json.value;
    });
    return response;
}