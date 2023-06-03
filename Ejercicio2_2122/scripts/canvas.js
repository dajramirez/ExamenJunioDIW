// este fichero tendrás que incorporarlo al desarrollo.
// en el tenemos una zona de código que tendrás que completar para que se muestre lo que se pide en el ejercicio.


// función para inicializar el contexto.
function iniciaCanvas(idCanvas) {
    var elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        var contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
    return false;
}

// Este código hace referencia a un objeto canvas con identficador "canvas_inicio"
window.onload = function() {
    ctx_iniciar = iniciaCanvas("canvas_inicio");

    //comprobamos el contexto
    if (ctx_iniciar) {

        ctx_iniciar.beginPath();
        ctx_iniciar.lineWidth = 5;
        ctx_iniciar.moveTo(5,5);
        ctx_iniciar.lineTo(45,25);
        ctx_iniciar.lineTo(5,45);
        ctx_iniciar.closePath();

        ctx_iniciar.fillStyle = "green";
        ctx_iniciar.fill();

        ctx_iniciar.strokeStyle = "red";
        ctx_iniciar.stroke();

        ctx_iniciar.canvas.addEventListener("click", function () {
            document.getElementById("video").play();
        });
    }

}

$(document).ready(function () {

    $("#opcion1").on("click", function () {
        $(".imagen_ejercicio").css("border", "10px solid blue");
        $("#cambios_aplicados").append("Opción 1 ejecutada<br>");
    });

    $("#opcion2").on("click", function () {
        $(".imagen_ejercicio").css("filter", "grayscale(100%)");
        $("#cambios_aplicados").append("Opción 2 ejecutada<br>");
    });

    $("#opcion3").on("click", function () {
        $(".imagen_ejercicio").css({"width": "150px", "height": "80px"});
        $("#cambios_aplicados").append("Opción 3 ejecutada<br>");
    });

    $("#opcion4").on("click", function () {
        $(".imagen_ejercicio").fadeOut(function () {
            $(".imagen_ejercicio").css("filter", "invert(100%)");});
        $(".imagen_ejercicio").fadeIn();
        $("#cambios_aplicados").append("Opción 4 ejecutada<br>");
    });

});

