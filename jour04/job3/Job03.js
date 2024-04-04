document.getElementById("filterButton").addEventListener("click", filterPokemon);

function filterPokemon() {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;

    fetch('pokemon.json')
    .then(response => response.json())
    .then(data => {
        const filteredPokemon = data.filter(pokemon => {
            return (!id || pokemon.id.toString() === id) &&
                   (!name || checkName(pokemon.name, name)) &&
                   (!type || pokemon.type.includes(type));
        });

        displayPokemon(filteredPokemon);
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
}

function checkName(pokemonName, searchName) {
    return Object.values(pokemonName).some(value => value.toLowerCase().includes(searchName.toLowerCase()));
}

function displayPokemon(pokemonList) {
    const pokemonListDiv = document.getElementById("pokemonList");
    pokemonListDiv.innerHTML = "";

    if (pokemonList.length === 0) {
        pokemonListDiv.innerHTML = "Aucun Pokémon trouvé.";
        return;
    }

    const ul = document.createElement("ul");
    pokemonList.forEach(pokemon => {
        const li = document.createElement("li");
        li.textContent = `${pokemon.id} - ${pokemon.name.english} (${pokemon.type.join(", ")})`;
        ul.appendChild(li);
    });
    pokemonListDiv.appendChild(ul);
}
