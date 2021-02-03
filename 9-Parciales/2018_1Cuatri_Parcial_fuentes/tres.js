function mostrar()
{

var precio;
var porcentaje;
var precioParseado;
var porcentajeParseado;
var resultadoTotal;

precio = prompt("Ingrese el precio");
porcentaje = prompt("Ingrese el porcentaje de descuento");

precioParseado = parseInt(precio);
porcentajeParseado = parseInt(porcentaje);

porcentajeTotal = (precioParseado*porcentajeParseado)/100;
resultadoTotal = precioParseado - porcentajeTotal;


document.getElementById("elPrecioFinal").value = resultadoTotal;

}
