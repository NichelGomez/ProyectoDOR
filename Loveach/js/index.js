let boton = document.getElementById("flexSwitchCheckDefault");

document.getElementById('botonregistrarse').addEventListener('click', function (e){

    let nombre = document.getElementById('nombre_registro').value;
    let apellidos = document.getElementById('apellidos_registro').value;
    let email = document.getElementById('email_registro').value;
    let password = document.getElementById('password_registro').value;
    let cumple = document.getElementById('cumpleaños').value;
    let comprobante = false;


    if(esNombreValido(nombre)){
        comprobante = true;
        document.getElementById('nombrer_error').innerHTML = "";
    }else{
        document.getElementById('nombrer_error').innerHTML = 'Nombre no válido';
        comprobante = false;
        
    }

    if(validarApellidos(apellidos)){
        comprobante = true;
        document.getElementById('apellidosr_error').innerHTML = "";
    }else{
        document.getElementById('apellidosr_error').innerHTML = 'Apellidos no válidos';
        comprobante = false;
        
    }

    if(validarEmail(email)){
        comprobante = true;
        document.getElementById('emailr_error').innerHTML = "";
    }else{
        document.getElementById('emailr_error').innerHTML = 'Correo no válido';
        comprobante = false;
        
    }

    if(password.length > 4){
        comprobante = true;
        document.getElementById('passwordr_error').innerHTML = "";
    }else{
        document.getElementById('passwordr_error').innerHTML = 'La contraseña debe tener al menos 5 caracteres';
        comprobante = false;
    }
    if(cumple.length > 0){
        comprobante = true;
        document.getElementById('cumpleañosr_error').innerHTML = '';
    }else{
        document.getElementById('cumpleañosr_error').innerHTML = 'Selecciona una fecha de cumpleaños';
        comprobante = false;
    }


    if(comprobante == true){
        document.getElementById('registrarse_exito').innerHTML = 'Se ha enviado un correo electrónico a la dirección proporcionada';
    }
});

document.getElementById('iniciarsesion').addEventListener("click", function (e){

    let correo = document.getElementById('exampleInputEmail1').value;
    let password = document.getElementById('exampleInputPassword1').value;
    let comprobacionpassword = true;
    if(password.length < 4){
        document.getElementById('passwordmal').innerHTML = "La contraseña es inválida mínimo 4 caracteres";
        comprobacionpassword = false;
    }

    if(validarEmail(correo)){
        document.getElementById('errorCorreo').innerHTML = "";
        if(comprobacionpassword){
            document.getElementById('passwordmal').innerHTML = "";

            document.getElementById('correovalido').innerHTML = "Se ha iniciado sesión correctamente.";

        }
    }else{
        document.getElementById('errorCorreo').innerHTML = "Correo inválido";
        document.getElementById('correovalido').innerHTML = "";

    }
});

boton.addEventListener('click' , ()=>{

    let sesion = document.getElementById('scrollspyHeading4');
    let registro = document.getElementById('scrollspyHeading5');
    if(boton.checked){
        sesion.style.visibility = 'hidden';
        registro.style.visibility = 'visible';
    }else{/*  */
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

function esNombreValido(cadena) {
    // Expresión regular para verificar que la cadena solo tiene letras y espacios
    const patron = /^[a-zA-Z\s]+$/
    // Verifica si la cadena coincide con el patrón
    return patron.test(cadena)
}

function validarApellidos(cadena) {
    // Expresión regular para verificar que la cadena tiene solo letras y espacios, con un segundo espacio opcional
    const patron = /^[a-zA-Z]+\s[a-zA-Z]+\s?[a-zA-Z]*$/
    // Verifica si la cadena coincide con el patrón
    return patron.test(cadena)
  }
  



