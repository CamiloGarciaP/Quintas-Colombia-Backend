const loginUser = (req, res) => {
    res.json({
        msg:"Login usuario"
    });
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