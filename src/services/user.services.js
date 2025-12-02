import userModel from "../models/User.model.js"

//Servicio: Se debe encargar solo de la comunicación directa con la base de datos.
const registerUser = async ( newUser) => {
    return await userModel.create (newUser);             //async/away por que el modelo retorna una promesa. 
}

export{
    registerUser
}