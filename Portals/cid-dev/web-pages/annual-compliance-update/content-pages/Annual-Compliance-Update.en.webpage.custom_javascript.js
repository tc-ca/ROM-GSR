//
// Web Page-Annual Compliance Update
//

$(document).ready(function () {
	debugger;
	
	var parentAccountid = '{{user.parentcustomerid.id}}';
    //tdg.cid.Complete_All_Annualcompliance_Tasks(parentAccountid , "")

	sessionStorage.setItem('frominyearsites', 'false');
    sessionStorage.setItem('fromannualcompliance', 'true');
	sessionStorage.setItem('frominyearsitepage', 'false');

	$("legend").each(function() {
		$(this).removeClass();
		$(this).css("font-size", "20px");
		$(this).css("font-weight", "bold");
		$(this).css("text-decoration", "underline");
    });

 var cidCompanyStatus = $('#cid_cidcompanystatus').find(":selected").text();

    $('#cid_cidcompanystatus').hide();
    $('#cid_cidcompanystatus_label').hide();
    
    var deactivateCompanyWebLink = $('a[href*="deactivate-company"]');

    
    if (cidCompanyStatus.indexOf("Inactive") >= 0) {
        deactivateCompanyWebLink.addClass("hidden");
    }
    else{
        deactivateCompanyWebLink.removeClass("hidden");
    }

	var selected_language = '{{website.selected_language.code}}';
	sessionStorage.setItem("selected_language", selected_language);

	var companyName = tdg.c.replace_special_char('{{user.parentcustomerid.name}}');
	var topNav = $('#navbar');

	if (companyName)
		if (topNav) {
			var code = "m000024";
			var value = tdg.error_message.message(code);
			value = value.replace("{0}", companyName);

			$("<h2>" + value + "</h2>").insertAfter(topNav);
		}

	subgrid_language();
	

	  var ButtonLable = tdg.error_message.message("m000121");
            var ButtonCompleteLable = tdg.error_message.message("m000123");

            //create complete all button for company
            var Button_CompanyCompleteAll = '<div class="input-group pull-right"><button type="button" id="CompanyCompleteAll" class="btn btn-primary pull-left action">'
                + ButtonCompleteLable + '</button></div>';
            const CompanyCompleteButtonLocation = document.querySelector('table[data-name="tab_11_section_1"]');
            CompanyCompleteButtonLocation.insertAdjacentHTML('beforebegin', Button_CompanyCompleteAll);

            //crate complete all button for site
            const SiteCompleteButtonLocation = document.querySelector('table[data-name="annual_compliance_section_2"]');
            var Button_SiteCompleteAll = '<div class="input-group pull-right"><button type="button" id="SiteCompleteAll" class="btn btn-primary pull-left action">'
                + ButtonLable + '</button></div>';
            SiteCompleteButtonLocation.insertAdjacentHTML('beforebegin', Button_SiteCompleteAll);
            //clicke event for company button
            $("#CompanyCompleteAll").on("click", function () {
				$('#loader').show();
				//.form-loading
				//.show();
               await completeCompanyTasks(parentAccountid);
				// $('#loader').show();

                // $(".entity-grid").trigger("refresh");
               // setTimeout(tdg.cid.Refresh_EntityGrid, 6000);
                $('#loader').hide();
            });
            //click event for site button
            $("#SiteCompleteAll").on("click", function () {
                var Listdata = tdg.webapi.SelectedColumnlist("tasks", "activityid", "cid_tasklevel eq 100000001 and _regardingobjectid_value eq "
                    + parentAccountid);

                for (var i = 0; i < Listdata.length; i++) {

                    var data = {
                        "statecode": 1,
                        "statuscode": 5
                    };
                    tdg.webapi.update("tasks", Listdata[i].activityid, data);
                }//end for

                // $(".entity-grid").trigger("refresh");
                setTimeout(tdg.cid.Refresh_EntityGrid, 7000);
            });
});

function subgrid_language() {
	debugger;

	var entityList = $(".entity-grid");
	for (var i = 0; i < entityList.length; i++) {
		var grid = entityList.eq(i);
        tdg.cid.subgrid_header_language(grid);
    }

	async function completeCompanyTasks(parentAccountid)
	{
		 var Listdata = tdg.webapi.SelectedColumnlist("tasks", "activityid", "cid_tasklevel eq 100000000 and _regardingobjectid_value eq "
                    + parentAccountid);
					// $('#loader').show();

                for (var i = 0; i < Listdata.length; i++) {

                    var data = {
                        "statecode": 1,
                        "statuscode": 5
                    };
                    tdg.webapi.update("tasks", Listdata[i].activityid, data);
                }//end for
	}
}

