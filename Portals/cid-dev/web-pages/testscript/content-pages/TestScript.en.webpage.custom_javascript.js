$(document).ready(function () {


  $("#UpdateButton").hide();
    tdg.c.button_create("btn_next", "#UpdateButton", "NextNext");
    $("#btn_next").bind("click", function () {
        //tdg.cid.crw.start_btn_next_click();
        
        Test_start_btn_next_click();
    });

});



 async  function Test_start_btn_next_click () {
    var value = Page_ClientValidate('');
    if (value) {
       
        var message = tdg.error_message.message("m000038");
        $("#btn_next").prop("value", message);

        var cid_has_cra_bn = $("#cid_has_cra_bn").val();
        var bn = $("#cid_crabusinessnumber").val();
        var legalname = $("#cid_legalname").val();
        var cid_reasonfornobnnumber_list = {};
        var cid_reasonfornobnnumber = $("#cid_reasonfornobnnumber").val();
        if (cid_reasonfornobnnumber != "") {
            cid_reasonfornobnnumber_list = $("#cid_reasonfornobnnumber")[0].options;
        }
        var cid_reasonfornobnnumber_other = $("#cid_reasonfornobnnumber_other").val();
           const data = await  Test_data_confirm_dialog(cid_has_cra_bn, bn,
            legalname, cid_reasonfornobnnumber_list);
            console.log (" Test_start_btn_next_click data.length = " + data.length  );
        if (data.length == 0) {
            if (cid_has_cra_bn == "1") {
                var message = tdg.error_message.message("m000001");
                tdg.c.dialog_OK(message);

                var message = tdg.error_message.message("BTN_NEXT");
                $("#btn_next").prop("value", message);
                return;
            }
            else {
                var cid_has_invitation = sessionStorage.getItem("cid_has_invitation");
                if (cid_has_invitation == 'false') {
                    $("#NextButton").click();
                    return;
                }
            }
        }

        if (data.length == 1) {
            console.log("inside data.length = 1");
            data.invitation_ind = false;
            var btn_next_name = "btn_next";
            debugger;
            Test_start_buttons_confirm(false, btn_next_name);

            Test_start_confirm(data, (ans) => {
                if (ans) {
                    debugger;
                    Test_start_buttons_confirm(true, btn_next_name);
                    $("#NextButton").click();
                } else {
                    debugger;
                    Test_start_buttons_confirm(true, btn_next_name);
                    var message = tdg.error_message.message("BTN_NEXT");
                    $("#btn_next").prop("value", message);

                    var msg = (data.cid_has_cra_bn == "1" ? "m000045" : "m000046");
                    msg = tdg.error_message.message(msg);
                    tdg.c.dialog_OK(msg);
                }
            });
        }
        else {
            $("#NextButton").click();
        }
    }
}



