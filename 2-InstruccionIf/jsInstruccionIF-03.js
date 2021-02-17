function mostrar()
{
	//tomo la edad  
	
	var edad;
	var edadParseada;
	
	edad = document.getElementById("txtIdEdad").value;
	edadParseada = parseInt(edad);

	if (edad > 17)
	{ 
		alert ("Usted es mayor de edad");
	}

	else 
	{
		alert ("Usted es menor de edad");
	}
	
	
	

}//FIN DE LA FUNCIÓN