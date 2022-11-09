const inputname = document.querySelector('#productname')
const inputprice = document.querySelector('#productprice')


const button =  document.querySelector('button')
button.addEventListener('click',(event)=>{
    console.log({name:inputname.value,price:inputprice.value})
    const name = inputname.value
    const price = inputprice.value

    fetch('/api/v1/products',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({//para poder enviar información JSON en string (xq asi lo requiere el servidor) se debe convertir a json con el "JSON.stringify"
            name,
            price
        })
    }) //para hacer peticiones a un servidor
})
