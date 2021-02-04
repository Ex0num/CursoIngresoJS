/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

      var sueldo;
	 var sueldoParseado;
      var sueldoAumentado;
      var aumento;

      aumento = 0.1;
      sueldo = document.getElementById("txtIdSueldo").value;
      sueldoParseado = parseInt(sueldo);
      sueldoAumentado = (sueldoParseado * aumento)+sueldoParseado;

	 document.getElementById("txtIdResultado").value = sueldoAumentado;
	 
}
