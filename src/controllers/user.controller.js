//Controlador: Se debe encargar de Recibir las peticiones y responder a ellas.
import { registerUser } from "../services/user.services.js";

const createUser = async (req, res) => {

    //Se controla la excepción que ocurre en el Paso 2.(Try/cath)
    try {
        //Paso 1: Extraer el cuerpo de la petición.
        const data = req.body;          
    
        //Paso 2: Registra los datos usando el userModel
        const dataRegistered = await registerUser (data);     //Registrar los datos en la base de datos.
    
        //Paso 3: Responder al cliente.
        res.json({
            msg: 'crea un usuario',
            // data: data                        //ECMAScript versión antigua
            dataRegistered                       //ECMAScript versión nueva. Si la propiedad y el valor usa el mismo nombre el lo lee! 
        });
    } catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: No se pudo crear el usuario'
        });
    }
} 
export {
    createUser
}