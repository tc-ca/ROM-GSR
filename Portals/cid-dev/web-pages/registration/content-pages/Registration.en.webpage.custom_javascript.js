// Registration.js

$(document).ready(function () {
    debugger;

    var company_status = "{{entities.account[user.parentcustomerid.id].cid_cidcompanystatus.value}}";

    if (company_status == '100000005') {//registration completed
        $("a[href|='/en-US/RegistrationWizard/']").hide();
    }

    var primarycontactid = '{{user.Id}}';
    var fullname = '{{user.fullname}}';
    var parentcustomerid = '{{user.parentcustomerid}}';

    $("#primarycontactid").attr("value", primarycontactid);
    $("#primarycontactid_name").attr("value", fullname);
    $("#primarycontactid_entityname").attr("value", 'contact');

    $("#cid_crabusinessnumber").change(cid_crabusinessnumber_onchange);

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

function BN_Error() {
    alert('Invalid CRA Business Number.');
}
