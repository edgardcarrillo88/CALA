const express = require('express')
const { request } = require('http')

const path = require('path')
const cors = require('cors')
require('dotenv').config()

const dbconnect = require('./db/index')
const productrouter = require('./routes/product')

const app = express()

dbconnect(app)



app.use(cors())//esto hace que se ejecute un middleware en cada request que se realice, nos ayuda a pasar las peticiones








//CONFIGURAR QUE LAS PETICIONES DE TIPO JSON LAS TRATE COMO TAL
app.use(express.json())




// //CONEXIÓN ENTRE HTML(BOTONES) Y SERVIDOR
// app.post('/api/v1/products',(req,res,next)=>{
// console.log("Petición recibida")
// console.log({body:req.body})

// const newproduct = new product(req.body)//estoy creando una nueva linea, pero aun no la guardo
// newproduct.save()
// .then((reuslt)=>{
//     console.log("Item guardado")
//     res.status(201).json({ok:true})//el estatus 201 es que se esta creando algo
// })//con esto lo mandamos a guardar a la base de datos

// .catch((err)=>console.log(err))

// })





//CONEXIÓN ENTRE HTML(BOTONES) Y SERVIDOR

//aca estoy  configurando que la peticion que venga de "routes/product" USE ese reouter que se esta llamando, el cual tambien debo exportar
app.use('/api/v1/products',productrouter)










//DECIRLE A LA PC CLIENTE DONDE ESTAN LOS ARCHIVOS ESTATICO EN EL SERVIDORE QUE SE VAYA A EJECUTAR
//configura arhcivos esstaticos
app.use(express.static(path.join(__dirname,'public')))








//con eto hacemos peticiones al servidor, despues de la coma vamos a definir el controlador
//app.get('/',(req,res, next)=>{//next es para decirle a este webon que es para indicar que la logica de la función ya termino y que puede continuar, sino, se queda pensanado como webon ahsta el infinito
  //  console.log("servidor prendido")

//next()

    //res.status(200).sendFile('index.html',{root:__dirname})//el __dirname es para buscar al index.html en la misma dirección donde se encuentra este javascript, indifrernte del servidor donde corra
//})