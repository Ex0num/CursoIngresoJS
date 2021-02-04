/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    var largo;
    var ancho;
    var largoParseado;
    var anchoParseado;
    var perimetro;
    var alambreTotal;
    var hilosDeAlambre;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largoParseado = parseInt(largo);
    anchoParseado = parseInt(ancho);
    hilosDeAlambre = 3;

    perimetro = 2 * (largoParseado+anchoParseado);
    alambreTotal = perimetro * hilosDeAlambre;

    alert ("La cantidad de alambre a comprar según sus medidas de anchura: "+anchoParseado+" y de longitud: "+largoParseado+" ,teniendo en cuenta que quiere "+hilosDeAlambre+" hilos de alambre, es igual a "+alambreTotal);

}
function Circulo () 
{
    
    var radio;
    var radioParseado;
    var valordeDiametro;
    var hilosDeAlambre;
    var alambreTotal;

    hilosDeAlambre = 3;
    radio = document.getElementById("txtIdRadio").value;

    radioParseado = parseInt(radio);
    valordeDiametro = radioParseado * 2;
    
    alambreTotal = valordeDiametro * hilosDeAlambre; 

    alert ("La cantidad de alambre a comprar según el radio que ingresó: "+radioParseado+" es igual a "+alambreTotal);

}
function Materiales () 
{
    
    var largo;
    var ancho;
    var largoParseado;
    var anchoParseado;
    var bolsasCementoPorMetro;
    var bolsasCalPorMetro;
    var perimetro;
    var totalBolsasCemento;
    var totalBolsasCal;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largoParseado = parseInt(largo);
    anchoParseado = parseInt(ancho);

    bolsasCementoPorMetro = 2;
    bolsasCalPorMetro = 3;

    perimetro = (largoParseado+anchoParseado) * 2;

    totalBolsasCemento = perimetro * bolsasCementoPorMetro;
    totalBolsasCal = perimetro * bolsasCalPorMetro;

    alert ("La cantidad de bolsas a comprar según sus medidas de anchura: "+anchoParseado+" y de longitud: "+largoParseado+", es igual a "+totalBolsasCemento+" bolsas de cemento y "+totalBolsasCal+" bolsas de cal.");
}