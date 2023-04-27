const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const modal = document.getElementById('modal')
const body = document.body

const limit = 40
let offset = 0

const maxRecords = 151

function pokemonDetails(pokemon){
    body.classList.add('disable-scroll')
    modal.style.display = 'block'
    return `<img src="${pokemon.photo}">`
}

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {    
        pokemonList.append(...pokemons.map((pokemon) => {
            let li = document.createElement('li')
            li.classList.add('pokemon', pokemon.type)
            li.innerHTML = `
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            `
            li.addEventListener('click', ()=>pokemonDetails(pokemon))

            return li
        }))  
     })
     
}

loadPokemonItens(offset, limit)
modal.addEventListener('click', (ev)=>{
    if(ev.target == modal){
        ev.target.style.display = 'none'
        body.classList.remove('disable-scroll')
    }
})


loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtyRecordNextPage = offset + limit

    if(qtyRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else{
        loadPokemonItens(offset, limit)
    }
})