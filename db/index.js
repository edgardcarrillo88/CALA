const mongoose = require('mongoose')


//creamos una función para que se conecte a la base de datos, esta funicoón se debe exportar en el archivo js donde quiero que se ejecute esta función, par este ejemplo en app.js
const dbconnect = (app) =>{

    //CONEXIÓN A LA BASE DE DATOS DE PRODUCTOS
    mongoose.connect(`mongodb+srv://CALA:${process.env.MONGO_DB_PASS}@cluster0.wxzehsb.mongodb.net/productos?retryWrites=true&w=majority`)//despues del ".net/" puedo colocar el nombre de la base de datos que quiero crear
    .then((reuslt) =>{

        //DEFINIR EL PUERTO QUE NOS VA A ASIGNAR EN ESTE CASO AZURE
        const PORT = process.env.PORT || 4000//asi se accede a las variables de entorno, esto es xq azure va a asignar un puerto y va a buscar la variable "PORT" y asignarle un puerto.

        app.listen(PORT,()=>{
            console.log(`Servidor de productos ${PORT}`)
        })

        console.log("Conexión exitosa a la base de datos de productos")})
        .catch((err) => console.log(err))//aca estoy concatenando el dirname con "public", no se puede hacer con "/" ya que en linuz o wondiws son distintos caracteres (buscar que mierda es midleware);//aca nuevamente llamo a una variable de entorno, el MONGO_DB_PASS lo defino en el archivo ".env"


}

module.exports = dbconnect//esto es importante ya que lo que va a hacer es darle la caracteristica a "dbconnect" para que se pueda exportar 


//-------------------------------------------------------

// const dbconnect = (app) =>{
    
//     db1 = mongoose.createConnection(`mongodb+srv://CALA:${process.env.MONGO_DB_PASS}@cluster0.wxzehsb.mongodb.net/productos?retryWrites=true&w=majority`,
//     ((result)=>{
//         const PORT = process.env.PORT || 4000
//         app.listen(PORT,()=>{
//         console.log(`Servidor de productos ${PORT}`)
//         })
//         })
//     )
    // .then((result)=>{
    //     const PORT = process.env.PORT || 4000
    //     app.listen(PORT,()=>{
    //         console.log(`Servidor de productos ${PORT}`)
    //         })
    // })
    // .catch((err)=>console.log(err))




    // db2 = mongoose.createConnection(`mongodb+srv://CALA:${process.env.MONGO_DB_PASS}@cluster0.wxzehsb.mongodb.net/Usuarios?retryWrites=true&w=majority`,
    // ((result)=>{
    //     const PORT = process.env.PORTUSER || 4000
    //     app.listen(PORT,()=>{
    //     console.log(`Servidor de usuarios ${PORT}`)
    //     })
    //     })
    // )
    // .then((result)=>{
    //     const PORT = process.env.PORT || 4000
    //     app.listen(PORT,()=>{
    //         console.log(`Servidor de usuarios ${PORT}`)
    //         })
    // })
    // .catch((err)=>console.log(err))


// }


// module.exports = dbconnect