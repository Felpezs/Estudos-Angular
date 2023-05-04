const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const modal = document.getElementById('modal')
const body = document.body

const limit = 40
let offset = 0

const maxRecords = 151

function changeTab(ev){
    const activeTab = document.querySelector('.navInfo li.active')
    const targetTab = ev.target

    if(activeTab === targetTab)
        return

    activeTab.classList.remove('active')
    let currentTabId = activeTab.dataset.tab
    document.querySelector(`div#${currentTabId}`).classList.remove('showTab')

    targetTab.classList.add('active')
    currentTabId = targetTab.dataset.tab
    document.querySelector(`div#${currentTabId}`).classList.add('showTab')
}

function showPokemonDetails(pokemon){
    body.classList.add('disable-scroll')
    modal.style.display = 'block'

    modal.innerHTML = `
        <div class="pokemonOverview ${pokemon.type}">
            <div class="head">
                <span class="name">${pokemon.name}</span>
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
            <nav class="navInfo">
                <ul>
                    <li data-tab='about' class='active'>About</li>
                    <li data-tab='stats'>Stats</li>
                    <li data-tab='evolution'>Evolution</li>
                </ul>
            </nav>
            <div id="pokemonData">
                <div id="about" class="showTab">
                    <div class="description">
                        <p class="attributte">Base exp:</p>
                        <p>${pokemon.baseExp}exp</p>
                    </div>
                    <div class="description">
                        <p class="attributte">Height:</p>
                        <p>${pokemon.height}cm</p>
                    </div>
                    <div class="description">
                        <p class="attributte">Weight:</p>
                        <p>${pokemon.weight}kg</p>
                    </div>
                    <div class="description">
                        <p class="attributte">Abilities:</p>
                        <p>${pokemon.abilities.join(', ')}</p>
                    </div>
                    <div class="description">
                        <p class="attributte">Habitat:</p>
                        <p>${pokemon.habitat}</p>
                    </div>
                    <div class="description">
                        <p class="attributte">Generation:</p>
                        <p>${pokemon.generation}</p>
                    </div>
                    <h4>Story:</h4>
                    <p class='story'>${pokemon.story}</p>       
                </div>
                <div id='stats'>stats</div>
            </div>
            <span id="dataFooter"></span>
        </div>
    `

    const tabs = document.querySelector('.navInfo ul')
    
    for(let tab of tabs.children)
        tab.addEventListener('click', changeTab)
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
            li.addEventListener('click', ()=>showPokemonDetails(pokemon))

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