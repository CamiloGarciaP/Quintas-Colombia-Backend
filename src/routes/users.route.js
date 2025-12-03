//Importando la dependencia 'express' usando CommonJS
import express from 'express';
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from '../controllers/user.controller.js';
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
router.get( "/:idUser", getUserById ); //Parametrizar la ruta: Crear un parametro en la ruta que funje como variable.
router.delete( "/:idUser", deleteUserById);
router.patch( "/:idUser", updateUserById );


//Exportando el router usando el CommonJS
export default router;