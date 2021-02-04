/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    
    var numeroUno;
    var numeroDos;
    var numeroTres;
    var numeroUnoParseado;
    var numeroDosParseado;
    var numeroTresParseado;
    var sumaDeNumeros;

    numeroUno = document.getElementById("txtIdPrecioUno").value;
    numeroDos = document.getElementById("txtIdPrecioDos").value;
    numeroTres = document.getElementById("txtIdPrecioTres").value;

    numeroUnoParseado = parseInt(numeroUno);
    numeroDosParseado = parseInt(numeroDos);
    numeroTresParseado = parseInt(numeroTres);

    sumaDeNumeros = numeroUnoParseado + numeroDosParseado + numeroTresParseado;

    alert("La suma de sus numeros "+numeroUnoParseado+" + "+numeroDosParseado+" + "+numeroTresParseado+" es igual a "+sumaDeNumeros);

}
function Promedio () 
{
    
    var numeroUno;
    var numeroDos;
    var numeroTres;
    var numeroUnoParseado;
    var numeroDosParseado;
    var numeroTresParseado;
    var promedioDeNumeros;

    numeroUno = document.getElementById("txtIdPrecioUno").value;
    numeroDos = document.getElementById("txtIdPrecioDos").value;
    numeroTres = document.getElementById("txtIdPrecioTres").value;

    numeroUnoParseado = parseInt(numeroUno);
    numeroDosParseado = parseInt(numeroDos);
    numeroTresParseado = parseInt(numeroTres);

    promedioDeNumeros = (numeroUnoParseado+numeroDosParseado+numeroTresParseado) / 3;

    alert ("El promedio de sus numeros "+numeroUnoParseado+" + "+numeroDosParseado+" + "+numeroTresParseado+" es igual a "+promedioDeNumeros);

}
function PrecioFinal () 
{
    
    var numeroUno;
    var numeroDos;
    var numeroTres;
    var numeroUnoParseado;
    var numeroDosParseado;
    var numeroTresParseado;
    var sumaDeNumeros;
    var valordelIva;
    var totalSumadeIva;

    numeroUno = document.getElementById("txtIdPrecioUno").value;
    numeroDos = document.getElementById("txtIdPrecioDos").value;
    numeroTres = document.getElementById("txtIdPrecioTres").value;

    numeroUnoParseado = parseInt(numeroUno);
    numeroDosParseado = parseInt(numeroDos);
    numeroTresParseado = parseInt(numeroTres);

    valordelIva = 0.21;
    sumaDeNumeros = numeroUnoParseado + numeroDosParseado + numeroTresParseado;
    totalSumadeIva = sumaDeNumeros + (sumaDeNumeros * valordelIva);

    alert ("La suma y el valor final de sus numeros "+numeroUnoParseado+" + "+numeroDosParseado+" + "+numeroTresParseado+" con el aumento del 21% IVA es de "+totalSumadeIva);

}