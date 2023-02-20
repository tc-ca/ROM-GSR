
$(document).ready(function () {
page_setup();
var selected_language = '{{website.selected_language.code}}';
var email  = '{{user.emailaddress1}}';
var contactemailLabe = "Contact Email";
var contactusNote = "Note: This is your account’s official email, which may be updated via the [Account Settings] button at the top.";
//to do :
//add code to get lables from message to js file
$("#InsertButton").before('<p style="font-size:26px">'+contactemailLabe+'</p>');
$("#InsertButton").before('<p style="font-size:23px">'+email+ '</p>');
$("#InsertButton").before('<div class="xrm-attribute-value">'+contactusNote+'</Div><br>');
//declare request and default to reg
var requestType = "918640000";
var company_status = "{{entities.account[user.parentcustomerid.id].cid_cidcompanystatus.value}}";
if (company_status == '100000005') {//registration completed
requestType = "918640001";
}
else {

    requestType = "918640000";
}
console.log("requestType: " + requestType);
var data = tdg.webapi.SelectedColumnlist("ovs_supportrequesttypes" ,"ovs_reasonenglish,ovs_reasonfrench,ovs_externaluser" 
, "ovs_requesttype eq " + requestType + " and statecode eq 0 and ovs_externaluser eq true") ;  


var j;
 //remove all option
 $("#ovs_requesttype").empty();
   //add empty option   
   let o = document.createElement("option");
    o.value = "";
    o.innerHTML = "";
    o.setAttribute('label','' );
    o.setAttribute('aria-label','Blank' );
    $("#ovs_requesttype").append(o);    
    for (j=0; j<data.length; j++)
    {
    var id = data[j]["ovs_supportrequesttypeid"];
    var name = data[j]["ovs_reasonenglish"];
    if (selected_language != "en")
    {
        name = data[j]["ovs_reasonfrench"];
    }
    let option = document.createElement("option");
    option.value = id;
    option.innerHTML = name;
    $("#ovs_requesttype").append(option);    

}


document.getElementById("ovs_requesttype").onchange = function() {Get_RequestDetails()};

//check if page loaded after record is created
var URLs = new URLSearchParams(window.location.search);
console.log(URLs);
   //  var newrecordid = URLs.get('id');
   var recordSaved = URLs.get('recordSaved');
   if (recordSaved != null && recordSaved == 'yes')
   {
       tdg.c.dialog_OK('Your request has been sent to the Transport Canada TDG CID Support Team.');
   }
  
});//end document.ready


function Get_RequestDetails() {

  var selectedValue  = document.getElementById("ovs_requesttype").value;
 
  var MemoData = tdg.webapi.SelectedColumnlist("ovs_supportrequesttypes" ,"ovs_templateenglish , ovs_templatefrench" ,
   "ovs_supportrequesttypeid eq " + selectedValue );   
    

 
    var selected_language = '{{website.selected_language.code}}';
    var memo = MemoData[0]["ovs_templateenglish"];
     if (selected_language != "en")
    {
        memo = MemoData[0]["ovs_templatefrench"];
    }
    //update memo
    $("#ovs_requestdetails").val(memo);
}



function page_setup() {
    var selected_language = '{{website.selected_language.code}}';
    sessionStorage.setItem("selected_language", selected_language);

    const files = ["/tdgcore_common.js", "/tdgcore_message.js" , "/tdgcore_invitation.js"];
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = file;

        $("body").append(script);
    }
}
