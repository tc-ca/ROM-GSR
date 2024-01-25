//
// Basic Form-In Year Company Form.js
//

$(document).ready(function () {
    debugger;

    var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();
    var activationButon = $("#EntityFormPanel").find(".workflow-link");

    if (cidCompanyStatus.indexOf("Inactive") < 0) {
        activationButon.hide();
    }
    else {
        activationButon.css("color", "#000000");
        activationButon.css("background-color", "#4CAF50");
    }

    tdg.c.control_hide("cid_reasonfornobnnumber_other");

    var cid_has_cra_bn = ($('#cid_crabusinessnumber').val() != "" ? "1" : "0");
    var cid_reasonfornobnnumber = $('#cid_reasonfornobnnumber').val();

    tdg.c.control_hide("cid_has_cra_bn");
    
    //tdg.c.addValidator("ovs_legalnamefr");
   // tdg.c.addValidator("ovs_namefr");

    // do not have a business number?
    if (cid_has_cra_bn != "1") {
        tdg.c.control_hide("cid_crabusinessnumber");
        tdg.c.control_show("cid_reasonfornobnnumber");

        if (cid_reasonfornobnnumber == "3")   // other
        {
            tdg.c.control_show("cid_reasonfornobnnumber_other");
        }
        else {
            tdg.c.control_hide("cid_reasonfornobnnumber_other");
        }
    }
    else {
        tdg.c.control_show("cid_crabusinessnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber");
        tdg.c.control_hide("cid_reasonfornobnnumber_other");
    }

    $('#cid_crabusinessnumber').attr("readonly", true);
    $('#ovs_legalname').attr("readonly", true);
    $('#cid_reasonfornobnnumber').attr("readonly", true);
    $('#cid_reasonfornobnnumber').css("pointer-events", "none");
    $('#cid_reasonfornobnnumber_other').attr("readonly", true);
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            debugger;

            return true;
        }
    }(window.jQuery));
}
