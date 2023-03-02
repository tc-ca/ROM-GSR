$(document).ready(function () {	
    $("#cid_registrationasof").parent().parent().hide();
    $("#cid_sitename").parent().parent().hide();

try
{
    var companyName = "{{user.parentcustomerid.name}}";

    //tdg.cid.Setup_site_Profile_Title (companyName);

    var SiteLabel = tdg.error_message.message("m000127");
    var LatitudeLabel = tdg.error_message.message("m000128");
    var LongtituedLabel = tdg.error_message.message("m000129");

    var ClassHeaderLabel = tdg.error_message.message("m000125");

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
                var pageTitle = "History for '";
                if (cid_sitename != null && cid_sitename != "") {
					cid_sitename = cid_sitename + "' ";
                    if (cid_sitename.toLowerCase().indexOf("site") < 0) {
                        cid_sitename += SiteLabel;
                    }
					
                    pageTitle = pageTitle + cid_sitename;
                }
                else {
                    var sitefulladdress;
                    //if the address is postal
                    if (ovs_address_type == 0) {
                        sitefulladdress = address1_line1 + ", " + address1_city + ", " + address1_stateorprovince + "' " + SiteLabel;
                        pageTitle = pageTitle + sitefulladdress;

                    }
                    else if (ovs_address_type == 1) {
                        if (ovs_lld_quarter != null) {
                            sitefulladdress = SiteAddressInfo[0]["ovs_lld_quarter@OData.Community.Display.V1.FormattedValue"] + " - ";
                        }
                        sitefulladdress = sitefulladdress + ovs_lld_section + " - " +
                            ovs_lld_township + " - " + ovs_lld_range + " - " + ovs_lld_meridian + "' " + SiteLabel;
                        pageTitle = pageTitle + sitefulladdress;
                    }
                    else if (ovs_address_type == 2) {
                        sitefulladdress = LatitudeLabel + ": " + address1_latitude + " " + LongtituedLabel + ": " + address1_longitude + "' " + SiteLabel;
                        pageTitle = pageTitle + sitefulladdress;
                    }

                }
                const titleElement = document.getElementsByClassName("tab-title");
                titleElement[0].innerHTML = pageTitle;
               
            }

}
catch(ex)
{

}

    var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();

    $('#cid_cidsitestatus').hide();
    $('#cid_cidsitestatus_label').hide();

    //$(".tab-title").text('History Logs for ' + companyName);

    $(".entity-grid").on("loaded", function () {
        var lang = '{{website.selected_language.code}}';

        if (lang == "en"){
            $(this).find("tbody tr, thead tr").children(":nth-child(4)").hide()
            $(this).find("tbody tr, thead tr").children(":nth-child(6)").hide()
        }
        else{
            $(this).find("tbody tr, thead tr").children(":nth-child(3)").hide()
            $(this).find("tbody tr, thead tr").children(":nth-child(5)").hide()
        }

        $(this).find("tbody").find("tr").each(function () {
	        var trElement = $(this);

	        trElement.find("td").each(function () {
		        var tdElement = $(this);
               
                if ((tdElement.attr('data-attribute') == 'cid_memoenglish' && lang == "en") || (tdElement.attr('data-attribute') == 'cid_memofrench' && lang == "fr")) {
                    tdElement.after('<td>'+ tdElement.text() +'</td>');
                    tdElement.hide();
                }
            });
        });
    });
});