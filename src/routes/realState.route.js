import express from 'express';
import { createRealState, deleteRealStatesById, getAllRealStates, getRealStatesById, updateRealStateById } from '../controllers/realState.controller.js';
import { authenticationUser } from '../middlewares/authentication.middleware.js';
import { authorizationUser } from '../middlewares/authorization.middlewares.js';
import { ROLES } from '../config/global.config.js';

const router =  express.Router();

router.post ( "/",
    [authenticationUser, authorizationUser([ROLES.PROPIETARIO, ROLES.ADMIN])], 
createRealState);
router.get ( "/",
    [authenticationUser, authorizationUser([ROLES.CLIENTE, ROLES.PROPIETARIO, ROLES.ADMIN])], 
getAllRealStates);
router.get ( "/:idRealState",
    [authenticationUser, authorizationUser([ROLES.CLIENTE, ROLES.PROPIETARIO, ROLES.ADMIN])], 
getRealStatesById);
router.delete ( "/:idRealState",
    [authenticationUser, authorizationUser([ROLES.ADMIN])], 
deleteRealStatesById);
router.patch ( "/:idRealState",
    [authenticationUser, authorizationUser([ROLES.PROPIETARIO, ROLES.ADMIN])], 
updateRealStateById)


export default router;
