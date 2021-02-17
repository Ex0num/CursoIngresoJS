function mostrar()
{

    var numeroRandom;
    numeroRandom = Math.random() * 10 + 1;
    numeroRandomParseado = parseInt(numeroRandom);
		
    if(numeroRandomParseado >= 9)
    {
	  alert ("Excelente");
    }
    else
      if (numeroRandomParseado > 4)
	  {
	  alert ("Aprobó");
	  }
	  if (numeroRandomParseado <= 4)
	  {
	alert ("Vamos, la próxima se puede...");
	  }  

}