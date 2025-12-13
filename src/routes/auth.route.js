import { Router } from 'express';
import { createUser } from '../controllers/user.controller.js';
import { loginUser, reNewToken } from '../controllers/auth.controller.js';
import { authenticationUser } from '../middlewares/authentication.middleware.js';
import { authorizationUser } from '../middlewares/authorization.middlewares.js';

const router = Router ();

//Define las rutas de acceso a la aplicación
router.post ( '/login', loginUser );
router.post ( '/register', createUser ); //Registro público
router.get ( 
    '/renewtoken',                                  //Ruta para renovar token
    [authenticationUser, authorizationUser],        //Middlewares de Autenticación y autorización
    reNewToken );                                   //Controlador para renovar el token 


export default router;
