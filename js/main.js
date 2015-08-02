$(document).ready(function () {
	$('#photo_search_form').submit(function(){
		var searchQuery = $('#search_query').val();
			
		var flickrAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
		var flickrOpts = {
			tags: searchQuery,
			format: 'json'
		};
		var displayPhotos = function (data) {
			var photoItem = '';
			$.each( data.items, function (i, photo) {
				photoItem += '<div class="photo-item">';
					photoItem += '<a href="' + photo.link + '">';
						photoItem += '<img src="' + photo.media.m + '" width="100%">';
					photoItem += '</a>'
				photoItem += '</div>';
			});
			$('#photo_container').html(photoItem);
		}
		$.getJSON(flickrAPI, flickrOpts, displayPhotos);
		return false;
	});
});