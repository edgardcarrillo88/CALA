const bcrypt = require('bcrypt');//para encriptar la contraseña
const users = require('../models/users')


const login = async (req, res) =>{
    console.log("Petición de verificación de usuario")
    const {usuario, correo, contrasena} = req.body
    users.findOne({usuario})
    .then((users)=>{
        if(!users){
            console.log("usuario no encontrado")
            return res.json({message:"Usuario no encontrados", guia:1}); 
        }
        
            bcrypt.compare(contrasena, users.contrasena)
            .then((rescomparacion)=>{
                if(rescomparacion===true){
                    console.log("inicio de sesión exitoso")
                    return res.json({message:"inicio de sesión exitoso", guia:2})
                }else{
                    console.log("contraseña incorrecta")
                    return res.json({message:"contraseña incorrecta", guia:3})
                }
            })
        
    })
}

module.exports = {login}