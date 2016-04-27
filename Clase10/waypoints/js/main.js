$("document").ready(function(){

	$("#posicion").waypoint(
		function(direccion){
			console.log(direccion);
			//$("body").css("backgroundColor", "red");
			if(direccion=="down") {
				$("img").addClass("animated bounce superior");	
			} else {
				$("img").removeClass("animated bounce superior");
			}
			

		},
		{
			offset: "60%"
		}
	);

})