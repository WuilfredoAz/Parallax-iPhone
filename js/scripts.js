// Creo un escuchador de eventos a mi ventana
window.addEventListener("scroll", parallax);

// Creamos la funcion del parallax
function parallax(event)
{
    // Log para saber cuanto me he movido en el eje Y
    // console.log(window.scrollY);

    // Guardamos en una variable al contenedor de la imagen
    const $iphone = document.getElementById("iphone");
    // Guardamos en una variable a la mascara
    const $mask = document.getElementById("mask");
    // Guardamos en una variable al titulo
    const $title = document.getElementById("title");

    // $iphone.style.marginTop = window.scrollY + "px";

    // Creo una variable para que haga el calculo de la posicion
    var position = 54 + window.scrollY;
    // Creo una variable para que haga el calculo de la posicion del titulo
    var positionTitle = 250 + (0.80 * window.scrollY);
    // Hacemos que el background position este relacionado con el valor del scroll en el eje Y
    $mask.style.backgroundPosition = "-" + position + "px";
    // Rotacion del iphone
    $iphone.style.transform= "rotate(-" + position * 0.02 + "deg)";
    // Hacemos que el titulo vaya bajando hasta su posicion original
    if(positionTitle <= 700)
    {
        console.log(positionTitle);
        $title.style.transform = "translateY(" + positionTitle +"px)";
    }
}