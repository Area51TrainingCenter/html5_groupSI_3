$("document").ready(function(){



	$(".banners").on("init", function(){
		//Se le agrega la clase "grande" al h1 del slide visible
		$(".slick-slide.slick-active h1").addClass("animated slideInLeft grande");
	})

	$(".banners").on("afterChange", function(){
		//Se le agrega la clase "grande" al h1 del slide visible
		$(".slick-slide.slick-active h1").addClass("animated slideInLeft grande");
	})

	$(".banners").on("beforeChange", function(){
		//Se le quita la clase "grande" al h1 del slide visible
		$(".slick-slide.slick-active h1").removeClass("animated slideInLeft grande");
	})

	$(".banners").slick(
		{
			arrows: true,
			dots: true,
			autoplay: true,
			autoplaySpeed: 3000
		}
	);	
	

})