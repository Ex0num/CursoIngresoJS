function mostrar()
{

    var numeroRandom;

    numeroRandom = ( Math.random() * 100 );
    numeroRandomParseado = parseInt(numeroRandom);

    if ( numeroRandomParseado >= 1 && numeroRandomParseado <= 10 )
    alert ("Su número aleatorio es de "+numeroRandomParseado);	
    
}