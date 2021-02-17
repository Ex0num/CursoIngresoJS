function mostrar()
{

    var edad;
	var edadParseada;
	var estado;

	edad = document.getElementById("txtIdEdad").value;
	edadParseada = parseInt(edad);
	estado = document.getElementById("estadoCivil").value;

	if (edad <18 && estado != "Soltero")
	{

	}
   else
   {
	if (edad >17 && estado == "Soltero")
	{
	alert ("Es soltero y no es menor");
	}
   }
  
}