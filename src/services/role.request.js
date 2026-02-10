import roleRequestModel from '../models/role.request.js';

// Crear una nueva solicitud de rol
const dbCreateRoleRequest = async (newRequest) => {
    return await roleRequestModel.create(newRequest);
}

// Obtener todas las solicitudes (para el Admin)
const dbGetAllRoleRequests = async () => {
    return await roleRequestModel.find().populate(['user', 'reviewedBy']);
}

// Obtener una solicitud por ID
const dbGetRoleRequestById = async (_id) => {
    return await roleRequestModel.findOne({ _id }).populate(['user', 'reviewedBy']);
}

// Obtener solicitudes de un usuario específico
const dbGetRoleRequestsByUser = async (userId) => {
    return await roleRequestModel.find({ user: userId });
}

// Actualizar una solicitud (para aprobar/rechazar)
const dbUpdateRoleRequestById = async (_id, updateData) => {
    return await roleRequestModel.findByIdAndUpdate(
        _id,
        updateData,
        { new: true }
    );
}

export {
    dbCreateRoleRequest,
    dbGetAllRoleRequests,
    dbGetRoleRequestById,
    dbGetRoleRequestsByUser,
    dbUpdateRoleRequestById
}
