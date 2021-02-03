/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

	var txtIdNumeroUno;
	var txtIdNumeroDos;
	var numeroUnoParseado;
	var numeroDosParseado;
	var resultadodesuma;

	txtIdNumeroUno = document.getElementById("txtIdNumeroUno").value;
	txtIdNumeroDos = document.getElementById("txtIdNumeroDos").value;
    numeroUnoParseado = parseInt(txtIdNumeroUno);
	numeroDosParseado = parseInt(txtIdNumeroDos);
	resultadodesuma = numeroUnoParseado+numeroDosParseado;

	alert("La suma de sus numeros "+numeroUnoParseado+" + "+numeroDosParseado+" es igual a "+resultadodesuma);

}

function restar()
{
	
	var txtIdNumeroUno;
	var txtIdNumeroDos;
	var numeroUnoParseado;
	var numeroDosParseado;
	var resultadodeResta;

	txtIdNumeroUno = document.getElementById("txtIdNumeroUno").value;
	txtIdNumeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroUnoParseado = parseInt(txtIdNumeroUno);
	numeroDosParseado = parseInt(txtIdNumeroDos);
	resultadodeResta = numeroUnoParseado - numeroDosParseado;

	alert("La resta de sus numeros "+numeroUnoParseado+" - "+numeroDosParseado+" es igual a "+resultadodeResta);
	
}

function multiplicar()
{ 
	
	var txtIdNumeroUno;
	var txtIdNumeroDos;
	var numeroUnoParseado;
	var numeroDosParseado;
	var resultadoMultiplicacion;

	txtIdNumeroUno = document.getElementById("txtIdNumeroUno").value;
	txtIdNumeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroUnoParseado = parseInt(txtIdNumeroUno);
	numeroDosParseado = parseInt(txtIdNumeroDos);
	resultadoMultiplicacion = numeroUnoParseado * numeroDosParseado;

	alert("La multiplicación de sus numeros "+numeroUnoParseado+" x "+numeroDosParseado+" es igual a "+resultadoMultiplicacion);

}

function dividir()
{
	
	var txtIdNumeroUno;
	var txtIdNumeroDos;
	var numeroUnoParseado;
	var numeroDosParseado;
	var resultadoDivision;

	txtIdNumeroUno = document.getElementById("txtIdNumeroUno").value;
	txtIdNumeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroUnoParseado = parseInt(txtIdNumeroUno);
	numeroDosParseado = parseInt(txtIdNumeroDos);
	resultadoDivision = numeroUnoParseado / numeroDosParseado;

	alert("La división de sus numeros "+numeroUnoParseado+" / "+numeroDosParseado+" es igual a "+resultadoDivision);
	
}

