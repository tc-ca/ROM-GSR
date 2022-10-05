//
// Web Page-In Year Site Page
//

$(document).ready(function () {
    debugger;

    $('#loader').show();


        //$("a[href$='activate-site']").css('background-color', 'red');
        //$("a[href$='activate-site']").hide();



    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('id')) {
        var siteId = urlParams.get('id');
        var operationId = GetHOTIOperation(siteId);
        if (!urlParams.has('operationid')) {
            urlParams.set('operationid', operationId);
            window.location.search = urlParams;
        } else {
            $(".list-group-item").each(function () {
                var _href = $(this).attr("href");
                if (!_href.includes("?id="))
                    $(this).attr("href", _href + '?id=' + siteId);
            });
        }
    }
    $('#loader').hide();
});