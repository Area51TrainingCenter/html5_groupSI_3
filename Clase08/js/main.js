$("document").ready(function(){

	$(".banners").slick(
		{
			arrows: true,
			dots: true,
			autoplay: true,
			autoplaySpeed: 3000
		}
	);

	$(".banners").on("afterChange", function(){
		$("h1").addClass("grande");
	})

	

})