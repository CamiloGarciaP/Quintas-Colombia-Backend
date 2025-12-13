import express from 'express';
import { createRealState, deleteRealStatesById, getAllRealStates, getRealStatesById, updateRealStateById } from '../controllers/realState.controller.js';
import { authenticationUser } from '../middlewares/authentication.middleware.js';
import { authorizationUser } from '../middlewares/authorization.middlewares.js';

const router =  express.Router();

router.post ( "/",[authenticationUser, authorizationUser], createRealState);
router.get ( "/",[authenticationUser, authorizationUser], getAllRealStates);
router.get ( "/:idRealState",[authenticationUser, authorizationUser], getRealStatesById);
router.delete ( "/:idRealState",[authenticationUser, authorizationUser], deleteRealStatesById);
router.patch ( "/:idRealState",[authenticationUser, authorizationUser], updateRealStateById)


export default router;
