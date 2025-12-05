import { Schema, model } from 'mongoose';

//Creando una instancia del esquema de entidad User
const userSchema = new Schema({
    name: {
        //Reglas
        type: String,           //Es de tipo String(texto)
        required: true,         //Es obligatorio
        //Modificadores
        trim: true              //Elimina los espacios en blanco(Principio y Final)
    },
    lastname: {
        type: String,           //Es de tipo String(texto)
        trim: true              //Elimina los espacios en blanco(Principio y Final)
    },
    username:{
        //Reglas
        type: String,           //Es de tipo String(texto)
        required: true,         //Es obligatorio
        //Modificadores
        trim: true,             //Elimina los espacios en blanco (Principio y Final)
        unique: true,           //Debe ser único
    },
    email: {
        //Reglas
        type: String,           //Es de tipo String(texto)
        required: true,         //Es obligatorio
        //Modificadores
        trim: true,             //Elimina los espacios en blanco(Principio y Final)
        lowercase: true,        //Hace que todo sea en miniscula
        unique: true,           //Solo deja registrar un solo correo
    },
    password: {
        //Reglas
        type: String,           //Es de tipo String(texto)
        required: true,         //Es obligatorio
        //Modificadores
        trim: true,             //Elimina los espacios en blanco (Principio y Final)
        minLength: 8,           //Mínima longitud
        maxLength: 12,          //Máxima longitud
    },
    phone: {
        type: String
    },
    role: {
        //Reglas
        type: String,           //Es de tipo String(texto)
        required: true,         //Es obligatorio
        //Modificadores
        enum:[ "Cliente", "Propietario","Admin"], 
        default: 'Cliente',
    },
    isActive: {
        //Reglas
        type: Boolean,          //true or false
        default: true 
    },
    // createDate: {
        //Reglas
    //     type: date,          
    //     default: new Date().now
    // },
    // code: {
    //     type: String,        //Código de verificación
    //     trim: true
    // }
},{
    versionKey: false,          //Elimina el versionamiento de la estructura
    timestamps: true            //Habilita los campos createAt, updatedAt
});

//Crear el modelo User basado en el esquema userSchema
const userModel = model ( 
    'users',     //Nombre de la colección en singular 'User'
    userSchema  //Esquema asociado al modelo
);

//Exportando el modelo User, para que sa usado en otras partes de la aplicación 
export default userModel;