//
// Basic Form-In Year Site Form.js
//

var _busy = false;

$(document).ready(function () {
    debugger;
    console.log("before lables role removal");
   
        setTimeout( function(){ 

            $('table[data-name="tab_5_section_1"]').find("#cid_handlingsitetype").attr("role", "");
            $('table[data-name="tab_5_section_1"]').find("#cid_offeringfortransportsitetype").attr("role", "");
            $('table[data-name="tab_5_section_1"]').find("#cid_transportingsitetype").attr("role", "");
            $('table[data-name="tab_5_section_1"]').find("#cid_importingsitetype").attr("role", "");

        }, 1000);  
        console.log("after lables role removal");


    var CompanyName = '{{user.parentcustomerid.name}}';
    tdg.cid.Setup_site_Profile_Title (CompanyName);

 
    $("#update_site").click(function(){
        var urlParams = new URLSearchParams(window.location.search);
	    if (urlParams.has('id')) {
		    var siteid = urlParams.get('id');
            var left = (screen.width ) ;
            var top = (screen.height ) ;
            var siteWizardURL = "~/SiteRegistrationWizard/?id=" + siteid;
            var win = window.open(siteWizardURL, 'Site Update', 'resizable=yes, width= 1200, height= 800, top= 1000, left=100');

            win.addEventListener('beforeunload', () => {
              win.onunload = window.opener.location.reload();
            })           
        }
    });


    document.getElementById("address1_latitude").addEventListener('change', (event) => {
    //get Latitude and set it to nearest 4 digits
    var Lat = $("#address1_latitude").val();
    $("#address1_latitude").val(Number.parseFloat(Lat).toFixed(4));
    });
    document.getElementById("address1_longitude").addEventListener('change', (event) => {
    //get Lontitude and set it to nearest 4 digits
    var Longtitude = $("#address1_longitude").val();
    $("#address1_longitude").val(Number.parseFloat(Longtitude).toFixed(4));

    });

    $('.validation-summary').eq(1).remove();

    // address
    tdg.cid.address_init(true);

    var selected_language = '{{website.selected_language.code}}';

    //Phone number formatting
    tdg.cid.phone_init("telephone1", selected_language);
    tdg.cid.phone_init("mobilephone", selected_language);
    tdg.cid.phone_init("fax", selected_language);

    // hide controls
    tdg.c.control_hide("name");

    // cid_same_as_company
    $("#cid_same_as_company").change(function () {
        cid_same_as_company_change();
    });
    cid_same_as_company_change();

    $("#cid_sitename").attr("autocomplete", "new-password");
    $("#telephone1").attr("autocomplete", "new-password");
    $("#fax").attr("autocomplete", "new-password");

    $("#ovs_address_type").change(function () {
        tdg.cid.address_type_change(true);
    });
    tdg.cid.address_type_change(false);

    tdg.cid.convert_province_to_code(selected_language);

    $('#ovs_legalname').attr("readonly", true);

    subgrid_language();
      

        if (window.jQuery) {
        (function ($) {
            entityFormClientValidate = function () {
                var validation = true;
                var errorMessage = "";

                var handlingType = $('table[data-name="tab_5_section_1"]').find("#cid_handlingsitetype").prop('checked');
                var offeringType = $('table[data-name="tab_5_section_1"]').find("#cid_offeringfortransportsitetype").prop('checked');
                var transportType = $('table[data-name="tab_5_section_1"]').find("#cid_transportingsitetype").prop('checked');
                var importType = $('table[data-name="tab_5_section_1"]').find("#cid_importingsitetype").prop('checked');
                
                if(handlingType != true && offeringType != true && transportType != true && importType != true){
                    validation = false;
                    errorMessage += "TDG Activity Types required</br>";
                }

                if($('table[data-name="further_site_details_section_3"]').find("#cid_issiteattested").prop('checked') == false){
                    var msg = tdg.error_message.message("m000157");
                    errorMessage += msg + "</br>";
                    validation = false;
                }
                var urlParams = new URLSearchParams(window.location.search);
                var siteId = urlParams.get('id');

                //Classes validation
                if (!SiteHasOperationClasses(null, siteId)) {
                    var msg = tdg.error_message.message("m000016");
                    errorMessage += msg + "</br>";
                    validation = false;
                }

                 if (!validation) {
                    $('.validation-summary div').remove();
                    var validationSection = $('div[data-name="site_details2"]').parent().find(".validation-summary");

                    validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>")); 
                    validationSection.show(); 
                    $('.validation-summary div').focus(); 
                }
                return validation;
            }
        }(window.jQuery));
    }     
});

function cid_same_as_company_change() {
    debugger;

    if (_busy) return;

    _busy = true;

    var parent_id = '{{ user.parentcustomerid.Id }}';
    tdg.cid.address_same_as_company(parent_id);

    _busy = false;
}

function subgrid_language() {
    var selected_language = sessionStorage.getItem("selected_language");

    var entityList = $(".entity-grid").eq(1);
    var refRel = entityList[0].dataset.refRel;
    if (refRel == "cid_account_ovs_operationunnumber_Site") {
        entityList.on("loaded", function () {
            // header
            let header = entityList.find("table thead > tr");
            for (var index1 = 0; index1 < header.length; index1++) {
                let tr = header[index1];

                let cols = $(tr).find('th');
                for (var i = 0; i < cols.length; i++) {
                    var tdElement = cols[i];
                    var className = $(tdElement)[0].className;
                    if (className.indexOf("sort-enabled") == -1) {
                        var text = $(tdElement).text();
                        text = tdg.c.text_language(text, selected_language);
                        $(tdElement).text(text);
                    }

                    switch (i) {
                        case 0:
                            tdElement.ariaLabel = "UN Number Display";
                            break;
                        case 1: // Packing Group
                            tdElement.style.display = "none";
                            break;
                        case 2: // Shipping
                            tdElement.style.display = "none";
                            break;
                    }
                }
            }
            let rows = entityList.find("table tbody > tr");
            rows.each(function (index, tr) {
                let cols = $(tr).find('td');
                for (var i = 0; i < cols.length; i++) {
                    tdElement = $(cols[i]).eq(0);
                    var value = tdElement.attr('data-attribute');
                    if (value != null) {
                        var index1 = value.indexOf('.tdg_shippingnamedescriptiontxt');
                        if (index1 != -1) {
                            var cellValue = tdElement.text();
                            cellValue = tdg.c.text_language(cellValue, selected_language);
                            tdElement.text(cellValue);
                        }

                        switch (i) {
                            case 0:
                                var cellValue = tdElement.text();
                                var f1 = $(cols[i + 1]).eq(0);
                                var f2 = $(cols[i + 2]).eq(0);
                                var text = cellValue + " - " +
                                    f1.text() + " - " +
                                    tdg.c.text_language(f2.text(), selected_language);
                                tdElement.text(text);

                                f1[0].style.display = "none";
                                f2[0].style.display = "none";
                                break;
                        }
                    }
                }
            });
        });
    }
}