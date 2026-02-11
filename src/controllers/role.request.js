import { dbCreateRoleRequest, dbGetAllRoleRequests, dbGetRoleRequestById, dbGetRoleRequestsByUser, dbUpdateRoleRequestById } from '../services/role.request.js';
import userModel from '../models/User.model.js';
import { sendApprovalEmail } from '../helpers/email.helper.js';

// El Cliente crea una solicitud para ser Propietario
const createRoleRequest = async (req, res) => {
    try {
        // Obtener el ID del usuario desde el token (payload)
        const userId = req.payload.id;

        // Verificar si ya tiene una solicitud pendiente
        const existingRequests = await dbGetRoleRequestsByUser(userId);
        const hasPending = existingRequests.some(r => r.status === 'Pendiente');

        if (hasPending) {
            return res.status(409).json({
                msg: 'Ya tienes una solicitud pendiente. Espera a que sea revisada.'
            });
        }

        // Crear la solicitud
        const newRequest = {
            user: userId,
            requestedRole: 'Propietario',
            message: req.body.message || '',
        };

        const requestCreated = await dbCreateRoleRequest(newRequest);

        res.status(201).json({
            msg: 'Solicitud de rol enviada correctamente.',
            roleRequest: requestCreated
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error: No se pudo crear la solicitud de rol.'
        });
    }
}

// El Admin obtiene todas las solicitudes
const getAllRoleRequests = async (req, res) => {
    try {
        const requests = await dbGetAllRoleRequests();
        res.json({ data: requests });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: No se pudieron obtener las solicitudes.' });
    }
}

// El Admin aprueba una solicitud
const approveRoleRequest = async (req, res) => {
    try {
        const idRequest = req.params.idRequest;
        const adminId = req.payload.id;

        // Buscar la solicitud
        const request = await dbGetRoleRequestById(idRequest);
        if (!request) {
            return res.status(404).json({ msg: 'Solicitud no encontrada.' });
        }
        if (request.status !== 'Pendiente') {
            return res.status(400).json({ msg: 'Esta solicitud ya fue procesada.' });
        }

        // Obtener el ID del usuario de forma segura
        const userId = request.user?._id || request.user;
        if (!userId) {
            return res.status(400).json({ msg: 'El usuario asociado a esta solicitud ya no existe.' });
        }

        // Agregar el rol al usuario usando $addToSet (no duplica si ya lo tiene)
        await userModel.findByIdAndUpdate(
            userId,
            { $addToSet: { role: request.requestedRole } }
        );

        // Enviar correo de notificación al usuario
        const updatedRequest = await dbUpdateRoleRequestById(idRequest, {
            status: 'Aprobada',
            reviewedBy: adminId,
        });
        if (request.user && request.user.email){
            sendApprovalEmail(request.user.email, request.user.fullName);
        }

        res.json({
            msg: 'Solicitud aprobada. El usuario ahora tiene el rol de Propietario.',
            roleRequest: updatedRequest
        });
    } catch (error) {
        console.error('Error en approveRoleRequest:', error);
        res.status(500).json({ msg: 'Error al aprobar la solicitud.' });
    }
}

// El Admin rechaza una solicitud
const rejectRoleRequest = async (req, res) => {
    try {
        const idRequest = req.params.idRequest;
        const adminId = req.payload.id;

        const request = await dbGetRoleRequestById(idRequest);
        if (!request) {
            return res.status(404).json({ msg: 'Solicitud no encontrada.' });
        }
        if (request.status !== 'Pendiente') {
            return res.status(400).json({ msg: 'Esta solicitud ya fue procesada.' });
        }

        const updatedRequest = await dbUpdateRoleRequestById(idRequest, {
            status: 'Rechazada',
            reviewedBy: adminId,
        });

        res.json({
            msg: 'Solicitud rechazada.',
            roleRequest: updatedRequest
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al rechazar la solicitud.' });
    }
}

export {
    createRoleRequest,
    getAllRoleRequests,
    approveRoleRequest,
    rejectRoleRequest
}
