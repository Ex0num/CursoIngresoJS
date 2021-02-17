/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamp;
    var cantidadLampParseada;
    var valordeLamp;
    var valorDescuento50;
    var valorDescuento40;
    var valorDescuento30;
    var valorDescuento25;
    var valorDescuento20;
    var valorDescuento15;
    var valorDescuento10;
    var precioDescontado;
    var precioSinDescuento;
    var lamparaId;
    var valorDescuento5;
    var precioFinalAumentado;
    
    cantidadLamp = document.getElementById("txtIdCantidad").value;
    cantidadLampParseada = parseInt(cantidadLamp);
    precioSinDescuento = cantidadLampParseada * valordeLamp;
    lamparaId = document.getElementById("Marca").value;
    valorDescuento50 = 0.5; 
    valorDescuento40 = 0.4;
    valorDescuento25 = 0.25;
    valorDescuento20 = 0.2;
    valorDescuento15 = 0.15;
    valorDescuento10 = 0.1;
    valorDescuento5 = 0.05;
    valordeLamp = 35;

if (cantidadLampParseada > 5)
    {
        precioDescontado =  precioSinDescuento - ( precioSinDescuento * valorDescuento50);
        document.getElementById("txtIdprecioDescuento").value = precioDescontado;
    }
else
    {
    if (cantidadLampParseada == 5 && lamparaId == "ArgentinaLuz")
        {
            precioDescontado = precioSinDescuento - ( precioSinDescuento * valorDescuento40);
            document.getElementById("txtIdprecioDescuento").value = precioDescontado;
        }
    if (cantidadLampParseada == 5 && lamparaId != "ArgentinaLuz")
        {
            precioDescontado = precioSinDescuento - ( precioSinDescuento * valorDescuento30);
            document.getElementById("txtIdprecioDescuento").value = precioDescontado;
        }
    if (cantidadLampParseada == 4 && (lamparaId == "ArgentinaLuz" || lamparaId == "FelipeLamparas"))
        {
            precioDescontado = precioSinDescuento - ( precioSinDescuento * valorDescuento25);
            document.getElementById("txtIdprecioDescuento").value = precioDescontado;
        }
    if (cantidadLampParseada == 4 && (lamparaId != "ArgentinaLuz" && lamparaId != "FelipeLamparas"))
        {
            precioDescontado = precioSinDescuento - ( precioSinDescuento * valorDescuento20);
            document.getElementById("txtIdprecioDescuento").value = precioDescontado;
        }
    if (cantidadLampParseada == 3 && lamparaId == "ArgentinaLuz")
        {
            precioDescontado = precioSinDescuento - ( precioSinDescuento * valorDescuento15);
            document.getElementById("txtIdprecioDescuento").value = precioDescontado;
        }
    if (cantidadLampParseada == 3 && lamparaId == "FelipeLamparas")
        {
            precioDescontado = precioSinDescuento - ( precioSinDescuento * valorDescuento10);
            document.getElementById("txtIdprecioDescuento").value = precioDescontado;
        }
    if (cantidadLampParseada == 3 && (lamparaId != "ArgentinaLuz" && lamparaId != "FelipeLamparas"))
        {
            precioDescontado = precioSinDescuento - ( precioSinDescuento * valorDescuento5);
            document.getElementById("txtIdprecioDescuento").value = precioDescontado;
        }
    if  (cantidadLampParseada == 1 || cantidadLampParseada == 2 )
        {
          document.getElementById("txtIdprecioDescuento").value = precioSinDescuento;
        }
    if (cantidadLampParseada <1)
        {
          alert("La cantidad de lámparas que ingresó es inválida.");
        }
    }
if (precioDescontado >= 120 ) 
    {
    var multiplicacionPrecioAumentado;
    multiplicacionPrecioAumentado = (precioDescontado * valorDescuento10);
    precioFinalAumentado = precioDescontado + (precioDescontado * valorDescuento10);
    alert ("IIBB Usted pagó "+precioDescontado+" siendo "+multiplicacionPrecioAumentado+" el impuesto que se pagó. El precio total es de "+precioFinalAumentado);
    }
}

