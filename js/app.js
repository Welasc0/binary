
/* smooth scroll */
$("[data-scroll]").on("click", function(event)
{
	event.preventDefault();

	var $this = $(this),
		blockId = $this.data('scroll'),
		blockOffset = $(blockId).offset().top;
		$("#nav a").removeClass("active");
		$this.addClass("active");

	$("html, body").animate({
		scrollTop: blockOffset
	}, 1000);
});

/* burger */
$("#nav_toggle").on("click", function(event) {
	event.preventDefault();

	$(this).toggleClass("active");
	$("#nav").toggleClass("active");
});
