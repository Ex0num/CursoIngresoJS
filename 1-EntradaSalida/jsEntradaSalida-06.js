/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numerouno;
	var numerodos;
    var suma;
    var numerounoparseado;
    var numerodosparseado;

	numerouno = document.getElementById("txtIdNumeroUno").value;
	numerodos = document.getElementById("txtIdNumeroDos").value;
	numerounoparseado = parseInt(numerouno);
	numerodosparseado = parseInt(numerodos);
    suma = numerounoparseado+numerodosparseado;
	
	alert("La suma de sus numeros "+numerounoparseado+"+"+numerodosparseado+" es igual a "+suma);

}

