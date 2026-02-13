import { ALLOWED_ROLES } from "../config/global.config.js";

const authorizationUser = (allowedRoles = ALLOWED_ROLES) => {
    return (req, res, next) => {
    try {
        const { role } = req.payload;

        if (!role){
            return res.status(403).json({
                msg: 'Error: No tiene permiso (Rol no definido)'
            });
        }
        
        //Validar si el rol del usuario esta en la lista de roles permitidos
        if (!allowedRoles.includes(role)){
            return res.status(403).json({
                msg: `Error: El rol ${role} no tiene permiso para realizar esta acción`
            });
        }
         console.log(`Usuario autorizado con rol ${role}`);
        next();

    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error de autorización del servidor'
        });
    }
    }
}

export {
    authorizationUser
}