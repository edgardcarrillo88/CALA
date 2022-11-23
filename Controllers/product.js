const product = require('../models/product')


//Aca defino las funciones que se van a ejecutar en las rutas
const getproducts =  async (req,res)=>{
    const productos = await product.find()
    res.status(200).json({ok: true, datos:productos, cantidad: productos.length})
    }

const createproduct = (req,res,next)=>{
    console.log("Petición recibida")
    console.log({body:req.body})
    
    const newproduct = new product(req.body)//estoy creando una nueva linea, pero aun no la guardo
    newproduct.save()
    .then((reuslt)=>{
        console.log("Item guardado")
        res.status(201).json({ok:true})//el estatus 201 es que se esta creando algo
    })//con esto lo mandamos a guardar a la base de datos
    
    .catch((err)=>console.log(err))
    
    }

    //En este caso como vamos a exportar mas de un dato, debemos hacerlo como si fuera un objeto
    module.exports = {
        getproducts,
        createproduct
    } 