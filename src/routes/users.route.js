//Importando la dependencia 'express' usando CommonJS
const express = require ('express');
const router = express.Router();

//Definición de las rutas (EndPoints)
router.get(  "/", (req, res) => {
    // res.send("<h1>Users</h1>")
    const users = [
        { name: 'Ramiro', age: 23},
        { name: 'Camilo', age: 30}
    ]
    res.json( users );
}  );


//Exportando el router usando el CommonJS
module.exports = router;