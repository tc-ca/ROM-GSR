$('body').ready(function(){
   $(document).on('change', '#cid_siteactivationmemo', function(){
      alert('Test99');
   });
});

function onTitleChange()

 {

 alert("changed111!!!");

 }

$(document).ready(function () {

    $("#cid_siteactivationmemo").change(onTitleChange);


    var cidSiteStatus = $('#cid_cidsitestatus').find(":selected").text();
    $('#cid_cidsitestatus').hide();
    $('#cid_cidsitestatus_label').hide();

    $("#cid_siteactivationmemo").val('');
    $("#cid_siteactivationmemo").val('');
    $("#cid_issiteattested").prop( "checked", false );

    $("#cid_siteactivationmemo").change(function (e) {
        alert('Test1');
    });	
    $("#cid_siteactivationmemo").change(function(){   // 1st way
        alert('Test2');
    });


    $("#cid_siteactivationmemo").on('change', function(){    // 2nd way
        alert('Test3');
    });

    $("body").on('change', '#cid_siteactivationmemo', function(){    // 3rd way
        alert('Test4');
    });

$("#cid_siteactivationmemo").change(function(){
    alert('Test5');
});


});

if (window.jQuery) {
    (function ($) {
        entityFormClientValidate = function () {
            debugger;

            if($("#cid_issiteattested").prop('checked')){
                return true;
            }
            else{
                var errorMessage = 'You cannot proceed before attesting your site activation, please check the "Attestation" box';  
                $('.validation-summary div').remove();
                var validationSection = $('.validation-summary'); 
				validationSection.append($("<div id='alertMessages' tabindex='0' class='notification alert-danger' role='alert'>" + errorMessage + "</div>")); 
				validationSection.show();
                $('.validation-summary div').focus();  

                return false;
            }
        }
    }(window.jQuery));
}

