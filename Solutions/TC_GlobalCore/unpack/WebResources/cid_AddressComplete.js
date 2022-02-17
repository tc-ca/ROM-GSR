var AddressComplete = {
    _Key: "PN65-ZN36-RC19-ZB47",
    _MaxResults: 7,
    _MaxSuggestions: 7,
    _SearchFor: 'Everything',

    GetId: function (index)
    {
        //debugger;
        var address_list_id = document.getElementById('address_list_id').value;
        var list = address_list_id.split(";");
        return list[index];
    },

    Find: function (SearchTerm, LanguagePreference)
    {
        //debugger;

        this.removeOptions('address_list', false);
        document.getElementById('address_list_id').value = "";

        var LastId = '';
        var Country = '';
        var url = 'https://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Find/v2.10/json3.ws';

        var params = '';
                    params += "&Key=" + encodeURIComponent(this._Key);
                    params += "&SearchTerm=" + encodeURIComponent(SearchTerm);
                    params += "&LastId=" + encodeURIComponent(LastId);
                    params += "&SearchFor=" + encodeURIComponent(this._SearchFor);
                    params += "&Country=" + encodeURIComponent(Country);
                    params += "&LanguagePreference=" + encodeURIComponent(LanguagePreference);
                    params += "&MaxSuggestions=" + encodeURIComponent(this._MaxSuggestions);
                    params += "&MaxResults=" + encodeURIComponent(this._MaxResults);

        var http = new XMLHttpRequest();
        http.open('POST', url, true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.onreadystatechange = function ()
        {
            if (http.readyState == 4 && http.status == 200)
            {
                var response = JSON.parse(http.responseText);

                // Test for an error
                if (response.Items.length == 1 && typeof (response.Items[0].Error) != "undefined")
                {
                    // Show the error message
                    // alert(response.Items[0].Description);
                }
                else
                {
                    // Check if there were any items found
                    if (response.Items.length == 0)
                    {
                        //alert("Sorry, there were no results");
                    }
                    else
                    {
                        debugger;
                        var items = response.Items;
                        var address_list = document.getElementById('address_list');
                        var address_list_id = "";
                        var address_list_next = "";

                        this._Items = [];

                        for (i = 0; i < items.length; i++)
                        {
                            var item = items[i];
                            var value = item.Id;
                            var next = item.Next;
                            var text = item.Text + ', ' + item.Description;

                            address_list.options[i].value = text;
                            address_list_id += value + ";";
                            address_list_next += next + ";";

                            //address_list_id.add(new Option(text, value));
                        }
                        document.getElementById('address_list_id').value = address_list_id;
                        document.getElementById('address_list_next').value = address_list_next;
                    }
                }
            }
        }
        
        try {
            http.send(params);
        } catch (e) {
            debugger;
        }
    },

    Retrieve: function (Id)
    {
        //debugger;

        var url = 'https://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Retrieve/v2.11/json3.ws';
        var params = '';
                params += "&Key=" + encodeURIComponent(this._Key);
        params += "&Id=" + encodeURIComponent(Id);

        var http = new XMLHttpRequest();
        http.open('POST', url, true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.onreadystatechange = function ()
        {
            if (http.readyState == 4 && http.status == 200)
            {
                var response = JSON.parse(http.responseText);
                // Test for an error
                if (response.Items.length == 1 && typeof (response.Items[0].Error) != "undefined") {
                    // Show the error message
                    // alert(response.Items[0].Description);
                }
                else {
                    // Check if there were any items found
                    if (response.Items.length == 0) {
                        // alert("Sorry, there were no results");
                    }
                    else {
                        debugger;
                        AddressComplete.Selected(response.Items);
                    }
                }
            }
        }
        http.send(params);
    },

    removeOptions: function (name, option_ind)
    {
        //debugger;

        var selectElement = document.getElementById(name);
        for (var i =selectElement.options.length - 1; i >= 0; i--) {
            if (option_ind) {
                selectElement.remove(i);
            }
            else {
                selectElement.options[i].value = "";
            }
        }
    },

    getItem: function (field)
    {
        return sessionStorage.getItem(field);
    },

    Selected: function (data)
    {
        debugger;

        var item_e = data[0]; // english

        sessionStorage.setItem("POBoxNumber", item_e.POBoxNumber);
        sessionStorage.setItem("Line1", item_e.Line1);
        sessionStorage.setItem("Line2", item_e.Line2);
        sessionStorage.setItem("Line3", item_e.Line3);
        sessionStorage.setItem("City", item_e.City);
        sessionStorage.setItem("ProvinceName", item_e.ProvinceName);
        sessionStorage.setItem("PostalCode", item_e.PostalCode);
        sessionStorage.setItem("CountryName", item_e.CountryName);
        sessionStorage.setItem("Label", item_e.Label);

        try {
            // transfer control back to parent form
            //window.parent.Xrm.Page.AddressComplete_Selected;
            //var value = parent.Xrm.Utility.AddressComplete_Selected();
            parent.AddressComplete_Selected();
        } catch (e) {}
    }
}