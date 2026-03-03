const authorizationUser = (allowedRoles = []) => {
    return (req, res, next) => {
        
    try {
        const { role } = req.payload;

        if (!role){
            return res.status(403).json({
                msg: 'Error: No tiene permiso (Rol no definido)'
            });
        }
        
        //Normalizar el rol: si llega como string, convertirlo a array
        const userRoles = Array.isArray(role) ? role : [role];

        //Validar si al menos uno de los roles del usuario está en la lista de roles permitidos
        const hasPermission = userRoles.some(r => allowedRoles.includes(r));
        if (!hasPermission){
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