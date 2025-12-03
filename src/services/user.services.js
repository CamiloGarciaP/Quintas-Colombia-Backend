import userModel from "../models/User.model.js"

//Servicio: Se debe encargar solo de la comunicación directa con la base de datos.
const dbRegisterUser = async ( newUser) => {
    return await userModel.create (newUser);             //async/away por que el modelo retorna una promesa. 
}

const dbGetAllUsers = async () => {
    return await userModel.find();
}


export{
    dbRegisterUser,
    dbGetAllUsers
}