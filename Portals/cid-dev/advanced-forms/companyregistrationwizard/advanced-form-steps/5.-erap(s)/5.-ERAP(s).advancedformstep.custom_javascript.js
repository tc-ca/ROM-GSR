// CompanyRegistrationWizard-ERAP.js

$(document).ready(function () {
    debugger;

    var rows = $("#eraps .view-grid table").find("tbody > tr");

    var cid_has_cra_bn = '{{user.cid_has_cra_bn}}';
    cid_has_cra_bn = (cid_has_cra_bn == "true" ? true : false);

    if ((cid_has_cra_bn) && (rows.length == 0)) {
        var cid_crabusinessnumber = '{{user.cid_crabusinessnumber}}';

        var erap = [];

        var data = root_erap_list(cid_crabusinessnumber);
        for (var i = 0; i < data.length; i++) {
            debugger;
            var item = data[i];
            erap.push(item);
        }
    }
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            debugger;

            var validation = true;

            return validation;
        }
    }(window.jQuery));
}

function root_erap_list(bn) {
    debugger;

    var data;
    var filter = "root_org_business_cra_num eq " + bn + "&orderby=root_erap_number_num";

    data = tdg.c.OData_List("root_erap", filter);
    if (data.length == 0) {
        return data;
    }

    return data;
}
