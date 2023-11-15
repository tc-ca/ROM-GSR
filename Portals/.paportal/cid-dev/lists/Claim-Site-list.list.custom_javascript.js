//
// Entity List-Claim Site list.js
//

$(document).ready(function () {
    debugger;

    $(".entitylist.entity-grid").on("loaded", function () {

    // $(this).children(".view-grid").append('<tr><td class="data"></td><td class="data"></td><td class="data"></td><td><button class="save">Save</button><button class="edit">Edit</button> <button class="delete">Delete</button></td></tr>'); 
    $(this).children(".view-grid").find("tr").each(function (){
        // do something with each row
        $(this).append('<tr><td class="data"></td><td class="data"></td><td class="data"></td><td><button class="save" onclick="alert("changed123")">Save</button></td></tr>'); 
    });

    $(this).children(".view-grid").find("td").each(function (){
        // do something with each row
    });

    $(this).children(".view-grid").find('td[data-attribute="cid_siteclaim"]').each(function (i, e){
        var  value = $(this).data(value);
        alert(value.value)
        //alert('15');
        /*$(this).append( '<select>' +        
        '<option value="1">My site Active</option>'+
        '<option value="2">My Site Not Active</option>'+
        '<option value="3">Not My Site</option>' +
        '</select>');*/
        $(this).attr('contenteditable','true');

        //var value = $(this).data(value);
       
        //$(this).attr('contenteditable','true');
   
        //  $(this).css("background-color", "white");
        value = $(this).data(value);
        alert(value.value);
        /*  $(this).append( '<select>' +        
        '<option value="0">My site Active</option>'+
        '<option value="1">My Site Not Active</option>'+
        '<option value="2">Not My Site</option>' +
        '</select>');*/
        $(this).onchange(
            alert("changed123")          
        );
    }
    );

    //Add the Options to the DropDownList.
           
    });
});

updatesiteclaim()
{
    alert('button clicked');
}