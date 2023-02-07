//
// Web Page-Profile.js
//

$(document).ready(function () {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    page_setup();

    tdg.c.control_hide("cid_contacttype");

    var parent_id = '{{user.parentcustomerid.Id}}';
   // var filter = "accountid eq guid'" + parent_id + "'";
   
   //hide page header
   const PageHeaderElement = document.getElementsByClassName("page-header");
   PageHeaderElement[0].setAttribute("hidden", "");
   //get security section div
   const SecuritySection  = document.getElementsByClassName("panel panel-default nav-profile");
   SecuritySection[0].setAttribute("hidden", "");

   //add bottom to profile link in page-heading
   const PageheadingElement = document.getElementsByClassName("page-heading");
   PageheadingElement[0].style.marginBottom = "10px";
   //add margin to update button
  const UpdateButtonElement = document.getElementById("ContentContainer_MainContent_MainContent_ContentBottom_SubmitButton");
  UpdateButtonElement.style.marginTop = "10px";

  

    var data = tdg.webapi.SelectedColumnlist("accounts",
                    "cid_cidcompanystatus,cid_officiallyregistrationcompletationdate",
                    "accountid eq " + parent_id );
                
     
    if (data.length == 0)
   // var data = tdg.c.OData_List("account", filter);
    //if (data == null) 
    {
        tdg.c.weblink_hide("/RegistrationWizard/");
        tdg.c.weblink_hide("/Bulk_Site_Upload/");
        tdg.c.weblink_hide("/company_dashboard/");
        tdg.c.weblink_hide("/Bulk_Site_Update/");
    }
    else {
        var cid_cidcompanystatus = data[0]['cid_cidcompanystatus'];
          var completionDate = data[0]['cid_officiallyregistrationcompletationdate'];
     
        //.cid_cidcompanystatus.Value;
        if ( completionDate != "" && completionDate != null)
        //.cid_cidcompanystatus.Value;
       // if (cid_cidcompanystatus == 100000005)  // Active: Registration complete, part of CID Reporting
        {
            tdg.c.weblink_hide("/RegistrationWizard/");
            tdg.c.weblink_hide("/Bulk_Site_Upload/");
        }
        else {
            tdg.c.weblink_hide("/company_dashboard/");
            tdg.c.weblink_hide("/Bulk_Site_Update/");
        }
    }

    //Phone number formatting
    tdg.cid.phone_init("telephone1", selected_language);
    tdg.cid.phone_init("mobilephone", selected_language);
    tdg.cid.phone_init("fax", selected_language);


    $("#emailaddress1").width('100%');

    tdg.c.addValidator("emailaddress1");
    $('#emailaddress1').attr("readonly", true);

    $("#firstname").attr("autocomplete", "new-password");
    $("#lastname").attr("autocomplete", "new-password");
    $("#emailaddress1").attr("autocomplete", "new-password");
    $("#telephone1").attr("autocomplete", "new-password");
    $("#mobilephone").attr("autocomplete", "new-password");
    $("#fax").attr("autocomplete", "new-password");

    // default primary if 1st time
    var firstname = $("#firstname").val();
    if (firstname == "") {
        $("#cid_contacttype").val(100000000);
    }

    //Remove email link
    var checkEmaillinkExist = setInterval(function() {
     if($(".text-primary").hasClass("text-primary")) 
        {
            $(".text-primary").css({"cursor":"text"});
            $(".text-primary").removeAttr("href");
            clearInterval(checkEmaillinkExist);
        }
    }, 100); // check every 100ms
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
}