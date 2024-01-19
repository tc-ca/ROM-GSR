//
// Basic Form-In Year Further Site Details.js
//

$(document).ready(function () {
    debugger;

    var CompanyName = '{{user.parentcustomerid.name}}';
    tdg.cid.Setup_site_Profile_Title (CompanyName);
    
    var operationId = sessionStorage.getItem("siteOperationId");
    var urlParams = new URLSearchParams(window.location.search);

    if (operationId != '') {
        var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
        var disabled = "";
        var siteId = urlParams.get('id');

        if ((cidSiteStatus.indexOf("Inactive") >= 0) ||(cidSiteStatus.indexOf("Inactif") >= 0))
            disabled = "disabled";
    }
});