//Importando la dependencia 'express' usando CommonJS
import express from 'express';
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from '../controllers/user.controller.js';
import { authenticationUser } from '../middlewares/authentication.middleware.js';
import { authorizationUser } from '../middlewares/authorization.middlewares.js';
const router = express.Router();

//Definición de las rutas (EndPoints)
router.post(  "/",[authenticationUser, authorizationUser], createUser  ); //Registro privado de usuario.
router.get(  "/", [authenticationUser, authorizationUser], getAllUsers );
router.get( "/:idUser", [authenticationUser, authorizationUser], getUserById ); //Parametrizar la ruta: Crear un parametro en la ruta que funje como variable.
router.delete( "/:idUser", [authenticationUser, authorizationUser], deleteUserById);
router.patch( "/:idUser", [authenticationUser, authorizationUser], updateUserById );


//Exportando el router usando el CommonJS
export default router;