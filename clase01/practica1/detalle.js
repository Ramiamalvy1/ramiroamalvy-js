let queryString = window.location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

fetch("https://rickandmortyapi.com/api/character/" + id)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let nombre = document.querySelector(".nombre");
    nombre.textContent = data.name;
    let status = document.querySelector(".status");
    status.textContent += " " + data.status;
    let especie = document.querySelector(".especie");
    especie.textContent += " " + data.species;
    let imagen = document.querySelector(".imagen");
    imagen.src = data.image;
    imagen.alt = data.name;
  })
  .catch(function(error) {
    console.log(error);
  });

  