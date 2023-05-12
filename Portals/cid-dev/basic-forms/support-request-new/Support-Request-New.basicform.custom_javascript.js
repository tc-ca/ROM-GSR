//
// Basic Form-Support Request-New.js
//

$(document).ready(function () {

    debugger;

    var company_reg_date;

    sessionStorage.setItem("company_reg_date", company_reg_date);
    var customerid = '{{user.parentcustomerid.id}}';

    //declare request and default to reg
    var requestType = "918640000";

    if (customerid == null || customerid == "" || customerid == "undefined") {
        tdg.c.weblink_hide("/company_dashboard/");
    }
    else {
        customerid = '{{user.parentcustomerid.id}}';
        var parentAccountdata = tdg.webapi.SelectedColumnlist("accounts", "name,cid_officiallyregistrationcompletationdate"
            , "accountid eq " + customerid);

        company_reg_date = parentAccountdata[0]["cid_officiallyregistrationcompletationdate"];
        sessionStorage.setItem("company_reg_date", company_reg_date);

        if (company_reg_date != null && company_reg_date != "") {
            requestType = "918640001";
            tdg.c.weblink_hide("/RegistrationWizard/");
            tdg.c.weblink_show("/company_dashboard/");
        }
        else {
            tdg.c.weblink_hide("/company_dashboard/");
            tdg.c.weblink_show("/RegistrationWizard/");
        }
    }

    var selected_language = '{{website.selected_language.code}}';
    var email = '{{user.emailaddress1}}';

    //cancel button text   
    var ButtonCancel = tdg.error_message.message("BTN_CANCEL");
    //add button next to save button
    $(".actions").append('&nbsp;&nbsp;<input id ="cancelButton" type="button" value="' +
        ButtonCancel + '" class="btn btn-default button previous previous-btn"> </input>');
    //cancel button click event
    $('#cancelButton').click(function (e) {
        var regdate = sessionStorage.getItem("company_reg_date", company_reg_date);
        if (regdate != null && regdate != "") {
            window.location.href = '~/company_dashboard/';
        }
        {
            window.location.href = '~/RegistrationWizard/';
        }
    });

    var contactemailLabel = tdg.error_message.message("m000135");
    var contactusNote = tdg.error_message.message("m000136");
    var confirmationMessage = tdg.error_message.message("m000137");
    var detailNeedtobAddedMessage = tdg.error_message.message("m000138");
    //hide and create new submit button
    var submit_Lable = tdg.error_message.message("BTN_SUBMIT");
    $("#InsertButton")[0].value = submit_Lable;
    $("#InsertButton").css("display", "none");
    var NewSubmitButton = '<button type="button" id="btn_submit_request" class="submit-btn btn btn-primary form-action-container-left">'
        + submit_Lable + '</button>'
    $("#InsertButton").after(NewSubmitButton);

    $("#btn_submit_request").click(function (e) {
        var lengthofCurrentMemo = $("#ovs_requestdetails").val().length;
        var TemplateLength = sessionStorage.getItem("MemoLength");

        if (lengthofCurrentMemo > TemplateLength) {
            $("#InsertButton").click();
            // tdg.c.
            //dialog_OK(confirmationMessage);
        }//end if
        else {
            tdg.c.dialog_OK(detailNeedtobAddedMessage);

        }
    });

    var userEmailFieldandLable_HTML = '<tr><td colspan="1" rowspan="1" class="clearfix cell"></td>' +
        '<td class="cell zero-cell"></td></tr><tr><td colspan="1" rowspan="1" class="clearfix cell text form-control-cell">' +
        '<div class="info"><label  id="emailaddress_label" class="field-label">' +
        contactemailLabel +
        '</label></div><div class="control"><input  type="text" readonly id="emailaddress" title="user email address" value="'
        + email
        + '" class="text form-control" >' +
        '</div>' +
        '</td><td class="cell zero-cell"></td></tr>'
        + '<tr><td colspan="1" rowspan="1" class="clearfix cell" ><div class="xrm-attribute-value">'
        + contactusNote + '</Div></td></tr>'
        ;

    $("table").find('tbody').append(userEmailFieldandLable_HTML);

    var parent_companyID = '{{user.parentcustomerid.id}}';
    if (parent_companyID != null && parent_companyID != '' && parent_companyID != 'undefined') {

    }

    var data = tdg.webapi.SelectedColumnlist("ovs_supportrequesttypes", "ovs_reasonenglish,ovs_reasonfrench,ovs_externaluser&$orderby=ovs_displayorder asc"
        , "ovs_requesttype eq " + requestType + " and statecode eq 0 and ovs_externaluser eq true");

    var j;
    //remove all option
    $("#ovs_requesttype").empty();
    //add empty option   
    let o = document.createElement("option");
    o.value = "";
    o.innerHTML = "";
    o.setAttribute('label', '');
    o.setAttribute('aria-label', 'Blank');
    $("#ovs_requesttype").append(o);
    for (j = 0; j < data.length; j++) {
        var id = data[j]["ovs_supportrequesttypeid"];
        var name = data[j]["ovs_reasonenglish"];
        if (selected_language != "en") {
            name = data[j]["ovs_reasonfrench"];
        }
        let option = document.createElement("option");
        option.value = id;
        option.innerHTML = name;
        $("#ovs_requesttype").append(option);
    }

    document.getElementById("ovs_requesttype").onchange = function () { Get_RequestDetails() };

    //check if page loaded after record is created
    var URLs = new URLSearchParams(window.location.search);
    var recordSaved = URLs.get('recordSaved');
    if (recordSaved == "yes") {
        //tdg.c.
        dialog_OK(confirmationMessage);
        var urlPath = window.location.href;
        urlPath = urlPath.split('?')[0];
        window.history.replaceState({}, document.title, urlPath);
    }
});

