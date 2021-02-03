
function mostrar()
{

    var ancho;
    var largo;
    var anchoParseado;
    var largoParseado;
    var perimetro;
    var perimetroParseado;

    ancho = prompt("Ingrese el ancho de su rectangulo");
    largo = prompt("Ingrese el largo de su rectangulo");

    anchoParseado = parseInt(ancho);
    largoParseado = parseInt(largo);
    
    perimetro = 2 * (anchoParseado+largoParseado);
    perimetroParseado = parseInt(perimetro);

    alert ("El perímetro de las medidas de su rectangulo es de "+perimetroParseado);

}
