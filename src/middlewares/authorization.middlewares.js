const authorizationUser = (req, res, next) => {
    console.log(' authorization');
    next();
}

export {
    authorizationUser
}