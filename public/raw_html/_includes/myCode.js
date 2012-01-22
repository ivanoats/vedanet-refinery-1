jQuery(document).ready(function() { 
	var adjustheight = 0;
	var moreText = "Read More +";
	var lessText = "Show Less -";
	$(".more-less .more-block").css('height', adjustheight).css('overflow', 'hidden');
	$(".more-less").append('<p class="more-less"><a href="#" class="adjust"></a></p>');
	$("a.adjust").text(moreText);
	$(".adjust").toggle(function() {
		$(this).parents("div:first").find(".more-block").css('height', 'auto').css('overflow', 'visible');
		// Hide the [...] when expanded
		$(this).parents("div:first").find("p.continued").css('display', 'none');
		$(this).text(lessText);
	}, function() {
		$(this).parents("div:first").find(".more-block").css('height', adjustheight).css('overflow', 'hidden');
		$(this).parents("div:first").find("p.continued").css('display', 'block');
		$(this).text(moreText);
		});
	$(".feature-block:first").addClass("first");
	$(".featured:last").addClass("last");
	});