
fetch("https://rickandmortyapi.com/api/character")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data); 
    let characterList = document.querySelector(".characterList");
    let characters = "";
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
    characterList.innerHTML = characters;
  })
  .catch(function(error) {
    console.log(error);
  });
  
