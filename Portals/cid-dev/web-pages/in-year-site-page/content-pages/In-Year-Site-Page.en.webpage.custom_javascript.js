//
// Web Page-In Year Site Page.js
//

$(document).ready(function () {
    debugger;
    // format sign-out's tooltip
	
	$('#cdts-signout-btn').tooltip({
					trigger: 'hover',
					placement: 'right',
					container: 'body'
						});

       setTimeout( function(){ 
                    
                $("#cid_importingsitetype_label").attr("role", "");            
                $("#cid_offeringfortransportsitetype_label").attr("role", "");
                $("#cid_handlingsitetype_label").attr("role", "");
                $("#cid_transportingsitetype_label").attr("role", "");
           
             
    }, 1000); 

    tdg.c.weblink_show("/company_dashboard/");
    tdg.c.weblink_show("/Bulk_Site_Update/");
    var navindex = "{{page.adx_navigation.name}}";

    $("legend").each(function () {
        $(this).removeClass();
        $(this).css("font-size", "20px");
        $(this).css("font-weight", "bold");
        $(this).css("text-decoration", "underline");
    });

    sessionStorage.setItem('frominyearsites', 'false');
    sessionStorage.setItem('fromannualcompliance', 'false');
    sessionStorage.setItem('frominyearsitepage', 'true');

    var urlParams = new URLSearchParams(window.location.search);
    urlParams.set('operationid', sessionStorage.getItem("siteOperationId"));

    $('#loader').show();

    var deactivateSiteWebLink = $('a[href*="deactivate-site"]');
    var activateSiteWebLink = $('a[href*="activate-site"]');

    $('table[data-name="further_site_details_section_3"]').find("#cid_issiteattested").prop('checked', false);

    $('table[data-name="further_site_details_section_4"]').parent().addClass("hidden");

    var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();

    var disabled = "";

    if (cidSiteStatus.indexOf("Inactive") >= 0) {
        $(".create-action").hide();
        $('.crmEntityFormView').find('input, textarea, select').attr('disabled', 'disabled');
        $('.workflow-link').attr('disabled', 'disabled');

        disabled = "disabled";

        activateSiteWebLink.removeClass("hidden");
        deactivateSiteWebLink.addClass("hidden");
    }
    else {
        activateSiteWebLink.addClass("hidden");
        deactivateSiteWebLink.removeClass("hidden");
    }

    sessionStorage.setItem('siteOperationId', '');

    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('id')) {
        var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
        var siteId = urlParams.get('id');
        var operationId = GetHOTIOperation(siteId);
        var disabled = "";

        if (cidSiteStatus.indexOf("Inactive") >= 0)
            disabled = "disabled";

        sessionStorage.setItem('siteOperationId', operationId);

        $(".list-group-item").each(function () {
            var _href = $(this).attr("href");
            if (!_href.includes("?id="))
                $(this).attr("href", _href + '?id=' + siteId);
        });

        if ($("#openOperationWizard").length > 0)
            $('#openOperationWizard').remove();
    }

    if ($("#updateSiteBtn").length <= 0) {
        var msg = tdg.error_message.message("m000170");
        var updateSiteBtn = "</br><div id='updateSiteBtn' role='group' class='btn-group entity-action-button '><a href='~/SiteRegistrationWizard/?id=" + siteId + "&in_year=true'><input type='button' name='UpdateSite' value='" + msg + "' class='btn btn-primary button submit-btn' nonactionlinkbutton='true'" + disabled + "></a></div></br></br>";

        $('div[data-name="further_site_details"]').parent().after(updateSiteBtn);
    }
    $('#loader').hide();
});
