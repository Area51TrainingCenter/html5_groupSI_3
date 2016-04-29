$("document").ready(function(){

	$("#posicion").waypoint(
		function(direccion){
			$("img").addClass("superior animated slideInUp rotateInUpLeft");

		},
		{
			offset: "60%"
		}
	);

	$("h1").waypoint(
		function(direccion) {
			$("article").addClass("subir animated slideInDown");
		},
		{
			offset: "80%"
		}
	)

})