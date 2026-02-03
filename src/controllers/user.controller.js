//Controlador: Se debe encargar de Recibir las peticiones y responder a ellas.
import { encryptPassword } from "../helpers/bcrypt.helper.js";
import userModel from "../models/User.model.js";
import { dbDelteUserById, dbGetAllUsers, dbGetUserByEmail, dbGetUserById, dbRegisterUser } from "../services/user.services.js";

const createUser = async (req, res) => {

    //Se controla la excepción que ocurre en el Paso 2.(Try/cath)
    try {
        //Paso 1: Extraer el cuerpo de la petición.
        const inputData = req.body;       
        //Paso 2: Validar si el usuario ya existe
        const userFound = await dbGetUserByEmail ( inputData.email );

        if (userFound) {
            return res.status(409).json ({
                msg: 'El usuario ya ese encuentra registrado. Por favor ingrese al sistema'
            });
        }

        //Paso 3: Hashear la contraseña
        inputData.password = encryptPassword( inputData.password );
    
        //Paso 4: Registra los datos usando el userModel
        const userRegistered = await dbRegisterUser (inputData);     //Registrar los datos en la base de datos.

        //Paso 5: Eliminar la contraseña del objeto userRegistered antes de envialro al cliente.
        const jsonUserFound = userRegistered.toObject();
        delete jsonUserFound.password;
    
        //Paso 6: Responder al cliente.
        res.status(201).json({
            // data: data                        //ECMAScript versión antigua
            msg: "Usuario creado correctamente",
            user: jsonUserFound                   //ECMAScript versión nueva. Si la propiedad y el valor usa el mismo nombre el lo lee! 
        });
    } catch (error) {
        //Paso 3: Se responde al cliente cuando se produce una excepción.
        console.error(error);
        res.status(500).json({
            msg: 'Error interno del servidor.'
        });
    }
} 

const getAllUsers = async (req, res) => {
    try {
        const users = await dbGetAllUsers();

    res.status(200).json({
        data: users
    });
    } 
    catch (error) {
        console.error(error);
        res.json({msg: 'Error: No se pudo obtener el listado de usuarios.'})
    }
}

const getUserById = async (req, res ) => {
    try {
        const idUser = req.params.idUser;
        const userFound = await dbGetUserById(idUser);
    
        res.json({
            userFound
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: No pudo obtener usuario por ID'
        })
    }
}

const deleteUserById = async (req, res) => {
    
    try {
        const idUser = req.params.idUser;
        const userDeleted = await dbDelteUserById(idUser);
        res.json({
            userDeleted
        })
    } 
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: No se pudo eliminar el usuario por ID'
        });
    }
}

const updateUserById = async (req, res) => {
    try {
        const inputData = req.body;
        const idUser = req.params.idUser;
    
        const userUpdated = await userModel.findByIdAndUpdate(
            idUser,     //ID
            inputData,   //Datos a actualizar
            {new: true}//Configuración
        );
    
        // const userUpdated = await userModel.findOneAndUpdate(
        //     { _id: idUser},//ID
        //     inputData  //Datos a actualizar
        //     {new: true}   //Configuración
        // );
    
        res.json({
            userUpdated
        });
        
    } 
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: No pudo actualizar el usuario por ID'
        });
    }
}

export {
    createUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById
}
