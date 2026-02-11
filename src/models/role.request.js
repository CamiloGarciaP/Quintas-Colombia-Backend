import { Schema, model } from "mongoose";

const roleRequestSchema = new Schema({
    // Quien hace la solicitud (ID)
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    // A que rol está solicitando
    requestedRole: {
        type: String,
        required: true,
        enum: ["Propietario"] // Solo se puede solicitar ser propietario
    },
    // Estado de la solicitud
    status: {
        type: String,
        required: true,
        enum: ["Pendiente", "Aprobada", "Rechazada"],
        default: "Pendiente"
    },
    // Mensaje de la solicitud
    message:{
        type: String,
        required: false
    },
    //Quién aprobó o rechazó la solicitud
    reviewedBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
},{
    versionKey: false,
    timestamps: true 
})

const roleRequestModel = model('roleRequests', roleRequestSchema);

export default roleRequestModel;