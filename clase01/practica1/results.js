let queryString = window.location.search;
let queryStringObj = new URLSearchParams(queryString);
let searchValue = queryStringObj.get("q");

fetch("https://rickandmortyapi.com/api/character/?name=" + searchValue)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let searchResults = document.querySelector(".search-results");
    let characters = "";

    if (data.results) {
      for (let i = 0; i < data.results.length; i++) {
        let personaje = data.results[i];
        characters += `
          <article>
            <img src="${personaje.image}" alt="${personaje.name}">
            <p>Name: <a href="detalle.html?id=${personaje.id}">${personaje.name}</a></p>
            <p>Status: ${personaje.status}</p>
          </article>
        `;
      }
    } else {
      characters = "<p>No se encontraron resultados</p>";
    }

    searchResults.innerHTML = characters;
  })
  .catch(function(error) {
    console.log(error);
  });
