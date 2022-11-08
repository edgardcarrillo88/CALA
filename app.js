require('dotenv').config()
const express = require('express')
const app = express()

//con eto hacemos peticiones al servidor, despues de la coma vamos a definir el controlador
app.get('/',(req,res)=>{
    console.log("la lora")
    res.send("la re lora")//Con esto estamos mandando texto puro
})

const PORT = process.env.PORT || 4000//asi se accede a las variables de entorno

app.listen(PORT,()=>{
    console.log(`Servidor ${PORT}`)
})

