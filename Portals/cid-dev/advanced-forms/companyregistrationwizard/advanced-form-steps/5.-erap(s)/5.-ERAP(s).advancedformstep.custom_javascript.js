// CompanyRegistrationWizard-ERAP.js

$(document).ready(function () {
    debugger;

    var rows = $("#eraps .view-grid table").find("tbody > tr");

    var cid_has_cra_bn = '{{user.cid_has_cra_bn}}';
    cid_has_cra_bn = (cid_has_cra_bn == "true" ? true : false);

    var parentcustomerid = '{{user.parentcustomerid.Id}}';
    if ((cid_has_cra_bn) && (rows.length == 0)) {
        var cid_crabusinessnumber = '{{user.cid_crabusinessnumber}}';

        var erap = [];

        var data = root_erap_list(cid_crabusinessnumber);
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            var root_erap_number_num = item.root_erap_number_num;
            erap.push(root_erap_number_num);

            //cid_companyeraps_insert(parentcustomerid, root_erap_number_num);
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

function xxx() {
    var list = tdg.webapi.list("cid_companyerap", "cid_erapid");

    var parent_id = '{{user.parentcustomerid.Id}}';

    var data = {
        "cid_Company@odata.bind": "/accounts(" + parent_id + ")",
        "cid_erapid": "Sample@Account"
    };
    tdg.webapi.create("cid_companyerap", data);
}

function cid_companyeraps_insert(parent_id, cid_erapid)
{
    debugger;
    var data = {
        "cid_Company@odata.bind": "/accounts(" + parent_id + ")",
        "cid_erapid": cid_erapid
    };
    tdg.webapi.create("cid_companyerap", data);
}

function root_company(bn) {
    var data;
    var filter = "root_org_business_cra_num eq " + bn;

    data = tdg.c.OData_List("root_company", filter);
    if (data.length == 0) {
        return data;
    }

    return data[0];
}

function root_erap_list(bn) {
    debugger;

    var root = root_company(bn);
    if (root != null) {
        var root_organization_id = root.root_organization_id;
        var i = root_organization_id.lastIndexOf('.');
        root_organization_id = root_organization_id.substr(0, i);

        var data;
        var filter = "root_organization_id eq " + root_organization_id;

        data = tdg.c.OData_List("root_erap", filter);
        if (data.length == 0) {
            return data;
        }

        return data;
    }
    return data;
}

if (typeof (tdg.webapi) == "undefined") {
    tdg.webapi = {
        list: function (entity_name, select) {
            // not working!!
            debugger;

            var data = {
                type: "GET",
                url: "/_api/" + entity_name + "s?$select=" + select,
                contentType: "application/json"
            };

            var value = webapi.safeAjax(data)
                .fail(function (response) {
                    if (response.responseJSON) {
                        alert("Error: " + response.responseJSON.error.message)
                    } else {
                        alert("Error: Web API is not available... ")
                    }
                }).always();

            return value;
        },

        create: function (entity_name, data) {
            debugger;

            webapi.safeAjax({
                type: "POST",
                url: "/_api/" + entity_name + "s",
                contentType: "application/json",
                data: JSON.stringify(data),

                success: function (res, status, xhr) {
                    debugger;
                    //print id of newly created table record
                    console.log("entityID: " + xhr.getResponseHeader("entityid"))
                }
            });
        },

        update: function (entity_name, record_id, data) {
            debugger;

            webapi.safeAjax({
                type: "PATCH",
                url: "/_api/" + entity_name + "s(" + record_id + ")",
                contentType: "application/json",
                data: JSON.stringify(data),

                success: function (res) {
                    debugger;
                    console.log(res);
                }
            });
        },

        delete: function (entity_name, record_id) {
            debugger;

            webapi.safeAjax({
                type: "DELETE",
                url: "/_api/" + entity_name + "s(" + record_id + ")",
                contentType: "application/json",

                success: function (res) {
                    debugger;
                    console.log(res);
                }
            });
        },

        inactive: function (entity_name, record_id) {
            var data = {
                "statecode": 1,
                "statuscode": 821350004
            };
            tdg.webapi.update(entity_name, record_id, data);
        }
    }
}