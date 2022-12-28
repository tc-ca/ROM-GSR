//
// Basic Form-In Year Site Form.js
//

var _busy = false;

$(document).ready(function () {
    debugger;
    var CompanyName = '{{user.parentcustomerid.name}}';
    //get site id
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('id')) {
        var recodId = urlParams.get('id');
        var SiteAddressInfo = tdg.webapi.SelectedColumnlist("accounts",
        "cid_sitename,ovs_address_type,address1_line1,address1_city,ovs_address1_province,address1_stateorprovince,address1_latitude,address1_longitude,ovs_lld_quarter,ovs_lld_section,ovs_lld_township,ovs_lld_range,ovs_lld_meridian",
        "accountid eq " + recodId);
        var cid_sitename = SiteAddressInfo[0]["cid_sitename"];
        var ovs_address_type = SiteAddressInfo[0]["ovs_address_type"];
        var address1_line1 = SiteAddressInfo[0]["address1_line1"];
        var address1_city = SiteAddressInfo[0]["address1_city"];
        var address1_stateorprovince = SiteAddressInfo[0]["address1_stateorprovince"];
        var address1_latitude = SiteAddressInfo[0]["address1_latitude"];
        var address1_longitude = SiteAddressInfo[0]["address1_longitude"];
        var ovs_lld_quarter = SiteAddressInfo[0]["ovs_lld_quarter"];
        var ovs_lld_section = SiteAddressInfo[0]["ovs_lld_section@OData.Community.Display.V1.FormattedValue"];
        var ovs_lld_township = SiteAddressInfo[0]["ovs_lld_township@OData.Community.Display.V1.FormattedValue"];
        var ovs_lld_range = SiteAddressInfo[0]["ovs_lld_range@OData.Community.Display.V1.FormattedValue"];
        var ovs_lld_meridian = SiteAddressInfo[0]["ovs_lld_meridian@OData.Community.Display.V1.FormattedValue"];
        var pageTitle = CompanyName;
        if (cid_sitename != null && cid_sitename != "") {
            if (cid_sitename.toLowerCase().indexOf("site") < 0) {
                cid_sitename = cid_sitename + " Site";
            }
            pageTitle = pageTitle + " - " + cid_sitename;
          }
          else
          {
              var sitefulladdress ; 
              //if the address is postal
             if( ovs_address_type == 0)
             {
                 sitefulladdress = address1_line1 + ", " + address1_city + ", " + address1_stateorprovince + " Site";
                 pageTitle = pageTitle + " - " +  sitefulladdress ;

             }
             else if (ovs_address_type == 1)
             {
                 if (ovs_lld_quarter != null)
                 {
                     sitefulladdress =  SiteAddressInfo[0]["ovs_lld_quarter@OData.Community.Display.V1.FormattedValue"] + " - " ;
                 }
                 sitefulladdress = sitefulladdress  + ovs_lld_section + " - " +  
                 ovs_lld_township + " - " + ovs_lld_range + " - " + ovs_lld_meridian  + " Site" ;
                 pageTitle = pageTitle + " - " +  sitefulladdress ;              
             }
             else if (ovs_address_type  == 2)
             {
                 sitefulladdress = "Latitude: " + address1_longitude + " Longitude: " + address1_latitude + " Site" ;
                 pageTitle = pageTitle + " - " +  sitefulladdress ; 
             }

          }
         const titleElement = document.getElementsByClassName("tab-title");
         console.log("before title");
         titleElement[0].innerHTML = pageTitle ;
         const TDGActivitiesHeaderElement = document.querySelector('[aria-label="TDG Activity Types"]');
         const ClassesHeaderElement = document.querySelector('[ aria-label="Classes"]');
         TDGActivitiesHeaderElement.children[0].innerHTML = "TDG Activity Types for " + pageTitle ;
         ClassesHeaderElement.children[0].innerHTML = "Class / Divisions for " + pageTitle ;
         var ModeTable = document.getElementById('siteModesOfTransportation');
         ModeTable.closest('fieldset').children[0].innerHTML = "Modes of Transportation for " + pageTitle ;
        

    }




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
    //tdg.c.control_hide("cid_siteclaim");

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

                //$('table[data-name="further_site_details_section_3"]').find("#cid_issiteattested").prop('checked')

                var handlingType = $('table[data-name="tab_5_section_1"]').find("#cid_handlingsitetype").prop('checked');
                var offeringType = $('table[data-name="tab_5_section_1"]').find("#cid_offeringfortransportsitetype").prop('checked');
                var transportType = $('table[data-name="tab_5_section_1"]').find("#cid_transportingsitetype").prop('checked');
                var importType = $('table[data-name="tab_5_section_1"]').find("#cid_importingsitetype").prop('checked');
                
                if(handlingType != true && offeringType != true && transportType != true && importType != true){
                    validation = false;
                    errorMessage += "TDG Activity Types required</br>";
                }

                //var requirementLevel = $("#cid_requirementlevel").find(":selected").text();

                //if(requirementLevel == "" || requirementLevel == null || requirementLevel == " "){
                //    validation = false;
                //    errorMessage += "Missing Site Requirement Level</br>";
                //}

                if($('table[data-name="further_site_details_section_3"]').find("#cid_issiteattested").prop('checked') == false){
                    errorMessage += "You cannot proceed before attesting your site data changes, please check the 'Attestation' box</br>";
                    validation = false;
                }
                var urlParams = new URLSearchParams(window.location.search);
                var siteId = urlParams.get('id');

            //Classes validation
            if (!SiteHasOperationClasses(null, siteId)) {
                var msg = tdg.error_message.message("m000016"); // You cannot proceed before adding class(es).
                errorMessage += msg + "</br>";
                validation = false;
            }

            ////UN Numbers validation
            //if (requirementLevel == 'Extended' && !SiteHasOperationUNNumbers(null, siteId)) {
            //    var msg = tdg.error_message.message("m000017"); // UN ??
           //     errorMessage += msg + "</br>";
            //    validation = false;
            //}

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