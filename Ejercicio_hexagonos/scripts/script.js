function iniciaCanvas (idCanvas) {
    var elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        var contexto = elemento.getContext("2d");
        if (contexto) {
            return contexto;
        }
    }
    return false;
}

window.onload = function () {

    ctx_iniciar = iniciaCanvas("canvas");

    if (ctx_iniciar) {

        ctx_iniciar.strokeStyle = 'blue';
        ctx_iniciar.lineWidth = 5;

        ctx_iniciar.beginPath();
        ctx_iniciar.moveTo(105, 5);
        ctx_iniciar.lineTo(246.42, 5);
        ctx_iniciar.lineTo(346.42, 105);
        ctx_iniciar.lineTo(346.42, 246.42);
        ctx_iniciar.lineTo(246.42, 346.42);
        ctx_iniciar.lineTo(105, 346.42);
        ctx_iniciar.lineTo(5, 246.42);
        ctx_iniciar.lineTo(5, 105);

        ctx_iniciar.closePath();
        ctx_iniciar.stroke();

    }

}