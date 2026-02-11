const authorizationUser = (req, res, next) => {
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