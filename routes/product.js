
const express = require('express')
const router = express.Router()  //estamos definiendo un router para configurar rutas
const productcontroller = require('../Controllers/product')
const upload =  require('../middleware/upload')


//router.post('/',productcontroller.createproduct)
router.post('/',upload.single('image'), productcontroller.createproduct)
router.get('/',productcontroller.getproducts)
//para eliminar un producto me pide el "id"
router.delete('/:id',productcontroller.deleteproducts)




module.exports = router