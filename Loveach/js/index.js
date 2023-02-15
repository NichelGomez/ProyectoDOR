let boton = document.getElementById("flexSwitchCheckDefault");

document.getElementById('iniciarsesion').addEventListener("click", function (e){

    let correo = document.getElementById('exampleInputEmail1').value;
    let password = document.getElementById('exampleInputPassword1').value;

    if(validarEmail(correo)){
        alert("Correo válido");
    }else{
        alert("correo no valido");
    }
});

boton.addEventListener('click' , ()=>{

    let sesion = document.getElementById('scrollspyHeading4');
    let registro = document.getElementById('scrollspyHeading5');
    if(boton.checked){
        sesion.style.visibility = 'hidden';
        registro.style.visibility = 'visible';
    }else{
        sesion.style.visibility = 'visible';
        registro.style.visibility = 'hidden';
    }

});

window.addEventListener("resize", () => {
    let divTexto1 = document.getElementById("texto-horizontal1");
    let divTexto2 = document.getElementById("texto-horizontal2");
    let divTexto3 = document.getElementById("texto-horizontal3");
    let divTexto4 = document.getElementById("texto-horizontal4");
    let div1 = document.getElementById("contenido-horizontal1");
    let div2 = document.getElementById("contenido-horizontal2");
    let div3 = document.getElementById("contenido-horizontal3");
    let div4 = document.getElementById("contenido-horizontal4");
    let card1 = document.getElementById("card-horizontal1");
    let card2 = document.getElementById("card-horizontal2");
    let card3 = document.getElementById("card-horizontal3");
    let card4 = document.getElementById("card-horizontal4");

    if(window.innerWidth <= 1200)
    {
        div1.appendChild(divTexto1);
        div2.appendChild(divTexto2);
        div3.appendChild(divTexto3);
        div4.appendChild(divTexto4);
    }else{
        card1.appendChild(divTexto1);
        card2.appendChild(divTexto2);
        card3.appendChild(divTexto3);
        card4.appendChild(divTexto4);
    }
})

window.addEventListener('load', () =>{
    let divTexto1 = document.getElementById("texto-horizontal1");
    let divTexto2 = document.getElementById("texto-horizontal2");
    let divTexto3 = document.getElementById("texto-horizontal3");
    let divTexto4 = document.getElementById("texto-horizontal4");
    let div1 = document.getElementById("contenido-horizontal1");
    let div2 = document.getElementById("contenido-horizontal2");
    let div3 = document.getElementById("contenido-horizontal3");
    let div4 = document.getElementById("contenido-horizontal4");
    let card1 = document.getElementById("card-horizontal1");
    let card2 = document.getElementById("card-horizontal2");
    let card3 = document.getElementById("card-horizontal3");
    let card4 = document.getElementById("card-horizontal4");
    if(window.innerWidth <= 1200)
    {
        div1.appendChild(divTexto1);
        div2.appendChild(divTexto2);
        div3.appendChild(divTexto3);
        div4.appendChild(divTexto4);
    }else{
        card1.appendChild(divTexto1);
        card2.appendChild(divTexto2);
        card3.appendChild(divTexto3);
        card4.appendChild(divTexto4);
    }
});

window.addEventListener('resize', ()=>{
    let video = document.getElementById("fullscreen");
    if(window.innerWidth <= 450){
        video.src="fotos/videoMovil.mp4"
    }else{
        video.src="fotos/Video.mp4"
    }
})

let botones = document.querySelectorAll(".saberMas");

botones.forEach(boton => {
    boton.addEventListener("click", ()=>{
        location = "noticias.html?id=" + boton.id;
    });
});

function validarEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  }

