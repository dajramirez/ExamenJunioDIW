$(document).ready(function() {

    $('#boton1').on('click', function() {
        $('#salida_jquery').append('Origen de la imagen: ' + $('#imagen_persona').src().val());
    });

});