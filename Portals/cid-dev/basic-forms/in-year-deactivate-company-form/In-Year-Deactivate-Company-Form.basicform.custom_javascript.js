//
// Basic Form-In Year Company Form.js
//
$(document).ready(function () {
    debugger;

    $("#cid_iscompanyattested").prop( "checked", false );

    // address
    tdg.cid.address_init(false);

    tdg.cid.WebResource_address_complete_readonly(false);

    $("#telephone1").attr("placeholder", "");
    tdg.c.control_hide("cid_reasonfornobnnumber_other");

    var cid_has_cra_bn = ($('#cid_crabusinessnumber').val() != ""? "1":"0");
    var cid_reasonfornobnnumber = $('#cid_reasonfornobnnumber').val();

    tdg.c.control_hide("cid_has_cra_bn");

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

    // autocomplete off
    $("#name").attr("autocomplete", "new-password");
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
        entityFormClientValidate = function () {
            debugger;

            if($("#cid_iscompanyattested").prop('checked')){
                return true;
            }
            else{
                var errorMessage = 'You cannot proceed before attesting your company deactivation, please check the "Attestation" box';  
                $('.validation-summary div').remove();
                var validationSection = $('.validation-summary'); 
				validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>")); 
				validationSection.show();
                $('.validation-summary div').focus();  

                return false;
            }
        }
    }(window.jQuery));
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