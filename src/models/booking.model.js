import { Schema, model } from "mongoose";

const bookingSchema = new Schema({
    realStateId:{
        type: Schema.Types.ObjectId,
        ref: 'real-state',
        required: false,
    },
    clienteId:{
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: false,
    },
    startDate:{
        type:Date,
        required: true,
    },
    endDate:{
        type:Date,
        required: true,
    },
    guests:{
        type:Number,
        min:1,
        required: true,
    },
    nightPrice:{
        type: Number,
        required: true,
        min: 0
    },
    status:{
        type:String,
        enum:[ "Pendiente", "Confirmada","Cancelada","Completada"], 
        default: 'Pendiente',
    }
}, {
    versionKey: false,
    timetamps: true
});


const bookingModel = model(
    'booking',
    bookingSchema
);

export default bookingModel;