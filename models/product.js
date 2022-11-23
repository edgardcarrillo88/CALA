const mongoose = require('mongoose')




//DEFINIR EL ESQUEMA DE LOS DATOS QUE SE ESTAN ENVIANDO AL SERVIDOR
const productschema = mongoose.Schema({
    name:{type: String, require:true},
    price:Number,
    quantity:Number  
},
{
    timestamps:true//para cuando se crea un registro se crea el campo de created y updated
}
)



//MODELO
const product = mongoose.model('product',productschema)//el primer parametro es el nombre del modelo, luego el esquema ya definido y el tercero es como se va a llamar esta colección, si no se pone nada, se asigna un nombre por defecto


module.exports = product//esto es importante ya que lo que va a hacer es darle la caracteristica a "dbconnect" para que se pueda exportar 