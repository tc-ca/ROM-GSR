
$(document).ready(function () {

page_setup();



var selected_language = '{{website.selected_language.code}}';
var email  = '{{user.emailaddress1}}';

//cancel button text   
	var ButtonCancel = tdg.error_message.message("BTN_CANCEL");
	//add button next to save button
	$(".actions").append('&nbsp;&nbsp;<input id ="cancelButton" type="button" value="' +
		ButtonCancel + '" class="btn btn-default button previous previous-btn"> </input>');
	//cancel button click event
	$('#cancelButton').click(function (e) {
		//click back button
		history.back();
	});
//m000135
var contactemailLabel = tdg.error_message.message("m000135");
//"Contact Email";
//m000136
var contactusNote = tdg.error_message.message("m000136");
//"Note: This is your account’s official email, which may be updated via the [Account Settings] button at the top.";
//m000137
var confirmationMessage = tdg.error_message.message("m000137");
//"Your request has been sent to the Transport Canada TDG CID Support Team.";
//m000138
var detailNeedtobAddedMessage = tdg.error_message.message("m000138");
//"Details of Request needs to be entered";


//hide and create new submit button
var submit_Lable = $("#InsertButton").val() ;
 $("#InsertButton").css("display", "none");
var NewSubmitButton = '<button type="button" id="btn_submit_request" class="submit-btn btn btn-primary form-action-container-left">'
+ submit_Lable +'</button>'
$("#InsertButton").after(NewSubmitButton);
$("#btn_submit_request").click(function(e)
{
  var lengthofCurrentMemo = $("#ovs_requestdetails").val().length;
  var TemplateLength = sessionStorage.getItem("MemoLength");

  if (lengthofCurrentMemo > TemplateLength)
    {
        $("#InsertButton").click();
       // tdg.c.dialog_OK(confirmationMessage);
    }//end if
    else
    {
       tdg.c.dialog_OK(detailNeedtobAddedMessage);
    }
});

var userEmailFieldandLable_HTML ='<tr><td colspan="1" rowspan="1" class="clearfix cell"></td>'+
'<td class="cell zero-cell"></td></tr><tr><td colspan="1" rowspan="1" class="clearfix cell text form-control-cell">'+
'<div class="info"><label  id="emailaddress_label" class="field-label">' +
contactemailLabel +
'</label></div><div class="control"><input  type="text" readonly id="emailaddress" title="user email address" value="'
+ email 
+'" class="text form-control" >'+
'</div>'+
'</td><td class="cell zero-cell"></td></tr>'
+ '<tr><td colspan="1" rowspan="1" class="clearfix cell" ><div class="xrm-attribute-value">'
+ contactusNote + '</Div></td></tr>'
;

$("table").find('tbody').append(userEmailFieldandLable_HTML);
//declare request and default to reg
var requestType = "918640000";

var  company_reg_date = "{{entities.account[user.parentcustomerid.id].cid_officiallyregistrationcompletationdate}}";
	
var requestType = "918640001";
	if(company_reg_date !=null && company_reg_date !="")
	{
        requestType = "918640001";
    }
    else {

    requestType = "918640000";
    }


var data = tdg.webapi.SelectedColumnlist("ovs_supportrequesttypes" ,"ovs_reasonenglish,ovs_reasonfrench,ovs_externaluser&$orderby=ovs_displayorder asc" 
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
  if (recordSaved == "yes")
  {
      tdg.c.dialog_OK(confirmationMessage);
        var urlPath = window.location.href;
        urlPath = urlPath.split('?')[0];
        window.history.replaceState({}, document.title, urlPath);
  }
  
});//end document.ready


function Get_RequestDetails() {

  var selectedValue  = document.getElementById("ovs_requesttype").value;

  var MemoData = tdg.webapi.SelectedColumnlist("ovs_supportrequesttypes" ,"ovs_templateenglish ,_ovs_frenchknowledgearticle_value, ovs_templatefrench,_ovs_knowledgearticle_value" ,
   "ovs_supportrequesttypeid eq " + selectedValue );   
    console.log(MemoData[0]["_ovs_knowledgearticle_value"]);
     
 
    var selected_language = '{{website.selected_language.code}}';
    var memo = MemoData[0]["ovs_templateenglish"];
    
       


     if (selected_language != "en")
    {
        memo = MemoData[0]["ovs_templatefrench"];
        if ( MemoData[0]["_ovs_frenchknowledgearticle_value"] != null)
        {
          var MessageConfirm = "French-There is knowledge article information about this topic that may answer your request. Do you want to first view that information?";
            console.log (" knowledge article found");
            tdg.c.dialog_YN(MessageConfirm, (ans) => {
                            if (ans) {
                                window.location.href='~/KnowledgeArticlePage/?id=' +  MemoData[0]["_ovs_frenchknowledgearticle_value"];
                             
                                }else {}
        });}//end if french article exist
    }//end if language not en
    else
    {
        if ( MemoData[0]["_ovs_knowledgearticle_value"] != null)
        {
            //m000139
          var MessageConfirm = tdg.error_message.message("m000139");
          //"There is knowledge article information about this topic that may answer your request. Do you want to first view that information?";
       
            tdg.c.dialog_YN(MessageConfirm, (ans) => {
                            if (ans) {
                                window.location.href='~/KnowledgeArticlePage/?id=' +  MemoData[0]["_ovs_knowledgearticle_value"];
                             
                                }else {}
        });}//end check english article


    }//end else if not english


    sessionStorage.setItem("MemoLength", memo.length);
  
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
