//
// Basic Form-In Year Company Form.js
//
$(document).ready(function () {
    debugger;

    // resize WebResource_address_complete
    $("#WebResource_address_complete").height('72px');
    $("#websiteurl").width('100%');

    $("#telephone1").attr("placeholder", "");
    tdg.c.control_hide("cid_reasonfornobnnumber_other");

    var cid_has_cra_bn = ($('#cid_crabusinessnumber').val() != ""? "1":"0");
    var address1_line1 = $("#address1_line1").val();
    var cid_reasonfornobnnumber = $('#cid_reasonfornobnnumber').val();

    tdg.c.control_hide("cid_has_cra_bn");
    sessionStorage.setItem("AddressLine1Text", address1_line1);

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

    tdg.c.addValidator("address1_line1");
    tdg.c.addValidator("address1_city");
    tdg.c.addValidator("address1_stateorprovince");
    tdg.c.addValidator("address1_postalcode");
    tdg.c.addValidator("address1_country");

    // autocomplete off
    $("#name").attr("autocomplete", "new-password");
    $("#address1_line2").attr("autocomplete", "new-password");
    $("#address1_line3").attr("autocomplete", "new-password");
    $("#address1_city").attr("autocomplete", "new-password");
    $("#address1_stateorprovince").attr("autocomplete", "new-password");
    $("#address1_postalcode").attr("autocomplete", "new-password");
    $("#address1_country").attr("autocomplete", "new-password");
    $("#telephone1").attr("autocomplete", "new-password");
    $("#fax").attr("autocomplete", "new-password");
    $("#cid_reasonfornobnnumber_other").attr("autocomplete", "new-password");
    $("#websiteurl").attr("autocomplete", "new-password");

    // readonly
    $('#statuscode').attr("readonly", true);
    $('#address1_country').attr("readonly", true);

    subgrid_language();
});

if (window.jQuery) {
    (function ($) {
        webFormClientValidate = function () {
            debugger;

            var address1_line1 = $("#address1_line1").val();
            sessionStorage.setItem("AddressLine1Text", address1_line1);

            return true;
        }
    }(window.jQuery));
}

function AddressComplete_Hide_address1_line1() {
    //debugger;
    tdg.c.control_hide("address1_line1");
}

function AddressComplete_address1_line1() {
    //debugger;
    $("#address1_line1").val(sessionStorage.getItem("Line1"));
}

function address1_line1_set(value) {
    debugger;

    try {
        var f = document.getElementById("WebResource_address_complete");
        var c = f.contentWindow;
        c.document.getElementById("address1_line1").value = value;
    } catch (e) { }
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

function subgrid_language() {
    //debugger;
    var selected_language = sessionStorage.getItem("selected_language");

    var entityList = $(".entity-grid");
    var naicscode = entityList.eq(1);   // cid_account_companynaicscode
    var refRel = naicscode[0].dataset.refRel;
    if (refRel == "cid_account_companynaicscode") {
        naicscode.on("loaded", function () {
            //debugger;

            // header
            let header = naicscode.find("table thead > tr");
            for (var index1 = 0; index1 < header.length; index1++) {
                //debugger;
                let tr = header[index1];

                let cols = $(tr).find('th');
                for (var i = 0; i < cols.length; i++) {
                    var tdElement = cols[i];
                    var className = $(tdElement)[0].className;
                    if (className.indexOf("sort-enabled") == -1) {
                        var text = $(tdElement).text();
                        //text = tdg.c.text_language(text, selected_language);
                        text = tdg.error_message.message(text);
                        $(tdElement).text(text);
                    }
                }
            }

            //debugger;

            let rows = naicscode.find("table tbody > tr");
            rows.each(function (index, tr) {
                //debugger;

                let cols = $(tr).find('td');
                cols.each(function (index, td) {
                    //debugger;
                    var tdElement = $(this);
                    var value = tdElement.attr('data-attribute');
                    if (value != null) {
                        var index1 = value.indexOf('.cid_naicsclasstitle');
                        if (index1 != -1) {
                            var cellValue = $(td).text();
                            cellValue = tdg.c.text_language(cellValue, selected_language);
                            $(td).text(cellValue);
                        }
                    }
                });
            });
        });
    }
}