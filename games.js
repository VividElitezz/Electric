let games = null;

fetch('./games.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    games = data;
    
    for (let i = 0; i < games.length; i++) {
        const game = games[i].name;
        const div = document.createElement("div");
        div.className = "game-container";
        const img = document.createElement("img");
        img.src = games[i].image;
        const name = document.createElement("h3");
        name.innerHTML = game;
        const description = document.createElement("p");
        description.innerHTML = games[i].description;
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(description);
        document.querySelector(".games-grid").appendChild(div);
    }
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });
