$(document).ready(function() {

    $('#boton1').on('click', function() {
        $('#salida_jquery').empty();
        $('#salida_jquery').append('<p>Origen de la imagen: ' + $('#imagen_persona').attr("src") + '</p>');
        $('#salida_jquery').append('<p>Alto de la imagen: ' + $('#imagen_persona').height() + '</p>');
        $('#salida_jquery').append('<p>Ancho de la imagen: ' + $('#imagen_persona').width() + '</p>');
    });

    $('#boton2').on('click', function() {
        $('#sede').css('color', 'red');
    });

    $('#boton3').on('click', function() {
        $('header').slideUp(1500, function() {$('#imagen_persona').css('opacity', 0.3);});
        $('header').slideDown(1500);
    });

    $('#boton4').on('click', function() {
        $('#imagen_resultado').css({'border': '5px solid red', 'border-radius': '10px'});
    });

});