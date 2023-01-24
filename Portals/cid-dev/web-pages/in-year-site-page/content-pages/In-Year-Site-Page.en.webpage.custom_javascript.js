//
// Web Page-In Year Site Page.js
//

$(document).ready(function () {
    debugger;

    tdg.c.weblink_show("/company_dashboard/");
    tdg.c.weblink_show("/Bulk_Site_Update/");


    $("legend").each(function() {
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

    //$('table[data-name="tab_5_section_1"] tr:first').addClass("hidden");
    $('table[data-name="further_site_details_section_4"]').parent().addClass("hidden");

    var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();

    //$('#cid_cidsitestatus').hide();
    //$('#cid_cidsitestatus_label').hide();
    
    var disabled = "";

    if (cidSiteStatus.indexOf("Inactive") >= 0) {
        $(".create-action").hide();
        $('.crmEntityFormView').find('input, textarea, select').attr('disabled', 'disabled');
        $('.workflow-link').attr('disabled', 'disabled');
        
        disabled = "disabled";

        activateSiteWebLink.removeClass("hidden");
        deactivateSiteWebLink.addClass("hidden");
    }
    else{
        activateSiteWebLink.addClass("hidden");
        deactivateSiteWebLink.removeClass("hidden");
    }

    sessionStorage.setItem('siteOperationId', '');

    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('id')) {
        //var requirementLevel = $("#cid_requirementlevel").find(":selected").text();
        var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
        var siteId = urlParams.get('id');
        var operationId = GetHOTIOperation(siteId);
        //var disabledSiteLevelSwitch = "";
        var disabled = "";

        if (cidSiteStatus.indexOf("Inactive") >= 0)
            disabled = "disabled";

        //if(requirementLevel == "" || requirementLevel == null || requirementLevel == " ")
        //    disabledSiteLevelSwitch = "disabled";

        sessionStorage.setItem('siteOperationId', operationId);

        //var msg = "Set/Change Site Requirement Level";//tdg.error_message.message("m000029");
        //var html1 = "<div id='switchSiteRequirementLevel' role='group' class='btn-group entity-action-button'><a href='~/my-sites/in-year-site/switch_site_requirement_level?id=" + siteId + "'><input type='button' name='switchSiteRequirementLevel' value='{0}' class='btn btn-primary button submit-btn' nonactionlinkbutton='true'" + disabledSiteLevelSwitch + " " + disabled + "></a></div><br><br><br><br>";
       // html1 = html1.replaceAll("{0}", msg);
        //$('div[data-name="site_details2"]').parent().parent().find("#UpdateButton").parent().after(html1);
        //$('table[data-name="tab_5_section_2"]').parent().after(html1);
        

        $(".list-group-item").each(function () {
            var _href = $(this).attr("href");
            if (!_href.includes("?id="))
                $(this).attr("href", _href + '?id=' + siteId);
        });

        //if (requirementLevel == 'Basic') {
        //    $('table[data-name="site_details_section_6"]').parent().addClass("hidden");
        //}

        if ($("#openOperationWizard").length > 0)
            $('#openOperationWizard').remove();
    }

    //var html1 = "<div id='siteRequirementLevel'><label>" + requirementLevel + "</label></div><br>"; 
    //$('#cid_requirementlevel').parent().after(html1); 
    //$('#cid_requirementlevel').hide(); 

    if ($("#updateSiteBtn").length <= 0){
        //var updateSiteBtn = "</br><div id='updateSiteBtn' role='group' class='btn-group entity-action-button '><a href='~/my-sites/in-year-site/in_year_site_update/?id=" + siteId + "&in_year=true'><input type='button' name='UpdateSite' value='Update Site' class='btn btn-primary button submit-btn' nonactionlinkbutton='true'" + disabled + "></a></div></br></br>";      
        var updateSiteBtn = "</br><div id='updateSiteBtn' role='group' class='btn-group entity-action-button '><a href='~/SiteRegistrationWizard/?id=" + siteId + "&in_year=true'><input type='button' name='UpdateSite' value='Update Site' class='btn btn-primary button submit-btn' nonactionlinkbutton='true'" + disabled + "></a></div></br></br>";      

        $('div[data-name="further_site_details"]').parent().after(updateSiteBtn);
    }
    $('#loader').hide(); 
});