function mostrar()
{
	
	var edad;
	var edadParseada;
	var edadConsigna;

    edadConsigna = 15;
	edad = document.getElementById("txtIdEdad").value;
    edadParseada = parseInt(edad);

	if ( edadParseada == edadConsigna)
	{ 
		alert ("Niña bonita");
	}
	
}