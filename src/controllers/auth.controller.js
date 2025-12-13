import { validatePassword } from "../helpers/bcrypt.helper.js";
import { generateToken } from "../helpers/jwt.helper.js";
import { dbGetUserByEmail } from "../services/user.services.js";

const loginUser = async (req, res) => {
    try {
        //Paso 1: Extraer el cuerpo de la petición.
        const inputData = req.body;       
        //Paso 2: Validar si el usuario NO existe
        const userFound = await dbGetUserByEmail( inputData.email );
        if ( !userFound ) {
            return res.json ({
                msg: 'El usuario no ese encuentra registrado. Registrese.'
            });
        }
        //paso 3: Verificar si la contraseña es correcta.
        const isValidPassword = validatePassword( inputData.password, userFound.password );
        if (!isValidPassword ){
            return res.json({
                msg: 'La contraseña es incorrecta. Por favor intente de nuevo'
            });
        }
        //Paso 4: Gernerar la credencial digital (token)
        const payload ={
            id: userFound._id,          //usar el id para saber quien es el que hace un registro.
            name: userFound.name,       //Se usa para mostrar el nombre del usuario en la interfaz (también el avatar)
            email: userFound.email,     //Enviar mensajes o notificaciones al correo del usuario, de forma anonima.
            role: userFound.role
        }
        
        //Paso 5: Eliminar la contraseña antes de pasarla al cliente
        const jsonUserFound = userFound.toObject();
        delete jsonUserFound.password

        const token = generateToken( payload );

        //Paso 6: Responder al clietne
        res.json({
            token,
            user: jsonUserFound
        });
    } catch (error) {
        console.error(error);
        res.json({
            msg: 'Error: No se pudo iniciar sesión.'
        });
    }


}
    const reNewToken = (req, res) => {
        res.json({
        msg:"Renovar Token"
    });
}

export{
    loginUser,
    reNewToken
};