import express from 'express';
import { createRoleRequest, getAllRoleRequests, approveRoleRequest, rejectRoleRequest } from '../controllers/role.request.js';
import { authenticationUser } from '../middlewares/authentication.middleware.js';
import { authorizationUser } from '../middlewares/authorization.middlewares.js';

const router = express.Router();

// Cliente autenticado crea solicitud
router.post('/', 
    [authenticationUser], 
    createRoleRequest);

// Admin ve todas las solicitudes
router.get('/', 
    [authenticationUser, authorizationUser], 
    getAllRoleRequests);

// Admin aprueba una solicitud
router.patch('/:idRequest/approve', 
    [authenticationUser, authorizationUser], 
    approveRoleRequest);

// Admin rechaza una solicitud
router.patch('/:idRequest/reject', 
    [authenticationUser, authorizationUser],
    rejectRoleRequest);

export default router;
