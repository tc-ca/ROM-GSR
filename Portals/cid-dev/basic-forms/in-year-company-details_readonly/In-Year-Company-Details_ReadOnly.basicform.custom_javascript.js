//
// Basic Form-In Year Company Details_ReadOnly.js
//

$(document).ready(function () {
    debugger;
    page_setup();
    var companyName = "{{user.parentcustomerid.name}}";
    let url = new URL(window.location.href);
    console.log("url editorg 2: " + url);
  
    var cid_usercontacttype = '{{user.cid_contacttype.Value}}';
	console.log(cid_usercontacttype);
	//if not primary contact
	if (cid_usercontacttype != 100000000) {
		$("#update_company").attr('disabled','disabled');
		//$("#update_company").css("pointer-events", "none");
    }
    tdg.c.page_instructions("page_my_company", true);
    tdg.c.control_hide("ovs_name_fr");

    $("#update_company").click(function () {
        var selected_language = '{{website.selected_language.code}}';
        $('div[data-name="tab_3"]').parent().parent().removeClass("hidden");
        $('div[data-name="company_details"]').parent().parent().addClass("hidden");
        $('#update_company').addClass("hidden");

        $('div[data-name="tab_3"]').parent().before("<h2>" + companyName + "</h2><hr>");

        var legend2 = $('fieldset[aria-label="Head Office"] legend').eq(1);
        legend2.text("");
        var ho = tdg.error_message.message("m000156");
        legend2.after("<h2>" + companyName + " - " + ho + "</h2><hr>");
        tdg.cid.phone_init("telephone1", selected_language);
        tdg.cid.phone_init("fax", selected_language);
         $("#cid_iscompanyattested_label").removeAttr("role" , "") ;
    });
    $("#cancel_company_update").click(function () {
        window.location.href = "~/my-company";
    });

    let currentURL = window.location.href;
    console.log ("current url " + currentURL);
  
   if(currentURL.indexOf('EditOrg') && cid_usercontacttype == 100000000)
         {
                    console.log('editorg found');
                    let editOrgValue = url.searchParams.get('EditOrg');
                    console.log ("edit org value " + editOrgValue );
                     var urlPath = window.location.href;
                     urlPath = urlPath.split('?')[0];
                    // window.history.replaceState({}, document.title, urlPath);
                   // $("#update_company").click();
            }


});

function page_setup() {
    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    const files = ["/tdgcore_common.js", "/tdgcore_message.js"];
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = file;

        $("body").append(script);
    }

    // server error?
    tdg.c.message_panel();
}
