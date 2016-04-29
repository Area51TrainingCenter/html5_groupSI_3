$("document").ready(function(){



	$(".banners").on("init", function(){
		//Se le agrega la clase "grande" al h1 del slide visible
		$(".slick-slide.slick-active h1").addClass("animated slideInLeft grande");
	})

	$(".banners").on("afterChange", function(slick, currentSlide){
		//Se le agrega la clase "grande" al h1 del slide visible
		alert(currentSlide.currentSlide);
		if(currentSlide.currentSlide==0) {
			$(".slick-slide.slick-active h1").addClass("animated slideInLeft grande");
		} else {
			$(".slick-slide.slick-active h1").addClass("animated slideInRight grande");			
		}
		
	})

	$(".banners").on("beforeChange", function(){
		//Se le quita la clase "grande" al h1 del slide visible
		$(".slick-slide.slick-active h1").removeClass("animated slideInLeft slideInRight grande");
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