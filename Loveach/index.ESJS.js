
document.getElementById('flexSwitchCheckDefault').addEventListener('click' , function (e){

    let rectanguloBotton = document.getElementById('ocultar');
    let rectanguloTop = document.getElementById('ocultar2');
    let imagenDerecha = document.getElementById('ocultar3');
    let filtroImagen = document.getElementById('ocultar4');
    let tSession = document.getElementById('tSession').innerText;

    if(tSession == 'Iniciar sesión'){
        document.getElementById('tSession').innerHTML = "Registrarse";
    }else{
        document.getElementById('tSession').innerHTML = "Iniciar sesión";

    }

    if(rectanguloBotton.style.visibility == 'hidden'){
        rectanguloBotton.style.visibility = 'visible';
        rectanguloTop.style.visibility = 'visible';
        imagenDerecha.style.visibility = 'visible';
        filtroImagen.style.visibility = 'visible';


    }else{
        rectanguloBotton.style.visibility = 'hidden';
        rectanguloTop.style.visibility = 'hidden';
        imagenDerecha.style.visibility = 'hidden';
        filtroImagen.style.visibility = 'hidden';

    }

});