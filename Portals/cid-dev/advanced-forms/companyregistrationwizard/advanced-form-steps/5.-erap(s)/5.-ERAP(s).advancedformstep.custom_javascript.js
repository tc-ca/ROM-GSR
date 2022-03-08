// CompanyRegistrationWizard-ERAP.js

$(document).ready(function () {
    debugger;

    var cid_has_cra_bn = '{{user.cid_has_cra_bn}}';
    cid_has_cra_bn = (cid_has_cra_bn == "true" ? true : false);

    if (cid_has_cra_bn) {
        var cid_crabusinessnumber = '{{user.cid_crabusinessnumber}}';
        var data = root_erap_list(cid_crabusinessnumber);
        for (var i = 0; i < data.length; i++) {
            debugger;
            var item = data[i];
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
    var filter = "root_org_business_cra_num eq " + bn + "";

    data = tdg.c.OData_List("root_erap", filter);
    if (data.length == 0) {
        return data;
    }

    return data;
}
