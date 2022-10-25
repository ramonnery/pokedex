const pokemonOl = document.querySelector("#pokemonList")
const loadMoreButton = document.querySelector("#loadMoreButton")
const limit = 8
let offset = 0

const convertPokemonToHtml = pokemon => {
  return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types" class="detail">
            ${pokemon.types.map(type => `<li class="type">${type}</li>`).join('')}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
  </li>
  `
}

function loadPokemonItems(offset, limit) {
  pokeAPI.getPokemons(offset, limit)
  .then((pokemonList = []) => {
    pokemonOl.innerHTML += pokemonList.map(convertPokemonToHtml).join('')
  })
  .catch(error => console.log(error))
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener("click", () => {
  offset += limit
  loadPokemonItems(offset, limit)
})