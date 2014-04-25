

$(window).bind("hashchange", function() {
	$('.panel').fadeOut();
	$(window.location.hash).fadeIn();
	});