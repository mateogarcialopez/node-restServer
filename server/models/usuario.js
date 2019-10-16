const mongoose = require('mongoose');

let Schema = mongoose.Schema; //para crear schemas

let usuarioSchema = new Schema({  //nuevo schema

    nombre:{
        type: String,
        required: [true, 'el nombre es necesario'],    
    },
    email: {
        type: String,
        required: [true, 'el correo es necesario']      ,
    },
    password: {
        type: String,
        required: [true, 'la contraseña es necesaria']
    },
    img:{
        type: String
    },
    role:{
        type: String,
        default: 'USER_ROLE',
        required: [true, 'el rol es requerido']
    },
    estado:{
        type: Boolean,
        required: true
    },
    google:{
        type: Boolean
    },

}); 

