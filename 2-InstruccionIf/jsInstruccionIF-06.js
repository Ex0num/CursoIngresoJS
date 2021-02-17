function mostrar() 
{
	var edad;
	var edadParseada;

	edad = document.getElementById("txtIdEdad").value;
	edadParseada = parseInt(edad);
	
	if (edad > 17) 
	{
		alert("Usted es mayor de edad");
	}

	else
	{
	if (edad > 12 && edad < 18) 
	 {
		alert("Usted es un adolescente");
	 }

	if (edad < 13) 
	 {
		alert("Usted es un niño");
	 }
	}
}