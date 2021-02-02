/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;


	 nombre = txtIdNombre.value;

	 edad = txtIdEdad.value;

	 //es importante usar el + para concatenar los mensajes con 
	 // las variables de nombre y de edad.
	 alert("Usted se llama "+nombre+" y tiene "+edad+" años");

}

