


function mostrar()
{
var horaIngresada;
var horaIngresadaParseada;

horaIngresada = document.getElementById("txtIdHora").value;
horaIngresadaParseada = parseInt(horaIngresada);

	switch (horaIngresadaParseada) 
	{
		case 7:

			alert ("Es de mañana.")
			break;

		case 8:

			alert ("Es de mañana.")
			break;

		case 9:

			alert ("Es de mañana.")
			break;

		case 10:

			alert ("Es de mañana.")
			break;
	
		case 11:

			alert ("Es de mañana.")
			break;

		default:
			alert ("No es de mañana.")
			break;
	}

}