function Get_RequestDetails() {
    var selectedValue = document.getElementById("ovs_requesttype").value;
    var MemoData = tdg.webapi.SelectedColumnlist("ovs_supportrequesttypes", "ovs_templateenglish ,_ovs_frenchknowledgearticle_value, ovs_templatefrench,_ovs_knowledgearticle_value",
        "ovs_supportrequesttypeid eq " + selectedValue);
    var selected_language = '{{website.selected_language.code}}';
    var memo = MemoData[0]["ovs_templateenglish"];

    if (selected_language != "en") {
        memo = MemoData[0]["ovs_templatefrench"];
        if (MemoData[0]["_ovs_frenchknowledgearticle_value"] != null) {
            var MessageConfirm = "French-There is knowledge article information about this topic that may answer your request. Do you want to first view that information?";
            tdg.c.dialog_YN(MessageConfirm, (ans) => {
                if (ans) {
                    window.location.href = '~/KnowledgeArticlePage/?id=' + MemoData[0]["_ovs_frenchknowledgearticle_value"];
                } else { }
            });
        }
    }
    else {
        if (MemoData[0]["_ovs_knowledgearticle_value"] != null) {
            var MessageConfirm = tdg.error_message.message("m000139");

            tdg.c.dialog_YN(MessageConfirm, (ans) => {
                if (ans) {
                    window.location.href = '~/KnowledgeArticlePage/?id=' + MemoData[0]["_ovs_knowledgearticle_value"];
                } else { }
            });
        }
    }

    sessionStorage.setItem("MemoLength", memo.length);

    //update memo
    $("#ovs_requestdetails").val(memo);
}

function dialog_OK(message) {
    message = message.replaceAll("\n", "<br>");
    var header = tdg.error_message.message("CID_PORTAL");
    var OK = tdg.error_message.message("OK");

     $(`<section class="wb-lbx overlay-def" id="myModal" aria-modal="true" aria-live="assertive" aria-labelledby ="headerid" >
               <div class="modal-dialog" role="document">
                <div class="modal-content" >
	            <header class="modal-header">
	            <h2 id="headerid" class="modal-title">${header}</h2>
	            </header>
	            <div class="modal-body">
	            ${message}
	            </div>
	            <div class="modal-footer">
	            <button id="btnOK" type="button" class="btn btn-sm btn-primary pull-left popup-modal-dismiss">${OK}</button>
	            </section>
	            `).appendTo('body');

    $("#myModal").css('top', '15%');
    $("#myModal").css('left', '40%');
    $("#myModal").css('position', 'fixed');
    $("#myModal").css('z-index', '9999');

    $("#btnOK").click(function () {
        var customerid = '{{user.parentcustomerid.id}}';
        if (customerid != null) {
            var parentAccountdata = tdg.webapi.SelectedColumnlist("accounts", "name,cid_officiallyregistrationcompletationdate"
                , "accountid eq " + customerid);

            company_reg_date = parentAccountdata[0]["cid_officiallyregistrationcompletationdate"];
            if (company_reg_date != null && company_reg_date != "") {
                $("#myModal").remove();
            }
            else {
                window.location.href = '~/RegistrationWizard/';
            }
        }
        else {
            window.location.href = '~/RegistrationWizard/';
        }
    });
}