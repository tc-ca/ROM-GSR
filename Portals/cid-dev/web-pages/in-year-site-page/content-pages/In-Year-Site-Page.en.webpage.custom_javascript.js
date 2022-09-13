  $(document).ready(function() {
    $('#loader').show();

    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('id')) {
      var siteId = urlParams.get('id');
      var operationId = GetHOTIOperation(siteId);
      if (!urlParams.has('operationid')) {
        urlParams.set('operationid', operationId);
        window.location.search = urlParams;
      } else {
        $(".list-group-item").each(function() {
          var _href = $(this).attr("href");
          if(!_href.includes("?id="))
            $(this).attr("href", _href + '?id=' + siteId);
        });
      }
    }
        $('#loader').hide();
  });