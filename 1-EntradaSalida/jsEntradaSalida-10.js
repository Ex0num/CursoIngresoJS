/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	 var importe;
	 var importeParseado;
	 var importeDescontado;

     importe = document.getElementById("txtIdImporte").value;
     importeParseado = parseInt(importe);
     importeDescontado = importeParseado - (importeParseado * 0.25);

	 document.getElementById("txtIdResultado").value = importeDescontado;
	 
}
