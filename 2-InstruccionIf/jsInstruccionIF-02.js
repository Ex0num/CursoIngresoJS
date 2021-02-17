function mostrar()
{
	
	var edad;
	var edadParseada;

	edad = document.getElementById("txtIdEdad").value;
	edadParseada = parseInt(edad);
	
	if(edad > 17)
	{
	alert ("Es mayor de edad");
	}

}//FIN DE LA FUNCIÓN