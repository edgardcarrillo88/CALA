const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const app = express()

//CONEXIÓN A LA BASE DE DATOS
mongoose
    .connect(`mongodb+srv://CALA:${process.env.MONGO_DB_PASS}@cluster0.wxzehsb.mongodb.net/productos?retryWrites=true&w=majority`)//despues del ".net/" puedo colocar el nombre de la base de datos que quiero crear
.then((reuslt) =>console.log("Conexión exitosa a la base de datos"))
.catch((err) => console.log(err))//aca estoy concatenando el dirname con "public", no se puede hacer con "/" ya que en linuz o wondiws son distintos caracteres (buscar que mierda es midleware);//aca nuevamente llamo a una variable de entorno, el MONGO_DB_PASS lo defino en el archivo ".env"



//DEFINIR EL ESQUEMA DE LOS DATOS QUE SE ESTAN ENVIANDO AL SERVIDOR
const productschema = mongoose.Schema({
    name:{type: String, require:true},
    price:Number  
},
{
    timestamps:true//para cuando se crea un registro se crea el campo de created y updated
}
)








//MODELO
const product = mongoose.model('product',productschema)//el primer parametro es el nombre del modelo, luego el esquema ya definido y el tercero es como se va a llamar esta colección, si no se pone nada, se asigna un no,bre por defecto






//CONFIGURAR QUE LAS PETICIONES DE TIPO JSON LAS TRATE COMO TAL
app.use(express.json())




//CONEXIÓN ENTRE HTML(BOTONES) Y SERVIDOR
app.post('/api/v1/products',(req,res,next)=>{
console.log("Petición recibida")
console.log({body:req.body})

const newproduct = new product(req.body)//estoy creando una nueva linea, pero aun no la guardo
newproduct.save()
.then((reuslt)=>{
    console.log("Item guardado")
    res.status(201).json({ok:true})//el estatus 201 es que se esta creando algo
})//con esto lo mandamos a guardar a la base de datos

.catch((err)=>console.log(err))

})







//DECIRLE A LA PC CLIENTE DONDE ESTAN LOS ARCHIVOS ESTATICO EN EL SERVIDORE QUE SE VAYA A EJECUTAR
//configura arhcivos esstaticos
app.use(express.static(path.join(__dirname,'public')))








//con eto hacemos peticiones al servidor, despues de la coma vamos a definir el controlador
//app.get('/',(req,res, next)=>{//next es para decirle a este webon que es para indicar que la logica de la función ya termino y que puede continuar, sino, se queda pensanado como webon ahsta el infinito
  //  console.log("servidor prendido")

//next()

    //res.status(200).sendFile('index.html',{root:__dirname})//el __dirname es para buscar al index.html en la misma dirección donde se encuentra este javascript, indifrernte del servidor donde corra
//})






//DEFINIR EL PUERTO QUE NOS VA A ASIGNAR EN ESTE CASO AZURE
const PORT = process.env.PORT || 4000//asi se accede a las variables de entorno, esto es para que azure va a asignar un puerto y va a buscar la variable "PORT" y asignarle un puerto.

app.listen(PORT,()=>{
    console.log(`Servidor ${PORT}`)
})

