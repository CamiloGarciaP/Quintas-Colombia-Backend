//Importando la dependencia 'express' usando CommonJS
import express from 'express';
import { createUser, getAllUsers } from '../controllers/user.controller.js';
const router = express.Router();

//Definición de las rutas (EndPoints)
// router.put(  "/", (req, res) => {
//     res.json({msg: 'Actualiza todas las propiedades del usuario'});
// }  );
// router.patch(  "/", (req, res) => {
//     res.json({msg: 'Actualiza parcialmente 1 o todas las propiedades del usuario'});
// }  );
// router.delete(  "/", (req, res) => {
//     res.json({msg: 'Elimina un usuario'});
// }  );

//Definición de las rutas (EndPoints)
router.post(  "/", createUser  );
router.get(  "/", getAllUsers );


//Exportando el router usando el CommonJS
export default router;