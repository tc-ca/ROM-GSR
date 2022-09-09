//
// Basic Form-ERAP - Create.js
//
var _reload = false;
var _count = 0;

$(document).ready(function () {
    debugger;

    page_setup();

    //when the page is done loading, disable autocomplete on all inputs[text]
    $('input[type="text"]').attr('autocomplete', 'off');

    // insert button
    tdg.c.btn_save_new_setup();
});

$(window).unload(function () {
    debugger;
    if (_reload) {
        var wp = window.parent;
        try {
            //wp.form_refresh();
            wp.location.reload()
        } catch (e) { }
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

if (window.jQuery) {
    (function ($) {
        entityFormClientValidate = function () {
            debugger;
            tdg.c.message_panel_clear();
            var validation = true;

            validation = check_erap_from_other_company();
        
            console.log("validation result");
            console.log (validation);

            return validation;
        }

        //webFormClientValidate = function () {
        //    debugger;
        //    var validation = true;
        //    return validation;
        //}
    }(window.jQuery));
}

// call back from tdg.c
function btn_save_new_onclick() {
    var value = false;

    tdg.c.error_message_clear();
    if (typeof entityFormClientValidate === 'function') {
        if (entityFormClientValidate()) {
            if (typeof Page_ClientValidate === 'function') {
                value = Page_ClientValidate('');
            }
        }
    };

    debugger;

    if (!value) {
        return;
    }

    // insert
    var parent_id = '{{user.parentcustomerid.Id}}';
    var contact_id = '{{user.id}}';
    var cid_erapid = $("#cid_erapid").val();

    tdg.root.cid_companyeraps_insert(parent_id, cid_erapid, contact_id, false);
}


 

async function check_erap_from_other_company() {
  
   
    var msg = "hello Test 444";
    var val = false;
     var  answered = false ;
  
     await tdg.c.dialog_YN(msg, (ans) => {
     
      //return new  Promise((resolve ,reject)=>{
      var answer = ans;
      console.log ("inherited answer " + answer);
 
        if ( answer) {

          
          //  resolve (true);
          
            answered = true;
            return true;
        }
        else {
           
            return false;
          //  reject(false);
            answered = true ;
        }
      
     // });
    });
    //.then( alert ("test"));
    console.log  (ans);
    alert ("test");
  
   

    alert("xxx "  + val);
    return val;
}

 async function check_erap_from_other_company2() {
    debugger;
    var root_organization_id = '{{account.root_organization_id}}';
    var value = true;
    var cid_erapid = $("#cid_erapid").val();
    var data =
        //await 
        tdg.root.erap_get_by_root_name(cid_erapid);
    console.log("data length " + data.length);
    debugger;
    console.log("Before data display");

    console.log(data);
    if (data.length > 0)
    //(data != null) 
    {
        var msg = tdg.error_message.message("m000019");	// ERAP {0} is assigned to another Company. Are you sure you want to complete the add?
        msg = msg.replace("{0}", cid_erapid);
        console.log("before dialog");
        console.log(data.length);

             var  answered = false ;
    await tdg.c.dialog_YN(msg, (ans) => {
  
       return new  Promise((resolve ,reject)=>{
          
              setInterval(function(){

        if ( ans) {

         
            resolve (true);
           
            return true;
            answered = true;
        }
        else {
            return false;
            reject(false);
            answered = true ;
        }
       	}, 2000);
			
              
       
      });
    })

        console.log(value);

        value = false;
    }
    return value;
}

function form_clear() {
    debugger;
    $("#cid_erapid").val("");
}

function success_cb() {
    debugger;

    _count += 1;
    msg = tdg.error_message.message("m000005"); // Record added
    msg = msg.replace("{0}", _count);
    tdg.c.message_panel_set("EntityFormControl", msg);

    form_clear();

    _reload = true;
}

function error_cb(msg) {
    debugger;

    var selected_language = '{{website.selected_language.code}}';
    msg = tdg.c.text_language(msg, selected_language)
    tdg.c.message_panel_set("EntityFormControl", msg);
}

function confirmDialog(message, handler)
{

$(`<section class="wb-lbx modal-dialog modal-content overlay-def" id="myModal">
    <header class="modal-header">
        <h2 class="modal-title">CID Portal</h2>
    </header>
    <div class="modal-body">
        ${message}

    </div>
  <div class="modal-footer">
     <button id="btnYes" type="button" class="btn btn-sm btn-primary pull-left popup-modal-dismiss">Yes</button>
    <button  id="btnNo" type="button" class="btn btn-sm btn-primary pull-left popup-modal-dismiss" data-dismiss="modal">No</button>

</section>
`).appendTo('body');

$('#btnNo').focus();


     $("#myModal").css('top' , '15%');
        $("#myModal").css('left' , '40%');
        $("#myModal").css('position', 'fixed');
        $("#myModal").css('z-index', '9999');


 $("#btnYes").click(function () {

           // handler(true);
          //  $("#myModal").modal("hide");
          $("#myModal").remove();
           handler(true);
        });

        //Pass false to callback function
        $("#btnNo").click(function () {

            //handler(lse);
            $("#myModal").remove();
             handler(false);
        });



}
