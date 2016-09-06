function parseRSS(url, container) {
  $.ajax({
    url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      $(container).html('<h2><a = href="https://www.reddit.com/" target="_blank">'+capitaliseFirstLetter(data.responseData.feed.title)+'</a></h2>');

      $.each(data.responseData.feed.entries, function(key, value){
        var thehtml = '<h3><input type="checkbox" id = "toggle-checkbox" ><a href="'+value.link+'" target="_blank">'+value.title+'</a></h3>';
        $(container).append(thehtml);
      });
	  
	    $('input[type=checkbox]').click(function () { 
			if ($(this).is(':checked')) {
				$(this).siblings().hide();
			} else {
				$(this).siblings().show();
			}
			});
    },
	error: function (error) {
		console.log(error);
	}
  });
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
