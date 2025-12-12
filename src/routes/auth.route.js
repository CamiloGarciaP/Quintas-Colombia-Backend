import { Router } from 'express';
import { createUser } from '../controllers/user.controller.js';
import { loginUser, reNewToken } from '../controllers/auth.controller.js';

const router = Router ();

//Define las rutas de acceso a la aplicación

router.post ( '/login', loginUser );
router.post ( '/register', createUser ); //Registro público
router.get ( '/renewtoken', reNewToken );


export default router;
