let pokeName = document.querySelector('#pokeName')
let pokeImg = document.querySelector('#pokeImg')
let pokeOrder = document.querySelector('#pokeOrder')
let pokeId = document.querySelector('#pokeId')
let pokeWeight = document.querySelector('#pokeWeight')

let pokeInputName = document.querySelector('.getPokeName')
let searchPoke = document.querySelector('button')


searchPoke.addEventListener('click', () =>{
  let pokeAwait = pokeInputName.value.toLowerCase()
  pokeInputName.value = ''
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeAwait}`
  fetch(url)
  .then(response => response.json())
  .then(data =>{
    let nameParse = data.name.charAt(0).toUpperCase() + data.name.slice(1)
    pokeName.textContent = `Poke Name: ${nameParse}`
    pokeId.textContent = `Id: #${data.id}`
    pokeOrder.textContent = `Order: ${data.order}`
    pokeWeight.textContent = `Weight: ${data.weight} lbs`
    pokeImg.src = `${data.sprites.other.dream_world.front_default}`
})
  .catch(() => alert(`Sorry we couldn't find the '${pokeAwait}' name, write the correct one`))
})

document.addEventListener('keydown', e => {
  if(e.keyCode === 13) {
    searchPoke.click()
  }
})

