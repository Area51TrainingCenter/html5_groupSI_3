$("document").ready(function(){



	$(".banners").on("init", function(){
		//Se le agrega la clase "grande" al h1 del slide visible
		$(".slick-slide.slick-active h1").addClass("grande");
	})

	$(".banners").on("afterChange", function(){
		//Se le agrega la clase "grande" al h1 del slide visible
		$(".slick-slide.slick-active h1").removeClass("salida crecerAncho");
		$(".slick-slide.slick-active h1").addClass("grande");

		$(".slick-slide.slick-active h1").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
              	$(".slick-slide.slick-active h1").addClass("crecerAncho");
  		});
		//$("h1").addClass("grande");
	})

	$(".banners").on("beforeChange", function(){
		//Se le quita la clase "grande" al h1 del slide visible
		$(".slick-slide.slick-active h1").addClass("salida");
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