const inputname = document.querySelector('#productname')
const inputprice = document.querySelector('#productprice')

const pokeapi = 'https://pokeapi.co/api/v2/pokemon'

fetch(`${pokeapi}/charmander`)
.then((res)=>{
    return res.json()//aca estoy retornando la respuesta en formato JSON, pero esto es una promesa, como no voy a usar await, hago otro "then" para tener la respuesta a la petición hecha
}).then((pokemon)=>{//estoy definiendo que el retorno JSON tenga de nombre "pokemon"
    console.log({pokemon})
    console.log(pokemon.name)


    const html = 
`<h1>${pokemon.name}</h1>
<img src=${pokemon.sprites.front_default} alt="imagen de: " ${pokemon.name}></img>
<img src=${pokemon.sprites.back_default} alt="imagen de: " ${pokemon.name}></img>`

const div = document.createElement('div')
const body = document.querySelector('body')

div.classList.add('poke-card')
div.innerHTML = html
body.appendChild(div)


})

.catch((err)=>{console.log(err)})









const button =  document.querySelector('button')
button.addEventListener('click',(event)=>{
    console.log({name:inputname.value,price:inputprice.value})
    const name = inputname.value
    const price = inputprice.value

    fetch('/api/v1/products',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'//define que el tipo del contenido es json
        },
        body: JSON.stringify({//para poder enviar información JSON en string (xq asi lo requiere el servidor) se debe convertir a json con el "JSON.stringify"
            name,
            price
        })
    }) //para hacer peticiones a un servidor
})







