/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    
    var temperatura;
    var temperaturaCelParseada;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperaturaFarParseada = parseInt(temperatura);
    temperaturaCelParseada = (temperaturaFarParseada - 32) * 5 / 9;
    temperaturaCelParseadaInt = parseInt(temperaturaCelParseada);

    alert ("La temperatura Fahrenheit "+temperaturaFarParseada+" es igual a "+temperaturaCelParseadaInt+" centígrados");


}

function CentigradosFahrenheit () 
{
    var temperatura;
    var temperaturaCelParseada;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperaturaCelParseada = parseInt(temperatura);
    temperaturaFarParseada = (temperaturaCelParseada * 9 / 5) + 32;
    temperaturaFarParseadaInt = parseInt(temperaturaFarParseada);

    alert ("La temperatura centígrada de "+temperaturaCelParseada+" es igual a "+temperaturaFarParseadaInt+" Fahrenheit");
    
}
