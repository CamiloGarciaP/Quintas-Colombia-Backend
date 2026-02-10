const authorizationUser = (req, res, next) => {
    // Verificar que el usuario tenga el rol de Admin
    const { role } = req.payload;

    if (!role || !role.includes('Admin')) {
        return res.status(403).json({
            msg: 'Acceso denegado. Se requiere rol de Administrador.'
        });
    }

    next();
}

export {
    authorizationUser
}