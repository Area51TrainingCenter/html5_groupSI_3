$("document").ready(function(){

	$(".banners").slick(
			{
				dots: true,
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
					{
						breakpoint: 1000,
						settings: {
							dots: false,
							arrows: false,
							slidesToShow: 2
						}
					},
					{
						breakpoint: 450,
						settings: {
							dots: false,
							arrows: false,
							slidesToShow: 1
						}
					}
				]
			}
	);

})