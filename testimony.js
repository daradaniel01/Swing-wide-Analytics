(function($) {
	
	"use strict";
	
	// Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			animateOut: 'slideOutDown',
		    animateIn: 'zoomIn',
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 300,
			autoplay: 7000,
			navText: [ '<span class="arrow-left"></span>', '<span class="arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});  		
	}
	
})(window.jQuery);

// filter using javascript
$(document).ready(function () {
	$(".filter-item").click(function () {
	  const value = $(this).attr("data-filter");
	  if (value == "all") {
		$(".post").show("1000");
	  } else {
		$(".post")
		  .not("." + value)
		  .hide("1000");
		$(".post")
		  .filter("." + value)
		  .show("1000");
	  }
	});
  });