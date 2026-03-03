import { validateToken } from "../helpers/jwt.helper.js";
import { dbGetUserById } from "../services/user.services.js";

const authenticationUser = async (req,res,next) => {

    try {
         //Paso 1: Extarer el token de la petición
        const token = req.header('X-Token');
        
        //Paso 2: Verificar que la cadena del token no este vacia.
        if( !token) {
            return res.json({
                msg:'No se recibió el token'
            });
        }

        //Paso 3: Validar el token.
        const payload = validateToken(token);

        //Paso 3.1: Verificar que el token sea válido
        if (!payload) {
            return res.status(401).json({
                msg: 'Token inválido o expirado. Inicia sesión nuevamente.'
            });
        }

        //Paso 4: Eliminar las propiedades no deseades en el payload
        delete payload.iat;
        delete payload.exp;

        //Paso 5: Consultar la existencia del usuario en la base de datos
        const userFound = await dbGetUserById( payload.id );
        if( !userFound){
            return res.status(401).json({
                msg: 'Usuario no encontrado. Inicia sesión nuevamente.'
            });
        }

        //Paso 6: Verificar el estado del usuario activo
        if( !userFound.isActive ){
            return res.status(401).json({
                msg: 'Usuario inactivo. Contacta al administrador.'
            });
        }
        
        //Paso 7: Enviar el payload a travez del objeto Request
        req.payload = payload;
        req.user = userFound;

        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error token invalido o expirado'
        });
    }
       
}

export{ 
    authenticationUser
} 
