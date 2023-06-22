function search() {
    let pokemon = document.getElementById('pokemon').value;
    pokemon = pokemon.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

fetch(url)
    .then(response=> response.json())
    .then(data => console.log(data))
  }
  