//Importando la dependencia 'express' usando CommonJS
import express from 'express';
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from '../controllers/user.controller.js';
const router = express.Router();

//Definición de las rutas (EndPoints)
router.post(  "/", createUser  );
router.get(  "/", getAllUsers );
router.get( "/:idUser", getUserById ); //Parametrizar la ruta: Crear un parametro en la ruta que funje como variable.
router.delete( "/:idUser", deleteUserById);
router.patch( "/:idUser", updateUserById );


//Exportando el router usando el CommonJS
export default router;