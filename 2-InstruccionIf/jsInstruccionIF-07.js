function mostrar()
{
	
    var edad;
    var edadParseada;
    var estado;

    estado = document.getElementById("estadoCivil").value;
    edad = document.getElementById("txtIdEdad").value;
    edadParseada = parseInt(edad);

    if (edadParseada < 18 && estado != "Soltero")
    {
    alert ("Es muy pequeño para NO ser soltero");
    }

}