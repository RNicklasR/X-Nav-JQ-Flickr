$(document).ready(function() {



	$("#btn").click(function(){

	var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + 	$("#tag").val() + "&tagmode=any&format=json&jsoncallback=?"

		$("#img").html(""); 
		$.getJSON(flickrAPI, function(data){
				$.each(data.items, function(i,item) {
					$("#img").append("<img src=" + item.media.m + "/>");
			});
		});
	});
});




