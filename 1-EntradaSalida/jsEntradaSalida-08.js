/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	
var numerodelDividendo;
var numerodelDivisor;
var dividendoParseado;
var divisorParseado;
var resultadoResto;

numerodelDividendo = document.getElementById("txtIdNumeroDividendo").value;
numerodelDivisor = document.getElementById("txtIdNumeroDivisor").value;
dividendoParseado = parseInt(numerodelDividendo);
divisorParseado = parseInt(numerodelDivisor);
resultadoResto = dividendoParseado % divisorParseado;

alert("El resto de la división de los numeros "+dividendoParseado+" y "+divisorParseado+" es "+resultadoResto);

}
