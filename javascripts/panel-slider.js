$(document).ready(function() {
	$("div.panel:not(:first)").hide();
	});

$(window).bind("hashchange", function() {
	$('.panel').hide();
	$(window.location.hash).fadeIn();
	});