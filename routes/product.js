const router = require('express').Router()  //estamos definiendo un router para configurar rutas
const product = require('../models/product')



router.post('/',(req,res,next)=>{
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
    )

router.get('/', async (req,res)=>{

    const productos = await product.find()
    res.status(200).json({ok: true, datos:productos, cantidad: productos.length})
    
    }
    )


    module.exports = router