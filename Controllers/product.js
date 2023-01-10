const product = require('../models/product')
const fs = require('fs')
const multer = require('multer')
const upload =  require('../middleware/upload')
const path = require('path')



//Aca defino las funciones que se van a ejecutar en las rutas
const getproducts =  async (req,res)=>{
    const products = await product.find({deleted:false}).sort({_id:'desc'})
    res.status(200).json({ok: true, datos:products, cantidad: products.length})
    }



const createproduct = (req,res,next)=>{
    console.log("Petición recibida")
    


    const newproduct = new product({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        
        image:{
            data: fs.readFileSync('uploads/' + req.file.filename),
            contentType: "image/png",
        }
    })//estoy creando una nueva linea, pero aun no la guardo




    newproduct.save()
    .then((reuslt)=>{
        console.log("Item guardado")
        res.status(201).json({ok:true, producto:newproduct})//el estatus 201 es que se esta creando algo
    })//con esto lo mandamos a guardar a la base de datos
    
    .catch((err)=>console.log(err))



    // const newproduct = new product(req.body)//estoy creando una nueva linea, pero aun no la guardo
    // newproduct.save()
    // .then((reuslt)=>{
    //     console.log("Item guardado")
    //     res.status(201).json({ok:true, producto:newproduct})//el estatus 201 es que se esta creando algo
    // })//con esto lo mandamos a guardar a la base de datos
    
    // .catch((err)=>console.log(err))
    
    }


const deleteproducts = async (req,res)=>{
    console.log("solicitud de elminación recibida");
    //params es para poder acceder al ":id" que se ha definido en la ruta (routes/products) en la fila de deleteproducts
    const {id} = req.params
    //este comando se explica solo
    await product.findByIdAndUpdate(id,{
        deleted:true
    })
    res.status(200).json({ok:true})
    console.log({id}); 
}

    //En este caso como vamos a exportar mas de un dato, debemos hacerlo como si fuera un objeto
    module.exports = {
        getproducts,
        createproduct,
        deleteproducts
    } 