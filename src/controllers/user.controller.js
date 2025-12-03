//Controlador: Se debe encargar de Recibir las peticiones y responder a ellas.
import userModel from "../models/User.model.js";
import { dbGetAllUsers, dbRegisterUser } from "../services/user.services.js";

const createUser = async (req, res) => {

    //Se controla la excepción que ocurre en el Paso 2.(Try/cath)
    try {
        //Paso 1: Extraer el cuerpo de la petición.
        const data = req.body;          
    
        //Paso 2: Registra los datos usando el userModel
        const dataRegistered = await dbRegisterUser (data);     //Registrar los datos en la base de datos.
    
        //Paso 3: Responder al cliente.
        res.json({
            msg: 'crea un usuario',
            // data: data                        //ECMAScript versión antigua
            dataRegistered                       //ECMAScript versión nueva. Si la propiedad y el valor usa el mismo nombre el lo lee! 
        });
    } catch (error) {
        //Paso 3: Se responde al cliente cuando se produce una excepción.
        console.error(error);
        res.json({
            msg: 'Error: No se pudo crear el usuario'
        });
    }
} 

const getAllUsers = async (req, res) => {
    try {
        const users = await dbGetAllUsers();

    res.json({
        msg: 'Obtiene todos los usuarios',
        users
    });
    } 
    catch (error) {
        console.error(error);
        res.json({msg: 'Error: No se pudo obtener el listado de usuarios.'})
    }
}

export {
    createUser,
    getAllUsers
}
