const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idNoticia = urlParams.get("id");

const fotoNoticia = document.getElementById("fotoNoticia");

fotoNoticia.src = "/fotos/curiosity" + idNoticia + ".jpg";

