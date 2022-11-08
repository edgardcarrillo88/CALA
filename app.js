const express = require('express')
const app = express()

//con eto hacemos peticiones al servidor, despues de la coma vamos a definir el controlador
app.get('/',(req,res)=>{
    console.log("la lora")
    res.send("la re lora")//Con esto estamos mandando texto puro
})

app.listen(4000,()=>{
    console.log("La lora con el servidor")
})

