import userModel from "../models/User.model.js";

const createUser = async (req, res) => {
    const data = req.body;          //Extraer el cuerpo de la petición.

    //Registra los datos usando el userModel
    const dataRegistered = await userModel.create( data );      //Registrar los datos en la base de datos.

    res.json({
        msg: 'crea un usuario',
        // data: data              //ECMAScript versión antigua
        dataRegistered                       //ECMAScript versión nueva. Si la propiedad y el valor usa el mismo nombre el lo lee! 
    });
} 
export {
    createUser
}