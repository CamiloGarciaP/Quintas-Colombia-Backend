import express from 'express';
import { createRealState, deleteRealStatesById, getAllRealStates, getRealStatesById, updateRealStateById } from '../controllers/realState.controller.js';

const router =  express.Router();

router.post ( "/", createRealState);
router.get ( "/", getAllRealStates);
router.get ( "/:idRealState", getRealStatesById);
router.delete ( "/:idRealState", deleteRealStatesById);
router.patch ( "/:idRealState", updateRealStateById)


export default router;
