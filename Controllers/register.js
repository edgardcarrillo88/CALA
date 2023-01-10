const bcrypt = require('bcrypt');//para encriptar la contraseña
const users = require('../models/users')


const register = async (req, res) =>{
    console.log("Petición recibida")
    console.log(req.body)

    const {nombre, usuario, contrasena} = req.body;


    await users.findOne({usuario})//esto es para buscar si ya existe un dato (usuario) ya creado en la base de datos
    .then((usuarionuevo)=>{
        if(usuarionuevo){
            return res.json({message: "ya existe un usuario con ese nombre", existe:"Si"}),
            console.log("ya existe un usuario con ese nombre")
        }else if (!usuario || !nombre || !contrasena){
            return res.json({message: "debe llenar todos los campos",textsenha:contrasena, textname:nombre, textuser:usuario})
        } else {
            bcrypt.hash(contrasena,10,
                (error, contrasenaencriptada)=>{
                    if(error) res.json({error})
                    else{
                        const nuevousuario = new users({
                            nombre: nombre,
                            usuario: usuario,
                            contrasena: contrasenaencriptada
                        })

                        nuevousuario.save()
                        .then((usuarionuevo)=>{
                            res.json({message:`Usuario ${usuario} creado`})  
                            console.log(`Usuario ${usuario} creado`)
                        })
                        .catch((error) => console.log(error))

                    }
                }
                )
        }
    })
}



module.exports = {register}