async function Call_CRA_Flow(CRA_Flow_URL , body)
{
    var json = {};
     let response = await fetch(CRA_Flow_URL, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
         method: 'POST',
     
      body: JSON.stringify(body),
      redirect: 'follow'
    });
    
    return await response.json();


   

    /* let req = new XMLHttpRequest();
        req.open("POST", CRA_Flow_URL);
        req.setRequestHeader("Content-Type", "application/json");
        req.onreadystatechange =   function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {
                    debugger;
                 
                  
                      json =  JSON.parse(this.response);
                      console.log("this.response " + this.response);
                   // return (r);
                    return new Promise((resolve) => {
                        setTimeout(() => {
                        resolve(json);
                        }, 2000);
                    });
                       

                } else {
                    json.length = 0;
                   return json;
                    

                }
            }
        };
        req.send(JSON.stringify(body));*/
 /* return new Promise((resolve) => {
                        setTimeout(() => {
                        resolve(json);
                        }, 2000);
                    });*/
}
 async function Test_Production_start_Retrieve_cra (bn, step_start) {


    var CRA_Data = {};
    var cid_crabusinessnumber = bn;
    var json = {};
   

    //var CRA_Flow_URL;
    //retrieve the url of the flow used to get data from CRA
    var results =  tdg.webapi.SelectedColumnlist("qm_environmentsettingses", "qm_value", "qm_name eq 'CID_Flow_CRA_API'");
    //check if flow url is found
    if (results.length > 0) {
        CRA_Flow_URL = results[0]["qm_value"];
        //define flow paramaters
        let body = {
            "cid_crabusinessnumber": cid_crabusinessnumber
        };
        const r = await  Call_CRA_Flow(CRA_Flow_URL , body);
        console.log ("r " + r.length);
        debugger;
        json = r;  
        console.log("json.IsInvalidData " + json.IsInvalidData);         
                    if (json.IsInvalidData) {
                         console.log("invalida CRA");
                          CRA_Data.length = 0;
                         
                            return CRA_Data;
                          
                    }
                    else {

                        if (json == null) {
                             CRA_Data.length = 0;
                              console.log("nullCRA");
                        return  CRA_Data; 
                            
                               
                        }

                        if (json.length == 0) {
                            console.log("0 lenth CRA");
                             CRA_Data.length = 0;
                            // Promise.resolve( CRA_Data); 
                              return CRA_Data ;
                          
                        }
                        console.log("inside else");


                        //get CRA data
                        CRA_Data.LegalName = json.LegalName;
                        console.log("after legal name json.LegalName" + CRA_Data.LegalName);
                        CRA_Data.OperatingName = json.LegalName;
                        CRA_Data.BusinessRegistrationNumber = cid_crabusinessnumber;
                        var a = {};
                        a.AddressLine1Text = json.PhysicalLocationAddress.AddressLine1Text;
                        a.AddressLine2Text = json.PhysicalLocationAddress.AddressLine2Text;
                        a.CityName = json.PhysicalLocationAddress.CityName;
                        a.ProvinceStateCode = json.PhysicalLocationAddress.ProvinceStateCode;
                        a.PostalZipCode = json.PhysicalLocationAddress.PostalZipCode;
                        a.CountryCode = json.PhysicalLocationAddress.CountryCode;

                        CRA_Data.PhysicalLocationAddress = a;
                        if (step_start == "1") {
                            CRA_Data.length = 1;
                            tdg.cid.crw.start_BN_Selected(CRA_Data);
                          
                           // Promise.resolve (CRA_Data);
                           // return CRA_Data ;
                               return new Promise((resolve) => {
                        setTimeout(() => {
                        resolve(CRA_Data);
                        }, 2000);
                    });
                       
                            
                        }
                        else {
                          CRA_Data.length = 1;
                              console.log("data.lenght " + CRA_Data.length);
                        return new Promise((resolve) => {
                        setTimeout(() => {
                        resolve(CRA_Data);
                        }, 2000);
                               //return CRA_Data;
                        });

                    }

                 
              
                    }
    }
}

 async function Test_data_confirm_dialog (cid_has_cra_bn, bn, legalname, cid_reasonfornobnnumber_list) {
  debugger;
    var data = {};
    data.length = 0;
 

    if (cid_has_cra_bn == "1") {
        
        let environment =   tdg.cid.crw.Get_Enviroment_From_EnvironmentSettings();
        console.log("environemnt " + environment) ;
        //if pre prod or prod
        if (environment == "PreProd" || environment == "Prod") {
        //use CRA API to get information

         debugger;
        const CRA_Data = await Test_Production_start_Retrieve_cra(bn, "");
       
          console.log("after Test_Production_start_Retrieve_cra execution *" + CRA_Data.LegalName + "*");
            console.log("CRA data " + CRA_Data);
                if (CRA_Data.length == 0) {
                   return data;
                }
                data.length = 1;
                data.cid_has_cra_bn = 1;
                data.cid_legalname = CRA_Data.LegalName;
                console.log("data.cid_legalname " +  data.cid_legalname);
                data.cid_operatingname = CRA_Data.OperatingName;
                data.cid_crabusinessnumber = bn;
                data.address = CRA_Data.PhysicalLocationAddress;

                return data;
      
        }
        else {
        // retrieve information from FakeBN entity in dynamics
        const CRA_Data = tdg.cid.crw.start_Retrieve_cra(bn, "");
         if (CRA_Data.length == 0) {
            return data;
        }
          data.length = 1;
        data.cid_has_cra_bn = 1;
        data.cid_legalname = CRA_Data.LegalName;
        data.cid_operatingname = CRA_Data.OperatingName;
        data.cid_crabusinessnumber = bn;
        data.address = CRA_Data.PhysicalLocationAddress;



        return data;
        }
       

  
    }
    else {
        var account = tdg.cid.crw.start_account_by_name(legalname);
        if (account.length > 0) {
            account = account[0];
            data.length = 1;
            data.cid_has_cra_bn = account.cid_has_cra_bn;
            data.cid_crabusinessnumber = account.cid_crabusinessnumber;
            data.cid_legalname = account.ovs_legalname;
            data.cid_operatingname = account.name;
            var cid_reasonfornobnnumber = account.cid_reasonfornobnnumber;
            for (var i = 0; i < cid_reasonfornobnnumber_list.length; i++) {
                if (cid_reasonfornobnnumber == cid_reasonfornobnnumber_list[i].value) {
                    cid_reasonfornobnnumber = cid_reasonfornobnnumber_list[i].text;
                    break;
                }
            }
            data.cid_reasonfornobnnumber = cid_reasonfornobnnumber;
            data.cid_reasonfornobnnumber_other = account.cid_reasonfornobnnumber_other;

            var address = {};
            address.AddressLine1Text = account.address1_line1;
            address.AddressLine2Text = account.address1_line2;
            address.AddressLine3Text = account.address1_line3;
            address.CityName = account.address1_city;
            address.ProvinceStateCode = account.address1_stateorprovince;
            address.PostalZipCode = account.address1_postalcode;

            data.address = address;
            return data;
        }
    }
   
}


