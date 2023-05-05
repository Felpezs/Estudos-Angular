const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeDetail.id}/`

    fetch(speciesUrl)
    .then((pokemonSpecie) => pokemonSpecie.json())
    .then((specie)=>{
        pokemon.story = specie.flavor_text_entries[0].flavor_text.replace('\n',' ').replace('\f',' ')
        pokemon.generation = specie.generation.name
        pokemon.habitat = specie.habitat.name
    })
    
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name)
    const statsMap= new Map()
    pokeDetail.stats.map((statSlot) => statsMap.set(statSlot.stat.name, statSlot.base_stat))

    const [ type ] = types

    pokemon.abilities = abilities
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.versions['generation-v']['black-white'].animated.front_default
    pokemon.height = pokeDetail.height * 10 //decimeter to centimeter
    pokemon.weight = pokeDetail.weight //Kg
    pokemon.baseExp = pokeDetail.base_experience
    pokemon.stats = statsMap

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}
pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

    return fetch(url)
        .then((response) => response.json())
        .then((responseBody) => responseBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.error(error))
}