const withOutRole = ( req, res, next ) => {
    delete req.body.role;
    next();

}
export{
    withOutRole
}