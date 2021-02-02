/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//Declarando la variable datoIngresado
	var datoIngresado;
	
	//Asignando la variable datoIngresado con el dato que se ingrese
	datoIngresado = prompt ("Ingrese el dato");

	 //el getElementById funciona para agarar un elemento x id en este caso lo igualamos al dato ingresado para que 
	 //aparezca en la barrita del Id
    document.getElementById("txtIdNombre").value = datoIngresado;

	
}