function Test_start_buttons_confirm (value, btn_next_name) {
    $('#cid_has_cra_bn').prop("disabled", !value);
    $('#cid_crabusinessnumber').attr("readonly", !value);
    $('#cid_reasonfornobnnumber').prop("disabled", !value);
    $('#cid_reasonfornobnnumber_other').attr("readonly", !value);

    $('#' + btn_next_name).prop("disabled", !value);
}

 function Test_start_confirm (data, handler) {
    debugger;
    console.log("start confirm functoin");
    console.log(data);
    debugger;
    var header = tdg.error_message.message("CID_PORTAL");
    var msg_btn_ok = tdg.error_message.message("BTN_IS_MY_COMPANY");
    var msg_btn_cancel = tdg.error_message.message("BTN_IS_NOT_MY_COMPANY");
    debugger;
    data.address.AddressLine2Text = (data.address.AddressLine2Text == null ? "" : data.address.AddressLine2Text);
    debugger;
    data.address.AddressLine3Text = (data.address.AddressLine3Text == null ? "" : data.address.AddressLine3Text);

    var text_middle = "";
    if (data.cid_has_cra_bn == 1) {
        text_middle = `
                    <p>
                    <label for="cid_crabusinessnumber" class="field-label">CRA Business Number</label>
                    <input type="text" readonly class="text form-control" id="cid_crabusinessnumber" style="width:100%" value="${data.cid_crabusinessnumber}">
	                `;
    }
    else {
        //var list = $("#cid_reasonfornobnnumber")[0].options;
        //var index1 = parseInt(data.cid_reasonfornobnnumber) + 1;
        //var cid_reasonfornobnnumber = $("#cid_reasonfornobnnumber option:selected").text();
        var cid_reasonfornobnnumber = data.cid_reasonfornobnnumber;
        text_middle = `
                    <p>
                    <label for="cid_reasonfornobnnumber" class="field-label">Reason for No CRA Business Number</label>
                    <input type="text" readonly class="text form-control" id="cid_reasonfornobnnumber" style="width:100%" value="${cid_reasonfornobnnumber}">
	                `;
        if (data.cid_reasonfornobnnumber == 3) {
            text_middle += `
                    <p>
                    <label for="cid_reasonfornobnnumber_other" class="field-label">Further Details Regarding No CRA Business Number</label>
                    <input type="text" readonly class="text form-control" id="cid_reasonfornobnnumber_other" style="width:100%" value="${data.cid_reasonfornobnnumber_other}">
	                `;
        }
    }

    var invitation_msg = "";
    if (data.invitation_ind) {
        invitation_msg = tdg.error_message.message("m000033");
        invitation_msg = invitation_msg.replaceAll("{0}", data.cid_legalname);
    }
    else {
        invitation_msg = (data.cid_has_cra_bn == 1 ? "m000041" : "m000042");
        invitation_msg = tdg.error_message.message(invitation_msg);
        if (data.cid_has_cra_bn == 1) {
            invitation_msg = invitation_msg.replaceAll("{0}", data.cid_crabusinessnumber);
        }
        else {
            invitation_msg = invitation_msg.replaceAll("{0}", data.cid_legalname);
        }
    }
    var text1 = `
                    <section class="wb-lbx modal-dialog modal-content overlay-def" id="myModal">
	                <header class="modal-header">
	                <h2 class="modal-title">${header}</h2>
	                </header>
	                <div class="modal-body" >
                    <p>
                    <b>${invitation_msg}</b><hr>
                    <p>
                    <label for="cid_legalname" class="field-label">Legal Name</label>
                    <input type="text" readonly class="text form-control" id="cid_legalname" style="width:100%" value="${data.cid_legalname}">
                    <p>
                    <label for="cid_operatingname" class="field-label">Operating Name</label>
                    <input type="text" readonly class="text form-control" id="cid_operatingname" style="width:100%" value="${data.cid_operatingname}">
                    ` +
        text_middle +
        `
                    <p>
                    <label for="address1_line1" class="field-label">Street 1</label>
                    <input type="text" readonly class="text form-control" id="address1_line1" style="width:100%" value="${data.address.AddressLine1Text}">
                    <p>
                    <label for="address1_line2" class="field-label">Street 2</label>
                    <input type="text" readonly class="text form-control" id="address1_line2" style="width:100%" value="${data.address.AddressLine2Text}">
                    <p>
                    <label for="address1_line3" class="field-label">Street 3</label>
                    <input type="text" readonly class="text form-control" id="address1_line3" style="width:100%" value="${data.address.AddressLine3Text}">
                    <p>
                    <label for="address1_city" class="field-label">City</label>
                    <input type="text" readonly class="text form-control" id="address1_city" style="width:100%" value="${data.address.CityName}">
                    <p>
                    <label for="address1_stateorprovince" class="field-label">Province / Territory</label>
                    <input type="text" readonly class="text form-control" id="address1_stateorprovince" style="width:100%" value="${data.address.ProvinceStateCode}">
                    <p>
                    <label for="address1_postalcode" class="field-label">Postal Code</label>
                    <input type="text" readonly class="text form-control" id="address1_postalcode" style="width:100%" value="${data.address.PostalZipCode}">
	                </div>
	                <div class="modal-footer" style="text-align: left;">
                    <label for="opt_confirm" class="field-label">Confirmation that this is your Company:</label>
                    <p><br>
	                <button id="btn_ok" type="button" class="pull-left btn btn-primary button next submit-btn">${msg_btn_ok}</button>
	                <button id="btn_cancel" type="button" class="pull-left btn btn-primary button next submit-btn" data-dismiss="modal">${msg_btn_cancel}</button>
	                </section>
	                `;
    $(text1).appendTo('body');

    $("#cid_legalname").focus();

    $("#myModal").css('top', '1%');
    $("#myModal").css('left', '40%');
    $("#myModal").css('position', 'fixed');
    $("#myModal").css('z-index', '9999');

    $("#btn_ok").click(function () {
        $("#myModal").remove();
        handler(true);
    });

    //Pass false to callback function
    $("#btn_cancel").click(function () {
        //handler(lse);
        $("#myModal").remove();
        handler(false);
    });
}
