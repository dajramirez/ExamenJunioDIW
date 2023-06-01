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

    $('#boton4').on('click', function() {
        $('#imagen_resultado').css('border: 10px solid red; border-radius: 10px');
    });

});