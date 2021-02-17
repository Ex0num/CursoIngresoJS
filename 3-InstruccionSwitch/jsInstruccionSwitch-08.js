function mostrar()
{
	var destinoIngresado 
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) 
	{
		case "Bariloche":
			
			alert ("Frío.")
			break;
	
		case "Cataratas":

			alert ("Calor.")
			break;

		case "Mar del plata":

			alert ("Calor.")
			break;

		case "Ushuaia":
			
			alert ("Frío.")
			break;

	}
}