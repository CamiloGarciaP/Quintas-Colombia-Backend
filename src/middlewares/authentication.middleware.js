import { validateToken } from "../helpers/jwt.helper.js";

const authenticationUser = (req,res,next) => {
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

        //Paso 4: Eliminar las propiedades no deseades en el payload
        delete payload.iat;
        delete payload.exp;

        req.payload = payload;


    next();
}

export{ 
    authenticationUser
} 
