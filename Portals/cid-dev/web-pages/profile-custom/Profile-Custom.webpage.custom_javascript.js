// ProfileCustom.js

$(document).ready(function () {
	alert("ProfileCustom.js");
    $("#cid_temp_crabusinessnumber").change(cid_crabusinessnumber_onchange);

    $("#cid_temp_legalname").attr("readonly", true);
});

function parentcustomerid_Selected() {
    var cid_crabusinessnumber = $("#cid_temp_crabusinessnumber").val();
    var data = OData_List("account", "cid_crabusinessnumber eq '" + cid_crabusinessnumber + "'");
    if (data.length > 0) {
        debugger;
        var item = data[0];
        //alert(item.accountid + " >> " + item.name);

        $("#parentcustomerid").attr("value", item.accountid);
        $("#parentcustomerid_name").attr("value", item.name);
        $("#parentcustomerid_entityname").attr("value", 'contact');
    }
}

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
    var cid_crabusinessnumber = $("#cid_temp_crabusinessnumber").val();
    var data;

    data = Retrieve_cra(cid_crabusinessnumber);
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
            "LegalName": "L CID Parent Company - SID - Site Identification Database",
            "OperatingNames": [
                "0 CID Parent Company - SID - Operating Name",
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
            "LegalName": "1199807 ONTARIO INC - Tidy Consulting",
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

function BN_Selected(data) {
    debugger;

    var LegalName = data.LegalName				// Legal Name
    var OperatingName = "";			            // Operating Name

    var OperatingNames = data.OperatingNames;
    if (OperatingNames.length > 0) {
        OperatingName = OperatingNames[0];  // default to 1st item
    }

    var address = data.PhysicalLocationAddress;
    var AddressLine1Text = address.AddressLine1Text;
    var AddressLine2Text = address.AddressLine2Text;
    var CityName = address.CityName;
    var ProvinceStateCode = address.ProvinceStateCode;
    var PostalZipCode = address.PostalZipCode;
    var CountryCode = address.CountryCode;

    $("#cid_temp_legalname").val(LegalName);
    //$("#name").val(OperatingName);
    //$("#address1_line1").val(AddressLine1Text);
    //$("#address1_line2").val(AddressLine2Text);
    //$("#address1_line3").val("");
    //$("#address1_city").val(CityName);
    //$("#address1_stateorprovince").val(ProvinceStateCode);
    //$("#address1_country").val(CountryCode);
    //$("#address1_postalcode").val(PostalZipCode);

    parentcustomerid_Selected();
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