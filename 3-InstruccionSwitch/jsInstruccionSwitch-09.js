function mostrar()
{

	var estacion;
	var destino;
	var precioEstadia;
	var precioFinal;
	var aumentoOdescuento;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	precioEstadia = 15000;



	switch (estacion) 
	{
		case "Invierno":
			
			{	
				if (destino == "Bariloche")
					{
						aumentoOdescuento = 0.20
						precioFinal = precioEstadia + ( precioEstadia * aumentoOdescuento )
						break;
					}

				else
				if (destino == "Cataratas" || destino == "Cordoba") 
					{
						aumentoOdescuento = 0.10
						precioFinal = precioEstadia - (precioEstadia * aumentoOdescuento )
						break;
					}
						else
						if (destino == "Mar del plata") 
						{
							aumentoOdescuento = 0.20
							precioFinal = precioEstadia - (precioEstadia * aumentoOdescuento )
							break;
						}	
			}
		
		case "Verano":
			
			{	
				if (destino == "Bariloche")
					{
						aumentoOdescuento = 0.20
						precioFinal = precioEstadia - ( precioEstadia * aumentoOdescuento )
						break;
					}

				else
				if (destino == "Cataratas" || destino == "Cordoba") 
					{
						aumentoOdescuento = 0.10
						precioFinal = precioEstadia + (precioEstadia * aumentoOdescuento )
						break;
					}
						else
						if (destino == "Mar del plata") 
						{
							aumentoOdescuento = 0.20
							precioFinal = precioEstadia + (precioEstadia * aumentoOdescuento )
							break;
						}	
			}
		
		case "Otoño":
		
			{	
				if (destino == "Bariloche")
					{
						aumentoOdescuento = 0.10
						precioFinal = precioEstadia + ( precioEstadia * aumentoOdescuento )
						break;
					}

				else
				if (destino == "Cataratas") 
					{
						aumentoOdescuento = 0.10
						precioFinal = precioEstadia + (precioEstadia * aumentoOdescuento )
						break;
					}
						else
						if (destino == "Mar del plata") 
						{
							aumentoOdescuento = 0.10
							precioFinal = precioEstadia + (precioEstadia * aumentoOdescuento )
							break;
						}	
							else
							if (destino == "Cordoba") 
							{
								precioFinal = precioEstadia
								break;
							}
			}
		
		case "Primavera":
		
				{	
					if (destino == "Bariloche")
						{
							aumentoOdescuento = 0.10
							precioFinal = precioEstadia + ( precioEstadia * aumentoOdescuento )
							break;
						}
	
					else if (destino == "Cataratas") 
						{
							aumentoOdescuento = 0.10
							precioFinal = precioEstadia + (precioEstadia * aumentoOdescuento )
							break;
						}
							else if (destino == "Mar del plata") 
							{
								aumentoOdescuento = 0.10
								precioFinal = precioEstadia + (precioEstadia * aumentoOdescuento )
								break;
							}	
								else if (destino == "Cordoba") 
								{
									precioFinal = precioEstadia
									break;
								}
				}
	}

	alert ("Su precio final es de "+precioFinal);

}